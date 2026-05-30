# Ethos Landing Page — Handoff

## Local Dev
`cd /Users/cbaz/Documents/Claude-Code-Projects/ethos-landing && npm run dev` → localhost:3001

Stack: Next.js 16, React 19, Tailwind CSS 4, TypeScript, static export (`output: 'export'`).

---

## Design Tokens (source of truth: DogEar/DogEar/App/Theme.swift)
| Token | Value | Use |
|---|---|---|
| Background | `#FAFAF8` | Page bg |
| Surface | `#F2EFE8` | Section bg, card bg |
| Primary | `#2D4A3E` | Forest green (icons only, never buttons) |
| Accent | `#C4973B` | Ochre/gold |
| Text | `#1A1A1A` | Body, headings |
| Muted | `#6B6B6B` | Secondary text |
| Divider | `#E8E4DC` | Borders |

**Buttons:** Black (`#1A1A1A`) on light bg, gold (`#C4973B`) on dark bg. Text-only — no icons, no arrows, ever.

---

## File Structure
```
app/
  page.tsx          — all page sections
  globals.css       — tokens, keyframe animations
  layout.tsx        — Plus Jakarta Sans + Cormorant Garamond font load, metadata

components/
  AnimatedPhone.tsx       — hero phone, cycles 4 screens, loading bar overlay
  AnimatedFingerprint.tsx — gold stroke-trace animation, 20 paths, loops
  FingerprintPattern.tsx  — Lucide fingerprint SVG (size, stroke, strokeWidth props)
  TraitBreakdown.tsx      — SVG radar chart, no title, chart only
  EthosLogo.tsx           — unused, safe to delete
  ArchetypePhone.tsx      — unused, safe to delete
  PhoneMockup.tsx         — unused, safe to delete

public/
  screen-analyzing.png   — "Reading your literary DNA" screen (EDITED: static bar removed)
  screen-reveal.png      — Sherlock Holmes archetype reveal (dark) — still shows old name in screenshot
  screen-profile.png     — Fingerprint profile page
  screen-home.png        — Home screen with book recs
  ethos-logo.png         — Full stacked logo (fingerprint + "Ethos" text), used in hero
  ethos-logo-icon.png    — Fingerprint-only crop of the logo (345x230), available if needed
  screen-analyzing-backup.png — original pre-edit backup of screen-analyzing.png
```

---

## Page Sections
1. **Page-load bar** — thin gold progress bar sweeps across the very top on load (`pageLoad` keyframe)
2. **Nav** — FingerprintPattern icon + "Ethos" wordmark left, section links center (hidden on mobile), black "Join the waitlist" button right. Links: The Fingerprint (`#fingerprint`), Trait Breakdown (`#traits`), Features (`#features`), Pricing (`#pricing`)
3. **Hero** — Ethos logo (160px, `-12px` left margin to align with text), badge, headline with Cormorant Garamond italic gold "literary fingerprint.", email capture (Buttondown), AnimatedPhone right
4. **Fingerprint Section** (`#fingerprint`) — dark `#222222` bg, AnimatedFingerprint left (20-path gold stroke trace animation), feature bullets right
5. **Trait Breakdown** (`#traits`) — warm `#F2EFE8` bg, copy left, radar chart right
6. **Features** (`#features`) — 3 cards, "More features on the way" note at bottom
7. **Pricing** (`#pricing`) — single black CTA above two cards, "More features to come" note
8. **Footer** — dark `#1A1A1A`, gold FingerprintPattern icon

---

## AnimatedPhone (hero)
Cycles through 4 screens automatically, 700ms crossfade:
1. `screen-analyzing.png` — 4s, animated gold loading bar at `top: 59.5%` (two-segment, matches where static bar was — static bar was removed from PNG with Pillow)
2. `screen-reveal.png` — 3.5s, crossfade
3. `screen-profile.png` — 4s, anchored top
4. `screen-home.png` — 6.5s, scrolls upward via `phoneScroll` CSS keyframe

No progress indicator dots.

---

## AnimatedFingerprint (dark section)
- 20 SVG paths derived from the Lucide fingerprint icon with extra intermediate arcs added
- Gold (`#C4973B`) stroke, strokeWidth 2, `vectorEffect="non-scaling-stroke"`
- Each path traces itself in using `stroke-dashoffset` animation, staggered 0.1s per path
- Ghost fingerprint at 7% opacity sits behind for shape context
- Holds full for 1.2s, fades out, restarts via React `key` cycle
- Timing: STAGGER 0.1s, DRAW_DUR 0.55s, HOLD_DUR 1.2s, FADE_DUR 0.5s

