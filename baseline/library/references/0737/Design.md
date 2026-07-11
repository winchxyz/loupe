# Hyperstudio — Style Reference
> designer's midnight gallery — one warm lamp, lots of black walls, confident type floating on dark

**Theme:** dark

Hyperstudio operates in a near-monochrome dark mode: an almost black canvas with a single warm amber accent that feels like a desk lamp left on in a design studio. Typography carries the entire visual weight — Aeonik at light, tightly tracked headlines, paired with a monospace-feeling secondary face (Input) for meta labels and technical annotations. Components are flat, ghosted, and borderless on the canvas; surface differentiation comes from slightly lighter grays rather than shadows or fills. The layout is generous, centered, and gallery-like, letting the typographic hierarchy and small functional punctuation (a green status dot, a warm tan accent, a thin white border on a CTA) do all the work. Color is rationed aggressively — this is a system that trusts restraint.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian Canvas | `#101010` | `--color-obsidian-canvas` | Page background, primary canvas |
| Charcoal Surface | `#333333` | `--color-charcoal-surface` | Card surfaces, elevated panels, content blocks — the dominant mid-tone that creates depth without lightness |
| Onyx Edge | `#212121` | `--color-onyx-edge` | Hairline borders, dividers, subtle structural edges |
| Ash | `#5a5a5a` | `--color-ash` | Muted UI chrome, disabled states, tertiary borders |
| Frost Text | `#f3f3f3` | `--color-frost-text` | Primary text, headings, body copy — slightly off-white so it sits softer than pure #fff against the dark canvas |
| Silver | `#c1c1c1` | `--color-silver` | Secondary borders, button outlines, subtle highlights |
| Smoke | `#949494` | `--color-smoke` | Secondary text, descriptions, supporting copy |
| Graphite | `#888888` | `--color-graphite` | Tertiary text, captions, timestamp labels |
| Fog | `#9c9c9c` | `--color-fog` | Muted body text, helper annotations |
| Pure White | `#ffffff` | `--color-pure-white` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Amber Whisper | `#e7c59a` | `--color-amber-whisper` | Sole chromatic accent — availability badge highlight, subtle brand warmth, the single chromatic note in an otherwise achromatic system |

## Tokens — Typography

### Aeonik — Primary typeface for all interface text — body, headings, nav, buttons, CTAs. The 700 weight is used sparingly for uppercase section labels (SERVICES, PORTFOLIO, PROCESS, READ MANIFESTO) creating a stencil-like rhythm against the 400-weight body and light display headings. · `--font-aeonik`
- **Substitute:** Inter, Satoshi, General Sans
- **Weights:** 400, 700
- **Sizes:** 13, 14, 16, 17, 18, 21, 23, 34, 44, 63
- **Line height:** 0.95–1.43 (tight for display, ~1.35 for body)
- **Letter spacing:** −0.0110em across most sizes (e.g. −0.48px at 44px, −0.69px at 63px), tightening to −0.0070em for mid-range sizes
- **Role:** Primary typeface for all interface text — body, headings, nav, buttons, CTAs. The 700 weight is used sparingly for uppercase section labels (SERVICES, PORTFOLIO, PROCESS, READ MANIFESTO) creating a stencil-like rhythm against the 400-weight body and light display headings.

### Input — Mono-adjacent secondary face for micro-labels, metadata, technical annotations, and the smallest badge text. Its dramatically tighter tracking (−0.037em, −0.022em) makes it read as 'system text' — distinct from Aeonik's editorial warmth. Use for timestamps, version tags, and status indicators. · `--font-input`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Geist Mono
- **Weights:** 400
- **Sizes:** 8, 13, 14, 16, 17, 18
- **Line height:** 1.20–1.54
- **Letter spacing:** −0.0370em (tightest) to −0.0220em, roughly −0.29px at 13px — the tightest tracking in the system, giving labels a compressed, technical feel
- **Role:** Mono-adjacent secondary face for micro-labels, metadata, technical annotations, and the smallest badge text. Its dramatically tighter tracking (−0.037em, −0.022em) makes it read as 'system text' — distinct from Aeonik's editorial warmth. Use for timestamps, version tags, and status indicators.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.5 | -0.037px | `--text-caption` |
| body | 16px | 1.35 | -0.011px | `--text-body` |
| subheading | 18px | 1.34 | -0.011px | `--text-subheading` |
| heading-sm | 23px | 1.22 | -0.011px | `--text-heading-sm` |
| heading | 34px | 1.11 | -0.011px | `--text-heading` |
| heading-lg | 44px | 1.05 | -0.48px | `--text-heading-lg` |
| display | 63px | 0.95 | -0.69px | `--text-display` |

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
| 40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 20px |
| pills | 99px |
| badges | 8px |
| inputs | 8px |
| buttons | 8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 40px
- **Element gap:** 20px

