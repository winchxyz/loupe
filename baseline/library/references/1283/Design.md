# Caldera — Style Reference
> Risograph zine on warm concrete

**Theme:** light

Caldera is a brutalist editorial crypto brand: a warm off-white concrete canvas, near-black condensed display type that stretches up to 189px, and a single incandescent orange that does all the interactive work. The visual language borrows from 90s zine culture and risograph printing — halftone dot patterns bridge orange into violet across hero panels and card thumbnails, giving a flat printed feel rather than a glossy product UI. Surfaces stay low and matte: cream cards float on a warm stone canvas, borders are hairline black rather than shadows, and corners are aggressively rounded (40px is the house radius, not 8px). Color is rationed — most of the interface is monochrome black-on-cream, and orange appears only where a user must act, a stat must shout, or a card must signal brand membership.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Concrete Canvas | `#e2e2df` | `--color-concrete-canvas` | Page background — warm light-gray stone, the dominant surface the whole site sits on |
| Cream Card | `#f7f6f2` | `--color-cream-card` | Card surfaces, stat panels, elevated content blocks — sits one step brighter than the canvas |
| Ink | `#070607` | `--color-ink` | Headlines, body text, hairline borders, and the structural outlines that give the layout its editorial frame |
| Pure Black | `#000000` | `--color-pure-black` | Icon strokes, dense border work, and the deepest text where Ink isn't dark enough |
| Paper White | `#ffffff` | `--color-paper-white` | White text on orange/dark surfaces and SVG mask fills — not a background |
| Citra Orange | `#fc5000` | `--color-citra-orange` | Primary action — filled buttons, the CTA pill, active links, stat-card fills, and brand accents; the only saturated warm in the system |
| Ion Violet | `#524ae9` | `--color-ion-violet` | Decorative surface accent — appears in halftone gradient art and one hero card, never as a button or text |
| Hazard Yellow | `#f5f28e` | `--color-hazard-yellow` | Rare highlight surface for emphasis blocks and tag backgrounds — high contrast against both Ink and Citra Orange |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### PP Neue Corp Compact — Display and headline — the entire brand voice. Used for hero, section titles, stat numbers, and blog post titles. The extreme condensed ultrabold cut, running up to 189px on the hero with line-height under 1.0, is the signature: a single headline takes the full width and reads like a magazine cover rather than a SaaS hero. · `--font-pp-neue-corp-compact`
- **Substitute:** Oswald (weight 700), Anton, or Bebas Neue for condensed ultrabold substitute; or stretch-compress Inter Black to 75% width
- **Weights:** 800 (Ultrabold)
- **Sizes:** 26, 32, 40, 48, 56, 64, 80, 96, 189px
- **Line height:** 0.94–1.20 (tight, especially at large sizes)
- **Letter spacing:** 0.02em
- **OpenType features:** `"ss06", "ss10", "blwf", "cv03", "cv04", "cv09", "cv11"`
- **Role:** Display and headline — the entire brand voice. Used for hero, section titles, stat numbers, and blog post titles. The extreme condensed ultrabold cut, running up to 189px on the hero with line-height under 1.0, is the signature: a single headline takes the full width and reads like a magazine cover rather than a SaaS hero.

### DM Sans — Body, subheadings, nav, buttons, and form labels. Medium weight (not regular) is deliberate — it matches the visual density of the ultrabold headlines and prevents body copy from looking anaemic next to them. Pairs with the display face as the quieter half of the system. · `--font-dm-sans`
- **Substitute:** Inter (weight 500) or General Sans Medium
- **Weights:** 500
- **Sizes:** 14, 16, 18, 30px
- **Line height:** 1.11–1.55
- **Role:** Body, subheadings, nav, buttons, and form labels. Medium weight (not regular) is deliberate — it matches the visual density of the ultrabold headlines and prevents body copy from looking anaemic next to them. Pairs with the display face as the quieter half of the system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.55 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.25 | — | `--text-subheading` |
| heading-sm | 26px | 1.1 | 0.52px | `--text-heading-sm` |
| heading | 40px | 1 | 0.8px | `--text-heading` |
| heading-lg | 64px | 0.95 | 1.28px | `--text-heading-lg` |
| display | 96px | 0.94 | 1.92px | `--text-display` |
| display-xl | 189px | 0.94 | 3.78px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 92 | 92px | `--spacing-92` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 20px |
| cards | 40px |
| pills | 800px |
| inputs | 100px |
| buttons | 40px |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 10px

## Components

### Citra Primary Button
**Role:** Filled CTA — the only chromatic button in the system

Background #fc5000, text #070607, DM Sans 16px weight 500, padding 12px 24px, border-radius 40px. Used for 'Get Started', 'Explore Chains', and any irreversible forward action. No border, no shadow — the color IS the weight.

### Ghost Secondary Button
**Role:** Secondary action