**Known issue / to do:** The 20-path animation still looks a bit sparse because the Lucide icon only has 9 base paths. For a truly impressive animation, replace with a proper detailed fingerprint SVG (20-30 closely-spaced arcs). Good sources: SVGRepo, Flaticon. The SVG file needs to be available (not a PNG) so paths can be extracted and animated.

---

## Pricing (source of truth: DogEar/design/pricing-and-costs.md)
**Free:** Literary fingerprint, trait breakdown, character archetype, 3 recommendations (frozen at onboarding, never refresh), reading tracker.

**Premium ($4.99/mo or $34.99/yr):** Everything in Free + fresh set of 14 recs every month + recs update when you add 5+ books + rebuild fingerprint as taste evolves + buy individual refreshes for $0.99.

Credit packs (IAP, not shown as a separate tier): 1 refresh $0.99, 5 refreshes $3.99.

---

## Typography Rules
- **Plus Jakarta Sans** — all UI text
- **Cormorant Garamond** — italic gold only for "literary fingerprint." in hero headline. Loaded via `next/font/google` with `variable: "--font-cormorant"`
- Serif font (Playfair Display in Pencil, Cormorant Garamond on web) reserved for literary/archetype moments only

---

## Design Rules (don't break these)
- Buttons: text-only, no icons, no arrows
- Green (`#2D4A3E`) is for icons only — never for buttons
- Archetype character: Sherlock Holmes (not Jane Eyre, not Elizabeth Bennet)
- `screen-reveal.png` still shows "Jane Eyre" in the baked screenshot — needs re-export from Pencil when possible

---

## Sections Still to Build
- **Privacy Policy** — separate page (`/privacy`). Must cover: data collected (email for waitlist, reading history, ratings), how it's used (fingerprint + recommendation generation via Claude/Anthropic), third-party services (Supabase, RevenueCat, Anthropic), data retention, user rights (delete account/data). Note that reading data is sent to Anthropic's API — this needs to be disclosed clearly.
- **Terms and Conditions** — separate page (`/terms`). Must cover: app is in beta/waitlist phase, subscription terms (auto-renewal, cancellation), IAP credit packs are non-refundable, no guarantee of recommendation quality, governing law (Virginia).
- Both pages need a link in the footer. Footer currently has no legal links.
- **FAQ** — accordion style, clean divider lines between items, `+` icon on the right that rotates or toggles. Goes between Pricing and Footer. Draft questions to write: What is a literary fingerprint? How does Ethos choose my recommendations? What is a character archetype? When do my recommendations refresh? Can I rebuild my fingerprint? Is my data private? Will Ethos work without a subscription?

---

## Recent Changes (2026-05-28 session)
- Hero subtext updated: "Most apps track what you've read. Ethos understands how you read — voice, prose style, moral texture — and finds books that actually fit."
- Dark section headline updated: "It's not what you've read. It's how you read."
- Nav links: roll-up hover animation (same as christinabaz.com portfolio) — gray text flips up to reveal gold (#C4973B) on hover, 500ms ease-out
- AnimatedPhone loading bar: moved from `top: 59.5%` to `top: 52%` on the analyzing screen

## Known Issues / To Do
- **Not deployed yet** — site runs at localhost:3001, needs Vercel deploy + custom domain (ethosreads.com or similar)
- **Fingerprint animation**: needs a real detailed SVG source. Current 20-path version is functional but not as dense as a real fingerprint. User likes the Dribbble style (shot 6384142 — sequential arc trace). Find a detailed SVG fingerprint from SVGRepo or similar, share as .svg file.
- `screen-reveal.png` still shows "Jane Eyre" — baked screenshot, would need manual re-export from Pencil (export_nodes consistently fails)
- `ArchetypePhone.tsx`, `PhoneMockup.tsx`, `EthosLogo.tsx` — unused, safe to delete
- Domain `ethosreads.com` — not yet purchased
- Pricing `$4.99/mo` is a placeholder until confirmed in RevenueCat
- Nav links are desktop-only (hidden on mobile) — no mobile nav/hamburger yet
- Logo has `-12px` left margin to compensate for transparent padding in PNG; if logo is replaced this may need adjustment

---

## DogEar UI Pencil File
Path: `/Users/cbaz/Documents/Claude-Code-Projects/DogEar/DogEar UI.pen`

### Screens updated
| Screen | Node ID | What changed |
|---|---|---|
| 05 - Fingerprint Reveal | `FFIxJ` | Archetype name → "Sherlock Holmes", font → Playfair Display |
| 06 - Fingerprint Profile | `P9Uq7b` | Name → "Sherlock Holmes", portrait → reader avatar, "See My Recommendations" button added (node `t6fGDh`) |

### Button: "See My Recommendations"
- Node ID: `t6fGDh`, parent: `DT5YC` (scroll container), position index 1
- Gold fill (`$gold`), dark text, cornerRadius 16, text-only (icons disabled)
