# Scale — Style Reference
> Holographic signal in a blackout room — a single iridescent paper plane against total darkness

**Theme:** dark

Scale operates in a near-total darkness — pure black canvas with white type and almost no chromatic noise. The signature is restraint: a custom display face at weight 300 instead of the expected 700, turning enterprise AI copy into something that reads like editorial typography. Hero imagery is the only place color lives, expressed as holographic iridescent gradients (pinks dissolving into blues into violet) on hard-edged paper-plane geometry. Components are flat and pill-shaped, with hairline borders and no shadows. The page breathes through vertical whitespace and centered stacks, not through cards or dense grids. There is one button shape (pill), one text style (white), one accent (iridescent gradient) — and the system is built around saying almost nothing visually and meaning it.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page background, section backgrounds — the dominant canvas; everything else floats on this |
| Bone | `#ffffff` | `--color-bone` | Primary headings, body text, nav items, icon strokes, button labels |
| Ash | `#a1a1a1` | `--color-ash` | Muted secondary text, inactive nav, subdued labels, hairline borders on dark |
| Frost | `#e5e5e5` | `--color-frost` | Icon strokes, subtle dividers, light foreground accents |
| Graphite | `#262626` | `--color-graphite` | Subtle card borders and dividers on the black canvas |
| Lilac Haze | `#f4f0ff` | `--color-lilac-haze` | Link text and near-white secondary copy — a barely-violet tint that warms the pure white without breaking the monochrome rule |
| Iridescent Pink | `linear-gradient(135deg, #d1aad7 0%, #bbdef2 50%, #f4f0ff 100%)` | `--color-iridescent-pink` | Decorative gradient stop — appears inside the hero 3D shape and gradient washes; not used as a UI accent; Iridescent gradient field applied to hero 3D objects and accent surfaces |
| Iridescent Blue | `#bbdef2` | `--color-iridescent-blue` | Decorative gradient stop — the cool counterweight to Lilac Pink inside holographic assets; not used in interface chrome |

## Tokens — Typography

### Aeonik — Display and heading face — used at 48–89px for hero and section titles, always at weight 300. The ultra-light weight on a humanist geometric is the signature: enterprise AI copy rendered like an editorial magazine. · `--font-aeonik`
- **Substitute:** Söhne, Inter Display (weight 300), or any humanist geometric at light weight
- **Weights:** 300, 400
- **Sizes:** 24px, 26px, 36px, 48px, 72px, 89px
- **Line height:** 1.00, 1.11, 1.13, 1.23, 1.25, 1.33, 1.67
- **Letter spacing:** -0.01em (tight tracking on display, flat below 36px)
- **Role:** Display and heading face — used at 48–89px for hero and section titles, always at weight 300. The ultra-light weight on a humanist geometric is the signature: enterprise AI copy rendered like an editorial magazine.

### Inter — Body, UI, navigation, and button text. 16px / 1.65 is the canonical body. Medium 500 is reserved for emphasis inside otherwise-regular runs and for primary button labels. · `--font-inter`
- **Substitute:** Inter (native)
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line height:** 1.33, 1.43, 1.50, 1.56, 1.60, 1.65, 1.71
- **Letter spacing:** 0.1000em, 0.2860em, 0.3330em
- **Role:** Body, UI, navigation, and button text. 16px / 1.65 is the canonical body. Medium 500 is reserved for emphasis inside otherwise-regular runs and for primary button labels.

### Geist — Eyebrow labels rendered as small caps with wide tracking (0.071em–0.083em). Used for section pre-titles above headings. · `--font-geist`
- **Substitute:** Geist Mono or JetBrains Mono uppercase
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line height:** 1.43, 1.50, 2.00
- **Letter spacing:** 0.071em at 12px, 0.083em at 14px
- **OpenType features:** `"ss01" on`
- **Role:** Eyebrow labels rendered as small caps with wide tracking (0.071em–0.083em). Used for section pre-titles above headings.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.1px | `--text-caption` |
| body-sm | 14px | 1.57 | — | `--text-body-sm` |
| body | 16px | 1.65 | — | `--text-body` |
| subheading | 18px | 1.56 | — | `--text-subheading` |
| heading-sm | 20px | 1.6 | — | `--text-heading-sm` |
| heading | 24px | 1.33 | -0.24px | `--text-heading` |
| heading-lg | 36px | 1.25 | -0.36px | `--text-heading-lg` |
| display | 48px | 1.13 | -0.48px | `--text-display` |
| display-lg | 72px | 1.11 | -0.72px | `--text-display-lg` |
| hero | 89px | 1 | -0.89px | `--text-hero` |

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
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 192 | 192px | `--spacing-192` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 16px |
| icons | 4px |
| images | 8px |
| inputs | 8px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 32px
- **Element gap:** 8px

## Components

### Pill Button — Ghost
**Role:** Primary CTA (Book a Demo)

