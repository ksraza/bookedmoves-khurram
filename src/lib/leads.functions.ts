import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  company: z.string().min(1).max(200),
  website: z.string().min(1).max(300),
  name: z.string().min(1).max(200),
  email: z.string().email().max(300),
  whatsapp: z.string().min(1).max(50),
  area: z.string().min(1).max(300),
  revenue: z.string().min(1).max(100),
  ads: z.string().min(1).max(100),
});

type Lead = z.infer<typeof leadSchema>;

const NOTIFY_EMAIL = "bookedmoves.com@gmail.com";

function buildRawEmail(lead: Lead): string {
  const lines = [
    `To: ${NOTIFY_EMAIL}`,
    `Subject: New BookedMoves lead — ${lead.company}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    "A new application just came in through the /qualify form:",
    "",
    `Moving Company: ${lead.company}`,
    `Website: ${lead.website}`,
    `Contact name: ${lead.name}`,
    `Business Email: ${lead.email}`,
    `Business WhatsApp: ${lead.whatsapp}`,
    `Primary service area: ${lead.area}`,
    `Monthly revenue: ${lead.revenue}`,
    `Current ad status: ${lead.ads}`,
    "",
    "Reply directly to the lead at their business email above.",
  ];
  return Buffer.from(lines.join("\r\n"), "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function notifyOwner(lead: Lead) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
  if (!lovableKey || !gmailKey) {
    console.error("Gmail notification skipped: missing env keys");
    return;
  }
  const res = await fetch(
    "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
      },
      body: JSON.stringify({ raw: buildRawEmail(lead) }),
    },
  );
  if (!res.ok) {
    console.error("Gmail notification failed", res.status, await res.text());
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .insert({
        company_name: data.company,
        website: data.website,
        contact_name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        service_area: data.area,
        revenue: data.revenue,
        ad_status: data.ads,
      })
      .select("id")
      .single();

    if (error) {
      console.error("lead insert failed", error);
      throw new Error("Could not save your application. Please try again.");
    }

    // Fire-and-forget: a failed notification must never lose a saved lead.
    await notifyOwner(data).catch((e) => console.error("notifyOwner error", e));

    return { ok: true as const, id: lead.id };
  });
