# customer.io — Style Reference
> Technical field notebook. A deep-teal ink drawing on warm-white paper, pinned by a single green glow.

**Theme:** light

Customer.io speaks in the voice of a technical field guide: a near-white canvas, a single deep-teal ink that reads almost black, hairline borders, and corner radii so small they look measured with calipers. The brand voice is quiet, precise, and editorial — type is large but tracked positively, spacing is comfortable but not airy, and the only color that ever shouts is a single acid-green halo behind the primary button. Accents are not decorative: rust, violet, and teal appear only as inline text highlights to colorize concepts, never as fills or backgrounds. The system feels less like a SaaS dashboard and more like a well-typeset operations manual where every glyph earns its place.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Abyss Teal | `#00262b` | `--color-abyss-teal` | Primary text, filled CTA background, navigation ink — reads as near-black with a cool teal undertone, giving the brand its signature dark identity without resorting to true black |
| Botanical Teal | `#0b363b` | `--color-botanical-teal` | Hairline borders, secondary text, dividers, icon strokes — the most-used color in the system; defines the structural linework of the entire interface |
| Sulfur Glow | `#abffae` | `--color-sulfur-glow` | Green action color for filled buttons, selected navigation states, and focused conversion moments |
| Rust Oxide | `#8b3911` | `--color-rust-oxide` | Inline emphasis text and decorative strokes — appears only inside running prose to highlight one concept word, never as a fill |
| Cobalt Indigo | `#0a3890` | `--color-cobalt-indigo` | Inline emphasis text and decorative strokes — paired with Rust Oxide to colorize key terms in editorial copy |
| Patina Teal | `#437278` | `--color-patina-teal` | Decorative SVG fills, secondary icon tint, mid-tone link accent |
| Signal Blue | `#006af2` | `--color-signal-blue` | Product dashboard chart strokes, data-viz accent |
| Chalk | `#ffffff` | `--color-chalk` | Page background, card surface, reversed text on dark fills |
| Bone | `#fafafa` | `--color-bone` | Slightly recessed surface, button hover ground, modal scrim base |
| Graphite Hairline | `#ebebeb` | `--color-graphite-hairline` | The dominant divider color — used at very-high frequency for every border, separator, and structural line in the UI |
| Slate Ink | `#354d51` | `--color-slate-ink` | Body subtext, list item markers, supporting icon strokes |
| Dove | `#4f6466` | `--color-dove` | Tertiary body text, muted metadata, low-priority labels |
| Sea Mist | `#a1c2c6` | `--color-sea-mist` | Placeholder text, disabled link color, very light iconography |
| Sky Tint | `#e0f4ff` | `--color-sky-tint` | Subtle surface wash for highlighted callouts, card accent backgrounds |
| Cream Tint | `#feefe8` | `--color-cream-tint` | Warm surface wash — paired with Sky Tint to create alternating tonal callout bands |
| Mint Tint | `#eafde8` | `--color-mint-tint` | Primary page canvas and white card surfaces |

## Tokens — Typography

