# Seed — Style Reference
> Apothecary greenhouse at dawn — warm parchment walls, deep botanical greens, pill-shaped vessels, and a single sunlit lime accent for small moments of life.

**Theme:** light

Seed presents an apothecary-meets-modern-clinical aesthetic: a warm parchment canvas, one deep forest green that does all the chromatic work, and pill-shaped forms everywhere. The interface is flat and unshadowed — boundaries are drawn with color contrast and hairline rules, not elevation. Typography is custom, tightly tracked, and deliberately humanist in its lighter weights (300–350), lending a calm, editorial authority rather than a hard pharma feel. Color is restrained to the extreme: a single dark green carries text, buttons, and iconography; a single lime green is reserved for punctuation — badges, highlights, the small green dots beside DS-01® callouts. The result reads as botanical laboratory: scientific in rigor, organic in warmth, and confidently minimal in ornamentation.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Forest Canopy | `#1c3a13` | `--color-forest-canopy` | Primary brand green — headlines, body text on light surfaces, filled CTA buttons, icon strokes, active nav markers, card borders and outlines |
| Lime Sprout | `#d3fa99` | `--color-lime-sprout` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Warm Parchment | `#fcfcf7` | `--color-warm-parchment` | Primary canvas and surface — page background, card surface, input field background, button surface for ghost/neutral controls |
| Pale Stone | `#eeeee9` | `--color-pale-stone` | Subtle raised surface — section bands, secondary card backgrounds, muted dividers and zones |
| Soft Sage | `#c4c7c4` | `--color-soft-sage` | Cool muted surface — disabled controls, inactive state fills, low-contrast secondary panels |
| Quiet Gray | `#b3b3b3` | `--color-quiet-gray` | Disabled button background, lowest-prominence UI surface |
| True Black | `#000000` | `--color-true-black` | Rare emphasis color — legal text, fine print, occasional heavy borders |

## Tokens — Typography

### Seed Sans — Primary brand typeface. Weight 300 carries large editorial headlines — a deliberate anti-convention choice that whispers authority instead of shouting. Weights 350–400 handle body and UI; 500 is reserved for buttons, labels, and emphasis. Negative letter-spacing tightens progressively as type grows larger: -0.24px at 8px caption up to -1.44px at 48px display. The 'ss05' feature setting activates alternate glyphs that soften terminals — a critical brand detail that distinguishes Seed Sans from generic geometric sans. · `--font-seed-sans`
- **Substitute:** Söhne, Inter, or Neue Haas Grotesk Display
- **Weights:** 300, 350, 400, 500
- **Sizes:** 8px, 10px, 12px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px
- **Line height:** 0.90–2.19 (tight on display, generous on body)
- **Letter spacing:** -0.30em at 8px → -1.44px at 48px (tightens with size)
- **OpenType features:** `"ss05" on`
- **Role:** Primary brand typeface. Weight 300 carries large editorial headlines — a deliberate anti-convention choice that whispers authority instead of shouting. Weights 350–400 handle body and UI; 500 is reserved for buttons, labels, and emphasis. Negative letter-spacing tightens progressively as type grows larger: -0.24px at 8px caption up to -1.44px at 48px display. The 'ss05' feature setting activates alternate glyphs that soften terminals — a critical brand detail that distinguishes Seed Sans from generic geometric sans.

### Seed Sans Mono — Monospaced companion for data, product codes (DS-01®, AM-02®), and clinical annotations. 0.015em positive letter-spacing gives the monospace room to breathe — a counterpoint to Seed Sans's tight tracking. · `--font-seed-sans-mono`
- **Substitute:** JetBrains Mono, Berkeley Mono, or IBM Plex Mono
- **Weights:** 300, 400
- **Sizes:** 12px, 16px
- **Line height:** 1.50
- **Letter spacing:** +0.015em (0.18px at 12px, 0.24px at 16px)
- **Role:** Monospaced companion for data, product codes (DS-01®, AM-02®), and clinical annotations. 0.015em positive letter-spacing gives the monospace room to breathe — a counterpoint to Seed Sans's tight tracking.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption-sm | 10px | 1.4 | -0.3px | `--text-caption-sm` |
| body-sm | 14px | 1.4 | -0.42px | `--text-body-sm` |
| body | 16px | 1.4 | -0.4px | `--text-body` |
| body-lg | 18px | 1.3 | -0.36px | `--text-body-lg` |
| subheading | 20px | 1.2 | -0.3px | `--text-subheading` |
| heading-sm | 24px | 1.17 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.8px | `--text-heading` |
| heading-lg | 40px | 1.1 | -1.2px | `--text-heading-lg` |
| display | 48px | 1 | -1.44px | `--text-display` |

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
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 9999px |
| tags | 9999px |
| cards | 16px |
| pills | 9999px |
| inputs | 8px |
| buttons | 9999px |
| largeCards | 32px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Floating Pill Navigation
**Role:** Primary site navigation

