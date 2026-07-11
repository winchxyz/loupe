# mono — Style Reference
> Swiss editorial grid as gallery wall text — a black-and-white broadsheet where type itself is the only color.

**Theme:** light

Mono operates as a strict editorial-grid system: pure white canvas, a single near-black charcoal (#292929) doing all structural and typographic work, and zero chromatic accents. The visual logic is that of a museum wall label meets a Swiss design manual — type and gridlines carry every signal, never color. Custom display faces (NH at whisper-light 100/300, EV as a razor-thin display weight, S-Works for impact) create sharp typographic contrast that fills the role color normally would. Components are flat to the point of austerity: hairline borders, zero shadows, no rounded corners, no gradients. Layout is rigidly columnar with visible structural lines acting as both composition and ornament. The feel is curated, quiet, and deliberately self-conscious about its own typographic discipline.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Page canvas, card surfaces, image backgrounds — the dominant surface that lets typography and gridlines read as structure |
| Charcoal Ink | `#292929` | `--color-charcoal-ink` | Primary text, heading fills, hairline borders, gridlines, button text — the only working neutral, doing 90% of visual heavy lifting |
| Carbon Black | `#000000` | `--color-carbon-black` | SVG fills, input borders, deepest text emphasis — used sparingly for maximum-contrast accents only |

## Tokens — Typography

### NH — Primary editorial typeface: body copy at 16px/18px weight 400, subheadings at 25–32px weight 300, page titles at 40–43px weight 100–300. The whisper-light 100 weight on large display sizes is the signature move — headlines feel like ghost prints, not announcements. Substitute with a neo-grotesque like Inter at matching weights. · `--font-nh`
- **Substitute:** Inter
- **Weights:** 100, 300, 400
- **Sizes:** 16px, 18px, 25px, 32px, 40px, 43px
- **Line height:** 1.20–1.50
- **Letter spacing:** -0.02em across all sizes
- **Role:** Primary editorial typeface: body copy at 16px/18px weight 400, subheadings at 25–32px weight 300, page titles at 40–43px weight 100–300. The whisper-light 100 weight on large display sizes is the signature move — headlines feel like ghost prints, not announcements. Substitute with a neo-grotesque like Inter at matching weights.

### S-Condensed — Condensed workhorse for meta labels, navigation, button text, list markers, input fields, and the vertical sidebar text. Aggressive 0.1–0.2em tracking on small sizes creates the all-caps 'label-tag' voice that contrasts NH's editorial body. Substitute with a condensed grotesque like Barlow Condensed. · `--font-s-condensed`
- **Substitute:** Barlow Condensed
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px, 40px
- **Line height:** 0.90–1.34
- **Letter spacing:** 0.1em at 12px, 0.2em at 14px, 0.1em at 40px
- **Role:** Condensed workhorse for meta labels, navigation, button text, list markers, input fields, and the vertical sidebar text. Aggressive 0.1–0.2em tracking on small sizes creates the all-caps 'label-tag' voice that contrasts NH's editorial body. Substitute with a condensed grotesque like Barlow Condensed.

### EV — Ultra-thin display face for single hero moments — razor-stroke weight paired with -0.05em tracking creates a fragile, almost-typographic-as-art effect. Used once per page maximum. Substitute with a hairline display like Migra Italic Hairline or GT Sectra Hairline. · `--font-ev`
- **Substitute:** GT Sectra Hairline
- **Weights:** 100
- **Sizes:** 28px
- **Line height:** 0.90
- **Letter spacing:** -0.05em
- **Role:** Ultra-thin display face for single hero moments — razor-stroke weight paired with -0.05em tracking creates a fragile, almost-typographic-as-art effect. Used once per page maximum. Substitute with a hairline display like Migra Italic Hairline or GT Sectra Hairline.

### S-Works — Heavier companion to EV for display moments that need more presence. The 350 weight is a deliberate 'almost bold' — heavier than NH's 300 but lighter than conventional 600/700. Substitute with a workhorse display like NB Architekt. · `--font-s-works`
- **Substitute:** NB Architekt
- **Weights:** 350
- **Sizes:** 40px
- **Line height:** 1.34
- **Letter spacing:** normal
- **Role:** Heavier companion to EV for display moments that need more presence. The 350 weight is a deliberate 'almost bold' — heavier than NH's 300 but lighter than conventional 600/700. Substitute with a workhorse display like NB Architekt.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.34 | 1.2px | `--text-caption` |
| body-sm | 14px | 1.34 | 2.8px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 25px | 1.34 | -0.5px | `--text-subheading` |
| heading-sm | 32px | 1.27 | -0.64px | `--text-heading-sm` |
| heading | 40px | 1.25 | -0.8px | `--text-heading` |
| heading-lg | 43px | 1.2 | -0.86px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 20 | 20px | `--spacing-20` |
| 23 | 23px | `--spacing-23` |
| 25 | 25px | `--spacing-25` |
| 43 | 43px | `--spacing-43` |
| 45 | 45px | `--spacing-45` |
| 50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
|---------|-------|
| all | 0px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 50px
- **Card padding:** 20px
- **Element gap:** 8px

## Components

### Gridline Container
**Role:** Structural column/wrapper

1px solid #292929 border on all four sides forming visible grid cells. No padding inside, no margin, no radius. These are the visible structural bones of every page section.

### Hairline Divider
**Role:** Section separator

1px solid #292929 line spanning full width. No spacing tokens — the line is the spacing.

### Navigation Link
**Role:** Primary site nav

S-Condensed 14px weight 400, letter-spacing 0.2em, uppercase, color #292929. 20px horizontal padding. On hover, underline appears as 1px #292929 border-bottom. No background change.

### Language Toggle
**Role:** EN/JP selector

S-Condensed 12px weight 400, letter-spacing 0.1em, uppercase. Active language has 1px #292929 border box around it. Inactive is plain text.

### Pre-order Button
**Role:** Primary product action

S-Condensed 12px weight 500, letter-spacing 0.1em, uppercase. 5px vertical padding, 20px horizontal padding. Transparent background. 1px solid #292929 border. On hover, fills #292929 with #ffffff text. No radius.

### Sign Up Button
**Role:** Secondary action

S-Condensed 12px weight 400, letter-spacing 0.1em, uppercase. Same geometry as Pre-order but rendered as ghost — no border, plain text, with underline on hover.

### Product Info Card
**Role:** Description block in side panel

White background with 1px #292929 right border acting as column divider. NH 16px/1.5 weight 400 body, #292929 text. 43px top padding. No card padding inside — text sits flush against edges.

### About Label Tag
**Role:** Section header label

S-Condensed 12px weight 500, letter-spacing 0.1em, uppercase, #292929. Followed by a 1px #292929 horizontal rule. The label/rule pairing is the canonical section-opening pattern.

### Vertical Sidebar Text
**Role:** Rotated category navigation

S-Condensed 14px weight 400, letter-spacing 0.1em, uppercase. Rotated 90° counterclockwise via writing-mode. Runs full height of right column, separated by commas: 'Photography, Illustration, Creative Coding…'. Color #292929.

### Circular Text Ring
**Role:** Decorative typography wrapping images

S-Condensed 14px weight 400, letter-spacing 0.1em, uppercase. Curved along an SVG path circling product images. Sits as a thin charcoal arc on white. Purely decorative, carries no link.

### Footer Link
**Role:** Bottom utility nav

S-Condensed 12px weight 400, letter-spacing 0.1em, uppercase, #292929, separated by 20px+ gaps. No separators, no bullets, no borders.

### Input Field
**Role:** Form input (minimal)

No visible background, no border except a 1px #292929 bottom border. S-Condensed 14px weight 400. Placeholder text in #292929 at 50% opacity. No focus ring, no border color change on focus.

### Hero Display Headline
**Role:** Page title (e.g. 'made for art lovers and art')

NH 43px weight 300, letter-spacing -0.86px, #292929, line-height 1.20. Centered or left-aligned depending on grid cell. The light weight is the key — the headline whispers.

### Product Hero Image
**Role:** Centerpiece product render

Full-bleed or contained within a 1px #292929 gridline frame. Background of image area is #ffffff. No drop shadow, no border-radius, no background color plate. The grid line IS the frame.

### Framed Wordmark
**Role:** Brand mark in footer

S-Condensed 14px weight 400 with 0.2em tracking, all caps, #292929, preceded by a small square glyph (the 'F' mark). Sits flush right in footer.

## Do's and Don'ts

### Do
- Set all border-radius to 0px — every component must be square. The grid is sharp, not soft.
- Use S-Condensed at 0.1em or 0.2em letter-spacing for all UI labels, buttons, and meta — the wide tracking is what makes them read as 'labels' not 'text'.
- Use NH at weight 100–300 for all headings. Never bold a heading — if more weight is needed, switch to S-Works 350, not NH 700.
- Set every border to 1px solid #292929. Hairline rules are the only borders; never use 2px or thicker.
- Place a 1px #292929 gridline frame around major content cells. The visible grid structure is the primary visual ornament.
- Use line-height 0.90 only for rotated/circular display text. For body, stay at 1.34–1.50.
- Keep palette to exactly three values: #ffffff, #292929, #000000. The system has no accent color and must not invent one.

### Don't
- Do not introduce any chromatic color, gradient, or color tint — the brand is defined by its monochrome discipline.
- Do not use border-radius greater than 0px. No pill buttons, no rounded cards, no circular badges (circular text rings are typographic, not geometric).
- Do not use drop shadows or any form of box-shadow. Elevation is communicated by gridline position, not by blur.
- Do not use font-weight above 400 on NH. For heavier emphasis, switch typeface to S-Works or S-Condensed 500.
- Do not center-align body text. Body is always left-aligned within its grid cell. Only display headlines may center.
- Do not use more than one display weight per section. EV (100) and S-Works (350) are mutually exclusive on a single view.
- Do not add background colors to sections. The canvas is always #ffffff; structural division comes from gridlines, not fills.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#ffffff` | Page canvas — the only background in the system |
| 1 | Charcoal Block | `#292929` | Inverted surface for rare filled states (hover on buttons) — text becomes #ffffff |
| 2 | Carbon | `#000000` | Deepest contrast for SVG fills and select input borders only |

## Elevation

Zero elevation. The system deliberately avoids box-shadow, drop-shadow, and blur effects entirely. Depth and hierarchy are communicated exclusively through gridline framing, typographic weight contrast, and whitespace — not through material elevation. This is a flat-design discipline taken to its editorial extreme.

## Imagery

Imagery is sparse and product-centric: one centerpiece product render (the Mono X7 device) per view, treated as a museum artifact on pure white. No lifestyle photography, no environment shots, no people. Product images are shown in 3/4 perspective at mid-scale, often partially obscured by a 1px charcoal gridline frame. Decorative typography (curved text rings, rotated sidebar text) acts as a visual counterweight to the product. The overall impression is gallery catalog rather than product page — the device is an art object being documented, not sold.

## Layout

Layout is a visible 12-column grid with 1px #292929 structural lines marking column boundaries. Page max-width 1200px centered. Hero is a 3-cell composition: left panel (product info text), center cell (product render with curved typography), right panel (rotated vertical category list). The 'about' section uses a 2-column split: left = product text with a rotated description, right = a charcoal-gray image panel (#292929 background, white product detail). Footer is a single thin row with navigation left and the FRAMED wordmark right. Section gap is 50px, but most spacing is enforced by the gridline frames themselves. Navigation is a minimal top bar: brand wordmark left, two text buttons (PRE-ORDER, SIGN UP) right, language toggle far right. No sticky header, no hamburger, no mega-menu.

## Agent Prompt Guide

**Quick Color Reference**
- text: #292929
- background: #ffffff
- border: #292929
- accent: none (monochrome only)
- inverted surface: #292929 (text becomes #ffffff)
- primary action: no distinct CTA color

**3-5 Example Component Prompts**
1. Build a product info card: white (#ffffff) background, 1px solid #292929 right border as column divider, 43px top padding. Body text in NH 16px/1.5 weight 400, color #292929, flush left. Zero border-radius.
2. Build a pre-order button (outlined/ghost action): transparent background, 1px solid #292929 border, S-Condensed 12px weight 500, letter-spacing 0.1em, uppercase, color #292929, 5px vertical and 20px horizontal padding, 0px radius. On hover, fill #292929 with #ffffff text.
3. Build a hero display headline: NH 43px weight 300, letter-spacing -0.86px, color #292929, line-height 1.20, centered. Use the whisper weight — do not bold.
4. Build a section label tag: S-Condensed 12px weight 500, letter-spacing 0.1em, uppercase, color #292929, followed by a 1px solid #292929 horizontal rule spanning the column width. This label/rule pairing opens every section.
5. Build a vertical sidebar text element: S-Condensed 14px weight 400, letter-spacing 0.1em, uppercase, #292929, rotated 90° counterclockwise, running the full height of the right column. Items separated by commas, no bullet points.

## Similar Brands

- **It's Nice That** — Editorial grid systems with visible column rules, condensed uppercase labels, and a strict mono/neutral palette prioritizing typographic hierarchy over color
- **MoMA Magazine** — Gallery wall-text aesthetic: whisper-light display weights, hairline borders, zero decorative color, type as the only visual material
- **Achtung Berlin design studios** — Swiss-influenced editorial layouts with custom condensed sans-serifs, wide-tracked labels, and rigorous gridline framing
- **Ishihara Design** — Japanese editorial product pages using a 2-3 neutral palette, thin display typefaces, and structural lines as primary ornament
- **Mass Moca exhibit catalogs** — Museum-catalog restraint: white canvas, single charcoal neutral, ultra-light display faces, and gridlines doing all compositional work

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-charcoal-ink: #292929;
  --color-carbon-black: #000000;

  /* Typography — Font Families */
  --font-nh: 'NH', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-s-condensed: 'S-Condensed', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ev: 'EV', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-s-works: 'S-Works', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.34;
  --tracking-caption: 1.2px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.34;
  --tracking-body-sm: 2.8px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 25px;
  --leading-subheading: 1.34;
  --tracking-subheading: -0.5px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.86px;

  /* Typography — Weights */
  --font-weight-thin: 100;
  --font-weight-light: 300;
  --font-weight-w350: 350;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-50: 50px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 50px;
  --card-padding: 20px;
  --element-gap: 8px;

  /* Named Radii */
  --radius-all: 0px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-charcoal-block: #292929;
  --surface-carbon: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-charcoal-ink: #292929;
  --color-carbon-black: #000000;

  /* Typography */
  --font-nh: 'NH', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-s-condensed: 'S-Condensed', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ev: 'EV', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-s-works: 'S-Works', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.34;
  --tracking-caption: 1.2px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.34;
  --tracking-body-sm: 2.8px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 25px;
  --leading-subheading: 1.34;
  --tracking-subheading: -0.5px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.86px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-25: 25px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-50: 50px;
}
```