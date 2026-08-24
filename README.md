# BookedMoves Funnel

Build a 2-page marketing funnel for "BookedMoves," a Meta & TikTok ad agency for moving companies. Two routes: "/" (landing page) and "/qualify" (lead intake form). Every CTA button on "/" must link to "/qualify". The back link on "/qualify" must link to "/".

=== DESIGN SYSTEM ===

Typefaces:

- Display (headings): Oswald — uppercase, letter-spacing 0.01–0.03em, tight line-height (1.05)

- Body: Inter

- Mono (labels, stats, eyebrows, form labels, timestamps): IBM Plex Mono

Page "/" palette (light):

- --ink: #0A2C4E (primary text/dark elements)

- --ink-2: #123A63

- --paper: #F7F4EC (page background, cream)

- --paper-2: #EFEADA

- --line: #D8D2BF (borders)

- --accent (labeled "amber" in vars but is green): #2A9654, darker shade #1F7A43

- --green: #3FBE73 (checkmarks, "live" indicators)

- --slate: #5B6478 (secondary text)

- --white: #FFFFFF

Page "/qualify" palette (inverted/dark):

- Background: #0A2C4E (dark navy)

- Text/cards: #F7F4EC (cream)

- Same accent green (#2A9654 / #1F7A43 / #3FBE73) and slate (#5B6478) as page 1

Visual language: hard-edged "dossier/manifest" aesthetic, not soft SaaS. Cards and CTA-adjacent boxes use a solid offset drop shadow (8px 8px 0 in the accent green, no blur) instead of soft box-shadows — like a rubber-stamped card. Borders are 1–2px solid, occasionally dashed as dividers. Labels/eyebrows are small uppercase mono text with letter-spacing ~0.1em and a small square/dot bullet before them. Buttons: solid ink-colored background with cream text, on hover translate up-left 2px and gain a hard offset shadow in the accent color. Numbered items (01, 02, 03...) appear in a bordered square box, monospace. A recurring "manifest" widget mimics a live shipping/lead-tracking log: a card with a header row (title + pulsing green "Live" dot), then rows of timestamp + status pill, bottom row shows a total time stat.

Motion: sections fade/slide in on scroll (IntersectionObserver-style reveal), subtle — no heavy animation. The "Live" dot pulses (opacity 1→0.25 loop). Respect prefers-reduced-motion.

Layout: max content width ~1120px, centered, generous side padding (28px, less on mobile). Fully responsive; stack to single column under ~900px.

=== PAGE 1: "/" (Landing) ===

Nav: logo mark + "BookedMoves" wordmark on the left, "Get Free Audit" button (links to /qualify) on the right.

SECTION — Hero:

- Eyebrow: "Meta & TikTok Ads for Moving Companies"

- Offer badge with a dot: "The 30-Day Full Truck Guarantee"

- H1 (implied from context, write a strong headline about booking more moves)

- Subhead: "BookedMoves runs the ad campaigns that bring your moving company qualified leads — and the follow-up system that makes sure not one of them goes cold."

- Guarantee line: "30+ qualified leads in 30 days, every one contacted within 2 minutes and fully booked — or we work for free until you are (up to 30 extra days). Your team gets every lead the moment it lands — no chasing, no guesswork." (bold the "30+ qualified leads in 30 days", "contacted within 2 minutes", "fully booked", and "(up to 30 extra days)" parts)

- CTA row: primary button "Claim The 30-Day Guarantee" → /qualify; secondary ghost button "See What We Offer" → /qualify

- Fine print: "No obligation. Takes 2 minutes. · Built for UK & US moving companies"

- Right side: the "manifest" live-feed widget titled "Lead Manifest" with a "Live" pulse indicator, showing a sequence of rows:

  - "0:00 — New lead, 3-bed local move" → status "Captured"

  - "0:04 — SMS + WhatsApp sent" → status "Sent"

  - "0:11 — Outbound call placed" → status "Connected"

  - "0:19 — Quote sent by email" → status "Delivered"

  - "Job confirmed for Sat, 14:00" → status "Booked ✓"

  - Footer stat: total elapsed "11 sec"

- Below hero: a 4-stat strip: "£14–17 / Cost per lead", "0% / Leads left on read", "4 / Channels firing at once", "3+ yrs / Moving-industry ad spend managed"

SECTION — Credibility (Step 2 of 8):

- Founder photo/badge

- Eyebrow: "Who's running your ads"

- Bio: "I'm Khurram, founder of BookedMoves. For 3+ years I've run Meta and TikTok ad accounts exclusively for moving and relocation companies across the UK and US — no juggling a dozen unrelated industries, no junior account manager touching your campaigns after the pitch call. Every client gets the same person from strategy to daily optimization: me."

- A row of credential checkmarks

- A step-CTA block tagged "Step 2 of 8" with button "Talk To Me Directly" → /qualify

SECTION — What We Offer (id="offer", Step 3):

- Eyebrow: "What we offer"

- Subhead: "This isn't a generic ad template reused across industries — it's the same two-framework system, tuned for how people actually book a mover."

- A 4-row "leak list" of numbered problems (01–04), each with a title and a red-flag cost stat on the right: "01 → −32% booking rate", "02 → −1 in 4 leads", "03 → −41% contact rate", "04 → −38% of volume, unanswered" (write plausible short problem titles for each, e.g. slow follow-up, missed calls, no SMS/WhatsApp channel, no re-engagement)

- "The BookedMoves System" subsection with two "FRAMEWORK 01" / "FRAMEWORK 02" modules, each with a short description. Framework 01 description: "The moment a lead lands, it's worked — automatically, across every channel a customer actually checks."

- A guarantee callout block with heading and a checklist of what's included (green checkmarks)

SECTION — Case Study / Results:

- An attribution/label line

- A stat grid of results (numbers + units + labels, mono style)

- CTA "See More Results Like These" → /qualify

SECTION — Team (Step 5):

- Team grid of cards, each with a circular photo, name, and role label

- CTA nearby: "Put A Face To Your Ad Account" → /qualify

SECTION — Free Audit / Case Study (Step 7):

- A "proof-shot" screenshot card labeled "Meta Ads Manager — Live Account Data" with a "Verified" live badge in the top bar, caption below the image

- CTA "Get These Results For My Company" → /qualify

FOOTER (Step 8):

- Logo + "Start With BookedMoves" button (on-dark style) → /qualify

- Fine print: "bookedmoves.com · Meta & TikTok Ads for moving companies"

=== PAGE 2: "/qualify" (Free Audit form) ===

Dark theme (navy background, cream text), same fonts/accent as page 1.

Nav: logo + "← Back" link → /

Step indicator: small progress track (2 segments, both marked done) + label "Step 2 of 2"

Left column:

- H1: "Almost there — tell us about your company"

- Lead paragraph: "A few quick details so we can tailor your free lead audit to your market, your current volume, and where your follow-up is likely leaking bookings."

- Guarantee strip (left-bordered blockquote in accent color): "30+ qualified leads in 30 days, every one contacted within 2 minutes and fully booked — or we work for free until you are (up to 30 extra days)."

- Checklist (green checkmarks): "Takes under 2 minutes to complete", "No obligation, no credit card", "Reply within 1 business day"

- Smaller version of the "manifest" live-feed widget (cream card on the dark page), showing a few of the same style rows, e.g. "Lead Manifest #0417", "Live" badge, rows: "0:04 — SMS + WhatsApp sent → Sent", "0:11 — Outbound call placed → Connected", "Job confirmed for Sat, 14:00 → Booked ✓"

Right column — form card:

- Heading: "Get Your Free Audit"

- Subhead: "We'll reply within 1 business day"

- Fields: Company name (text), Company website (url), Full name (text), Your email (email), Current monthly revenue (select: "Under £10,000/mo", "£10,000 – £25,000/mo", "£25,000 – £50,000/mo", "£50,000 – £100,000/mo", "£100,000+/mo")

- Submit button: "Get My Free Audit"

- Fine print under button: "No spam. Your information is never shared."

- On submit: prevent default, hide the form card, show a confirmation card in its place with a green checkmark badge, heading "Request received", text: "Thanks — we're reviewing your details now and will follow up by email within 1 business day with your free lead audit." (front-end only, no backend call needed)

Footer: fine print "bookedmoves.com · Meta & TikTok Ads for moving companies"

=== LINKING REQUIREMENT (critical) ===

Every single button/link styled as a CTA on the "/" page — nav button, hero primary and secondary buttons, "Talk To Me Directly", "See More Results Like These", "Put A Face To Your Ad Account", "Get These Results For My Company", footer "Start With BookedMoves" — must route to "/qualify". The "← Back" link on "/qualify" must route back to "/".

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bookedmoves-mani.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/02c6c33c-a6b8-4595-b168-dcc13037ec4d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
