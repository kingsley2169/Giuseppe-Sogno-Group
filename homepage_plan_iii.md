# Giuseppe Sogno Group — Homepage Plan III

A third direction. **Same palette. Different posture from both v1 and v2.**
Header and footer remain unchanged.

---

## Where v3 sits between v1 and v2

| | v1 | v2 | v3 |
|---|---|---|---|
| Personality | Conventional corporate | Quiet luxury / editorial | Confident operator — "we do a lot, here's all of it" |
| Above the fold | 1 rotating image | 1 static image | **All 4 businesses visible at once** (mosaic) |
| Whitespace | Medium | Heavy | Medium — denser than v2, calmer than v1 |
| Typography | Sans, standard sizes | Serif display, large | Sans for structure, serif only for hero statement |
| Motion | Carousel autoplay | None | Subtle hover tilts on tiles; no autoplay |
| Reading mode | Top-to-bottom marketing flow | Linear editorial | Scannable — visitors can jump to what matters |

**Why this direction:** v1 hides everything behind a carousel. v2 reveals things one at a time down a long scroll. v3 says _"here's the whole operation on one screen"_ — useful for enterprise buyers who want to size you up in 3 seconds, not read a magazine.

**Same colors** — `#202A34`, `#A28A62`, zinc neutrals, white. No new tokens.

---

## Section order

### 1. Sticky header — unchanged
Same component as v1 and v2.

### 2. Hero + mosaic — combined, ~100vh
The hero _is_ the business overview. No separate "hero then grid" — they happen together.

**Layout (desktop):** a 12-column, 8-row bento grid filling the viewport below the header.

- **Statement tile** (spans ~5 cols × 4 rows, top-left) — solid `#202A34`, no image. Contains:
  - Small `#A28A62` eyebrow: "Indonesia ↔ Nigeria"
  - Serif headline (Fraunces, 4–6xl): _"Four businesses, one operator, across two markets."_
  - One paragraph, zinc-300.
  - Inline link: "About the group →" (gold underline on hover).
- **Edible Fat tile** (~4 cols × 4 rows, top-right) — photo, dark overlay, bottom-left caption (eyebrow + division name + small arrow).
- **Tobacco tile** (~3 cols × 4 rows, far right) — photo tile, same caption treatment.
- **Logistics tile** (~4 cols × 4 rows, bottom-middle) — photo tile.
- **Corporate Services tile** (~3 cols × 4 rows, bottom-right) — photo tile.
- **Contact tile** (~5 cols × 4 rows, bottom-left) — solid `#A28A62` or white, contains a one-liner + email (gold, underlined) + phone.

Each photo tile is clickable (navigates to its division page). Tiles have thin 1px `white/10` gutters between them so the mosaic reads as one surface.

**Mobile:** mosaic collapses into a single column — statement tile first (full-bleed dark), then 4 photo tiles stacked (each ~40vh), then contact tile last.

**Why a bento:** it front-loads everything. Enterprise buyers hate scrolling to find out what you actually do. This answers all their questions above the fold, and the tiles double as nav to the division pages.

### 3. Corridor band — slim, dark
Thin full-width band (~8rem tall) in `#202A34`, sitting between the hero mosaic and the operating facts section.

Centered content:
- Horizontal rule with two country labels at each end: `INDONESIA` —————— `NIGERIA` (small tracking-wide caps, zinc-300, gold line between).
- One small line of text below: _"A single operator across the corridor."_

Acts as a visual anchor for the brand story. Reuses the geographic motif that makes the group distinct.

### 4. Operating facts — dense white strip
Replaces v1's "Why work with us" and v2's "By the numbers." One horizontal row, white background, medium vertical padding (~6rem).

Four short items, each a small gold eyebrow + 1-line fact in `#202A34` sans:

- **Ports** — Tanjung Priok, Surabaya, Lagos, Onne
- **Products** — RBD palm oil (CP6/8/10), Indonesian tobacco
- **Services** — Shipping, clearing, company setup
- **Presence** — Offices in Jakarta and Lagos

No icons. No images. Just facts laid out like a capabilities sheet. This is where a procurement lead scans "can these people actually do what we need."

If any of these facts are inaccurate, edit before shipping — the section only works if the specifics are real.

