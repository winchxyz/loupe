# Steep — Style Reference
> Soft dawn on a marble dashboard

**Theme:** light

Steep is a daylight analytics workspace: an almost achromatic canvas of white and warm-gray surfaces warmed by a single, restrained rust-peach accent and softened by a serif/sans pairing that reads as editorial rather than enterprise. The hero is a peach-lit dawn — a soft radial glow behind a monumental Signifier headline and floating product cards — then the screen settles into a cool marble dashboard where the product does the talking. Signifier carries all display weight (a deliberate contrast against the utilitarian Sohne body), radii are generously large (24px cards feel like ceramic tiles, not windows), and the entire palette treats color as punctuation: chrome is monochrome, data visualization gets the only two chromatic voices (warm rust and cool blue), and one dark fill button does all the asking. The result feels closer to a magazine layout than a SaaS dashboard — calm, editorial, confident.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink | `#17191c` | `--color-ink` | Primary text, filled CTA buttons, dark surfaces — near-black with a whisper of warmth that pairs naturally with the peach accent |
| Pure White | `#ffffff` | `--color-pure-white` | Page canvas, card surfaces, text on dark buttons |
| Fog | `#f7f7f8` | `--color-fog` | Secondary canvas and section backgrounds, sidebar surfaces |
| Ash | `#4c4c4c` | `--color-ash` | Muted body text, secondary strokes |
| Graphite | `#777b86` | `--color-graphite` | Tertiary text, icon strokes, inactive link borders |
| Dove | `#a3a6af` | `--color-dove` | Hairline borders, placeholder text, low-emphasis dividers |
| Slate | `#8b8c8d` | `--color-slate` | Subtle icon and link borders in low-emphasis contexts |
| Obsidian | `#000000` | `--color-obsidian` | Sharp borders, hairlines, deep strokes — used at very small weights to delineate without color |
| Rust | `#5d2a1a` | `--color-rust` | Signature warm accent — donut chart strokes, chart line accents, warm data-viz borders, decorative strokes |
| Apricot Wash | `#fbe1d1` | `--color-apricot-wash` | Soft warm card background for warm-toned data widgets, hero glow tint |
| Sky Wash | `#d3e3fc` | `--color-sky-wash` | Soft cool card background for cool-toned data widgets and chat surfaces |

## Tokens — Typography

### Signifier — Display serif used exclusively for hero and section headlines — the only place the brand 'raises its voice'. Its editorial weight against Sohne's utility is the system's most distinctive typographic move · `--font-signifier`
- **Substitute:** GT Sectra, Tiempos Headline, Source Serif Pro
- **Weights:** 400
- **Sizes:** 44px, 64px, 90px
- **Line height:** 1.10
- **Letter spacing:** -0.025em at 64-90px, -0.015em at 44px
- **Role:** Display serif used exclusively for hero and section headlines — the only place the brand 'raises its voice'. Its editorial weight against Sohne's utility is the system's most distinctive typographic move

