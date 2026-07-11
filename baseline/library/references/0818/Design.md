# Ciridae — Style Reference
> Noir observatory with ember glints — a darkened planetarium where white condensed type orbits a single warm copper star.

**Theme:** dark

Ciridae presents a cinematic dark canvas — near-black void (#0b0b0b) with crisp white condensed type floating in generous negative space. The entire interface is achromatic except for a single warm copper accent (#cc6437) that surfaces only as quiet punctuation in logo geometry, decorative strokes, or background atmospherics — never as a functional call-to-action. Typography is the loudest element: a custom condensed sans (Pragmatica Cond) set in a single weight (400) creates hierarchy purely through size, not boldness, with aggressively tight letter-spacing (-0.02em) and line-heights that compress down to 0.90 for the largest display sizes. The visual system avoids shadows entirely — depth is implied through surface shifts (#0b0b0b → #272a2a) and typographic scale, not elevation. Interactive elements are fully rounded pills (1440px radius) rendered as ghost outlines or pure text labels, reinforcing a philosophy of restraint: the brand whispers through geometry and spacing rather than shouting through color or weight.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#0b0b0b` | `--color-void` | Primary canvas, page background, hero base layer |
| Carbon | `#272a2a` | `--color-carbon` | Elevated surface — subtle panel lift above the void, card backgrounds, secondary containers |
| Ash | `#858585` | `--color-ash` | Muted text, secondary metadata, low-emphasis borders and dividers |
| Fog | `#cecece` | `--color-fog` | Tertiary text, border accents, subtle separators between sections and content blocks |
| Pure | `#ffffff` | `--color-pure` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Absinthe | `#000000` | `--color-absinthe` | Deep fill for SVG marks, icon masks, and graphic overlays where true black is required for crispness |
| Ember | `#cc6437` | `--color-ember` | Orange supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Tokens — Typography

### Pragmatica Cond — Primary typeface — condensed sans at regular weight only. Drives the entire hierarchy through size, never weight. Used for headlines, body, nav, buttons, labels, and the wordmark. The narrow proportions with tight tracking give the interface its compressed, cinematic density. Substitute: Barlow Condensed (Google), Oswald, or Roboto Condensed. · `--font-pragmatica-cond`
- **Substitute:** Barlow Condensed
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px, 32px, 62px
- **Line height:** 0.90–1.43 (0.90 at 62px, 1.43 at 14px)
- **Letter spacing:** -0.02em universally
- **Role:** Primary typeface — condensed sans at regular weight only. Drives the entire hierarchy through size, never weight. Used for headlines, body, nav, buttons, labels, and the wordmark. The narrow proportions with tight tracking give the interface its compressed, cinematic density. Substitute: Barlow Condensed (Google), Oswald, or Roboto Condensed.

### Roboto Mono — Secondary typeface — monospaced for system metadata, code-like labels, timestamps, and small body annotations. Its geometric rigidity contrasts Pragmatica Cond's warmth, providing typographic punctuation for technical or data-adjacent text. · `--font-roboto-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 11px, 14px
- **Line height:** 0.90–1.20
- **Letter spacing:** -0.02em
- **Role:** Secondary typeface — monospaced for system metadata, code-like labels, timestamps, and small body annotations. Its geometric rigidity contrasts Pragmatica Cond's warmth, providing typographic punctuation for technical or data-adjacent text.

### Pragmatica — Secondary sans — non-condensed companion for longer body passages where reading comfort matters more than the cinematic compression of Pragmatica Cond. Used sparingly for paragraph-length descriptions. · `--font-pragmatica`
- **Substitute:** Inter or Geist
- **Weights:** 400
- **Sizes:** 15px, 24px
- **Line height:** 1.10–1.20
- **Letter spacing:** -0.01em to -0.02em
- **Role:** Secondary sans — non-condensed companion for longer body passages where reading comfort matters more than the cinematic compression of Pragmatica Cond. Used sparingly for paragraph-length descriptions.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.2 | -0.22px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.28px | `--text-body-sm` |
| subheading | 20px | 1.1 | -0.4px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.05 | -0.64px | `--text-heading` |
| display | 62px | 0.9 | -1.24px | `--text-display` |

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 4px |
| cards | 10px |
| pills | 1440px |
| hairlines | 1px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 20px
- **Element gap:** 7-10px

## Components

### Pill Ghost Button
**Role:** Primary interactive element for navigation and high-emphasis actions

1440px border-radius (fully rounded), transparent background, white text in Pragmatica Cond at 14px weight 400, uppercase, letter-spacing -0.02em. Padding approximately 7px 20px. No fill, no shadow — pure text on void. Used for 'START NOW' and 'MENU' in the header.

### Pill Label / Tag
**Role:** Metadata or categorical labels

1440px border-radius, transparent or Ash background, white or Fog text in Pragmatica Cond at 11–14px weight 400. Padding 5–7px vertical, 10–12px horizontal. Identical geometry to buttons — the only difference is context and size.

### Star-Burst Logo Mark
**Role:** Brand identity anchor — geometric diamond/star cluster

A four-pointed star composed of diamond shapes radiating from a central axis. Rendered in Pure (#ffffff) at large sizes, sometimes with Ember (#cc6437) accent points. No fixed size — scales from 40px (inline) to 200px+ (centered hero placement). Flat SVG, no shadow.

### Wordmark
**Role:** Brand name in condensed type

'CIRIDAE' or variant in Pragmatica Cond weight 400, uppercase, letter-spacing -0.02em, Pure (#ffffff). Size scales: 16px for inline nav, 32px for section lockups, 62px for hero. No alternate weights — always 400.

### Hero Frame
**Role:** Full-viewport opening screen

100vh, Void (#0b0b0b) base with large blurred photographic background (warm tones incorporating Ember). Centered logo + wordmark stack. Pill buttons anchored to top-left and top-right corners. Flanking edge text in Pragmatica Cond at 11–14px positioned at far left/right vertical center. Small manifesto line below the central mark.

### Centered Manifesto Block
**Role:** Section statement — the verbal heartbeat of each section

Centered text block on Void. Eyebrow label in Pragmatica Cond at 14px uppercase (e.g., 'CIRIDAE BUILDS', 'OUR TEAM'). Statement text in Pragmatica Cond at 20–32px weight 400, all caps, letter-spacing -0.02em, Pure white. Optional supporting paragraph in Pragmatica at 15px, Fog (#cecece).

### Flanking Edge Text
**Role:** Positional tension device — text anchored to viewport edges

Single-line text in Pragmatica Cond at 11–14px uppercase, Pure white, positioned at far-left and far-right viewport edges at vertical center. Creates symmetrical tension across the hero. Examples: 'AUTOMATE THE MUNDANE' / 'ACCELERATE THE REMARKABLE'.

### Logo Grid Row
**Role:** Social proof and credibility display

Single horizontal row of partner/investor logos, evenly distributed across max-width. Logos rendered in Pure (#ffffff) monochrome on Void — no card containers, no borders, no individual spacing frames. Pragmatica Cond eyebrow label above in 14px uppercase.

### Section Divider
**Role:** Vertical break between content sections

No visible line — sections are separated by generous 80–120px vertical space. If visual punctuation is needed, a subtle 1px Ash (#858585) hairline may appear. The design trusts whitespace over rules.

### Monogram Glyph
**Role:** Decorative typographic element

Large-scale condensed letterforms or star-burst geometry used as full-bleed background atmospherics. Pure or Fog render at low visual weight, functioning as tonal texture rather than readable content.

## Do's and Don'ts

### Do
- Use Pragmatica Cond at weight 400 exclusively — never introduce bold, semibold, or light weights
- Set all type with letter-spacing -0.02em (or -0.01em for the secondary Pragmatica at body sizes) to maintain the compressed cinematic feel
- Apply 1440px border-radius to every interactive element, tag, and label for pill geometry consistency
- Use #0b0b0b as the only canvas color; shift to #272a2a for subtle surface elevation, never use white cards on the dark canvas
- Set display type at 62px with 0.90 line-height — the aggressive compression is signature
- Anchor interactive controls to viewport corners (pill buttons top-left/top-right) rather than centering them
- Keep the palette achromatic with Ember (#cc6437) appearing only as quiet geometric or atmospheric accent

### Don't
- Do not use bold or heavy weights — the single weight-400 philosophy is non-negotiable hierarchy logic
- Do not introduce box-shadows, drop-shadows, or glow effects — the system is deliberately flat
- Do not use Ember (#cc6437) as a button background, link color, or call-to-action — it is a decorative-only accent
- Do not use rounded cards with white or light backgrounds — all surfaces stay within the dark scale
- Do not use system fonts or non-condensed sans-serifs for headlines — the condensed proportions carry the brand
- Do not add borders thicker than 1px — the aesthetic is hairline and weightless
- Do not use generous line-heights (>1.5) for display or heading sizes — the tight 0.90–1.10 range defines the compressed feel

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#0b0b0b` | Page canvas — the infinite dark stage everything floats on |
| 1 | Carbon | `#272a2a` | Subtle surface lift for cards, panels, or grouped content blocks |
| 2 | Ash | `#858585` | Borders, dividers, hairline separators, and muted chrome |

## Elevation

The system deliberately avoids shadows. Depth is communicated exclusively through surface tone shifts (Void #0b0b0b → Carbon #272a2a), typographic scale jumps, and generous negative space. No box-shadows, no glows, no blur-elevation on cards. This flatness is a core brand signal — the interface feels like print on a black plane rather than a layered digital UI.

## Imagery

Imagery is minimal and atmospherically integrated. The hero employs a large-scale blurred photographic background (warm amber/skin-tone palette that harmonizes with Ember #cc6437) that bleeds into the void. Beyond the hero, the site is text-and-mark dominant with no product photography, lifestyle imagery, or illustration. Partner and investor logos serve as the only repeated visual content besides the brand mark. The star-burst logo and condensed wordmark function as both identity and ornament. No icons appear in the interface — the system relies on type, geometry, and positioning rather than iconography.

## Layout

The page follows a single-column, centered, section-stacked model on a full-bleed dark canvas. The hero is full-viewport (100vh) with the brand mark dead-center and interactive pills pinned to opposite top corners. Below the hero, each section is a centered content block on the void — no side rails, no sidebars, no grids beyond the single-row logo displays. Vertical rhythm is generous: 80–120px between major sections, with sections separated by whitespace rather than dividers. The max-width appears to be approximately 1200px for contained content, but the hero and decorative elements break free to full viewport width. Flanking edge text in the hero creates symmetrical horizontal tension. The layout philosophy is 'everything orbits the center line' — a cosmic, symmetrical composition rather than a grid-based dashboard.

## Agent Prompt Guide

**Quick Color Reference**
- text: #ffffff
- background: #0b0b0b
- border: #cecece / #858585
- accent: #cc6437
- muted text: #cecece
- primary action: no distinct CTA color

**Example Component Prompts**

1. *Create a centered section with eyebrow label and statement*: Void (#0b0b0b) background, 1200px max-width centered. Eyebrow label in Pragmatica Cond 14px weight 400 uppercase, Pure white, letter-spacing -0.28px, padding-bottom 7px. Statement text in Pragmatica Cond 32px weight 400, all caps, Pure white, letter-spacing -0.64px, line-height 1.05, centered.

2. *Create a pill navigation button*: 1440px border-radius, transparent background, Pragmatica Cond 14px weight 400 uppercase, Pure white, letter-spacing -0.28px, padding 7px 20px. No border, no shadow. Anchored to top-right of viewport.

3. *Create a logo grid row*: Single horizontal row on Void (#0b0b0b) background, max-width 1200px centered. Seven monochrome white (#ffffff) partner logos evenly distributed with 24px gaps. Eyebrow label above in Pragmatica Cond 14px weight 400 uppercase, Pure white, centered.

4. *Create a full-viewport hero*: 100vh height, #0b0b0b base with a large blurred warm-toned photographic background (amber/skin tones). Centered content: star-burst logo at 120px above 32px CIRIDAE wordmark (Pragmatica Cond weight 400, letter-spacing -0.64px). Pill button top-left ('START NOW'), pill button top-right ('MENU'). Flanking text at far left and far right viewport edges at vertical center in Pragmatica Cond 11px weight 400 uppercase.

5. *Create a subtle elevated panel*: Background #272a2a (Carbon), padding 20px, border-radius 10px, no shadow, no border. Content in Pragmatica 15px weight 400, Fog (#cecece).

## Gradient System

One detected gradient: linear-gradient(#ffffff, rgba(206, 206, 206, 0.5)) — used as a subtle separator or button-edge treatment. The system is fundamentally gradient-averse; do not introduce colorful gradients. If depth is needed, use a single white-to-transparent fade for hairline highlights or a black-to-transparent overlay for image vignetting.

## Similar Brands

- **SpaceX** — Same cinematic dark canvas with single warm accent and condensed all-caps type orbiting a central brand mark
- **Anduril** — Near-monochrome dark interface where typographic compression and geometric logos carry the brand; no shadows, no decorative color
- **Linear** — Dark-mode minimalism with condensed sans typography and fully rounded pill controls on a flat near-black canvas
- **Relume** — Dark agency-style site with generous vertical spacing between centered text sections and restrained use of color
- **Vercel** — Black-canvas precision aesthetic with tight letter-spacing and single-weight type creating hierarchy through scale alone

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #0b0b0b;
  --color-carbon: #272a2a;
  --color-ash: #858585;
  --color-fog: #cecece;
  --color-pure: #ffffff;
  --color-absinthe: #000000;
  --color-ember: #cc6437;

  /* Typography — Font Families */
  --font-pragmatica-cond: 'Pragmatica Cond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-pragmatica: 'Pragmatica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.2;
  --tracking-caption: -0.22px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.28px;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -0.64px;
  --text-display: 62px;
  --leading-display: 0.9;
  --tracking-display: -1.24px;

  /* Typography — Weights */
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-100: 100px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 20px;
  --element-gap: 7-10px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-full: 1440px;

  /* Named Radii */
  --radius-nav: 4px;
  --radius-cards: 10px;
  --radius-pills: 1440px;
  --radius-hairlines: 1px;

  /* Surfaces */
  --surface-void: #0b0b0b;
  --surface-carbon: #272a2a;
  --surface-ash: #858585;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #0b0b0b;
  --color-carbon: #272a2a;
  --color-ash: #858585;
  --color-fog: #cecece;
  --color-pure: #ffffff;
  --color-absinthe: #000000;
  --color-ember: #cc6437;

  /* Typography */
  --font-pragmatica-cond: 'Pragmatica Cond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-pragmatica: 'Pragmatica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.2;
  --tracking-caption: -0.22px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.28px;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -0.64px;
  --text-display: 62px;
  --leading-display: 0.9;
  --tracking-display: -1.24px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-100: 100px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-full: 1440px;
}
```