import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
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
      { title: "BookedMoves — Book More Moves With Meta & TikTok Ads" },
      {
        name: "description",
        content:
          "We run the ads that bring moving companies qualified leads and the follow-up that books them. 30+ leads in 30 days or we work for free.",
      },
      { property: "og:title", content: "BookedMoves — Book More Moves With Meta & TikTok Ads" },
      {
        property: "og:description",
        content:
          "Meta & TikTok ad campaigns for moving companies, plus 2-minute follow-up across every channel.",
      },
    ],
  }),
  component: Landing,
});

const STATS = [
  { v: "£14–17", l: "Cost per lead" },
  { v: "0%", l: "Leads left on read" },
  { v: "4", l: "Channels firing at once" },
  { v: "3+ yrs", l: "Moving-industry ad spend managed" },
];

const LEAKS = [
  { n: "01", t: "Follow-up starts hours after the lead lands", c: "−32% booking rate" },
  { n: "02", t: "Inbound calls ring out during a job", c: "−1 in 4 leads" },
  { n: "03", t: "No SMS or WhatsApp — email only", c: "−41% contact rate" },
  { n: "04", t: "Quoted-but-quiet leads never re-engaged", c: "−38% of volume, unanswered" },
];

const RESULTS = [
  { v: "517", u: "leads", l: "In 30 days, one account" },
  { v: "£14.85", u: "CPL", l: "Blended cost per lead" },
  { v: "2:04", u: "min", l: "Median time to first contact" },
  { v: "38%", u: "lift", l: "Booked jobs vs. prior quarter" },
];

