# Shop — Style Reference
> Product photography on a white void

**Theme:** light

Shop runs on a near-monochrome canvas where the product imagery does all the visual work and a single saturated violet does the talking. The interface dissolves into the background — white surface, hairline gray borders, no decorative gradients, no mood lighting — so that product cards, star ratings, and lifestyle photography carry every bit of color and texture. Typography is custom-drawn (GT Standard) at small sizes with aggressive negative tracking, which keeps labels and card titles feeling engineered rather than editorial. The single violet (#5433eb) is rationed: the wordmark, the search submit arrow, and one glow shadow on a primary button. Everything else is achromatic. Components are compact, border-driven rather than shadow-driven, and rely on 22-28px corner radii to feel soft without becoming pill-shaped.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Shop Violet | `#5433eb` | `--color-shop-violet` | Wordmark, search submit arrow, primary button fill, brand icon — saturated indigo-violet that reads as electric against a pure white canvas. Used sparingly so it carries signal weight |
| Violet Glow | `#c0b5f3` | `--color-violet-glow` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Pure White | `#ffffff` | `--color-pure-white` | Page canvas, card surfaces, input fields, inverse text on violet buttons |
| Ink Black | `#000000` | `--color-ink-black` | Primary text, dominant border color across cards/nav/dividers, and outline-button strokes — the structural skeleton of the whole UI |
| Near Black | `#121212` | `--color-near-black` | Dark-mode or emphasized text surface, dark panel background where inverted hierarchy is needed |
| Soft Canvas | `#f2f4f5` | `--color-soft-canvas` | Secondary surface band — subtle off-white that separates sections and input wells from the pure white page |
| Hairline | `#ebebeb` | `--color-hairline` | Light borders, input outlines, card dividers — the quietest separator tone, used where pure black would be too loud |
| Concrete | `#c9cbcc` | `--color-concrete` | Muted text, disabled icons, placeholder body copy — sits one step above the lightest borders |
| Slate | `#707070` | `--color-slate` | Secondary navigation text, helper labels, muted metadata, and secondary icon strokes |
| Ash | `#7b7b7b` | `--color-ash` | Tertiary body text, supporting captions |

## Tokens — Typography

### GT Standard — Primary UI typeface — card titles, product names, nav labels, body, buttons, ratings, and footer copy all flow through this single family. The aggressive negative tracking at small sizes keeps 9-12px labels from looking loose. · `--font-gt-standard`
- **Substitute:** Inter Tight, or system-ui with letter-spacing tightened by -2%
- **Weights:** 400
- **Sizes:** 9px, 11px, 12px, 14px, 16px
- **Line height:** 1.29-1.38
- **Letter spacing:** Tracking scales aggressively with size: -0.058em at 9px, -0.044em at 11px, -0.031em at 12px, -0.014em to -0.023em at 14-16px. Custom-drawn geometric sans, tight apertures, and a mono-ish 'M' suffix in the family naming — a purpose-built face for compact commerce UI.
- **Role:** Primary UI typeface — card titles, product names, nav labels, body, buttons, ratings, and footer copy all flow through this single family. The aggressive negative tracking at small sizes keeps 9-12px labels from looking loose.

### GT Standard Medium — Emphasized inline labels, small icon-adjacent text where Regular would recede too far. · `--font-gt-standard-medium`
- **Substitute:** Inter Medium
- **Weights:** 500
- **Sizes:** 
- **Line height:** 1.33
- **Letter spacing:** -0.017 to -0.018em
- **Role:** Emphasized inline labels, small icon-adjacent text where Regular would recede too far.

### Shopify Sans — Meta copy, system/legal text, and links that originate from the Shopify ecosystem — appears sparingly. · `--font-shopify-sans`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 10px, 14px
- **Line height:** 1.20-1.71
- **Letter spacing:** -0.023em
- **Role:** Meta copy, system/legal text, and links that originate from the Shopify ecosystem — appears sparingly.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.33 | — | `--text-caption` |
| body-sm | 12px | 1.33 | — | `--text-body-sm` |
| body | 14px | 1.33 | — | `--text-body` |
| body-lg | 16px | 1.33 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

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
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 8px |
| images | 11.4px |
| search | 28px |
| buttons | 28px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(69, 36, 219, 0.34) 0px 4px 24px 0px` | `--shadow-lg` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 40px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Search Bar (Hero)
**Role:** Central discovery control — full-width pill with embedded submit

Pill-shaped input at ~28px corner radius, white surface, #ebebeb border, 16px horizontal padding, ~56px height. Placeholder text in #707070 at 16px. Trailing submit button is a filled violet (#5433eb) circle (~32px) with a white right-arrow icon, carrying the brand's only shadow bloom.

### Wordmark Logo
**Role:** Primary brand mark

Lowercase 'shop' set in GT Standard Medium or Semibold at ~40-48px, color #5433eb, tight letter-spacing. No icon — type-only mark.

### Product Card
**Role:** Drift/scroll surface showing merchant storefronts

White card, 8-11.4px border radius, 1px #ebebeb border, product image fills top with 11.4px top radius, title in 11px Regular #000000, star rating row with five stars + (count) meta, no shadow. Cards sit on the white canvas with generous whitespace between them — the border is what defines the card, not a drop shadow.

### Star Rating Row
**Role:** Inline social proof on every product card

Five small gold/amber star glyphs at ~9-11px, followed by a parenthesized review count in #707070 Regular. No background — sits directly on the card surface.

### Primary Pill Button
**Role:** Search submit / single commitment action

28px corner radius, violet (#5433eb) fill, white icon centered, ~48-56px diameter, 16-20px internal padding, brand-tinted shadow. The only filled, non-neutral button in the system.

### Ghost Icon Button
**Role:** Nav rail actions, sign-in, utility controls

Borderless, no background, icon-only at 20-24px in #000000 or #707070. Hits to ~44px tap target via transparent padding.

### Vertical Nav Rail
**Role:** Persistent left-side navigation

Fixed ~56-72px wide column on the left edge, white background, vertically stacked icon-only buttons (home, apps, cart, favorites, heart, profile) with 24-32px vertical gap, 1px right border in #ebebeb. Active state is a filled violet icon; inactive is #707070 outline.

### Top Promo Bar
**Role:** App-store download nudge across all pages

Full-bleed dark band (#121212) at ~40-48px height, centered white text at 12-14px with violet app-icon thumbnail, right-arrow affordance in #707070. Sits above the main canvas without overlap.

### Page Carousel Dots
**Role:** Scroll position indicator for the hero drift

Row of small circles (4-5) centered below the hero; active dot is solid #000000 at ~8px, inactive is outlined #c9cbcc at ~6px, 4-8px gap between.

### Input Field
**Role:** Any text entry outside the hero search

White surface, 1px #ebebeb border, 8-11px corner radius, 12-16px horizontal padding, ~40-48px height, placeholder in #707070 at 14px. Focus state tightens border to #000000 or #5433eb without a glow ring.

### Outlined Pill Button
**Role:** Secondary actions where commitment is lower

White fill, 1px #000000 border, 22-28px corner radius, 8-16px vertical padding, 16-24px horizontal padding, 12-14px Regular label in #000000. Used for filter toggles, tag selections, and tertiary CTAs.

### Footer Link List
**Role:** Dense utility navigation at page bottom

Multi-column layout, 11-12px GT Standard Regular in #707070, 2-4px row gap, 8-12px column gap. Section headings at 12px Medium #000000.

## Do's and Don'ts

### Do
- Use #5433eb only for the wordmark, the search submit, and the one corresponding brand-tinted shadow — anywhere else dilutes it.
- Set type sizes between 9-16px and apply the matching negative letter-spacing from the type scale; do not loosen the tracking on body labels.
- Define card boundaries with a 1px #ebebeb border, not a drop shadow — shadows are reserved for the single violet CTA.
- Keep product cards at 8-11.4px radius; do not round them into pills. Pill radius (28px, 9999px) belongs only to buttons, tags, and the search bar.
- Default to the white canvas and let product photography supply the color; do not add background washes, gradient panels, or colored section bands behind content.
- Stack the nav as a left rail of icon-only ghost buttons (44-48px tap target), not a top bar with labels.
- Use GT Standard Regular for all UI copy; switch to Medium only for inline emphasis on labels 11-12px or smaller.

### Don't
- Do not introduce a second chromatic accent. The system is monochrome plus one violet — adding red, green, or blue breaks the visual discipline.
- Do not add semantic state colors (success green, error red) to the palette for decorative use; reserve any status indication for functional badges only.
- Do not apply shadows to cards, nav items, or images. The single violet button shadow is the only elevation in the system.
- Do not set body text larger than 16px on commerce surfaces — the type scale caps at heading-sm 16px and stays tight.
- Do not use a generic black drop shadow under the primary button; it must be tinted rgba(69, 36, 219, 0.34) to stay on-brand.
- Do not round buttons beyond ~28px unless intentionally creating a fully pill-shaped tag at 9999px — intermediate values (12-20px) look off-system.
- Do not place content directly on a colored surface; every text-bearing component should sit on white #ffffff with a hairline border, not on a tinted block.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Full-page background — the void on which product cards float |
| 1 | Section Wash | `#f2f4f5` | Subtle band separating hero search area from recommendation rows |
| 2 | Card Surface | `#ffffff` | Product card, input field, pill button — same as canvas but bordered to read as contained |
| 3 | Dark Panel | `#121212` | Top promo bar, inverted headers, or footer treatment where the page needs a tonal break |

## Elevation

- **Primary search button (violet):** `rgba(69, 36, 219, 0.34) 0px 4px 24px 0px`

## Imagery

Imagery is the entire visual language. Product photography is the hero — full-bleed lifestyle shots (a person sitting on stacked pillows, a child in a cozy chair with a dog, a woman in a Casper pajama set) drift across the canvas on white card surfaces with no overlay, caption box, or darkening. Shots are bright, high-key, natural-light, and cropped tight to the product; backgrounds in the photography itself are blown-out white or soft gray, matching the page canvas so images feel embedded rather than placed. There are no illustrations, no abstract graphics, no 3D renders, no decorative SVG art. Iconography is monochrome outline-only (1.5-2px stroke) in #000000 or #707070, never filled, never multi-color. The visual density is image-heavy at the hero (one or two large photos) and card-medium in supporting rows (3-4 small product tiles).

## Layout

Page is centered, max-width ~1200px, with a persistent fixed left nav rail (~56-72px). The hero is a full-canvas drift of large product cards with the wordmark + pill search bar anchored center; the search bar overlays the drift, not below it. Below the hero, content flows as horizontal-scrolling card rows or 3-4 column grids of merchant storefronts and product tiles, separated by 40px section gaps. Section rhythm is uniform white-to-white with hairline #ebebeb borders defining each card; no alternating light/dark bands, no full-width color blocks. The dark top promo bar is the only non-white horizontal band. The page model is asymmetric — content is centered but the left rail offsets the visual axis. Grid usage is loose: cards are not strictly aligned to a 12-column grid; they sit on generous whitespace and rely on the drift/carousel metaphor rather than rigid columns.

## Agent Prompt Guide

**Quick Color Reference**
- text: #000000
- background: #ffffff
- surface band: #f2f4f5
- border: #ebebeb (hairline) / #000000 (emphasis)
- accent: #5433eb (wordmark + search submit only)
- primary action: #5433eb (filled action)

**3-5 Example Component Prompts**
1. Build the hero search bar: a pill input 56px tall, white fill, 1px #ebebeb border, 28px corner radius, 16px horizontal padding. Placeholder 'What are you shopping for today?' in #707070, 16px GT Standard Regular, letter-spacing -0.224px. Trailing submit is a 40px filled #5433eb circle with a white right-arrow icon, carrying shadow rgba(69, 36, 219, 0.34) 0px 4px 24px 0px.
2. Build a product card: 8-11.4px corner radius, 1px #ebebeb border, white surface, no shadow. Product image fills the top at 11.4px top radius. Title in 11px GT Standard Regular, #000000, letter-spacing -0.484px. Star row: five small amber stars plus '(1.9K)' in #707070 at 9px.
3. Build the left nav rail: 64px wide, fixed left, white background, 1px right border in #ebebeb. Stack six icon-only ghost buttons vertically with 24px gap, icons at 22px outline weight in #707070, active state fills icon in #5433eb.
4. Build the top promo bar: full-bleed #121212 band, 44px tall, centered white text 'Download Shop app. Available on iOS & Android.' at 12px with a 16px violet app-icon thumbnail to the left and a #707070 right-arrow to the right.
5. Build a pill button: 40px tall, 28px corner radius, white fill, 1px #000000 border, 14px GT Standard Regular label in #000000, 16-24px horizontal padding, 8-12px vertical padding, no shadow.

## Visual Signature — Border-Driven Minimalism

The defining choice of this system is that depth is replaced by outline. Most SaaS/commerce UIs lean on card shadows (1-4px black or violet at 5-15% opacity) to lift surfaces off the canvas; Shop instead paints a 1px hairline border — usually #ebebeb, escalating to #000000 for emphasis — and lets that line do the work. The result is a flat, almost print-like surface where the eye reads edges, not elevation. The single exception, the violet-tinted shadow under the search submit, is conspicuous because it is the only depth in the system, which is exactly the point: the user is meant to notice the only button that does something. Designers reproducing this system should resist the urge to 'add a little shadow for polish' — polish here comes from precise hairlines, tight tracking, and disciplined white space.

## Similar Brands

- **Apple App Store product pages** — Same wordmark-on-white, product-photography-as-hero, minimal type scale with negative tracking, and hairline-bordered cards floating on a pure white canvas.
- **Stripe product pages** — Shared discipline of one chromatic accent against a near-achromatic interface, with custom-drawn type at small sizes and tight letter-spacing.
- **Shopify storefronts** — Commerce-first information density, compact card grids of product imagery, and near-monochrome chrome that recedes behind the products.
- **Arc browser landing pages** — Same product-drift-on-white-canvas hero pattern and single saturated accent (Arc's blue plays the role Shop's violet does) against an otherwise colorless system.
- **Things 3 (Cultured Code)** — Border-as-elevation philosophy, custom tight-tracked sans at 9-14px, and a willingness to let product/lifestyle photography carry all of the page's color.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-shop-violet: #5433eb;
  --color-violet-glow: #c0b5f3;
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-near-black: #121212;
  --color-soft-canvas: #f2f4f5;
  --color-hairline: #ebebeb;
  --color-concrete: #c9cbcc;
  --color-slate: #707070;
  --color-ash: #7b7b7b;

  /* Typography — Font Families */
  --font-gt-standard: 'GT Standard', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-standard-medium: 'GT Standard Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-shopify-sans: 'Shopify Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.33;
  --text-body-sm: 12px;
  --leading-body-sm: 1.33;
  --text-body: 14px;
  --leading-body: 1.33;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;

  /* Typography — Weights */
  --font-weight-regular: 400;
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
  --spacing-40: 40px;
  --spacing-48: 48px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 40px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 11.4046px;
  --radius-2xl: 17.1064px;
  --radius-2xl-2: 22.8092px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 8px;
  --radius-images: 11.4px;
  --radius-search: 28px;
  --radius-buttons: 28px;

  /* Shadows */
  --shadow-lg: rgba(69, 36, 219, 0.34) 0px 4px 24px 0px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-section-wash: #f2f4f5;
  --surface-card-surface: #ffffff;
  --surface-dark-panel: #121212;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-shop-violet: #5433eb;
  --color-violet-glow: #c0b5f3;
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-near-black: #121212;
  --color-soft-canvas: #f2f4f5;
  --color-hairline: #ebebeb;
  --color-concrete: #c9cbcc;
  --color-slate: #707070;
  --color-ash: #7b7b7b;

  /* Typography */
  --font-gt-standard: 'GT Standard', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-standard-medium: 'GT Standard Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-shopify-sans: 'Shopify Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.33;
  --text-body-sm: 12px;
  --leading-body-sm: 1.33;
  --text-body: 14px;
  --leading-body: 1.33;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 11.4046px;
  --radius-2xl: 17.1064px;
  --radius-2xl-2: 22.8092px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-lg: rgba(69, 36, 219, 0.34) 0px 4px 24px 0px;
}
```