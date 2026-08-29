import { LOGO_WHITE_URL } from "@/lib/brand";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Manifest } from "@/components/funnel/ui";

export const Route = createFileRoute("/qualify")({
  head: () => ({
    meta: [
      { title: "Apply For The Growth System — BookedMoves" },
      {
        name: "description",
        content:
          "Apply for the Booked Moves Growth System. Tell us about your UK moving company and we'll confirm fit and tailor the plan within one business day.",
      },
      { property: "og:title", content: "Apply For The Growth System — BookedMoves" },
      {
        property: "og:description",
        content: "A two-minute application. We reply within one business day with next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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



const ADS_STATUS = [
  "No, starting fresh",
  "Yes, but underperforming",
  "Yes, and it's working — want to scale",
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
            <img src={LOGO_WHITE_URL} alt="BookedMoves logo" className="h-16 w-16 object-contain" />
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
            Almost there — tell us about your moving company
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/75">
            Give us the few details below, and we&apos;ll tell you, honestly, if BookedMoves is the right
            fit. So instead of a generic pitch, you get a plan built around your exact service area,
            your current lead volume, and the specific point where your bookings are slipping through.
          </p>

          <blockquote className="mt-7 border-l-4 border-accent bg-paper/5 px-5 py-4 text-sm leading-relaxed text-paper/90">
            If BookedMoves Growth System&trade; stalls short of your agreed targets, we keep optimising
            completely FREE — until it&apos;s back on track. No lucky-month guarantees, just continued work
            until it performs.
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
                { time: "0:04", label: "Instant notification sent", status: "Notified" },
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
              <h2 className="mt-5 text-2xl text-ink">Application received</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Thanks — we&apos;re reviewing your details now and will follow up by email within 1
                business day to confirm next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border-2 border-ink bg-paper p-8 stamp">
              <h2 className="text-2xl text-ink">Get Your Growth Plan: BookedMoves System&trade;</h2>
              <p className="mono-label mt-2 text-slate">We&apos;ll reply within 1 business day</p>

              <div className="mt-7 grid gap-5">
                <label className="block">
                  <span className="mono-label text-slate">Moving Company name</span>
                  <input name="company" type="text" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Moving Company website</span>
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
                  <span className="mono-label text-slate">Business Email</span>
                  <input name="email" type="email" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">Business Whatsapp</span>
                  <input
                    name="whatsapp"
                    type="tel"
                    placeholder="+44..."
                    required
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mono-label text-slate">
                    Primary service area / postcode(s) covered
                  </span>
                  <input name="area" type="text" required className={fieldClass} />
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
                <label className="block">
                  <span className="mono-label text-slate">
                    Are you currently running Meta/Facebook ads?
                  </span>
                  <select name="ads" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {ADS_STATUS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <p className="mt-5 font-mono text-[0.68rem] text-slate">
                All questions are mandatory.
              </p>

              <button
                type="submit"
                className="mt-7 w-full border-2 border-ink bg-ink px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_var(--accent)]"
              >
                Yes, Build My System
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
            bookedmoves.com · Meta Ads for UK moving companies
          </p>
        </div>
      </footer>
    </div>
  );
}