Transparent background, 1px border #070607, text #070607, DM Sans 16px weight 500, padding 12px 24px, border-radius 40px. Used for 'Book A Call' and 'Explore The Ecosystem'. Same geometry as the primary button — the only difference is fill.

### Stat Card
**Role:** Metric display card

Background #fc5000, no border, border-radius 40px, internal padding 20–24px. Label in DM Sans 14px white; value in PP Neue Corp Compact Ultrabold 40px white (or larger). Four-up grid on the metrics section.

### Blog Card
**Role:** Editorial content card

Background #f7f6f2, border-radius 40px, no shadow, hairline 1px border in #070607 at 20% opacity or none. Thumbnail fills top portion at 16:9 with halftone orange art. Category tag (Announcement/Integration/Product) uses Hazard Yellow #f5f28 background, DM Sans 12px, border-radius 20px. Title in PP Neue Corp Compact 26px, line-height 1.1.

### Hero Halftone Panel
**Role:** Decorative brand surface

Large rounded rectangle (border-radius 40px+) filling roughly 60% of hero width, height ~500px. Contains a halftone dot pattern gradient from #fc5000 (orange) to #524ae9 (violet), created by a dot mask over a gradient. The panel bleeds into the canvas without a visible border.

### Navigation Bar
**Role:** Top-level navigation

Floating pill nav (border-radius 800px), white/cream background #f7f6f2, centered horizontally, padding 8px 16px. Logo (Caldera mark in orange) on left, nav links in DM Sans 14px #070607, social icons + Get Started pill button on right. Sits above the hero on the warm stone canvas.

### Nav Pill Button
**Role:** Primary action in nav

Background #fc5000, text #070607, DM Sans 14px weight 500, padding 8px 16px, border-radius 800px (full pill). Mirrors the primary button at nav scale.

### Category Tag
**Role:** Content classification badge

Background #f5f28 (Hazard Yellow), text #070607, DM Sans 12px weight 500, padding 3px 8px, border-radius 20px. Sits above blog card titles.

### Logo Strip Card
**Role:** Partner/ecosystem logo display

White #ffffff background, border-radius 40px, full-width horizontal strip with logos evenly distributed and separated by hairline vertical 1px #e2e2df dividers. Each logo sits in a padded cell.

### Text Input
**Role:** Form input

Background #ffffff, 1px border #070607, border-radius 100px (fully pill), padding 12px 20px, DM Sans 16px. Placeholder in muted gray. Used sparingly — the brand is not form-heavy.

## Do's and Don'ts

### Do
- Use PP Neue Corp Compact Ultrabold for every headline and stat number; never substitute a regular weight display font
- Set headlines with line-height 0.94–1.0 and letter-spacing 0.02em — the tight, tracked-out condensed block is the brand's voice
- Use #fc5000 only for filled primary actions, active states, and stat-card fills; treat it as rationed currency
- Default all cards and buttons to a 40px border-radius; reserve 800px (full pill) for nav buttons and links
- Build depth with surface color shifts (stone → cream → orange) rather than drop shadows
- Keep the page background at #e2e2df and card surfaces at #f7f6f2 — the warm-stone/cream pairing is the canvas the system depends on
- Use DM Sans at weight 500 for body, never weight 400 — the regular weight looks anaemic against the ultrabold display

### Don't
- Don't introduce new chromatic accents — the system is monochromatic plus Citra Orange; Ion Violet is decoration-only
- Don't use box-shadows or elevation glows; the design is flat and printed
- Don't use 8px or 12px border-radii for cards or buttons — 40px is the house radius and anything sharper looks like a different product
- Don't use pure white #ffffff as a page background; the canvas must be warm stone #e2e2df
- Don't set headlines in a humanist or geometric sans (Inter, Helvetica, etc.); the condensed ultrabold display is non-negotiable
- Don't use letter-spacing 0 on display sizes — the 0.02em tracking on PP Neue Corp is what gives the type its editorial cadence
- Don't apply #fc5000 to body text, icons, or borders; it only functions as a filled surface or a focused link

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Concrete Canvas | `#e2e2df` | Default page background — warm stone-gray, the floor everything sits on |
| 2 | Cream Card | `#f7f6f2` | Cards, nav, metric panels — the standard elevated surface |
| 3 | Citra Surface | `#fc5000` | Brand-bearing surface for stats and feature cards that need to shout |
| 4 | Ion Surface | `#524ae9` | Decorative art surface for halftone hero panels |

## Elevation

The system is deliberately shadowless. All visual depth comes from surface color shifts (stone → cream → orange) and from border-radius generosity, not from drop shadows. This keeps the printed/zine aesthetic intact and prevents the warm palette from feeling glossy or skeuomorphic.

## Imagery

