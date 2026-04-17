# Giuseppe Sogno Group — Homepage Plan

## On the carousel question

**Recommendation: yes, but use it as the hero only — not as the whole homepage.**

The client asked for a slideshow of images from each business. A full-bleed hero carousel (4 slides, one per business, autoplaying every 5–6 seconds) fits that ask and gives each division equal visual weight from the first screen. Below the hero, use a static grid — carousels are weak at holding attention and their content is usually skipped.

Avoid: mid-page carousels, testimonial carousels, image carousels that require manual clicks to see key information. If it's important, don't hide it behind a slide.

---

## Homepage section order

### 1. Sticky header (already built)
- Logo, nav (Home, Businesses dropdown with the 4 divisions, About Us, Contact).
- Keep `#202A34` at rest, `#A28A62` after scroll — matches the "simple but sophisticated" brief.

### 2. Hero carousel — full-bleed, ~80–90vh
- 4 slides, one per business division.
- Each slide: large Indonesia-based photograph, dark overlay (20–40% black) for text contrast, short overlay content:
  - Division name (e.g. "Edible Fat")
  - One-line value prop (e.g. "RBD palm oil — CP6, CP8, CP10 — bulk supply from Indonesia to Nigeria")
  - Secondary button linking to that division's page
- Dots/arrows to navigate manually. Autoplay with pause-on-hover.

### 3. Intro band — short, single paragraph
- One heading: "A Giuseppe Sogno company operating between Indonesia and Nigeria."
- Two sentences of context: what the group does, who it serves (enterprises).
- No image — keep it clean and typographic. This is where "sophisticated" lives.

### 4. Business divisions grid — 2×2 on desktop, stacked on mobile
- Four cards, each with:
  - Hero image (Indonesia-based, relevant to the business)
  - Division name + 1–2 sentence description
  - "Learn more →" link to the division's dedicated page
- Order: Edible Fat, Tobacco, Logistics & Freight, Corporate Services.
- Keep card styling consistent and restrained — thin borders, generous padding, no gradients.

### 5. "Why work with us" strip — three short value props
- Horizontal row of 3 items with small icons (lucide-react has these — e.g. `Ship`, `Globe`, `ShieldCheck`):
  - Indonesia-Nigeria trade corridor expertise
  - Bulk supply and shipping at scale
  - Local setup, permits, and compliance handled end-to-end
- No photography here — icons + text only.

### 6. About us teaser
- Small section before contact, per the client's note.
- Short paragraph + a single portrait-style photo (office, team, or a representative Indonesia landscape).
- Button: "About the group →" linking to `/about`.

### 7. Contact CTA band
- Full-width band in `#202A34` (matches header).
- Headline: "Enterprise inquiry? Let's talk."
- Two buttons: "Contact us" (primary, `#A28A62`) and email/phone link.

### 8. Footer
- Three columns: Businesses (4 links), Company (About, Contact), Legal.
- Copyright, address (if available), small logo.

---

## Image guidance

### Tone
Go for wide, atmospheric, editorial photography — not stock-y close-ups of handshakes. The client said "sophisticated," so: muted color grading, natural light, a sense of scale. Avoid anything that looks like a generic corporate stock shoot.

### Per-section image brief

**Hero carousel (4 images)**
1. **Edible Fat** — aerial or wide shot of an Indonesian oil palm plantation. Rows of palms, morning light.
2. **Tobacco** — tobacco leaves drying in an Indonesian barn, or a tobacco field at golden hour. Avoid cigarette imagery.
3. **Logistics & Freight** — container port at Tanjung Priok (Jakarta) or Surabaya; cargo ships, cranes, containers. Blue-hour shots work well.
4. **Corporate Services** — Jakarta skyline at dusk, or a minimalist business-district exterior. Should feel like "getting set up in Indonesia."

**Division grid (same 4 images at smaller size, or variants)** — can reuse the hero images or pick a second angle for each.

**About us teaser (1 image)** — either Indonesia landscape (Bali/Java countryside), a Jakarta skyline, or an understated office/team shot.

### Where to find them

Use these in order — the first two cover ~95% of needs for free.

1. **Unsplash** — https://unsplash.com
   Free, high-res, commercial use allowed, no attribution required (but appreciated).
   Search terms to try:
   - "oil palm plantation indonesia"
   - "palm oil sumatra"
   - "tobacco field indonesia" / "tobacco drying barn"
   - "tanjung priok" / "jakarta port" / "container ship indonesia"
   - "jakarta skyline" / "jakarta cbd"
   - "sumatra aerial" / "kalimantan landscape"

2. **Pexels** — https://pexels.com
   Same license terms as Unsplash. Try the same queries; results differ.

3. **Pixabay** — https://pixabay.com
   Good fallback for niche terms (e.g. specific Indonesian port shots).

4. **Wikimedia Commons** — https://commons.wikimedia.org
   Useful for documentary/editorial shots of specific places (e.g. Tanjung Priok). Check each image's license — most are CC-BY or public domain, but attribution is often required.

5. **Paid options** (only if free sources don't match the quality bar)
   - Adobe Stock (adobestock.com) — strong "corporate Indonesia" catalog
   - Getty Images (gettyimages.com) — editorial/documentary
   - Shutterstock — broad but generic

### Before you ship any image

- **Check the license** — even on free sites, some images are marked editorial-only.
- **Confirm Indonesia origin** — many palm-oil results are Malaysian. Read the description/location.
- **Optimize** — export as WebP, keep heroes under ~300KB each. Use Next.js `<Image>` for automatic responsive sizes.
- **Consistency** — once you pick 4 hero images, color-grade them in the same direction (e.g. all slightly warm/muted) so the carousel feels like one series, not four random photos.

---

## Build order suggestion

If you want to prototype this quickly:

1. Hero carousel first — it's the biggest visual decision; nail it before building smaller pieces. Use `embla-carousel-react` (which shadcn wraps as the `carousel` component — run `npx shadcn@latest add carousel`).
2. Division grid second — reuses hero images, same typography.
3. Everything else is typographic and can be styled in an afternoon once the image language is set.
