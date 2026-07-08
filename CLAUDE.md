# Ethos Landing Page — Claude Code Guidelines

Marketing site for Ethos, an iOS app that builds a "literary fingerprint"
from your reading history and recommends books. The iOS app and backend
live in a separate repo (christinabazydlo/dog-ear-ios, local path
`/Users/cbaz/Documents/Claude-Code-Projects/DogEar`). The canonical
cross-project to-do list is `NEXT-SESSION-HANDOFF.md` in that repo.

## Deployment

- Netlify, connected to this GitHub repo. Every push to `main` deploys.
- Static export: `next.config.ts` sets `output: "export"`, publish dir
  is `out`. Do not add server-side features (API routes, middleware,
  server actions); they will break the static build.
- `netlify.toml` at the root pins build command and publish dir. Do not
  remove it.
- Production domain: `readethos.app` (registered at Squarespace Domains).
- Before pushing, verify with `npm run build`, not just the dev server.

## Copy Rules (Christina's decisions, do not relitigate)

- Never name Claude or Anthropic in marketing copy. The literary
  fingerprint is the engine; AI is machinery, mentioned generically if
  at all. Vendor names appear ONLY in policy contexts: the privacy FAQ
  answer, `/privacy`, and `/terms`.
- Never use em dashes anywhere. Use commas or parentheses.
- No emojis anywhere.
- Buttons are text-only. No icons, no arrows, ever.
- Ethos is also a reading tracker, not just a recommendation app.
  Free tier copy should reflect both.
- Tagline: "Recommendations built on your literary fingerprint."

## Design Tokens

- Background paper: #FAFAF8
- Surface: #F2EFE8
- Text primary / charcoal: #1A1A1A
- Text secondary: #6B6B6B
- Gold accent: #D4AF37
- Divider: #E8E4DC
- Body font: Plus Jakarta Sans (`var(--font-jakarta)`)
- Wordmark font: Cormorant (`var(--font-cormorant)`)

## Email Capture

- Buttondown, username `ethos`. Form posts to
  `buttondown.com/api/emails/embed-subscribe/ethos` in `app/page.tsx`.
  Do not change the endpoint without updating the Buttondown account.

## Legal Pages

- `/privacy` and `/terms` are custom-written (not generated). They
  include AI processing disclosures. Known non-blocking gaps are listed
  in NEXT-SESSION-HANDOFF.md (GDPR legal bases, CCPA section,
  severability/indemnification, Apple EULA minimums). Patch the custom
  pages; do not regenerate from a template.
