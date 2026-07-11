# 099 — Style Reference
> monospaced control room in a lightless warehouse. Pure black void, white type, catalog numbers as art.

**Theme:** dark

099 Supply operates as a typographic storefront: pure black canvas, monochrome surfaces, and a single monospaced voice that treats interface and product as one continuous design exercise. The system is aggressively achromatic — zero chromatic accents, zero gradients, zero shadows — relying entirely on tonal contrast between #000000, #1d1d1d, and #ffffff to create spatial hierarchy. Typography is deliberately uniform: Soehne Mono at weight 400 across all roles, letting product imagery and three-digit catalog numbers (027, 026, 024) carry visual rhythm instead of type weight or size variation. The result is a utility surface that behaves like a developer's terminal — clinical, confident, and opinionated about minimalism as a creative statement.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page canvas, deep background, image backgrounds — establishes the lightless stage |
| Carbon | `#1d1d1d` | `--color-carbon` | Card surfaces, elevated panels, input fields — the only step off pure black for spatial layering |
| Graphite | `#383838` | `--color-graphite` | Button borders, control outlines, subtle dividers |
| Ash | `#888888` | `--color-ash` | Muted secondary text, helper labels, price text, inactive metadata |
| Bone | `#ffffff` | `--color-bone` | Primary text, headings, active states, high-contrast product labels |

## Tokens — Typography

### Soehne Mono — Sole typeface across all roles — navigation, headings, body, prices, product codes. Weight 400 only; the monospaced grid provides its own structural rhythm. Letter-spacing 0.015em with "zero" font feature (slashed zero) for catalog-number legibility. · `--font-soehne-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Space Mono
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.0 / 1.2 / 1.4
- **Letter spacing:** 0.015em (0.24px at 16px)
- **OpenType features:** `"zero"`
- **Role:** Sole typeface across all roles — navigation, headings, body, prices, product codes. Weight 400 only; the monospaced grid provides its own structural rhythm. Letter-spacing 0.015em with "zero" font feature (slashed zero) for catalog-number legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 16px | 1 | 0.24px | `--text-caption` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 19 | 19px | `--spacing-19` |
| 26 | 26px | `--spacing-26` |
| 27 | 27px | `--spacing-27` |
| 32 | 32px | `--spacing-32` |

### Border Radius

| Element | Value |
|---------|-------|
| tabs | 10px |
| cards | 10px |
| inputs | 10px |
| buttons | 10px |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 32px
- **Card padding:** 19-27px
- **Element gap:** 16px

## Components

### Top Navigation Bar
**Role:** Site header

Full-width bar on #000000 background, 19px vertical padding. Three flex-distributed zones: 'Menu ≡' (left), '099' wordmark (center), 'Cart ⁰' (right). All text Soehne Mono 16px weight 400, white. No border, no background fill — text floats on void.

### Featured Product Card (Large)
**Role:** Hero/editorial product showcase

#1d1d1d surface, 10px radius, 27px internal padding. Contains product code (white, top-left), description paragraph in #888888, and optional product image. Image fills the card with the dark surface bleeding into image edges. Height varies by content but spans full grid cell.

### Product Grid Card
**Role:** Catalog item in grid

#1d1d1d surface, 10px radius, 19-27px padding. Image area dominates the top (~75% of card height) with product photo on #1d1d1d or showing through to black. Below image: product code in white (e.g. 'M 027'), product name in white, 'From $9' price in #888888. All text 16px Soehne Mono.

### Filter Tab (Pill)
**Role:** Category filter

Pill-shaped tab with #383838 border, 10px radius, transparent fill on #000000 canvas. Text white, 16px Mono. Active state not visually distinct in dark mode — relies on hover or content change. Horizontal row of three+ tabs at 16px gap.

### Product Image Thumbnail
**Role:** Product visual

Square or near-square image area inside product cards. Subjects are product mockups (t-shirts, posters, devices) photographed or rendered in monochrome. T-shirts display three-digit numbers (027, 026) as large white sans/mono overlay. Posters show black-on-white or white-on-black typographic compositions.

### Loading Indicator
**Role:** Async content loader

Thin circular spinner, white stroke on #1d1d1d or #000000. Centered in viewport. Minimal — no accompanying text.

### Price Label
**Role:** Product pricing

Single-line text 'From $9' or fixed price in Soehne Mono 16px weight 400, color #888888. Sits directly below product name with no separator or bullet.

### Product Code Label
**Role:** SKU/identifier

Catalog prefix + number (e.g. 'M 027', 'C 012', 'C 010') in Soehne Mono 16px white. Prefix letter indicates category (M=Mockup, C=Component). Always two characters above the product name.

### Cart Counter
**Role:** Header utility

'Cart ⁰' in nav, with superscript zero indicating empty state. Text 16px Mono white. Counter increments as superscript Unicode.

## Do's and Don'ts

### Do
- Use only #000000, #1d1d1d, #383838, #888888, and #ffffff — no other colors exist in the system
- Set all border-radius to 10px — cards, buttons, inputs, tabs, and any other interactive element
- Set type to Soehne Mono weight 400 at 16px for every text role; do not vary weight or introduce bold/light
- Apply 0.015em letter-spacing and enable the "zero" font feature globally for slashed-zero catalog numbers
- Use 27px padding for card interiors and 16px gaps between grid items
- Let product imagery (white posters, white-on-black compositions) supply all visual contrast against the dark canvas

