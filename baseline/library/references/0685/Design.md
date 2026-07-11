# ThoughtLab — Style Reference
> crimson flare in obsidian dark

**Theme:** dark

ThoughtLab operates in cinematic darkness where a single vivid red mark cuts through near-black silence. Typography is architectural and oversized — 198px display headlines with extreme negative tracking create editorial drama, while body copy stays compact at 15-17px with generous leading. The interface strips away everything nonessential: pill-shaped CTAs, hairline borders, and vast negative space let the messaging and the one red accent command full attention. The iridescent 3D orb hero is the only ornament in an otherwise weightless void where every other element recedes into shadow.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Signal Red | `#fc1c46` | `--color-signal-red` | Primary action buttons, active states, brand mark accent — the sole chromatic note in a monochrome void, making every tap feel deliberate |
| Pure White | `#ffffff` | `--color-pure-white` | Display headlines, button text, high-contrast labels — the brightest text tier, reserved for the loudest statements |
| Ash | `#cccccc` | `--color-ash` | Body text, secondary headlines, subtle hairline borders — the workhorse gray that carries most readable content across the dark canvas |
| Graphite | `#4c4c4c` | `--color-graphite` | Muted metadata, inactive controls, tertiary borders — recedes into the background when focus should be elsewhere |
| Void | `#000000` | `--color-void` | Deepest background areas, icon fills, stark dividers — the absolute dark that anchors the layout |

## Tokens — Typography

### sui — Sole typeface for the entire system. Weight 300 used at massive scale (198px) for hero display creates editorial drama without weight — the whisper-quiet large headline is a signature anti-convention choice. Weight 400 handles body at a compact 15-17px. Weight 500-700 reserved for navigation and button text. Extreme negative tracking (-0.067em at display) tightens oversized letterforms so headlines read as sculptural shapes rather than loose word clouds. · `--font-sui`
- **Substitute:** Söhne / Suisse Int'l / Inter
- **Weights:** 300, 400, 500, 700
- **Sizes:** 10, 14, 15, 17, 18, 27, 72, 91, 198
- **Line height:** 0.92, 0.96, 1.00, 1.10, 1.15, 1.20, 1.25, 1.50, 2.14
- **Letter spacing:** -0.067em at 198px (-13.27px), -0.020em at 72px (-1.44px), -0.009em at 27px (-0.24px), normal at body sizes
- **Role:** Sole typeface for the entire system. Weight 300 used at massive scale (198px) for hero display creates editorial drama without weight — the whisper-quiet large headline is a signature anti-convention choice. Weight 400 handles body at a compact 15-17px. Weight 500-700 reserved for navigation and button text. Extreme negative tracking (-0.067em at display) tightens oversized letterforms so headlines read as sculptural shapes rather than loose word clouds.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| micro | 10px | 2.14 | — | `--text-micro` |
| caption | 14px | 1.2 | — | `--text-caption` |
| subheading | 18px | 1.2 | — | `--text-subheading` |
| heading-sm | 27px | 1.15 | -0.24px | `--text-heading-sm` |
| heading | 72px | 1 | -1.44px | `--text-heading` |
| heading-lg | 91px | 0.96 | — | `--text-heading-lg` |
| display | 198px | 0.92 | -13.27px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 7 | 7px | `--spacing-7` |
| 9 | 9px | `--spacing-9` |
| 22 | 22px | `--spacing-22` |
| 29 | 29px | `--spacing-29` |
| 30 | 30px | `--spacing-30` |
| 36 | 36px | `--spacing-36` |
| 43 | 43px | `--spacing-43` |
| 65 | 65px | `--spacing-65` |
| 72 | 72px | `--spacing-72` |
| 86 | 86px | `--spacing-86` |
| 108 | 108px | `--spacing-108` |
| 126 | 126px | `--spacing-126` |
| 180 | 180px | `--spacing-180` |
| 198 | 198px | `--spacing-198` |
| 216 | 216px | `--spacing-216` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0px |
| inputs | 0px |
| buttons | 9999px |

### Layout

- **Section gap:** 86-108px
- **Card padding:** 22px
- **Element gap:** 9px

## Components

### Signal CTA Button
**Role:** Primary action trigger

Pill-shaped filled button, 9999px border-radius, #fc1c46 background, #ffffff text at 14-15px weight 500, 9px 22px padding. The only chromatic UI element — its red isolation against pure black makes it impossible to miss. Vertically centered text, no border, no shadow.

### Ghost Menu Trigger
**Role:** Navigation expansion

Minimal icon-only button with 2px stroke hamburger icon in #ffffff, no background, no border. Positioned at far right of the header bar. 9px padding, square hit area.

