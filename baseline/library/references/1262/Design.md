# Ventriloc — Style Reference
> analytics console on parchment

**Theme:** light

Ventriloc speaks in a quiet, professional whisper against an off-white canvas — a workspace where data feels approachable rather than intimidating. The interface is built on tight geometric type (PolySans) paired with Inter for UI, an almost-monochrome neutral palette, and a single warm orange (#ff682c) that punctuates charts, icons, and logo marks with restrained energy. Surfaces are flat and lightly tinted (white cards on warm-gray canvas), corners are soft (8px cards, pill-shaped controls), and elevation comes from gentle background shifts rather than shadows. Buttons are pill-shaped, nav is a floating rounded capsule, and dashboard mockups are presented as pristine white cards — the whole experience reads as analytical, airy, and deliberately unfussy.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Signal Orange | `#ff682c` | `--color-signal-orange` | Brand accent — chart fills, logo swoosh, active indicators, small highlights; the single chromatic spark across an otherwise monochrome system |
| Sienna Bronze | `#816729` | `--color-sienna-bronze` | Muted brand tone — icon strokes, decorative chart elements, secondary brand marks where a subtler warmth is needed than Signal Orange |
| Carbon | `#202020` | `--color-carbon` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Graphite | `#4d4d4d` | `--color-graphite` | Secondary text, body emphasis, subdued borders |
| Slate | `#828282` | `--color-slate` | Muted helper text, inactive nav, tertiary borders, placeholder copy |
| Fog | `#f5f5f5` | `--color-fog` | Alt surface tint, subtle bands within white cards, nav hover washes |
| Mist | `#efefef` | `--color-mist` | Page canvas — the dominant warm-gray background that frames the white cards |
| Chalk | `#e8e8e8` | `--color-chalk` | Soft surface inset, nav background, very subtle dividers |
| Paper | `#ffffff` | `--color-paper` | Card surfaces, dashboard panels, content blocks lifted off the canvas |

## Tokens — Typography

### PolySans — Display and heading face — a geometric, slightly condensed custom sans. The 66px hero at line-height 0.91 creates very tight vertical density that makes headlines feel architectural. Used for the logo wordmark, hero headline, and section headings. Letter-spacing locked at -0.02em across all sizes. · `--font-polysans`
- **Substitute:** Space Grotesk, General Sans, or DM Sans
- **Weights:** 400
- **Sizes:** 12px, 13px, 16px, 32px, 40px, 66px
- **Line height:** 0.91, 1.00, 1.13, 1.19, 1.20, 1.38
- **Letter spacing:** -0.02em
- **Role:** Display and heading face — a geometric, slightly condensed custom sans. The 66px hero at line-height 0.91 creates very tight vertical density that makes headlines feel architectural. Used for the logo wordmark, hero headline, and section headings. Letter-spacing locked at -0.02em across all sizes.

### Inter — Body and UI text — handles paragraph copy, buttons, nav links, labels, table cells, and all secondary text. Weights 400 for body, 500 for labels and emphasis, 600 for button text. Normal letter-spacing throughout. · `--font-inter`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px
- **Line height:** 1.15, 1.20, 1.25, 1.33, 1.38, 1.43, 1.50
- **Role:** Body and UI text — handles paragraph copy, buttons, nav links, labels, table cells, and all secondary text. Weights 400 for body, 500 for labels and emphasis, 600 for button text. Normal letter-spacing throughout.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 16px | 1.38 | — | `--text-body` |
| body-lg | 18px | 1.33 | — | `--text-body-lg` |
| subheading | 32px | 1.19 | -0.64px | `--text-subheading` |
| heading | 40px | 1.13 | -0.8px | `--text-heading` |
| display | 66px | 0.91 | -1.32px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 60 | 60px | `--spacing-60` |
| 140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 20px |
| cards | 8px |
| inputs | 8px |
| buttons | 20px |
| navPill | 200px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 32-40px
- **Element gap:** 20px

## Components

### Hero Headline
**Role:** Page-level display title

PolySans weight 400 at 66px with line-height 0.91 and letter-spacing -1.32px. Left-aligned, Carbon (#202020) on the Mist canvas. The extremely tight line-height (0.91) makes the three lines stack almost touching — a deliberate 'compressed monument' effect. No maximum width constraint beyond the content column.

### Filled Pill Button
**Role:** Primary action

Inter weight 500 or 600, 15-16px, white text on Carbon (#202020) background. 20px border-radius for full pill shape. Horizontal padding 18-20px, vertical padding 8-12px. No visible border. The pill silhouette (height ~40-44px) is a signature of this system.

### Outlined Pill Button
**Role:** Secondary action

Inter weight 500, 15-16px, Carbon text with a 1px Carbon border on transparent background. 20px border-radius matching the filled variant. Same padding rhythm. Used alongside filled buttons in hero and CTA clusters.

### Floating Nav Capsule
**Role:** Primary site navigation

A single pill-shaped container (border-radius 200px) centered at the top, holding nav items inline. Inter 14-15px weight 500, Carbon text. White or very light background with subtle border (#828282 at 1px). Items have 10-13px horizontal padding. Contains dropdowns (services, achievements, ventriloc) indicated by small chevrons.

### Language Toggle
**Role:** Locale switcher

Short text link (Inter 14-15px) showing current locale (e.g. 'FR'). Sits as a standalone item in the top bar, separated from nav and CTA. No border or background — just Carbon text.

### Dashboard Preview Card
**Role:** Product mockup / hero visual

White card (#ffffff) with 8px border-radius, sitting on the Mist canvas. Contains chart visualizations with Signal Orange (#ff682c) filled area charts, dark line strokes, and small typography labels. Cards are layered and slightly offset to create a floating composition. No heavy drop shadow — just the white-on-gray contrast for separation.

### Metric KPI Card
**Role:** Dashboard stat tile

White surface with subtle internal padding, title in Inter 14-15px weight 500 Graphite, large value in PolySans 32-40px Carbon, delta indicator in small Inter 12px (green for positive, Graphite for neutral). Optional small circular icon in Signal Orange or Sienna Bronze.

### Area Chart Card
**Role:** Data visualization panel

White card containing a line/area chart. Line stroke in Carbon at ~2px, area fill in Signal Orange at low opacity (~15-20%) for the gradient effect. X-axis labels in Inter 12px Slate, y-axis in same. Clean grid lines or no grid — minimal chart chrome.

### Logo Mark
**Role:** Brand identity

Wordmark 'ventriloc' in PolySans weight 400 at 24-28px, Carbon text. The distinguishing element is a Signal Orange swoosh/arc replacing or accenting the final letter or trailing the wordmark — this curved brushstroke is the brand's visual signature.

### Partner Logo Strip
**Role:** Social proof band

Horizontal row of grayscale partner logos (ABB, Olymel, Cascades, Angelcare, etc.) in Graphite/Slate tones, evenly spaced. No background treatment — logos sit directly on the Mist canvas. Acts as a trust signal beneath hero sections.

### Dashboard Sidebar
**Role:** In-product navigation panel

Vertical sidebar within a product card. White background, Inter 13-14px labels in Graphite. Filter groups (Date, Shop, Supplier, Product category, Brand, Class, Sex) with small dropdown chevrons. Active item highlighted with Signal Orange or Carbon weight 600.

### Funnel Visualization
**Role:** Conversion analytics widget

Horizontal funnel chart with trapezoidal stages (Visitor → Sign-ups → Active → Subscribed). Signal Orange for the widest/first stage, fading to lighter tints or outlined stages for later steps. Stage labels in Inter 12-13px beneath each segment.

### Donut/Progress Chart
**Role:** Profitability or distribution widget

Circular chart with a Signal Orange arc segment, legend items in Inter 12-13px with small colored dot indicators. Center label in PolySans 32px showing the key percentage (e.g. '34%'). White card background, 8px radius.

## Do's and Don'ts

### Do
- Use PolySans weight 400 for all display text and headings — the single-weight geometric voice is the brand's typographic signature
- Set line-height to 0.91-1.00 for PolySans display sizes (32px+) to achieve the compressed, architectural feel
- Apply -0.02em letter-spacing (converted to px per size: -0.64px at 32px, -0.8px at 40px, -1.32px at 66px) to all PolySans text
- Use 20px border-radius for all buttons, tags, and pill-shaped controls — the pill silhouette is system-defining
- Use Signal Orange (#ff682c) sparingly: chart fills, the logo swoosh, and small functional highlights only — never as a button background or large surface
- Build all cards on the Mist canvas (#efefef) with white (#ffffff) surfaces — the warm-gray-to-white contrast is the primary elevation mechanism
- Center the primary navigation in a single floating pill capsule (200px radius) at the top of the viewport

### Don't
- Don't use heavy drop shadows or deep elevation — keep shadows at 1-3% opacity, if used at all
- Don't add chromatic color to buttons, links, or text — actions stay Carbon-filled or Carbon-outlined, with Signal Orange reserved for data accents
- Don't use sharp corners (0-4px radius) on cards or buttons — all primary surfaces are 8px+ with pills at 20px
- Don't break the type pairing — never substitute Inter for PolySans on headings, or vice versa for body text
- Don't use line-height above 1.20 for PolySans display sizes — the tight 0.91-1.00 range is intentional
- Don't introduce new neutrals beyond the defined scale (Carbon, Graphite, Slate, Fog, Mist, Chalk, Paper) — the monochrome system is part of the identity
- Don't use photography, illustrations, or decorative imagery — the product dashboard mockups and partner logos are the entire visual vocabulary

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#efefef` | Page background — the warm gray that fills the viewport |
| 1 | Paper | `#ffffff` | Card surfaces and dashboard panels |
| 2 | Fog | `#f5f5f5` | Subtle inset bands within cards |
| 3 | Chalk | `#e8e8e8` | Nav backgrounds and soft dividers |

## Elevation

- **Dashboard Preview Cards:** `0 1px 3px rgba(32, 32, 32, 0.04), 0 4px 12px rgba(32, 32, 32, 0.03)`

## Imagery

The visual language is dominated by product dashboard mockups rather than photography. Charts and analytics panels are rendered as crisp white cards with Signal Orange data accents — the product interface IS the hero imagery. Partner logos appear as grayscale wordmarks. No lifestyle photography, no stock imagery, no decorative illustrations. Icons are minimal and monochromatic (Graphite/Carbon stroke), with Signal Orange reserved for data highlights and the logo swoosh. The overall density is text-and-data dominant with generous breathing room.

## Layout

Max-width 1200px centered content on a full-bleed Mist canvas. Hero follows a split layout: left column holds the PolySans headline, body paragraph, and button cluster; right column shows overlapping dashboard preview cards floating in white. Section rhythm uses generous vertical breathing (80px section gaps) with seamless flow rather than alternating bands. Content blocks within sections use a 2-column or 3-column card grid pattern. Navigation is a single floating pill capsule centered at the top of the viewport, unsticky. Dashboard product sections are full-bleed Mist background containing a single large white card with the actual product interface inside.

## Agent Prompt Guide

**Quick Color Reference**
- text: #202020 (Carbon)
- background: #efefef (Mist canvas), #ffffff (Paper cards)
- border: #828282 (Slate, 1px) for subtle dividers; #202020 for strong borders
- accent: #ff682c (Signal Orange) — chart fills, logo swoosh, highlights
- primary action: no distinct CTA color

**Example Component Prompts**
1. *Hero section*: Mist (#efefef) full-bleed background, max-width 1200px centered. Left column: headline in PolySans weight 400 at 66px, line-height 0.91, letter-spacing -1.32px, color #202020. Body paragraph in Inter 16px weight 400 line-height 1.5, color #4d4d4d. Below: a Carbon-filled pill button (20px radius, 18px horizontal padding, 8px vertical, Inter 15px weight 500 white text) next to a Carbon-outlined pill button (same dimensions, 1px border, transparent fill, #202020 text). Right column: two overlapping white dashboard cards (8px radius, 20px gap) containing area charts with Signal Orange (#ff682c) fills at 20% opacity and Carbon line strokes.

2. *Metric KPI tile*: White card (#ffffff), 8px radius, 32px padding. Title in Inter 14px weight 500 #828282. Value in PolySans 40px weight 400 #202020, letter-spacing -0.8px. Delta in Inter 12px #4d4d4d with a small Signal Orange up-arrow.

3. *Floating nav capsule*: Single pill container, border-radius 200px, background #ffffff, 1px border #828282, horizontal padding 10px. Nav items in Inter 14px weight 500 #202020 with 13px horizontal padding each. A Signal Orange filled pill button (20px radius) for the final 'Contact us' item.

4. *Partner logo strip*: Single row on Mist canvas, no background or border. Six grayscale logos evenly distributed with 40-60px gaps, all rendered in Graphite (#4d4d4d) or Slate (#828282). Above the strip, Inter 13px #4d4d4d label 'Trusted by 80+ partners'.

5. *Dashboard product card*: Full-width white card (#ffffff), 8px radius, sitting on Mist canvas with 40px padding. Left sidebar column (200px wide) with filter labels in Inter 13px #4d4d4d. Main content area shows a 4-column grid of metric tiles above a full-width area chart (Signal Orange fill) and a funnel visualization (Signal Orange trapezoids decreasing left to right).

## Similar Brands

- **Tableau** — Same dashboard-as-hero approach with white analytics cards floating on a neutral canvas
- **Mode Analytics** — Light-mode data product with a single warm accent color and geometric sans-serif headings
- **ThoughtSpot** — Monochrome chrome with orange data accents, pill-shaped controls, and tight geometric display type
- **Sisense** — White card surfaces on warm-gray canvas, minimal shadows, condensed-feeling display headings
- **Power BI** — Dashboard-heavy product preview aesthetic with chart cards in white panels and restrained color palette

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-signal-orange: #ff682c;
  --color-sienna-bronze: #816729;
  --color-carbon: #202020;
  --color-graphite: #4d4d4d;
  --color-slate: #828282;
  --color-fog: #f5f5f5;
  --color-mist: #efefef;
  --color-chalk: #e8e8e8;
  --color-paper: #ffffff;

  /* Typography — Font Families */
  --font-polysans: 'PolySans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --text-subheading: 32px;
  --leading-subheading: 1.19;
  --tracking-subheading: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.13;
  --tracking-heading: -0.8px;
  --text-display: 66px;
  --leading-display: 0.91;
  --tracking-display: -1.32px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-140: 140px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 32-40px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-full: 200px;

  /* Named Radii */
  --radius-tags: 20px;
  --radius-cards: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 20px;
  --radius-navpill: 200px;

  /* Surfaces */
  --surface-canvas: #efefef;
  --surface-paper: #ffffff;
  --surface-fog: #f5f5f5;
  --surface-chalk: #e8e8e8;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-signal-orange: #ff682c;
  --color-sienna-bronze: #816729;
  --color-carbon: #202020;
  --color-graphite: #4d4d4d;
  --color-slate: #828282;
  --color-fog: #f5f5f5;
  --color-mist: #efefef;
  --color-chalk: #e8e8e8;
  --color-paper: #ffffff;

  /* Typography */
  --font-polysans: 'PolySans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-body-lg: 18px;
  --leading-body-lg: 1.33;
  --text-subheading: 32px;
  --leading-subheading: 1.19;
  --tracking-subheading: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.13;
  --tracking-heading: -0.8px;
  --text-display: 66px;
  --leading-display: 0.91;
  --tracking-display: -1.32px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-140: 140px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 20px;
  --radius-full: 200px;
}
```