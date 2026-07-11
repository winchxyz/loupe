# Auros — Style Reference
> abyssal observatory with bioluminescent data constellations. A dark teal void where luminous particles, tight display type, and rationed teal-to-lavender gradients signal liquidity and precision.

**Theme:** dark

Auros reads as a deep-ocean trading terminal: a near-black teal abyss punctuated by luminous data points, subtle lavender warmth, and a single particle sphere that anchors the visual identity. Typography carries the brand's confidence — a custom geometric sans (Matter) is pushed to extreme sizes, from 10px tracked-out eyebrow labels to 295px display type that crouches aggressively tight. Surfaces are whisper-thin: the card layer sits just one shade above the canvas, creating depth through tonal difference rather than shadows. Accents are rationed — a teal-to-cyan gradient signals action, a barely-there lavender border whispers warmth against the cool field, and small mint dots prefix section labels like navigation beacons.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Abyssal Teal | `#012624` | `--color-abyssal-teal` | Page canvas, primary background — the dominant field the entire interface floats on |
| Midnight Current | `#011d1c` | `--color-midnight-current` | Card surface, elevated panels — one step deeper than canvas, surfaces feel pressed into the void |
| Tide Pool Teal | `#003734` | `--color-tide-pool-teal` | Interactive card backgrounds, subtle filled actions, secondary surface lift |
| Fog Veil | `#bbc7c6` | `--color-fog-veil` | Body text, secondary copy, muted borders — the dim chorus against white headlines |
| Ice Mist | `#edfffe` | `--color-ice-mist` | Highlight borders, accent strokes, light decorative edges — a breath of cool light |
| Ash Gray | `#333333` | `--color-ash-gray` | Dark borders and separators for elevated surfaces and inverted UI. |
| Snow Sheet | `#ffffff` | `--color-snow-sheet` | Primary headings, nav text, icon strokes, logo — the bright typographic surface |
| Lilac Wisp | `#fde9ff` | `--color-lilac-wisp` | Accent border tint, warm complement to the cool teal field — used sparingly on hover and decorative edges |
| Current Gradient | `linear-gradient(90deg, #00827c 0%, #cbfffc 100%)` | `--color-current-gradient` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |
| Aurora Gradient | `linear-gradient(90deg, #cbfffc 0%, #edfffe 26%, #fffdfa 48%, #fad1ff 89%)` | `--color-aurora-gradient` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |
| Twilight Gradient | `linear-gradient(90deg, #cbfffc 0%, #edfffe 26%, #fffdfa 48%, #fad1ff 89%)` | `--color-twilight-gradient` | Decorative gradient endpoint — warm lavender that breaks the teal monotony on ghost buttons and section dividers |

## Tokens — Typography

### Matter — Primary brand typeface. Used for all UI text, navigation, headings, body, and display. The custom geometric sans is pushed to extremes: 295px display type with aggressive negative tracking, and 10px eyebrow labels with wide positive tracking. Weight 400 dominates; weight 500 reserved for emphasized labels and key actions. · `--font-matter`
- **Substitute:** Inter, DM Sans, or Satoshi
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 20px, 24px, 36px, 61px, 86px, 96px, 295px
- **Line height:** 1.00, 1.30, 1.40, 1.50
- **Letter spacing:** -13.57px at 295px, -3.84px at 96px, -1.22px at 61px, -0.47px at 36px, -0.29px at 24px, +0.77px at 14px, +1.04px at 13px, +1.44px at 12px, +1.5px at 10px, +2.4px at 10px (uppercase eyebrow)
- **Role:** Primary brand typeface. Used for all UI text, navigation, headings, body, and display. The custom geometric sans is pushed to extremes: 295px display type with aggressive negative tracking, and 10px eyebrow labels with wide positive tracking. Weight 400 dominates; weight 500 reserved for emphasized labels and key actions.

### Arial — System fallback for non-brand contexts · `--font-arial`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.43
- **Role:** System fallback for non-brand contexts

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| eyebrow | 10px | 1.4 | 2.4px | `--text-eyebrow` |
| caption | 12px | 1.4 | 1.44px | `--text-caption` |
| body | 14px | 1.5 | 0.77px | `--text-body` |
| body-lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.4 | -0.29px | `--text-heading-sm` |
| heading | 36px | 1.3 | -0.47px | `--text-heading` |
| heading-lg | 61px | 1.1 | -1.22px | `--text-heading-lg` |
| display | 96px | 1 | -3.84px | `--text-display` |
| display-xl | 295px | 1 | -13.57px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |
| 140 | 140px | `--spacing-140` |
| 156 | 156px | `--spacing-156` |
| 160 | 160px | `--spacing-160` |
| 172 | 172px | `--spacing-172` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 6px |
| cards | 16px |
| inputs | 6px |
| avatars | 9999px |
| buttons | 6px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 68px
- **Card padding:** 40px
- **Element gap:** 20px

