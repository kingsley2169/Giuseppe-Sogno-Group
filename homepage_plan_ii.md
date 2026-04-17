# Giuseppe Sogno Group — Homepage Plan II

A second direction for the homepage. **Same palette, different posture.**
Header and footer remain unchanged from v1.

---

## What's different from v1

V1 was conventional corporate: full-bleed hero carousel, intro band, 2×2 grid, value-prop strip, about teaser, CTA. It works, but it reads like every other B2B site.

V2 leans editorial — closer to a luxury architecture firm, a private bank, or a high-end magazine. Key shifts:

| | v1 | v2 |
|---|---|---|
| Hero | Auto-rotating carousel, 4 slides | Static split hero — one large photo, one large statement |
| Layout | Centered, symmetrical | Asymmetric, off-grid, generous negative space |
| Businesses | 2×2 card grid | Vertical "ledger" — one row per division, alternating image side |
| Photography | Hero-driven, lots of imagery | Restrained — fewer, larger, more deliberate images |
| Typography | Standard sans-serif weights | Mixed: serif display headlines + sans body, much larger type |
| Motion | Carousel autoplay | None on load — only subtle scroll-reveal |

**Same colors** — `#202A34` (deep navy), `#A28A62` (warm gold), zinc neutrals, white. No new palette tokens.

---

## Section order

### 1. Sticky header — unchanged
Same component, same behavior (transparent → `#202A34` after scroll).

### 2. Static split hero — ~90vh
Two columns on desktop, stacked on mobile. **No carousel, no autoplay.**

- **Left column (60% width)** — single, deliberate photograph. Indonesia landscape (oil palm aerial, port, or Jakarta skyline at blue hour). One image, picked to be iconic. Sits flush to the page edge.
- **Right column (40% width)** — solid `#202A34` background. Inside:
  - Small `#A28A62` eyebrow: "Indonesia ↔ Nigeria"
  - Large serif headline (4–6xl, tight leading): _"A Giuseppe Sogno company, operating between two markets."_
  - Short paragraph (3 lines max) in zinc-300 type.
  - Two inline links (no buttons): "Our businesses →" and "Talk to us →" — gold underline on hover.

**Why static?** A single, well-shot image holds attention longer than four rotating ones. It also lets the typography do work that a carousel always undercuts.

### 3. Quiet manifesto strip — full-width, white background
A single line of large serif type, centered, lots of vertical padding (~12rem top/bottom).

> _"Bulk supply, freight, and local setup — handled by people on the ground in both countries."_

That's the whole section. No image, no buttons. Acts as a breath between hero and divisions.

### 4. Business divisions — vertical "ledger" layout
Replaces the 2×2 grid. Four full-width rows, stacked. Each row alternates image left/right.

Each row contains:
- **Image side (50%)** — full-bleed photograph for that division, ~70vh tall.
- **Text side (50%)** — `#202A34` text on white background. Inside:
  - Large numeral (`01.`, `02.`, etc.) in `#A28A62`, serif, large.
  - Division name in serif display type.
  - 2–3 sentence description in zinc-700 sans.
  - One link: "Read more →" in `#A28A62`, underlined on hover.

Order: Edible Fat (01), Tobacco (02), Logistics & Freight (03), Corporate Services (04).

Thin `#A28A62` hairline divider between rows.

**Why this layout?** It gives each business its own moment instead of cramming all four into one viewport. Reads like a portfolio rather than a menu.

### 5. By the numbers — dark band
Replaces v1's "Why work with us" icon strip. Full-width band in `#202A34`.
 
Three large stats, displayed as oversized serif numerals with small caption text below:

- **2** countries, end-to-end coverage
- **4** business divisions under one operator
- **10+ yrs** of corridor experience _(adjust to actual figure)_

Centered, generous spacing. No icons. Numerals in `#A28A62`, captions in zinc-300.

If real numbers aren't available, drop this section — don't fake stats.

### 6. About teaser — asymmetric
One-third / two-thirds split. White background.

- **Left third** — small `#A28A62` eyebrow ("About"), serif headline, one short paragraph, gold-underlined "About the group →" link.
- **Right two-thirds** — single tall portrait-orientation image (Indonesia landscape, Jakarta interior, or representative office shot). Image bleeds to right page edge.

Generous vertical padding (~10rem). No card framing — just type meeting image.

### 7. Contact CTA — minimal, full-width
Replaces v1's button-heavy CTA band. Single full-width section, white background.

- Centered, very large serif headline: _"Enterprise inquiry?"_
- Below: a single line — `hello@example.com` in `#A28A62`, large type, underlined.
- Below that, smaller: phone number and Jakarta address, zinc-600.

No buttons. The email _is_ the CTA. Reads as confident rather than salesy.

### 8. Footer — unchanged
Same component as v1.

---

## Typography direction

V2 only works if the type does work. Concrete picks:

- **Display / headlines** — a transitional or modern serif. Free options: **Cormorant Garamond**, **Fraunces**, or **Newsreader** (all on Google Fonts). Use weights 400–600, never bold.
- **Body / UI** — keep the current sans (Geist or whatever's wired). Don't change two things at once.
- **Numerals (ledger numbers, stats)** — same serif as headlines, oldstyle figures if available.
- **Sizes are deliberately large** — hero headline 6–7xl on desktop, ledger headlines 4–5xl, manifesto strip 3–4xl. Generous line-height for serif (1.1–1.2 for display, 1.5 for body).

---

## Motion direction

Almost none.

- No autoplay, no carousels, no parallax.
- Subtle fade-up on ledger rows as they enter viewport (200–400ms, ease-out, single trigger). That's it.
- Hover: links get the gold underline. No card lifts, no scale transforms.

Sophistication reads as restraint — most sites overdo motion.

---

## Image guidance

Fewer images than v1, but each one is bigger and has to carry more weight.

- **Hero** — 1 image. Pick the best one available. Aerial palm plantation or blue-hour port shot recommended.
- **Ledger** — 4 images, one per division. Landscape orientation, color-graded together.
- **About teaser** — 1 portrait-orientation image.

Total: **6 images** (vs. v1's 9+). Easier to source well, faster to load, more impactful.

Sources, optimization, and licensing notes from `homepage_plan.md` still apply — Unsplash and Pexels first, WebP, Next `<Image>`, check Indonesia origin.

---

## What gets reused vs. rebuilt

**Reused as-is:**
- `components/site-header.tsx`
- Footer (when built)
- Color tokens (`#202A34`, `#A28A62`)
- shadcn primitives already installed

**Rebuilt:**
- `hero-carousel.tsx` → `hero-split.tsx` (static, no embla)
- `business-grid.tsx` → `business-ledger.tsx`
- `intro-band.tsx` → `manifesto-strip.tsx` (or repurpose intro-band)
- `why-us.tsx` → `stats-band.tsx` (or drop entirely)
- `about-teaser.tsx` → asymmetric variant
- `contact-cta-band.tsx` → minimal email-led variant

**New dependency:** Google Fonts serif (Cormorant / Fraunces / Newsreader) wired into `app/layout.tsx`. Drop `embla-carousel-react` and `embla-carousel-autoplay` if v2 ships without v1's carousel anywhere.

---

## Build order

1. Wire the serif font and confirm it reads well at large sizes against `#202A34` and white.
2. Build the static split hero — biggest visual decision, set the tone first.
3. Ledger layout — the workhorse section. Get one row right, then duplicate.
4. Manifesto strip, stats band, about teaser, contact CTA — all typographic, fast once the type system is set.

If the client likes v2's direction but not every section, sections are independently swappable with v1 equivalents — same colors, same header/footer, no cascading rework.
