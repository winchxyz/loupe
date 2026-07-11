# Awesomic — Style Reference
> Rounded midnight marketplace — a portfolio gallery cut from matte black tiles on a white tablecloth, where large rounded corners and a single custom typeface do all the expressive work.

**Theme:** light

Awesomic operates on a white-and-near-black canvas with maximum roundness — 36px cards and pill-shaped containers dominate every surface, creating a soft, approachable tension against the very dark #09090b fills used for primary actions. The neutral scale is dense and graduated (gray-50 through gray-950), but only 3-4 steps appear in any single view, keeping contrast high without complexity. The single custom typeface, Cosmica, spans the entire system from 10px badge labels to 64px display headlines — its weight range (300–700) does all tonal work that color doesn't. Accent color is almost entirely absent from the UI layer: vivid orange (#ff5a00) surfaces only on YC badge labels, and the vivid pink (#fe45e2) is a single decorative card wash — the system's restraint makes these moments land harder.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#09090b` | `--color-obsidian` | Primary filled button backgrounds, display heading text on white surfaces — the system's anchor dark, nearly true black |
| Ink | `#18181b` | `--color-ink` | Body text, nav text, badge text on light surfaces — one shade lighter than Obsidian, used for reading-weight text |
| Graphite | `#3f3f46` | `--color-graphite` | Button borders, badge backgrounds (dark variant), border strokes across components — the dominant UI border tone |
| Slate | `#52525b` | `--color-slate` | Mid-dark card backgrounds in dark sections, subtle icon fills |
| Steel | `#71717a` | `--color-steel` | Muted body copy, helper text labels such as stat captions |
| Ash | `#a1a1aa` | `--color-ash` | Subdued heading variants, placeholder text, decorative rule strokes |
| Pebble | `#d4d4d8` | `--color-pebble` | Hairline dividers, inactive link backgrounds, lightest visible border on white cards |
| Fog | `#ececee` | `--color-fog` | Card backgrounds (mid variant), badge borders, section dividers — the second surface step above the canvas |
| Mist | `#f4f4f5` | `--color-mist` | Page canvas, light card backgrounds, tag/link hover surface — the dominant background tone |
| Snow | `#ffffff` | `--color-snow` | White card surfaces, input backgrounds, button fill for outlined variant — the brightest surface in the stack |
| Ember | `#ff5a00` | `--color-ember` | YC batch badge backgrounds — vivid orange signals startup-ecosystem provenance, appears only on badge-sized labels |
| Orchid Flash | `#fe45e2` | `--color-orchid-flash` | Decorative card wash accent — single-use vivid pink on a large card background to punctuate the portfolio grid |

## Tokens — Typography

