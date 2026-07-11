# monopo saigon — Style Reference
> cinematic darkroom with floating white type — gallery walls that alternate between pure white editorial space and immersive black frames holding organic 3D forms.

**Theme:** mixed

Monopo Saigon operates a cinematic editorial canvas: pure monochrome architecture (white, ink, and a staircase of grays) interrupted by full-bleed dark atmospheric frames carrying 3D organic imagery. The system is fundamentally light and structural, with dark sections acting as immersive gallery walls rather than primary surface mode. Typography does the emotional work — a single custom geometric sans (Roobert) stretched across an extreme scale from 9px micro-labels to 225px hero statements, creating tension between whisper-fine UI and monumental display. Components are minimal and confident: pill-shaped controls, hairline borders, ghost navigation, and almost no decorative chrome. Color is nearly absent from the system itself — the brand voice lives in scale, space, and atmospheric photography rather than in chromatic identity.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Primary canvas, card surfaces, text on dark frames, hairline borders — the default ground state for all structural sections |
| Ink Black | `#000000` | `--color-ink-black` | Primary text, dark surface backgrounds for hero/feature frames, icon strokes — anchors all legible content |
| Carbon | `#181818` | `--color-carbon` | Secondary dark for footer text, subtle dark borders, icon fills — slightly softer than pure ink for layered depth |
| Ash | `#6d6d6d` | `--color-ash` | Muted body text, hairline borders on light surfaces, secondary metadata |
| Smoke | `#9a9a9a` | `--color-smoke` | Tertiary surface tone for de-emphasized cards, placeholder fills, disabled states |
| Pewter | `#808080` | `--color-pewter` | Mid-neutral for utility backgrounds, subtle dividers between tonal sections |
| Graphite | `#636363` | `--color-graphite` | Solid fill for compact utility buttons (cookie accept, dismiss) — the only non-black action surface |
| Mercury Flow | `linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))` | `--color-mercury-flow` | Atmospheric gradient terminus — organic color appearing only in hero 3D renders and brand film stills, not a UI token |

## Tokens — Typography

### Roobert — Sole display and UI typeface across every role. The 225px hero scale (weight 300) creates whisper-weight monumentality — authority through restraint, not volume. Weight 300 is the signature headline weight; weight 400 carries body and navigation; weight 600 is reserved for emphasis. Substitutes: Inter, DM Sans, or Suisse Int'l as geometric neo-grotesque alternatives. · `--font-roobert`
- **Substitute:** Inter
- **Weights:** 300, 400, 600
- **Sizes:** 11px, 12px, 16px, 18px, 29px, 30px, 39px, 45px, 54px, 78px, 94px, 225px
- **Line height:** 0.70, 0.76, 1.10, 1.15, 1.19, 1.21, 1.22, 1.24, 1.25, 1.36, 1.39, 1.58, 1.82
- **Role:** Sole display and UI typeface across every role. The 225px hero scale (weight 300) creates whisper-weight monumentality — authority through restraint, not volume. Weight 300 is the signature headline weight; weight 400 carries body and navigation; weight 600 is reserved for emphasis. Substitutes: Inter, DM Sans, or Suisse Int'l as geometric neo-grotesque alternatives.

### Raleway — Secondary display presence at the 54px tier — likely used for editorial subhead or pull-quote contrast against Roobert headlines. Substitutes: Montserrat, Poppins. · `--font-raleway`
- **Weights:** 400
- **Sizes:** 54px
- **Line height:** 1.39
- **Role:** Secondary display presence at the 54px tier — likely used for editorial subhead or pull-quote contrast against Roobert headlines. Substitutes: Montserrat, Poppins.

### system-ui — Fallback for cookie banner, legal micro-copy, and system-level utility text where custom font loading is unnecessary. · `--font-system-ui`
- **Weights:** 400
- **Sizes:** 9px, 16px
- **Line height:** 1.15, 1.32
- **Role:** Fallback for cookie banner, legal micro-copy, and system-level utility text where custom font loading is unnecessary.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| body | 16px | 1.39 | — | `--text-body` |
| body-lg | 18px | 1.36 | — | `--text-body-lg` |
| subheading | 30px | 1.25 | — | `--text-subheading` |
| heading-sm | 45px | 1.22 | — | `--text-heading-sm` |
| heading | 54px | 1.21 | — | `--text-heading` |
| heading-lg | 78px | 1.15 | — | `--text-heading-lg` |
| display | 94px | 1.1 | — | `--text-display` |
| hero | 225px | 0.76 | — | `--text-hero` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 28 | 28px | `--spacing-28` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 68 | 68px | `--spacing-68` |
| 152 | 152px | `--spacing-152` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0px |
| badges | 75px |
| inputs | 0px |
| buttons | 75px |

