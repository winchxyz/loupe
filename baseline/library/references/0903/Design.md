# Dylanbrouwer — Style Reference
> Monolithic chrome in cinematic fog — massive display type emerging from black-to-white gradient void, with orange as the only chromatic accent that exists.

**Theme:** mixed

A portfolio of two registers: cinematic dark hero canvases with chrome-metallic display type emerging from black-to-fog gradients, pivoting into bright white sections for work and services. Color is ruthlessly restrained — the entire system runs on achromatic grays and a single orange accent that lives almost exclusively on portfolio framing. Typography is the protagonist: one custom display face (ABC Gravity) explodes at 274px+ to fill the viewport, while a grotesque handles everything from 12px metadata to 60px section openers. The aesthetic reads as a designer's darkroom — confident negative space, brutalist scale jumps, and almost no decorative chrome. Components are reduced to their bones: ghost borders, mono labels, and massive wordmarks that function as section dividers.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#161616` | `--color-obsidian` | Deepest surface, near-black text, badge fills, hero background anchor |
| Graphite | `#3c3a3e` | `--color-graphite` | Primary text, default borders, link/button outlines, structural strokes — the workhorse neutral |
| Slate | `#7b7a7c` | `--color-slate` | Muted borders, secondary text, card edges |
| Ash | `#a2a2a2` | `--color-ash` | Nav borders, tertiary text, inactive states, gradient midstop |
| Mist | `#c9c7cc` | `--color-mist` | Subtle hairlines, large heading tinting on light backgrounds |
| Fog | `#f1f1f1` | `--color-fog` | Card surfaces, nav backgrounds, badge fills, gradient endstop |
| Paper | `#f8f8f8` | `--color-paper` | Elevated card surfaces, off-white panels |
| Bone | `#ffffff` | `--color-bone` | Page canvas, card fills, text on dark surfaces |
| Ember | `#ff4c24` | `--color-ember` | Sole brand accent — portfolio image frames, highlight strokes; the only chromatic punctuation in the system |
| Tangerine | `#ff6436` | `--color-tangerine` | Badge fills, status indicators, soft accent washes — lighter sibling to Ember |

## Tokens — Typography

### ABC Gravity Variable — Display face for hero statements and section openers — sizes 274–288px with line-height 0.74 create viewport-filling wordmarks where letters nearly touch; the extreme weight range (400–500) lets the same face handle both airy display and dense section titles · `--font-abc-gravity-variable`
- **Substitute:** Druk, Pangram Sans Condensed, Inter Display
- **Weights:** 400, 500
- **Sizes:** 12px, 24px, 96px, 274px, 288px
- **Line height:** 0.74-1.30
- **Letter spacing:** -0.0200em at 96–288px, -0.0050em at 24px
- **Role:** Display face for hero statements and section openers — sizes 274–288px with line-height 0.74 create viewport-filling wordmarks where letters nearly touch; the extreme weight range (400–500) lets the same face handle both airy display and dense section titles

### Die Grotesk B — Primary UI and body face — handles everything from 12px UI labels to 60px page headings with a single medium weight; single weight (500) is anti-convention and creates a flat, unwavering voice across the entire type system · `--font-die-grotesk-b`
- **Substitute:** Söhne, Inter, Suisse Int'l
- **Weights:** 500
- **Sizes:** 12px, 17px, 18px, 21px, 36px, 54px, 60px
- **Line height:** 1.00-1.30
- **Letter spacing:** -0.0300em at 54–60px, -0.0200em at 17–21px, -0.0100em at 12–18px
- **Role:** Primary UI and body face — handles everything from 12px UI labels to 60px page headings with a single medium weight; single weight (500) is anti-convention and creates a flat, unwavering voice across the entire type system

### IBM Plex Mono — System metadata, timestamps, status labels, nav micro-text — the only monospace voice; 14px at weight 500 with negative tracking creates a technical/instrumented tone for 'DESIGN BY DYLAN', 'V0.9', '03/10 CET' style annotations · `--font-ibm-plex-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Geist Mono
- **Weights:** 500, 600
- **Sizes:** 12px, 14px
- **Line height:** 1.00-1.30
- **Letter spacing:** -0.0200em at 14px, -0.0100em at 12px
- **Role:** System metadata, timestamps, status labels, nav micro-text — the only monospace voice; 14px at weight 500 with negative tracking creates a technical/instrumented tone for 'DESIGN BY DYLAN', 'V0.9', '03/10 CET' style annotations

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1 | -0.12px | `--text-caption` |
| label | 14px | 1.2 | -0.28px | `--text-label` |
| body-sm | 17px | 1.3 | -0.34px | `--text-body-sm` |
| body-lg | 21px | 1.25 | -0.42px | `--text-body-lg` |
| subheading | 36px | 1.1 | -0.72px | `--text-subheading` |
| heading | 54px | 1.1 | -1.62px | `--text-heading` |
| heading-lg | 60px | 1 | -1.8px | `--text-heading-lg` |
| display | 274px | 0.74 | -5.48px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 6px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 6 | 6px | `--spacing-6` |
| 12 | 12px | `--spacing-12` |
| 18 | 18px | `--spacing-18` |
| 24 | 24px | `--spacing-24` |
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 72 | 72px | `--spacing-72` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 14.4px |
| inputs | 14.4px |
| buttons | 14.4px |

