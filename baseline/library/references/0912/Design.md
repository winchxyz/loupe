# Ramp — Style Reference
> dawn-lit financial cockpit. A premium fintech control surface where dark sky opens onto warm paper-white decks, anchored by a single chartreuse ignition button.

**Theme:** light

Ramp's visual system is a financial command center rendered in dawn light: a dramatic gradient sky opens the page, then resolves into warm white surfaces organized around product photography and a single electric lime accent. The palette is overwhelmingly neutral — warm off-whites, deep obsidians, and slate borders — letting the chartreuse CTA carry the only chromatic voice. Lausanne, a custom sans-serif, sets every word with quiet authority at scale, from 64px hero headlines down to 13px captions. Components are built on a strict two-radius system: 4px for functional controls, 12px for cards and surfaces. The page reads as premium and confident, not playful — the lime accent is functional urgency, never decoration.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Lime Signal | `#e4f222` | `--color-lime-signal` | Green supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Cobalt Glow | `#5683d2` | `--color-cobalt-glow` | Hero gradient midpoint, decorative accents, link hover washes. Provides the atmospheric blue that carries the dawn-sky hero treatment |
| Obsidian | `#0c0a08` | `--color-obsidian` | Primary text color, dark canvas surfaces, navigation bar, footer. The near-black that grounds the system with 19.8:1 contrast against white |
| Paper | `#ffffff` | `--color-paper` | Page background in light sections, text on dark surfaces, input fills. The clean canvas that lets product imagery and the lime accent command attention |
| Limestone | `#f4f2f0` | `--color-limestone` | Card surfaces, elevated panels, warm neutral fills. Replaces drop shadows as the separation mechanism in light-mode layouts |
| Charcoal | `#1a1919` | `--color-charcoal` | Elevated dark surfaces, filled dark buttons, card overlays. One step lifted from Obsidian for subtle depth without true black |
| Slate | `#4d505d` | `--color-slate` | Borders, dividers, muted structural elements. Carries a cool undertone that keeps it from competing with the warm Limestone surfaces |
| Fog | `#999ba3` | `--color-fog` | Secondary text, helper copy, muted labels, icon strokes. The 50% gray that handles all de-emphasized content |
| Bone | `#d2cecb` | `--color-bone` | Hairline borders on light surfaces, subtle dividers, card outlines. Warmer than Slate, used where Slate would feel cold against Limestone |

## Tokens — Typography

### Lausanne — Primary typeface for all UI, headings, body, nav, buttons, and display. Lausanne is a custom commissioned sans-serif with optical sizing across 11 steps — its compressed line-height at 64px (0.74-1.05) gives hero headlines an editorial slab feel without switching to a serif. Weight 400 carries everything; 500 is reserved for nav and emphasis. · `--font-lausanne`
- **Substitute:** Inter, Söhne, Neue Haas Grotesk
- **Weights:** 400, 500
- **Sizes:** 10, 13, 14, 16, 18, 20, 24, 28, 40, 48, 64
- **Line height:** 0.74-1.60
- **Letter spacing:** normal across all sizes — the typeface does the work, not tracking
- **OpenType features:** `"ss01"`
- **Role:** Primary typeface for all UI, headings, body, nav, buttons, and display. Lausanne is a custom commissioned sans-serif with optical sizing across 11 steps — its compressed line-height at 64px (0.74-1.05) gives hero headlines an editorial slab feel without switching to a serif. Weight 400 carries everything; 500 is reserved for nav and emphasis.

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.2
- **OpenType features:** `"ss01"`
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| micro | 10px | 1.2 | — | `--text-micro` |
| caption | 13px | 1.46 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.43 | — | `--text-subheading` |
| heading-sm | 20px | 1.38 | — | `--text-heading-sm` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 28px | 1.3 | — | `--text-heading-lg` |
| display-sm | 40px | 1.2 | — | `--text-display-sm` |
| display | 48px | 1.14 | — | `--text-display` |
| display-lg | 64px | 1.05 | — | `--text-display-lg` |

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
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 64 | 64px | `--spacing-64` |
| 76 | 76px | `--spacing-76` |
| 128 | 128px | `--spacing-128` |
| 160 | 160px | `--spacing-160` |
| 176 | 176px | `--spacing-176` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 4px |
| tags | 9999px |
| cards | 12px |
| images | 12px |
| inputs | 4px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Primary Action Button
**Role:** Conversion anchor — the lime ignition

Filled with #e4f222 (Lime Signal), black text in lausanne 500 at 16px, 4px radius. Padding 10px vertical, 20px horizontal. Appears as 'Get started for free' and 'See a demo'. The chartreuse against warm whites creates urgency without aggression.

### Outlined/Ghost Button
**Role:** Secondary navigation action

Transparent background, 1px border in #4d505d (Slate), lausanne 500 at 16px in #0c0a08. 4px radius, 10px/20px padding. Used for 'Sign in' and less critical CTAs.

### Text Link with Arrow
**Role:** Inline navigation affordance

Lausanne 400 at 16px in #0c0a08, followed by a → arrow glyph. 'Learn more →' pattern repeated across product cards. The arrow is part of the text flow, not a separate icon.

