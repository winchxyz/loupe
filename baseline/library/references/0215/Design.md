# Notion — Style Reference
> Midnight co-working command center — a dark studio at 2am where soft cream desks hold luminous white cards lit by cobalt-blue instrument panels.

**Theme:** mixed

Notion operates as a midnight co-working command center: a deeply saturated midnight-navy hero dissolves into warm cream content surfaces, with cobalt-blue actions that pop like switched-on instrument panels. The design is typographically confident, using a custom humanist sans (Notion Inter) at all UI levels paired with occasional Lyon Text serif flourishes for editorial warmth. Color is rationed — most of the page lives in near-black ink and warm off-white, reserving chromatic energy for CTA fills, emoji-icon accents, badge highlights, and decorative card borders. Components are soft and rounded (12px cards, 5px inputs, pill badges) with almost no drop shadow; the depth comes from surface contrast (dark navy → cream → white card) rather than elevation. The overall feel is a working studio that stays open after hours — functional, quiet, slightly nocturnal.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Navy | `#02093a` | `--color-midnight-navy` | Hero and feature-section canvas — the signature dark surface that makes white headlines and cobalt CTAs feel like glowing panels in a night-shift control room |
| Cobalt Blue | `#455dd3` | `--color-cobalt-blue` | Violet action color for filled buttons, selected navigation states, and focused conversion moments. |
| Signal Blue | `#0075de` | `--color-signal-blue` | Outlined action borders, inline text links, and chromatic hover states — a slightly cooler blue for secondary interactivity |
| Ice Blue | `#62aef0` | `--color-ice-blue` | Blue outline accent for tags, dividers, and focused UI edges |
| Info Blue | `#097fe8` | `--color-info-blue` | Semantic info badges and accent borders on dark surfaces |
| Indigo | `#2537b1` | `--color-indigo` | Decorative illustration strokes, SVG accent fills, gradient transition points |
| Deep Indigo | `#213183` | `--color-deep-indigo` | Hover/pressed state of Cobalt Blue on dark surfaces |
| Obsidian | `#000000` | `--color-obsidian` | Primary text, heavy borders, high-contrast strokes |
| Ink | `#0b0b0b` | `--color-ink` | Primary text on light surfaces, card borders, strong dividers |
| Charcoal | `#31302e` | `--color-charcoal` | Navigation text, dense bordered text blocks, tertiary heading color |
| Warm Gray | `#615d59` | `--color-warm-gray` | Muted body text, icon strokes, helper captions on light backgrounds |
| Stone | `#a39e98` | `--color-stone` | Disabled states, secondary icon fills, low-emphasis borders |
| Silver | `#c6c6c5` | `--color-silver` | Subtle borders, placeholders, divider hairlines on light surfaces |
| Cream | `#f6f5f4` | `--color-cream` | Page background, off-white content canvas, the warm neutral that makes navy sections feel deliberate |
| Paper White | `#ffffff` | `--color-paper-white` | Card surfaces, button text, input fields — the clean reading surface |
| Ice Wash | `#f2f9ff` | `--color-ice-wash` | Soft info-badge background wash paired with Info Blue text |

## Tokens — Typography

### Notion Inter — Primary interface and heading family — the only sans used across the entire product surface, from 12px helper text to 64px hero headlines. Tabular lining numerals and localized forms are always on. Weight 600–700 carries headings and button labels; weight 400 carries body and descriptions. · `--font-notion-inter`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12, 14, 15, 16, 20, 22, 24, 26, 40, 42, 54, 64
- **Line height:** 1.14–1.50 (UI), 1.20 (headings), 1.04–1.14 (display)
- **Letter spacing:** -0.0360em at 64px, -0.0350em at 54px, -0.0330em at 42px, -0.0240em at 40px, -0.0110em at 26px, -0.0060em at 24px, 0.0100em at 12px
- **OpenType features:** `"lnum" 0, "locl" 0`
- **Role:** Primary interface and heading family — the only sans used across the entire product surface, from 12px helper text to 64px hero headlines. Tabular lining numerals and localized forms are always on. Weight 600–700 carries headings and button labels; weight 400 carries body and descriptions.