### Layout

- **Section gap:** 48px
- **Card padding:** 12px
- **Element gap:** 6px

## Components

### Minimal Top Nav
**Role:** Fixed minimal header with text links and contact button

Transparent background on dark hero, Fog (#f1f1f1) on light sections. Text links at 12px Die Grotesk B weight 500 in Bone or Graphite, uppercase tracking. Contact button at right with Graphite border, 14.4px radius, 6px 12px padding. 24px horizontal padding, 7px vertical padding on links.

### Ghost Contact Button
**Role:** Outlined call-to-action in navigation

Graphite (#3c3a3e) 1px border, 14.4px radius, transparent fill, Bone or Graphite text at 12px Die Grotesk B weight 500. Padding 6px 12px. No fill state — this is a ghost/outlined action, not a filled CTA.

### Chrome Display Headline
**Role:** Hero-scale typographic statement

ABC Gravity Variable at 274–288px, line-height 0.74, weight 400–500. Filled with the Chrome Fade gradient (black through Graphite to Fog) or rendered in Bone/white. Letterspacing -0.02em. Fills viewport width; can break to second line without adjusting size.

### Portfolio Monitor Frame
**Role:** Hero showcase — monitor with project preview

Realistic monitor render centered or slightly offset in hero. Ember (#ff4c24) accent on screen border. Dark screen content showing project preview. No card chrome — the monitor itself is the card. Shadow: soft dark drop into void background.

### Mono Metadata Block
**Role:** Timestamp/version/credit annotations

IBM Plex Mono 12–14px weight 500–600 in Ash (#a2a2a2) or Slate (#7b7a7c). Two or three stacked lines: 'DESIGN BY DYLAN' / 'V0.9' / '03/10 CET'. Left-aligned, 6px row gap. Functions as a system readout.

### Client Logo Ticker
**Role:** Horizontal scrolling band of collaborator logos

Light Fog (#f1f1f1) background, full-width. Logos at Slate (#7b7a7c) or Graphite, contained in 5–6 equal columns. Diagonal/slanted dividers between slots. Logos are wordmarks or marks, not photographic.

### Section Wordmark
**Role:** Oversized section title that functions as a visual anchor

ABC Gravity Variable or Die Grokesk B at 96–120px in Mist (#c9c7cc) or Fog (#f1f1f1) — rendered as a ghosted background label. No card, no border. Sets up the section content that follows.

### Service Card
**Role:** Minimal card for service offerings

Paper (#f8f8f8) or Bone background, Graphite 1px border, 14.4px radius, 12px padding. Title in Die Grotesk B 21px Graphite, description at 17px weight 500 Slate. No shadow, no fill on hover — border darkens to Obsidian.

### Work Tile
**Role:** Portfolio project thumbnail

Full-bleed image with Ember (#ff4c24) border on hover. No card background — the image fills the tile. Title overlay at bottom in Bone text on dark gradient scrim. 14.4px radius on the tile container.

### Status Badge
**Role:** Small inline indicator (tangerine accent)

Tangerine (#ff6436) background, Bone text, IBM Plex Mono 12px weight 600. 14.4px radius, 5–6px vertical padding, 6–12px horizontal padding. Used sparingly for live/in-progress indicators.

### Right-Side Descriptor
**Role:** Floating context paragraph beside hero centerpiece

Die Grotesk B 17–18px weight 500 in Ash (#a2a2a2) or Slate. Multi-line, max-width ~280px. Right-aligned in the hero grid. Functions as a quiet subtitle to the chrome display.

### Footer Status Bar
**Role:** Bottom-edge system information

Graphite 1px top border, Fog background. IBM Plex Mono 12px for version, build info. 48px vertical padding above.

## Do's and Don'ts

### Do
- Use ABC Gravity Variable at 274–288px with line-height 0.74 for hero and section-open display type
- Set Die Grotesk B to a single weight (500) across all sizes — the flat voice is the signature
- Apply the Chrome Fade gradient (linear-gradient(#000, #6e6c70 25%, #b9b7bb 50%, #dcd6d6 75%, #f1f1f1)) to fill display headlines for metallic effect
- Use Ember (#ff4c24) only on portfolio image borders and as the single accent stroke — never as button fill
- Apply -0.03em letter-spacing at 54–60px Die Grotesk B for tightened headlines
- Use IBM Plex Mono 12–14px weight 500–600 for all system metadata, timestamps, and version labels
- Let the hero be dark (Obsidian #161616 with gradient fog) and the work sections be light (Bone #ffffff) — the contrast is the structure

### Don't
- Don't introduce filled CTA buttons with Ember or any saturated background — there is no distinct primary action color
- Don't add multiple weights of Die Grotesk B — the single weight (500) is the constraint
- Don't use border-radius values other than 14.4px — the single radius token defines the softness
- Don't add chromatic colors beyond the two oranges — the system is 96% achromatic by design
- Don't use shadows for cards or buttons — borders and surface contrast handle layering
- Don't set display type below 96px or above 288px — the scale is intentionally extreme
- Don't use sans-serif for metadata labels — IBM Plex Mono is the only voice for system text

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#161616` | Dark hero canvas, deepest elevation |
| 1 | Bone | `#ffffff` | Light page canvas, default page background |
| 2 | Paper | `#f8f8f8` | Card surfaces on light sections |
| 3 | Fog | `#f1f1f1` | Nav backgrounds, secondary panels |

## Elevation

- **Portfolio Monitor Frame:** `0 40px 80px rgba(0,0,0,0.5)`
- **Service Card:** `none — relies on border and surface contrast`

## Imagery

Imagery is scarce and product-focused. The hero centers a single realistic monitor render showing a project preview, framed in Ember orange. Other portfolio items are work thumbnails — flat screenshots of designed sites, not lifestyle photography. Client logos are wordmarks and marks only, never photographic. The visual language treats the work itself as the imagery: tight crops, dark screens, no lifestyle context. The dominant visual is typography — ABC Gravity at viewport scale IS the image.

## Layout

Full-bleed layout with no max-width container. The hero occupies the entire viewport: a dark gradient canvas with chrome display text at 274px+ that bleeds to the edges, a centered monitor rendering as the focal object, floating mono metadata in the lower-left, and a quiet descriptor paragraph at the right. Navigation is a single transparent-to-Fog bar across the top. Below the hero, the page transitions to a bright white section with a horizontal logo ticker (slanted dividers between slots), then section wordmarks at 96px in ghosted gray acting as anchors. Work sections use full-bleed image grids. The rhythm is extreme: dark → bright → dark, with massive type acting as both content and divider. No sidebar, no cards in the conventional sense — the system is essentially a scrollable canvas of display type and full-bleed media.

## Agent Prompt Guide

**Quick Color Reference**
- Text: #3c3a3e (Graphite)
- Background: #ffffff (Bone) / #161616 (Obsidian for dark sections)
- Border: #3c3a3e (Graphite, primary) / #a2a2a2 (Ash, subtle) / #f1f1f1 (Fog, on dark)
- Accent: #ff4c24 (Ember, portfolio frames only)
- Muted text: #7b7a7c (Slate)
- primary action: no distinct CTA color

**Example Component Prompts**
1. **Hero section**: Full-bleed background, linear-gradient(rgb(0,0,0), rgb(110,108,112) 25%, rgb(185,183,187) 50%, rgb(220,214,214) 75%, rgb(241,241,241)) on the headline. ABC Gravity Variable 274px, line-height 0.74, weight 400, letter-spacing -5.48px, gradient fill on text. Obsidian #161616 page background. A monitor rendering centered below at ~40% viewport width with Ember #ff4c24 border on the screen edge. Mono metadata bottom-left: IBM Plex Mono 12px Ash #a2a2a2, 'DESIGN BY DYLAN' / 'V0.9' / '03/10 CET'. Right-side descriptor: Die Grotesk B 18px weight 500, Slate #7b7a7c, max-width 280px.

2. **Client logo ticker**: Full-width band, Fog #f1f1f1 background, 1px Graphite top/bottom border. Five to six equal columns with diagonal dividers (15° angle). Logos in Slate #7b7a7c or Graphite #3c3a3e, vertically centered, 60% opacity idle.

3. **Ghost navigation button**: Transparent fill, Graphite #3c3a3e 1px border, 14.4px radius, Die Grotesk B 12px weight 500, uppercase, 6px 12px padding. Text in Graphite on light backgrounds, Bone on dark.

4. **Section wordmark anchor**: ABC Gravity Variable 96px, weight 500, line-height 1.0, letter-spacing -1.92px, fill Mist #c9c7cc. No background, no border. Sits at the top of a new section as a ghosted title.

5. **Service card**: Paper #f8f8f8 fill, Graphite 1px border, 14.4px radius, 12px padding. Title Die Grotesk B 21px weight 500 Graphite. Description Die Grotesk B 17px weight 500 Slate. No shadow, no hover fill — only border darkens to Obsidian on hover.

## Gradient System

All gradients are achromatic and serve as metallic/fog effects, not as color decoration. Three canonical gradients:
- Chrome Fade (full): black → #6e6c70 → #b9b7bb → #dcd6d6 → #f1f1f1 — for display text fills and hero backgrounds
- Dark-to-Ash: #7b7a7c → #3c3a3e at 90° — for section transition strips
- Short Chrome: black → #6e6c70 → #a4a3a5 → #dcd6d6 → #f1f1f1 — for secondary display fills
Never use gradients on body text, buttons, or small UI. Gradients exist only at display scale and as atmospheric backgrounds.

## Similar Brands

- **Locomotive (locomotive.ca)** — Same dark hero with massive display type, cinematic mood, achromatic palette with single accent, portfolio-as-experience approach
- **Resn (resn.co.nz)** — Dark-canvas portfolio with brutalist scale jumps, oversized display type, and an experimental/alchemical visual language
- **Active Theory** — Full-bleed dark immersive hero sections, minimal nav, showcase-monitor compositions, and experience-driven portfolio framing
- **Aether (aether.com)** — Achromatic grays with metallic gradient display type, ghost borders, mono system labels, and a darkroom studio atmosphere

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #161616;
  --color-graphite: #3c3a3e;
  --color-slate: #7b7a7c;
  --color-ash: #a2a2a2;
  --color-mist: #c9c7cc;
  --color-fog: #f1f1f1;
  --color-paper: #f8f8f8;
  --color-bone: #ffffff;
  --color-ember: #ff4c24;
  --color-tangerine: #ff6436;

  /* Typography — Font Families */
  --font-abc-gravity-variable: 'ABC Gravity Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-die-grotesk-b: 'Die Grotesk B', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ibm-plex-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.12px;
  --text-label: 14px;
  --leading-label: 1.2;
  --tracking-label: -0.28px;
  --text-body-sm: 17px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.34px;
  --text-body-lg: 21px;
  --leading-body-lg: 1.25;
  --tracking-body-lg: -0.42px;
  --text-subheading: 36px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.72px;
  --text-heading: 54px;
  --leading-heading: 1.1;
  --tracking-heading: -1.62px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.8px;
  --text-display: 274px;
  --leading-display: 0.74;
  --tracking-display: -5.48px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 6px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --section-gap: 48px;
  --card-padding: 12px;
  --element-gap: 6px;

  /* Border Radius */
  --radius-xl: 14.4px;

  /* Named Radii */
  --radius-cards: 14.4px;
  --radius-inputs: 14.4px;
  --radius-buttons: 14.4px;

  /* Surfaces */
  --surface-void: #161616;
  --surface-bone: #ffffff;
  --surface-paper: #f8f8f8;
  --surface-fog: #f1f1f1;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #161616;
  --color-graphite: #3c3a3e;
  --color-slate: #7b7a7c;
  --color-ash: #a2a2a2;
  --color-mist: #c9c7cc;
  --color-fog: #f1f1f1;
  --color-paper: #f8f8f8;
  --color-bone: #ffffff;
  --color-ember: #ff4c24;
  --color-tangerine: #ff6436;

  /* Typography */
  --font-abc-gravity-variable: 'ABC Gravity Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-die-grotesk-b: 'Die Grotesk B', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ibm-plex-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.12px;
  --text-label: 14px;
  --leading-label: 1.2;
  --tracking-label: -0.28px;
  --text-body-sm: 17px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.34px;
  --text-body-lg: 21px;
  --leading-body-lg: 1.25;
  --tracking-body-lg: -0.42px;
  --text-subheading: 36px;
  --leading-subheading: 1.1;
  --tracking-subheading: -0.72px;
  --text-heading: 54px;
  --leading-heading: 1.1;
  --tracking-heading: -1.62px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.8px;
  --text-display: 274px;
  --leading-display: 0.74;
  --tracking-display: -5.48px;

  /* Spacing */
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-xl: 14.4px;
}
```