### Layout

- **Page max-width:** 1440px
- **Section gap:** 80-120px
- **Card padding:** 32-40px
- **Element gap:** 14-24px

## Components

### Top Navigation Bar
**Role:** Primary site navigation fixed across viewport

Transparent over hero, switches to white (#ffffff) on scroll. Logo 'monopo saigon' left-aligned in 12px Roobert weight 400, white or #181818 depending on surface. Right cluster: language toggle (EN, 中文, 한국어) as inline links at 11px, followed by vertical menu stack (WORK, MANIFESTO, SAIGON BOLD, TEAM, CONTACT) at 12px uppercase. No background fill, no shadow — floats on the canvas.

### Hero Centered Statement
**Role:** Full-viewport title overlay on dark immersive imagery

Massive centered text at 225px Roobert weight 300, line-height 0.76, color #ffffff, letter-spacing normal. Sits centered both axes over a full-bleed 3D organic render. The extreme tight line-height (0.76) allows multi-line hero text to stack without loose gaps — critical when the type IS the composition.

### Pill Button
**Role:** Primary and secondary action control

Border-radius 75px (fully rounded). Padding 1px vertical, 6px horizontal — extremely compact. Background #636363 (Graphite) for utility actions, #ffffff for primary CTAs. Text at 11-12px Roobert weight 400, color inverted from fill. No shadow, no border, no hover elevation — the pill shape IS the affordance.

### Ghost Navigation Link
**Role:** Menu items and language toggles in top bar

Text-only, no underline, no background. 11-12px Roobert weight 400, uppercase for menu items, mixed case for language codes. Color #ffffff on dark surfaces, #181818 on light surfaces. Spacing between items: 15px gap.

### Scroll Indicator
**Role:** Bottom-left scroll prompt on hero

Circular text path reading 'SCROLL TO EXPLORE' at 9px system-ui, color #ffffff, positioned absolute bottom-left. Functions as both affordance and atmospheric detail — turns navigation into ornament.

### Cookie Consent Banner
**Role:** GDPR compliance overlay

Fixed bottom-right card. Background #ffffff, no visible border or shadow (or extremely soft). Body text 12px Roobert weight 400 #181818 explaining cookie usage with 'Privacy policy' as inline link. Compact 'Accept' pill button (Graphite #636363 fill, white text, 75px radius) and 'X' dismiss icon to the right.

### Dark Immersive Frame
**Role:** Full-bleed hero and feature work sections

Full-viewport #000000 or #181818 background carrying organic 3D renders, film stills, or atmospheric photography. Content sits overlaid in #ffffff. No card containers, no padding — the image IS the surface. Used to break the white editorial flow with cinematic contrast.

### Editorial Content Section
**Role:** Light structural sections between dark frames

White (#ffffff) background, generous 80-120px vertical padding, content max-width 1440px centered. Headlines at 78-94px Roobert weight 300, body at 18px weight 400 #181818. No card chrome, no borders — text breathes directly on the white surface. Section rhythm: 2-column text+image, 3-column work grid, or full-width statement.

## Do's and Don'ts

### Do
- Use Roobert weight 300 for all display and headline text — the whisper-weight is the signature; never substitute bold for impact at scale
- Apply the 75px pill radius exclusively to buttons and tags — this is the only curved element in the system and its rarity is the point
- Alternate between #ffffff editorial surfaces and #000000 immersive frames for section rhythm — the contrast between white structure and black atmosphere is the page's visual beat
- Set hero and display text at line-height 0.70-0.76 to allow massive type to stack tightly without losing density
- Reserve color for the hero imagery and 3D renders — never add chromatic accents to UI chrome, buttons, or text; the system is intentionally achromatic
- Use #636363 (Graphite) only for compact utility actions like cookie consent; never as a primary CTA background — primary actions use #ffffff or remain ghost
- Keep body text at 18px minimum (never below 16px) and apply generous line-height (1.36-1.58) — the system values breathing room over information density

### Don't
- Do not introduce brand accent colors, gradients, or chromatic buttons — the system is monochrome by design and adding color breaks the editorial discipline
- Do not use border-radius values other than 75px (buttons/tags) or 0px (cards/inputs) — no 4px, 8px, or 12px soft rounds; the system is sharp or fully pill
- Do not apply shadows, glows, or elevation effects to cards or surfaces — surfaces are flat; depth comes from tonal contrast between white and black frames
- Do not use Roobert weight 600 for headlines — reserve 600 for inline emphasis only; headlines must stay at 300 to maintain the whisper-tone signature
- Do not constrain hero text to standard heading sizes (54-78px) — the system commits to 94-225px display; smaller dilutes the cinematic intent
- Do not fill the full viewport with white-on-white content without a dark immersive break — pages need the black frame interlude to maintain rhythm
- Do not use colored borders, tinted backgrounds, or pastel surfaces for tags, badges, or status indicators — keep all metadata neutral (#6d6d6d or #181818)

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Paper White | `#ffffff` | Default canvas for all structural editorial sections, card surfaces, and light-mode content |
| 2 | Smoke | `#9a9a9a` | De-emphasized surface for placeholder content, disabled states, and subtle tonal separation |
| 3 | Pewter | `#808080` | Mid-neutral utility background for compact UI elements and divider zones |
| 4 | Graphite | `#636363` | Solid action surface for utility buttons (cookie accept, dismiss controls) |
| 5 | Carbon | `#181818` | Secondary dark surface for footer zones, icon containers, and dark UI elements within light sections |
| 6 | Ink Black | `#000000` | Full-bleed immersive surface for hero frames, feature work showcases, and cinematic dark sections |

## Elevation

The system deliberately avoids box-shadows and drop-shadows. Depth is created through tonal contrast between flat white editorial surfaces and flat black immersive frames, not through elevation. Components are flush to their surfaces — pills sit on white, text sits on imagery, cards are invisible containers defined only by content boundaries and generous whitespace.

## Imagery

Atmospheric 3D organic renders dominate the visual language — flowing, liquid forms in dark greens, amber/gold, warm copper, and deep oxblood tones. These are not product photography or lifestyle imagery; they are abstract sculptural compositions that function as cinematic backdrops. Imagery is always full-bleed, always edge-to-edge, always carrying the hero or feature section. No rounded corners on imagery, no contained thumbnails — every visual is immersive and borderless. Photography (when present) follows the same full-bleed treatment with high contrast and moody lighting. Iconography is minimal: text-based labels and a single circular scroll indicator.

## Layout

Max-width 1440px centered with generous gutters, but hero and feature sections break to full-bleed. The page rhythm alternates between full-viewport dark immersive frames (hero with centered statement overlaid) and white editorial bands (content sections with left-aligned headlines, 2-column text+image splits, or 3-column work grids). Navigation is a minimal floating top bar — no sticky shadow, no background fill, just text floating on whatever surface is beneath. Vertical spacing is spacious: 80-120px between sections, 32-40px internal padding. Content is overwhelmingly text-dominant; imagery serves as atmosphere rather than information. The layout reads as an editorial magazine spread — generous whitespace, monumental type, cinematic black breaks.

## Agent Prompt Guide

## Quick Color Reference
- Background (light): #ffffff
- Background (dark/immersive): #000000
- Primary text: #181818
- Text on dark: #ffffff
- Muted text/borders: #6d6d6d
- Utility button fill: #636363
- primary action: no distinct CTA color

## Example Component Prompts

1. **Cinematic Hero Section**: Full-viewport #000000 background. Centered title at 94px Roobert weight 300, #ffffff, line-height 0.76, letter-spacing normal. Title sits at exact vertical and horizontal center. No navigation background, no card, no border — the dark frame IS the container.

2. **Pill Cookie Button**: Background #636363, text #ffffff at 12px Roobert weight 400, border-radius 75px, padding 1px vertical / 6px horizontal. No border, no shadow, no hover state. Pair with a 9px system-ui dismiss 'X' icon at 9px margin-left.

3. **Editorial Work Grid Section**: White #ffffff background, 1440px max-width centered, 80px vertical padding. Section title at 78px Roobert weight 300, #181818, line-height 1.15. Below: 3-column grid of full-bleed dark work thumbnails (#000000 background with white overlay text at 18px). 24px gap between grid items. No card borders, no padding inside cells — thumbnails sit flush.

4. **Ghost Navigation Link**: Text only, 12px Roobert weight 400, #ffffff on dark surfaces, #181818 on light. Uppercase, letter-spacing normal. 15px margin-right between items. No underline, no background, no border. Wraps in a right-aligned flex cluster.

5. **Immersive 3D Frame Section**: Full-viewport #000000 background with a centered abstract organic 3D render (dark green/amber/copper palette). Overlaid bottom-left: circular 'SCROLL TO EXPLORE' text path at 9px system-ui, #ffffff. No additional UI chrome — the frame is self-contained.

## Similar Brands

- **Unseen Studio (unseen.co)** — Same cinematic darkroom aesthetic with floating white type, full-bleed dark frames, and achromatic UI that lets 3D atmospheric imagery carry the brand voice
- **Resn (resn.co.nz)** — Extreme type scale stretching from micro-labels to monument-size hero text, paired with dark immersive sections and editorial whitespace — the same gallery-wall sensibility
- **Locomotive (locomotive.ca)** — Editorial agency aesthetic with white structural sections breaking into dark atmospheric frames, whisper-weight headlines, and achromatic discipline
- **Pentagram (pentagram.com)** — Monochrome editorial canvas, generous whitespace, monumental type at display scale, and minimal UI chrome that defers to content rhythm
- **Active Theory (activetheory.net)** — Full-bleed dark immersive frames with 3D/webGL organic forms overlaid with white type — same cinematic-black-box gallery metaphor

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-ink-black: #000000;
  --color-carbon: #181818;
  --color-ash: #6d6d6d;
  --color-smoke: #9a9a9a;
  --color-pewter: #808080;
  --color-graphite: #636363;
  --color-mercury-flow: #a0e0ab;
  --gradient-mercury-flow: linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37));

  /* Typography — Font Families */
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-raleway: 'Raleway', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-body: 16px;
  --leading-body: 1.39;
  --text-body-lg: 18px;
  --leading-body-lg: 1.36;
  --text-subheading: 30px;
  --leading-subheading: 1.25;
  --text-heading-sm: 45px;
  --leading-heading-sm: 1.22;
  --text-heading: 54px;
  --leading-heading: 1.21;
  --text-heading-lg: 78px;
  --leading-heading-lg: 1.15;
  --text-display: 94px;
  --leading-display: 1.1;
  --text-hero: 225px;
  --leading-hero: 0.76;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-28: 28px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-152: 152px;

  /* Layout */
  --page-max-width: 1440px;
  --section-gap: 80-120px;
  --card-padding: 32-40px;
  --element-gap: 14-24px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 75.024px;

  /* Named Radii */
  --radius-cards: 0px;
  --radius-badges: 75px;
  --radius-inputs: 0px;
  --radius-buttons: 75px;

  /* Surfaces */
  --surface-paper-white: #ffffff;
  --surface-smoke: #9a9a9a;
  --surface-pewter: #808080;
  --surface-graphite: #636363;
  --surface-carbon: #181818;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-ink-black: #000000;
  --color-carbon: #181818;
  --color-ash: #6d6d6d;
  --color-smoke: #9a9a9a;
  --color-pewter: #808080;
  --color-graphite: #636363;
  --color-mercury-flow: #a0e0ab;

  /* Typography */
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-raleway: 'Raleway', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-body: 16px;
  --leading-body: 1.39;
  --text-body-lg: 18px;
  --leading-body-lg: 1.36;
  --text-subheading: 30px;
  --leading-subheading: 1.25;
  --text-heading-sm: 45px;
  --leading-heading-sm: 1.22;
  --text-heading: 54px;
  --leading-heading: 1.21;
  --text-heading-lg: 78px;
  --leading-heading-lg: 1.15;
  --text-display: 94px;
  --leading-display: 1.1;
  --text-hero: 225px;
  --leading-hero: 0.76;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-28: 28px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-152: 152px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 75.024px;
}
```