### Wordmark Lockup
**Role:** Brand identity in header

Small red geometric mark (3-4px accent) adjacent to 'THOUGHTLAB®' wordmark in #ffffff, weight 500, 15px. The red mark echoes the CTA color, creating a visual thread from brand to action.

### Centered Tagline Bar
**Role:** Header sub-label

Single-line descriptor in #cccccc weight 400, 14px, centered horizontally. Sets studio context without competing with the brand mark or CTA. 1.20 line-height.

### Display Headline
**Role:** Hero and section titles

Sui weight 300 at 91-198px, #ffffff, letter-spacing -0.067em to -0.02em, line-height 0.92-1.00. All-caps treatment for maximum editorial impact. Left-aligned, allowed to break across 3-4 lines. This is the system's signature element — oversized, weightless, architectural.

### Hero Subtext
**Role:** Supporting description

Body copy in #cccccc, 17px, weight 400, line-height 1.50. Max-width constrained to ~520px for readability. Sits directly below the display headline with 29px margin-top.

### Scroll Indicator
**Role:** Scroll affordance

(SCROLL) micro-label in #cccccc, 10px, weight 400, line-height 2.14, centered at page bottom. Bracketed uppercase styling is signature — no arrow or icon, just typographic instruction.

### Iridescent Orb Visual
**Role:** Hero centerpiece

Abstract 3D-rendered dark glass sphere with iridescent chromatic edge (blue/violet/red refraction). Centered-right in the hero, overlapping behind text. Full-bleed scale, no border or frame. The only imagery in the system.

### Hairline Divider
**Role:** Section separation

1px solid #cccccc or #4c4c4c horizontal rule, full-width or 126px horizontal margins. No padding, no decoration — just a line cutting through darkness.

## Do's and Don'ts

### Do
- Use 9999px border-radius exclusively for interactive elements (buttons, tags, pills) — the pill shape is the only curvature in the system
- Set hero display headlines at 91-198px in weight 300 with letter-spacing -0.067em — whisper-weight at massive scale is the signature
- Reserve #fc1c46 for exactly one element per viewport — the CTA, active state, or brand mark accent. Never use red for body content or secondary actions
- Maintain body text at 15-17px with line-height 1.50 in #cccccc — compact but breathable, never smaller than 14px for content
- Use 86-108px vertical gaps between major sections — the spaciousness is load-bearing for the cinematic dark feel
- Let headlines left-align and break naturally across multiple lines — never force a single-line headline or use text-align: center for body content
- Keep all surfaces flat — no shadows, no gradients, no glass effects on UI chrome. The 3D orb is the only dimensional element

### Don't
- Never use a border-radius between 0 and 9999px on buttons or interactive elements — the system is binary: pill or sharp
- Never apply color to body copy other than #cccccc or #ffffff — all chromatic information should be functional (CTA, status, brand mark)
- Never set display headlines below 72px or use weight 500-700 for hero text — the whisper-weight-at-scale is non-negotiable
- Never add card shadows or elevation effects — depth comes from the 3D orb visual and tonal surface shifts, not box-shadow
- Never use more than one red element per screen — diluting the signal red destroys the accent strategy
- Never justify body text or use tight line-heights below 1.20 for copy under 18px — the spacious leading is what makes dark mode readable
- Never add decorative icons, illustrations, or background patterns — the void is the design; if the layout feels empty, add more whitespace, not ornament

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Obsidian Canvas | `#0a0a0a` | Primary page background — near-black surface that swallows everything except lit content |
| 2 | Carbon Panel | `#1a1a1a` | Elevated card and section surfaces — barely lighter than the canvas, separation through whisper-quiet tonal shift |
| 3 | Smoke Overlay | `#2a2a2a` | Modal and overlay surfaces — the lightest dark tier for elements that must float above the page |

## Elevation