## Components

### Primary White Button
**Role:** Filled CTA — the highest-emphasis action (e.g. 'START NOW')

White #ffffff background, #101010 text, Aeonik 700 at 13–14px, 8px radius, 10px vertical × 20px horizontal padding. Centered uppercase text. No shadow. This is the only filled button in the system — it inverts the dark canvas for maximum contrast.

### Outlined Button
**Role:** Secondary CTA (e.g. 'VIEW WORK', 'READ MANIFESTO')

Transparent background, 1px border in #c1c1c1, #f3f3f3 text, Aeonik 700 at 13–14px uppercase, 8px radius, 10px × 20px padding. Optional trailing arrow icon. Sits visually lighter than the primary white button but still demands attention.

### Chat Pill Button
**Role:** Persistent header CTA ('LET'S CHAT')

White #ffffff fill, #101010 text, 99px full-pill radius, Aeonik 700 uppercase at 13px, with a small person silhouette icon to the left. Higher corner radius than standard buttons — signals a conversational, friendly entry point distinct from conversion actions.

### Availability Badge
**Role:** Status indicator above hero headline

Subtle pill or text block on the dark canvas, Aeonik 400 at 13px in #f3f3f3, with a small green status dot (8px circle) to the left. Text reads like '2/5 SPOTS LEFT FOR APRIL' in sentence case. Optional Amber Whisper #e7c59a text variant for warmth.

### Feature Grid Card
**Role:** 2×2 service offering block

Transparent or #212121 background, no visible border, 40px padding. Small line icon in #f3f3f3 at ~18px top-left. Aeonik 700 uppercase title at ~14px, followed by Aeonik 400 description at 14px in #949494. Cards are separated by a single hairline #212121 border — no shadows, no fills.

### Header Navigation
**Role:** Top sticky bar

Horizontal flex row, transparent background, #101010 canvas. Left: 'Hyperstudio' wordmark in Aeonik 400 at ~21px in #f3f3f3, followed by 1px #c1c1c1 vertical divider, then uppercase nav links (SERVICES, PORTFOLIO, PROCESS) in Aeonik 700 at 13px in #f3f3f3. Right: Chat Pill Button. Nav items use 20px gap.

### Display Headline
**Role:** Hero section title

Aeonik 400 at 63px, #f3f3f3, line-height 0.95, letter-spacing −0.69px. Centered on the canvas, max-width ~900px. Weight 400 (not 700) is the signature — headlines whisper at full volume rather than shout. Two-line wrapping, no max-line clamp.

### Dot Matrix World Map
**Role:** Decorative hero visual

Full-width illustration below the hero CTAs. Continents rendered as a grid of small white circles (~2px diameter) on the #101010 canvas, variable opacity for density. Approximately 400px tall. This is the only major illustrative element — it serves as the page's singular visual statement.

### Client Attribution Block
**Role:** Small centered client/credit line (e.g. 'Vortex | QUANTUM COMPUTING')

Centered horizontal block, small line icon (gear/settings) at top, Aeonik 400 at 18px for client name, vertical pipe divider, then Aeonik 700 at 13px uppercase for category. Minimal, credit-like, signals portfolio provenance.

### Manifesto Section
**Role:** Centered 'Why us' content block

Vertically centered, max-width ~680px, #101010 canvas. Section title 'Why Hyperstudio?' in Aeonik 400 at ~34px centered. Body paragraphs in Aeonik 400 at 16px in #f3f3f3, generous line-height ~1.5. Outlined Button ('READ MANIFESTO') centered below. 120px section padding top and bottom.

### Icon
**Role:** UI micro-iconography

Line/outlined style, 1.5px stroke, #f3f3f3 stroke color, 18–24px viewport. Monochrome — no fill. Sits inline with text or as a standalone accent above feature titles. 8px corner radius on any containing frame.

### Divider Hairline
**Role:** Structural separator

1px solid #212121 horizontal or vertical line. Used to separate nav items, define feature grid cells, and close section boundaries. No gradients, no shadows — the line is purely structural.

## Do's and Don'ts

### Do
- Use #101010 as the canvas for every page; do not introduce light backgrounds
- Set headline type at Aeonik 400 (not 700) — the whisper-weight is the brand's voice
- Apply letter-spacing −0.011em to Aeonik and −0.037em to Input across all sizes
- Use 8px radius for buttons and badges, 20px for cards, 99px only for conversational pill CTAs
- Differentiate surfaces with #212121 borders and #333333 fills, never with drop shadows
- Ration the Amber Whisper #e7c59a to a single functional moment per view (badge, highlight, or single icon) — chromatic color is a scarce resource
- Use Input font exclusively for micro-labels, timestamps, and technical metadata — never for body paragraphs or headings

### Don't
- Do not use drop shadows for elevation — the system separates surfaces with grays and hairlines, not blur
- Do not introduce blue, green, red, or any other chromatic color outside the Amber Whisper accent
- Do not set headlines at 700 weight — the system uses 700 only for uppercase stencil labels
- Do not use letter-spacing 0 or positive values; all tracking is negative in this system
- Do not use the white filled button more than once per view — it is the single highest-emphasis action and loses meaning if repeated
- Do not use pure #000000 for canvas — use #101010 (or deeper #080808 for overlays) to keep the black feeling warm, not digital
- Do not use radius values outside 8px / 20px / 99px — the system has exactly three corner treatments and uses them semantically

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#080808` | Deepest canvas, overlays, modal backdrops |
| 1 | Canvas | `#101010` | Primary page background |
| 2 | Surface | `#212121` | Card backgrounds, contained content blocks |
| 3 | Elevated | `#333333` | Highest surface tier, featured cards, interactive panels |

## Elevation

The system has no drop shadows. Depth is communicated exclusively through a four-step gray surface stack (#080808 → #101010 → #212121 → #333333) and 1px hairline borders in #212121. This keeps the interface feeling flat, architectural, and gallery-like — like signage on a dark wall rather than cards floating in space.

## Imagery

Imagery is rationed. The hero features a single decorative element: a dot-matrix world map rendered as a grid of small white circles on the dark canvas, giving the impression of data visualization or starfield geography. Feature blocks use small line icons (16–20px, 1.5px stroke) in #f3f3f3. There is no photography, no 3D rendering, no illustration beyond the dot map. The visual language is closer to a typography specimen or an engineering schematic than a traditional agency portfolio — the restraint itself is the identity.

## Layout

The page model is max-width 1200px centered on a full-bleed #101010 canvas, with generous 120px section gaps. The hero is a vertically stacked centered composition: availability badge → display headline (63px) → two-button CTA row → dot-matrix map. The feature section is a 2×2 grid with hairline dividers, not a card grid — cells share borders rather than sitting as independent cards. The 'Why Hyperstudio?' section is a single centered column ~680px wide. Navigation is a minimal top bar (no sticky behavior, no hamburger), with the wordmark left, uppercase links center-left, and the chat pill right. The overall rhythm is centered, symmetrical, and vertical — reading top-to-bottom like a printed manifest rather than a scrolling landing page.

## Agent Prompt Guide

## Quick Color Reference
- text: #f3f3f3
- background: #101010
- card surface: #333333
- border: #212121
- accent: #e7c59a
- primary action: no distinct CTA color

## Example Component Prompts

1. **Hero section**: Canvas #101010. Headline at 63px Aeonik 400, color #f3f3f3, line-height 0.95, letter-spacing −0.69px, centered max-width 900px. Above the headline, a badge: Aeonik 400 at 13px, #f3f3f3, with an 8px green dot to the left. Below: two buttons in a row with 12px gap — a white filled button (#ffffff bg, #101010 text, Aeonik 700 uppercase 14px, 8px radius, 10px×20px padding) and an outlined button (transparent bg, 1px #c1c1c1 border, #f3f3f3 text, same type spec).

2. **Feature grid (2×2)**: Transparent cells separated by 1px #212121 hairlines, 40px padding per cell. Top-left of each cell: a line icon at 20px, stroke #f3f3f3, 1.5px. Title in Aeonik 700 uppercase at 14px, #f3f3f3. Description in Aeonik 400 at 14px, color #949494, line-height 1.43.

3. **Outlined button**: Transparent background, 1px solid #c1c1c1 border, #f3f3f3 text, Aeonik 700 uppercase at 13–14px, letter-spacing −0.011em, 8px corner radius, 10px vertical padding, 20px horizontal padding, with optional trailing arrow icon.

4. **Top navigation**: Flex row on #101010. Left: 'Hyperstudio' wordmark in Aeonik 400 at 21px, #f3f3f3. 1px #c1c1c1 vertical divider. Nav links in Aeonik 700 uppercase at 13px, #f3f3f3, 20px gap. Right: chat pill button — #ffffff background, #101010 text, Aeonik 700 uppercase 13px, 99px radius, with a person silhouette icon left-aligned.

5. **Centered manifesto block**: Max-width 680px centered on #101010. Title 'Why [Brand]?' in Aeonik 400 at 34px, #f3f3f3, centered. Two body paragraphs in Aeonik 400 at 16px, #f3f3f3, line-height ~1.5, left-aligned within the centered container. An outlined button centered below at 24px gap.

## Accent Economy

Chromatic color appears at most once per viewport, and never as decoration. The Amber Whisper #e7c59a (or the green status dot in the availability badge) is the system's only color punctuation — it earns attention precisely because everything else is grayscale. When adding a new screen, identify the single most important status or highlight and use Amber Whisper for that one moment only. If you find yourself wanting to color two elements, you have broken the system.

## Similar Brands

- **Pentagram** — Same gallery-like dark-canvas restraint with confident display type and minimal UI chrome
- **Resn** — Same uppercase stencil labels paired with light-weight display headlines and dot-matrix decorative motifs
- **Active Theory** — Dark mode agency site with near-monochrome palette and a single warm accent, typographic confidence over visual ornamentation
- **Locomotive (locomotive.ca)** — Same architectural dark layout, generous vertical spacing, and reliance on gray surface stacking rather than shadows
- **Manual (manual.tv)** — Same minimal dark-mode portfolio aesthetic with flat surfaces, hairline dividers, and whisper-weight headlines

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian-canvas: #101010;
  --color-charcoal-surface: #333333;
  --color-onyx-edge: #212121;
  --color-ash: #5a5a5a;
  --color-frost-text: #f3f3f3;
  --color-silver: #c1c1c1;
  --color-smoke: #949494;
  --color-graphite: #888888;
  --color-fog: #9c9c9c;
  --color-pure-white: #ffffff;
  --color-amber-whisper: #e7c59a;

  /* Typography — Font Families */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-input: 'Input', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.037px;
  --text-body: 16px;
  --leading-body: 1.35;
  --tracking-body: -0.011px;
  --text-subheading: 18px;
  --leading-subheading: 1.34;
  --tracking-subheading: -0.011px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.22;
  --tracking-heading-sm: -0.011px;
  --text-heading: 34px;
  --leading-heading: 1.11;
  --tracking-heading: -0.011px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 63px;
  --leading-display: 0.95;
  --tracking-display: -0.69px;

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
  --spacing-40: 40px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 120px;
  --card-padding: 40px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-md: 4.5px;
  --radius-lg: 8px;
  --radius-2xl: 20px;
  --radius-full: 99px;

  /* Named Radii */
  --radius-cards: 20px;
  --radius-pills: 99px;
  --radius-badges: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;

  /* Surfaces */
  --surface-void: #080808;
  --surface-canvas: #101010;
  --surface-surface: #212121;
  --surface-elevated: #333333;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian-canvas: #101010;
  --color-charcoal-surface: #333333;
  --color-onyx-edge: #212121;
  --color-ash: #5a5a5a;
  --color-frost-text: #f3f3f3;
  --color-silver: #c1c1c1;
  --color-smoke: #949494;
  --color-graphite: #888888;
  --color-fog: #9c9c9c;
  --color-pure-white: #ffffff;
  --color-amber-whisper: #e7c59a;

  /* Typography */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-input: 'Input', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.037px;
  --text-body: 16px;
  --leading-body: 1.35;
  --tracking-body: -0.011px;
  --text-subheading: 18px;
  --leading-subheading: 1.34;
  --tracking-subheading: -0.011px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.22;
  --tracking-heading-sm: -0.011px;
  --text-heading: 34px;
  --leading-heading: 1.11;
  --tracking-heading: -0.011px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 63px;
  --leading-display: 0.95;
  --tracking-display: -0.69px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;

  /* Border Radius */
  --radius-md: 4.5px;
  --radius-lg: 8px;
  --radius-2xl: 20px;
  --radius-full: 99px;
}
```