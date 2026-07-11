# Visitors — Style Reference
> frosted glass observatory at dawn — a periwinkle beacon rises over a white marble dashboard.

**Theme:** light

Visitors is a light, violet-accented analytics product that reads like a glass-walled observatory: bright white canvas, hairline borders, pill-shaped navigation, and one confident periwinkle action color that makes every interactive surface feel switched on. Typography stays in a single humanist sans (OpenRunde) with aggressively tightened tracking at every size, so headlines feel architectural rather than airy. Components are flat and compact — borders do the work that shadows usually would, corners are soft (8–24px), and gradient washes (blue-to-violet) appear only as atmospheric backgrounds behind floating product previews. Color is used sparingly and semantically: violet for primary action, green/yellow/pink/blue for data and icon variety, and near-black (#181925) for all meaningful text.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Periwinkle Beam | `linear-gradient(to right in oklab, rgb(44, 120, 252) 0%, rgb(145, 141, 246) 100%)` | `--color-periwinkle-beam` | Primary action background, active nav fills, brand icon strokes, decorative icon accents — the single chromatic action color across the system; Atmospheric section background transitioning from cobalt blue to periwinkle |
| Iris Dusk | `#9580ff` | `--color-iris-dusk` | Secondary violet variant for hover states and secondary action surfaces |
| Lavender Mist | `#dad9fc` | `--color-lavender-mist` | Soft tint for gentle background washes, subtle borders, and muted violet surfaces |
| Midnight Ink | `#181925` | `--color-midnight-ink` | Primary text, heading color, dark surface fill, high-contrast borders — the near-black that carries the entire information hierarchy |
| Graphite Veil | `#666666` | `--color-graphite-veil` | Hairline borders, icon strokes, muted dividers, secondary text — the dominant neutral border color |
| Ash | `#999999` | `--color-ash` | Tertiary text, inactive icon strokes, subtle UI lines |
| Fog | `#bbbcc3` | `--color-fog` | Light borders, inactive nav elements, low-emphasis dividers |
| Bone | `#e8e8e8` | `--color-bone` | Table dividers, table fills, very subtle separators |
| Paper | `#ffffff` | `--color-paper` | Page canvas, card surfaces, button text on dark fills, surface backgrounds |
| Mint Whisper | `#def6e4` | `--color-mint-whisper` | Soft section background, alternate surface, and quiet card fill |
| Signal Green | `#33c758` | `--color-signal-green` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Amber Spark | `#ffa600` | `--color-amber-spark` | Yellow decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Cobalt Pulse | `#2c78fc` | `--color-cobalt-pulse` | Violet accent for outlined action borders, linked labels, and lightweight interactive emphasis. Use as a supporting accent, not as a status color |
| Magenta Pop | `#d6409f` | `--color-magenta-pop` | Red decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Ember | `#ff3e00` | `--color-ember` | Sparse accent for SVG illustrations and highlight decorations |
| Chart Blue | `linear-gradient(to right in oklab, rgb(190, 213, 254) 0%, rgb(235, 242, 255) 50%, rgb(145, 141, 246) 100%)` | `--color-chart-blue` | Data sparkline gradient endpoint — light blue to cyan to periwinkle in dashboard previews |

## Tokens — Typography

### OpenRunde — Single-family type system for all UI, body, headings, and navigation. Heavily tightened tracking at all sizes — -0.05em at 12px, -0.025em at 24px, -0.05em at 60px — gives the type a condensed, architectural density unusual for a product analytics brand. · `--font-openrunde`
- **Substitute:** Inter, Geist, or Satoshi
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 24px, 36px, 48px, 60px
- **Line height:** 1.00–1.56
- **Letter spacing:** -0.05em at 12px, -0.027em at 13–14px, -0.025em at 16px, -0.023em at 18px, -0.02em at 20px, -0.018em at 24px, -0.016em at 36px, -0.013em at 48px, -0.05em at 60px
- **OpenType features:** `"ss01" on, "cv11" on`
- **Role:** Single-family type system for all UI, body, headings, and navigation. Heavily tightened tracking at all sizes — -0.05em at 12px, -0.025em at 24px, -0.05em at 60px — gives the type a condensed, architectural density unusual for a product analytics brand.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.6px | `--text-caption` |
| body | 14px | 1.5 | -0.38px | `--text-body` |
| body-lg | 16px | 1.56 | -0.4px | `--text-body-lg` |
| subheading | 18px | 1.33 | -0.41px | `--text-subheading` |
| heading-sm | 20px | 1.4 | -0.4px | `--text-heading-sm` |
| heading | 24px | 1.4 | -0.43px | `--text-heading` |
| heading-lg | 36px | 1.17 | -0.58px | `--text-heading-lg` |
| heading-xl | 48px | 1.13 | -0.62px | `--text-heading-xl` |
| display | 60px | 1 | -0.55px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| badges | 9999px |
| images | 8px |
| tables | 24px |
| buttons | 8px |
| navPill | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.08) 0px 1px 1px 1px, rgba(0, 0, 0, 0.06) ...` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) ...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) ...` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Floating Pill Navigation
**Role:** Sticky top navigation

