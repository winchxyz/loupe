# Active Theory — Style Reference
> observatory dome at midnight — a single instrument glowing in void, surrounded by instrument-panel micro-labels

**Theme:** dark

Active Theory's interface is an abyss: near-total black canvas swallowed by a single luminous 3D artifact, with chrome reduced to whisper-thin uppercase labels and hairline rules. The visual language borrows from architectural drafting and particle physics — a monospaced geometric typeface (nbarchitekt) labels every interface element while a serif (Times) handles the rare body passage, creating tension between technical precision and editorial warmth. UI elements exist at the periphery: a pill-shaped top-right nav connected by a drawn line, a small cookie consent anchored bottom-right. Color is almost entirely achromatic; the sole chromatic note is a desaturated midnight violet used sparingly on the cookie accept affordance, never reaching for hero or marketing prominence. The design system essentially says: the 3D piece IS the interface, and every chrome element should defer to it.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Page canvas, modal backdrops, particle field background |
| Pure White | `#ffffff` | `--color-pure-white` | Primary text, nav labels, button text on dark fills |
| Graphite Border | `#4d4d4d` | `--color-graphite-border` | Hairline dividers, faint structural rules |
| Steel Border | `#808080` | `--color-steel-border` | Outlined button borders, secondary dividers |
| Fog Border | `#999999` | `--color-fog-border` | Tertiary button borders, low-emphasis rules |
| Ash Link | `#c6c6c6` | `--color-ash-link` | Muted link color, secondary informational text |
| Midnight Violet | `#343755` | `--color-midnight-violet` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Tokens — Typography

### nbarchitekt — Signature technical-label typeface for navigation, buttons, and micro-copy. Its architectural/monospaced character gives the interface a drafting-blueprint quality — uppercase 10–12px labels at tight tracking feel like instrument markings rather than UI text. Substitute: Space Mono or IBM Plex Mono for similar geometric-technical character. · `--font-nbarchitekt`
- **Substitute:** Space Mono, IBM Plex Mono
- **Weights:** 400, 700
- **Sizes:** 10, 12, 14
- **Line height:** 1.20, 1.50, 3.00
- **Letter spacing:** normal
- **Role:** Signature technical-label typeface for navigation, buttons, and micro-copy. Its architectural/monospaced character gives the interface a drafting-blueprint quality — uppercase 10–12px labels at tight tracking feel like instrument markings rather than UI text. Substitute: Space Mono or IBM Plex Mono for similar geometric-technical character.

### Times — System serif used for body passages and link text at 16px. The serif choice against an all-caps geometric label font creates a deliberate editorial/system contrast — Times carries readability, nbarchitekt carries identity. Substitute: any system serif (Georgia, Times New Roman). · `--font-times`
- **Substitute:** Georgia, Times New Roman
- **Weights:** 400
- **Sizes:** 16
- **Line height:** 1.20, 1.88
- **Role:** System serif used for body passages and link text at 16px. The serif choice against an all-caps geometric label font creates a deliberate editorial/system contrast — Times carries readability, nbarchitekt carries identity. Substitute: any system serif (Georgia, Times New Roman).

### Arial — Button fallback at 13px. Functions as a system safety net for nbarchitekt rendering — same role, neutral sans execution. · `--font-arial`
- **Substitute:** Helvetica, system-ui
- **Weights:** 400
- **Sizes:** 13
- **Line height:** 1.20
- **Role:** Button fallback at 13px. Functions as a system safety net for nbarchitekt rendering — same role, neutral sans execution.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| body-lg | 16px | 1.88 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 12 | 12px | `--spacing-12` |
| 13 | 13px | `--spacing-13` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 28 | 28px | `--spacing-28` |

### Border Radius

| Element | Value |
|---------|-------|
| panels | 12px |
| buttons | 5px |
| pillButtons | 500px |

### Layout

- **Card padding:** 12-18px
- **Element gap:** 6px

## Components

### Connected Pill Nav
**Role:** Primary site navigation — two labels with a drawn connector line

Top-right floating nav. Two nbarchitekt uppercase labels (e.g. 'WORK' and 'CONTACT') at 10–12px, weight 700, white, separated by a 1px white horizontal rule. Container has 500px border-radius forming a capsule. No background fill — the pill shape is implied by the connector line and the label positioning. Padding ~6px vertical, ~13px horizontal.

### Outlined Ghost Button
**Role:** Secondary action — cookie reject, optional dismiss

Transparent fill, 1px border in #999999 or #808080, 5px radius, nbarchitekt or Arial 13px uppercase text in white. Horizontal padding 18px, vertical padding 1–4px. No fill on hover state in the data; relies on border and text contrast.

