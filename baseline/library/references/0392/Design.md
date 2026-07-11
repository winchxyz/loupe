# Cursor — Style Reference
> Warm paper command center. Cursor feels like opening a well-set typeset journal: cream-white pages, espresso-black type, and a single underline-orange accent that only appears when something is interactive.

**Theme:** light

Cursor uses a warm, editorial, paper-like aesthetic that treats a dev tool like a well-designed printed journal: a warm off-white canvas (#f7f7f4) with dark espresso text (#26251e), generous breathing room around compact type, and a single vivid orange (#f54e00) reserved for links and interactive highlights. The custom CursorGothic typeface at weight 400 with tight negative tracking carries the brand — it reads as a humanist sans with monospace DNA, reinforced by berkeleyMono for code snippets and command lines. Components are flat and confident: dark filled buttons, ghost outlined secondary actions, thin hairline borders, and soft warm shadows. Color is rationed — 95% of the surface is achromatic warm neutrals, so when orange or green appears, it carries weight.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Espresso Ink | `#26251e` | `--color-espresso-ink` | Primary text, dark filled buttons (Download CTA), nav, icon strokes — warm near-black instead of pure #000, gives the interface a printed-ink quality |
| Page Parchment | `#f7f7f4` | `--color-page-parchment` | Page canvas, card surfaces, button text on dark fills — the base warm white that everything sits on |
| Card Stone | `#e6e5e0` | `--color-card-stone` | Elevated card surfaces, secondary button backgrounds, subtle section banding — one step warmer/darker than the page |
| Border Sand | `#d9d5cf` | `--color-border-sand` | Hairline dividers, card borders, input borders — barely-visible warm gray for structure |
| Muted Clay | `#7a7974` | `--color-muted-clay` | Muted body text, secondary icons, placeholder text — mid-warm-gray for non-primary reading |
| Edge Ash | `#8f8e89` | `--color-edge-ash` | Borders on subtle UI elements, tertiary text — slightly lighter than muted clay for de-emphasized structure |
| Trace Smoke | `#a1a19f` | `--color-trace-smoke` | Faintest borders, disabled states, ghost-button outlines — the lightest visible neutral |
| Deep Charcoal | `#141414` | `--color-deep-charcoal` | Pure dark accent for high-emphasis text and critical UI elements — used sparingly when absolute black is needed |
| Ember Orange | `#f54e00` | `--color-ember-orange` | Link underlines, link text on hover, chromatic interactive accents — the single vivid brand accent, rationed to interactive moments only |
| Signal Green | `#4ade80` | `--color-signal-green` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Brass Gold | `#c08532` | `--color-brass-gold` | Decorative icon strokes, tag accents, warm illustrative fills — secondary warm accent for product-screenshot chrome |
| Deep Moss | `#34785c` | `--color-deep-moss` | Secondary button states, outlined action borders on warm surfaces — a desaturated forest green for alternative CTAs |

## Tokens — Typography

### CursorGothic — Primary brand typeface — used for everything from body copy to 72px display headlines. Single weight 400 with tight negative tracking at larger sizes creates editorial authority without bold. The custom face has monospace DNA (tabular numerals via 'tnum', stylistic alternates ss08/ss09) making it feel like a humanist sans designed for code-adjacent UI. · `--font-cursorgothic`
- **Substitute:** Inter Tight, or IBM Plex Sans with letter-spacing -0.02em at large sizes
- **Weights:** 400
- **Sizes:** 13px, 14px, 16px, 22px, 26px, 36px, 72px
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.030em at 72px, -0.020em at 36px, -0.012em at 26px, -0.005em at 22px, 0.005em at 16px, 0.010em at 13–14px
- **OpenType features:** `"ss09", "ss08", "tnum"`
- **Role:** Primary brand typeface — used for everything from body copy to 72px display headlines. Single weight 400 with tight negative tracking at larger sizes creates editorial authority without bold. The custom face has monospace DNA (tabular numerals via 'tnum', stylistic alternates ss08/ss09) making it feel like a humanist sans designed for code-adjacent UI.

### berkeleyMono — Monospace companion for code snippets, CLI commands, file paths, and terminal text — appears in product screenshots and inline code contexts. Weight 500 for emphasis within code blocks. · `--font-berkeleymono`
- **Substitute:** JetBrains Mono, Berkeley Mono (if licensed), or IBM Plex Mono
- **Weights:** 400, 500
- **Sizes:** 12px, 13px
- **Line height:** 1.21–1.67
- **Role:** Monospace companion for code snippets, CLI commands, file paths, and terminal text — appears in product screenshots and inline code contexts. Weight 500 for emphasis within code blocks.

### EB Garamond — Surprise serif accent used sparingly — breaks the sans-serif rhythm for editorial pull-quotes or italicized flourishes, creating a literary counterpoint to the technical CursorGothic. · `--font-eb-garamond`
- **Substitute:** Source Serif Pro, Lora, or Crimson Text
- **Weights:** 400, 500
- **Sizes:** 16px
- **Line height:** 1.00, 1.50
- **Role:** Surprise serif accent used sparingly — breaks the sans-serif rhythm for editorial pull-quotes or italicized flourishes, creating a literary counterpoint to the technical CursorGothic.

### Lato — Secondary sans for utility text, small labels, and supplementary UI — appears where CursorGothic isn't loaded or for sub-12px micro-copy. · `--font-lato`
- **Substitute:** Lato (freely available from Google Fonts)
- **Weights:** 400, 600
- **Sizes:** 10px, 12px, 14px, 16px
- **Line height:** 1.10–1.50
- **Letter spacing:** 0.0040em
- **Role:** Secondary sans for utility text, small labels, and supplementary UI — appears where CursorGothic isn't loaded or for sub-12px micro-copy.

### -apple-system — -apple-system — detected in extracted data but not described by AI · `--font-apple-system`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.5
- **Role:** -apple-system — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.1 | 0.004px | `--text-caption` |
| heading-sm | 22px | 1.25 | -0.005px | `--text-heading-sm` |
| heading | 26px | 1.2 | -0.012px | `--text-heading` |
| heading-lg | 36px | 1.1 | -0.02px | `--text-heading-lg` |
| display | 72px | 1 | -0.03px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 13 | 13px | `--spacing-13` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 22 | 22px | `--spacing-22` |
| 28 | 28px | `--spacing-28` |
| 43 | 43px | `--spacing-43` |
| 67 | 67px | `--spacing-67` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 4px |
| cards | 8px |
| icons | 4px |
| inputs | 4px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1)...` | `--shadow-xl` |
| xl-2 | `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0....` | `--shadow-xl-2` |
| subtle | `oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1...` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Primary Filled Button (Download CTA)
**Role:** High-emphasis action — download, sign up, commit-level conversions

Espresso Ink (#26251e) background, Page Parchment (#f7f7f4) text, CursorGothic 14px weight 400, pill radius (9999px), padding 10px 20px. No border. Sits as the visual anchor in the nav and hero. No drop shadow — the contrast does the work.

### Ghost Outlined Button (Request a demo)
**Role:** Secondary action — paired with the primary CTA for non-committal alternatives

Transparent background, Espresso Ink (#26251e) 1px border, Espresso Ink text, pill radius (9999px), padding 10px 20px. Arrow icon (→) inline at the end. On hover: background fills to Card Stone (#e6e5e0).

### Navigation Link
**Role:** Top-nav items: Product, Enterprise, Pricing, Resources

Espresso Ink (#26251e) text, CursorGothic 14px weight 400, no underline by default. On hover: Ember Orange (#f54e00) text and/or 1px underline. Spacing between items: 24px column gap.

### Logo Lockup
**Role:** Brand mark in nav and footer

Cursor icon (geometric cursor/arrow shape) in Espresso Ink, followed by "CURSOR" wordmark in CursorGothic 16px weight 400, letter-spacing 0.01em, uppercase. Icon and text baseline-aligned.

### Hero Headline
**Role:** Above-the-fold statement of value

CursorGothic 72px weight 400, line-height 1.00, letter-spacing -0.030em, Espresso Ink (#26251e). Two-line max. No gradient, no decoration — the type weight and tracking create the emphasis.

### Hero Subtext
**Role:** Supporting paragraph under hero headline

CursorGothic 16–18px weight 400, line-height 1.50, Muted Clay (#7a7974). Max-width 540px for readable measure.

### Product Screenshot Card
**Role:** Large hero/feature image showing the Cursor IDE interface

Full-bleed within container, 8px radius, soft layered shadow: rgba(0,0,0,0.14) 0px 28px 70px, rgba(0,0,0,0.1) 0px 14px 32px, plus 1px oklab hairline border. Shows the Cursor desktop app with window chrome, file tree, and editor.

### Trust Logo Strip
**Role:** Social proof — "Trusted by teams at" row

Horizontal row of 8 monochrome logos (Stripe, OpenAI, Linear, Datadog, NVIDIA, Figma, Ramp, Adobe). Logos in Espresso Ink (#26251e) at 60% opacity, 60px height, 32px gap between items. No card backgrounds, no borders — floats on Page Parchment.

### Feature Section (Text + Screenshot Split)
**Role:** Mid-page content blocks — alternating left/right text-and-image pairs

Two-column layout: text column (40%) + screenshot column (60%). Text uses 22–26px heading in Espresso Ink, 14–16px body in Muted Clay. Gap between columns: 48px. Section vertical padding: 64px. Background alternates between Page Parchment and Card Stone (#e6e5e0) for visual rhythm.

### Code/Command Block
**Role:** Inline terminal commands and curl examples

Card Stone (#e6e5e0) background, 4px radius, 8px 12px padding. berkeleyMono 12–13px weight 400 in Espresso Ink. Often paired with a small copy button. The monospace face and warm surface make code feel like a printed typeset block.

### Badge/Tag
**Role:** Small status pills, category labels, "new" markers

4px radius, 4px 8px padding, CursorGothic 12px weight 400. Variants: filled Espresso Ink bg / Page Parchment text; outlined 1px Muted Clay border / Muted Clay text; or Signal Green (#4ade80) for success states.

### Input Field
**Role:** Form inputs in nav, search, newsletter

Card Stone (#e6e5e0) background, Border Sand (#d9d5cf) 1px border, 4px radius, 8px 12px padding. CursorGothic 14px in Espresso Ink. Placeholder in Muted Clay. On focus: border darkens to Muted Clay, no glow ring.

## Do's and Don'ts

### Do
- Use Espresso Ink (#26251e) for all primary text and filled buttons — never use pure #000, the warm undertone is essential to the brand
- Set all buttons to pill radius (9999px) — tags can be 4px, cards 8px, but buttons are always fully rounded
- Apply Ember Orange (#f54e00) only to interactive moments: link hovers, link underlines, and active states. Never as a background fill or decorative element
- Use CursorGothic at weight 400 across all sizes — the single weight with tight negative tracking at large sizes (up to -0.030em at 72px) creates the editorial feel
- Alternate section backgrounds between Page Parchment (#f7f7f4) and Card Stone (#e6e5e0) to create visual rhythm between feature blocks
- Use berkeleyMono for all code, file paths, and CLI commands — never render code in CursorGothic, the monospace DNA of the brand requires the dedicated mono face
- Keep the surface 95%+ achromatic. If a screen needs more than one chromatic color, it is likely over-designed

### Don't
- Don't use pure black (#000000) for text or buttons — always warm it to Espresso Ink (#26251e) or Deep Charcoal (#141414)
- Don't add drop shadows to buttons, nav items, or text — shadows are reserved for elevated screenshot cards and modals
- Don't use the chromatic accent colors (Ember Orange, Signal Green, Brass Gold) for backgrounds or large fills — they are for strokes, text, and small functional moments only
- Don't set body text below 13px or above 18px — the type system stays in a tight editorial range
- Don't introduce new border-radius values beyond 4px (tags/inputs), 8px (cards), and 9999px (buttons) — consistency is the system
- Don't use a chromatic border on the secondary CTA — it should be a neutral Espresso Ink outline, not an orange or green stroke
- Don't alternate text and image positions more than 3 times consecutively — the rhythm should be deliberate, not chaotic

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Parchment | `#f7f7f4` | Base canvas — the warm off-white that fills the viewport |
| 1 | Card Stone | `#e6e5e0` | First elevation — card surfaces, secondary buttons, subtle section differentiation |
| 2 | Warm Highlight | `#d9d5cf` | Hover states, selected list items, focused surfaces |
| 3 | Deep Inset | `#cdcdc9` | Inset wells, code-block backgrounds, tertiary surface depth |

