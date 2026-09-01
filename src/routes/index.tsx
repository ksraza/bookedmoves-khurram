import { createFileRoute, Link } from "@tanstack/react-router";
import { FOUNDER_URL, LOGO_URL, LOGO_WHITE_URL } from "@/lib/brand";
import { assetUrl } from "@/lib/asset";
import shiftersAllLeads from "@/assets/shifters-all-leads.png.asset.json";
import adDontBookMoves from "@/assets/ad-dont-book-moves-6-aug.png.asset.json";
import {
  Check,
  CtaButton,
  Eyebrow,
  Manifest,
  MANIFEST_ROWS,
  NumBox,
  Reveal,
} from "@/components/funnel/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookedMoves — Meta Ads Growth System For UK Movers" },
      {
        name: "description",
        content:
          "A done-for-you Meta Ads client-acquisition system for UK moving companies: offer, ads, lead qualification, tracking, speed-to-lead and weekly optimisation.",
      },
      { property: "og:title", content: "BookedMoves — Meta Ads Growth System For UK Movers" },
      {
        property: "og:description",
        content:
          "The BookedMoves Growth System™ — a complete acquisition system turning Meta Ads into a predictable pipeline of qualified moving enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const STATS = [
  { v: "£611", l: "Meta ad spend" },
  { v: "35", l: "Exclusive leads generated" },
  { v: "£17.46", l: "Average cost per lead" },
  { v: "90 days", l: "Minimum optimisation cycle" },
];

const LEAKS = [
  { n: "01", t: "Cheap, unqualified enquiries that never answer", c: "−32% booking rate" },
  { n: "02", t: "Leads shopping four quotes at once", c: "−1 in 4 leads" },
  { n: "03", t: "Slow response to new enquiries", c: "−41% contact rate" },
  { n: "04", t: "No visibility into which ads produce real bookings", c: "−38% of volume, unanswered" },
];

const MODULES = [
  {
    n: "01",
    t: "The Moving Offer™",
    d: "A compelling offer built around the customer's real pain point, service area and lead-qualification strategy — not 'we are a professional moving company, contact us today.'",
  },
  {
    n: "02",
    t: "The Qualified Lead Funnel™",
    d: "A conversion path that captures move-from, move-to, move date, property size and service required — so your team gets enquiries it can actually quote, not just contacts.",
  },
  {
    n: "03",
    t: "Meta Ads Acquisition Engine™",
    d: "Facebook & Instagram campaigns built around your service area, ideal customer and capacity — testing hooks, offers, creative angles and audiences, with winners scaled and weak concepts removed.",
  },
  {
    n: "04",
    t: "Speed-to-Lead System™",
    d: "Immediate notification and fast follow-up the moment a lead lands, with SMS/WhatsApp/email automation where appropriate — the faster you respond, the less opportunity you leave for competitors.",
  },
  {
    n: "05",
    t: "Weekly Campaign Optimisation™",
    d: "Every week we review spend, leads, CPL, lead quality, creative and audience performance, and budget allocation — then scale what works and cut what doesn't.",
  },
];

const VALUE_STACK = [
  { n: "01", t: "Moving Offer Strategy", d: "An offer positioned around what movers actually buy." },
  { n: "02", t: "Meta Ads Acquisition Engine", d: "Campaign build, launch and daily management." },
  { n: "03", t: "Creative Testing System", d: "Structured hook, angle and format testing." },
  { n: "04", t: "Qualified Lead Funnel", d: "Move details captured before the enquiry reaches you." },
  { n: "05", t: "Lead Quality Optimisation", d: "Quality tracked to quotes and bookings, not clicks." },
  { n: "06", t: "Speed-to-Lead System", d: "Instant notification and fast first contact." },
  { n: "07", t: "Conversion Tracking", d: "Pixel, events and reporting wired end to end." },
  { n: "08", t: "Weekly Optimisation", d: "Budget, creative and audience reviewed every week." },
  { n: "09", t: "Retargeting", d: "Warm traffic brought back to enquire and book." },
  { n: "10", t: "Growth Strategy", d: "Scaling plan tied to your capacity and service area." },
];

const FIT_YES = [
  "A legitimate operating business",
  "Serves a defined geographic area",
  "Has capacity for additional moves",
  "Can answer new enquiries quickly",
  "Has a sales/quoting process",
  "Willing to invest consistently in customer acquisition",
  "Wants a predictable paid acquisition channel",
];

const FIT_NO = [
  "Looking for £5/day ads with guaranteed results",
  "Wants hundreds of cheap unqualified leads",
  "Wants 'set it and forget it'",
  "Expects overnight results",
  "Just wants Facebook posts boosted",
  "Wants a guaranteed number of booked moves regardless of sales performance",
];

