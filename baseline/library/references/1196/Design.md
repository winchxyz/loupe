# AI for Business — Style Reference
> Swiss editorial spread on cool paper

**Theme:** light

Dayos runs a Swiss-editorial visual system: a soft gray canvas holding massive, ultra-condensed display headlines, restrained grotesque body text, and a tiny mono voice for tags and micro-labels. The page behaves like a print spread — one colossal typographic statement per section, set tight (0.90 line-height, -3% tracking), supported by generous whitespace rather than dividers or rules. Color is nearly absent in chrome and nearly explosive in 3D illustration; UI accents are a single soft mint and a single electric yellow used surgically as highlight washes. Surfaces are flat — no shadows, no gradients — and rely on a 5-level tonal stack (canvas → white card → mist → mint → yellow) to separate layers. Components stay small and confident: a pill-shaped white nav bar, near-square dark buttons, oversized rounded cards. The feeling is engineered restraint with a playful object at the center of the page.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas Mist | `#e5e7eb` | `--color-canvas-mist` | Page background, section canvases, hairline dividers and UI borders — the quiet ground on which all display type rests |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, navigation pill background, elevated panels, button and nav text |
| Surface Mist | `#f3f3f3` | `--color-surface-mist` | Subtle secondary surfaces, button hover washes, low-emphasis panels one step off the canvas |
| Ink Black | `#000000` | `--color-ink-black` | Primary headings, body text, and icon fills on light surfaces. Do not promote it to the primary CTA color |
| Steel Gray | `#979797` | `--color-steel-gray` | Secondary body text, captions, muted link text, placeholder fills — the quietest readable neutral |
| Graphite | `#444444` | `--color-graphite` | Navigation text at rest, secondary borders, subdued button outlines |
| Mint Pulse | `#d1ffca` | `--color-mint-pulse` | Sole highlight wash behind emphasized inline links or selected tags — a single soft chromatic moment against the monochrome field |
| Electric Yellow | `#fff100` | `--color-electric-yellow` | Inline text emphasis, marker highlights, and the dominant hue inside the 3D hero illustration — the loudest voice in the system, reserved for moments that must stop the eye |

## Tokens — Typography

### SuisseIntl — Primary UI and body face — nav links, buttons, body copy, subheadings. Medium weight (450) acts as the system's quiet semibold for buttons and small headings without introducing a heavy bold voice. · `--font-suisseintl`
- **Substitute:** Inter or Neue Haas Grotesk
- **Weights:** 400, 450, 500
- **Sizes:** 14, 16, 18, 20, 28, 40
- **Line height:** 1.10–1.33
- **Letter spacing:** -0.0100em at 40px → -0.40px, -0.0110em at 18–20px → -0.20 to -0.22px, -0.0200em at 14–16px → -0.28 to -0.32px, -0.0300em at 12px → -0.36px
- **Role:** Primary UI and body face — nav links, buttons, body copy, subheadings. Medium weight (450) acts as the system's quiet semibold for buttons and small headings without introducing a heavy bold voice.

### SuisseIntlCond — Display headline face for hero and section statements. The 0.90 line-height and 700 condensed weight stack letters into monumental blocks; 130px is reserved for the hero, 80px for second-tier section openers. The signature choice — every other system reaches for a regular-width display weight; this one crams vertical density into headline space. · `--font-suisseintlcond`
- **Substitute:** Barlow Condensed Bold or Roboto Condensed Bold
- **Weights:** 700
- **Sizes:** 48, 64, 80, 130
- **Line height:** 0.90
- **Letter spacing:** -0.0300em across all sizes → -1.44px at 48px, -1.92px at 64px, -2.40px at 80px, -3.90px at 130px
- **Role:** Display headline face for hero and section statements. The 0.90 line-height and 700 condensed weight stack letters into monumental blocks; 130px is reserved for the hero, 80px for second-tier section openers. The signature choice — every other system reaches for a regular-width display weight; this one crams vertical density into headline space.