### Saans (custom) — Single typeface drives the entire system from 12px captions to 96px display. Unusual 475 weight sits between regular and medium — the brand's chosen voice weight. Positive letter-spacing across the scale (0.002–0.017em) is anti-convention: most sites tighten headlines; Customer.io opens them up, giving the type a slightly wide, editorial cadence reminiscent of old grotesques. The geometric humanist construction carries teal-dark ink with calm authority. · `--font-saans-custom`
- **Substitute:** Inter (weight 500) or General Sans
- **Weights:** 475, 500, 600, 700
- **Sizes:** 12, 14, 16, 18, 20, 24, 30, 36, 40, 48, 96
- **Line height:** 1.0–1.38
- **Letter spacing:** 0.0020em at 12px, 0.0070em at 18px, 0.0100em at 30px, 0.0110em at 36px, 0.0130em at 48px, 0.0170em at 96px
- **Role:** Single typeface drives the entire system from 12px captions to 96px display. Unusual 475 weight sits between regular and medium — the brand's chosen voice weight. Positive letter-spacing across the scale (0.002–0.017em) is anti-convention: most sites tighten headlines; Customer.io opens them up, giving the type a slightly wide, editorial cadence reminiscent of old grotesques. The geometric humanist construction carries teal-dark ink with calm authority.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.38 | 0.024px | `--text-caption` |
| body-sm | 14px | 1.38 | 0.056px | `--text-body-sm` |
| body | 16px | 1.38 | 0.08px | `--text-body` |
| body-lg | 18px | 1.38 | 0.126px | `--text-body-lg` |
| subheading | 20px | 1.25 | 0.16px | `--text-subheading` |
| heading-sm | 24px | 1.25 | 0.24px | `--text-heading-sm` |
| heading | 30px | 1.25 | 0.3px | `--text-heading` |
| heading-lg | 36px | 1.25 | 0.396px | `--text-heading-lg` |
| display-sm | 48px | 1 | 0.624px | `--text-display-sm` |
| display | 96px | 1 | 1.632px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 2px |
| cards | 2px |
| images | 6px |
| inputs | 2px |
| buttons | 2px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `oklch(0.9263 0.136 145.2) 0px 0px 0px 4px` | `--shadow-subtle` |
| subtle-2 | `oklch(0.97 0 0) 0px 0px 0px 4px` | `--shadow-subtle-2` |
| subtle-3 | `oklch(0.3068 0.046 206.34) 0px 0px 0px 4px` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96px
- **Card padding:** 32px
- **Element gap:** 8px

## Components

### Primary Filled CTA
**Role:** Main conversion button

