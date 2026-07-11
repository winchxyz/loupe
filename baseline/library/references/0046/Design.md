# Workable — Style Reference
> Warm portrait gallery on cream paper

**Theme:** light

Workable reads as a warm, human-centered HR platform built on a cream canvas with a deep forest-teal primary color and playful multicolor accents. The visual signature is bold display typography paired with rounded photography tiles floating over gradient-washed product shots — people always feel close, never corporate. Surfaces are layered from a warm off-white base (#fff5ee) through soft pastel card backgrounds (peach, blue, cream) to white product screenshots, creating depth without shadows. Accent colors (lime, cyan, violet) appear as decorative punctuation in illustrations, gradients, and feature category badges, never as functional UI chrome. The overall feel is approachable and confident — a recruiting tool that signals 'people-first' through warm tones and rounded, generous shapes.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream Paper | `#fff5ee` | `--color-cream-paper` | Page canvas, section backgrounds — warm off-white that softens the whole interface and distinguishes Workable from stark-white SaaS |
| Ink Black | `#0f161e` | `--color-ink-black` | Primary text, dark filled buttons, body copy, nav links, borders — the cool near-black that grounds all warm surfaces |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, product screenshot backgrounds, text on dark fills — the cleanest highlight in the surface stack |
| Graphite | `#333942` | `--color-graphite` | Secondary text, muted body copy, link borders — readable but receding |
| Forest Teal | `#004038` | `--color-forest-teal` | Brand primary — headings, link borders, section dividers, outlined actions, tag accents; a deep blue-green that signals trust and growth without tech-bro blue |
| Deep Moss | `#00544c` | `--color-deep-moss` | Secondary brand tone for borders, decorative fills, and supporting UI accents — slightly lighter than Forest Teal for layering |
| Mint Glow | `linear-gradient(90deg, rgb(0, 245, 220), rgb(213, 255, 77) 48.5%, rgb(183, 115, 255))` | `--color-mint-glow` | Decorative heading underlines, section dividers, illustrated accents — the cheerful green that sits between brand teal and lime; Signature tri-stop gradient: cyan → lime → violet, used as product-screenshot backdrop washes and decorative hero atmosphere |
| Lime Spark | `#d5ff4d` | `--color-lime-spark` | Highlight stroke, gradient endpoint, decorative punctuation in illustrations |
| Cyan Pulse | `#00f5dc` | `--color-cyan-pulse` | Gradient start, feature card wash, energetic accent in hero composition |
| Apricot Wash | `#fde8ce` | `--color-apricot-wash` | Soft card surface for feature blocks — warm pastel that adds depth without competing with content |
| Peach Tile | `#ffdcbf` | `--color-peach-tile` | Card background variant for category differentiation in feature sections |
| Sky Tile | `#bee9f4` | `--color-sky-tile` | Card background variant — cool pastel counterpoint to the warm peach and apricot |

## Tokens — Typography

### Proxima Nova — All UI type — nav, body, buttons, headings, badges. Weight 700 for headlines and CTAs creates confident display moments; weight 400 keeps body copy approachable. The single-family system is deliberate: one voice across the whole product, distinguished only by size and weight. · `--font-proxima-nova`
- **Substitute:** Montserrat (closest free match for the geometric humanist character and weight range)
- **Weights:** 400, 700
- **Sizes:** 16, 18, 20, 24, 32, 56, 72
- **Line height:** 1.13–1.75
- **Role:** All UI type — nav, body, buttons, headings, badges. Weight 700 for headlines and CTAs creates confident display moments; weight 400 keeps body copy approachable. The single-family system is deliberate: one voice across the whole product, distinguished only by size and weight.

### Source Serif Pro — Sparse accent for editorial pull-quote moments in long-form body copy — used rarely to break rhythm when a paragraph needs to feel reflective rather than instructional · `--font-source-serif-pro`
- **Substitute:** Lora or Source Serif 4
- **Weights:** 400
- **Sizes:** 24
- **Line height:** 1.50
- **Role:** Sparse accent for editorial pull-quote moments in long-form body copy — used rarely to break rhythm when a paragraph needs to feel reflective rather than instructional

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 16px | 1.5 | — | `--text-caption` |
| body-sm | 18px | 1.56 | — | `--text-body-sm` |
| body | 20px | 1.5 | — | `--text-body` |
| subheading | 24px | 1.38 | — | `--text-subheading` |
| heading-sm | 32px | 1.25 | — | `--text-heading-sm` |
| heading | 56px | 1.14 | — | `--text-heading` |
| display | 72px | 1.13 | — | `--text-display` |

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
| 64 | 64px | `--spacing-64` |
| 88 | 88px | `--spacing-88` |
| 104 | 104px | `--spacing-104` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 16px |
| badges | 25px |
| images | 16px |
| buttons | 16px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 32px
- **Element gap:** 8px

## Components

### Primary Filled Button
**Role:** Main action — 'Start a free trial' and final conversion CTAs

Dark fill (#0f161e), white text, 16px radius, Proxima Nova 700 at 16px, padding 16px 24px. High contrast against the cream canvas; the only filled action in the system.

### Outlined Brand Button
**Role:** Secondary action — 'Request a demo', navigation emphasis

Transparent fill, 1.5px border in #004038 (Forest Teal), Forest Teal text, 16px radius, Proxima Nova 700 at 16px, padding 16px 24px. Carries the brand color in stroke form.

### Ghost Text Link
**Role:** Inline navigation, 'Learn more' style actions next to primary CTAs

No background, no border, Forest Teal text (#004038) at 16px weight 700 with a → arrow suffix, sits inline 24px to the left of the primary button.

### Category Badge
**Role:** Section category labels above feature headlines

Pill shape, 25px radius, solid colored fill (yellow, cyan, or peach variants), Proxima Nova 700 at 16px, padding 8px 16px. Signals which product module the section describes.

### Floating Portrait Tile
**Role:** Hero composition element — people-photos arranged in 3D-feeling cluster

Rounded square photos at 16px radius, staggered at slight rotations, each with a small label pill (matching Category Badge style) floating beside. Creates the 'team gallery' signature.

### Feature Section Card
**Role:** Product module description — text block paired with product screenshot

White (#ffffff) or pastel wash (#fde8ce) background, 16px radius, 32px padding, heading at 32px weight 700, body at 18–20px weight 400. No shadow — relies on background color contrast for separation.

### Product Screenshot Panel
**Role:** Embedded UI mockup within a feature section

16px radius, set against a full-bleed gradient backdrop (cyan→lime→violet or teal→peach). The gradient is the signature — it bleeds beyond the screenshot edges to create atmosphere.

### Side-by-Side Feature Block
**Role:** Two-column feature layout — description left, screenshot right

Cream canvas background, left column is 40% width with heading + body + link, right column is 60% with Product Screenshot Panel. 40px row gap between text elements.

### Top Navigation Bar
**Role:** Primary site navigation

Cream background (#fff5ee), logo left, nav items center-left in Proxima Nova 700 at 16px, right cluster: text 'Log in' → outlined 'Request a demo' → filled 'Start a free trial'. Full-bleed width, 8px internal padding.

### Hero Section
**Role:** First-screen brand statement

Cream canvas, left half is headline at 56–72px weight 700 (#0f161e) + subtext at 20px + dual CTA, right half is floating portrait tile cluster over subtle gradient atmosphere. 52px top padding.

### Centered Feature Header
**Role:** Section opener below the hero

Centered badge pill, then 56px weight 700 headline (#0f161e), then 20px body text. Sits directly on cream canvas before the two-column feature blocks.

### Decorative Gradient Backdrop
**Role:** Atmospheric wash behind product screenshots and hero artwork

Full-bleed linear-gradient from teal to lime to warm tones, slightly blurred at edges, sits behind 16px-radius screenshot panels. Not a UI element — a mood-setter.

## Do's and Don'ts

### Do
- Use Forest Teal (#004038) as the brand stroke color for outlined buttons, link borders, and section dividers — never as a filled background
- Set section backgrounds to Cream Paper (#fff5ee) and card surfaces to Pure White (#ffffff) or pastel washes (#fde8ce, #bee9f4, #ffdcbf) for depth without shadows
- Use 16px radius for all cards, buttons, and image containers; 25px only for pill-shaped category badges; 8px for nav elements
- Place a Category Badge pill directly above every feature section headline in a contrasting pastel color
- Anchor every hero and feature section with a gradient backdrop wash (cyan→lime→violet) behind floating product screenshots or portrait tiles
- Set headlines in Proxima Nova 700 at 56–72px with tight line-height (1.13–1.14) — the display type carries the brand voice
- Use the dual-CTA pattern: ghost text link with → arrow on the left, filled dark button on the right, 24px apart

### Don't
- Don't fill buttons with Forest Teal — it belongs on strokes and text, not surfaces
- Don't use white (#ffffff) as the page canvas — Cream Paper (#fff5ee) is the base; white is reserved for elevated cards
- Don't drop shadows on cards — separation comes from background color contrast, not elevation
- Don't use the gradient as a UI element or button fill — it lives only as an atmospheric backdrop behind product screenshots
- Don't use sharp 0px radius anywhere — every container rounds at least 8px, and most cards/buttons are 16px
- Don't introduce a second sans-serif family for body copy — Proxima Nova carries everything; Source Serif Pro only for rare editorial pull-quotes
- Don't use the lime (#d5ff4d), cyan (#00f5dc), or violet as functional colors — they are decorative accents in illustrations and gradients only

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#fff5ee` | Page and section background — the warm cream that defines the entire site |
| 2 | Card Surface | `#ffffff` | Product screenshot panels, elevated content blocks on top of canvas |
| 3 | Pastel Card | `#fde8ce` | Soft category-differentiated feature cards — warm peach tone |
| 4 | Pastel Variant | `#bee9f4` | Cool pastel card surface for visual variety in multi-card grids |
| 5 | Gradient Atmosphere | `#7edcaf` | Decorative backdrop wash behind product screenshots and hero artwork |

## Elevation

Workable intentionally avoids drop shadows. Depth is created by layering surface colors: cream canvas → white card → pastel card → gradient wash. This keeps the interface flat, warm, and print-like rather than skeuomorphic. The only 'elevation' cue is color contrast between the cream base and the white/pastel surfaces above it.

## Imagery

Photography is the emotional core of the brand — tight headshot crops of diverse people, always presented as rounded-square tiles (16px radius) floating in the hero composition and paired with category label pills. Photos are warm-lit, natural, and never corporate-staged; they feel like a candidate gallery. Product screenshots appear inside large 16px-radius panels set against a signature tri-color gradient backdrop (cyan→lime→violet) that bleeds beyond the screenshot edges. Illustrations are minimal — mostly the floating gradient orbs and small decorative circles in the hero. Icons are line-based and appear only in product UI mockups, not as standalone decoration.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0f161e (Ink Black)
- background: #fff5ee (Cream Paper)
- card surface: #ffffff (Pure White)
- border / divider: #004038 (Forest Teal) for brand dividers, #333942 (Graphite) for neutral
- accent: #7edcaf (Mint Glow) for decorative strokes and heading underlines
- primary action: #004038 (outlined action border)

**3-5 Example Component Prompts**

1. **Build a feature section header**: Centered Category Badge pill above the headline — 25px radius, solid #fde8ce fill, Proxima Nova 700 at 16px, padding 8px 16px. Headline below in Proxima Nova 700 at 56px, #0f161e, line-height 1.14. Subtext at 20px weight 400, #333942, line-height 1.50, max-width 640px centered.

2. **Build the hero dual CTA row**: Ghost text link 'Learn more →' in Forest Teal (#004038), Proxima Nova 700 at 16px, no border, no background. 24px to its right, an outlined button 'Start free trial' — transparent fill, 1.5px #004038 border, 16px radius, #004038 text, padding 16px 24px. Total row height ~48px.

3. **Build a product screenshot panel**: 16px radius container, Pure White (#ffffff) fill, holding a UI mockup. Place it centered on a full-bleed linear-gradient(90deg, #00f5dc, #d5ff4d 48.5%, #b773ff) backdrop that extends to viewport edges with 32px breathing room around the panel.

4. **Build a floating portrait tile**: 120px × 120px rounded square (16px radius) containing a headshot photo, rotated -3deg. Float a small label pill beside it — 25px radius, #ffdcbf fill, Proxima Nova 700 at 14px #0f161e, padding 6px 12px.

5. **Build a feature card grid item**: 16px radius, #fde8ce (Apricot Wash) background, 32px padding, heading in Proxima Nova 700 at 32px #0f161e, body at 18px weight 400 #333942, no shadow, no border. Cards sit in a 3-column grid with 24px gap on the cream canvas.

## Category Badge Color Rotation

Category badges above feature section headlines cycle through three pastel fills: #fde8ce (Apricot), #bee9f4 (Sky), #ffdcbf (Peach). Use one badge per section; rotate so adjacent sections get different hues. Yellow and cyan badge variants (#fde8ce paired with #00f5dc text) are used for accent moments. Never use a badge with no fill or with a white background — the pill must always carry a warm or cool pastel surface.

## Gradient System

The signature linear-gradient(90deg, #00f5dc, #d5ff4d 48.5%, #b773ff) is the brand's atmospheric signature. Use it only as a full-bleed backdrop behind product screenshot panels and in the hero composition — never inside buttons, cards, or text. A secondary warm gradient (teal → peach) appears in some product feature sections as an alternative backdrop. Both gradients should bleed beyond the contained content edge to create visual expansion.

## Similar Brands

- **BambooHR** — Same warm cream canvas + rounded card surfaces + human-photography-forward hero composition for an HR audience
- **Greenhouse** — Deep teal/forest brand primary + generous rounded shapes + product-screenshot-on-gradient backdrop treatment
- **Notion** — Comfortable spacing rhythm + one confident sans-serif at multiple weights + flat surfaces with color-contrast depth instead of shadows
- **Linear** — Tight 16px-radius containers + dual CTA pattern (ghost + filled) + category-pill section labels with consistent pill geometry

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-cream-paper: #fff5ee;
  --color-ink-black: #0f161e;
  --color-pure-white: #ffffff;
  --color-graphite: #333942;
  --color-forest-teal: #004038;
  --color-deep-moss: #00544c;
  --color-mint-glow: #7edcaf;
  --gradient-mint-glow: linear-gradient(90deg, rgb(0, 245, 220), rgb(213, 255, 77) 48.5%, rgb(183, 115, 255));
  --color-lime-spark: #d5ff4d;
  --color-cyan-pulse: #00f5dc;
  --color-apricot-wash: #fde8ce;
  --color-peach-tile: #ffdcbf;
  --color-sky-tile: #bee9f4;

  /* Typography — Font Families */
  --font-proxima-nova: 'Proxima Nova', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-source-serif-pro: 'Source Serif Pro', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  /* Typography — Scale */
  --text-caption: 16px;
  --leading-caption: 1.5;
  --text-body-sm: 18px;
  --leading-body-sm: 1.56;
  --text-body: 20px;
  --leading-body: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.38;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 56px;
  --leading-heading: 1.14;
  --text-display: 72px;
  --leading-display: 1.13;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-104: 104px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 25px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 16px;
  --radius-badges: 25px;
  --radius-images: 16px;
  --radius-buttons: 16px;

  /* Surfaces */
  --surface-canvas: #fff5ee;
  --surface-card-surface: #ffffff;
  --surface-pastel-card: #fde8ce;
  --surface-pastel-variant: #bee9f4;
  --surface-gradient-atmosphere: #7edcaf;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-cream-paper: #fff5ee;
  --color-ink-black: #0f161e;
  --color-pure-white: #ffffff;
  --color-graphite: #333942;
  --color-forest-teal: #004038;
  --color-deep-moss: #00544c;
  --color-mint-glow: #7edcaf;
  --color-lime-spark: #d5ff4d;
  --color-cyan-pulse: #00f5dc;
  --color-apricot-wash: #fde8ce;
  --color-peach-tile: #ffdcbf;
  --color-sky-tile: #bee9f4;

  /* Typography */
  --font-proxima-nova: 'Proxima Nova', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-source-serif-pro: 'Source Serif Pro', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  /* Typography — Scale */
  --text-caption: 16px;
  --leading-caption: 1.5;
  --text-body-sm: 18px;
  --leading-body-sm: 1.56;
  --text-body: 20px;
  --leading-body: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.38;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 56px;
  --leading-heading: 1.14;
  --text-display: 72px;
  --leading-display: 1.13;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-104: 104px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 25px;
}
```