const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Most clients see their first qualified leads within the first 7–14 days of launch. The first 90 days are treated as a structured optimisation cycle: we test offers, audiences and creative, then scale what proves cheapest per qualified lead.",
  },
  {
    q: "Do you work with small moving companies or only big ones?",
    a: "We work with operating moving companies of all sizes — from single-van local movers to multi-branch teams. What matters more than size is capacity: you need to be able to answer new enquiries quickly and quote them properly.",
  },
  {
    q: "How much should I budget for ads?",
    a: "Advertising budget is separate from management. A recommended minimum starting ad budget is from £50/day, depending on your service area, competition, capacity and growth target. We’ll agree a realistic starting budget before anything goes live.",
  },
  {
    q: "Will this growth system really help me get qualified leads in the winter?",
    a: "Yes. Winter demand for moving services naturally dips, but the system is built to keep your pipeline full through targeted offers, retargeting warm traffic, and consistent creative testing. We optimise for qualified enquiries regardless of season, not just peak-month volume.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the short application, then we’ll review your service area, current lead volume and capacity. If it looks like a fit, we’ll book a strategy call, build your custom acquisition plan, and launch the first campaign within days.",
  },
];


function Landing() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b-2 border-ink bg-paper">
        <div className="shell flex items-center justify-between gap-3 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={LOGO_URL}
              alt="BookedMoves logo"
              className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
            />
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
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <Reveal>
            <div className="mt-5 inline-flex items-center gap-2 border-2 border-accent bg-accent/10 px-3 py-1.5">
              <span className="live-dot inline-block h-[7px] w-[7px] rounded-full bg-green" />
              <span className="mono-label text-accent-dark">The BookedMoves Growth System™</span>
            </div>
            <h1 className="mt-6 text-[2.6rem] text-ink sm:text-[3.4rem]">
              The Exact Growth System That Turned £611 Into 35 Qualified Moving Leads At £17.46 Each
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              We build and run the exact acquisition system behind that result (Offer, Meta Ads,
              Lead qualification, Tracking, Speed-to-lead, and Follow-up) for your moving company.
            </p>
            <div className="mt-6 border-l-4 border-accent bg-paper-2 px-5 py-4 text-sm leading-relaxed text-ink">
              No lucky-month guarantees. If a campaign stalls short of your agreed targets, we keep
              optimising at no extra cost until it&apos;s back on track.
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaButton to="/qualify">Apply For The Growth System</CtaButton>
              <CtaButton to="/qualify" variant="ghost">
                See How The System Works
              </CtaButton>
            </div>
            <p className="mt-4 font-mono text-[0.7rem] text-slate">
              No obligation. Takes 2 minutes. · Built exclusively for UK moving companies
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:pt-10">
            <Manifest title="Lead Manifest" rows={MANIFEST_ROWS} total="11 sec" />
          </Reveal>
        </div>
      </section>

      {/* HERO PROOF SHOT */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-10 lg:py-14">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Live account result</Eyebrow>
                <span className="mono-label border border-accent bg-accent/10 px-2 py-1 text-accent-dark">
                  Exported from Meta Ads Manager
                </span>
              </div>
              <h2 className="mt-4 text-2xl text-ink">The numbers behind the headline</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
                This is the actual &quot;Meta Ads Manager&quot; report for the campaign that produced the result
                above — £611.15 in spend, 35 qualified leads and a £17.46 cost per lead.
              </p>
              <div className="mt-6 border-2 border-ink bg-white stamp">
                <img
                  src={assetUrl(adDontBookMoves)}
                  alt="Meta Ads Manager report showing £611.15 spend, 34,974 impressions, 688 clicks, 35 leads and £17.46 cost per lead"
                  width={1280}
                  height={400}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-4 py-4">
                  <p className="font-mono text-[0.72rem] text-slate">
                    £611.15 spend · 34,974 impressions · 688 clicks · 35 leads · £17.46 CPL
                  </p>
                  <p className="font-mono text-[0.72rem] text-slate">
                    Source: Meta Ads Manager, 6 Aug 2026
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <CtaButton to="/qualify">Apply For The System</CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRACKING PHILOSOPHY */}
      <section className="border-b-2 border-ink bg-paper">
        <div className="shell py-10 lg:py-12">
          <Reveal>
            <div className="mx-auto max-w-4xl border-2 border-ink bg-white p-6 stamp lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>How we measure success</Eyebrow>
                <span className="mono-label border border-accent bg-accent/10 px-2 py-1 text-accent-dark">
                  Full funnel tracking
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink">
                We track spend → enquiries → cost per enquiry → qualified enquiries → quotes →
                bookings. Cheap leads that don&apos;t convert get investigated, not celebrated.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell grid grid-cols-2 divide-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="border-b border-line px-2 py-7 lg:border-b-0">
              <div className="font-display text-2xl text-ink">{s.v}</div>
              <div className="mono-label mt-2 text-slate">{s.l}</div>
            </div>
          ))}
          <div className="col-span-2 flex justify-center py-6 lg:col-span-4">
            <CtaButton to="/qualify">Claim Your Slot</CtaButton>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-b-2 border-ink">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[320px_1fr] lg:py-20">
          <Reveal>
            <div className="border-2 border-ink bg-white p-3 stamp">
              <img
                src={FOUNDER_URL}
                alt="Khurram, founder of BookedMoves"
                width={768}
                height={768}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="mono-label mt-3 px-1 pb-1 text-slate">Khurram · Founder</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Who&apos;s running your ads</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">One operator. One industry.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate">
              I&apos;m Khurram, founder of BookedMoves. I run Meta Ads campaigns specifically for
              moving and relocation companies — no juggling a dozen unrelated industries, no junior
              account manager touching your campaigns after the pitch call. Every client gets the
              same person from strategy to daily optimisation: me.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <Check>Meta Ads specialist</Check>
              <Check>Moving-industry focus</Check>
              <Check>Direct access — no account handoffs</Check>
              <Check>Weekly performance reporting</Check>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-2 border-ink bg-paper-2 p-5">
              <CtaButton to="/qualify">Get My Free Audit</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Why most moving companies don&apos;t have a lead problem</Eyebrow>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Where the bookings leak out</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate">
              They have a lead-quality and conversion problem — cheap enquiries that never answer,
              leads shopping four quotes at once, ads that stop working after a few weeks, and no
              structured follow-up.
            </p>
          </Reveal>

          <div className="mt-10 border-2 border-ink bg-white">
            {LEAKS.map((l, i) => (
              <Reveal key={l.n} delay={i * 70}>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-line px-5 py-5 last:border-b-0">
                  <div className="flex items-center gap-4">
                    <NumBox n={l.n} />
                    <span className="font-display text-lg uppercase tracking-[0.02em] text-ink">
                      {l.t}
                    </span>
                  </div>
                  <span className="mono-label border border-flag px-2 py-1 text-flag">{l.c}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Talk To Khurram</CtaButton>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section id="system" className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>The BookedMoves Growth System™</Eyebrow>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Five modules, one system</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate">
              Not generic Meta Ads management — a complete acquisition system built specifically for
              how people actually book a mover: Offer → Meta Ads → Lead Qualification → Tracking →
              Speed-to-Lead → Follow-Up → Optimisation.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {MODULES.map((m, i) => (
              <Reveal key={m.n} delay={i * 60}>
                <div className="h-full border-2 border-ink bg-white p-6 stamp">
                  <div className="flex items-center gap-4">
                    <NumBox n={m.n} />
                    <h3 className="text-xl text-ink">{m.t}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Start My 90 Days</CtaButton>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Who this is for</Eyebrow>
            </div>
            <h2 className="mt-4 text-3xl text-ink">Fit check</h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <div className="grid border-2 border-ink bg-white lg:grid-cols-2">
              <div className="border-b border-dashed border-line p-7 lg:border-b-0 lg:border-r">
                <h3 className="text-xl text-ink">This is for you if</h3>
                <ul className="mt-5 grid gap-3">
                  {FIT_YES.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
              <div className="p-7">
                <h3 className="text-xl text-slate">This isn&apos;t for you if</h3>
                <ul className="mt-5 grid gap-3">
                  {FIT_NO.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-[2px] font-mono text-slate/70">✕</span>
                      <span className="text-slate/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <CtaButton to="/qualify">Book My Strategy Call</CtaButton>
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>What you get</Eyebrow>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">A full acquisition system</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate">
              You&apos;re not buying &lsquo;someone to manage Facebook Ads.&rsquo; You&apos;re
              getting a full acquisition system.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px border-2 border-ink bg-line sm:grid-cols-2">
            {VALUE_STACK.map((v, i) => (
              <Reveal key={v.n} delay={i * 40}>
                <div className="flex h-full items-start gap-4 bg-white px-5 py-5">
                  <NumBox n={v.n} />
                  <div>
                    <div className="font-display text-lg uppercase tracking-[0.02em] text-ink">
                      {v.t}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Get My Growth Plan</CtaButton>
          </div>
        </div>
      </section>

      {/* CASE-STUDY HIGHLIGHTS */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Client results</Eyebrow>
              <span className="mono-label border border-accent bg-accent/10 px-2 py-1 text-accent-dark">
                Verified account data
              </span>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Proof from live accounts</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate">
              These are the actual numbers pulled from Meta Ads Manager — not mockups, not
              cherry-picked best days.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal delay={60}>
              <div className="h-full border-2 border-ink bg-white p-6 stamp">
                <span className="mono-label text-slate">Case study 01</span>
                <div className="mt-4 font-display text-3xl uppercase tracking-[0.02em] text-ink">
                  1,148
                </div>
                <div className="mono-label mt-1 text-accent-dark">Qualified moving leads</div>
                <ul className="mt-5 grid gap-2.5">
                  <Check>£9,925.65 total Meta ad spend</Check>
                  <Check>653,059 impressions · 11,667 clicks</Check>
                  <Check>£8.65 average cost per lead</Check>
                  <Check>30 active campaigns managed</Check>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full border-2 border-ink bg-white p-6 stamp">
                <span className="mono-label text-slate">Case study 02</span>
                <div className="mt-4 font-display text-3xl uppercase tracking-[0.02em] text-ink">
                  35
                </div>
                <div className="mono-label mt-1 text-accent-dark">Leads from £611 spend</div>
                <ul className="mt-5 grid gap-2.5">
                  <Check>£17.46 average cost per lead</Check>
                  <Check>34,974 impressions · 688 clicks</Check>
                  <Check>Complete acquisition system deployed</Check>
                  <Check>Exported live from Meta Ads Manager</Check>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="h-full border-2 border-ink bg-white p-6 stamp">
                <span className="mono-label text-slate">Typical 90-day outcome</span>
                <div className="mt-4 font-display text-3xl uppercase tracking-[0.02em] text-ink">
                  Pipeline
                </div>
                <div className="mono-label mt-1 text-accent-dark">Predictable enquiries</div>
                <ul className="mt-5 grid gap-2.5">
                  <Check>Qualified leads before they reach you</Check>
                  <Check>Speed-to-lead system cuts response time</Check>
                  <Check>Weekly optimisation keeps CPL trending down</Check>
                  <Check>Full-funnel tracking from click to booking</Check>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Apply For The Growth System</CtaButton>
          </div>
        </div>
      </section>


      {/* PROOF SHOT */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Live account proof</Eyebrow>
            </div>
            <h2 className="mt-4 text-3xl text-ink">See the account, not the promise</h2>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <div className="border-2 border-ink bg-white stamp">
              <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3">
                <span className="mono-label text-ink">Meta Ads Manager — Live Account Data</span>
                <span className="eyebrow text-accent-dark">
                  <span className="live-dot inline-block h-[7px] w-[7px] rounded-full bg-green" />
                  Verified
                </span>
              </div>
              <img
                src={assetUrl(shiftersAllLeads)}
                alt="Meta Ads Manager dashboard showing 30 Shifters campaigns, £9,925.65 spend, 653,059 impressions, 11,667 clicks and 1,148 leads"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full border-b border-line object-cover"
              />
              <p className="px-4 py-4 font-mono text-[0.72rem] text-slate">
                30 campaigns, £9,925.65 in Meta ad spend → 653,059 impressions → 11,667 clicks →
                1,148 moving leads → £8.65 average cost per lead — exported straight from the live
                ad account.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <CtaButton to="/qualify">Start With BookedMoves</CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Common questions</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="h-full border-2 border-ink bg-white p-6 stamp">
                  <h3 className="text-lg text-ink">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Apply For The Growth System</CtaButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-12">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE_URL} alt="BookedMoves logo" className="h-16 w-16 object-contain" />
            <span className="font-display text-lg uppercase tracking-[0.03em] text-paper">
              BookedMoves
            </span>
          </div>
          <CtaButton to="/qualify" variant="onDark">
            Apply For The Growth System
          </CtaButton>
        </div>
        <div className="shell flex flex-wrap items-center gap-3 border-t border-paper/20 py-5">
          <img
            src={LOGO_WHITE_URL}
            alt="BookedMoves logo"
            className="h-8 w-8 object-contain opacity-70"
          />
          <p className="font-mono text-[0.7rem] text-paper/60">
            © 2026 BookedMoves. All rights reserved. ·{" "}
            <Link to="/privacy" className="underline hover:text-paper">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link to="/privacy" className="underline hover:text-paper">
              Do Not Sell or Share My Personal Information
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