### Sohne — Body and UI workhorse — navigation, buttons, table cells, form labels, captions. The unusual 430/450/480 micro-weights create a finely graduated hierarchy across data-dense screens without changing font families · `--font-sohne`
- **Substitute:** Inter, Untitled Sans, Söhne (commercial), General Sans
- **Weights:** 400, 430, 450, 480, 500
- **Sizes:** 14px, 15px, 16px, 17px, 18px, 22px, 26px
- **Line height:** 1.25-1.50
- **Letter spacing:** -0.009em
- **Role:** Body and UI workhorse — navigation, buttons, table cells, form labels, captions. The unusual 430/450/480 micro-weights create a finely graduated hierarchy across data-dense screens without changing font families

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.5 | -0.13px | `--text-caption` |
| body | 16px | 1.38 | -0.14px | `--text-body` |
| body-lg | 18px | 1.35 | -0.16px | `--text-body-lg` |
| subheading | 22px | 1.25 | -0.2px | `--text-subheading` |
| heading-sm | 26px | 1.18 | -0.23px | `--text-heading-sm` |
| heading | 44px | 1.1 | -0.66px | `--text-heading` |
| heading-lg | 64px | 1.1 | -1.6px | `--text-heading-lg` |
| display | 90px | 1.1 | -2.25px | `--text-display` |

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
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 124 | 124px | `--spacing-124` |
| 128 | 128px | `--spacing-128` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 24px |
| images | 12px |
| inputs | 16px |
| avatars | 9999px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1)...` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 20-24px
- **Element gap:** 8px

## Components

### Filled Dark CTA
**Role:** Primary action button

Pill shape (9999px radius), Ink (#17191c) background, white text at Sohne 15px weight 450, 8px 20px padding, -0.009em tracking. The only filled button in the system; one per screen maximum.

### Text Link Button
**Role:** Secondary action

Ink (#17191c) text, Sohne 15px weight 450, no border or background, paired horizontally with the filled CTA. Sits immediately to the right of the primary button.

### Top Navigation Bar
**Role:** Global navigation

White background, no shadow, Ink logo at left, horizontal nav links (Product, Resources, Customers, Pricing) at Sohne 15px in Ink, ghost text-link and filled CTA grouped at right. Sticky, 64-72px tall, hairline Dove bottom border optional.

### Product Dashboard Card
**Role:** Data widget container

White surface, 24px radius, 20-24px internal padding, card shadow (1px ink-tinted border-shadow + soft 20px/25px drop). Houses a single data visualization: bar chart, donut, line chart, or table.

### Warm Data Card
**Role:** Chart card with warm accent

Apricot Wash (#fbe1d1) background, 24px radius, 20-24px padding. Contains warm-toned visualizations (donut with Rust stroke, line chart with Rust fill). Used sparingly to warm the data grid.

### Cool Data Card
**Role:** Chart card with cool accent

Sky Wash (#d3e3fc) background, 24px radius, 20-24px padding. Contains cool-toned visualizations (bar charts in blue tones, line charts in blue).

### Sidebar Navigation
**Role:** Product app navigation

Fog (#f7f7f8) background, ~240px wide, no border. Logo at top, primary nav items with 16px icons + 15px Sohne text in Ink, grouped sections (Teams with color-dot indicators, Favorites). Active item shows subtle background tint.

### Chat Input Field
**Role:** AI query input

White surface, 16-20px radius, 16px 20px padding, subtle 1px Dove border, 15px Sohne placeholder in Graphite. Black circular send button (40px, 9999px radius) anchored at right.

### AI Response Card
**Role:** Chat response with chart

White surface, 24px radius, soft shadow, contains: light blue chart card (Sky Wash, 16px radius) with line chart in two colors (Rust for 'last month', blue for current), followed by H3 heading and body text in Ink and Ash.

### Avatar Badge
**Role:** User identity marker

32-40px circle, 9999px radius, colored pastel background (mint, sky, peach), 2-letter monogram in Ink at 13px weight 500. Floats over chart cards as annotation callouts.

### Region Stats Card
**Role:** Compact data table widget

White surface, 24px radius, 20px padding. Title in Sohne 15px weight 500 Ink, rows with region name in Graphite at 14px and right-aligned count in Ink at 14px weight 480. 12px row gap.

### Floating Hero Card
**Role:** Decorative product preview in hero

White surface, 24px radius, soft elevation shadow, positioned absolutely around the hero headline. Casts a single signature shadow: 1px ink-tinted border + 20px/25px soft drop + 8px/10px micro drop. Anchors with an avatar badge on one corner.

### Stat Card with Delta
**Role:** KPI display

White surface, 24px radius, 20px padding. Large Sohne number (26-44px Signifier or large Sohne 480) in Ink, small caption label in Graphite 13px, green/red delta indicator with arrow at 12px.

## Do's and Don'ts

### Do
- Use Signifier exclusively at 44-90px for hero and section headlines; never below 40px
- Set filled CTA radius to 9999px with Ink (#17191c) background — one per viewport, paired right with a text-link secondary
- Use 24px radius for all content cards, 20px for inner padding, 12px for product image crops
- Reserve the warm gradient glow for hero contexts only; product UI stays on white/Fog canvas
- Apply Apricot Wash (#fbe1d1) and Sky Wash (#d3e3fc) as card backgrounds for data widgets, not as decorative washes
- Set letter-spacing to -0.009em on all Sohne text and -0.025em on Signifier 64px+
- Build the signature card shadow as a three-layer stack: 1px ink-tinted border + 20px/25px drop + 8px/10px micro drop

### Don't
- Don't use Signifier for body copy, labels, navigation, or anything below 40px
- Don't introduce saturated blues, greens, or reds for UI chrome — the only chromatic voices are Rust and the two pastel washes
- Don't use sharp corners below 12px; the system depends on generous radii to feel soft
- Don't place the warm radial gradient anywhere outside the hero section
- Don't add borders heavier than 1px; delineation happens through surface tints and radii
- Don't use the dark Ink fill for anything other than the primary CTA and dark text
- Don't exceed one filled button per screen; secondary actions are text links, not ghost buttons

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#ffffff` | Page background, hero backdrop |
| 2 | Fog | `#f7f7f8` | Section backgrounds, sidebar canvas, product shell |
| 3 | Card | `#ffffff` | Elevated content cards with 24px radius |
| 4 | Warm Tint | `#fbe1d1` | Data visualization cards with warm-toned charts |
| 5 | Cool Tint | `#d3e3fc` | Data visualization cards with cool-toned charts, chat bubble surfaces |
| 6 | Ink | `#17191c` | Dark surface for filled CTAs, high-contrast blocks |

