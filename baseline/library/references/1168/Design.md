# Base44 — Style Reference
> Sunlit workspace with a single lime spark. Warm off-white canvas, white product surfaces, pill controls, whisper-weight display type, and one electric lime accent that powers every action.

**Theme:** light

Base44 speaks in warm off-white daylight: a sunlit canvas (#faf9f7) with white product surfaces, whisper-weight display type that feels engraved rather than stamped, and one electric lime accent (#ebffb1) that makes the primary action feel switched on. Section transitions are painted as soft gradient bands — cool blue-to-white in the hero, warm orange-to-coral in the mid-page — creating a horizon-line effect between content blocks rather than hard dividers. Components stay featherlight: pill-shaped controls (999px radius), ~10px card corners, hairline borders, and almost no shadow. The lime-green is the only saturated color allowed on interactive elements; everything else is achromatic or carried inside gradients, which keeps the interface quiet and gives the single accent real authority.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Lime Spark | `#ebffb1` | `--color-lime-spark` | Primary action background, active highlights — soft electric lime that reads as energy/switched-on without aggression |
| Lime Bolt | `#ade900` | `--color-lime-bolt` | Green accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Ember Outline | `#d8723c` | `--color-ember-outline` | Outlined button border, secondary warm-orange action variant |
| Solar Orange | `linear-gradient(rgba(250, 249, 247, 0) 2.69%, rgb(255, 240, 222) 24.16%, rgb(255, 174, 83) 56.55%, rgba(255, 174, 83, 0) 98.02%)` | `--color-solar-orange` | Mid-stop of section gradient bands — warm coral that anchors horizon-line transitions; Mid-page section transition — warm orange-to-coral horizon |
| Sky Wash | `#5db3cf` | `--color-sky-wash` | Hero gradient origin — soft blue that fades into the warm canvas |
| Charcoal | `#0f0f0f` | `--color-charcoal` | Darkest surface text and filled action background on inverted contexts |
| Ink | `#232529` | `--color-ink` | Body text, strong borders, card outlines — near-black with a touch of cool |
| Graphite | `#696f7b` | `--color-graphite` | Muted body text, secondary labels — blue-gray that recedes on warm canvas |
| Slate | `#324158` | `--color-slate` | Cool blue-gray for structural borders and dividers needing weight |
| Stone Border | `#cfcfcf` | `--color-stone-border` | Button and input borders — visible but not heavy |
| Mist Border | `#b7b7b7` | `--color-mist-border` | Lighter borders on icon containers, secondary outlines |
| Hairline | `#e6e6e6` | `--color-hairline` | Subtle dividers, card edges on white surfaces |
| Canvas | `#faf9f7` | `--color-canvas` | Page background — warm off-white that absorbs light gently |
| Paper | `#ffffff` | `--color-paper` | Card surfaces, input fields, elevated product surfaces — pure white sitting on the warm canvas |
| Pure Black | `#000000` | `--color-pure-black` | Headline text, icon strokes, maximum-contrast borders |
| Daybreak Horizon | `linear-gradient(rgb(242, 241, 237) 42.49%, rgb(213, 223, 224) 93.98%, rgb(229, 255, 148) 104.08%)` | `--color-daybreak-horizon` | Gradient bridge between sky blue and warm white |

## Tokens — Typography

### Arial — System fallback for older components and auxiliary text · `--font-arial`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 10px, 13px, 14px
- **Line height:** 1.20
- **Role:** System fallback for older components and auxiliary text

### Madefor Display — Hero and section headlines — weight 400 at 55–63px is anti-convention; the whisper-weight creates authority through restraint, letting the large size and tight line-height do the work · `--font-madefor-display`
- **Substitute:** Inter Tight, Space Grotesk
- **Weights:** 400
- **Sizes:** 10px
- **Line height:** 1.00
- **Letter spacing:** normal
- **Role:** Hero and section headlines — weight 400 at 55–63px is anti-convention; the whisper-weight creates authority through restraint, letting the large size and tight line-height do the work

### Madefor Display — Mid-page headings and feature titles — same 400 weight carries the display voice down the page · `--font-madefor-display`
- **Substitute:** Inter Tight, Space Grotesk
- **Weights:** 400
- **Sizes:** 10px
- **Line height:** 1.07-1.10
- **Role:** Mid-page headings and feature titles — same 400 weight carries the display voice down the page

### wix-madefor-text-v2 — Body, nav, buttons, inputs — 0.1em letter-spacing is the signature tracking that gives text a slightly expanded, breathable feel · `--font-wix-madefor-text-v2`
- **Substitute:** Madefor Text, Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px
- **Line height:** 1.30-1.60
- **Letter spacing:** 0.1000em
- **Role:** Body, nav, buttons, inputs — 0.1em letter-spacing is the signature tracking that gives text a slightly expanded, breathable feel

### wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495 — wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495 — detected in extracted data but not described by AI · `--font-wfont343a2a4e484da66ffc4465a05a1c9ea5caf495`
- **Weights:** 400
- **Sizes:** 16px, 20px, 28px, 30px, 42px
- **Line height:** 1, 1.2, 1.3
- **Role:** wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495 — detected in extracted data but not described by AI

### wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39 — wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39 — detected in extracted data but not described by AI · `--font-wfont343a2a5b4cd32fc19d46e1b8c1b142abb27d39`
- **Weights:** 400
- **Sizes:** 22px, 24px, 34px, 51px, 55px, 56px, 63px
- **Line height:** 0.9, 1, 1.07, 1.1, 1.4
- **Role:** wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39 — detected in extracted data but not described by AI

### Madefor-Text — Madefor-Text — detected in extracted data but not described by AI · `--font-madefor-text`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.2
- **Role:** Madefor-Text — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | — | `--text-caption` |
| body | 14px | 1.5 | 1.4px | `--text-body` |
| body-lg | 16px | 1.5 | 1.6px | `--text-body-lg` |
| subheading | 18px | 1.4 | 1.8px | `--text-subheading` |
| heading-sm | 22px | 1.1 | — | `--text-heading-sm` |
| heading | 34px | 1.1 | — | `--text-heading` |
| heading-lg | 42px | 1.07 | — | `--text-heading-lg` |
| display | 56px | 1 | — | `--text-display` |
| display-lg | 63px | 1 | — | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 68 | 68px | `--spacing-68` |
| 76 | 76px | `--spacing-76` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 999px |
| cards | 10px |
| links | 300px |
| small | 7px |
| images | 10px |
| inputs | 10px |
| buttons | 999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(34, 40, 42, 0.04) 0px 3px 10px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 40px
- **Element gap:** 12px

## Components

### Primary Action Button (Filled)
**Role:** Main CTA — "Start Building" in nav, hero submit

Lime-green (#ebffb1) fill, #0f0f0f text, 999px radius (full pill), 12px 24px padding, Madefor Text weight 500 16px with 0.1em letter-spacing. The lime against the warm canvas makes it the loudest element on the page.

### Secondary Outlined Button
**Role:** Alternate action with orange or lime border

Transparent fill, 2px border in #d8723c (orange) or #ade900 (lime), 999px radius, 12px 20px padding, Madefor Text weight 500 16px. Used for variant actions that should not compete with the primary.

### Ghost Text Button
**Role:** Low-emphasis actions and inline links

No fill, no border, #0f0f0f or #232529 text, 999px radius, 8px 12px padding. Used inside cards and form footers.

### Hero Prompt Card
**Role:** Central hero element — AI prompt input

White (#ffffff) card on gradient background, ~10px radius, 40px padding, subtle #e6e6e6 hairline border. Contains a textarea, a Plan/Build toggle pill, and a circular dark submit button (#232529) with a white arrow icon.

### Suggestion Chip
**Role:** Pre-filled prompt suggestions below hero input

White fill, #cfcfcf border, 999px radius, 6px 16px padding, Madefor Text weight 400 14px text in #232529. Arranged in a wrapping row with 8px gaps.

### New Badge Pill
**Role:** "NEW" tag in announcement bar

Orange (#d8723c) fill or lime (#ebffb1) fill with dark text, 999px radius, 2px 10px padding, 10–12px uppercase weight 600. Sits inside a pill-shaped announcement container with border.

### Announcement Banner
**Role:** Top-of-hero announcement strip

Transparent or white fill, #cfcfcf 1px border, 999px radius, 8px 20px padding, centered text with badge + label + arrow icon. Floats above the hero gradient.

### Feature Section Card
**Role:** Two-column feature block with text + product preview

White (#ffffff) fill, ~10px radius, no shadow, 40px padding. Left column holds section number, title, body text, and a filled CTA. Right column holds a product preview card with the single shadow token.

### Product Preview Card
**Role:** Embedded product screenshot container

White fill, 10px radius, subtle shadow rgba(34,40,42,0.04) 0px 3px 10px 0px. Contains a product UI screenshot with a dark header bar and a prompt input footer.

### Navigation Bar
**Role:** Sticky top header

White or transparent fill, 1px bottom border in #e6e6e6, 0px vertical padding (items handle their own). Logo left (orange circle + "Base44" wordmark), nav links center, language + CTA right. Height ~60px.

### Nav Dropdown Item
**Role:** Product/Use Cases/Resources submenu items

No visible chrome, Madefor Text weight 400 14px with 0.1em tracking, #232529 color, 6px 12px padding. Chevron icon in #696f7b.

### Language Switcher
**Role:** Globe icon button in nav

40px circular, #cfcfcf border, transparent fill, globe icon centered in #232529.

### Section Divider Band
**Role:** Full-bleed gradient horizon between sections

Uses the orange-coral or blue-white radial gradient. ~120–200px tall, no content — purely atmospheric transition between content blocks.

### Toggle Pill (Plan/Build)
**Role:** Mode switcher inside the hero prompt card

White pill container with a lime (#ebffb1) active state indicator that slides between options. Madefor Text weight 500 14px labels.

## Do's and Don'ts

### Do
- Use Madefor Display weight 400 for all display headlines — never bold them, the whisper-weight is the brand
- Set the primary CTA fill to #ebffb1 lime with dark text — it is the only saturated color allowed on interactive surfaces
- Use 999px pill radius for all buttons, tags, chips, and toggles — no square buttons exist in this system
- Use 10px radius for all cards and product surfaces — never sharp corners, never larger rounding
- Set body and nav text to Madefor Text with 0.1em letter-spacing — the expanded tracking is a signature of the typeface
- Build section rhythm with full-bleed gradient bands (blue hero, orange mid-page) instead of hard borders or dividers
- Use #faf9f7 warm off-white for the page canvas and #ffffff only for cards and elevated surfaces

### Don't
- Do not add shadows to anything except the product preview card — shadow is rationed to one element
- Do not use bold (600+) or black weights for headlines — weight 400 at large size is the display voice
- Do not introduce additional saturated colors — lime is the sole chromatic accent; everything else is achromatic or gradient-borne
- Do not use sharp corners on buttons or cards — pill controls and 10px card radii are mandatory
- Do not use #000000 for card backgrounds or large fills — reserve it for text, icons, and the darkest inverted button
- Do not add drop shadows to nav, tags, or suggestion chips — rely on borders and surface contrast
- Do not break the white-on-warm-canvas surface model — never use #ffffff for the page background or #faf9f7 for cards

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#faf9f7` | Warm off-white page background |
| 1 | Paper | `#ffffff` | Card and product surface on canvas |
| 2 | Warm Gray | `#f0eeeb` | Subtle banded sections between white content blocks |
| 3 | Lime Highlight | `#ebffb1` | Active and CTA fills that float above paper |

## Elevation

- **Product preview card:** `rgba(34, 40, 42, 0.04) 0px 3px 10px 0px`
- **All other cards:** `none — rely on white-on-canvas contrast, not shadows`

## Imagery

Product screenshots dominate over photography. Dark-themed product UI mockups (kanban boards, task managers) sit on white preview cards to contrast against the warm canvas — the dark product UI is the visual hero. Gradient bands (blue-to-white at top, orange-to-coral mid-page) act as atmospheric section dividers, not decorative imagery. Icons are line-style, monochrome, thin-stroke. No lifestyle photography, no 3D renders, no illustrations — the interface and product screenshots are the only visuals.

## Layout

Max-width 1200px centered container, full-bleed gradient bands at section boundaries. Hero is centered text-over-gradient with a floating prompt card below. Mid-page alternates between white card bands and warm-gray (#f0eeeb) bands, each carrying a 2-column text+product-preview layout. Cards sit on a 2-column grid for features. Sticky top nav with centered link group. Vertical rhythm is generous — 80px between sections, 40px card padding. The orange gradient band acts as a horizon line breaking the page into distinct visual chapters.

## Agent Prompt Guide

Quick Color Reference:
- text: #000000 / #232529
- background (canvas): #faf9f7
- surface (card): #ffffff
- border: #e6e6e6 / #cfcfcf
- accent: #ebffb1 (lime)
- primary action: #ebffb1 (filled action)

Example Component Prompts:
1. Build a hero announcement pill: transparent fill, 1px #cfcfcf border, 999px radius, 8px 20px padding. Contains a small orange "NEW" badge (10px weight 600, 999px radius, 2px 10px padding) and Madefor Text 14px weight 500 label text in #232529 with a right-arrow icon.
2. Create a Primary Action Button: #ebffb1 background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.
4. Build a suggestion chip: #ffffff fill, 1px #cfcfcf border, 999px radius, 6px 16px padding, Madefor Text weight 400 14px text in #232529.
5. Build a section gradient band: full-bleed, ~160px tall, using linear-gradient(rgba(250,249,247,0) 2.69%, rgb(255,240,222) 24.16%, rgb(255,174,83) 56.55%, rgba(255,174,83,0) 98.02%) to create a warm orange horizon between content sections.

## Similar Brands

- **Bolt.new** — Same warm off-white canvas, lime-green primary CTA, whisper-weight display headlines, and pill-shaped controls in an AI-builder product context
- **V0 by Vercel** — Monochrome near-white interface with a single chromatic accent, minimal shadow, and generous whitespace around a centered prompt-driven hero
- **Cursor** — Dark-on-light product screenshots embedded in light cards, restrained palette, and pill-shaped nav controls with light-weight display type
- **Lovable** — Warm-light canvas with gradient section bands, single accent color for primary action, and anti-convention light-weight display headlines at large sizes

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-lime-spark: #ebffb1;
  --color-lime-bolt: #ade900;
  --color-ember-outline: #d8723c;
  --color-solar-orange: #ff7f47;
  --gradient-solar-orange: linear-gradient(rgba(250, 249, 247, 0) 2.69%, rgb(255, 240, 222) 24.16%, rgb(255, 174, 83) 56.55%, rgba(255, 174, 83, 0) 98.02%);
  --color-sky-wash: #5db3cf;
  --color-charcoal: #0f0f0f;
  --color-ink: #232529;
  --color-graphite: #696f7b;
  --color-slate: #324158;
  --color-stone-border: #cfcfcf;
  --color-mist-border: #b7b7b7;
  --color-hairline: #e6e6e6;
  --color-canvas: #faf9f7;
  --color-paper: #ffffff;
  --color-pure-black: #000000;
  --color-daybreak-horizon: #cfe0e0;
  --gradient-daybreak-horizon: linear-gradient(rgb(242, 241, 237) 42.49%, rgb(213, 223, 224) 93.98%, rgb(229, 255, 148) 104.08%);

  /* Typography — Font Families */
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-madefor-display: 'Madefor Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wix-madefor-text-v2: 'wix-madefor-text-v2', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wfont343a2a4e484da66ffc4465a05a1c9ea5caf495: 'wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wfont343a2a5b4cd32fc19d46e1b8c1b142abb27d39: 'wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-madefor-text: 'Madefor-Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 1.4px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 1.6px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 1.8px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.1;
  --text-heading: 34px;
  --leading-heading: 1.1;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.07;
  --text-display: 56px;
  --leading-display: 1;
  --text-display-lg: 63px;
  --leading-display-lg: 1;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-68: 68px;
  --spacing-76: 76px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-lg: 7.42183px;
  --radius-lg-2: 9.89577px;
  --radius-xl: 13.8541px;
  --radius-3xl: 25.9766px;
  --radius-3xl-2: 30px;
  --radius-full: 59.375px;
  --radius-full-2: 70px;
  --radius-full-3: 100px;
  --radius-full-4: 300px;
  --radius-full-5: 741.445px;
  --radius-full-6: 999px;

  /* Named Radii */
  --radius-tags: 999px;
  --radius-cards: 10px;
  --radius-links: 300px;
  --radius-small: 7px;
  --radius-images: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 999px;

  /* Shadows */
  --shadow-md: rgba(34, 40, 42, 0.04) 0px 3px 10px 0px;

  /* Surfaces */
  --surface-canvas: #faf9f7;
  --surface-paper: #ffffff;
  --surface-warm-gray: #f0eeeb;
  --surface-lime-highlight: #ebffb1;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-lime-spark: #ebffb1;
  --color-lime-bolt: #ade900;
  --color-ember-outline: #d8723c;
  --color-solar-orange: #ff7f47;
  --color-sky-wash: #5db3cf;
  --color-charcoal: #0f0f0f;
  --color-ink: #232529;
  --color-graphite: #696f7b;
  --color-slate: #324158;
  --color-stone-border: #cfcfcf;
  --color-mist-border: #b7b7b7;
  --color-hairline: #e6e6e6;
  --color-canvas: #faf9f7;
  --color-paper: #ffffff;
  --color-pure-black: #000000;
  --color-daybreak-horizon: #cfe0e0;

  /* Typography */
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-madefor-display: 'Madefor Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wix-madefor-text-v2: 'wix-madefor-text-v2', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wfont343a2a4e484da66ffc4465a05a1c9ea5caf495: 'wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-wfont343a2a5b4cd32fc19d46e1b8c1b142abb27d39: 'wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-madefor-text: 'Madefor-Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 1.4px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 1.6px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 1.8px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.1;
  --text-heading: 34px;
  --leading-heading: 1.1;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.07;
  --text-display: 56px;
  --leading-display: 1;
  --text-display-lg: 63px;
  --leading-display-lg: 1;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-68: 68px;
  --spacing-76: 76px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-lg: 7.42183px;
  --radius-lg-2: 9.89577px;
  --radius-xl: 13.8541px;
  --radius-3xl: 25.9766px;
  --radius-3xl-2: 30px;
  --radius-full: 59.375px;
  --radius-full-2: 70px;
  --radius-full-3: 100px;
  --radius-full-4: 300px;
  --radius-full-5: 741.445px;
  --radius-full-6: 999px;

  /* Shadows */
  --shadow-md: rgba(34, 40, 42, 0.04) 0px 3px 10px 0px;
}
```