## Elevation

- **Product Screenshot Card:** `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263 -0.002 0.012 / 0.1) 0px 0px 0px 1px`
- **Elevated Card (modal/feature):** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263 -0.002 0.012 / 0.1) 0px 0px 0px 0.5px`
- **Subtle Card (inline):** `oklab(0.263 -0.002 0.012 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.28) 0px 18px 36px -18px`

## Imagery

Photography and illustration are minimal. The dominant visual content is product screenshots of the Cursor IDE rendered as large floating cards with soft layered shadows — these carry the page. Background imagery consists of subtle warm landscape photographs (mountains, meadows) at very low opacity behind hero product cards, providing atmospheric depth without competing with the product. Trust logos are monochrome wordmarks. No lifestyle photography, no 3D renders, no illustration system — the product IS the visual.

## Layout

Max-width ~1200px centered container. Hero is a two-block vertical stack: headline + dual CTA row, then a full-width product screenshot card that bleeds to the edges of the content area. Below the hero: a trust logo strip centered on the canvas. Feature sections alternate in a two-column split (text-left/image-right, then text-right/image-left) with 64px vertical section gaps and background bands alternating between Page Parchment and Card Stone. Navigation is a minimal top bar: logo left, 4 link items center, Sign in / Contact sales / Download button right. No sidebar, no mega-menu. The overall density is compact but breathable — the warm palette and generous section gaps make it feel editorial rather than information-dense.

## Agent Prompt Guide

**Quick Color Reference**
- text: #26251e (Espresso Ink)
- background: #f7f7f4 (Page Parchment)
- card surface: #e6e5e0 (Card Stone)
- border: #d9d5cf (Border Sand)
- muted text: #7a7974 (Muted Clay)
- link/accent: #f54e00 (Ember Orange)
- primary action: #c08532 (filled action)

**3-5 Example Component Prompts**

1. Create a Primary Action Button: #c08532 background, #141414 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. **Feature Split Section**: Two-column layout, 40% text / 60% screenshot, 48px gap. Background: Card Stone (#e6e5e0). Left column: 26px CursorGothic heading in Espresso Ink, 16px body in Muted Clay (#7a7974). Right column: product screenshot card with 8px radius and layered shadow.

3. **Trust Logo Strip**: Horizontal row on Page Parchment background, 8 monochrome logos in Espresso Ink at 60% opacity, 60px height, 32px gap. No borders, no card backgrounds. Centered.

4. **Code/Command Block**: Card Stone (#e6e5e0) background, 4px radius, 8px 12px padding. berkeleyMono 13px weight 400 in Espresso Ink. Inline copy icon button at the right edge.

5. **Navigation Bar**: Page Parchment background, no border or shadow. Left: Cursor logo lockup (icon + CURSOR wordmark in Espresso Ink). Center: 4 nav links in CursorGothic 14px Espresso Ink, 24px gap. Right: "Sign in" text link, "Contact sales" text link, then dark filled Download button (Espresso Ink bg, pill radius).

## Similar Brands

- **Linear** — Same compact density, warm-light theme, dark filled primary buttons, and tight editorial typography with custom sans-serif
- **Vercel** — Same near-monochrome palette with rationed accent color, max-width contained layout, and product-screenshot-as-hero approach
- **Raycast** — Same warm off-white canvas, dev-tool audience, and confident use of a single dark filled CTA against a paper-like background
- **Arc Browser** — Same editorial approach to a technical product, warm neutral palette, and willingness to use serif accents in a dev context

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-espresso-ink: #26251e;
  --color-page-parchment: #f7f7f4;
  --color-card-stone: #e6e5e0;
  --color-border-sand: #d9d5cf;
  --color-muted-clay: #7a7974;
  --color-edge-ash: #8f8e89;
  --color-trace-smoke: #a1a19f;
  --color-deep-charcoal: #141414;
  --color-ember-orange: #f54e00;
  --color-signal-green: #4ade80;
  --color-brass-gold: #c08532;
  --color-deep-moss: #34785c;

  /* Typography — Font Families */
  --font-cursorgothic: 'CursorGothic', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-berkeleymono: 'berkeleyMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-eb-garamond: 'EB Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lato: 'Lato', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.1;
  --tracking-caption: 0.004px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.005px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.012px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.02px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.03px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-43: 43px;
  --spacing-67: 67px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-sm: 1.5px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Named Radii */
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-icons: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 0.5px;
  --shadow-subtle: oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.28) 0px 18px 36px -18px;

  /* Surfaces */
  --surface-page-parchment: #f7f7f4;
  --surface-card-stone: #e6e5e0;
  --surface-warm-highlight: #d9d5cf;
  --surface-deep-inset: #cdcdc9;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-espresso-ink: #26251e;
  --color-page-parchment: #f7f7f4;
  --color-card-stone: #e6e5e0;
  --color-border-sand: #d9d5cf;
  --color-muted-clay: #7a7974;
  --color-edge-ash: #8f8e89;
  --color-trace-smoke: #a1a19f;
  --color-deep-charcoal: #141414;
  --color-ember-orange: #f54e00;
  --color-signal-green: #4ade80;
  --color-brass-gold: #c08532;
  --color-deep-moss: #34785c;

  /* Typography */
  --font-cursorgothic: 'CursorGothic', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-berkeleymono: 'berkeleyMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-eb-garamond: 'EB Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lato: 'Lato', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.1;
  --tracking-caption: 0.004px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.005px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.012px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.02px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.03px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-43: 43px;
  --spacing-67: 67px;

  /* Border Radius */
  --radius-sm: 1.5px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 0.5px;
  --shadow-subtle: oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.28) 0px 18px 36px -18px;
}
```