### Don't
- Do not introduce any chromatic color — the palette is intentionally zero-colorfulness
- Do not add box-shadows, drop-shadows, or glow effects; depth comes only from #000000 → #1d1d1d contrast
- Do not add gradients of any kind
- Do not use a proportional typeface, even for body text; everything stays monospaced
- Do not vary font weight to create hierarchy — all text sits at 400, hierarchy comes from color and position
- Do not add icons, illustrations, or decorative graphics to interface chrome; the product images are the only visual content
- Do not use rounded-pill buttons with 9999px radius; the system is 10px across all shapes

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Void | `#000000` | Base canvas — every page sits on pure black |
| 2 | Carbon | `#1d1d1d` | Product cards, filter tabs, input fields — the sole elevated surface |
| 3 | Image Surface | `#ffffff` | Product imagery (posters, t-shirts) — bright product shots break the dark field |

## Elevation

No shadows are used. Spatial depth is communicated exclusively through surface-tone stepping: pure black canvas → #1d1d1d card surface. The interface behaves like a flat darkroom where the only way to know something is raised is by its lighter value against the void.

## Imagery

Product photography only — no lifestyle, no illustration, no abstract graphics in interface chrome. Subjects are digital/physical products (t-shirts, posters, devices, beanies) shot on monochrome backgrounds, often with large three-digit numbers (027, 026, 024) screen-printed or overlaid in white. T-shirts are photographed hanging on minimal metal racks against dark gradients. Posters are shown as large black-and-white typographic compositions. The catalog-number-as-art approach is the site's signature visual — numbers function as both identifiers and graphic elements.

## Layout

Full-bleed dark canvas with content constrained to ~1280px max-width and generous 16-32px gutters. The first screen is a two-column hero: left card holds supply description in muted gray, right card holds a large product image (T-Shirt bestseller). Below: a horizontal row of filter pills (Show All / Mockups / Components). The main body is a 6-column product grid where each cell is a small product card (thumbnail + code + name + price). Cards are evenly spaced with 16px gaps. The page scrolls vertically with the grid continuing into empty black space, creating a sense of infinite dark inventory. Navigation is a minimal top bar — no sidebar, no mega-menu.

## Agent Prompt Guide

**Quick Color Reference**
- background: #000000
- card surface: #1d1d1d
- border: #383838
- muted text: #888888
- primary text: #ffffff
- primary action: no distinct CTA color

**Example Component Prompts**
1. Create a product grid card: #1d1d1d background, 10px border-radius, 27px internal padding. Product image (square, filling top 75% of card) with 10px radius on the image area. Below: 'M 027' in Soehne Mono 16px weight 400 white, 'T-Shirt' on next line same style, 'From $9' in #888888 below that. No shadow.

2. Create a navigation bar: full-width on #000000, 19px vertical padding, three flex zones — left 'Menu ≡', center '099', right 'Cart ⁰'. All text Soehne Mono 16px weight 400, #ffffff, letter-spacing 0.015em.

3. Create a filter tab row: three pills horizontally with 16px gap, each with 10px border-radius, 1px #383838 border, transparent fill on #000000 canvas. Text inside is 'Show All', 'Mockups (M)', 'Components (C)' in Soehne Mono 16px #ffffff.

4. Create a featured hero card: #1d1d1d background, 10px radius, 27px padding. Title '099 Supply' in Soehne Mono 16px white top-left. Body text in #888888 same font: 'Discover digital tools for creatives...' at 1.4 line-height.

5. Create a large product showcase card: #1d1d1d background, 10px radius. 'T-Shirt (Bestseller)' label top-left in Soehne Mono 16px white. Central area shows a t-shirt product image (hanging on rack) filling the card width.

## Similar Brands

- **Are.na** — Same monochrome dark canvas, minimal text-only interface, and product cards as flat dark surfaces with no shadows
- **Minimal.gallery** — Both treat the storefront itself as a typographic exercise — single monospaced voice, zero color, catalog numbers as visual rhythm
- **Linear** — Shared commitment to achromatic dark UI with single surface elevation step and sharp 8-10px radii
- **Craiyon / DevTools shops** — Monospaced-only typography and terminal-like restraint that signals the product is for technical/creative professionals

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-carbon: #1d1d1d;
  --color-graphite: #383838;
  --color-ash: #888888;
  --color-bone: #ffffff;

  /* Typography — Font Families */
  --font-soehne-mono: 'Soehne Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 16px;
  --leading-caption: 1;
  --tracking-caption: 0.24px;

  /* Typography — Weights */
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 32px;
  --card-padding: 19-27px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 10px;

  /* Named Radii */
  --radius-tabs: 10px;
  --radius-cards: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-carbon: #1d1d1d;
  --surface-image-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-carbon: #1d1d1d;
  --color-graphite: #383838;
  --color-ash: #888888;
  --color-bone: #ffffff;

  /* Typography */
  --font-soehne-mono: 'Soehne Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 16px;
  --leading-caption: 1;
  --tracking-caption: 0.24px;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;

  /* Border Radius */
  --radius-lg: 10px;
}
```