### SuisseIntlMono — Mono micro-voice for tags, category labels, small button text, and inline markers. 12px is the only size — it functions as a typographic system signature, not a body alternative. · `--font-suisseintlmono`
- **Substitute:** JetBrains Mono or IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12
- **Line height:** 1.30–1.60
- **Letter spacing:** -0.0300em at 12px → -0.36px
- **Role:** Mono micro-voice for tags, category labels, small button text, and inline markers. 12px is the only size — it functions as a typographic system signature, not a body alternative.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.3 | -0.36px | `--text-caption` |
| body-sm | 14px | 1.3 | -0.28px | `--text-body-sm` |
| body | 16px | 1.33 | -0.32px | `--text-body` |
| subheading | 20px | 1.25 | -0.22px | `--text-subheading` |
| heading-sm | 28px | 1.2 | -0.31px | `--text-heading-sm` |
| heading | 40px | 1.14 | -0.4px | `--text-heading` |
| heading-lg | 48px | 1.1 | -1.44px | `--text-heading-lg` |
| display | 80px | 0.9 | -2.4px | `--text-display` |
| display-xl | 130px | 0.9 | -3.9px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 20px |
| cards | 32px |
| buttons | 4px |
| nav-pill | 48px |
| button-pill | 8px |
| cards-large | 64px |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Navigation Pill
**Role:** Primary header container