## Components

### Top Navigation Bar
**Role:** Site header

Fixed top bar, full-bleed. Logo left (white AUROS mark + triangle icon), nav items center (uppercase Matter 12px, letter-spacing 1.44px, color #ffffff), ghost CTA right. Height ~64px, padding 16px horizontal, transparent over the teal canvas. No border or background fill — the bar sits directly on the abyss.

### Gradient CTA Button
**Role:** Primary action trigger

Filled button with the Current→Aurora teal-to-cyan gradient background. Matter 12px uppercase, weight 500, letter-spacing 1.44px, dark text #011d1c. Border-radius 6px, padding 14px 28px. Includes a small arrow icon (↗) after label in 16px box. This is the primary action — high-contrast luminous button that pops off the dark field.

### Ghost Outline Button
**Role:** Secondary CTA, navigation action

Transparent background, 1px border with the Aurora multi-stop gradient (cyan→white→lavender). Matter 12px uppercase, weight 500, letter-spacing 1.44px, text in white. Border-radius 6px, padding 14px 24px. Used in the top nav for non-primary actions.

### Section Eyebrow Label
**Role:** Section identifier with dot prefix

Small uppercase label prefixed by a 6px circular dot in saturated teal #00827c. Matter 12px, weight 500, letter-spacing 1.44px, color #bbc7c6. Used above section headings to label content zones (e.g., 'EXPLORE', 'PARTNER WITH US').

### Section Link Card
**Role:** Navigable content block

Dark card on the teal canvas. Background #011d1c (one shade deeper than canvas — pressed in, not lifted). Border-radius 16px, padding 40px. Heading in Matter 24px weight 400 white. Body copy in Matter 14px #bbc7c6. Arrow icon (↗) in top-right corner inside a 6px-rounded ghost button. The card has no visible border — tonal difference does the work.

### Particle Sphere
**Role:** Hero centerpiece visual

3D particle sphere rendered in teal/cyan tones, floating in the hero space. Particles densely packed, glowing with a bioluminescent effect against the deep teal void. Centered or slightly offset in the hero — the single most distinctive brand element.

### Floating Arrow Link
**Role:** Inline navigation element

Compact arrow-icon link with ghost styling. 6px-radius square button (28×28px) containing a ↗ icon, 1px border in #bbc7c6 or #edfffe. Tonal only, no fill. Used in card corners and inline CTAs.

### Connection Node Illustration
**Role:** Decorative section graphic

Network of white circular nodes connected by thin lines, arranged in organic clusters. White fills, no borders, floating on the teal canvas. Represents liquidity connections and market relationships. Used as section decoration alongside the 'Explore Auros' content.

### Hero Headline
**Role:** Page-level title

Centered display text. Matter 86px weight 400, white #ffffff, letter-spacing -1.22px. Line-height 1.1. Preceded by a small uppercase eyebrow ('AUROS') in spaced caps. No background, no border — the text floats on the particle-filled abyss.

### Hero Subhead
**Role:** Supporting hero copy

Matter 16px weight 400, color #bbc7c6, line-height 1.5. Centered, sits below the headline with ~24px gap. Brief single-line description.

### Gradient Wash Background
**Role:** Atmospheric section background

Large radial or linear gradient overlaid on the teal canvas. Uses the multi-stop Aurora gradient (cyan→white→lavender) with very low opacity, or the teal-to-cyan linear gradient as a spotlight effect. Creates the sense of a glowing horizon or underwater light shaft.

## Do's and Don'ts

### Do
- Use Matter as the sole brand typeface; keep Arial only as a hidden system fallback.
- Push display type large and tight: 86px+ headlines with negative letter-spacing between -0.5px and -14px depending on size.
- Differentiate surfaces through tonal depth (#012624 → #011d1c → #003734), never through drop shadows.
- Use the teal-to-cyan gradient exclusively for primary actions; use the cyan-to-lavender multi-stop gradient for ghost/secondary buttons.
- Prefix section labels with a 6px teal dot indicator before the uppercase eyebrow text.
- Maintain generous spacing: 40px card padding, 68px between sections, 20px between related elements.
- Reserve the lavender #fde9ff as a warm accent border tint, never as a fill.

### Don't
- Do not add drop shadows or box-elevation to cards or buttons — tonal contrast handles depth.
- Do not use the lavender/pink palette as a primary color or background fill.
- Do not use bright saturated colors on the dark canvas; all chromatic accents should be muted or gradient-washed.
- Do not break the radius discipline: 6px for controls, 16px for cards — no mixing.
- Do not use bold (600+) weights; the system is 400/500 only, with size and tracking doing the work.
- Do not add visible borders to cards on the teal canvas; let the one-shade surface difference create separation.
- Do not use tight tracking on small text; reserve negative letter-spacing for 24px+ sizes only.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Abyss | `#012624` | Page background — the deep teal void |
| 1 | Trench | `#011d1c` | Card surface, sections that need subtle separation from canvas |
| 2 | Reef | `#003734` | Elevated card background, interactive containers |

## Elevation

Elevation is achieved through tonal contrast, not shadows. The surface stack descends from #012624 (canvas) to #011d1c (card) to #003734 (elevated) — each step just one shade apart creates a pressed-in, low-relief topography. No drop shadows are used; the particle sphere and gradient washes do the visual work that shadows do elsewhere.

## Imagery

Imagery is dominated by the particle sphere — a 3D cluster of luminous dots forming a globe, rendered in teal and cyan tones, the single most recognizable brand mark. Secondary visuals are abstract: floating white node-and-line network diagrams that suggest liquidity connections and market structure. No photography, no product screenshots, no human imagery. All visuals are generative/illustrated and live in a monochromatic teal-to-cyan range with occasional white accents. The particle aesthetic extends subtly into the background gradients, creating the impression of depth and motion in an otherwise static layout.

## Layout

Full-bleed dark canvas, max-width 1200px content container. Hero is centered single-column: small uppercase eyebrow → large display headline → subhead → gradient CTA, with the particle sphere floating behind/beside. Navigation is a fixed transparent top bar with no background fill, letting the teal void show through. Below the hero, content flows in single-column full-width bands. The 'Explore Auros' section uses a two-column split: content cards stacked on the left (40px padding, 16px radius), decorative node-network illustration on the right. Section spacing is generous (~68px) creating clear vertical rhythm. No sidebar, no grid of small cards — sections are large, breathing, each one a full horizontal band.

## Agent Prompt Guide

**Quick Color Reference**
- Text: #ffffff (headings), #bbc7c6 (body), #edfffe (highlights)
- Background: #012624 (canvas), #011d1c (cards), #003734 (elevated)
- Border: #333333 (structural), #edfffe (accent)
- Accent: #00827c (teal), #fde9ff (lavender)
- primary action: #003734 (filled action)

**3-5 Example Component Prompts**

1. Create a Primary Action Button: #003734 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. *Create an Explore card:* Background #011d1c, border-radius 16px, padding 40px. Heading 'Proprietary Trading' in Matter 24px weight 400 #ffffff. Body text in Matter 14px #bbc7c6, line-height 1.5. Top-right corner: 28×28px ghost button with 1px border in #edfffe, border-radius 6px, containing a ↗ icon in white. No drop shadow.

3. *Create a ghost nav button:* Transparent background, 1px border using the multi-stop gradient (cyan→white→lavender, 90deg), border-radius 6px, padding 14px 24px. Label 'PARTNER WITH US' in Matter 12px weight 500, #ffffff, letter-spacing 1.44px, uppercase.

4. *Create a section eyebrow:* A 6px diameter circle in #00827c, followed by 12px horizontal gap, then the text 'EXPLORE' in Matter 12px weight 500, #bbc7c6, letter-spacing 1.44px, uppercase. All inline, aligned to the left edge of the content container.

## Gradient System

The gradient system is rationed and purposeful. Three gradient identities serve three roles:

1. **Current Gradient** (teal→cyan, 90deg): The single primary action gradient. #00827c → #cbfffc. Used only on filled CTA buttons. The dark teal start grounds the button in brand, the bright cyan end makes it appear 'switched on'.

2. **Aurora Gradient** (multi-stop, 90deg): The secondary multi-color gradient: #cbfffc → #edfffe → #fffdfa → #fad1ff. Spans the full cool-to-warm spectrum and is used on ghost button borders and the partner CTA. The lavender endpoint is the only warm color in the system — it appears as a brief, distant warmth at the end of an otherwise cool sweep.

3. **Twilight Radial** (radial, lavender-anchored): Used as atmospheric section backgrounds. Anchored in lavender #fad1ff at 0%, fading through white #fffdfa at 45%, #edfffe at 85%, to #cbfffc at 100%. Creates the impression of a distant light source or underwater glow.

Gradients should never be used as full-bleed page backgrounds — they always sit on top of the #012624 canvas at reduced intensity, or as button fills where they are the entire element.

## Particle & Node Visual Language

The particle sphere and node-network diagrams are the brand's two visual signatures. Both are rendered in the same tonal range as the interface: teal/cyan particles on dark canvas, or pure white nodes on dark canvas. They are decorative atmosphere, not explanatory content — they signal 'this is a market structure / liquidity network' without literal diagramming. When recreating the visual language, use these as anchor elements in the hero and section dividers. The particle sphere should appear to float in deep space with a subtle glow; the node diagrams should feel organic and sparse, not grid-like or mechanical.

## Similar Brands

- **Wintermute** — Same dark teal-canvas approach with a single bright CTA gradient, spacious centered hero, and white sans-serif display headlines
- **Jump Crypto** — Deep dark background with luminous accent gradients, uppercase tracked-out nav labels, and minimal surface elevation
- **Galaxy Digital** — Dark-mode institutional finance aesthetic with a teal-leaning palette, tight display type, and rationed accent colors
- **Amberdata** — Similar teal-dark canvas, particle/data visualization as hero centerpiece, and a single luminous gradient button
- **B2C2** — Abyssal dark theme with white display type, uppercase eyebrow labels, and gradient CTAs that use a cool-to-warm spectrum

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-abyssal-teal: #012624;
  --color-midnight-current: #011d1c;
  --color-tide-pool-teal: #003734;
  --color-fog-veil: #bbc7c6;
  --color-ice-mist: #edfffe;
  --color-ash-gray: #333333;
  --color-snow-sheet: #ffffff;
  --color-lilac-wisp: #fde9ff;
  --color-current-gradient: #00827c;
  --gradient-current-gradient: linear-gradient(90deg, #00827c 0%, #cbfffc 100%);
  --color-aurora-gradient: #cbfffc;
  --gradient-aurora-gradient: linear-gradient(90deg, #cbfffc 0%, #edfffe 26%, #fffdfa 48%, #fad1ff 89%);
  --color-twilight-gradient: #fad1ff;
  --gradient-twilight-gradient: linear-gradient(90deg, #cbfffc 0%, #edfffe 26%, #fffdfa 48%, #fad1ff 89%);

  /* Typography — Font Families */
  --font-matter: 'Matter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 10px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 2.4px;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 1.44px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.77px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.29px;
  --text-heading: 36px;
  --leading-heading: 1.3;
  --tracking-heading: -0.47px;
  --text-heading-lg: 61px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.22px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -3.84px;
  --text-display-xl: 295px;
  --leading-display-xl: 1;
  --tracking-display-xl: -13.57px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-156: 156px;
  --spacing-160: 160px;
  --spacing-172: 172px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 68px;
  --card-padding: 40px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Named Radii */
  --radius-tags: 6px;
  --radius-cards: 16px;
  --radius-inputs: 6px;
  --radius-avatars: 9999px;
  --radius-buttons: 6px;

  /* Surfaces */
  --surface-abyss: #012624;
  --surface-trench: #011d1c;
  --surface-reef: #003734;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-abyssal-teal: #012624;
  --color-midnight-current: #011d1c;
  --color-tide-pool-teal: #003734;
  --color-fog-veil: #bbc7c6;
  --color-ice-mist: #edfffe;
  --color-ash-gray: #333333;
  --color-snow-sheet: #ffffff;
  --color-lilac-wisp: #fde9ff;
  --color-current-gradient: #00827c;
  --color-aurora-gradient: #cbfffc;
  --color-twilight-gradient: #fad1ff;

  /* Typography */
  --font-matter: 'Matter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 10px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 2.4px;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 1.44px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.77px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.29px;
  --text-heading: 36px;
  --leading-heading: 1.3;
  --tracking-heading: -0.47px;
  --text-heading-lg: 61px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.22px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -3.84px;
  --text-display-xl: 295px;
  --leading-display-xl: 1;
  --tracking-display-xl: -13.57px;

  /* Spacing */
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-156: 156px;
  --spacing-160: 160px;
  --spacing-172: 172px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
}
```