### Lyon Text — Sparingly used editorial serif at 32px for moments that need a magazine-cover feel — never repeated in dense UI. Its appearance is a deliberate counterpoint to the otherwise all-sans system. · `--font-lyon-text`
- **Substitute:** Source Serif Pro
- **Weights:** 400
- **Sizes:** 32
- **Line height:** 1.25
- **Role:** Sparingly used editorial serif at 32px for moments that need a magazine-cover feel — never repeated in dense UI. Its appearance is a deliberate counterpoint to the otherwise all-sans system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | -0.22px | `--text-subheading` |
| heading-sm | 24px | 1.27 | -0.14px | `--text-heading-sm` |
| heading | 26px | 1.23 | -0.29px | `--text-heading` |
| heading-lg | 42px | 1.14 | -1.39px | `--text-heading-lg` |
| display | 64px | 1.04 | -2.3px | `--text-display` |

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 12px |
| pills | 9999px |
| images | 12px |
| inputs | 5px |
| buttons | 5px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) ...` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Primary CTA Button (Cobalt Fill)
**Role:** Highest-emphasis action — the only chromatic filled button in the system

Background #455dd3, white text at 14px/600, 5px radius, 8px vertical × 16px horizontal padding. Always paired with a ghost secondary beside it. The cobalt fill is deliberately cooler than typical SaaS indigo — it reads as 'on' rather than 'important'.

### Ghost Text Link Button
**Role:** Secondary action that defers to the primary CTA visually

No background, no border. White text at 14px/500 on dark surfaces, Ink (#0b0b0b) text on light surfaces. Optional underline on hover. Used for 'Request a demo' and all low-commitment navigation.

### Outlined Action Button (Signal Blue)
**Role:** Tertiary action with a chromatic border to distinguish from neutral ghost buttons

Transparent background, 1.5px #0075de border, #0075de text at 14px/500, 5px radius, 8px × 16px padding. Used when a ghost button needs more presence without competing with the cobalt primary.

### Pill Badge (Info)
**Role:** Small status indicator — 'New', 'Beta', category tags

Light blue (#f2f9ff) background with Info Blue (#097fe8) text at 12px/500, 9999px radius, 2px × 8px padding. The pill geometry is reserved for badges and small tags — never used for buttons.

### Announcement Banner
**Role:** Slim top-of-page bar for time-sensitive promos (developer events, launches)

Thin strip above the main navigation, dark Ink (#0b0b0b) background, white text at 13px/500, dismissable × icon at the right edge. Padding 8px vertical.

### Top Navigation Bar
**Role:** Persistent site navigation

Transparent over the midnight hero, 8px-radius dropdowns for menu flyouts, 14px/500 nav items in white on dark and Ink on light. 'Get Notion free' sits in the top-right as a 5px-radius Cobalt button.

### Product UI Screenshot Card
**Role:** Hero visual — embeds a realistic product mockup that dominates the dark canvas

White surface with 12px radius, five-layer ambient shadow stack, 1px Ink hairline border. Positioned center-stage, overlapping the midnight background. The product frame is a real Notion workspace — no abstract illustration.

### Feature Card (Paper White)
**Role:** Default content card on the cream page background

White (#ffffff) surface, 12px radius, 24px padding, no shadow. Optional 1px Silver (#c6c6c5) hairline border. Houses an emoji or small icon at the top, bold title, supporting description.

### Accent-Bordered Feature Card
**Role:** Highlighted feature card that needs to stand out from its neighbors

White surface, 12px radius, 24px padding, but with a 4px solid colored top border (peach, yellow, mint — one of several accent hues). Used to anchor the first card in a feature row.

### Dark Feature Card (Midnight)
**Role:** Inverted card for emphasis sections on the cream page

#02093a background, white text, 12px radius, 24px padding, no shadow. Hosts an emoji icon and a short CTA link in Cobalt Blue.

### Emoji Icon Tile
**Role:** Compact icon+label card for grid sections

White surface, 12px radius, 16px padding, 36px emoji rendered in color at the top-left, 14px/600 title and optional arrow link. Used in tight 5-column rows.

### Section Heading
**Role:** Top-of-section title in Ink or white depending on surface

Notion Inter weight 700 at 40–42px, tight tracking (-1.39px at 42px), line-height 1.14. Ends with a period on hero/feature headings — 'Meet the night shift.', 'Keep work moving 24/7.' — the trailing period is a signature tic.

### Logo Trust Bar
**Role:** Social-proof row of customer logos

Evenly spaced monochrome wordmarks in white (on dark sections) or Charcoal (on light sections), 14–16px height, with optional 'Trusted by 98% of the Forbes Cloud 100' caption above. Logos are desaturated — no brand color leakage.

### Input Field
**Role:** Form input and search fields

White surface, 5px radius, 6px vertical × 12px horizontal padding, 1px Silver (#c6c6c5) border, Ink text at 14px. Focus ring uses Cobalt Blue (#455dd3) at 2px outline.

### Footer
**Role:** Site footer with link columns and legal text

Midnight Navy background on dark pages, Cream on light pages. White or Charcoal text, 14px link columns, 12px/500 legal caption. No drop shadow.

## Do's and Don'ts

### Do
- Use Cobalt Blue (#455dd3) exclusively for the single primary CTA on any given view — never two filled chromatic buttons side by side
- Alternate between Midnight Navy sections and Cream sections to create the dark-to-light rhythm; full-page cream is as wrong as full-page navy
- End hero and section headlines with a period — 'Meet the night shift.', 'Keep work moving 24/7.'
- Apply pill (9999px) radius only to badges and small tags; use 12px for all cards and 5px for all buttons and inputs
- Use emoji icons in their full native color on white feature cards — they are the chromatic accent system for grids, not decorative illustrations
- Pair every primary CTA with a ghost text link to its right — 'Get Notion free' + 'Request a demo' is the standard action pair
- Reserve Lyon Text for one editorial moment per page (a pull quote or a magazine-style section title); never use it in dense UI

### Don't
- Don't use drop shadows on standard cards — depth must come from surface contrast (navy → cream → white), not blur
- Don't introduce new chromatic colors outside the Midnight Navy / Cobalt / Signal Blue / Ice Blue family; the palette is rationed
- Don't use 8px radius on cards (it belongs to nav) or 12px radius on buttons (it belongs to cards) — radii are role-specific
- Don't stack the Cobalt primary CTA above a secondary filled button; always demote secondary to ghost or outlined
- Don't render customer logos in their brand colors — desaturate to white on dark and Charcoal on light
- Don't use Lyon Text at sizes other than 32px — it's an editorial accent, not a body face
- Don't break the trailing-period headline pattern; it's the single most recognizable verbal tic and removing it kills the voice

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Midnight Canvas | `#02093a` | Hero and dark feature sections — the signature nocturnal surface |
| 1 | Cream Page | `#f6f5f4` | Default body content background — warm, slightly off-white to avoid clinical starkness |
| 2 | Paper Card | `#ffffff` | Elevated card surfaces for features, testimonials, product UI embeds |
| 3 | Dark Card | `#02093a` | Inverted cards on light backgrounds for contrast and emphasis |