Abyss Teal (#00262b) fill, Chalk (#ffffff) text at 16px / 475 weight, 2px radius, padding 12px 20px, with a 4px Sulfur Glow (#abffae) box-shadow halo extending outward. The halo is the signature: the button glows green like a backlit field-guide marker. Use sparingly — one per viewport maximum.

### Ghost Outlined CTA
**Role:** Secondary conversion button

Transparent background, 1px Botanical Teal (#0b363b) border, Botanical Teal text at 16px / 475 weight, 2px radius, padding 12px 20px. No glow. Sits beside the filled CTA as the quieter alternative.

### Text Link
**Role:** Inline navigation and content links

Botanical Teal (#0b363b) text, 1px Botanical Teal underline offset 2px, 475 weight. Underline is the default; remove only for navigation menus.

### Top Navigation Bar
**Role:** Site-wide navigation

White background, 1px Graphite Hairline (#ebebeb) bottom border, 64px height. Logo left (Customer.io mark in Abyss Teal), menu center (Platform / Solutions / Pricing / Resources with caret dropdowns), auth actions right (Sign in text link, filled CTA, ghost CTA). No background blur, no elevation.

### Logo Trust Bar
**Role:** Social proof strip

Single horizontal row on white, 1px Graphite Hairline top and bottom dividers, 64–80px height. Logo marks at 60% opacity in Sea Mist (#a1c2c6), grayscale treatment. Left-aligned caption in 14px Dove (#4f6466) reads 'trusted by 9,000+ brands'.

### Product Screenshot Frame
**Role:** Dashboard preview container

Off-white (#fafafa) background frame, 6px radius, no border, no shadow. Contains the full product UI (sidebar, charts, data tables). Sometimes paired with a warm photographic bleed behind it for the 'real-world' hero treatment.

### Feature Stat Highlight
**Role:** Inline metric callout

Large numeric stat (e.g. 80%) in 48px / 475 weight Abyss Teal, followed by a 1–2 line description in 16px Slate Ink (#354d51). No card chrome — sits directly on the white canvas with a Read more arrow link aligned right.

### Capability Card
**Role:** Feature grid item

White background, no border, no shadow, 32px padding. Icon top-left in Patina Teal (#437278) or Botanical Teal at 24px, 20px Saans 600 title in Abyss Teal, 16px Saans 475 body in Dove. Cards align in a 3-column grid with 32px gaps — no dividers between them.

### Section Header
**Role:** Subsection title block

Optional small icon (Botanical Teal) + 14px uppercase tag in Rust Oxide, followed by 36–48px Saans 600 headline in Abyss Teal. Section headers sit on the left edge of a 1200px container; right-aligned 'Platform overview →' link in Botanical Teal.

### Inline Color-Emphasis Text
**Role:** Signature editorial pattern

Within a single headline or sentence, one to six words are colored individually — 'data' in Sulfur Glow green, 'messaging' in Rust Oxide, 'AI' in Cobalt Indigo, 'customers' in Rust Oxide, 'stronger' in Cobalt Indigo, 'relevant' in Sulfur Glow. No gradient, no mix-blend — each word is a flat fill at 600 weight against the Abyss Teal surrounding type. This is the brand's most distinctive pattern.

### Dashboard Data Visual
**Role:** In-product chart styling

Bar charts in Signal Blue (#006af2) with lighter blue fill, line overlays in Sulfur Glow (#abffae) green for trend lines. Axis labels 12px in Sea Mist, gridlines 1px Graphite Hairline. Chart frame is white inside a 6px-radius card.

### Trust Microcopy
**Role:** Reassurance line under CTAs

Three short clauses separated by dot bullets (✓ in Botanical Teal), 12px Saans 475 in Dove (#4f6466). Sits 8px below the button row, left-aligned with the CTA.

## Do's and Don'ts

### Do
- Use the Sulfur Glow (#abffae) 4px box-shadow halo exclusively on the primary filled CTA — it is the brand's only expressive shadow and must be reserved.
- Set border-radius to 2px on every button, input, tag, and card; 6px only on image frames. The sharp corners are a load-bearing design choice.
- Color words individually in editorial copy using the accent palette (Sulfur Glow, Rust Oxide, Cobalt Indigo) at 600 weight, leaving the surrounding type in Abyss Teal.
- Use 1px Botanical Teal (#0b363b) or Graphite Hairline (#ebebeb) for every divider — never thicker, never with shadow.
- Keep the page at least 90% achromatic; let one chromatic accent appear per visual moment, not many.
- Set letter-spacing positively (0.002–0.017em) across the entire type scale; the wide tracking is what makes Saans feel editorial rather than generic.
- Default to left-aligned text and left-anchored section headers; the layout reads as a document, not a poster.

### Don't
- Don't add drop shadows anywhere except the Sulfur Glow halo on the primary CTA. Elevation is communicated by tone washes, not blur.
- Don't use rounded buttons, pills, or large radii — 2px is the ceiling for interactive elements.
- Don't apply color to backgrounds, card fills, or large surface areas. Accent colors live only in text strokes, icons, and the CTA halo.
- Don't pair multiple accent colors in the same word or icon — one color per typographic unit.
- Don't use bold black (#000000) for text — Abyss Teal (#00262b) is the ink, and its teal undertone is part of the identity.
- Don't introduce a second typeface; the single-family Saans system is deliberate, not a placeholder.
- Don't tighten letter-spacing on display sizes; the positive tracking is the signature, not a side effect of the font.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#ffffff` | Primary page canvas |
| 1 | Bone | `#fafafa` | Recessed surface, secondary panels |
| 2 | Tint Band | `#e0f4ff` | Cool callout wash |
| 3 | Warm Band | `#feefe8` | Warm callout wash |

## Elevation

- **Primary Filled CTA:** `0px 0px 0px 4px #abffae`
- **Ghost Outlined CTA:** `0px 0px 0px 4px #fafafa (hover only)`
- **Input focus state:** `0px 0px 0px 4px #00262b (suggested focus ring using Abyss Teal at low opacity)`

## Imagery

Imagery is restrained and documentary: full-bleed lifestyle photography appears only behind product hero frames (warm, desaturated office scenes), giving the product UI a real-world anchor. Product UI screenshots dominate — rendered dashboards with blue bar charts and green trend lines, presented inside 6px-radius frames on a #fafafa ground. The logo trust strip uses flat, grayscale brand marks at reduced opacity. Illustration is absent; the system's 'decorative' content is typography itself — colored inline words replace icons or spot illustrations. Icons are line-style, 1.5–2px stroke, rendered in Botanical Teal or Patina Teal, never filled, never multi-color. Overall visual density skews text-dominant: the product and its words carry the page, with photography as a soft contextual layer.

## Layout

Page is max-width 1200px centered on a white canvas, with full-bleed photography bands permitted only as hero backdrops. The hero follows a split model: left two-thirds holds a 96px display headline and CTA pair, right third is a product screenshot (or a photographic scene with a floating dashboard). Below the hero, a 1px-hairline-divided logo trust bar spans full content width. Sections stack vertically with 96px gaps and follow a left-anchored text rhythm: section tag (14px, Rust Oxide) → 36–48px headline (Abyss Teal) → supporting copy → optional inline stat → right-aligned 'Read more' link. Capability grids use a 3-column card layout with 32px gaps and no dividers. The mid-page 'unify your data' section breaks the monochrome rule with inline color-emphasis words inside a single centered paragraph. Navigation is a thin top bar (64px) with 1px bottom hairline; no sticky backdrop blur, no sidebars.

## Agent Prompt Guide

## Quick Color Reference
- text: #00262b (Abyss Teal)
- background: #ffffff (Chalk)
- border: #ebebeb (Graphite Hairline) for dividers; #0b363b (Botanical Teal) for interactive borders
- accent: #abffae (Sulfur Glow) for CTA halo and emphasis text
- secondary text: #4f6466 (Dove)
- primary action: #0b363b (filled action)

## Example Component Prompts

1. Create a Primary Action Button: #0b363b background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. **3-column capability grid**: White background, 3 columns at 32px gaps, no dividers. Each card: 24px icon in #437278 line-style, 20px Saans 600 title in #00262b, 16px Saans 475 body in #4f6466. 32px padding inside each card, 2px radius. No borders, no shadows.

3. **Inline color-emphasis headline**: A single 36px Saans 600 sentence where specific words are recolored individually — 'We unify your data' (#abffae), 'messaging' (#8b3911), 'AI' (#0a3890), 'customers' (#8b3911), 'stronger' (#0a3890), 'relevant' (#abffae). The remaining words stay #00262b. Centered, max-width 800px.

4. **Logo trust bar**: Full-width white strip with 1px #ebebeb top and bottom borders. Left side: 14px #4f6466 caption 'trusted by 9,000+ brands'. Right side: row of 6 grayscale logos at #a1c2c6, 24px height, 48px gaps. Height 72px.

5. **Product dashboard frame**: #fafafa background, 6px radius, padding 0. Contains white card with sidebar (1px #ebebeb right border) and main area showing a bar chart: Signal Blue (#006af2) bars, Sulfur Glow (#abffae) trend line, 1px #ebebeb gridlines, 12px #a1c2c6 axis labels.

## Signature Patterns

Three patterns carry the brand identity and must be preserved across new pages:

1. **The 2px Radius Law** — every rectangular element caps at 2px radius except image frames (6px). This single choice separates Customer.io from the rounded-everywhere SaaS look and makes the UI feel like a printed instrument panel.

2. **The Inline Color Vocabulary** — the editorial technique of coloring individual words in running prose (data → green, messaging → rust, AI → indigo, customers → rust, stronger → indigo, relevant → green). Use this once per page maximum; over-use dilutes the effect.

3. **The Sulfur Glow Halo** — the 4px #abffae box-shadow on the primary CTA. It is the only shadow in the system and the only place a color other than Abyss Teal is allowed to exist at scale. Never replicate it on ghost buttons, links, or cards.

## Similar Brands

- **Linear** — Same precision-tool aesthetic with sharp 2px corners, hairline borders, and a single dark accent carrying the entire interface — Linear's dark-near-black is Customer.io's Abyss Teal.
- **Plausible** — Shares the editorial-type approach: oversized display headlines with positive tracking, flat achromatic surfaces, and color used only as inline emphasis in prose.
- **Retool** — Same technical-notebook feel: white canvas, structured hairline borders, and dark teal-leaning ink for text and CTAs rather than typical SaaS blue.
- **Pitch** — Both use a single dark ink color for text and primary actions, flat surfaces with 1px dividers, and accent colors reserved for inline emphasis rather than fills.
- **Attio** — Shares the wide-tracked editorial typography, minimal radii, and a single expressive accent (Attio's coral, Customer.io's Sulfur Glow) that appears only on the primary CTA.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-abyss-teal: #00262b;
  --color-botanical-teal: #0b363b;
  --color-sulfur-glow: #abffae;
  --color-rust-oxide: #8b3911;
  --color-cobalt-indigo: #0a3890;
  --color-patina-teal: #437278;
  --color-signal-blue: #006af2;
  --color-chalk: #ffffff;
  --color-bone: #fafafa;
  --color-graphite-hairline: #ebebeb;
  --color-slate-ink: #354d51;
  --color-dove: #4f6466;
  --color-sea-mist: #a1c2c6;
  --color-sky-tint: #e0f4ff;
  --color-cream-tint: #feefe8;
  --color-mint-tint: #eafde8;

  /* Typography — Font Families */
  --font-saans-custom: 'Saans (custom)', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.38;
  --tracking-caption: 0.024px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --tracking-body-sm: 0.056px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.08px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: 0.126px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.16px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.24px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: 0.3px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: 0.396px;
  --text-display-sm: 48px;
  --leading-display-sm: 1;
  --tracking-display-sm: 0.624px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: 1.632px;

  /* Typography — Weights */
  --font-weight-w475: 475;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 96px;
  --card-padding: 32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;

  /* Named Radii */
  --radius-tags: 2px;
  --radius-cards: 2px;
  --radius-images: 6px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;

  /* Shadows */
  --shadow-subtle: oklch(0.9263 0.136 145.2) 0px 0px 0px 4px;
  --shadow-subtle-2: oklch(0.97 0 0) 0px 0px 0px 4px;
  --shadow-subtle-3: oklch(0.3068 0.046 206.34) 0px 0px 0px 4px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-bone: #fafafa;
  --surface-tint-band: #e0f4ff;
  --surface-warm-band: #feefe8;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-abyss-teal: #00262b;
  --color-botanical-teal: #0b363b;
  --color-sulfur-glow: #abffae;
  --color-rust-oxide: #8b3911;
  --color-cobalt-indigo: #0a3890;
  --color-patina-teal: #437278;
  --color-signal-blue: #006af2;
  --color-chalk: #ffffff;
  --color-bone: #fafafa;
  --color-graphite-hairline: #ebebeb;
  --color-slate-ink: #354d51;
  --color-dove: #4f6466;
  --color-sea-mist: #a1c2c6;
  --color-sky-tint: #e0f4ff;
  --color-cream-tint: #feefe8;
  --color-mint-tint: #eafde8;

  /* Typography */
  --font-saans-custom: 'Saans (custom)', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.38;
  --tracking-caption: 0.024px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --tracking-body-sm: 0.056px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.08px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: 0.126px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.16px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.24px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: 0.3px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: 0.396px;
  --text-display-sm: 48px;
  --leading-display-sm: 1;
  --tracking-display-sm: 0.624px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: 1.632px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;

  /* Shadows */
  --shadow-subtle: oklch(0.9263 0.136 145.2) 0px 0px 0px 4px;
  --shadow-subtle-2: oklch(0.97 0 0) 0px 0px 0px 4px;
  --shadow-subtle-3: oklch(0.3068 0.046 206.34) 0px 0px 0px 4px;
}
```