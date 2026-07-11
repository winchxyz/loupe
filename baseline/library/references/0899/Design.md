# Dub — Style Reference
> engineer's whiteboard with neon sticky tabs

**Theme:** light

Dub is a near-monochrome product surface dressed for marketing: a white canvas, hairline #e5e5e5 borders doing the structural work, black filled CTAs, and three small color tabs (orange, green, violet) that tag product capabilities. The signature is restraint — the page reads like a technical editorial layout, not a glossy SaaS brochure, with a compact density and confident Satoshi display headlines that do the talking. Product UI screenshots are the dominant visual; the chrome around them is deliberately quiet. Color is used as a labeling system, not as atmosphere, which keeps the system extensible: any new feature category slots into the orange/green/violet/pink/yellow palette without redecorating the page.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Page background, card surfaces, button text on dark fills |
| Ink Black | `#0a0a0a` | `--color-ink-black` | Primary headings, body text, and icon fills on light surfaces. Do not promote it to the primary CTA color |
| Carbon | `#171717` | `--color-carbon` | Secondary text, body emphasis, dark surfaces |
| Smoke 50 | `#f5f5f5` | `--color-smoke-50` | Elevated surface, secondary button fill, subtle wash backgrounds |
| Smoke 100 | `#e5e5e5` | `--color-smoke-100` | Default border, hairline dividers, input borders — the structural neutral |
| Smoke 200 | `#d4d4d4` | `--color-smoke-200` | Stronger borders, card outlines, button borders |
| Smoke 400 | `#a3a3a3` | `--color-smoke-400` | Disabled state, placeholder text, muted icons |
| Smoke 500 | `#737373` | `--color-smoke-500` | Body helper text, secondary labels |
| Smoke 600 | `#525252` | `--color-smoke-600` | Subheadings, body emphasis, icon stroke |
| Smoke 700 | `#404040` | `--color-smoke-700` | Strong body text, dark icon fills |
| Ember Orange | `#ea580c` | `--color-ember-orange` | Orange text accent for links, tags, and emphasized short phrases. |
| Pulse Green | `#16a34a` | `--color-pulse-green` | Green text accent for links, tags, and emphasized short phrases |
| Arc Violet | `#7c3aed` | `--color-arc-violet` | Affiliate Programs feature tab, violet icon accent — programs/partner signal |
| Circuit Blue | `#3b82f6` | `--color-circuit-blue` | Link strokes, focus rings, secondary interactive strokes |
| Mint Wash | `#dcfce7` | `--color-mint-wash` | Gray outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Slate Ink | `#111827` | `--color-slate-ink` | Secondary body text, navigation labels, and subdued headings. Use as a supporting accent, not as a status color |
| Primary Action Fill | `#000000` | `--color-primary-action-fill` | High-contrast neutral action fill for primary buttons on light surfaces. Use as the primary filled action background |

## Tokens — Typography

### Satoshi — Display headings — hero, section titles. Medium weight only (no bold), tight line-height, and a geometric construction give headlines a calm, technical confidence rather than SaaS shout. Substitute with 'Inter' at 600 or 'General Sans'. · `--font-satoshi`
- **Substitute:** General Sans
- **Weights:** 500
- **Sizes:** 36px, 40px, 48px
- **Line height:** 1.00, 1.11, 1.15
- **Letter spacing:** -0.02em
- **Role:** Display headings — hero, section titles. Medium weight only (no bold), tight line-height, and a geometric construction give headlines a calm, technical confidence rather than SaaS shout. Substitute with 'Inter' at 600 or 'General Sans'.

### Inter — Body, UI, navigation, subheadings, buttons — the workhorse. Compact 1.4-1.5 line-heights create density without crowding. 600 is reserved for button labels and small-caps-feel emphasis; 500 carries nav and labels; 400 is the body default. · `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 8px, 10px, 11px, 12px, 13px, 14px, 16px, 18px, 20px, 24px, 30px
- **Line height:** 1.00, 1.33, 1.38, 1.40, 1.43, 1.50, 1.56, 2.15, 2.80
- **Role:** Body, UI, navigation, subheadings, buttons — the workhorse. Compact 1.4-1.5 line-heights create density without crowding. 600 is reserved for button labels and small-caps-feel emphasis; 500 carries nav and labels; 400 is the body default.

