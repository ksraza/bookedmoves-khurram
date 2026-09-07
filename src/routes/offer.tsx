import { createFileRoute, Link } from "@tanstack/react-router";
import { LOGO_URL, LOGO_WHITE_URL } from "@/lib/brand";
import { CtaButton, Eyebrow, Reveal } from "@/components/funnel/ui";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "Choose Your System — BookedMoves Foundation vs Growth" },
      {
        name: "description",
        content:
          "Compare BookedMoves Foundation (£697/mo) and the BookedMoves Growth System (£997/mo) — Meta Ads, lead qualification, tracking, speed-to-lead and follow-up for UK moving companies.",
      },
      { property: "og:title", content: "Choose Your System — BookedMoves" },
      {
        property: "og:description",
        content:
          "Foundation builds the system. Growth builds, optimises and scales it. Compare both plans side by side.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Offer,
});

type CellVal = "yes" | "no" | string;

const ROWS: { label: string; foundation: CellVal; growth: CellVal }[] = [
  { label: "Meta Ads", foundation: "yes", growth: "yes" },
  { label: "Lead Qualification", foundation: "yes", growth: "yes" },
  { label: "Tracking", foundation: "yes", growth: "yes" },
  { label: "Speed-to-Lead", foundation: "yes", growth: "yes" },
  { label: "Follow-Up", foundation: "Basic", growth: "Advanced" },
  { label: "Retargeting", foundation: "no", growth: "yes" },
  { label: "Creative Testing", foundation: "Limited", growth: "Continuous" },
  { label: "Campaign Testing", foundation: "Limited", growth: "Multiple tests" },
  { label: "Optimisation", foundation: "Monthly", growth: "Ongoing" },
  { label: "Scaling", foundation: "no", growth: "yes" },
  { label: "Strategy", foundation: "Basic", growth: "Growth strategy" },
  { label: "Best for", foundation: "Getting started", growth: "Scaling" },
];

function Cell({ v, highlight }: { v: CellVal; highlight?: boolean }) {
  if (v === "yes")
    return <span className={`font-mono text-base ${highlight ? "text-accent-dark" : "text-green"}`}>✓</span>;
  if (v === "no") return <span className="font-mono text-base text-flag">✕</span>;
  return <span className={`font-mono text-[0.72rem] uppercase tracking-[0.06em] ${highlight ? "text-ink" : "text-slate"}`}>{v}</span>;
}

function Offer() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b-2 border-ink bg-paper">
        <div className="shell flex items-center justify-between gap-3 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img src={LOGO_URL} alt="BookedMoves logo" className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16" />
            <span className="truncate font-display text-base uppercase tracking-[0.03em] text-ink sm:text-lg">
              BookedMoves
            </span>
          </Link>
          <CtaButton to="/qualify" className="shrink-0">
            <span className="sm:hidden">Apply Now</span>
            <span className="hidden sm:inline">Apply For The Growth System</span>
          </CtaButton>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-2 border-ink">
        <div className="shell py-14 lg:py-20">
          <Reveal>
            <Eyebrow>The BookedMoves Growth System™</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-[2.4rem] text-ink sm:text-[3.2rem]">
              Two ways to run the system. One goal: booked moves.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
              Both plans include the core acquisition system — Meta Ads, lead qualification,
              tracking, speed-to-lead and follow-up. Growth adds retargeting, continuous testing
              and scaling on top.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-14 lg:py-20">
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-2 border-ink bg-white stamp">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="px-4 py-4 text-left align-bottom sm:px-6">
                      <span className="mono-label text-slate">Offer</span>
                    </th>
                    <th className="border-l-2 border-ink px-4 py-4 text-left align-bottom sm:px-6">
                      <span className="mono-label text-slate">BookedMoves</span>
                      <div className="mt-1 font-display text-xl uppercase text-ink sm:text-2xl">Foundation</div>
                      <div className="mt-2 font-mono text-sm font-semibold text-ink">£697/mo</div>
                      <p className="mt-2 text-[0.8rem] leading-snug text-slate">Build the system.</p>
                    </th>
                    <th className="border-l-2 border-ink bg-accent/10 px-4 py-4 text-left align-bottom sm:px-6">
                      <div className="flex items-center gap-2">
                        <span className="mono-label text-accent-dark">BookedMoves</span>
                        <span className="mono-label border border-accent bg-accent px-2 py-[2px] text-paper">★ Most popular</span>
                      </div>
                      <div className="mt-1 font-display text-xl uppercase text-ink sm:text-2xl">Growth System</div>
                      <div className="mt-2 font-mono text-sm font-semibold text-ink">£997/mo</div>
                      <p className="mt-2 text-[0.8rem] leading-snug text-slate">Build, optimise and scale the system.</p>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dashed divide-line">
                  {ROWS.map((r) => (
                    <tr key={r.label}>
                      <td className="px-4 py-3.5 text-sm font-medium text-ink sm:px-6">{r.label}</td>
                      <td className="border-l border-line px-4 py-3.5 sm:px-6">
                        <Cell v={r.foundation} />
                      </td>
                      <td className="border-l border-line bg-accent/5 px-4 py-3.5 sm:px-6">
                        <Cell v={r.growth} highlight />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-ink bg-paper-2">
                    <td className="px-4 py-4 sm:px-6" />
                    <td className="border-l-2 border-ink px-4 py-4 sm:px-6">
                      <CtaButton href="/plans/bookedmoves-foundation.pdf">Start With Foundation</CtaButton>
                    </td>
                    <td className="border-l-2 border-ink px-4 py-4 sm:px-6">
                      <CtaButton href="/plans/bookedmoves-growth.pdf">Apply For Growth</CtaButton>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl font-mono text-[0.72rem] leading-relaxed text-slate">
              Advertising budget is separate. Recommended minimum starting ad budget: from £50/day
              depending on service area, competition, capacity and growth target. The first 90 days
              are treated as a structured optimisation cycle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="shell py-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_WHITE_URL} alt="BookedMoves logo" className="h-14 w-14 object-contain" />
              <span className="font-display text-lg uppercase tracking-[0.03em] text-paper">BookedMoves</span>
            </Link>
            <CtaButton to="/qualify" variant="onDark">
              Apply For The Growth System
            </CtaButton>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-paper/20 pt-6">
            <img src={LOGO_WHITE_URL} alt="" className="h-6 w-6 object-contain" />
            <p className="font-mono text-[0.68rem] text-paper/70">
              © 2026 BookedMoves. All rights reserved.
            </p>
            <span className="font-mono text-[0.68rem] text-paper/40">·</span>
            <Link to="/privacy" className="font-mono text-[0.68rem] text-paper/70 underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span className="font-mono text-[0.68rem] text-paper/40">·</span>
            <span className="font-mono text-[0.68rem] text-paper/70">Do Not Sell or Share My Personal Information</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