### Violet Filled Button
**Role:** Cookie-consent accept affordance — the only chromatic button in the system

Background #343755 (midnight violet), white text, 5px radius. NBarchitekt or Arial 13px uppercase. Padding ~6px vertical, ~18px horizontal. Functions as a system utility button rather than a marketing CTA — its muted desaturated indigo avoids competing with the 3D centerpiece.

### Cookie Consent Panel
**Role:** Bottom-right regulatory overlay

Anchored bottom-right at ~20px margin. 12px radius, 1px border in #4d4d4d, black fill matching the canvas (no surface lift — differentiated only by border). Body text in Times 16px white at line-height 1.88, with 'PRIVACY NOTICE' underlined as a link in #c6c6c6. Contains one violet filled button and one outlined ghost button side by side with ~6px gap.

### Label Tag
**Role:** Micro-copy for section markers, metadata, instrument labels

nbarchitekt 10–12px, weight 400, uppercase, white, tracking normal. Used sparingly to mark UI zones in the same way architectural drawings annotate components. No background, no border — text alone.

### 3D Centerpiece
**Role:** Hero visual artifact — the page's actual subject

A WebGL/Three.js rendered orb composed of concentric translucent rings with a hexagonal core, emitting amber particle sparks and leaving fluid ribbon trails. Centered on the void canvas, occupying roughly the central third of the viewport. No fixed dimensions — responsive to canvas.

### Particle Field
**Role:** Atmospheric background layer behind the centerpiece

Sparse amber/orange spark particles (implied by screenshot glow) scattered across the black canvas with low density. Provides depth cues and motion parallax without competing with the centerpiece.

### Hairline Divider
**Role:** Structural separation between nav elements, modal edges, and UI regions

1px solid line in #4d4d4d or #ffffff. Used to delineate UI zones on the black canvas since fills are suppressed. The drawn connector line in the pill nav is the signature application of this primitive.

### Muted Link
**Role:** Inline links within body or consent text

Times 16px, #c6c6c6, underlined. Sits within paragraph copy at the same size and line-height as surrounding text. The underlined treatment in #c6c6c6 (not the default link blue) is the signature choice — links feel like editorial annotations, not interactive chrome.

## Do's and Don'ts

### Do
- Use #000000 as the sole canvas color across all sections — never introduce gray fills, light backgrounds, or surface lifts
- Set all UI labels in nbarchitekt uppercase at 10–14px; reserve Times 16px serif exclusively for paragraph body copy
- Use 1px hairlines in #4d4d4d or #ffffff to delineate UI zones instead of background fills or shadows
- Apply 500px radius only to the connected pill navigation; use 5px radius for all other buttons, 12px for any panel container
- Let the 3D centerpiece own the visual field; position all chrome (nav, modals) in the corners with generous negative space
- Use #343755 midnight violet only for the cookie-consent accept button — never extend it to marketing CTAs, tags, or icons
- Set button padding to 1–6px vertical and 13–18px horizontal — the system favors compact, almost flush controls

### Don't
- Do not introduce colored backgrounds, gradients, or surface fills — the void-black canvas is non-negotiable
- Do not use shadows or elevation effects to differentiate UI layers; use borders and positioning instead
- Do not use sans-serif system fonts (Inter, Helvetica) for labels — nbarchitekt's architectural character defines the brand
- Do not apply the #343755 violet to any element other than the cookie-consent accept button
- Do not center-align large blocks of body copy or stack text-heavy sections — the site is visual-first, text-sparse
- Do not use more than two typefaces on a single surface (nbarchitekt + Times for body, or nbarchitekt + Arial for buttons)
- Do not add marketing CTAs, pricing tables, or feature grids — this design system serves an immersive portfolio, not a product surface

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Full-bleed page canvas, particle field, hero background |
| 1 | Instrument Panel | `#000000` | Modal and elevated UI surfaces — same black as canvas, differentiated by thin border, not by fill |

## Elevation

