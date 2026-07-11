# Your workplace has the answer. Just ask Dala for it. — Style Reference
> Particle cosmos on a void — violet pulse against infinite black

**Theme:** dark

Dala is a knowledge-management product rendered as a dark cosmic field: a pure black canvas, a single saturated violet as the only authority color, and white type that glows against the void. The interface recedes — sparse text blocks, hairline borders, pill controls — while a massive particle constellation dominates the visual real estate, its thousands of tiny geometric shapes (triangles, circles, diamonds) clustering into organic forms. Typography is stretched and ultra-tight at display sizes (negative tracking pushes letters almost together) but opens up at body sizes (slight positive tracking aids legibility on black). Components feel lightweight and fast: no shadows, no gradients, no card elevation — depth comes purely from color contrast and the negative space of the void.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page background, primary canvas — the dark field where the constellation lives |
| Bone | `#ffffff` | `--color-bone` | Primary text, icon strokes, hairlines, card borders, nav text — the only light that reads on the void |
| Ash | `#bdbdbd` | `--color-ash` | Secondary muted text, subtle border accents — quieter than bone, still legible on black |
| Smoke | `#9a9a9a` | `--color-smoke` | Tertiary text, nav link resting state, low-emphasis dividers — fades into the background |
| Plum Voltage | `#8052ff` | `--color-plum-voltage` | Primary action background, nav accents, icon highlights, decorative borders — the brand pulse, the only filled chromatic surface in the UI |
| Amber Spark | `#ffb829` | `--color-amber-spark` | Yellow accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Lichen | `#15846e` | `--color-lichen` | Decorative icon accent, constellation node color — appears in illustration marks, not core interface chrome |

## Tokens — Typography

### Acronym — Sole typeface. Weight 200 carries display headlines — its extreme thinness against 113px creates a 'etched in light' feel. Weight 600–700 for nav and buttons. Weight 400 for body. Negative tracking at large sizes (-0.04em) pulls glyphs tight; positive tracking (0.021–0.05em) opens body and nav for readability on black. The single-family approach keeps the system spare — no serifs, no display variants, only weight and tracking do the work. · `--font-acronym`
- **Substitute:** Inter, Söhne, or Space Grotesk
- **Weights:** 200, 400, 600, 700
- **Sizes:** 12, 14, 15, 18, 24, 27, 36, 42, 48, 78, 113
- **Line height:** 0.81–1.50
- **Letter spacing:** -0.04em at 78–113px (display); +0.021em at 12–15px (nav/caption); +0.025em at 15–18px (body); +0.05em at 12–14px (eyebrow/uppercase kicker)
- **Role:** Sole typeface. Weight 200 carries display headlines — its extreme thinness against 113px creates a 'etched in light' feel. Weight 600–700 for nav and buttons. Weight 400 for body. Negative tracking at large sizes (-0.04em) pulls glyphs tight; positive tracking (0.021–0.05em) opens body and nav for readability on black. The single-family approach keeps the system spare — no serifs, no display variants, only weight and tracking do the work.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.05px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.05px | `--text-body-sm` |
| subheading | 18px | 1.5 | 0.025px | `--text-subheading` |
| heading-sm | 24px | 1.3 | 0.021px | `--text-heading-sm` |
| heading | 36px | 1.2 | 0.021px | `--text-heading` |
| heading-lg | 48px | 1.1 | -0.04px | `--text-heading-lg` |
| display | 78px | 0.9 | -0.04px | `--text-display` |
| hero | 113px | 0.81 | -0.04px | `--text-hero` |

## Tokens — Spacing & Shapes

**Base unit:** 6px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 6 | 6px | `--spacing-6` |
| 12 | 12px | `--spacing-12` |
| 18 | 18px | `--spacing-18` |
| 24 | 24px | `--spacing-24` |
| 30 | 30px | `--spacing-30` |
| 36 | 36px | `--spacing-36` |
| 60 | 60px | `--spacing-60` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 24px |
| cards | 24px |
| buttons | 24px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 60px
- **Card padding:** 24px
- **Element gap:** 15px

## Components

### Logo Mark
**Role:** Brand identity in header

