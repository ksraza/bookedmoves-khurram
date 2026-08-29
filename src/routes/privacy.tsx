import { LOGO_URL } from "@/lib/brand";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BookedMoves" },
      {
        name: "description",
        content:
          "Privacy Policy for BookedMoves. Learn how we collect, use and protect your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — BookedMoves" },
      {
        property: "og:description",
        content:
          "Privacy Policy for BookedMoves. Learn how we collect, use and protect your personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b-2 border-ink bg-paper">
        <div className="shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="BookedMoves logo" className="h-16 w-16 object-contain" />
            <span className="font-display text-lg uppercase tracking-[0.03em] text-ink">
              BookedMoves
            </span>
          </Link>
          <Link
            to="/"
            className="mono-label border-2 border-ink px-4 py-2 text-ink transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_0_var(--accent)]"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="shell py-12 lg:py-16">
        <div className="mx-auto max-w-3xl border-2 border-ink bg-white p-8 stamp">
          <h1 className="text-3xl text-ink">Privacy Policy</h1>
          <p className="mono-label mt-2 text-slate">Last updated: 29 August 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate">
            <p>
              This Privacy Policy describes how BookedMoves (“we”, “us” or “our”) collects, uses,
              and protects your personal information when you visit our website or submit an
              application through our lead form.
            </p>

            <h2 className="font-display text-lg text-ink">1. Information we collect</h2>
            <p>
              When you complete our application form, we collect your company name, website,
              contact name, business email, WhatsApp number, primary service area, current monthly
              revenue, and current advertising status. We also collect standard technical data such
              as your IP address and browser type via our hosting and analytics providers.
            </p>

            <h2 className="font-display text-lg text-ink">2. How we use your information</h2>
            <p>
              We use your information to evaluate whether BookedMoves is a good fit for your
              business, to respond to your enquiry, to send you relevant follow-up communications,
              and to improve our marketing and services. We do not sell your personal information.
            </p>

            <h2 className="font-display text-lg text-ink">3. How we share your information</h2>
            <p>
              We share your information only with service providers who help us operate our
              business (for example, email and database services). All providers are contractually
              bound to keep your data secure and to use it only for the services they provide to us.
            </p>

            <h2 className="font-display text-lg text-ink">4. Your rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To
              exercise these rights, email us at the address shown on our website.
            </p>

            <h2 className="font-display text-lg text-ink">
              5. Do Not Sell or Share My Personal Information
            </h2>
            <p>
              BookedMoves does not sell or share your personal information with third parties for
              monetary or other valuable consideration. If you have any questions about how we
              handle your data, please contact us.
            </p>

            <h2 className="font-display text-lg text-ink">6. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              posted on this page with the updated date.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-ink">
        <div className="shell border-t border-paper/20 py-5">
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