Fully rounded (9999px) floating nav bar with internal links (Shop, Science, Learn), brand mark with lime dot at left, Sign in and filled CTA at right. Background Warm Parchment (#fcfcf7), 16px vertical padding, sits above content with generous top margin. The 'Get Started' button is a filled Forest Canopy pill, 8px vertical and 11–14px horizontal padding, white text.

### Announcement Bar
**Role:** Top-of-page promotional strip

Lime Sprout (#d3fa99) full-width band with centered dark green text. 5–7px vertical padding. Acts as the only color-rich band on the page — a small moment of brightness that earns attention.

### Hero Headline (Left-Aligned)
**Role:** Primary page headline block

Display-size (48px) Seed Sans weight 300, Forest Canopy on Warm Parchment. Letter-spacing -1.44px. Followed by body copy (16px weight 400, same green) and a paired filled CTA + ghost text link with arrow. Left-aligned, vertically centered against product photography on the right.

### Filled Primary Button (Pill)
**Role:** Primary call-to-action

Fully rounded (9999px radius) pill button. Background Forest Canopy (#1c3a13), text Warm Parchment (#fcfcf7). Seed Sans weight 500, 14–16px, tight letter-spacing. Padding approximately 7px vertical × 12–14px horizontal. The pill is the dominant button shape — there are no sharp-cornered action buttons in this system.

### Ghost Text Link with Arrow
**Role:** Secondary action

Seed Sans weight 400, Forest Canopy color, underlined or with trailing arrow glyph (→). No background or border — relies on color contrast alone. Sits beside primary CTAs as a quieter alternative.

### Product Tile (Dark Section)
**Role:** Product card on Forest Canopy background

Card on dark green background with rounded 16px corners, 6–16px internal padding. Contains: a small badge ('Bestseller' or 'New') in Lime Sprout or Pale Stone pill at top-left, a code pill (DS-01®, AM-02®) in white outlined pill, the product name in white, a product container image centered, a filled white 'Shop Now' pill button, and a muted price line in soft sage text.

### Product Badge Tag
**Role:** Status indicator on product tiles

Small fully rounded pill. 'Bestseller' uses Lime Sprout (#d3fa99) background with Forest Canopy text; 'New' uses Pale Stone (#eeeee9) with Forest Canopy text. 5–6px vertical padding, Seed Sans 12px weight 500.

### Product Code Pill (Outlined)
**Role:** Product identifier label

Outlined pill in white (1px border) on dark sections, 9999px radius, 4–6px vertical padding, Seed Sans Mono or Seed Sans 10–12px. Marks the specific product formulation (DS-01®, DM-02®, AM-02®, PM-02®).

### Bundle Section Card
**Role:** Paired-product showcase

Warm Parchment background, 16px-radius container with two product jars side by side. Left side: badge ('Bundle + Save 25%'), display headline (40px weight 300), body copy, and a filled Forest Canopy CTA. Right side: large product image on a soft cream surface with a 32px or larger radius and a secondary photo grid below.

### Quiz Link Button (Underlined)
**Role:** Inline engagement prompt

Forest Canopy text, underlined, with trailing arrow. 'Take The Quiz →' pattern. Seed Sans weight 400, 16px. No background — the underline and arrow are the only affordances.

### Section Header (Display Weight 300)
**Role:** Editorial section headline

40px Seed Sans weight 300, Forest Canopy, letter-spacing -1.2px. Generous bottom margin (32–64px). Frequently paired with a small right-aligned shop link. This is the system's signature headline treatment — the weight 300 choice deliberately defers to the product photography rather than competing with it.

### Product Photo Card (Lifestyle)
**Role:** Lifestyle imagery tile

Photographic card with 16px radius, no shadow. Full-bleed image within the rounded boundary. Used in bundle sections to humanize the product with hands, kitchen, and botanical context.

### Input Field
**Role:** Form input

8px radius, Warm Parchment background, 1px Forest Canopy or soft border. 14–20px horizontal padding, 10–14px vertical. Seed Sans 16px weight 400. The 8px radius is the only non-pill radius in the input system — it reads as form-functional, distinct from the soft pill components.

## Do's and Don'ts

### Do
- Use weight 300 for all display and section headlines — the anti-convention whisper is the signature; do not promote to 500 or 700.
- Use Forest Canopy (#1c3a13) for all primary text, filled buttons, icons, and borders on light surfaces — let the single brand color carry the system.
- Set border-radius to 9999px on all buttons, tags, badges, and navigation — pill shape is the default, not the exception.
- Activate 'ss05' font features on Seed Sans — the alternate glyph forms are critical to brand identity, not a decorative extra.
- Use Lime Sprout (#d3fa99) sparingly: badges, accent dots, and the announcement bar only — it earns attention through scarcity.
- Tighten letter-spacing progressively as type size grows: -0.24px at 8px up to -1.44px at 48px — never use the same tracking across the scale.
- Use 16px or 32px radius for all card and image surfaces — never apply pill radius to large rectangular areas.

### Don't
- Do not introduce additional chromatic colors — the system is deliberately one-green; any second hue breaks the apothecary discipline.
- Do not use box-shadow for elevation — boundaries are drawn with color and 1px borders only; the design is intentionally flat.
- Do not use weight 600 or above — Seed Sans stops at 500, and the system relies on lightness for hierarchy, not weight contrast.
- Do not round card corners beyond 32px — pill radii on large surfaces look childish and break the editorial tone.
- Do not use blue, red, or purple for status states — semantic colors are not part of this system; if a state must read, use Forest Canopy at varying opacities or Pale Stone.
- Do not apply letter-spacing to Seed Sans in the positive direction (except the monospaced variant) — the system breathes by tightening, not loosening.
- Do not place white text on Pale Stone (#eeeee9) — the contrast ratio fails; white text belongs on Forest Canopy or other dark surfaces only.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Warm Parchment Canvas | `#fcfcf7` | Primary page background across most sections |
| 1 | Pale Stone Band | `#eeeee9` | Secondary section backgrounds, subtle raised zones |
| 2 | Soft Sage Panel | `#c4c7c4` | Muted secondary panels, disabled-state surfaces |
| 3 | Forest Canopy Reverse | `#1c3a13` | Dark hero/product sections that invert the brand color into a full background |
| 4 | Lime Sprout Highlight | `#d3fa99` | Badge fills and accent washes on otherwise quiet surfaces |

## Imagery

Photography is central to the visual language and follows three modes: (1) Hero product photography — single capsule or jar isolated on pure cream/white, often with an organic powder ring or scattered particles to suggest natural origin. (2) Lifestyle photography — hands, kitchen counters, plants, and natural light. Warm, soft-focus, and human-scaled. (3) Botanical macro — extreme close-ups of leaves, moss, and plant textures, used as full-bleed section backgrounds on Forest Canopy (#1c3a13) dark sections to create immersive, biology-as-landscape moments. Product containers are dark green glass jars with simple white labels and the 'Seed' wordmark in a soft sage dot — packaging is treated as hero graphic, not packaging-as-product-shot. Icons are absent or extremely minimal: a small lime dot and the 'Seed●' wordmark carry the iconography load.

## Layout

Pages follow a two-column hero pattern: left-aligned editorial headline (40–48px weight 300) with stacked body copy and a filled-pill CTA plus a ghost text link, right-aligned product photography on a clean cream background. This hero rhythm is consistent across the site. Below the fold, the page alternates between light cream bands and a full-bleed dark Forest Canopy (#1c3a13) section that holds a 4-column product grid. Cards on the dark grid are uniform: badge top-left, code pill, product name, centered product image, filled white CTA, and muted price line. Bundle sections return to the cream background and use a 2-column layout (text-left, large product image-right) with a supporting 3-image photo strip below. Vertical rhythm is generous: 64px section gaps, 32px sub-section gaps, 16px element gaps. Navigation is a single floating pill bar at the top of the viewport — not a full-width header. Max content width is approximately 1200px, centered, with consistent horizontal padding of 48–64px at desktop widths. The page is unshadowed and uses 1px hairline borders in Forest Canopy to define card edges on dark sections.

## Agent Prompt Guide

Quick Color Reference
- text: #1c3a13 (Forest Canopy)
- background: #fcfcf7 (Warm Parchment)
- border: #1c3a13 at 1px
- accent: #d3fa99 (Lime Sprout — badges, dots, announcement bar only)
- dark section background: #1c3a13 (Forest Canopy reverse)
- disabled surface: #b3b3b3
- primary action: #1c3a13 (filled action)

Example Component Prompts

1. Filled Pill CTA Button: 9999px border-radius, background #1c3a13, text #fcfcf7, Seed Sans weight 500 at 14px, letter-spacing -0.42px, padding 7px vertical × 14px horizontal. Default button shape for the entire system — no rectangles, no outlines, no sharp corners.

2. Create a Primary Action Button: #1c3a13 background, #fcfcf7 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

3. Product Card on Dark Section: Background #1c3a13, card has no background fill — sits directly on the section. Badge pill (Lime Sprout #d3fa99 fill, #1c3a13 text, 9999px radius, 5px vertical padding, 12px Seed Sans weight 500) at top-left. Outlined code pill (1px white border, white text, 9999px radius, 10px Seed Sans Mono). Product name in white 24px weight 400. Centered product image (jar). Filled white 'Shop Now' pill (#fcfcf7 background, #1c3a13 text, 9999px radius). Price line in #c4c7c4 at 12px.

4. Lime Sprout Badge: 9999px radius, background #d3fa99, text #1c3a13, Seed Sans weight 500 at 12px, padding 5px vertical × 10px horizontal. Used for 'Bestseller', 'New', and inline status indicators. Never use on dark sections — the lime needs the cream to glow.

5. Floating Pill Navigation: 9999px radius on the nav container, background #fcfcf7, 1px #1c3a13 hairline border, padding 6px vertical. Brand 'Seed●' with a 4px lime dot at left. Nav links (Shop, Science, Learn) in Seed Sans 14px weight 400 #1c3a13. Right side: 'Sign in' ghost text + filled 'Get Started' pill (#1c3a13 background, #fcfcf7 text, 9999px radius).

## Elevation Philosophy

This system uses no shadows. Elevation is communicated through three mechanisms: (1) color contrast — dark sections literally invert to #1c3a13 to feel 'higher' or 'featured'; (2) hairline 1px borders in Forest Canopy to define card edges on dark backgrounds; (3) scale and whitespace — larger elements with more surrounding space read as primary, tighter and smaller elements recede. Adding box-shadow would introduce visual noise inconsistent with the flat apothecary aesthetic. If a component must be raised, prefer a Pale Stone (#eeeee9) background shift over a shadow.

## Font Feature Details

Seed Sans requires 'ss05' alternates to be activated — these are alternate glyph forms (likely softened terminals or humanized details) that distinguish the typeface from a generic geometric sans. This single font feature is the most important non-color brand differentiator. In CSS: font-feature-settings: 'ss05' on. Do not omit this when generating Seed Sans text. The monospaced companion, Seed Sans Mono, does not use 'ss05' but has +0.015em positive letter-spacing to compensate for monospace density.

## Similar Brands

- **Ritual** — Same warm off-white canvas, single deep brand color carrying all text and CTAs, pill-shaped buttons, custom humanist sans-serif with tight tracking, and product-forward editorial photography
- **Care/of** — Apothecary-coded health brand with cream backgrounds, forest-green brand palette, pill buttons, and lifestyle photography centered on hands and kitchen contexts
- **Athletic Greens (AG1)** — Bold health-supplement brand with dark green sectional backgrounds, product-grid sections, pill navigation, and science-forward editorial headlines in a light weight
- **Omsom** — Same warm parchment aesthetic, single saturated brand color, generous whitespace, pill-shaped CTAs, and editorial-weight-300 display headlines paired with product photography

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-forest-canopy: #1c3a13;
  --color-lime-sprout: #d3fa99;
  --color-warm-parchment: #fcfcf7;
  --color-pale-stone: #eeeee9;
  --color-soft-sage: #c4c7c4;
  --color-quiet-gray: #b3b3b3;
  --color-true-black: #000000;

  /* Typography — Font Families */
  --font-seed-sans: 'Seed Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-seed-sans-mono: 'Seed Sans Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption-sm: 10px;
  --leading-caption-sm: 1.4;
  --tracking-caption-sm: -0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.4px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.3;
  --tracking-body-lg: -0.36px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.3px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.17;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.2px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -1.44px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-w350: 350;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 32px;
  --radius-full: 1188px;
  --radius-full-2: 1386px;
  --radius-full-3: 1584px;

  /* Named Radii */
  --radius-nav: 9999px;
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-pills: 9999px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;
  --radius-largecards: 32px;

  /* Surfaces */
  --surface-warm-parchment-canvas: #fcfcf7;
  --surface-pale-stone-band: #eeeee9;
  --surface-soft-sage-panel: #c4c7c4;
  --surface-forest-canopy-reverse: #1c3a13;
  --surface-lime-sprout-highlight: #d3fa99;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-forest-canopy: #1c3a13;
  --color-lime-sprout: #d3fa99;
  --color-warm-parchment: #fcfcf7;
  --color-pale-stone: #eeeee9;
  --color-soft-sage: #c4c7c4;
  --color-quiet-gray: #b3b3b3;
  --color-true-black: #000000;

  /* Typography */
  --font-seed-sans: 'Seed Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-seed-sans-mono: 'Seed Sans Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption-sm: 10px;
  --leading-caption-sm: 1.4;
  --tracking-caption-sm: -0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.4px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.3;
  --tracking-body-lg: -0.36px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.3px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.17;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.2px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -1.44px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 32px;
  --radius-full: 1188px;
  --radius-full-2: 1386px;
  --radius-full-3: 1584px;
}
```