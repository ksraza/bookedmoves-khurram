import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const leadSchema = z.object({
  company: z.string().min(1).max(200),
  website: z.string().max(300).optional(),
  name: z.string().min(1).max(200),
  email: z.string().email().max(300),
  whatsapp: z.string().min(1).max(50),
  area: z.string().min(1).max(300),
  revenue: z.string().min(1).max(100),
  ads: z.string().min(1).max(100),
});

type Lead = z.infer<typeof leadSchema>;

const NOTIFY_EMAIL = "bookedmoves.com@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

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
    `Website: ${lead.website || "Not provided"}`,
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

async function saveLead(lead: Lead) {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
  if (!url || !key) {
    console.error("Lead save skipped: missing Supabase env");
    return false;
  }
  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      company_name: lead.company,
      website: lead.website || null,
      contact_name: lead.name,
      email: lead.email,
      whatsapp: lead.whatsapp,
      service_area: lead.area,
      revenue: lead.revenue,
      ad_status: lead.ads,
    }),
  });
  if (!res.ok) {
    console.error("Lead save failed", res.status, await res.text());
    return false;
  }
  return true;
}

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        let lead: Lead;
        try {
          lead = leadSchema.parse(await request.json());
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const saved = await saveLead(lead);
        await notifyOwner(lead).catch((e) => console.error("notifyOwner error", e));

        return new Response(JSON.stringify({ ok: true, saved }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      },
    },
  },
});
