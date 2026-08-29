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

    return { ok: true as const, id: lead.id };
  });