const TEAM = [
  { img: founder, name: "Khurram", role: "Founder / Media Buyer" },
  { img: team1, name: "Ava Whitfield", role: "Creative Strategy" },
  { img: team2, name: "Marcus Oyelaran", role: "Follow-Up Systems" },
  { img: team3, name: "Dana Reyes", role: "Account Reporting" },
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
          <CtaButton to="/qualify">Get Free Audit</CtaButton>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b-2 border-ink">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <Reveal>
            <Eyebrow>Meta &amp; TikTok Ads for Moving Companies</Eyebrow>
            <div className="mt-5 inline-flex items-center gap-2 border-2 border-accent bg-accent/10 px-3 py-1.5">
              <span className="live-dot inline-block h-[7px] w-[7px] rounded-full bg-green" />
              <span className="mono-label text-accent-dark">
                The 30-Day Full Truck Guarantee
              </span>
            </div>
            <h1 className="mt-6 text-[2.6rem] text-ink sm:text-[3.4rem]">
              Keep every truck booked — <br className="hidden sm:block" />
              or we work for free
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              BookedMoves runs the ad campaigns that bring your moving company qualified leads —
              and the follow-up system that makes sure not one of them goes cold.
            </p>
            <div className="mt-6 border-l-4 border-accent bg-paper-2 px-5 py-4 text-sm leading-relaxed text-ink">
              <strong>30+ qualified leads in 30 days</strong>, every one{" "}
              <strong>contacted within 2 minutes</strong> and <strong>fully booked</strong> — or we
              work for free until you are <strong>(up to 30 extra days)</strong>. Your team gets
              every lead the moment it lands — no chasing, no guesswork.
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaButton to="/qualify">Claim The 30-Day Guarantee</CtaButton>
              <CtaButton to="/qualify" variant="ghost">
                See What We Offer
              </CtaButton>
            </div>
            <p className="mt-4 font-mono text-[0.7rem] text-slate">
              No obligation. Takes 2 minutes. · Built for UK &amp; US moving companies
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
              I&apos;m Khurram, founder of BookedMoves. For 3+ years I&apos;ve run Meta and TikTok
              ad accounts exclusively for moving and relocation companies across the UK and US — no
              juggling a dozen unrelated industries, no junior account manager touching your
              campaigns after the pitch call. Every client gets the same person from strategy to
              daily optimization: me.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <Check>Meta &amp; TikTok certified media buyer</Check>
              <Check>Moving &amp; relocation vertical only</Check>
              <Check>UK &amp; US account experience</Check>
              <Check>Direct access — no account handoff</Check>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-2 border-ink bg-paper-2 p-5">
              <StepTag>Step 2 of 8</StepTag>
              <CtaButton to="/qualify">Talk To Me Directly</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>What we offer</Eyebrow>
              <StepTag>Step 3 of 8</StepTag>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl text-ink">Where the bookings leak out</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate">
              This isn&apos;t a generic ad template reused across industries — it&apos;s the same
              two-framework system, tuned for how people actually book a mover.
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

          <Reveal className="mt-14">
            <h3 className="text-2xl text-ink">The BookedMoves System</h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="border-2 border-ink bg-white p-6 stamp">
                <span className="mono-label text-accent-dark">Framework 01</span>
                <h4 className="mt-3 text-xl text-ink">Two-Minute Contact Engine</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  The moment a lead lands, it&apos;s worked — automatically, across every channel a
                  customer actually checks.
                </p>
              </div>
              <div className="border-2 border-ink bg-white p-6 stamp">
                <span className="mono-label text-accent-dark">Framework 02</span>
                <h4 className="mt-3 text-xl text-ink">Full-Truck Demand Ads</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Meta and TikTok creative built around move type, distance and season — so the
                  leads coming in are ones your crews can actually price and load.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <div className="border-2 border-ink bg-ink p-8 stamp">
              <h3 className="text-2xl text-paper">The 30-Day Full Truck Guarantee</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <Check tone="paper">30+ qualified leads inside 30 days</Check>
                <Check tone="paper">Every lead contacted within 2 minutes</Check>
                <Check tone="paper">SMS, WhatsApp, call and email follow-up</Check>
                <Check tone="paper">Creative, testing and daily optimization</Check>
                <Check tone="paper">Weekly reporting you can actually read</Check>
                <Check tone="paper">We work free up to 30 extra days if we miss</Check>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <Eyebrow>Case study · UK removals company, 12-truck fleet</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">30 days, one account, tracked end to end</h2>
            <p className="mono-label mt-3 text-slate">
              Attribution: Meta Ads Manager + in-house CRM, 1 May – 2 Jun
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px border-2 border-ink bg-line sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r, i) => (
              <Reveal key={r.l} delay={i * 70}>
                <div className="h-full bg-white p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-ink">{r.v}</span>
                    <span className="mono-label text-accent-dark">{r.u}</span>
                  </div>
                  <div className="mono-label mt-3 text-slate">{r.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">See More Results Like These</CtaButton>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b-2 border-ink bg-paper-2">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>The people on your account</Eyebrow>
              <StepTag>Step 5 of 8</StepTag>
            </div>
            <h2 className="mt-4 text-3xl text-ink">A small team, all in one lane</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="h-full border-2 border-ink bg-white p-6 text-center">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="mx-auto h-28 w-28 rounded-full border-2 border-ink object-cover"
                  />
                  <div className="mt-4 font-display text-lg uppercase tracking-[0.02em] text-ink">
                    {m.name}
                  </div>
                  <div className="mono-label mt-1 text-slate">{m.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton to="/qualify">Put A Face To Your Ad Account</CtaButton>
          </div>
        </div>
      </section>

      {/* PROOF SHOT */}
      <section className="border-b-2 border-ink">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow>Free audit</Eyebrow>
              <StepTag>Step 7 of 8</StepTag>
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
                517 on-Facebook leads at £14.85 blended CPL across five live campaigns — exported
                straight from the client&apos;s ad account.
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
            <StepTag>Step 8 of 8</StepTag>
          </div>
          <CtaButton to="/qualify" variant="onDark">
            Start With BookedMoves
          </CtaButton>
        </div>
        <div className="shell border-t border-paper/20 py-5">
          <p className="font-mono text-[0.7rem] text-paper/60">
            bookedmoves.com · Meta &amp; TikTok Ads for moving companies
          </p>
        </div>
      </footer>
    </div>
  );
}