### Email Capture Input
**Role:** Lead generation field

White (#ffffff) background, 1px border in #d2cecb (Bone), lausanne 400 at 16px placeholder text in #999ba3 (Fog). 4px radius, 16px horizontal padding, 14px vertical. Fused with the primary button as a combined input+CTA unit.

### Product Feature Card
**Role:** Feature discovery unit in the 'Get to know Ramp' grid

Limestone (#f4f2f0) background, 12px radius, 24px padding. Contains a bold heading (lausanne 500, 20px), descriptor (lausanne 400, 16px, Fog), a 'Learn more →' link, and a product image at the bottom with 12px radius. Arranged in a 4-column grid with 24px gaps.

### Customer Story Photo Card
**Role:** Social proof through vertical-specific photography

Full-bleed photograph with 12px radius, 220-280px height. Category label ('STUDIOS', 'RETAIL', 'FINANCIAL SERVICES') overlaid top-left in lausanne 500 13px white. Subcategory pill at bottom-left. No drop shadow — the image itself provides visual weight.

### Category Tag/Pill
**Role:** Segment classifier on customer cards

Semi-transparent dark overlay (Charcoal at 60% opacity), lausanne 500 at 13px white, 9999px radius, 4px vertical and 10px horizontal padding. Floats over photography.

### Navigation Bar
**Role:** Primary site navigation

Transparent over hero gradient, switches to Obsidian (#0c0a08) on scroll. Logo left ('ramp' + chartreuse triangle mark), nav links center (Products, Solutions, Customers, Resources, Pricing with dropdown carets), actions right (Sign in ghost + 'See a demo' lime). 4px radius on all interactive elements.

### Social Proof Badge
**Role:** Trust signal in hero

Compact star icon + '2,000+ 5 star reviews' in lausanne 400 at 14px in #ffffff (on dark hero). The star is the G2 logo mark. Sits above the hero headline as a credibility anchor.

### Trust Logo Bar
**Role:** Enterprise credibility strip

Single row of 10+ customer logos (Quora, Visa, Complex, Stripe, CBRE, SoulCycle, Notion, Discord, GoodRx, Barry's, Eventbrite) in grayscale at uniform height (~24px). No logos in color — the bar is intentionally desaturated to keep the lime accent unique.

### Product Device Mockup
**Role:** Multi-platform product showcase in hero

Composite of a laptop (centered, slight 3D angle), a phone (right, tilted), and a physical card (foreground, dark with white Ramp logo). Laptop displays the Spend Intelligence dashboard with line charts. The layered device composition communicates desktop + mobile + physical card capability in a single visual.

### Section Heading Block
**Role:** Editorial section opener

Centered headline in lausanne 400 at 48-64px, Obsidian (#0c0a08). Subheadline in lausanne 400 at 18px, Fog (#999ba3). 32px gap between headline and subhead. Frequently followed by a single text link with arrow as tertiary action.

## Do's and Don'ts

### Do
- Use #e4f222 (Lime Signal) exclusively for primary action buttons and active states — no text, icons, or decorative fills
- Apply 4px radius to all functional controls (buttons, inputs, nav items) and 12px to all surfaces (cards, images) — never mix within a category
- Set hero headlines at 48-64px in lausanne 400 with line-height 1.05-1.14 for editorial impact
- Use the blue gradient (#0c0a08 → #5683d2 → #f4f2f0) only for hero openers and never repeat it on interior sections
- Separate light-mode cards with a Limestone (#f4f2f0) fill against the Paper (#ffffff) canvas rather than drop shadows
- Pair every CTA with an arrow glyph (→) to reinforce clickability and directional flow
- Keep all customer logos in the trust bar grayscale — chromatic logos would compete with the lime accent

### Don't
- Don't use #e4f222 for body text, icons, borders, or backgrounds — it is action-only and loses impact if diluted
- Don't apply drop shadows to cards or surfaces — the warm surface layering is the elevation system
- Don't use system fonts or serifs for headlines — lausanne with the "ss01" feature is non-negotiable for brand recognition
- Don't round buttons to 12px or cards to 4px — the dual-radius system is what makes the geometry feel intentional
- Don't place the lime CTA on the dark hero gradient where it loses contrast — keep it on light surfaces where the chartreuse pops
- Don't use pure black (#000000) for text — Obsidian (#0c0a08) is warmer and reads as premium rather than flat
- Don't use the Cobalt Glow (#5683d2) for CTAs or text links — it is atmospheric decoration for the hero gradient only

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#ffffff` | Base page background for all light-mode sections |
| 1 | Limestone Card | `#f4f2f0` | Product feature cards, elevated content panels |
| 2 | Charcoal Overlay | `#1a1919` | Dark elevated surfaces, filled dark buttons, image overlays |
| 3 | Obsidian Ground | `#0c0a08` | Deepest surface for navigation, footer, and hero dark zones |

## Elevation

- **Navigation bar glass edge:** `inset 0 0 2px 0 rgba(255, 255, 255, 0.6)`

## Imagery

Product photography dominates: the hero composites a laptop (Spend Intelligence dashboard with multi-line charts in pastel blues and pinks), a tilted phone (dark-mode mobile UI), and a physical Ramp card (dark with white logo). Product feature cards use contained screenshots and conceptual photography (a hand holding a phone scanning, a document upload interface). Customer story cards use full-bleed lifestyle photography with people — diverse, candid, mid-action, color-rich. All imagery is treated with 12px corners; no drop shadows or vignettes. Icons are minimal: a small star (G2 rating), a triangle mark in the logo, and → arrows. The visual language is product-confident, not lifestyle-aspirational.

## Layout

Max-width 1200px centered container with generous outer margins. The page follows a three-act structure: (1) a full-bleed dark hero with a blue-to-white gradient sky, left-aligned headline and CTA, right-aligned multi-device product mockup; (2) a centered 'Get to know Ramp' heading over a 4-column card grid with 24px gaps, each card stacking title, description, link, then image; (3) a horizontally-scrolling customer story carousel with overlapping photo cards. Section rhythm alternates between dark (hero) and light (all subsequent sections) with 80px vertical gaps. The trust logo bar acts as a visual bridge between the hero and the feature grid, centered as a single row. Navigation is a top bar that sits transparent over the hero and shifts to Obsidian on scroll.

## Agent Prompt Guide

## Quick Color Reference
- Text: #0c0a08 (Obsidian)
- Background: #ffffff (Paper)
- Card surface: #f4f2f0 (Limestone)
- Border: #d2cecb (Bone) on light, #4d505d (Slate) on dark
- Accent: #e4f222 (Lime Signal)
- primary action: no distinct CTA color

## Example Component Prompts

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

2. **Product Feature Card**: Limestone (#f4f2f0) background, 12px radius, 24px padding. Heading at 20px lausanne 500, #0c0a08. Body at 16px lausanne 400, #999ba3. 'Learn more →' link at 16px lausanne 400, #0c0a08, with arrow as part of text. Product image at bottom, 12px radius, full card width.

3. **Customer Story Card**: Full-bleed photo, 12px radius, 260px height. Category label top-left in a Charcoal pill (60% opacity, 9999px radius, lausanne 500 13px white, 4px/10px padding). Subcategory label bottom-left in same pill style.

4. **Trust Logo Bar**: Single horizontal row, centered, logos at 24px height, all rendered in #999ba3 (Fog) grayscale. 40px horizontal gaps between logos. No chromatic logos, no labels, no borders.


## Similar Brands

- **Mercury** — Same fintech-premium positioning with a single accent color, dark-to-light hero transition, and warm neutral card surfaces replacing drop shadows
- **Brex** — Similar card-based feature grid layout, full-bleed customer photography, and a restrained palette that lets one accent color own conversion moments
- **Linear** — Same strict dual-radius system (small for controls, larger for surfaces), custom sans-serif typography at large display sizes, and avoidance of drop shadows in favor of surface color shifts
- **Plaid** — Same multi-device product mockup treatment in the hero (laptop + phone + card), centered section headings with arrow-link CTAs, and a trust-logo bar as a credibility bridge

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-lime-signal: #e4f222;
  --color-cobalt-glow: #5683d2;
  --color-obsidian: #0c0a08;
  --color-paper: #ffffff;
  --color-limestone: #f4f2f0;
  --color-charcoal: #1a1919;
  --color-slate: #4d505d;
  --color-fog: #999ba3;
  --color-bone: #d2cecb;

  /* Typography — Font Families */
  --font-lausanne: 'Lausanne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 10px;
  --leading-micro: 1.2;
  --text-caption: 13px;
  --leading-caption: 1.46;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.38;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 40px;
  --leading-display-sm: 1.2;
  --text-display: 48px;
  --leading-display: 1.14;
  --text-display-lg: 64px;
  --leading-display-lg: 1.05;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

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
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-176: 176px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 7.8px;
  --radius-xl: 12px;

  /* Named Radii */
  --radius-nav: 4px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-images: 12px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset;

  /* Surfaces */
  --surface-paper-canvas: #ffffff;
  --surface-limestone-card: #f4f2f0;
  --surface-charcoal-overlay: #1a1919;
  --surface-obsidian-ground: #0c0a08;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-lime-signal: #e4f222;
  --color-cobalt-glow: #5683d2;
  --color-obsidian: #0c0a08;
  --color-paper: #ffffff;
  --color-limestone: #f4f2f0;
  --color-charcoal: #1a1919;
  --color-slate: #4d505d;
  --color-fog: #999ba3;
  --color-bone: #d2cecb;

  /* Typography */
  --font-lausanne: 'Lausanne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 10px;
  --leading-micro: 1.2;
  --text-caption: 13px;
  --leading-caption: 1.46;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.38;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.3;
  --text-display-sm: 40px;
  --leading-display-sm: 1.2;
  --text-display: 48px;
  --leading-display: 1.14;
  --text-display-lg: 64px;
  --leading-display-lg: 1.05;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-176: 176px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 7.8px;
  --radius-xl: 12px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset;
}
```