The system intentionally uses zero shadows. Depth is communicated through three mechanisms: (1) the 3D orb hero visual is the only dimensional element, (2) surface tonal shifts (3 dark tiers from #0a0a0a to #2a2a2a) separate content layers, and (3) overlap between text and the orb creates spatial tension. This shadowless approach keeps the dark mode feeling weightless and editorial rather than skeuomorphic.

## Imagery

The system is 99% typographic with a single 3D-rendered abstract orb as the hero visual. The orb is a dark glass sphere with iridescent chromatic edge refraction (blue/violet/red light leaks on the rim), rendered against pure black. No photography, no flat illustrations, no icons beyond minimal navigation glyphs. The 3D object occupies full-bleed scale and overlaps behind headline text, creating depth without requiring elevation on UI surfaces. The treatment is product-showcase quality — the object IS the hero, presented like a luxury product render on a black velvet stage.

## Layout

Full-bleed dark canvas with no max-width constraint — content breathes to the viewport edges. The header is a single horizontal row: wordmark left, centered tagline, CTA right, menu trigger far-right, with generous 126px horizontal padding. Hero composition is left-aligned display headline with a centered 3D orb overlapping behind/right of the text — a split-composition that uses overlap rather than rigid columns. Sections are separated by 86-108px vertical gaps with optional hairline dividers. No card grids, no multi-column layouts visible in the hero — the system is single-column editorial, letting typography own the page. Navigation is minimal: no mega-menu, no sidebar, no sticky header visible.

## Agent Prompt Guide

**Quick Color Reference**
- Text (primary): #ffffff
- Text (secondary): #cccccc
- Background (canvas): #0a0a0a
- Border (hairline): #4c4c4c
- Accent (brand mark): #fc1c46
- primary action: #fc1c46 (filled action)

**3-5 Example Component Prompts**

1. Create a hero section: #0a0a0a full-bleed background. Display headline 'BECOME A CATEGORY OF ONE' in sui weight 300 at 198px, #ffffff, letter-spacing -13.27px, line-height 0.92, left-aligned, all-caps, 126px left padding. Subtext at 17px weight 400, #cccccc, line-height 1.50, 29px margin-top, max-width 520px.

2. Create a primary action button: #fc1c46 background, #ffffff text, 14px sui weight 500, 9999px border-radius, 9px 22px padding, no border, no shadow. Text uppercase, letter-spacing normal. Padding 7px top/bottom inside.

3. Create a Primary Action Button: #fc1c46 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

4. Create a scroll indicator: '(SCROLL)' text in #cccccc, 10px, weight 400, line-height 2.14, centered horizontally, 86px from bottom. Bracketed uppercase, no icon or arrow.

5. Create a hairline divider: 1px solid #4c4c4c, full-width or 126px horizontal margins, no vertical padding, no decoration.

## Similar Brands

- **Active Theory** — Same cinematic dark-canvas approach with a single chromatic accent and oversized editorial typography dominating the hero
- **Ueno** — Agency portfolio with whisper-weight display headlines at extreme scale, dark mode, minimal UI chrome, and generous negative space
- **Resn** — Experimental creative studio using 3D abstract visuals as hero centerpieces against near-black backgrounds with single-color accents
- **Locomotive** — Dark-mode agency site with left-aligned architectural headlines, pill-shaped CTAs, and hairline borders
- **Ramotion** — Minimal dark portfolio aesthetic with flat surfaces, no shadows, and typographic hierarchy carrying the visual weight

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-signal-red: #fc1c46;
  --color-pure-white: #ffffff;
  --color-ash: #cccccc;
  --color-graphite: #4c4c4c;
  --color-void: #000000;

  /* Typography — Font Families */
  --font-sui: 'sui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 10px;
  --leading-micro: 2.14;
  --text-caption: 14px;
  --leading-caption: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading-sm: 27px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.24px;
  --text-heading: 72px;
  --leading-heading: 1;
  --tracking-heading: -1.44px;
  --text-heading-lg: 91px;
  --leading-heading-lg: 0.96;
  --text-display: 198px;
  --leading-display: 0.92;
  --tracking-display: -13.27px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-86: 86px;
  --spacing-108: 108px;
  --spacing-126: 126px;
  --spacing-180: 180px;
  --spacing-198: 198px;
  --spacing-216: 216px;

  /* Layout */
  --section-gap: 86-108px;
  --card-padding: 22px;
  --element-gap: 9px;

  /* Border Radius */
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 9999px;

  /* Surfaces */
  --surface-obsidian-canvas: #0a0a0a;
  --surface-carbon-panel: #1a1a1a;
  --surface-smoke-overlay: #2a2a2a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-signal-red: #fc1c46;
  --color-pure-white: #ffffff;
  --color-ash: #cccccc;
  --color-graphite: #4c4c4c;
  --color-void: #000000;

  /* Typography */
  --font-sui: 'sui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 10px;
  --leading-micro: 2.14;
  --text-caption: 14px;
  --leading-caption: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading-sm: 27px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.24px;
  --text-heading: 72px;
  --leading-heading: 1;
  --tracking-heading: -1.44px;
  --text-heading-lg: 91px;
  --leading-heading-lg: 0.96;
  --text-display: 198px;
  --leading-display: 0.92;
  --tracking-display: -13.27px;

  /* Spacing */
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-86: 86px;
  --spacing-108: 108px;
  --spacing-126: 126px;
  --spacing-180: 180px;
  --spacing-198: 198px;
  --spacing-216: 216px;

  /* Border Radius */
  --radius-full: 9999px;
}
```