import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import adsManager from "@/assets/ads-manager.jpg";
import {
  Check,
  CtaButton,
  Eyebrow,
  Manifest,
  MANIFEST_ROWS,
  NumBox,
  Reveal,
  StepTag,
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
          "The Booked Moves Growth System™ — a complete acquisition system turning Meta Ads into a predictable pipeline of qualified moving enquiries.",
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
    t: "Creative Testing System™",
    d: "Practical, low-cost creative concepts tested around how moving customers actually think — pain-based, price-based, problem-based, trust-based, offer-based and proof-based hooks.",
  },
  {
    n: "05",
    t: "Speed-to-Lead System™",
    d: "Immediate notification and fast follow-up the moment a lead lands, with SMS/WhatsApp/email automation where appropriate — the faster you respond, the less opportunity you leave for competitors.",
  },
  {
    n: "06",
    t: "Lead Quality Optimisation™",
    d: "We track spend → enquiries → cost per enquiry → qualified enquiries → quotes → bookings. Cheap leads that don't convert get investigated, not celebrated.",
  },
  {
    n: "07",
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

const YOUR_JOB = [
  "Ad spend",
  "Accurate business information",
  "Competitive pricing",
  "Availability and capacity",
  "Fast lead response",
  "Sales follow-up",
  "Closing the enquiry",
];

const OUR_JOB = [
  "Building the acquisition system",
  "Managing the Meta Ads campaigns",
  "Testing offers, creative and audiences",
  "Optimising lead quality and cost per enquiry",
  "Weekly reporting and strategy",
];

function Landing() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b-2 border-ink bg-paper">
        <div className="shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-ink font-mono text-sm text-paper">
              BM
            </span>
            <span className="font-display text-lg uppercase tracking-[0.03em] text-ink">
              BookedMoves
            </span>
          </Link>
          <CtaButton to="/qualify">Apply For The Growth System</CtaButton>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-2 border-ink">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <Reveal>
            <Eyebrow>Meta Ads for UK Moving Companies</Eyebrow>
            <div className="mt-5 inline-flex items-center gap-2 border-2 border-accent bg-accent/10 px-3 py-1.5">
              <span className="live-dot inline-block h-[7px] w-[7px] rounded-full bg-green" />
              <span className="mono-label text-accent-dark">
                The Booked Moves Growth System™
              </span>
            </div>
            <h1 className="mt-6 text-[2.6rem] text-ink sm:text-[3.4rem]">
              Turn Meta Ads into a predictable pipeline of qualified moving enquiries
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              We build and manage the complete acquisition system — offer, Meta Ads, lead
              qualification, tracking, speed-to-lead and follow-up — so you can focus on quoting and
              booking jobs instead of managing advertising.
            </p>
            <div className="mt-6 border-l-4 border-accent bg-paper-2 px-5 py-4 text-sm leading-relaxed text-ink">
              We don&apos;t promise a number of bookings that depends on factors outside our
              control. If a campaign isn&apos;t producing a{" "}
              <strong>clear path toward your agreed performance targets</strong>, we{" "}
              <strong>keep testing, refining and optimising</strong> the system — not letting it run
              unattended.
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

      {/* STAT STRIP */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell grid grid-cols-2 divide-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="border-b border-line px-2 py-7 lg:border-b-0">
              <div className="font-display text-2xl text-ink">{s.v}</div>
              <div className="mono-label mt-2 text-slate">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-b-2 border-ink">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[320px_1fr] lg:py-20">
          <Reveal>
            <div className="border-2 border-ink bg-white p-3 stamp">
              <img
                src={founder}
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
              <StepTag>Step 2 of 8</StepTag>
              <CtaButton to="/qualify">Talk To Me Directly</CtaButton>
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
              <StepTag>Step 3 of 8</StepTag>
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
        </div>
      </section>

      {/* THE SYSTEM */}
      <section id="system" className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>The Booked Moves Growth System™</Eyebrow>
              <StepTag>Step 4 of 8</StepTag>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Seven modules, one system</h2>
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
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Real campaign result</Eyebrow>
              <StepTag>Step 5 of 8</StepTag>
            </div>
            <h2 className="mt-4 text-3xl text-ink">Spend in, enquiries out</h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <div className="grid gap-px border-2 border-ink bg-line sm:grid-cols-3">
              {[
                { v: "£611", l: "Meta ad spend" },
                { v: "35", l: "Exclusive leads" },
                { v: "£17.46", l: "Average cost per lead" },
              ].map((r) => (
                <div key={r.l} className="bg-white p-6">
                  <div className="font-mono text-3xl font-semibold text-ink">{r.v}</div>
                  <div className="mono-label mt-3 text-slate">{r.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate">
            The focus isn&apos;t vanity metrics — it&apos;s generating genuine moving enquiries from
            paid traffic.
          </p>
          <div className="mt-8">
            <CtaButton to="/qualify">See More Results Like These</CtaButton>
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section id="offer" className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>What you get</Eyebrow>
              <StepTag>Step 6 of 8</StepTag>
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
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Who this is for</Eyebrow>
              <StepTag>Step 7 of 8</StepTag>
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
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>The Booked Moves Growth System™</Eyebrow>
              <StepTag>Step 8 of 8</StepTag>
            </div>
            <h2 className="mt-4 text-3xl text-ink">The offer</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border-2 border-ink bg-white p-7 stamp">
                <div className="font-display text-4xl text-ink">£997/month</div>
                <div className="mono-label mt-2 text-accent-dark">Management</div>
                <p className="mt-5 text-sm leading-relaxed text-slate">
                  Advertising budget is separate.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Recommended starting ad budget:{" "}
                  <strong className="text-ink">£20–£50/day</strong> depending on service area,
                  competition, capacity and growth target.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full border-2 border-ink bg-ink p-7 stamp">
                <span className="mono-label text-paper/70">Minimum commitment</span>
                <div className="mt-3 font-display text-4xl text-paper">90 days</div>
                <p className="mt-5 text-sm leading-relaxed text-paper/80">
                  The first phase establishes data, creative winners, audience signals, lead quality
                  and conversion patterns — then we optimise around what the data tells us.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <Eyebrow>Risk reversal</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">The Optimisation Commitment™</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate">
              We won&apos;t promise an arbitrary number of bookings that depends on factors outside
              our control. If the campaign isn&apos;t producing a clear path toward the agreed
              performance targets, we continue testing, refining and optimising the acquisition
              system rather than simply letting an underperforming campaign run.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <div className="grid border-2 border-ink bg-white lg:grid-cols-2">
              <div className="border-b border-dashed border-line p-7 lg:border-b-0 lg:border-r">
                <h3 className="text-xl text-ink">You&apos;re responsible for</h3>
                <ul className="mt-5 grid gap-3">
                  {YOUR_JOB.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-[7px] inline-block h-[6px] w-[6px] shrink-0 bg-ink" />
                      <span className="text-slate">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7">
                <h3 className="text-xl text-ink">We&apos;re responsible for</h3>
                <ul className="mt-5 grid gap-3">
                  {OUR_JOB.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <CtaButton to="/qualify">Apply For The Growth System</CtaButton>
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <Eyebrow>Your account, run by one person</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">No account handoffs</h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <div className="flex max-w-xl flex-wrap items-center gap-6 border-2 border-ink bg-white p-7 stamp">
              <img
                src={founder}
                alt="Khurram Shahzad Raza, Meta Ads Manager and founder of BookedMoves"
                width={640}
                height={640}
                loading="lazy"
                className="h-28 w-28 rounded-full border-2 border-ink object-cover"
              />
              <div>
                <div className="font-display text-xl uppercase tracking-[0.02em] text-ink">
                  Khurram Shahzad Raza
                </div>
                <div className="mono-label mt-2 text-slate">
                  Meta Ads Manager &amp; Founder, BookedMoves
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <CtaButton to="/qualify">Put A Face To Your Ad Account</CtaButton>
          </div>
        </div>
      </section>

      {/* PROOF SHOT */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Live account proof</Eyebrow>
              <StepTag>Step 9 of 10</StepTag>
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
                src={adsManager}
                alt="Meta Ads Manager dashboard showing moving company campaign results"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full border-b border-line object-cover"
              />
              <p className="px-4 py-4 font-mono text-[0.72rem] text-slate">
                £611 in Meta ad spend → 35 exclusive moving leads → £17.46 average cost per lead —
                exported straight from the client&apos;s ad account.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <CtaButton to="/qualify">Get These Results For My Company</CtaButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-12">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border-2 border-paper font-mono text-sm text-paper">
              BM
            </span>
            <span className="font-display text-lg uppercase tracking-[0.03em] text-paper">
              BookedMoves
            </span>
            <StepTag>Step 10 of 10</StepTag>
          </div>
          <CtaButton to="/qualify" variant="onDark">
            Apply For The Growth System
          </CtaButton>
        </div>
        <div className="shell border-t border-paper/20 py-5">
          <p className="font-mono text-[0.7rem] text-paper/60">
            bookedmoves.com · Meta Ads for UK moving companies
          </p>
        </div>
      </footer>
    </div>
  );
}