Pill-shaped container, 9999px radius, dark fill (#181925), white text, 12px vertical / 16px horizontal padding, logo + 5 nav links + Login text + periwinkle (#918df6) Register button. Sits centered on canvas, not full-width. Box shadow: rgba(0,0,0,0.08) 0 1px 1px 1px, rgba(0,0,0,0.06) 0 0 0 0.5px.

### Primary CTA Button
**Role:** Filled action button

Background #918df6, white text, 8px radius, 12px 24px padding, OpenRunde 14px/500, letter-spacing -0.025em. Subtle dual-layer shadow: rgba(0,0,0,0.08) 0 1px 1px 0, rgba(0,0,0,0.05) 0 0 0 1px.

### Ghost Text Link
**Role:** Secondary action

No background, text #181925, OpenRunde 14px/500, 8px padding vertical, often paired with primary CTA inline.

### NEW Badge
**Role:** Feature flag indicator

Pill shape (9999px), light periwinkle background (#dad9fc), periwinkle text (#918df6), 10px 14px padding, 12px/600 weight, uppercase tracking.

### Hero Headline
**Role:** Landing hero title

60px/700 OpenRunde, #181925, letter-spacing -0.05em, line-height 1.0. Tight and architectural rather than airy — the negative tracking pulls letters together into near-condensed feel.

### Dashboard Preview Card
**Role:** Floating product screenshot

White card, 16px radius, sitting on a blue-to-violet gradient (#bed5fe → #918df6) atmospheric band. Contains tab bar (pill), metric tiles, sparkline chart, and revenue counter. Shadow: rgba(0,0,0,0.06) 0 1px 3px, rgba(0,0,0,0.06) 0 8px 16px, rgba(0,0,0,0.02) 0 0 0 1px.

### Tab Navigation Pill
**Role:** In-product view switcher

Horizontal pill container, 9999px radius, white background, hairline #e8e8e8 border. Active tab: periwinkle (#918df6) text on white. Inactive: #999999 text. OpenRunde 13px/500, 8px 16px padding per tab.

### Metric Stat Card
**Role:** KPI display

No background fill, 20px label (#999999) over 36px value (#181925), small +/- delta in Signal Green (#33c758) or Amber Spark (#ffa600). OpenRunde, tight letter-spacing.

### Feature Card (3-Column Grid)
**Role:** Value proposition block

Centered text block, 20px bold label (#181925) over 16px description (#666666). Periwinkle line icon (#918df6, ~24px) sits above. No card background — type and icon only, separated by generous 24px gaps. 3-column grid on desktop.

### Partner Logo Cloud
**Role:** Social proof strip

Horizontal row of 6 monochrome partner logos in #999999, evenly spaced, centered. No headings, no dividers — just a quiet band of marks.

### Experience Score Ring
**Role:** In-dashboard data visualization

Circular progress indicator, 100 score, Signal Green (#33c758) stroke ring. Paired with 36px/600 score number and 12px helper text.

### Data Sparkline
**Role:** Trend chart

Line chart with Periwinkle (#918df6) or Cobalt Pulse (#2c78fc) stroke, green (#33c758) data dots, hairline grid. White card background, 8px radius.

### Revenue Counter
**Role:** Highlight metric

36px/700 OpenRunde, Midnight Ink (#181925), prefixed currency symbol. Paired with small green up-arrow and percentage delta in Signal Green.

## Do's and Don'ts

### Do
- Use #918df6 as the single filled chromatic action background — never introduce a second filled button color.
- Apply OpenRunde with its native negative letter-spacing at every size; do not override to normal tracking.
- Set border-radius to 8px for buttons and images, 16px for cards, 24px for larger surfaces and tables — respect the radius hierarchy.
- Use hairline #666666 borders at 1px instead of shadows to create separation between surfaces.
- Pair the Floating Pill Navigation style (dark pill, periwinkle Register) as the consistent site header pattern.
- Use the blue-to-violet gradient (#2c78fc → #918df6) only as atmospheric backgrounds behind floating product mockups, never as UI fills.
- Keep type contrast high: #181925 on #ffffff at all sizes, and use #999999 only for truly de-emphasized text.

### Don't
- Do not add heavy drop shadows — the system uses 1px hairline borders and near-imperceptible shadow layers (0.04–0.08 opacity).
- Do not use multiple accent colors as fills — Signal Green, Amber Spark, Cobalt Pulse, and Magenta Pop are chart/illustration accents, not UI fills.
- Do not round all corners uniformly — the 8/16/24px radius hierarchy is a signature; mixing in 4px or fully rounded cards breaks the system.
- Do not use #000000 for body text — #181925 carries a subtle cool cast that differentiates it from pure black.
- Do not set headlines in light weights — the system uses 600–700 for all headings, leaning on negative tracking rather than weight to control density.
- Do not fill large areas with #dad9fc — it is a soft tint, not a surface color; reserve it for badges and micro-backgrounds.
- Do not use gradient text or gradient borders — gradients are strictly atmospheric, confined to background washes.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Page background, dominant surface |
| 1 | Card | `#ffffff` | Product preview, dashboard mockup, feature cards |
| 2 | Atmospheric Wash | `#918df6` | Blue-to-violet gradient bands behind product mockups |
| 3 | Highlight Tint | `#def6e4` | Soft green panels for status or highlight content |

## Elevation

- **Primary Button:** `rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`
- **Dashboard Preview Card:** `rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 8px 16px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px`
- **Floating Navigation:** `rgba(0, 0, 0, 0.08) 0px 1px 1px 1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px`

## Imagery

Minimal, product-centric visual language. No lifestyle photography or full-bleed editorial images. The dominant visual is the floating Dashboard Preview Card — a UI mockup with real-looking chart data, metric tiles, and a revenue counter, set against an atmospheric blue-to-violet gradient wash. Iconography is line-style in a single periwinkle stroke (#918df6), ~24px, used as feature markers above text blocks. Partner logos appear as monochrome marks in #999999 in a quiet horizontal cloud. The only other graphic element is the small colored dot/avatar indicators inside the dashboard preview (green, orange, blue, pink) that match the chart data palette. Overall: the product UI IS the hero — the page sells the product by showing it working, not by showing people using it.

## Layout

Centered, max-width contained layout (~1200px). The top is a floating pill-shaped navigation bar centered on the canvas, not full-bleed. Hero is a centered text stack: small NEW badge → 60px display headline → 16px subtitle → inline primary CTA + ghost link. Below the hero, a quiet partner logo cloud (no heading, no borders). A full-width atmospheric gradient band (blue-to-violet) then holds a floating Dashboard Preview Card that extends beyond its parent with a large 16px radius. Feature blocks alternate in 3-column grids with centered icon + label + description patterns. Sections are separated by 80px vertical gaps with no visible dividers — whitespace carries the rhythm. Navigation pattern: floating pill nav, not sticky sidebar or top bar.

## Agent Prompt Guide

**Quick Color Reference**
- text: #181925
- background: #ffffff
- border: #666666
- accent: #918df6 (Periwinkle Beam)
- chart data: #33c758 (Signal Green), #ffa600 (Amber Spark), #2c78fc (Cobalt Pulse), #d6409f (Magenta Pop)
- primary action: #918df6 (filled action)

**Example Component Prompts**

1. Create a Primary Action Button: #918df6 background, #181925 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. Create a floating navigation bar: pill shape (9999px radius), #181925 background, 12px 16px padding, white text links (14px/500 OpenRunde), periwinkle (#918df6) filled Register button on the right with white text and 8px radius. Shadow: rgba(0,0,0,0.08) 0 1px 1px 1px, rgba(0,0,0,0.06) 0 0 0 0.5px. Centered, max-width 720px.

3. Create a metric stat card: white background, no border. Label at 12px/500 OpenRunde in #999999, letter-spacing -0.025em. Value at 36px/700 OpenRunde in #181925, letter-spacing -0.016em. Delta indicator: small green (#33c758) up-arrow with 13px/500 text.

4. Create a dashboard preview card: white background, 16px radius, 24px padding. Contains a pill-shaped tab bar (5 tabs, 9999px radius, white background, #e8e8e8 border, active tab in #918df6 text). Below: a sparkline chart with #918df6 stroke line, #33c758 data dots, hairline #e8e8e8 grid. Shadow: rgba(0,0,0,0.06) 0 1px 3px, rgba(0,0,0,0.06) 0 8px 16px, rgba(0,0,0,0.02) 0 0 0 1px.

5. Create a 3-column feature grid: 3 equal columns with 24px gaps. Each cell: centered periwinkle line icon (#918df6, 24px, 1.5px stroke) at top, 20px/600 OpenRunde label in #181925, 16px/400 description in #666666. No card backgrounds, no borders.

## Atmospheric Gradient System

Gradients are reserved exclusively for atmospheric background washes that sit behind floating product mockups. Two approved gradients: (1) the Dawn Gradient — linear oklab from #2c78fc to #918df6, used as a full-bleed band behind the main Dashboard Preview Card; (2) chart-area gradients on the sparkline and progress visualizations within the dashboard — light blue (#bed5fe) through near-white (#ebf2ff) to periwinkle (#918df6). Gradients never appear on buttons, cards, text, icons, or borders. They are stage lighting, not decoration.

## Similar Brands

- **Plausible Analytics** — Same light-canvas analytics product language with a single bold accent color and compact dashboard mockups as hero imagery
- **Fathom Analytics** — Similar minimal landing page structure with centered headline, floating nav, and product preview floating over a soft gradient band
- **Cal.com** — Same pill-shaped floating navigation and tight-tracking custom sans typography, with a single vivid accent against white
- **Dub.co** — Matching dark-pill nav, periwinkle/violet accent, and the pattern of a dashboard mockup centered on an atmospheric gradient background
- **Vercel** — Similar restrained palette with one chromatic action color, gradient hero washes, and condensed geometric type with negative tracking

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-periwinkle-beam: #918df6;
  --gradient-periwinkle-beam: linear-gradient(to right in oklab, rgb(44, 120, 252) 0%, rgb(145, 141, 246) 100%);
  --color-iris-dusk: #9580ff;
  --color-lavender-mist: #dad9fc;
  --color-midnight-ink: #181925;
  --color-graphite-veil: #666666;
  --color-ash: #999999;
  --color-fog: #bbbcc3;
  --color-bone: #e8e8e8;
  --color-paper: #ffffff;
  --color-mint-whisper: #def6e4;
  --color-signal-green: #33c758;
  --color-amber-spark: #ffa600;
  --color-cobalt-pulse: #2c78fc;
  --color-magenta-pop: #d6409f;
  --color-ember: #ff3e00;
  --color-chart-blue: #bed5fe;
  --gradient-chart-blue: linear-gradient(to right in oklab, rgb(190, 213, 254) 0%, rgb(235, 242, 255) 50%, rgb(145, 141, 246) 100%);

  /* Typography — Font Families */
  --font-openrunde: 'OpenRunde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.6px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.38px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.56;
  --tracking-body-lg: -0.4px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.41px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.4px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: -0.43px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.58px;
  --text-heading-xl: 48px;
  --leading-heading-xl: 1.13;
  --tracking-heading-xl: -0.62px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -0.55px;

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
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-badges: 9999px;
  --radius-images: 8px;
  --radius-tables: 24px;
  --radius-buttons: 8px;
  --radius-navpill: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 1px 1px 1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 8px 16px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-card: #ffffff;
  --surface-atmospheric-wash: #918df6;
  --surface-highlight-tint: #def6e4;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-periwinkle-beam: #918df6;
  --color-iris-dusk: #9580ff;
  --color-lavender-mist: #dad9fc;
  --color-midnight-ink: #181925;
  --color-graphite-veil: #666666;
  --color-ash: #999999;
  --color-fog: #bbbcc3;
  --color-bone: #e8e8e8;
  --color-paper: #ffffff;
  --color-mint-whisper: #def6e4;
  --color-signal-green: #33c758;
  --color-amber-spark: #ffa600;
  --color-cobalt-pulse: #2c78fc;
  --color-magenta-pop: #d6409f;
  --color-ember: #ff3e00;
  --color-chart-blue: #bed5fe;

  /* Typography */
  --font-openrunde: 'OpenRunde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.6px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.38px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.56;
  --tracking-body-lg: -0.4px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.41px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.4px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: -0.43px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.58px;
  --text-heading-xl: 48px;
  --leading-heading-xl: 1.13;
  --tracking-heading-xl: -0.62px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -0.55px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 1px 1px 1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 8px 16px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
}
```