## Elevation

- **Product UI Embed Card:** `rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px`

## Imagery

Visuals are dominated by realistic product UI screenshots — actual Notion workspace captures (Ramp HQ kanban, Q&A tables, chat windows) embedded as large rounded cards on the midnight hero and cream content sections. No stock photography, no lifestyle imagery, no abstract illustration backgrounds. The only graphical elements beyond the product UI are small colorful emoji icons (🤖 🛠️ 🧑‍🚒 🏗️ 🦺) used as functional icons in feature card grids — they provide the only chromatic energy in the white card rows. Background graphics on the dark hero consist of thin, slightly-glowing curved lines and small floating emoji illustrations in muted cobalt and ice blue — atmospheric scaffolding, not focal content. The design language is overwhelmingly product-screenshot-centric: the workspace IS the marketing.

## Layout

Full-bleed dark hero section transitions into a max-width 1200px centered content column on Cream (#f6f5f4). The hero stacks vertically: announcement banner at the very top, transparent nav bar, centered headline + subhead + dual CTA, then a wide product UI screenshot that extends nearly to viewport edges. Below the hero, a logo trust bar spans full-width in white text on midnight. Content sections alternate: large left-aligned section heading (40–42px weight 700), followed by a 2-column or grid arrangement of feature cards. The 'Custom Agents' section uses a 1+1 layout — a single highlighted card with colored top border on the left, a wider illustrated product card on the right. The 'See what Custom Agents can do' row is a 5-column tight grid of icon tiles. The 'Ask your on-demand assistants' section returns to a 2-column layout with a dark Midnight card on the left and a yellow-tinted illustrated card on the right. Vertical rhythm is generous — 80px between major sections — giving the dark-to-light alternation room to breathe.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0b0b0b (on light) / #ffffff (on dark)
- background: #f6f5f4 (page) / #02093a (dark sections) / #ffffff (cards)
- border: #c6c6c5 (hairline) / #0b0b0b (strong)
- accent: #62aef0 (Ice Blue)
- primary action: #ffffff (filled action)
- link: #0075de (Signal Blue)

**3-5 Example Component Prompts**

1. **Hero Section**: Midnight Navy (#02093a) background spanning full viewport. Centered headline at 64px Notion Inter weight 700, white, letter-spacing -2.30px, ending with a period. Subtext at 16px weight 400, warm-gray (#a39e98). Dual actions: Cobalt (#455dd3) filled button 'Get Notion free' (14px/600 white, 5px radius, 8px×16px padding) + ghost text link 'Request a demo' (white, 14px/500). Below: a 12px-radius white card containing a realistic product UI screenshot, with a five-layer ambient shadow stack (rgba 0.01→0.05, 1px→23px blur steps).

2. **Feature Card Row on Cream Page**: Cream (#f6f5f4) page background. Section heading at 42px Notion Inter weight 700, Ink (#0b0b0b), letter-spacing -1.39px, ending with a period. Below: a 5-column grid of white (#ffffff) emoji icon tiles, each 12px radius, 16px padding, containing a 36px colored emoji + 14px/600 Ink title + 14px/400 Warm Gray description. First tile has a 4px solid peach top border.

3. **Pill Badge + Outlined Action**: A Pill Badge with 9999px radius, #f2f9ff background, #097fe8 text at 12px/500, labeled 'New'. Beside it, an Outlined Action Button: transparent background, 1.5px #0075de border, #0075de text at 14px/500, 5px radius, 8px×16px padding.

4. **Dark Inverted Feature Card**: Midnight Navy (#02093a) card, 12px radius, 24px padding, no shadow. 36px emoji icon at the top, white title at 20px/600, white description at 14px/400, Cobalt Blue (#455dd3) text link at 14px/500 with right arrow.

5. **Logo Trust Bar**: Full-width bar on Midnight Navy background. Above: 'Trusted by 98% of the Forbes Cloud 100' caption in 12px/500 white. Below: a single row of 8–9 customer wordmarks rendered in white at ~16px height, evenly distributed across 1200px max-width with 32px gaps.

## Visual Identity Notes

The 'Meet the night shift.' headline is the most identifiable verbal pattern in the system — short, period-terminated, and present-tense. The emoji-as-icon approach (🤖 🛠️ 🦺) is deliberately casual: it signals approachability in a way that line-icons cannot. The hero product screenshot is never a marketing render — it's a literal capture of Notion's own interface filled with fictional-but-realistic workspace content, so the product is always demonstrating itself. The midnight-to-cream alternation is the structural backbone: every major content section either sits on Midnight Navy or on Cream, never on a third neutral, so the eye can always tell which 'mode' it's in.

## Similar Brands

- **Linear** — Same dark-navy hero → light content alternation, same tight letter-spacing on display headings, same restrained shadow-free card treatment with 12px radii
- **Stripe** — Same period-terminated editorial headlines, same single-accent-blue CTA discipline, same product-screenshot-as-hero philosophy rather than abstract illustration
- **Vercel** — Same black/navy canvas with minimal chromatic punctuation, same Notion Inter-grade custom humanist sans at all UI levels
- **Figma** — Same emoji-as-functional-icon approach in feature grids, same soft 12px-radius cards on warm off-white page background
- **Arc Browser** — Same confidently mixed dark-hero + cream-content rhythm, same color rationing where chromatic accents appear only on specific interactive elements

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-midnight-navy: #02093a;
  --color-cobalt-blue: #455dd3;
  --color-signal-blue: #0075de;
  --color-ice-blue: #62aef0;
  --color-info-blue: #097fe8;
  --color-indigo: #2537b1;
  --color-deep-indigo: #213183;
  --color-obsidian: #000000;
  --color-ink: #0b0b0b;
  --color-charcoal: #31302e;
  --color-warm-gray: #615d59;
  --color-stone: #a39e98;
  --color-silver: #c6c6c5;
  --color-cream: #f6f5f4;
  --color-paper-white: #ffffff;
  --color-ice-wash: #f2f9ff;

  /* Typography — Font Families */
  --font-notion-inter: 'Notion Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-text: 'Lyon Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.14px;
  --text-heading: 26px;
  --leading-heading: 1.23;
  --tracking-heading: -0.29px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -1.39px;
  --text-display: 64px;
  --leading-display: 1.04;
  --tracking-display: -2.3px;

  /* Typography — Weights */
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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-180: 180px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 5px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 12px;
  --radius-pills: 9999px;
  --radius-images: 12px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px;

  /* Surfaces */
  --surface-midnight-canvas: #02093a;
  --surface-cream-page: #f6f5f4;
  --surface-paper-card: #ffffff;
  --surface-dark-card: #02093a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-midnight-navy: #02093a;
  --color-cobalt-blue: #455dd3;
  --color-signal-blue: #0075de;
  --color-ice-blue: #62aef0;
  --color-info-blue: #097fe8;
  --color-indigo: #2537b1;
  --color-deep-indigo: #213183;
  --color-obsidian: #000000;
  --color-ink: #0b0b0b;
  --color-charcoal: #31302e;
  --color-warm-gray: #615d59;
  --color-stone: #a39e98;
  --color-silver: #c6c6c5;
  --color-cream: #f6f5f4;
  --color-paper-white: #ffffff;
  --color-ice-wash: #f2f9ff;

  /* Typography */
  --font-notion-inter: 'Notion Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-text: 'Lyon Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.14px;
  --text-heading: 26px;
  --leading-heading: 1.23;
  --tracking-heading: -0.29px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -1.39px;
  --text-display: 64px;
  --leading-display: 1.04;
  --tracking-display: -2.3px;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-180: 180px;

  /* Border Radius */
  --radius-md: 5px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px;
}
```