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

## Recent Changes (2026-05-30 session)

### Navigation
- Logo: replaced generic SVG fingerprint with `ethos-logo-icon.png` + Cormorant Garamond "Ethos" wordmark, gap tightened to `gap-1`
- Links: bumped to `font-semibold`, extracted to `components/NavLinks.tsx` (client component) with custom smooth scroll (cubic easing, 900ms, 64px nav offset)
- Removed page-load gold progress bar

### Fingerprint Section (dark)
- Replaced `AnimatedFingerprint` with `FingerprintReveal` (`components/FingerprintReveal.tsx`)
- Animation source: `data/fingerprint-scan.json` (Lottie JSON, 19-path fingerprint, 10s draw-in via trim paths)
- Colors changed directly in JSON: `#1b1b1b` → `#C4973B` gold (114 values replaced)
- After animation completes: crossfades to archetype reveal card (Sherlock Holmes, Cormorant Garamond, 3.2s hold), then loops. Fade duration 1.2s.
- Lottie rendered at 2.5x container size, cropped via overflow:hidden to zoom in on the fingerprint
- Section layout: animation centered in left column (removed `lg:justify-start`), text right

### Copy
- All em dashes removed from body copy (replaced with commas, colons, or periods)
- Bullet separators changed from colon to period
- Jo March added to character archetype list alongside Sherlock Holmes, Jay Gatsby, Atticus Finch
- Pricing: "Fresh set of 14 recommendations every month" → "14 recommendations every month, swap out ones that don't fit"
- Features body text: `text-sm` → `text-base`
- "More features on the way": `text-sm` → `text-base font-semibold`

### Layout
- Side padding: `px-6` → `px-16` across all sections
- Hero: `pb-0` → `pb-24`, iPhone nudged right with `lg:translate-x-12`
- Pricing section: `max-w-4xl` → `max-w-6xl` so card text fits on one line
- Fingerprint badge border: `border-[#333]` → `border-[#C4973B]/50`

### Footer
- Logo: `ethos-logo-icon.png` + Cormorant "Ethos" in white, tagline below (`flex-col items-start gap-3`)
- Instagram link added: `@readethos` → `https://instagram.com/readethos`

### SEO / Metadata (`app/layout.tsx`)
- Domain set to `readethos.app`
- Open Graph tags added (title, description, url, siteName, type)
- Twitter card added
- Keywords added
- Em dashes removed from title and description

---

## Notes for Engineer Review

**Architecture decisions to validate:**

1. **Lottie animation approach** — `FingerprintReveal.tsx` imports the Lottie JSON as a module (`data/fingerprint-scan.json`), renders via `lottie-react`, uses overflow/crop to zoom in on the fingerprint within the canvas. Colors were changed directly in the JSON rather than via CSS filter. Review whether the 2.5x scale + overflow crop is the right approach or if modifying the Lottie viewBox would be cleaner.

2. **NavLinks as client component** — `components/NavLinks.tsx` is a `"use client"` component extracted from `page.tsx` (which is a server component) purely to support the `onClick` smooth scroll handlers. Validate this is the right split.

3. **Smooth scroll implementation** — custom `easeInOutCubic` + `requestAnimationFrame` in `NavLinks.tsx`. Confirm this is preferable to native `scroll-behavior: smooth` (which is also set in `globals.css` as a fallback) given Next.js App Router behavior.

4. **Static export compatibility** — stack is Next.js with `output: 'export'`. All components must be compatible with static export (no server-side data fetching, no API routes). `FingerprintReveal` and `NavLinks` are both `"use client"` — confirm no issues.

5. **Unused components** — `ArchetypePhone.tsx`, `PhoneMockup.tsx`, `EthosLogo.tsx` are safe to delete. Not imported anywhere.

---

## Known Issues / To Do
- **Not deployed yet** — deploy to Netlify, connect `readethos.app` domain
- `screen-reveal.png` still shows "Jane Eyre" — needs re-export from Pencil
- `ArchetypePhone.tsx`, `PhoneMockup.tsx`, `EthosLogo.tsx` — unused, safe to delete
- Pricing `$4.99/mo` is a placeholder until confirmed in RevenueCat
- Nav links are desktop-only — no mobile nav/hamburger yet
- Footer logo (`ethos-logo-icon.png`) has transparent PNG padding; compensated with `marginLeft: -6px` — may need adjustment if logo changes
- Instagram account `@readethos` not yet created — handle is available

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
