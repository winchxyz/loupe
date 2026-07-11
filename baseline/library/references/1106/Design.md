# OpenAI — Style Reference
> Blank page before the first word — a design that treats white space as the most powerful element, reserving all color for user-generated and editorial content.

**Theme:** light

OpenAI.com reads like a blank page waiting to be written on — pure white, near-zero chromatic saturation (1%), and typography that does everything. The custom OpenAI Sans carries the entire visual weight: tightly tracked at -0.03em for large display text, it condenses space so headlines feel carved rather than set. Black (#000000) and border-gray (#e5e7eb) are the only tools; no accent colors, no gradients on the core UI, no decorative illustration. Color arrives exclusively through editorial imagery — soft-focus flower macros, pastel gradient thumbnail cards — making those images feel explosive against the white canvas. The signature tension is 9999px pills for interactive chips and inputs sitting inside a layout where cards use a very specific 6.08px radius, creating a system that pairs one extreme roundness with one precise near-flat radius.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Primary text, nav labels, filled CTA button background, icon fills — the singular chromatic anchor of the entire system |
| Fog Border | `#e5e7eb` | `--color-fog-border` | All dividing lines, card outlines, input borders, nav underlines — the lightest possible mark that still reads as a separator on white |
| Chalk | `#f1f1f1` | `--color-chalk` | Hover-state button backgrounds, subtle surface fills — one step off pure white without introducing warmth |
| Graphite | `#666666` | `--color-graphite` | Supporting body text, icon strokes, secondary labels — muted but still readable |
| Ash | `#8f8f8f` | `--color-ash` | Tertiary labels, disabled states, fine-grain icon strokes |
| Canvas | `#ffffff` | `--color-canvas` | Page background, card surfaces, all primary surfaces — absolute white with no warm or cool tint |

## Tokens — Typography

### OpenAI Sans — The single typeface for the entire site across every context — nav, body, headlines, buttons, inputs. At 48px display it runs at roughly -0.03em letter-spacing, making large text feel compressed and precise rather than airy. Weight 600 for headlines, 500 for UI labels, 400 for body. The custom cuts provide 'calt' and 'liga' features for text composition. · `--font-openai-sans`
- **Substitute:** Inter, DM Sans
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 16px, 17px, 18px, 22px, 28px, 48px
- **Line height:** 1.00–1.65 (tighter at large sizes ~1.16, looser at body ~1.50–1.65)
- **Letter spacing:** -0.03em at display sizes (48px), -0.01em at mid sizes, +0.011em at smallest sizes (13px caps/tags)
- **OpenType features:** `"calt", "liga"`
- **Role:** The single typeface for the entire site across every context — nav, body, headlines, buttons, inputs. At 48px display it runs at roughly -0.03em letter-spacing, making large text feel compressed and precise rather than airy. Weight 600 for headlines, 500 for UI labels, 400 for body. The custom cuts provide 'calt' and 'liga' features for text composition.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.64 | — | `--text-caption` |
| heading | 22px | 1.26 | — | `--text-heading` |
| heading-lg | 28px | 1.21 | — | `--text-heading-lg` |
| display | 48px | 1.16 | -1.44px | `--text-display` |

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
| 40 | 40px | `--spacing-40` |
| 52 | 52px | `--spacing-52` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 112 | 112px | `--spacing-112` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 6.08px |
| chips | 9999px |
| input | 9999px |
| links | 4px |
| buttons | 9999px |
| softButton | 40px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) ...` | `--shadow-sm` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 32px
- **Element gap:** 8-16px

## Components

### Primary Navigation Bar
**Role:** Top-level site navigation

White background, 64px tall. OpenAI logo left-aligned. Nav links in OpenAI Sans 14px weight 500, #000000, no underline, zero border-radius. 'Log in' ghost button with rgba(0,0,0,0.12) border, 9999px radius, 12px horizontal padding. 'Try ChatGPT' filled pill button: #000000 background, #ffffff text, 9999px radius, 12px horizontal padding. Search icon right of nav links. No sticky shadow — only #e5e7eb bottom border on scroll.

### Filled Pill CTA Button
**Role:** Primary call-to-action

#000000 background, #ffffff text, OpenAI Sans 14px weight 500, 9999px border-radius, 10px vertical padding, 16px horizontal padding. External link indicator (arrow icon) inline with label. Box-shadow: rgba(0,0,0,0.02) 0px 4px 6px, rgba(0,0,0,0.05) 0px 0px 2px — almost invisible elevation.

### Ghost Pill Button
**Role:** Secondary actions, navigation chips

Transparent background, #000000 text, rgba(0,0,0,0.12) border, 9999px radius, 10px vertical padding, 12px horizontal padding. Hover state shifts background to #f1f1f1.

### Soft Rounded Button
**Role:** Feature category chips (Search with ChatGPT, Talk with ChatGPT, Sora)

rgba(0,0,0,0.04) background, #000000 text, OpenAI Sans 14px weight 500, 40px border-radius, 8px vertical padding, 16px horizontal padding. Separated by #e5e7eb borders between group items.

### Conversational Input
**Role:** ChatGPT-style prompt entry field

Transparent background, #000000 text, #e5e7eb border, 9999px border-radius, 10px vertical padding, 24px right padding, 52px left padding (icon offset). Placeholder text in #666666. Submit arrow button in bottom-right corner. Full-width within a centered container max ~640px.

### Editorial News Card
**Role:** Article thumbnails in news/stories grids

Transparent background, 6.08px border-radius, no box-shadow, 0px padding. Full-bleed thumbnail image on top with 6.08px radius clipping. Below: category label in OpenAI Sans 13px weight 500 #666666 with letter-spacing +0.011em, headline in 18-22px weight 600 #000000, read-time in 13px weight 400 #666666. No card border — image and type float on white.

### Image Overlay Badge
**Role:** Model or product name displayed over hero images

#ffffff background, 9999px border-radius (very large ~24px for readable badge). Text in OpenAI Sans weight 600 — bold portion in #000000, variable portion in #666666. Appears centered over editorial hero image with subtle shadow: rgba(0,0,0,0.05) 0px 2px 4px.

### Nav Text Link
**Role:** Top-level navigation items

Transparent background, #000000 text, OpenAI Sans 14px weight 500, borderRadius 0px, no padding. Hover state adds underline. No border. Active state unspecified — likely underline weight change.

### Inline Text Link
**Role:** Body copy hyperlinks and 'View more' actions

#000000 text, OpenAI Sans 16px weight 400, 4px border-radius on focus ring. Underline on hover. No background color. 'View more' uses no underline at rest, underline on hover.

### Category Label Badge
**Role:** Content taxonomy tags (Product, Company, Research)

No background, no border. OpenAI Sans 13px weight 500, letter-spacing +0.011em, #666666 color. Uppercase or title-case. Placed inline before read-time, separated by a middot or space.

### Footer Column Block
**Role:** Site footer navigation

White background, full-width. Column headers in OpenAI Sans 13px weight 600 #000000, letter-spacing +0.011em. Links in 13px weight 400 #666666. Row gap 8px between links. Column gap 64px between groups. Top border #e5e7eb 1px.

## Do's and Don'ts

### Do
- Use #000000 as the only filled button background color — no colored CTAs
- Apply 9999px border-radius to all pill buttons, ghost buttons, and the conversational input field
- Use 6.08px border-radius on all image-containing card elements and thumbnail clips
- Set display headlines (48px) with letter-spacing -0.03em; omit tracking overrides below 22px unless using caps labels
- Use #e5e7eb as the only border/divider color — never darken it or tint it
- Introduce color only through photography or editorial imagery — never through UI backgrounds or button fills
- Maintain minimum 64px vertical gap between page sections

### Don't
- Do not use any colored accent (blue, green, orange) on interactive elements or backgrounds
- Do not apply box-shadows to cards — separation comes from whitespace, not depth
- Do not mix border-radius values between pill (9999px) and card (6.08px) contexts — the contrast is intentional and the values must be exact
- Do not use weight below 400 or above 600 in OpenAI Sans — the 400/500/600 triad defines all typographic hierarchy
- Do not use background colors on section blocks — the page stays #ffffff wall-to-wall
- Do not add letter-spacing at body sizes (16-18px) — tracking is only for display (negative) and caps labels (positive +0.011em)
- Do not use more than two typographic colors: #000000 for primary and #666666 for secondary — #8f8f8f is reserved for disabled/tertiary only

## Elevation

Elevation is functionally absent. The only shadow in the system — rgba(0,0,0,0.02) 0px 4px 6px, rgba(0,0,0,0.05) 0px 0px 2px — appears on the CTA button and is so faint it reads as a print artifact rather than depth. Cards have no shadow; separation comes from whitespace and the 6.08px image clip radius, not shadow stacking. This is a flat surface philosophy where z-axis is communicated through opacity and spatial distance, not shadow.

## Imagery

Editorial photography is the only source of color on the page — soft-focus macro flower shots in warm oranges/pinks, pastel gradient abstract tiles for sidebar cards in blue/purple/teal. These images are contained within 6.08px rounded-corner tiles, never full-bleed on the page. No lifestyle photography, no people, no UI screenshots in news cards. The color in images feels deliberate and curated — always soft, always gradient-adjacent, never harsh or literal. Icons are monochrome: outlined/filled in #000000 or #666666, 1.5px apparent stroke weight. Image density is low — images appear only in editorial card grids, leaving vast white space across the page.

## Layout

Max-width centered layout (~1200px) on a pure white canvas. Hero section is minimal-centered: headline at 48px centered horizontally, input box centered below, chip buttons centered below that — no hero image, no background treatment. Below hero: asymmetric two-column editorial grid (large featured card left ~60% width, vertical stack of smaller cards right ~35%). Further sections use consistent top-to-bottom stacking with 64-80px section gaps. Navigation is a fixed top bar at 64px, logo left, links center-left, CTAs right. Footer is a multi-column link grid. No alternating dark/light bands — the entire page is white with content as the only visual differentiation.

## Agent Prompt Guide

**Quick Color Reference**
- Text primary: #000000
- Text secondary: #666666
- Page background: #ffffff
- All borders/dividers: #e5e7eb
- Button hover surface: #f1f1f1
- CTA button fill: #000000 (text: #ffffff)

**Example Component Prompts**

1. **Hero Section**: Pure white background. Center-aligned headline: OpenAI Sans 48px weight 600, #000000, letter-spacing -1.44px. Conversational input below at max-width 640px: transparent background, #e5e7eb border 1px, 9999px radius, 10px/52px/10px/24px padding (top/left/bottom/right), placeholder text #666666. Below input: row of chip buttons at 40px radius, rgba(0,0,0,0.04) background, #000000 text, 8px/16px padding, OpenAI Sans 14px weight 500.

2. **News Card Grid**: Two-column asymmetric layout. Left card (60% width): image full-width with 6.08px radius, below: category label OpenAI Sans 13px weight 500 #666666 letter-spacing +0.143px, headline 28px weight 600 #000000, read-time 13px weight 400 #666666. Right column: two stacked cards, image full-width 6.08px radius, same label/headline/readtime pattern at 18px headline. No borders, no shadows on cards.

3. **Navigation Bar**: 64px height, white background, #e5e7eb bottom border 1px. Left: OpenAI wordmark. Center-left: nav links OpenAI Sans 14px weight 500 #000000, horizontal gap 24px. Right: 'Log in' button (transparent bg, rgba(0,0,0,0.12) border, 9999px radius, 12px horizontal padding) + 'Try ChatGPT' button (#000000 bg, white text, 9999px radius, 10px vertical / 16px horizontal padding, arrow icon right).

4. **Category Label + Read Time Inline**: OpenAI Sans 13px weight 500, #666666, letter-spacing +0.143px. Format: 'Product · 16 min read' — category runs into a centered-dot separator then read time, all same color and size, no background.

5. **Footer**: White background, top border #e5e7eb 1px. Column headers OpenAI Sans 13px weight 600 #000000 letter-spacing +0.143px. Links 13px weight 400 #666666, row-gap 8px. Columns separated by 64px gap.

## Color Through Content

OpenAI.com's UI is intentionally achromatic — 1% colorfulness across the entire token set. Color is exclusively editorial: soft-focus macro photography (orange, pink, coral), and gradient thumbnail tiles (blue-to-purple, teal-to-lavender) appear only inside image containers with 6.08px radius. This means any new page section that needs visual differentiation must do so through typography size/weight changes, whitespace variation, or image selection — never through background color blocks or UI accent colors. Adding even a muted blue CTA would break the system's defining constraint.

## Radius Philosophy

Two radii define the entire shape system: 9999px (pill) and 6.08px (near-square). There is no middle ground. Pills appear on all interactive affordances: buttons, chips, input fields. The 6.08px radius appears on all image containers and card clips — it is precise enough to suggest intentionality (not a generic 8px) but flat enough to read as almost-rectangular. The 40px variant on soft-chip buttons is a transitional form — rounder than cards but not full pill — used only for the feature-mode selector chips. Do not introduce 12px, 16px, or 24px radii into new components.

## Similar Brands

- **Anthropic** — Same achromatic UI palette with all color deferred to editorial imagery, identical pill-button approach on CTAs
- **Linear** — Single typeface system where weight variation carries all hierarchy, near-zero background color usage
- **Notion** — White-dominant canvas with black as sole accent, conversational input as hero element, flat card approach with only radius for differentiation
- **Arc Browser (The Browser Company)** — Custom typeface doing all brand work on a white ground, imagery as sole chromatic expression in an otherwise achromatic UI
- **Perplexity AI** — Centered conversational prompt as hero layout, pill-bordered chip buttons for mode switching, monochromatic nav system

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;

  /* Typography — Font Families */
  --font-openai-sans: 'OpenAI Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

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
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 32px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-md-2: 6.08px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 6.08px;
  --radius-chips: 9999px;
  --radius-input: 9999px;
  --radius-links: 4px;
  --radius-buttons: 9999px;
  --radius-softbutton: 40px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;

  /* Typography */
  --font-openai-sans: 'OpenAI Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-md-2: 6.08px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```