### GeistMono — Monospace UI — URL slugs, API keys, tag chips, code-like inline data. Tightly confined to functional text where variable-width would break alignment. · `--font-geistmono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 24px
- **Line height:** 1.00, 1.33, 1.43
- **Role:** Monospace UI — URL slugs, API keys, tag chips, code-like inline data. Tightly confined to functional text where variable-width would break alignment.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.4 | — | `--text-heading-sm` |
| heading | 36px | 1.15 | -0.72px | `--text-heading` |
| heading-lg | 48px | 1.15 | -0.96px | `--text-heading-lg` |

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
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 112 | 112px | `--spacing-112` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 12px |
| pills | 9999px |
| inputs | 8px |
| buttons | 9999px |
| featureCards | 16px |
| announcementBanner | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |
| sm | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0...` | `--shadow-sm` |
| sm-2 | `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset` | `--shadow-sm-2` |
| subtle-2 | `rgba(0, 0, 0, 0.1) 0px 0px 0px 4px` | `--shadow-subtle-2` |
| md | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1)...` | `--shadow-md` |
| lg | `rgba(0, 0, 0, 0.09) 0px 20px 20px 0px` | `--shadow-lg` |
| subtle-3 | `rgb(255, 255, 255) 0px 0px 0px 3px, rgb(0, 0, 0) 0px 0px ...` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** Main conversion action — 'Start for free', 'Sign up'

Filled #0a0a0a background, #ffffff text, 9999px pill radius, 16px horizontal × 8-10px vertical padding. Inter 14px weight 500. Optional subtle 1px 2px shadow at rgba(0,0,0,0.05). The black fill on white is the entire brand voice for actions — no blue CTA, no gradient.

### Secondary Ghost Button
**Role:** Companion action — 'Get a demo', 'Learn more'

White or transparent fill, #0a0a0a text, 1px #d4d4d4 border, 9999px pill radius, 16px × 8-10px padding. Inter 14px weight 500. Always paired with a primary button in the same row.

### Navigation Link
**Role:** Top nav items with dropdown indicators

Inter 14px weight 500, #0a0a0a text, no underline. Caret chevron in #737373. Active/hover state lifts to weight 600 or adds #0a0a0a underline. Nav row sits in a white bar with no border.

### Feature Category Pill
**Role:** Tag for the three product capabilities (Short Links, Conversion Analytics, Affiliate Programs)

