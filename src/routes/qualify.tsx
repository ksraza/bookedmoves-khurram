import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Manifest } from "@/components/funnel/ui";

export const Route = createFileRoute("/qualify")({
  head: () => ({
    meta: [
      { title: "Get Your Free Lead Audit — BookedMoves" },
      {
        name: "description",
        content:
          "Tell us about your moving company and get a free lead audit tailored to your market, volume and follow-up gaps.",
      },
      { property: "og:title", content: "Get Your Free Lead Audit — BookedMoves" },
      {
        property: "og:description",
        content: "A two-minute form. We reply within one business day with your free lead audit.",
      },
    ],
  }),
  component: Qualify,
});

const REVENUE = [
  "Under £10,000/mo",
  "£10,000 – £25,000/mo",
  "£25,000 – £50,000/mo",
  "£50,000 – £100,000/mo",
  "£100,000+/mo",
];

const fieldClass =
  "mt-2 w-full border-2 border-ink bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-accent";

function Qualify() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <header className="border-b-2 border-paper/25">
        <div className="shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border-2 border-paper font-mono text-sm text-paper">
              BM
            </span>
            <span className="font-display text-lg uppercase tracking-[0.03em] text-paper">
              BookedMoves
            </span>
          </Link>
          <Link
            to="/"
            className="mono-label border-2 border-paper/40 px-4 py-2 text-paper transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_0_var(--green)]"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="shell py-6">
        <div className="flex items-center gap-3">
          <span className="h-[6px] w-16 bg-green" />
          <span className="h-[6px] w-16 bg-green" />
          <span className="mono-label text-paper/70">Step 2 of 2</span>
        </div>
      </div>

      <main className="shell grid gap-12 pb-20 pt-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="text-[2.2rem] text-paper sm:text-[2.8rem]">
            Almost there — tell us about your company
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/75">
            A few quick details so we can tailor your free lead audit to your market, your current
            volume, and where your follow-up is likely leaking bookings.
          </p>

          <blockquote className="mt-7 border-l-4 border-accent bg-paper/5 px-5 py-4 text-sm leading-relaxed text-paper/90">
            30+ qualified leads in 30 days, every one contacted within 2 minutes and fully booked —
            or we work for free until you are (up to 30 extra days).
          </blockquote>

          <ul className="mt-7 grid gap-3">
            <Check tone="paper">Takes under 2 minutes to complete</Check>
            <Check tone="paper">No obligation, no credit card</Check>
            <Check tone="paper">Reply within 1 business day</Check>
          </ul>

          <div className="mt-10 max-w-md">
            <Manifest
              title="Lead Manifest #0417"
              compact
              rows={[
                { time: "0:04", label: "SMS + WhatsApp sent", status: "Sent" },
                { time: "0:11", label: "Outbound call placed", status: "Connected" },
                { time: "", label: "Job confirmed for Sat, 14:00", status: "Booked ✓" },
              ]}
            />
          </div>
        </div>

        <div>
          {sent ? (
            <div className="border-2 border-ink bg-paper p-8 stamp">
              <span className="flex h-12 w-12 items-center justify-center border-2 border-accent bg-accent/10 font-mono text-xl text-accent-dark">
                ✓
              </span>
              <h2 className="mt-5 text-2xl text-ink">Request received</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Thanks — we&apos;re reviewing your details now and will follow up by email within 1
                business day with your free lead audit.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-2 border-ink bg-paper p-8 stamp">
              <h2 className="text-2xl text-ink">Get Your Free Audit</h2>
              <p className="mono-label mt-2 text-slate">We&apos;ll reply within 1 business day</p>

              <div className="mt-7 grid gap-5">
                <label className="block">
                  <span className="mono-label text-slate">Company name</span>
                  <input name="company" type="text" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Company website</span>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://"
                    required
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Full name</span>
                  <input name="name" type="text" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Your email</span>
                  <input name="email" type="email" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Current monthly revenue</span>
                  <select name="revenue" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {REVENUE.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 w-full border-2 border-ink bg-ink px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_var(--accent)]"
              >
                Get My Free Audit
              </button>
              <p className="mt-3 text-center font-mono text-[0.68rem] text-slate">
                No spam. Your information is never shared.
              </p>
            </form>
          )}
        </div>
      </main>

      <footer className="border-t border-paper/20">
        <div className="shell py-6">
          <p className="font-mono text-[0.7rem] text-paper/60">
            bookedmoves.com · Meta &amp; TikTok Ads for moving companies
          </p>
        </div>
      </footer>
    </div>
  );
}