White (#ffffff) pill, 48px border-radius, single horizontal bar floating on the #e5e7eb canvas. Holds brand mark left, 6–7 nav items in a horizontal row at 14–16px SuisseIntl 500, and a filled dark button right. Sits with generous top/bottom page padding (~24px) and feels weightless — no shadow, no border, just shape against the gray ground.

### Filled Dark Button
**Role:** Primary conversion surface

#000000 background, #ffffff text, SuisseIntl 450–500 at 14px, tracking -0.0200em. 8px border-radius, 10px vertical / 20px horizontal padding. Used for the single 'Schedule a Demo' surface in the header and any equivalent conversion. Tight rectangular form, no border, no shadow.

### Ghost Nav Link
**Role:** Navigation link in the pill

Transparent background, no border, text in #444444 or #000000 at 14–16px SuisseIntl 500, letter-spacing -0.0200em. Underline or color shift on hover only — no fill change, no background pill.

### Display Headline
**Role:** Hero or section statement

SuisseIntlCond 700 in #000000. Hero instance at 80–130px, secondary section openers at 48–64px. Line-height locked to 0.90, letter-spacing -0.0300em. May include inline accent highlights set in #fff100 or #d1ffca as full-text or single-word emphasis.

### Subheadline Body
**Role:** Hero and section supporting copy

SuisseIntl 400 in #000000 at 18–20px, line-height 1.20–1.25, tracking -0.0110em. Set in a narrow column (typically under 480px wide) directly below the display headline. No muted color treatment — copy stays full black for editorial weight.

### Highlighted Link
**Role:** Emphasized inline link

SuisseIntl 500 text in #000000 with a #d1ffca background highlight behind the text run. The mint block sits behind the text glyphs (not the full line), reading like a marker swipe. 4px vertical / 8px horizontal padding implied by the marker offset.

### Yellow Marker Word
**Role:** Inline display emphasis

Single word or short phrase inside a display headline set in #fff100 instead of #000000. The same letter-spacing and weight apply — only color changes, so the chromatic word reads as part of the type, not a decoration.

### Mono Micro Tag
**Role:** Category or section label

SuisseIntlMono 400 at 12px in #000000 or #444444, tracking -0.0300em. Optional all-caps. Functions as a typographic kicker above a display headline or as a button label on small chips.

### Oversized Card
**Role:** Feature or content block surface

#ffffff surface on the #e5e7eb canvas. Border-radius 32px (standard) or 64px (feature panels). Padding 24px on standard, up to 40–46px on oversized feature cards. No border, no shadow — separation comes from white-against-gray alone.

### 3D Hero Object
**Role:** Primary visual on hero

Sculptural 3D render — geometric base (hexagonal column) in neutral stone/wood with bright cubes (#fff100 yellow, #d1ffca mint-adjacent green, magenta accent) bursting from the top. Sits right of the hero text, occupying roughly the right 45% of the viewport. No border, no shadow plate on the canvas — the object is lit and self-shadowing.

### Footer / Section Divider
**Role:** Vertical rhythm marker

No visible rule. Section breaks are created by 80px vertical whitespace and the switch from white card back to #e5e7eb canvas. Functional dividers, where needed, are 1px #e5e7eb lines (matching the canvas, used against white surfaces).

## Do's and Don'ts

### Do
- Set hero and section openers in SuisseIntlCond 700 at 48–130px with line-height 0.90 and letter-spacing -0.0300em
- Keep the page canvas at #e5e7eb; let #ffffff cards float on it rather than painting the whole page white
- Reserve #fff100 for a single emphasis word inside a display headline or for the hero 3D object — never as a button or large surface
- Use the 5-level surface stack in order (canvas → white → mist → mint → yellow); do not introduce new neutrals between levels
- Set body copy in SuisseIntl 400–500 at 16–20px, tracking between -0.0100em and -0.0110em
- Use card radii of 32px (standard) and 64px (oversized feature); reserve 48px for the navigation pill and 4–8px for buttons
- Maintain 80px between major sections; 24px element gap, 16px card padding baseline

### Don't
- Do not switch the canvas to #ffffff — the gray ground is the system's signature, not a default
- Do not apply SuisseIntlCond to body, nav, or button copy — its 0.90 line-height collapses readability below 40px
- Do not add drop shadows, inner shadows, or gradient fills to cards, buttons, or the nav — the system is intentionally flat
- Do not introduce additional chromatic hues; mint and yellow are the only two accent colors allowed in the UI
- Do not use #fff100 or #d1ffca as a full-width section background outside the 3D illustration context
- Do not set display headlines in any weight other than 700 condensed, or at any size below 48px
- Do not soften the headline tracking; -0.0300em is required at every display size to hold the type together at 0.90 line-height

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#e5e7eb` | Page and section ground |
| 2 | Card | `#ffffff` | Cards, nav pill, elevated content blocks |
| 3 | Subtle Surface | `#f3f3f3` | Secondary wash for buttons, hovered rows, low-contrast panels |
| 4 | Accent Wash | `#d1ffca` | Mint highlight behind emphasized links or selected tags |
| 5 | Accent Loud | `#fff100` | Yellow marker surface for spotlight moments and illustration |

## Elevation

- **Cards:** `none — separation comes from #ffffff surface on #e5e7eb canvas`
- **Navigation Pill:** `none — shape and white-on-gray contrast carry the affordance`
- **Buttons:** `none — solid #000000 fill against the lighter surrounding`

## Imagery

Imagery is dominated by a single 3D-rendered hero object: a hexagonal column base in stone and wood, with brightly colored geometric cubes (#fff100 yellow, mint green, magenta) bursting from the top. The object is lit with self-shadows, contains its own depth, and sits on a subtle floor reflection. There is no photography, no lifestyle imagery, and no secondary illustration. Icons in the UI are minimal — small stroked marks for nav indicators and button chevrons. The rest of the visual space is type on the gray canvas.

## Layout

The page is a max-width 1280px centered container on a full-bleed #e5e7eb canvas. The hero is an asymmetric split: text occupies the left ~55% in a narrow column, the 3D object fills the right ~45% with no border or card behind it. The display headline sets the vertical scale of the page — it determines section padding rather than the other way around. Below the hero, sections alternate between white #ffffff card surfaces (with 32–64px radius) and open #e5e7eb canvas, separated by ~80px of vertical whitespace rather than visible rules. Navigation is a single white pill bar at the top of the page, not a full-bleed header. The overall rhythm is sparse and editorial: one typographic statement per section, generous breathing room, no dense card grids.

## Agent Prompt Guide

**Quick Color Reference**
- text: #000000
- background (canvas): #e5e7eb
- border / divider: #e5e7eb
- accent (mint highlight): #d1ffca
- accent (yellow emphasis): #fff100
- primary action: no distinct CTA color

**Example Component Prompts**
1. **Hero section** — #e5e7eb canvas, full-bleed. Left column (max 520px): display headline in SuisseIntlCond 700 at 80–130px, #000000, line-height 0.90, letter-spacing -0.0300em. Below it, body subheadline in SuisseIntl 400 at 18px, #000000, line-height 1.25. Right column: a 3D-rendered geometric object (hexagonal column with bright yellow, green, and magenta cubes bursting from the top) occupying the right 45% of the viewport, no border, no card.

2. **Navigation pill** — White (#ffffff) pill, 48px border-radius, centered horizontally near the top of the page. Brand mark (small star + 'dayos') on the left at 16px SuisseIntl 500 #000000. Centered row of 6 nav links in SuisseIntl 500 at 14–16px, #444444, no underline. Right-side filled surface button: #000000 background, #ffffff text in SuisseIntl 450 at 14px, 8px radius, 10px vertical / 20px horizontal padding.

3. **Highlighted link** — Inline link set in SuisseIntl 500 at 16px, #000000 text, with a #d1ffca marker-highlight background behind the text run (4px vertical offset, matching the line-height gutter). The mint block should sit tight to the glyphs, not the full line.

4. **Feature card** — #ffffff surface, 32px border-radius, 24px padding, on a #e5e7eb section background. No border, no shadow. Top: 12px SuisseIntlMono 400 label in #444444, tracking -0.0300em. Below: heading in SuisseIntl 500 at 28px, #000000, line-height 1.20. Body copy in SuisseIntl 400 at 16px, #000000.

5. **Section opener with yellow emphasis** — Large SuisseIntlCond 700 at 64px, #000000, line-height 0.90, letter-spacing -0.0300em, on #e5e7eb canvas. One word inside the headline set in #fff100 instead of #000000. The chromatic word uses the same font, weight, and tracking — only the color changes.

## Typographic Discipline

Three font families, each with one job: SuisseIntlCond speaks once per section and dominates the page; SuisseIntl carries every interaction and paragraph; SuisseIntlMono labels and tags at exactly 12px. The condensed display face never appears below 48px, and the mono face never appears above 12px. This separation is the typographic system — adding a fourth voice or relaxing either boundary breaks the rhythm.

## Similar Brands

- **Linear** — Same editorial restraint with monochrome chrome, oversized geometric display type, and a single accent reserved for emphasis rather than decoration
- **Vercel** — Flat, shadowless surfaces on a near-white canvas, with a single saturated accent color used only for marker highlights and emphasis words
- **Runway** — AI-product brand using a massive condensed display headline paired with a 3D sculptural object on a soft gray ground, with playful chromatic accents inside the illustration only
- **Anthropic** — Editorial Swiss-influenced layout, narrow text columns beside a single dominant visual, restrained palette with one warm accent and very tight display tracking
- **Loom** — Comfortable-density page with oversized headlines, gray canvas carrying white cards, and a near-absent UI palette that lets the product/illustration provide all the color

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-canvas-mist: #e5e7eb;
  --color-pure-white: #ffffff;
  --color-surface-mist: #f3f3f3;
  --color-ink-black: #000000;
  --color-steel-gray: #979797;
  --color-graphite: #444444;
  --color-mint-pulse: #d1ffca;
  --color-electric-yellow: #fff100;

  /* Typography — Font Families */
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlcond: 'SuisseIntlCond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.33;
  --tracking-body: -0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.31px;
  --text-heading: 40px;
  --leading-heading: 1.14;
  --tracking-heading: -0.4px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.44px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.4px;
  --text-display-xl: 130px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: -3.9px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w450: 450;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-full: 48px;
  --radius-full-2: 64px;

  /* Named Radii */
  --radius-tags: 20px;
  --radius-cards: 32px;
  --radius-buttons: 4px;
  --radius-nav-pill: 48px;
  --radius-button-pill: 8px;
  --radius-cards-large: 64px;

  /* Surfaces */
  --surface-canvas: #e5e7eb;
  --surface-card: #ffffff;
  --surface-subtle-surface: #f3f3f3;
  --surface-accent-wash: #d1ffca;
  --surface-accent-loud: #fff100;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-canvas-mist: #e5e7eb;
  --color-pure-white: #ffffff;
  --color-surface-mist: #f3f3f3;
  --color-ink-black: #000000;
  --color-steel-gray: #979797;
  --color-graphite: #444444;
  --color-mint-pulse: #d1ffca;
  --color-electric-yellow: #fff100;

  /* Typography */
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlcond: 'SuisseIntlCond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.33;
  --tracking-body: -0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.31px;
  --text-heading: 40px;
  --leading-heading: 1.14;
  --tracking-heading: -0.4px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.44px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.4px;
  --text-display-xl: 130px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: -3.9px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-full: 48px;
  --radius-full-2: 64px;
}
```