No photography. Imagery is built from halftone dot patterns applied to a two-stop gradient (Citra Orange #fc5000 → Ion Violet #524ae9), creating a risograph-print feel. Blog thumbnails and the hero panel use this treatment. Logos in the ecosystem strip are flat monochrome wordmarks on white. Icons are simple line/fill marks in #070607. The overall image-to-text ratio is very low — the type and colored blocks ARE the imagery.

## Layout

Full-bleed sections on the Concrete Canvas (#e2e2df), content centered within a 1280px max-width. Hero is asymmetric: oversized headline left-aligned taking ~40% width, halftone gradient panel right taking ~55% width, with overlapping geometry (a secondary card bleeds from below the main panel). Sections stack vertically with 80px gaps, each section a distinct horizontal band. Stats section is a centered 4-column grid of equal-width orange cards. Blog/announcement section is a horizontal-scroll carousel of equal-width cards. Navigation is a floating centered pill bar, not a full-width bar — the nav detaches from the page edges to reinforce the editorial feel. Footer follows the same canvas color, dense link grid.

## Agent Prompt Guide

**Quick Color Reference**
- text: #070607
- background: #e2e2df
- card surface: #f7f6f2
- border: #070607
- accent: #fc5000
- primary action: #fc5000 (filled action)
- decorative: #524ae9

**Example Component Prompts**
1. Create a Primary Action Button: #fc5000 background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.
2. Build a stats row: four equal cards, each #fc5000 background, 40px radius, 24px padding. Label in DM Sans 14px white at top-left, value in PP Neue Corp Compact Ultrabold 40px white below. 16px gap between cards.
3. Build a blog card: #f7f6f2 background, 40px radius, 24px padding. Top 60% is a 16:9 halftone gradient thumbnail. Below: a Hazard Yellow tag (#f5f28e, DM Sans 12px, 3px 8px padding, 20px radius), then a title in PP Neue Corp Compact Ultrabold 26px #070607, then a date in DM Sans 14px muted.
4. Build the nav bar: floating pill, centered, #f7f6f2 background, 800px radius, 8px 16px padding. Orange Caldera mark left, DM Sans 14px #070607 link list center, Ghost social icons + a #fc5000 pill button (800px radius) right.
5. Build a text input: #ffffff background, 1px solid #070607 border, 100px radius, 12px 20px padding, DM Sans 16px #070607. No focus glow — on focus, border thickens to 2px.

## Similar Brands

- **Arbitrum** — Same crypto-rollup category, same monochrome-with-single-vivid-accent approach, and similarly large condensed display headlines
- **Optimism** — Warm pink/coral accent against near-black text, editorial type weight, and a printed/zine-influenced visual identity
- **Coinbase Brand Pages** — Bold oversized headlines, single saturated brand color against neutral canvas, and pill-shaped primary CTAs
- **Layer3** — Halftone / dotted decorative surfaces and the risograph-print aesthetic on a warm light background

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-concrete-canvas: #e2e2df;
  --color-cream-card: #f7f6f2;
  --color-ink: #070607;
  --color-pure-black: #000000;
  --color-paper-white: #ffffff;
  --color-citra-orange: #fc5000;
  --color-ion-violet: #524ae9;
  --color-hazard-yellow: #f5f28e;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-neue-corp-compact: 'PP Neue Corp Compact', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.55;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.52px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: 0.8px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: 1.28px;
  --text-display: 96px;
  --leading-display: 0.94;
  --tracking-display: 1.92px;
  --text-display-xl: 189px;
  --leading-display-xl: 0.94;
  --tracking-display-xl: 3.78px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-92: 92px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;
  --radius-full: 100px;
  --radius-full-2: 800px;

  /* Named Radii */
  --radius-tags: 20px;
  --radius-cards: 40px;
  --radius-pills: 800px;
  --radius-inputs: 100px;
  --radius-buttons: 40px;

  /* Surfaces */
  --surface-concrete-canvas: #e2e2df;
  --surface-cream-card: #f7f6f2;
  --surface-citra-surface: #fc5000;
  --surface-ion-surface: #524ae9;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-concrete-canvas: #e2e2df;
  --color-cream-card: #f7f6f2;
  --color-ink: #070607;
  --color-pure-black: #000000;
  --color-paper-white: #ffffff;
  --color-citra-orange: #fc5000;
  --color-ion-violet: #524ae9;
  --color-hazard-yellow: #f5f28e;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-neue-corp-compact: 'PP Neue Corp Compact', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.55;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.52px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: 0.8px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: 1.28px;
  --text-display: 96px;
  --leading-display: 0.94;
  --tracking-display: 1.92px;
  --text-display-xl: 189px;
  --leading-display-xl: 0.94;
  --tracking-display-xl: 3.78px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-92: 92px;

  /* Border Radius */
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;
  --radius-full: 100px;
  --radius-full-2: 800px;
}
```