9999px radius, transparent background, 1px Ash (#a1a1a1) border, white label at 14px Inter 500, horizontal padding 20px, vertical padding 8px. Trailing arrow glyph in Bone. The only button shape in the system.

### Text Link with Arrow
**Role:** Secondary action (Build All)

No border, no background. Bone (#ffffff) label at 14px Inter 500 followed by → arrow. Sits inline beside the pill CTA in hero blocks.

### Eyebrow Label
**Role:** Section pre-title above headings

Geist 12px, uppercase, tracking 0.083em, color Ash (#a1a1a1). Centered above section titles. Examples: 'CUSTOMERS', 'AI FOR THE ENTERPRISE'.

### Hero Headline
**Role:** Page-level title in hero and major sections

Aeonik 300 at 72–89px, color Bone, line-height 1.0–1.11, tracking -0.01em. Two-line max. Sets the editorial tone; never bold, never condensed.

### Section Title
**Role:** In-page section heading

Aeonik 300 at 48–72px, centered, Bone. Paired with an Eyebrow Label above and muted body copy below.

### Quote Card
**Role:** Customer testimonial container

Surface Carbon (#111111), 16px radius, padding 32px, no border. Centered quote text in Inter 16–18px, attribution block below in Inter 14px Ash with name in Bone 500.

### Logo Strip
**Role:** Social proof partner / government logos

Row of monochrome white logos on black, evenly distributed across page width, no card backgrounds, no labels. Logos sit at uniform height (~24px).

### Top Navigation Bar
**Role:** Primary site navigation

Sticky top bar, transparent background, logo left, nav links center in Inter 14px Bone, actions right (pill CTA + Log In text link). 1px inset white shadow gives nav a faint glass edge.

### Announcement Bar
**Role:** Top-of-page news banner

Sits above nav, full-bleed black, 1px Ash border-bottom, centered Inter 14px Bone copy with an inline Learn More link in Lilac Haze (#f4f0ff).

### Holographic 3D Object
**Role:** Hero illustration — paper-plane / triangular geometry

Multi-faced 3D shape with the iridescent gradient (Lilac Pink → Iridescent Blue → Lilac Haze) applied as surface color. No drop shadow on the canvas; the object supplies its own contrast through the gradient.

## Do's and Don'ts

### Do
- Use Aeonik weight 300 for every display and section headline — never escalate to 400 or above for titles
- Use pure #000000 as the page background and let cards step up through #111111 and #262626 — never introduce a light surface
- Reserve the iridescent gradient exclusively for hero 3D objects and one-off accent washes — never apply it to buttons, text, or borders
- Use the 9999px pill for the only interactive shape in the system; ghost-variant with a 1px Ash border and white label
- Center headlines, eyebrows, and CTAs in all top-of-page sections; left-align only when the layout pairs text with a side image
- Set headlines with negative letter-spacing (-0.01em) and body copy with zero tracking — the contrast in tracking is part of the rhythm
- Add the 1px rgba(255,255,255,0.1) inset highlight only to nav and link surfaces to give them a glass edge against black

### Don't
- Do not use drop shadows, colored glows, or blur effects — depth comes from surface color steps and whitespace
- Do not introduce a saturated brand color for buttons, links, or borders — the only chromatic elements are the iridescent gradient assets
- Do not bold or weight-up display headlines — weight 300 IS the emphasis
- Do not use light-theme surfaces, even on long pages — every section stays on Void or Carbon
- Do not put borders on cards inside sections; use surface color (#111111) to separate them from the page
- Do not render the iridescent gradient on text, icon strokes, or button fills — it lives only on the 3D hero object
- Do not use Geist for body copy or UI text; it is reserved for small-caps eyebrow labels

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Full-bleed page and section background |
| 1 | Carbon | `#111111` | Card surface for quote panels and content blocks lifted off the page |
| 2 | Smoke | `#262626` | Subtle elevated surfaces and hairline dividers |

## Elevation

- **Nav and link inner edge:** `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`

## Imagery

Imagery is dominated by a single 3D holographic object — a paper-plane/triangular shape rendered with the iridescent gradient (pinks to blues to violet). No photography, no people, no product screenshots appear in the visible pages. The 3D object is the only chromatic content on the site and is treated as a signature asset, not decoration. Partner logos in the social-proof strip are flat monochrome white. Iconography is line-based, 1–1.5px stroke, white on black, with no fill. Overall image density is very low — the page is text-dominant, with the single hero object supplying all visual energy.

## Layout

Page layout is full-bleed against the black canvas, with content constrained to a centered ~1200px column. Hero is a two-zone split: left column holds eyebrow-less headline + sub-copy + pill CTA + text link; right column holds the holographic 3D object floating in negative space. Subsequent sections use centered single-column stacks (eyebrow → headline → sub-copy → CTA) with no sidebar or grid. The logo strip is the only multi-column row, distributing 4–5 logos evenly across the page width. The testimonial section introduces a single card centered on the page, not a grid. Vertical rhythm is generous — ~80px section gaps — and there are no dividers between sections; the void handles separation. Navigation is a single sticky top bar with no mega-menu, no sidebar, no breadcrumbs.

## Agent Prompt Guide

Quick Color Reference:
- text: #ffffff
- background: #000000
- border: #a1a1a1
- accent (gradient only, never on UI): #d1aad7 → #bbdef2 → #f4f0ff
- muted text: #a1a1a1
- link: #f4f0ff
- primary action: no distinct CTA color

Example Component Prompts:
1. Build a hero section: #000000 full-bleed background. Eyebrow label is Geist 12px uppercase, tracking 0.083em, #a1a1a1. Headline is Aeonik 300 at 72px, #ffffff, line-height 1.11, letter-spacing -0.72px, two lines max. Sub-copy is Inter 16px weight 400, #a1a1a1, max-width 480px. Below sits a pill button: 9999px radius, transparent background, 1px #a1a1a1 border, Inter 14px weight 500 #ffffff label, padding 8px 20px, trailing → arrow. Beside it, a text link: Inter 14px weight 500 #ffffff with → arrow. Right column holds a 3D paper-plane shape filled with the iridescent gradient linear-gradient(135deg, #d1aad7 0%, #bbdef2 50%, #f4f0ff 100%).
2. Build a testimonial card: background #111111, 16px radius, 32px padding on all sides. Quote text is Inter 18px weight 400 #ffffff, centered, italic not applied. Attribution block 16px below: name in Inter 14px weight 500 #ffffff, role in Inter 14px weight 400 #a1a1a1. Card max-width 720px, centered in the section.
3. Build the logo strip: full-bleed #000000 row, 4 monochrome white logos distributed evenly across a 1200px max-width, each logo at 24px height, no background, no border, no label. Above the strip sits an eyebrow label centered: Geist 12px uppercase #a1a1a1, tracking 0.083em.
4. Build the announcement bar: #000000 full-bleed, 1px bottom border #a1a1a1, padding 8px vertical. Centered Inter 14px #ffffff copy with an inline Learn More link in #f4f0ff weight 500.
5. Build the top nav: sticky, transparent background, 1px inset shadow rgba(255,255,255,0.1) 0 1px 1px. Logo 'scale' in Inter 16px weight 500 #ffffff on the left. Center nav items in Inter 14px #ffffff with 24px column gap. Right side: a neutral pill button (9999px, 1px #a1a1a1 border, Inter 14px weight 500 #ffffff label) followed by a Log In text link in Inter 14px #ffffff.

## Similar Brands

- **Anthropic** — Same near-black canvas, single editorial display headline, and near-zero chromatic UI; both treat color as a single decorative moment rather than a system
- **Linear** — Dark-first, minimal-chrome aesthetic with hairline borders, pill buttons, and a strong typographic voice carrying the visual weight
- **Stripe** — Generous centered vertical rhythm, single-gradient hero asset, and the discipline to leave most of the page typographically silent
- **OpenAI** — Near-black backgrounds with white type and a single hero visual as the only color on the page
- **Vercel** — Pure-black canvas, ultra-light display weights, pill-shaped ghost CTAs, and the same refusal to use color as a UI signal

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-bone: #ffffff;
  --color-ash: #a1a1a1;
  --color-frost: #e5e5e5;
  --color-graphite: #262626;
  --color-lilac-haze: #f4f0ff;
  --color-iridescent-pink: #d1aad7;
  --gradient-iridescent-pink: linear-gradient(135deg, #d1aad7 0%, #bbdef2 50%, #f4f0ff 100%);
  --color-iridescent-blue: #bbdef2;

  /* Typography — Font Families */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --text-body: 16px;
  --leading-body: 1.65;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.6;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.24px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.36px;
  --text-display: 48px;
  --leading-display: 1.13;
  --tracking-display: -0.48px;
  --text-display-lg: 72px;
  --leading-display-lg: 1.11;
  --tracking-display-lg: -0.72px;
  --text-hero: 89px;
  --leading-hero: 1;
  --tracking-hero: -0.89px;

  /* Typography — Weights */
  --font-weight-light: 300;
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
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-224: 224px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-icons: 4px;
  --radius-images: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset;

  /* Surfaces */
  --surface-void: #000000;
  --surface-carbon: #111111;
  --surface-smoke: #262626;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-bone: #ffffff;
  --color-ash: #a1a1a1;
  --color-frost: #e5e5e5;
  --color-graphite: #262626;
  --color-lilac-haze: #f4f0ff;
  --color-iridescent-pink: #d1aad7;
  --color-iridescent-blue: #bbdef2;

  /* Typography */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --text-body: 16px;
  --leading-body: 1.65;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.6;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.24px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.36px;
  --text-display: 48px;
  --leading-display: 1.13;
  --tracking-display: -0.48px;
  --text-display-lg: 72px;
  --leading-display-lg: 1.11;
  --tracking-display-lg: -0.72px;
  --text-hero: 89px;
  --leading-hero: 1;
  --tracking-hero: -0.89px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-224: 224px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset;
}
```