### 5. Deep-dive rows — one per division, but condensed
Four rows, stacked full-width, each ~50vh tall (shorter than v2's 70vh ledger).

Each row: small photo on one side (~40%), text on other (~60%). Inside text:
- `01.` gold sans numeral (smaller than v2's serif treatment).
- Division name in sans-serif 2xl–3xl.
- 2 sentences, zinc-700.
- Three spec bullets (e.g. for Edible Fat: "Grades CP6, CP8, CP10 · FOB Indonesia · CFR Nigerian ports").
- "Read more →" gold link.

Shorter than v2's ledger — closer to a product-page row than a magazine spread. Dense but readable.

### 6. About teaser — single horizontal band
Full-width, white background, ~12rem tall. Three columns on desktop:
- Left: gold eyebrow "About" + serif headline _"Built between two countries."_
- Middle: 2 short paragraphs.
- Right: small square image (Jakarta or Lagos office/landscape).

More compact than v2's asymmetric block. Reads as a summary, not a feature.

### 7. Contact band — dark, inline with footer
Full-width `#202A34` band just above the footer. Three columns:
- Left: serif _"Enterprise inquiry?"_ + one paragraph
- Middle: email (gold, underlined, large) + phone
- Right: Jakarta address + Lagos address, zinc-300

The contact is already present in the hero mosaic's contact tile — this band is the second, fuller placement for visitors who scroll to the bottom.

### 8. Footer — unchanged
Same component as v1 and v2.

---

## Typography direction

Mostly sans (Geist), serif only for the hero statement and a couple of headlines. This is the key differentiation from v2.

- **Hero statement tile** — serif (Fraunces), 4–6xl.
- **About headline** — serif, 3–4xl.
- **Everything else** — sans. Division names, section headers, captions, facts. Medium weight, not bold.
- **Numerals** — sans, tabular figures where possible (prices, grades, port names).

Sans-dominant communicates "operational" rather than v2's "curated." Matches the bento mosaic's utility-first feel.

---

## Motion direction

Restrained but slightly warmer than v2:

- Hero mosaic tiles: subtle scale/brightness change on hover (1.01x, brightness 1.05). No scale on click.
- Gold underline animates in on link hover.
- No scroll-jacking, no parallax, no autoplay.
- Optional: very subtle ken burns (3-4% zoom over 20s) on the hero mosaic photo tiles. Toggle off if it feels busy.

---

## Image guidance

Same 6-image quota as v2, reassigned:

- **Hero mosaic** — 4 photo tiles (one per division). Landscape orientation, cropped tight to fit tile aspect ratios. Color-grade consistently.
- **Deep-dive rows** — reuse the 4 hero tile images at smaller size, _or_ pick 4 second angles. Reusing is fine if the first set is strong.
- **About teaser** — 1 square-cropped image (office, cityscape, or landscape).

Total: **5 unique images** if you reuse, **8 images** if you use second angles in the deep-dive. Start with reuse; only add if the page feels thin.

Same sourcing notes as v1 and v2 — Unsplash, Pexels, Indonesia origin, WebP.

---

## What gets reused vs. rebuilt from v1/v2

**Reused as-is:**
- `site-header.tsx`, `site-footer.tsx`
- Fraunces font wiring from v2 (`app/layout.tsx`)
- Color tokens

**New for v3:**
- `hero-mosaic.tsx` — the combined hero + bento. Biggest build.
- `corridor-band.tsx` — thin brand band.
- `operating-facts.tsx` — dense white strip.
- `division-rows.tsx` — condensed ledger rows (shorter than v2's).
- `about-teaser-band.tsx` — 3-column horizontal variant.
- `contact-band-dark.tsx` — dark contact band.

**Not needed for v3:**
- `hero-split.tsx`, `hero-carousel.tsx` — v3 has its own hero.
- `manifesto-strip.tsx` — v3 doesn't have a breath section (density is the point).
- `stats-band.tsx` — replaced by the facts strip.

Clear naming keeps v1/v2/v3 components side-by-side so the client can mix sections if they can't decide between directions.

---

## Build order

1. **Hero mosaic** — the whole design stands on this. Build it, view it at desktop + mobile + tablet, sit with it before touching anything else. If the bento doesn't work on mobile (collapses poorly, tiles lose meaning), v3 is dead and we go back to v1 or v2.
2. **Corridor band + operating facts** — fast, typographic. Sets the tone between hero and deep dives.
3. **Division rows** — the workhorse. Get one right, duplicate.
4. **About + contact band** — finish up. Both are short and typographic.

If the client approves the hero mosaic direction, everything else lines up behind it quickly. If they don't, scrap v3 — the mosaic _is_ v3's argument.

---

## Decision framing for the client

Three clear choices:

- **v1** — familiar corporate. Safe, easy to understand, looks like competitors.
- **v2** — quiet editorial. Sophisticated, slower, signals "premium."
- **v3** — dense operator. Confident, scannable, signals "we run a lot."

Ask the client: _which of these three does a procurement lead at a Nigerian FMCG see and immediately want to email?_ That's the right answer for this business. Don't let them pick on aesthetics alone.
