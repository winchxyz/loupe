# ClickUp™ — Style Reference
> Violet-lit productivity cockpit on white

**Theme:** light

ClickUp presents a productivity command center on a clean white canvas — a SaaS brand that uses a single vivid violet as its primary voice against an otherwise achromatic interface. The visual rhythm is dense and information-rich: large confident display headlines (Plus Jakarta Sans at 60-76px, weight 800) that occupy generous whitespace, paired with compact body text and tightly-packed product UIs shown as the hero itself. Surfaces are flat with subtle blue-tinted shadows rather than dramatic elevation, and the brand violet (#7b68ee) appears sparingly on primary actions, the logo, and a few accent moments. The overall feel is utilitarian but premium — a product showcase where the software IS the hero, framed by clean typographic hierarchy and a restrained palette punctuated by that single signature purple.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Brand Violet | `#7b68ee` | `--color-brand-violet` | Primary brand color for the logo, primary CTAs, active states, and brand accents — this single violet carries 90% of the chromatic identity |
| Signal Blue | `#0091ff` | `--color-signal-blue` | Secondary accent for badges, icons, and the Agents/Brain feature highlights — a cool counterpoint to the violet, often appearing in conic-gradient sweeps |
| Ultra Violet | `#6647f0` | `--color-ultra-violet` | Deeper violet variant for hover states and selected/active surfaces — gives the brand a darker dimension when needed |
| Muted Violet | `#514b81` | `--color-muted-violet` | Desaturated violet for secondary text, subdued borders, and tonal backgrounds where brand presence is needed without full saturation |
| Midnight Ink | `#090c1d` | `--color-midnight-ink` | Primary heading and body text — a near-black with a cool blue undertone that harmonizes with the violet palette |
| Charcoal | `#292d34` | `--color-charcoal` | Secondary text, icon strokes, and high-frequency border color — the workhorse neutral that defines most UI chrome |
| Carbon | `#202023` | `--color-carbon` | High-contrast neutral action fill for primary buttons on light surfaces. |
| Graphite | `#1a202c` | `--color-graphite` | Subtle heading color variant for lower-prominence headings and dark-on-dark contrast |
| Slate | `#646464` | `--color-slate` | Muted body text, placeholder copy, and secondary navigation text |
| Steel | `#7c828d` | `--color-steel` | Tertiary text and disabled-state labels — a cool gray that recedes without disappearing |
| Fog | `#b3b3b3` | `--color-fog` | Light borders, inactive icons, and dividers on light surfaces |
| Ash | `#838383` | `--color-ash` | Mid-gray for badges, secondary icons, and subtle text annotations |
| Mist | `#d9d9d9` | `--color-mist` | Hairline dividers and table row separators |
| Cloud | `#e8e8e8` | `--color-cloud` | Subtle card borders, ghost-button borders, and light surface tints |
| Paper | `#f8f9fa` | `--color-paper` | Alternate surface background for striped sections and inset cards |
| Frost | `#edf6fd` | `--color-frost` | Light neutral action fill for buttons on dark surfaces |
| Linen | `#e9ebf0` | `--color-linen` | Section background tint for alternating bands — a barely-visible warm gray that creates subtle separation |
| Pure White | `#ffffff` | `--color-pure-white` | Page canvas, card surfaces, and filled button text |
| True Black | `#000000` | `--color-true-black` | Reserved for high-contrast icon fills, SVG strokes, and rare emphasis elements |
| Abyss | `#090909` | `--color-abyss` | Near-black card background for dark surface cards on light pages |
| Violet Glow | `#b38cff` | `--color-violet-glow` | Light violet for decorative strokes, code highlighting, and accent washes |

## Tokens — Typography

### Plus Jakarta Sans — Primary typeface for all UI text — from display headlines (weight 800 at 60-76px) down to navigation and body. The weight 650 (between 600 and 700) is a custom intermediate that gives buttons and subheadings a distinctive confident density. Tight negative tracking scales with size: -0.05em at 76px compresses the headline for impact. · `--font-plus-jakarta-sans`
- **Substitute:** DM Sans or Manrope
- **Weights:** 400, 500, 650, 700, 800
- **Sizes:** 14, 16, 26, 34, 40, 42, 48, 52, 60, 76
- **Line height:** 1.05, 1.10, 1.12, 1.14, 1.18, 1.20, 1.25, 1.43, 1.50
- **Letter spacing:** -3.8px at 76px, -2.0px at 48px, -0.18px at 16px, -0.14px at 14px
- **OpenType features:** `"calt" 0`
- **Role:** Primary typeface for all UI text — from display headlines (weight 800 at 60-76px) down to navigation and body. The weight 650 (between 600 and 700) is a custom intermediate that gives buttons and subheadings a distinctive confident density. Tight negative tracking scales with size: -0.05em at 76px compresses the headline for impact.

### Inter — Secondary typeface for supporting text, fine print, badges, and dense UI labels at 12-19px. Inter appears where information density trumps brand expression — tooltips, small captions, and form fields. · `--font-inter`
- **Substitute:** system-ui or IBM Plex Sans
- **Weights:** 400, 500, 600, 650, 700
- **Sizes:** 8, 9, 12, 13, 14, 15, 16, 17, 18, 19
- **Line height:** 1.00, 1.14, 1.33, 1.37, 1.38, 1.43, 1.50
- **Letter spacing:** -0.76px at 19px, -0.32px at 16px, -0.18px at 14px, -0.16px at 12px
- **OpenType features:** `"calt" 0, "clig" 0, "liga" 0`
- **Role:** Secondary typeface for supporting text, fine print, badges, and dense UI labels at 12-19px. Inter appears where information density trumps brand expression — tooltips, small captions, and form fields.

### Sometype Mono — Monospaced typeface for badge labels, feature tags, and the all-caps micro-copy that marks category labels (e.g. 'Introducing ClickUp 4.0'). The 0.06em positive tracking creates a tracked-out, technical character that contrasts the geometric Plus Jakarta Sans. · `--font-sometype-mono`
- **Substitute:** JetBrains Mono or IBM Plex Mono
- **Weights:** 400, 500
- **Sizes:** 12, 14, 16, 24, 40
- **Line height:** 1.25, 1.29, 1.38, 1.43
- **Letter spacing:** 0.72px at 12px, 0.84px at 14px, 2.4px at 40px
- **Role:** Monospaced typeface for badge labels, feature tags, and the all-caps micro-copy that marks category labels (e.g. 'Introducing ClickUp 4.0'). The 0.06em positive tracking creates a tracked-out, technical character that contrasts the geometric Plus Jakarta Sans.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.43 | -0.14px | `--text-caption` |
| body-sm | 16px | 1.5 | -0.18px | `--text-body-sm` |
| body | 18px | 1.43 | -0.18px | `--text-body` |
| subheading | 26px | 1.25 | -0.52px | `--text-subheading` |
| heading-sm | 40px | 1.18 | -1.6px | `--text-heading-sm` |
| heading | 48px | 1.14 | -2px | `--text-heading` |
| heading-lg | 60px | 1.1 | -3px | `--text-heading-lg` |
| display | 76px | 1.05 | -3.8px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 100 | 100px | `--spacing-100` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 12px |
| pills | 54px |
| badges | 12px |
| buttons | 9px |
| largeCards | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0p...` | `--shadow-subtle` |
| xl | `rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset, rgba(...` | `--shadow-xl` |
| subtle-2 | `rgba(18, 43, 165, 0.04) 0px 1px 1px -0.5px, rgba(18, 43, ...` | `--shadow-subtle-2` |
| sm | `rgba(13, 21, 48, 0.04) 0px 4px 4px 0px` | `--shadow-sm` |
| xl-2 | `rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset` | `--shadow-xl-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 12px

## Components

### Primary Filled Button
**Role:** Main call-to-action

Filled with #202023 (carbon black), white text in Plus Jakarta Sans weight 650 at 16px, 9px border-radius, padding 9px 18px. The subtle blue-tinted shadow (rgba(13,21,48,0.04) 0px 4px 4px 0px) lifts it just enough to feel tappable. No brand violet fill — the primary action is deliberately neutral, letting the violet live in the logo and accents.

### Violet Brand Button
**Role:** Branded action or feature highlight

Filled with #7b68ee, white text, 9px radius, padding 9px 18px. Used selectively for product-specific CTAs tied to the violet brand color rather than generic page actions.

### Pill Tag Button
**Role:** Category filter or feature tag

Very rounded shape at 54px border-radius, padding 3px 12px, light background (#f8f9fa or #ffffff), 1px border in #e8e8e8 or #d9d9d9, Plus Jakarta Sans 14px weight 500. The extreme radius (54px) makes them feel like removable tags rather than buttons.

### Ghost Button
**Role:** Secondary action or nav item

No fill, transparent background, border 1px in #e8e8e8, text in #292d34 at 16px weight 500, 9px radius, padding 9px 18px. Renders as a thin outlined rectangle that recedes against the white canvas.

### Navigation Link
**Role:** Top-level nav items

Text-only in Plus Jakarta Sans 15-16px weight 500, color #292d34, no underline. Paired with a small chevron icon for dropdowns. Padding 8px 12px with 4px vertical spacing.

### Feature Badge
**Role:** Product or category label (e.g. 'Super Agents')

Pill shape with 12px radius, white or violet-tinted background, small Plus Jakarta Sans 13-14px weight 500 or Sometype Mono caps. Often paired with an icon and a right-arrow chevron. Padding 3px 12px.

### Product Icon Tile
**Role:** Feature grid item in the '100+ products' section

Square tile with no fill, centered outlined icon (#7b68ee or #292d34 stroke), Plus Jakarta Sans label 14px below. Arranged in a 7-column grid with even spacing, creating a uniform catalog feel.

### Product UI Card
**Role:** Hero visual or product screenshot container

White surface, 12px border-radius, subtle shadow stack (rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px), padding 0px (screenshot fills edge-to-edge with rounded corners via overflow:hidden). Contains a simulated app interface.

### Feature Highlight Card
**Role:** Three-column value prop (Context Switching/Missing/Stitching)

White surface with very subtle blue-tinted shadow, 12px radius, padding 24px. Contains a decorative illustration at top, then a 26px Plus Jakarta Sans weight 700 heading, then 16px body text in #646464.

### Context Problem Card
**Role:** Pain-point illustration card

Light gray (#f8f9fa) background, 12px radius, padding 16px, contains floating app icons connected by a tangled gray line illustration. Represents fragmented workflow visually.

### Announcement Banner
**Role:** Top-of-page promotional strip

Full-width #f8f9fa or white background, centered text in Plus Jakarta Sans 14-15px weight 500, small chevron link at the end. Very thin vertical padding (8-12px).

### Hero Headline
**Role:** Primary page headline

Plus Jakarta Sans weight 800 at 60-76px, color #090c1d, letter-spacing -3.0 to -3.8px, line-height 1.05-1.10. The extreme weight combined with very tight tracking creates a condensed, high-density headline that dominates the hero without needing color.

### Checklist Item
**Role:** Value prop bullet (Save money, Save time, Create infinite productivity)

Inline flex with small violet checkmark icon (#7b68ee), bold label in #090c1d, then lighter descriptor text in #292d34 at 16px. No bullet points — the checkmark is the only marker.

### Section Divider
**Role:** Visual break between content sections

Whitespace-driven separator at 80px section gaps. Occasionally a 1px #e8e8e8 horizontal rule. No decorative elements — the breathing room IS the divider.

## Do's and Don'ts

### Do
- Use Plus Jakarta Sans weight 800 with -0.05em letter-spacing for all display headlines above 48px
- Reserve #7b68ee violet for the logo, brand moments, and feature highlights — not generic page CTAs
- Use #202023 (carbon) as the primary filled button background — the system trusts neutral over chromatic for action surfaces
- Apply 9px border-radius to buttons and 12px to cards — the 3px delta creates a clear component hierarchy
- Use #e9ebf0 (linen) for alternating section bands to create rhythm without color noise
- Pair every value prop headline with a small violet checkmark icon (#7b68ee) — the check is a signature motif
- Keep body text at 16-18px Plus Jakarta Sans 400 with -0.011em tracking for a dense, scannable reading experience

### Don't
- Don't use #7b68ee as a filled background for generic page CTAs — reserve it for brand-tied moments
- Don't apply shadows heavier than rgba(0,0,0,0.1) — the system uses blue-tinted micro-shadows, not dramatic elevation
- Don't use border-radius larger than 24px on cards — 54px is exclusively for pill tags, and 12px is the card standard
- Don't introduce new accent colors — the palette is deliberately tight: one violet, one blue, and grays
- Don't use weight 400 for headlines — display text must be 700+ to carry the brand's confident density
- Don't fill the page with the conic gradient — it's a hero/showcase device, not a background pattern
- Don't use letter-spacing wider than -0.01em on any text larger than 14px — the system tracks tighter as size increases

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Page background — the dominant surface for most content |
| 1 | Linen Band | `#e9ebf0` | Alternating section background for visual rhythm |
| 2 | Paper | `#f8f9fa` | Inset card surfaces and subtle elevated panels |
| 3 | Frost | `#edf6fd` | Cool-tinted info regions and selected/highlighted states |
| 4 | Carbon | `#202023` | Dark surface cards and inverted sections |

## Elevation

- **Product UI Card:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Elevated Card:** `rgba(18, 43, 165, 0.04) 0px 1px 1px -0.5px, rgba(18, 43, 165, 0.04) 0px 3px 3px -1.5px, rgba(18, 43, 165, 0.04) 0px 6px 6px -3px, rgba(18, 43, 165, 0.04) 0px 12px 12px -6px`
- **Dark Card Inset Highlight:** `rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset`
- **Button:** `rgba(13, 21, 48, 0.04) 0px 4px 4px 0px`

## Imagery

Product UI screenshots are the dominant visual language — the hero is a literal screenshot of the ClickUp app showing a multi-pane workspace with sidebar navigation, task lists, and colored priority badges. These screenshots are presented as living product evidence rather than marketing illustrations. Supporting visuals include: outlined icon grids (7-column uniform layout of product feature icons), tangled-line illustrations representing workflow fragmentation, and floating app-logo clusters with gray connecting threads. There is no photography — no people, no office shots, no lifestyle imagery. Decorative conic-gradient swirls appear sparingly to signal AI/agent features. Icons are outlined with thin (1.5-2px) strokes, monochromatic, and rendered at uniform size within grids.

## Layout

The page model is max-width 1200px centered with generous side padding. The hero uses a split layout: left column holds the headline + CTA + checklist (roughly 45% width), right column holds the product UI screenshot (roughly 55% width). Below the hero, sections alternate between full-width centered text blocks and three-column card grids. Section rhythm is consistent at 80px vertical gaps, with alternating #ffffff and #e9ebf0 backgrounds creating subtle visual bands. The navigation is a single sticky top bar with a left-aligned logo, centered nav links (Brain AI, Product, Solutions, Learn, Pricing, Enterprise), and right-aligned action buttons (Get a Demo, Login, Sign Up). An announcement banner sits above the nav. The '100+ products' section is a dense 7-column icon grid that fills the viewport width. Content density is compact — the design favors information-rich sections with tight spacing over spacious breathing room.

## Agent Prompt Guide

**Quick Color Reference**
- Primary text: #090c1d (Midnight Ink)
- Secondary text: #292d34 (Charcoal)
- Muted text: #646464 (Slate)
- Page background: #ffffff (Pure White)
- Brand accent: #7b68ee (Brand Violet)
- primary action: #202023 (filled action)

**Example Component Prompts**

1. **Hero Section**: White (#ffffff) background. Headline at 60px Plus Jakarta Sans weight 800, #090c1d, letter-spacing -3.0px, line-height 1.10. Subtext at 18px weight 400, #646464. Primary CTA: carbon (#202023) filled button, white text weight 650, 9px radius, padding 9px 18px. Right side: product UI screenshot card with 12px radius and subtle blue-tinted shadow.

2. **Feature Grid Tile**: Center-aligned square tile, no background, outlined icon at 32px in #7b68ee with 1.5px stroke. Label below in Plus Jakarta Sans 14px weight 500, #292d34. Arranged in 7-column grid with 24px gaps.

3. **Pill Tag Button**: Background #f8f9fa, 1px border #d9d9d9, 54px border-radius, padding 3px 12px. Text in Plus Jakarta Sans 14px weight 500, #292d34. No shadow.

4. **Three-Column Value Prop Card**: White surface, 12px radius, padding 24px, subtle shadow (rgba(0,0,0,0.1) 0px 1px 3px 0px). Heading 26px Plus Jakarta Sans weight 700, #090c1d. Body 16px weight 400, #646464.

5. **Announcement Banner**: Full-width #f8f9fa background, centered text 14px Plus Jakarta Sans weight 500, #292d34, with right-arrow chevron link. Vertical padding 8px.

## Similar Brands

- **Linear** — Same product-UI-as-hero approach with a single vivid accent color (Linear's purple/violet parallels ClickUp's #7b68ee) against a near-monochrome white interface
- **Notion** — Similar compact density, product screenshot heroes, and a restrained palette with minimal color noise — though Notion uses a warmer near-black
- **Asana** — Both position product UI screenshots as the hero visual and use tight typographic hierarchy with display-weight headlines over clean white surfaces
- **Monday.com** — Comparable product-catalog grid sections showing feature icons, and a similar use of vibrant accent colors (Monday's multi-color palette vs ClickUp's single violet) against white
- **Airtable** — Same approach of showing the actual product interface in marketing contexts, with comparable typographic confidence and a flat, shadow-light design language

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-brand-violet: #7b68ee;
  --color-signal-blue: #0091ff;
  --color-ultra-violet: #6647f0;
  --color-muted-violet: #514b81;
  --color-midnight-ink: #090c1d;
  --color-charcoal: #292d34;
  --color-carbon: #202023;
  --color-graphite: #1a202c;
  --color-slate: #646464;
  --color-steel: #7c828d;
  --color-fog: #b3b3b3;
  --color-ash: #838383;
  --color-mist: #d9d9d9;
  --color-cloud: #e8e8e8;
  --color-paper: #f8f9fa;
  --color-frost: #edf6fd;
  --color-linen: #e9ebf0;
  --color-pure-white: #ffffff;
  --color-true-black: #000000;
  --color-abyss: #090909;
  --color-violet-glow: #b38cff;

  /* Typography — Font Families */
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sometype-mono: 'Sometype Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.18px;
  --text-body: 18px;
  --leading-body: 1.43;
  --tracking-body: -0.18px;
  --text-subheading: 26px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.52px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -1.6px;
  --text-heading: 48px;
  --leading-heading: 1.14;
  --tracking-heading: -2px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -3px;
  --text-display: 76px;
  --leading-display: 1.05;
  --tracking-display: -3.8px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-w650: 650;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-lg: 9px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 39px;
  --radius-3xl-5: 45px;
  --radius-full: 54px;
  --radius-full-2: 653px;

  /* Named Radii */
  --radius-cards: 12px;
  --radius-pills: 54px;
  --radius-badges: 12px;
  --radius-buttons: 9px;
  --radius-largecards: 24px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl: rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset, rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset;
  --shadow-subtle-2: rgba(18, 43, 165, 0.04) 0px 1px 1px -0.5px, rgba(18, 43, 165, 0.04) 0px 3px 3px -1.5px, rgba(18, 43, 165, 0.04) 0px 6px 6px -3px, rgba(18, 43, 165, 0.04) 0px 12px 12px -6px;
  --shadow-sm: rgba(13, 21, 48, 0.04) 0px 4px 4px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-linen-band: #e9ebf0;
  --surface-paper: #f8f9fa;
  --surface-frost: #edf6fd;
  --surface-carbon: #202023;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-brand-violet: #7b68ee;
  --color-signal-blue: #0091ff;
  --color-ultra-violet: #6647f0;
  --color-muted-violet: #514b81;
  --color-midnight-ink: #090c1d;
  --color-charcoal: #292d34;
  --color-carbon: #202023;
  --color-graphite: #1a202c;
  --color-slate: #646464;
  --color-steel: #7c828d;
  --color-fog: #b3b3b3;
  --color-ash: #838383;
  --color-mist: #d9d9d9;
  --color-cloud: #e8e8e8;
  --color-paper: #f8f9fa;
  --color-frost: #edf6fd;
  --color-linen: #e9ebf0;
  --color-pure-white: #ffffff;
  --color-true-black: #000000;
  --color-abyss: #090909;
  --color-violet-glow: #b38cff;

  /* Typography */
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sometype-mono: 'Sometype Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.18px;
  --text-body: 18px;
  --leading-body: 1.43;
  --tracking-body: -0.18px;
  --text-subheading: 26px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.52px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -1.6px;
  --text-heading: 48px;
  --leading-heading: 1.14;
  --tracking-heading: -2px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -3px;
  --text-display: 76px;
  --leading-display: 1.05;
  --tracking-display: -3.8px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-lg: 9px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 39px;
  --radius-3xl-5: 45px;
  --radius-full: 54px;
  --radius-full-2: 653px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl: rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset, rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset;
  --shadow-subtle-2: rgba(18, 43, 165, 0.04) 0px 1px 1px -0.5px, rgba(18, 43, 165, 0.04) 0px 3px 3px -1.5px, rgba(18, 43, 165, 0.04) 0px 6px 6px -3px, rgba(18, 43, 165, 0.04) 0px 12px 12px -6px;
  --shadow-sm: rgba(13, 21, 48, 0.04) 0px 4px 4px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.08) 0px -32px 64px 0px inset;
}
```