Wordmark 'Dala' in Bone (#ffffff) at 18px, Acronym weight 600, accompanied by a geometric envelope/crystal icon. The icon is line-drawn, stroke ~1.5px, in Plum Voltage (#8052ff) or Bone depending on context.

### Nav Text Link
**Role:** Header navigation items (MANIFESTO, TEAM, BLOG)

Acronym weight 400, 14px, tracking 0.021em, color Smoke (#9a9a9a) at rest → Bone (#ffffff) on hover. No underline, no background — just a color shift on the void.

### Primary Action Button
**Role:** Filled CTA — REQUEST ACCESS

Pill shape, 24px border-radius. Background Plum Voltage (#8052ff), text Bone (#ffffff), Acronym weight 600, 12px, tracking 0.05em, uppercase. Padding 14px 16px. No border, no shadow. The button glows optically because violet on black is the only saturated fill in the system.

### Ghost Nav Button
**Role:** Header REQUEST ACCESS pill

Same dimensions and type as Primary Action Button, positioned right-aligned in the nav bar. Acts as the nav's terminal action — the only colored element in the header.

### Display Headline
**Role:** Hero and section headlines

Acronym weight 200, 78–113px, line-height 0.81–0.90, letter-spacing -0.04em, color Bone (#ffffff). The thin weight at extreme size is the signature: type that looks etched, not stamped. Lines break aggressively — each line is a short statement.

### Eyebrow Kicker
**Role:** Pre-headline label

Acronym weight 600, 12–14px, uppercase, tracking 0.05em, color Bone (#ffffff) or Plum Voltage (#8052ff). Sits above the headline as a tonal flag (e.g., 'STOP MANAGING KNOWLEDGE. START USING IT.').

### Body Paragraph
**Role:** Descriptive body copy

Acronym weight 400, 15–18px, line-height 1.5, tracking 0.025em, color Bone (#ffffff) or Ash (#bdbdbd) for secondary paragraphs. Maximum measure ~60ch.

### Hairline Border
**Role:** Section dividers, card outlines, decorative rules

1px solid #ffffff at low alpha or Ash (#bdbdbd) for visible structure. No fill, no radius on dividers. On cards: 24px radius with 1px #ffffff border at ~10% alpha.

### Particle Constellation Visual
**Role:** Hero and section atmospheric illustration

Thousands of micro-shapes (triangles, circles, diamonds, squares, 2–6px) scattered across the black canvas, clustering into organic forms (brain, flower, sphere). Colors drawn from the palette: Plum Voltage, Amber Spark, Lichen, Bone. Density varies — thick clusters in the visual center, sparse drift at the edges. Functions as the brand's visual identity, not decoration.

### Outlined Icon Mark
**Role:** Decorative iconography in sections

Line-art geometric icons (envelope/crystal shape visible), stroke ~1.5px, color Lichen (#15846e) or Plum Voltage (#8052ff). Centered, large (~80–120px), surrounded by sparse particle drift.

## Do's and Don'ts

### Do
- Use Plum Voltage (#8052ff) as the only filled button background in the system — it is the single source of color authority
- Set display headlines at weight 200, 78–113px, with -0.04em tracking — the thinness is the signature, not a style choice to override
- Apply 24px border-radius to every interactive surface (buttons, nav, cards) — full pills for small elements, rounded squares for larger cards
- Use #ffffff with 0.05em tracking and uppercase for eyebrow/kicker text — it reads as a system flag above the headline
- Let the particle constellation own at least 50% of hero real estate — the text is a guest in the visual, not the other way around
- Keep section gaps at 60px and let the void breathe — never fill space with decorative elements just to avoid emptiness
- Use negative tracking (-0.04em) only at 48px and above; use positive tracking (+0.021–0.05em) at body and below

### Don't
- Never use shadows, glows, or elevation effects — depth on this system comes from the void, not from stacked surfaces
- Never add a second filled chromatic button — the system has exactly one action color (Plum Voltage) and that's by design
- Never use a font weight above 700 or below 200 — the Acronym scale is the system, not a starting point
- Never set body type below 15px or with negative tracking — the dark canvas needs openness to stay legible
- Never use a border-radius smaller than 24px on any interactive element — pill-shaped is the system's geometry
- Never place bright text on a colored background — Plum Voltage on Bone is forbidden; invert only
- Never add gradients, textures, or noise to surfaces — the black canvas is pure; particles provide all visual interest

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Base canvas — every section and component sits directly on black, no nested surface layers |

## Elevation

No shadows, no elevation effects, no glow. Depth is implied by type weight, color contrast, and the particle field itself. A 'card' is just a hairline border on the void. This keeps the cosmos feeling flat and infinite rather than paneled and productized.

## Imagery

The visual language is entirely particle-based: thousands of tiny geometric primitives (triangles, circles, diamonds, squares) at 2–6px, scattered across the black void and clustering into organic macro-forms (a brain in the hero, a spore/dandelion in section two). Color is drawn from the full brand palette (Plum Voltage, Amber Spark, Lichen, Bone) but the particles never form a literal logo or icon — they suggest emergence, intelligence, collective assembly. No photography, no illustrations in the traditional sense, no 3D renders. The constellation is the brand mark. A single outlined geometric icon (envelope/crystal, ~100px) appears in section two as a focal anchor, rendered in Lichen teal with a thin stroke. Imagery density is high but never solid — always permeable, always letting the void show through.

## Layout

Full-bleed dark canvas with no nested containers or card panels. Hero is a 50/50 split: left half holds a tight text block (display headline + eyebrow + body + CTA, max-width ~480px), right half is the particle constellation extending edge-to-edge. Navigation is a fixed top bar with logo left, text links right-of-center, and a pill CTA at the far right. Vertical section rhythm is 60px gaps with no dividers — each section is a new constellation cluster with a new focal point. Body text columns are narrow (~60ch). The second section shifts to centered composition: large outlined icon mid-canvas, constellation field as background, a single paragraph anchored at the bottom. No grid system is visually expressed — content floats in the void.

## Agent Prompt Guide

Quick Color Reference:
- background: #000000
- text (primary): #ffffff
- text (muted): #9a9a9a / #bdbdbd
- border (hairline): #ffffff or #bdbdbd
- accent: #8052ff (Plum Voltage)
- primary action: #8052ff (filled action)

Example Component Prompts:

1. Hero headline block: Black background (#000000). Display text 'Unlock collective wisdom.' in Acronym weight 200, 113px, line-height 0.81, letter-spacing -0.04em, color #ffffff. Above it, an eyebrow 'STOP MANAGING KNOWLEDGE. START USING IT.' in Acronym weight 600, 12px, uppercase, tracking 0.05em, color #ffffff. Body paragraph below at 15px weight 400, line-height 1.5, tracking 0.025em, color #ffffff. Primary CTA button: background #8052ff, text #ffffff, Acronym weight 600, 12px uppercase, tracking 0.05em, border-radius 24px, padding 14px 16px.

2. Ghost nav link: Acronym weight 400, 14px, tracking 0.021em, color #9a9a9a resting → #ffffff hover. No background, no border, no underline. Right-aligned group of 3 links.

3. Outlined icon mark: A line-art geometric shape (envelope or crystal), stroke 1.5px, color #15846e, centered on the black canvas, ~100px size. Surrounded by sparse particle drift in the brand palette colors.

4. Eyebrow kicker: Acronym weight 600, 12px, uppercase, letter-spacing 0.05em, color #8052ff. 12px margin-bottom from the headline it precedes.

## Similar Brands

- **Linear** — Same ultra-dark canvas, single chromatic accent (violet/purple), geometric sans display headlines, pill-shaped CTAs, sparse UI with constellation-like spatial density
- **Anthropic** — Dark void aesthetic with minimal UI chrome, large restrained serif-adjacent display type, single warm accent color, hairline borders on near-black surfaces
- **Midjourney** — Cosmic particle-field visual language, black canvas, thin display type floating in space, minimal product chrome, generative atmosphere as brand identity
- **Replicate** — Dark mode with single violet brand color, ultra-thin display headlines, pill buttons, sparse interface that lets visual/artwork dominate

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-bone: #ffffff;
  --color-ash: #bdbdbd;
  --color-smoke: #9a9a9a;
  --color-plum-voltage: #8052ff;
  --color-amber-spark: #ffb829;
  --color-lichen: #15846e;

  /* Typography — Font Families */
  --font-acronym: 'Acronym', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.05px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.05px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.025px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: 0.021px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: 0.021px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.04px;
  --text-display: 78px;
  --leading-display: 0.9;
  --tracking-display: -0.04px;
  --text-hero: 113px;
  --leading-hero: 0.81;
  --tracking-hero: -0.04px;

  /* Typography — Weights */
  --font-weight-extralight: 200;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 6px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 60px;
  --card-padding: 24px;
  --element-gap: 15px;

  /* Border Radius */
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-nav: 24px;
  --radius-cards: 24px;
  --radius-buttons: 24px;

  /* Surfaces */
  --surface-void: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-bone: #ffffff;
  --color-ash: #bdbdbd;
  --color-smoke: #9a9a9a;
  --color-plum-voltage: #8052ff;
  --color-amber-spark: #ffb829;
  --color-lichen: #15846e;

  /* Typography */
  --font-acronym: 'Acronym', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.05px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.05px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.025px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: 0.021px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: 0.021px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.04px;
  --text-display: 78px;
  --leading-display: 0.9;
  --tracking-display: -0.04px;
  --text-hero: 113px;
  --leading-hero: 0.81;
  --tracking-hero: -0.04px;

  /* Spacing */
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-3xl: 24px;
}
```