Elevation is intentionally absent. The design uses pure flat black (#000000) for both the canvas and modal surfaces, differentiating UI layers only through 1px hairline borders in #4d4d4d and through spatial positioning in the corners. This is a deliberate choice consistent with the void-canvas concept: any shadow or surface lift would imply a 'ground plane' that contradicts the infinite-black aesthetic. Modal and panel containers feel like cutouts in the same darkness, not cards floating above it.

## Imagery

The site's visual language is dominated by a single WebGL-rendered 3D centerpiece: concentric translucent rings wrapping a hexagonal core, emitting amber particle sparks and leaving fluid ribbon trails. This is the only visual subject — no photography, no illustration, no product screenshots, no decorative graphics. The particle field around it is sparse and atmospheric, not information-dense. The 3D piece sits centered on a pure black void, occupying roughly the central third of the viewport, and functions as both hero and ongoing ambient content. Iconography is minimal or absent; what little UI exists uses text labels in the architectural nbarchitekt typeface rather than iconography. Imagery-to-text ratio is extremely high visual-to-text — the 3D object IS the page.

## Layout

The layout is a full-bleed immersive canvas with no max-width container. The hero fills the entire viewport as a single dark void centered on the 3D artifact. Chrome is pushed to the absolute corners: the connected pill nav floats top-right with a thin connector line, and the cookie consent anchors bottom-right. There is no grid system, no card layout, no sidebar, no hero-with-columns split. Section rhythm is defined by full-viewport scenes rather than vertical bands — the page reads as a single continuous dark stage. Navigation is minimal and persistent (always-visible top-right). Content density is extremely low: one visual artifact, two nav labels, one consent panel.

## Agent Prompt Guide

## Quick Color Reference
- text: #ffffff (primary), #c6c6c6 (muted/links)
- background: #000000 (canvas + panels)
- border: #4d4d4d (hairline), #808080 / #999999 (button borders)
- accent: #343755 (midnight violet — cookie accept only)
- primary action: no distinct CTA color

## 3-5 Example Component Prompts

1. **Connected Pill Nav**: Top-right floating. Two nbarchitekt 12px weight 700 uppercase white labels ('WORK' and 'CONTACT') connected by a 1px white horizontal line. Container has 500px border-radius, no fill, transparent background. Padding 6px vertical, 13px horizontal.

2. **Cookie Consent Panel**: Bottom-right anchored at 20px margin. 12px border-radius, 1px #4d4d4d border, #000000 fill, padding 16px. Times 16px white body at line-height 1.88 with 'PRIVACY NOTICE' as underlined #c6c6c6 link. Two buttons: one violet filled (#343755, white text, 5px radius, nbarchitekt 13px) and one outlined ghost (transparent, 1px #999999 border, 5px radius, white text).

3. **Outlined Ghost Button**: Transparent fill, 1px #999999 border, 5px border-radius, Arial or nbarchitekt 13px white uppercase text, padding 4px vertical and 18px horizontal.

4. **Muted Inline Link**: Times 16px, #c6c6c6, underlined, sitting inline within a Times 16px white body paragraph at line-height 1.88.

5. **Label Tag**: nbarchitekt 10px weight 400 uppercase white, no background, no border, used as a standalone section marker with 6px margin to surrounding elements.

## Similar Brands

- **Resn** — Same dark immersive canvas with a single WebGL artifact as the visual subject, chrome pushed to corners, minimal text
- **Locomotive** — Dark-mode creative agency sites with full-bleed visual showcases and sparse instrument-panel UI typography
- **Tool** — Abyss-black canvas with a luminous 3D centerpiece, uppercase technical labels, and almost no conventional page chrome
- **Unit9** — Immersive agency aesthetic with single dark scene, particle atmosphere, and nav reduced to thin text + hairline
- **Active Theory (peers like Very Rare Surrounding)** — Architectural-drafting micro-labels on void backgrounds with WebGL 3D as the page's primary content

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-black: #000000;
  --color-pure-white: #ffffff;
  --color-graphite-border: #4d4d4d;
  --color-steel-border: #808080;
  --color-fog-border: #999999;
  --color-ash-link: #c6c6c6;
  --color-midnight-violet: #343755;

  /* Typography — Font Families */
  --font-nbarchitekt: 'nbarchitekt', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.88;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-28: 28px;

  /* Layout */
  --card-padding: 12-18px;
  --element-gap: 6px;

  /* Border Radius */
  --radius-md: 5px;
  --radius-xl: 12px;
  --radius-full: 500px;

  /* Named Radii */
  --radius-panels: 12px;
  --radius-buttons: 5px;
  --radius-pillbuttons: 500px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-instrument-panel: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-black: #000000;
  --color-pure-white: #ffffff;
  --color-graphite-border: #4d4d4d;
  --color-steel-border: #808080;
  --color-fog-border: #999999;
  --color-ash-link: #c6c6c6;
  --color-midnight-violet: #343755;

  /* Typography */
  --font-nbarchitekt: 'nbarchitekt', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.88;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-28: 28px;

  /* Border Radius */
  --radius-md: 5px;
  --radius-xl: 12px;
  --radius-full: 500px;
}
```