9999px radius, 6px vertical × 12px horizontal padding. Three variants by capability: orange (#ea580c) for Short Links, green (#16a34a) for Conversion Analytics, violet (#7c3aed) for Affiliate Programs. White background with a 4-6px solid-color square icon prefix. Inter 12-13px weight 500.

### Announcement Banner
**Role:** Top-of-page news strip ('Celebrating $10M partner payouts')

White background, #e5e5e5 border, 9999px pill radius, 6px × 16px padding, inline text + 'Read more' link. Sits centered above the hero, separated by generous whitespace.

### Product Screenshot Card
**Role:** Hero visual and feature imagery

12-16px radius, 1px #e5e5e5 border, no shadow or a very soft rgba(0,0,0,0.05) 1px 2px. White surface framing the app UI. The screenshot itself contains the dense product chrome — the card around it is intentionally quiet.

### Customer Logo Cell
**Role:** Social proof logo grid

Plain 60-80px tall image, no border, no background. Arranged in a 5×2 grid with generous row/column gaps. 'CASE STUDY' caption in Inter 10-11px uppercase #737373 below some logos.

### Inline Highlight Pill
**Role:** Colored word-level emphasis in body copy

Colored background (#ea580c at ~10% opacity, #16a34a at ~15%, or #7c3aed at ~10%) with matching saturated text color, 4px radius, 2px vertical × 6px horizontal padding. Used to make 'short links', 'real-time analytics', and 'affiliate programs' pop within paragraphs.

### Input Field
**Role:** Text input in product UI

8px radius, 1px #d4d4d4 border, white fill, Inter 14px weight 400 text, 10-12px vertical × 12-16px horizontal padding. Focus state shifts border to #0a0a0a with a 4px rgba(0,0,0,0.1) outer ring.

### Tag Chip
**Role:** Small inline metadata tag in product UI

9999px radius, #16a34a or #ea580c text on a tinted background (#dcfce7 or similar ~10% opacity), 4px × 8px padding, Inter 12px weight 500.

### Feature Highlight Card
**Role:** Section-level feature illustration with a tilted/scaled product crop

No explicit card chrome — the product crop sits on the white canvas with a subtle #e5e5e5 outline. Often accompanied by a 64-80px outlined icon in #737373. Cards in grids use 16px column gap.

### Dark Section Banner
**Role:** Inline callout strip ('Short Links — Learn more')

Dark #171717 or #262626 background, #ffffff text, 12-16px radius, inline icon in a #404040 rounded square, 'Learn more' button in white pill at the right. Used to break the monochrome rhythm and direct attention to a product pillar.

## Do's and Don'ts

### Do
- Use 9999px radius for all interactive elements (buttons, pills, tags, announcement banners) and 8-16px radius for cards and inputs
- Default to #0a0a0a filled buttons on #ffffff canvas for primary actions — never use blue or gradient as the CTA color
- Use #e5e5e5 for all hairline borders and dividers; reach for #d4d4d4 only when stronger definition is needed
- Use Satoshi weight 500 for all display headings; do not bold it
- Use the three accent colors (orange #ea580c, green #16a34a, violet #7c3aed) as a feature-category labeling system — one per capability, never decorative
- Apply 10-15% opacity tints of accent colors for inline highlight pills within body copy, keeping the saturated hex for text
- Use GeistMono for any URL slug, API key, code-like identifier, or alignment-sensitive inline data

### Don't
- Do not introduce a chromatic primary action color — the system is monochrome with accent labels, not a colored CTA system
- Do not use more than one accent color in a single component — feature pills are single-hue
- Do not apply heavy shadows; if elevation is needed, stay at rgba(0,0,0,0.05) 1px 2px or rgba(0,0,0,0.1) 4px 6px
- Do not use bold weights (700+) for headings; Satoshi's confidence comes from its medium weight, not weight escalation
- Do not mix Inter and Satoshi in the same text block — Satoshi is for display only
- Do not add gradient buttons, gradient text, or glassmorphism — the aesthetic is flat editorial, not dimensional
- Do not use the #dcfce7 green wash outside of success/callout contexts — it is semantic, not decorative

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#ffffff` | Full page background, default surface for all sections |
| 1 | Card Surface | `#ffffff` | Product screenshots, feature cards, logo grid cells — same as canvas, separated only by hairline borders |
| 2 | Elevated Wash | `#f5f5f5` | Secondary button fill, subtle background variation, code snippet backgrounds |
| 3 | Tinted Callout | `#dcfce7` | Green-tinted highlight band, badge background, feature accent panel |

## Elevation

- **Primary CTA Button:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Product Screenshot Card:** `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **Input Focus Ring:** `rgba(0, 0, 0, 0.1) 0px 0px 0px 4px`
- **Elevated Card (hover/active):** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

The site is product-screenshot-driven. The hero and feature sections are anchored by actual app UI captures — dashboard panels, link editor with QR code, analytics tables — framed on white cards with hairline borders. There is no lifestyle photography, no stock imagery, and no decorative illustration. The product IS the imagery. Outside of screenshots, icons are thin-stroke outlined glyphs in #525252-#737373, used small (16-24px) and functionally. The only chromatic graphics are the three feature-category square icons (orange, green, violet) that act as a visual key for product capabilities.

## Layout

Page layout is max-width 1200px centered with generous outer padding. The hero is centered text-over-product: headline → subhead → two-button row (primary + ghost) → product screenshot card below. Sections alternate between centered single-column text blocks and 2-column text+image splits, separated by 64-80px vertical gaps. Customer logos sit in a 5-column grid. Feature grids use 3 columns at desktop. The nav is a single horizontal bar — logo left, product/solutions/resources dropdowns center, login + sign-up right — with no sticky behavior indicated. Dark section banners (near-black #171717) appear as full-width strips to break the monochrome rhythm. Background sections alternate between pure white and very subtle off-white washes.

## Agent Prompt Guide

## Quick Color Reference
- text primary: #0a0a0a
- text muted: #737373
- text helper: #525252
- background: #ffffff
- surface elevated: #f5f5f5
- border default: #e5e5e5
- primary action: #000000 (filled action)
- accent orange (Short Links): #ea580c
- accent green (Analytics): #16a34a
- accent violet (Programs): #7c3aed

## Example Component Prompts

1. Create a Primary Action Button: #000000 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. **Create a feature category pill**: 9999px radius, white background, 1px #e5e5e5 border, 4px × 10px padding. Prefix with a 4px solid-color square icon (#ea580c for Short Links, #16a34a for Analytics, #7c3aed for Programs). Label text Inter 13px weight 500 #0a0a0a.

3. **Create an inline highlight pill in body copy**: 'short links' text wrapped in a span with #ea580c at 10% opacity background, #ea580c text, 4px radius, 2px × 6px padding, Inter 16px weight 500. The pill is inline, not a block.

4. **Create a customer logo grid**: 5-column CSS grid, 48px row gap, 32px column gap, centered. Each cell holds a customer logo (grayscale, ~32px tall) with optional 'CASE STUDY' caption below in Inter 10px uppercase #737373, letter-spacing 0.05em. No card chrome, no borders.

5. **Create a dark section banner**: full-width #171717 background, max-width 1200px inner container, 12px radius (or no radius if edge-to-edge), 24px vertical padding. Left: 40px square icon container in #262626 with white outline icon. Center: white text 'Short Links' in Inter 16px weight 600, #a3a3a3 description below. Right: 'Learn more' white pill button (1px #404040 border, white text, 9999px radius, 12px × 20px padding).

## Similar Brands

- **Vercel** — Same monochrome-first approach with black filled CTAs, hairline borders, and minimal elevation. Vercel also uses a single display font at medium weight for headlines and lets product UI carry the page.
- **Linear** — Identical restraint — white canvas, compact density, Inter for UI, pill-shaped controls, and product screenshots as hero visuals. Both sites treat accent color as a labeling tool rather than atmosphere.
- **Cal.com** — Same open-source SaaS layout grammar: centered hero with single headline, product screenshot below, 2-column feature splits, and 5-column customer logo grid. Both use small color-coded category tags as a capability key.
- **Plausible Analytics** — Shares the technical-editorial feel — black CTAs on white, clean Satoshi/Inter pairing, compact 4-8px element gaps, and a near-monochrome palette with a single accent appearing only as functional punctuation.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-ink-black: #0a0a0a;
  --color-carbon: #171717;
  --color-smoke-50: #f5f5f5;
  --color-smoke-100: #e5e5e5;
  --color-smoke-200: #d4d4d4;
  --color-smoke-400: #a3a3a3;
  --color-smoke-500: #737373;
  --color-smoke-600: #525252;
  --color-smoke-700: #404040;
  --color-ember-orange: #ea580c;
  --color-pulse-green: #16a34a;
  --color-arc-violet: #7c3aed;
  --color-circuit-blue: #3b82f6;
  --color-mint-wash: #dcfce7;
  --color-slate-ink: #111827;
  --color-primary-action-fill: #000000;

  /* Typography — Font Families */
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geistmono: 'GeistMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --text-heading: 36px;
  --leading-heading: 1.15;
  --tracking-heading: -0.72px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.96px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

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
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 16px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 12px;
  --radius-pills: 9999px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;
  --radius-featurecards: 16px;
  --radius-announcementbanner: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-sm-2: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.1) 0px 0px 0px 4px;
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-lg: rgba(0, 0, 0, 0.09) 0px 20px 20px 0px;
  --shadow-subtle-3: rgb(255, 255, 255) 0px 0px 0px 3px, rgb(0, 0, 0) 0px 0px 0px 4px;

  /* Surfaces */
  --surface-page-canvas: #ffffff;
  --surface-card-surface: #ffffff;
  --surface-elevated-wash: #f5f5f5;
  --surface-tinted-callout: #dcfce7;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-ink-black: #0a0a0a;
  --color-carbon: #171717;
  --color-smoke-50: #f5f5f5;
  --color-smoke-100: #e5e5e5;
  --color-smoke-200: #d4d4d4;
  --color-smoke-400: #a3a3a3;
  --color-smoke-500: #737373;
  --color-smoke-600: #525252;
  --color-smoke-700: #404040;
  --color-ember-orange: #ea580c;
  --color-pulse-green: #16a34a;
  --color-arc-violet: #7c3aed;
  --color-circuit-blue: #3b82f6;
  --color-mint-wash: #dcfce7;
  --color-slate-ink: #111827;
  --color-primary-action-fill: #000000;

  /* Typography */
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geistmono: 'GeistMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --text-heading: 36px;
  --leading-heading: 1.15;
  --tracking-heading: -0.72px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.96px;

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
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-sm-2: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.1) 0px 0px 0px 4px;
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-lg: rgba(0, 0, 0, 0.09) 0px 20px 20px 0px;
  --shadow-subtle-3: rgb(255, 255, 255) 0px 0px 0px 3px, rgb(0, 0, 0) 0px 0px 0px 4px;
}
```