### Cosmica — The sole typeface across the entire system — every badge, button, nav link, heading, and body copy uses Cosmica. Its wide weight range means all typographic hierarchy is weight-driven rather than family-switching. At 56–64px the light-to-medium weights feel assertive without shouting; at 10–14px the medium-to-semibold weights keep small labels legible at compact density. · `--font-cosmica`
- **Substitute:** DM Sans, Plus Jakarta Sans
- **Weights:** 300, 400, 500, 600, 700
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 32px, 40px, 56px, 64px
- **Line height:** 1.0–1.8 (tighter at display sizes ~1.0–1.12, looser at body sizes ~1.45–1.68)
- **Letter spacing:** normal across all sizes — no tracked-out headlines or tight-tracked display text
- **Role:** The sole typeface across the entire system — every badge, button, nav link, heading, and body copy uses Cosmica. Its wide weight range means all typographic hierarchy is weight-driven rather than family-switching. At 56–64px the light-to-medium weights feel assertive without shouting; at 10–14px the medium-to-semibold weights keep small labels legible at compact density.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.8 | — | `--text-caption` |
| body | 14px | 1.56 | — | `--text-body` |
| body-lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 18px | 1.45 | — | `--text-subheading` |
| heading-sm | 20px | 1.35 | — | `--text-heading-sm` |
| heading | 32px | 1.28 | — | `--text-heading` |
| heading-lg | 40px | 1.25 | — | `--text-heading-lg` |
| display-sm | 56px | 1.12 | — | `--text-display-sm` |
| display | 64px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
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
| 68 | 68px | `--spacing-68` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| hero | 48px |
| pill | 10000px |
| cards | 36px (primary) or 28px (compact) |
| icons | 40px |
| badges | 12px |
| inputs | 14px |
| buttons | 36px (pill) or 14-16px (rounded rect) |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset, rgba(11...` | `--shadow-subtle` |
| subtle-2 | `rgb(228, 228, 231) 0px 1px 0px 0px inset` | `--shadow-subtle-2` |
| subtle-3 | `rgb(255, 255, 255) 0px 0.5px 0px 0px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgb(255, 255, 255) 0px -0.5px 0px 0px` | `--shadow-subtle-4` |
| subtle-5 | `rgb(228, 228, 231) 0px -1px 0px 0px` | `--shadow-subtle-5` |
| md | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24-28px
- **Element gap:** 8px

## Components

### Primary Pill Button
**Role:** Main page CTA — Book demo, Get started, View all projects

Background #09090b, white text, Cosmica 14–16px weight 500, border-radius 36px, padding 12px 16px, 1.5px ring at rgb(44,46,52) with layered inset highlight and soft drop shadow. The multi-layer shadow gives the black pill a pressed-glass tactile quality unique to this system.

### Outlined White Button
**Role:** Secondary actions, nav-adjacent controls

Background #ffffff, text #3f3f46, border 1px solid #3f3f46, border-radius 36px, padding 20px. Same pill silhouette as primary but inverted — white fill against the dark border reads as a ghost on light backgrounds.

### Rounded Dark Button
**Role:** In-context actions within dark card panels

Background #09090b, white text, border 1px solid rgba(255,255,255,0.2), border-radius 14–16px, padding 12–14px 16–18px. The softer radius (not pill) distinguishes panel-embedded actions from page-level CTAs.

### Light Surface Card
**Role:** Stat blocks, feature sections, testimonials on white canvas

Background #ffffff, border-radius 36px, padding 28px horizontal and vertical, no box-shadow (flat). The extreme 36px radius makes white rectangles read as bubbles rather than panels.

### Muted Surface Card
**Role:** Secondary content blocks and social proof rows

Background #ececee, border-radius 28px, padding 24px all sides, no shadow. Slightly smaller radius and darker fill than white cards creates a quiet depth step without elevation.

### Dark Problem Panel
**Role:** Contrast section listing bottleneck points (e.g. 'We solve the bottlenecks' section)

Background #09090b or #222222, border-radius 28–36px, white and #a1a1aa text. Keyword phrases use Cosmica weight 600–700 while lead-in words use weight 300–400, creating inline weight contrast within single lines.

### Portfolio Tile Card
**Role:** Work showcase grid — full-bleed image with category badges overlaid

Background is the full-bleed project image or a vivid accent fill (#fe45e2 for decorative tiles). Border-radius 36px clipping the image. Badge labels float over the image at bottom-left, using the transparent dark badge variant.

### Dark Overlay Badge
**Role:** Category/skill tags on dark or image backgrounds

Background transparent, text #ffffff, border 1px solid rgba(255,255,255,0.3–0.5), border-radius 12px, padding 4px 8px, Cosmica 12px weight 500.

### Dark Filled Badge
**Role:** Skill/service tags on light backgrounds

Background #3f3f46, text #fafafa, border-radius 12px, padding 4px 8px, Cosmica 12px weight 500.

### Ember Badge (YC Marker)
**Role:** Y Combinator batch identifier on project cards and testimonials

Background #ff5a00, text #ffffff, border-radius 12px, padding 4px 8px, Cosmica 12px weight 600. Its use is exclusive to YC affiliation labels — never repurpose for generic status.

### Email Input + CTA Row
**Role:** Hero email capture form

Input: background #ffffff, text #333333, border transparent, border-radius 14px, padding 12px 12px 12px 16px, Cosmica 14px weight 400, placeholder text in #a1a1aa. Paired inline with a Primary Pill Button (Book demo) in a flex row.

### Announcement Banner
**Role:** Full-width notification strip above the nav

Background #222222 or near-black, rounded-rect pill shape at border-radius 48px, text white Cosmica 14px, with a ghost inline CTA link on the right. Uses backdrop-filter blur for a frosted dark treatment.

### Stat Number Block
**Role:** Key metric highlights (20 000+, 4 000+, 70%, 40%, 60%)

Large numeral at 40–56px Cosmica weight 700 in #09090b or #18181b. Descriptor label below at 12–14px weight 400 in #71717a. No card border — sits directly on section background for raw typographic emphasis.

## Do's and Don'ts

### Do
- Use border-radius 36px for all primary cards and portfolio tiles — this extreme rounding is the system's most recognizable surface trait.
- Apply the multi-layer button shadow (rgba(255,255,255,0.5) inset + rgba(117,123,133,0.4) inset + rgb(44,46,52) 1.5px ring + rgba(0,0,0,0.14) drop) only on the primary #09090b pill button — it defines the CTA's physicality.
- Reserve Ember (#ff5a00) exclusively for YC batch badges and Orchid Flash (#fe45e2) exclusively for single decorative card washes — these vivid colors derive their impact from appearing nowhere else.
- Use Cosmica weight 300–400 for lead-in words and weight 600–700 for the key noun/verb in the same line to create inline tonal contrast without changing size.
- Maintain a 4-step neutral surface stack (Mist → Snow → Fog → Obsidian) per page — don't introduce more than four background tones in a single section view.
- Apply border-radius 12px to all badge and tag components regardless of content length — pill tags use 10000px only for navigation-level controls.
- Use backdrop-filter blur (5–17px range) on overlaid panels and the announcement banner to create depth without hard shadows on light surfaces.

### Don't
- Don't use any color other than #09090b/#222222 for filled button backgrounds — the system has no chromatic CTA color; dark filled + white text is the only primary action pattern.
- Don't reduce card border-radius below 28px — smaller radii break the soft-container language and make surfaces read as generic rectangles.
- Don't introduce new typefaces — Cosmica's weight range handles all hierarchy; adding a second family destroys the single-voice typographic system.
- Don't apply drop shadows to cards — card depth is expressed through background color steps (#ffffff vs #ececee vs #09090b), not elevation shadows.
- Don't use #ff5a00 or #fe45e2 for UI states, hover effects, or repeated interface elements — their power is scarcity; repeated use collapses their impact.
- Don't use letter-spacing overrides on headlines — Cosmica's normal tracking at large sizes is a deliberate choice; tracked-out display text would clash with the type system.
- Don't place text directly on the vivid Orchid Flash (#fe45e2) card background at body size — it is a decorative wash only; any overlaid text must use display weight white.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#f4f4f5` | Page background and default section fill |
| 2 | Card White | `#ffffff` | Primary card surface on the canvas |
| 3 | Card Muted | `#ececee` | Secondary card or tag surface, slightly elevated feel against white |
| 4 | Dark Surface | `#09090b` | Dark card sections, filled button backgrounds, problem-statement panels |

## Elevation

- **Primary Action Button:** `rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px`
- **Card (inset bottom border):** `rgb(228,228,231) 0px 1px 0px 0px inset`
- **Card (subtle drop shadow):** `rgba(0,0,0,0.04) 0px 4px 12px 0px`

## Imagery

Awesomic uses full-bleed product and motion screenshots as portfolio tile fills — the work IS the image, with no lifestyle photography or human-context staging. Tiles are clipped to 36px rounded rectangles, giving raw screen captures a contained, curated feel. Video production tiles use dark cinematic stills (moody red neon on black) cropped tight to the 36px rounded container. Illustration and graphic-design work tiles show vibrant multi-color client deliverables framed inside the same tile shape, creating a gallery-wall effect. Icons throughout the UI are minimal, monochrome, single-stroke or flat fills at ~20px, never decorative. The system is imagery-dependent for the portfolio section but typography-dominant for all informational and conversion sections — roughly 60% text, 40% imagery across the full page.

## Layout

Max-width approximately 1200px, centered on the canvas (#f4f4f5). The hero is a 2-column split: large display headline left (weight 700, 56–64px) with an accented cycling word in a lighter tonal color, and a compact right column with subtext, email input, and CTA. Below the hero, a horizontal logo-strip scrolls client logos at full bleed. Subsequent sections alternate: white-canvas text+card layouts, then a full-width dark panel (#09090b) for problem-statement copy, back to a light canvas for social proof and stat blocks. The portfolio grid is a horizontal scroll row of tall rounded tiles rather than a static grid. Feature/benefit cards use a 2-3 column grid at 36px-radius white cards on the Mist canvas. Section vertical gaps are 80px; internal card padding 24–28px. Navigation is a sticky top bar at ~40px height with inline text links and a black pill 'Book demo' button at the right edge.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #09090b / #18181b
- text (muted): #71717a
- background (canvas): #f4f4f5
- card surface: #ffffff
- border / divider: #ececee / #3f3f46
- accent (badge only): #ff5a00 (YC), #fe45e2 (decorative card)
- primary action: #09090b (filled action)

**Example Component Prompts**

1. **Hero Headline Section**: White or Mist (#f4f4f5) background. Left column: display headline at 56px Cosmica weight 700, color #09090b, normal letter-spacing, line-height 1.12. One word in the headline renders in #a1a1aa at the same size/weight to create cycling accent. Right column: body text at 16px Cosmica weight 400, color #18181b; email input (background #ffffff, border transparent, radius 14px, padding 12px 16px, placeholder #a1a1aa) paired with a pill button (background #09090b, text #ffffff, radius 36px, padding 12px 16px, Cosmica 14px weight 500).

2. **Portfolio Tile**: 36px border-radius container clipping a full-bleed project screenshot. Overlay at bottom-left: project title in Cosmica 20px weight 600 white; category badges below (transparent background, white text, border rgba(255,255,255,0.3), radius 12px, padding 4px 8px, Cosmica 12px weight 500). One tile per grid row may use #fe45e2 as a solid card background instead of an image.

3. **Dark Problem Panel**: Background #09090b, border-radius 36px, padding 28px. Bullet rows in Cosmica 18px, line-height 1.45: lead-in word (e.g. 'Forget about') in #a1a1aa weight 400, followed by key phrase in #ffffff weight 600. Each row preceded by a circle icon in #3f3f46.

4. **Stat Block Row**: On Mist (#f4f4f5) background, no card border. Stat numeral at 40px Cosmica weight 700 color #09090b. Descriptor label at 13px Cosmica weight 400 color #71717a, line-height 1.56, placed directly beneath the numeral with 4px gap.

5. **Skill/Service Badge (dark variant)**: Background #3f3f46, text #fafafa, border-radius 12px, padding 4px 8px, Cosmica 12px weight 500. For YC labels substitute background #ff5a00, text #ffffff.

## Motion Philosophy

Awesomic uses animation expressively but purposefully. Three named scrolling loops (reverseloop, scroll-text, scroll-text-cta) drive the horizontal logo ticker and portfolio scroll strips at a slow 8–50s linear duration — continuous motion implies an always-on, high-volume output. UI micro-interactions (hover states, accordion expand) use 0.2–0.35s ease transitions on transform and opacity only. The one expressive easing (cubic-bezier 0.175, 0.885, 0.32, 1.275 — a mild overshoot spring) is reserved for entrance animations. Never animate color or background-color — only positional and opacity transforms.

## Similar Brands

- **Designjoy** — Same subscription-design-service model with dark filled pill buttons and portfolio-tile-as-hero grid layout
- **Superside** — Full-bleed portfolio tiles, single-typeface system, and dark/light alternating section bands for a design marketplace
- **Arc.dev** — Near-black primary action buttons on white canvas with a graduated gray neutral scale and rounded card containers
- **Contra** — Talent marketplace with portfolio card grids using extreme rounded corners and minimal accent color against achromatic surfaces
- **Framer** — Custom typeface used at all sizes for full system consistency, large rounded cards, and dark filled CTA buttons on a light page

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ink: #18181b;
  --color-graphite: #3f3f46;
  --color-slate: #52525b;
  --color-steel: #71717a;
  --color-ash: #a1a1aa;
  --color-pebble: #d4d4d8;
  --color-fog: #ececee;
  --color-mist: #f4f4f5;
  --color-snow: #ffffff;
  --color-ember: #ff5a00;
  --color-orchid-flash: #fe45e2;

  /* Typography — Font Families */
  --font-cosmica: 'Cosmica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.8;
  --text-body: 14px;
  --leading-body: 1.56;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.28;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 56px;
  --leading-display-sm: 1.12;
  --text-display: 64px;
  --leading-display: 1;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
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
  --spacing-68: 68px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24-28px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 36px;
  --radius-3xl-4: 40px;
  --radius-full: 48px;
  --radius-full-2: 56px;
  --radius-full-3: 64px;
  --radius-full-4: 80px;
  --radius-full-5: 1000px;
  --radius-full-6: 10000px;

  /* Named Radii */
  --radius-hero: 48px;
  --radius-pill: 10000px;
  --radius-cards: 36px (primary) or 28px (compact);
  --radius-icons: 40px;
  --radius-badges: 12px;
  --radius-inputs: 14px;
  --radius-buttons: 36px (pill) or 14-16px (rounded rect);

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset, rgba(117, 123, 133, 0.4) 0px 9px 14px -5px inset, rgb(44, 46, 52) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.14) 0px 4px 6px 0px;
  --shadow-subtle-2: rgb(228, 228, 231) 0px 1px 0px 0px inset;
  --shadow-subtle-3: rgb(255, 255, 255) 0px 0.5px 0px 0px inset;
  --shadow-subtle-4: rgb(255, 255, 255) 0px -0.5px 0px 0px;
  --shadow-subtle-5: rgb(228, 228, 231) 0px -1px 0px 0px;
  --shadow-md: rgba(0, 0, 0, 0.04) 0px 4px 12px 0px;

  /* Surfaces */
  --surface-canvas: #f4f4f5;
  --surface-card-white: #ffffff;
  --surface-card-muted: #ececee;
  --surface-dark-surface: #09090b;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ink: #18181b;
  --color-graphite: #3f3f46;
  --color-slate: #52525b;
  --color-steel: #71717a;
  --color-ash: #a1a1aa;
  --color-pebble: #d4d4d8;
  --color-fog: #ececee;
  --color-mist: #f4f4f5;
  --color-snow: #ffffff;
  --color-ember: #ff5a00;
  --color-orchid-flash: #fe45e2;

  /* Typography */
  --font-cosmica: 'Cosmica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.8;
  --text-body: 14px;
  --leading-body: 1.56;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.28;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 56px;
  --leading-display-sm: 1.12;
  --text-display: 64px;
  --leading-display: 1;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
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
  --spacing-68: 68px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 36px;
  --radius-3xl-4: 40px;
  --radius-full: 48px;
  --radius-full-2: 56px;
  --radius-full-3: 64px;
  --radius-full-4: 80px;
  --radius-full-5: 1000px;
  --radius-full-6: 10000px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset, rgba(117, 123, 133, 0.4) 0px 9px 14px -5px inset, rgb(44, 46, 52) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.14) 0px 4px 6px 0px;
  --shadow-subtle-2: rgb(228, 228, 231) 0px 1px 0px 0px inset;
  --shadow-subtle-3: rgb(255, 255, 255) 0px 0.5px 0px 0px inset;
  --shadow-subtle-4: rgb(255, 255, 255) 0px -0.5px 0px 0px;
  --shadow-subtle-5: rgb(228, 228, 231) 0px -1px 0px 0px;
  --shadow-md: rgba(0, 0, 0, 0.04) 0px 4px 12px 0px;
}
```