## Elevation

- **Floating product card:** `rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`

## Imagery

The site uses no photography or illustration in the marketing chrome — visual interest is generated entirely by floating product UI cards (data widgets, chat inputs, stat blocks) that orbit the hero headline. These cards are rendered as crisp white surfaces with real product content (bar charts, donut charts, line graphs, avatars) rather than abstract decoration. The product screenshots inside the app are clean white dashboards on Fog canvas with sidebar navigation. Iconography is outline-style at ~16-20px, monochrome Ink or Graphite, with a 1.5-2px stroke weight that matches the hairline border language. Avatar badges use pastel backgrounds (mint, sky, peach) as the only spot colors in the UI.

## Layout

Marketing pages use a max-width ~1200px centered column with the hero spanning full viewport width. The hero centers a large Signifier headline (one or two lines) over a soft warm radial gradient, with subtitle and CTA group centered below, surrounded by four floating product cards positioned at corners and edges. Below the hero, sections alternate between white and Fog (#f7f7f8) bands with 80px vertical gaps. Content blocks typically use a 2-column split (text + visual) or a 3-column card grid. The product app uses a fixed left sidebar (240px) with a fluid content area containing responsive card grids (3-4 columns of 24px-radius widgets). Navigation is a single sticky top bar — no mega-menus, no sidebar marketing nav.

## Agent Prompt Guide

**Quick Color Reference**
- text: #17191c (Ink)
- background: #ffffff (Pure White)
- surface: #f7f7f8 (Fog)
- border: #a3a6af (Dove) / #777b86 (Graphite)
- accent: #5d2a1a (Rust)
- primary action: #17191c (filled action)

**Example Component Prompts**
1. *Hero section:* white canvas with soft radial gradient glow in #fbe1d1 at 30% opacity, centered. Headline at 64px Signifier weight 400, #17191c, letter-spacing -1.6px. Subtitle at 18px Sohne weight 400, #4c4c4c. Filled CTA (Ink #17191c, white text, 9999px radius, 8px 20px padding) paired right with a text-link secondary.

2. *Dashboard card grid:* Fog (#f7f7f8) canvas, 3-column grid of white cards (24px radius, 20px padding, signature three-layer shadow). One card uses Apricot Wash background with a Rust-stroke donut chart; another uses Sky Wash with a blue bar chart.

3. *AI response card:* white surface, 24px radius, signature shadow. Inner chart card with Sky Wash background (16px radius) containing a two-line chart — Rust (#5d2a1a) for previous period, #4a90e2 blue for current. Followed by 26px Sohne weight 500 Ink heading and 16px Sohne weight 400 Ash body text with blue inline links.

4. *Sidebar navigation:* Fog (#f7f7f8) background, 240px wide, no border. Logo at top, nav items with 16px outline icons + 15px Sohne 450 in Ink, grouped under section labels (13px Sohne 500 in Graphite, uppercase, 0.5px tracking). Active item shows #ffffff background with 12px radius.

5. *Region stats card:* white surface, 24px radius, 20px padding. Title 'Region' at 15px Sohne 500 Ink. Rows at 14px Sohne — region name in #777b86, right-aligned count in Ink weight 480, separated by 12px vertical gap with no visible dividers.

## Typographic Voice

The Signifier/Sohne pairing is the brand's most identifiable decision. Signifier is the editorial voice — used only when the page is making a statement (hero headline, section openers, possibly pull quotes). Sohne is the working voice for everything else, including the rare subheading larger than 22px. The micro-weight range (430, 450, 480) within Sohne creates a granular hierarchy that replaces the usual bold/regular binary — a 450 weight table header reads as 'important' without being heavy. Never bold Sohne; use weight 480 or 500 instead. Never set Signifier below 40px — it loses its editorial authority and becomes an awkward novelty.

## Similar Brands

- **Linear** — Same editorial restraint: single dark CTA pill, generous 24px+ card radii, achromatic canvas with a single restrained accent, and a dual-typeface system that pairs a distinctive display face with a utility sans
- **Vercel** — Matches the floating-product-cards-around-headline hero pattern, monochrome chrome with warm gradient glow, and the same 'marble dashboard' product UI with sidebar + card grid
- **Stripe** — Same editorial typography pairing (serif display + sans body), generous spacing, and the use of soft pastel tints as card backgrounds for data visualization
- **Raycast** — Shares the pill-button + monochrome chrome + generous radii language, though Raycast is darker and more compact; Steep is the daylight equivalent
- **Height** — Same achromatic productivity-tool palette with a single warm accent, large radii, and the editorial-light feel of a tool that treats data as content rather than chrome

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink: #17191c;
  --color-pure-white: #ffffff;
  --color-fog: #f7f7f8;
  --color-ash: #4c4c4c;
  --color-graphite: #777b86;
  --color-dove: #a3a6af;
  --color-slate: #8b8c8d;
  --color-obsidian: #000000;
  --color-rust: #5d2a1a;
  --color-apricot-wash: #fbe1d1;
  --color-sky-wash: #d3e3fc;

  /* Typography — Font Families */
  --font-signifier: 'Signifier', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sohne: 'Sohne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.13px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: -0.14px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.35;
  --tracking-body-lg: -0.16px;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.23px;
  --text-heading: 44px;
  --leading-heading: 1.1;
  --tracking-heading: -0.66px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.6px;
  --text-display: 90px;
  --leading-display: 1.1;
  --tracking-display: -2.25px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w430: 430;
  --font-weight-w450: 450;
  --font-weight-w480: 480;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 20-24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-sm: 0.01px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-images: 12px;
  --radius-inputs: 16px;
  --radius-avatars: 9999px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-fog: #f7f7f8;
  --surface-card: #ffffff;
  --surface-warm-tint: #fbe1d1;
  --surface-cool-tint: #d3e3fc;
  --surface-ink: #17191c;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink: #17191c;
  --color-pure-white: #ffffff;
  --color-fog: #f7f7f8;
  --color-ash: #4c4c4c;
  --color-graphite: #777b86;
  --color-dove: #a3a6af;
  --color-slate: #8b8c8d;
  --color-obsidian: #000000;
  --color-rust: #5d2a1a;
  --color-apricot-wash: #fbe1d1;
  --color-sky-wash: #d3e3fc;

  /* Typography */
  --font-signifier: 'Signifier', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sohne: 'Sohne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.13px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: -0.14px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.35;
  --tracking-body-lg: -0.16px;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.23px;
  --text-heading: 44px;
  --leading-heading: 1.1;
  --tracking-heading: -0.66px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.6px;
  --text-display: 90px;
  --leading-display: 1.1;
  --tracking-display: -2.25px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-sm: 0.01px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;

  /* Shadows */
  --shadow-subtle: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
}
```