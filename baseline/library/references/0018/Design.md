# ElevenLabs — Style Reference
> Parchment command terminal — warm paper surfaces beneath monochrome controls, with ambient color appearing only as sound made visible.

**Theme:** light

ElevenLabs uses a warm-white paper surface system — off-white canvas (#fdfcfc) layered with parchment cards (#f5f3f1, radius 20-24px) that feel tactile without being decorative. The typographic personality splits sharply: Waldenburg weight 300 at negative tracking for all display headlines (anti-convention for a tech brand — authority through restraint, not mass), and Inter for everything functional. The only color in an otherwise achromatic system is used in SVG decoration (vivid violet #0447ff and vivid orange #ff4704), appearing as ambient glowing orbs in voice-category visuals — color as sound made visible, not as UI state. All interactive affordances are monochrome: black pill buttons, white pill buttons with hairline borders, ghost text links — the brand refuses to use color as a call to action.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Parchment White | `#fdfcfc` | `--color-parchment-white` | Page canvas — the dominant background behind all sections and nav |
| Warm Sand | `#f5f3f1` | `--color-warm-sand` | Card surfaces, feature tiles, section backgrounds — one step warmer and darker than canvas |
| Ash Border | `#e5e5e5` | `--color-ash-border` | All hairline borders on buttons, inputs, cards, nav items, dividers |
| Midnight Ink | `#000000` | `--color-midnight-ink` | Primary text, headline text, filled pill button background, icon fills |
| Driftwood | `#777169` | `--color-driftwood` | Secondary body text, muted link text, icon strokes |
| Fog | `#a59f97` | `--color-fog` | Tertiary helper text, light icon strokes |
| Silver Mist | `#b1b0b0` | `--color-silver-mist` | Subtle background washes, mid-level surface dividers |
| Void Violet | `#0447ff` | `--color-void-violet` | Decorative SVG orb fill and stroke in voice-category visuals — color as ambient sound, never as UI state |
| Ember Orange | `#ff4704` | `--color-ember-orange` | Decorative SVG orb fill and stroke in voice-category visuals — paired with Void Violet in gradient orbs |

## Tokens — Typography

### Waldenburg — Display and section headlines exclusively. Weight 300 is anti-convention for an AI tech brand — these headlines whisper authority rather than shout it. Tight negative tracking (-0.02em) compresses letterforms for density at large scale. · `--font-waldenburg`
- **Substitute:** DM Sans 300 or Figtree 300
- **Weights:** 300
- **Sizes:** 32px, 36px, 48px
- **Line height:** 1.08–1.17
- **Letter spacing:** -0.02em
- **Role:** Display and section headlines exclusively. Weight 300 is anti-convention for an AI tech brand — these headlines whisper authority rather than shout it. Tight negative tracking (-0.02em) compresses letterforms for density at large scale.

### WaldenburgFH — Logo wordmark and brand identifier only. Wide positive tracking (0.05em) at small size creates a tight-but-spaced badge feel distinct from all body text. · `--font-waldenburgfh`
- **Substitute:** Space Grotesk 700
- **Weights:** 700
- **Sizes:** 14px
- **Line height:** 1.10
- **Letter spacing:** 0.05em
- **Role:** Logo wordmark and brand identifier only. Wide positive tracking (0.05em) at small size creates a tight-but-spaced badge feel distinct from all body text.

### Inter — All functional UI text: nav, buttons, body copy, labels, inputs, captions, footer. Weight 400 for body and 500 for emphasis/nav labels. Subtle tracking at 0.01em adds microscopic breath to dense functional text. · `--font-inter`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px
- **Line height:** 1.0–2.06
- **Letter spacing:** 0.01em
- **OpenType features:** `normal`
- **Role:** All functional UI text: nav, buttons, body copy, labels, inputs, captions, footer. Weight 400 for body and 500 for emphasis/nav labels. Subtle tracking at 0.01em adds microscopic breath to dense functional text.

### Geist Mono — Code snippets, API references, technical inline labels. Looser line-height (1.69) distinguishes it from body text rhythm. · `--font-geist-mono`
- **Substitute:** JetBrains Mono 400 or IBM Plex Mono 400
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.69
- **Role:** Code snippets, API references, technical inline labels. Looser line-height (1.69) distinguishes it from body text rhythm.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.4 | 0.1px | `--text-caption` |
| body | 16px | 1.5 | 0.16px | `--text-body` |
| subheading | 18px | 1.44 | 0.18px | `--text-subheading` |
| heading-sm | 20px | 1.4 | 0.2px | `--text-heading-sm` |
| heading | 32px | 1.17 | -0.64px | `--text-heading` |
| heading-lg | 36px | 1.13 | -0.72px | `--text-heading-lg` |
| display | 48px | 1.08 | -0.96px | `--text-display` |

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
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 96 | 96px | `--spacing-96` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| tabs | 20px |
| tags | 14px |
| cards | 20px |
| pills | 9999px |
| badges | 18px |
| inputs | 4px |
| buttons | 9999px |
| tooltips | 8px |
| cardLarge | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) ...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset` | `--shadow-subtle-4` |
| subtle-5 | `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0...` | `--shadow-subtle-5` |
| subtle-6 | `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0...` | `--shadow-subtle-6` |
| subtle-7 | `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0...` | `--shadow-subtle-7` |
| subtle-8 | `rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset` | `--shadow-subtle-8` |
| subtle-9 | `rgb(235, 232, 228) 0px 0px 0px 0.5px inset` | `--shadow-subtle-9` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 16-32px
- **Element gap:** 8px

## Components

### Black Filled Pill Button
**Role:** Primary action — Sign up, Create agent, Learn more

Background #000000, text #ffffff, border-radius 9999px, padding 0px 16px, border 1px solid #e5e5e5. Inter 15px weight 500. The monochrome black-on-white contrast is the only affordance; no color signal is used.

### White Outlined Pill Button
**Role:** Secondary action — Contact sales, Log in

Background #fdfcfc or rgba(0,0,0,0), text #000000, border-radius 9999px, padding 0px 12px, border 1px solid #e5e5e5. Box-shadow rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px 0px. Inter 15px weight 500.

### Ghost Text Button
**Role:** Inline tertiary action — nav links, read-all links

Background transparent, text #000000, border-radius 9999px, no border, no padding horizontally. Inter 15px weight 400. Hover triggers color transition. Pure text affordance with no chrome.

### Rounded Tab Badge Button
**Role:** Product-switcher tabs — ElevenCreative, ElevenAgents, ElevenAPI

Background transparent or #f5f3f1 when active, border-radius 18px, padding 8px 12px, border 1px solid #e5e5e5. Inter 14px weight 500. Active state gets white background with inset shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset.

### Warm Sand Feature Card
**Role:** Primary content tile — voice categories, feature descriptions

Background #f5f3f1, border-radius 20px, box-shadow none, padding 0px 32px. No border. Sits directly on #fdfcfc canvas — surface contrast does all the separation work.

### White Elevated Card
**Role:** Dashboard screenshot tiles and floating UI previews

Background #ffffff, border-radius 20px, padding 16px, box-shadow rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.04) 0px 1px 1px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px. The 0.4 opacity hairline shadow creates a sharp definition edge while the micro blurs add dimensionality.

### Large Feature Card
**Role:** Platform section insets — platform comparison, two-column product areas

Background #f5f3f1, border-radius 24px, box-shadow none, no padding on container. Used for full-bleed image containers within product sections.

### Ambient Voice Orb
**Role:** Decorative voice-type illustration — non-interactive visual identity

Circular shape with radial gradient blending Void Violet (#0447ff) and Ember Orange (#ff4704) — the only chromatic element in the UI. Displayed in a horizontal carousel. Functions as sound-to-color translation, not as a UI state indicator.

### Text Input Field
**Role:** Search and form inputs

Background #ffffff, border-radius 0px (flat/flush), padding 16px 20px, border 1px solid #e5e5e5, text #000000. Zero radius distinguishes inputs from pill buttons and rounded cards — inputs feel editorial/typewritten.

### Logo Wordmark
**Role:** Brand identifier in top-left nav

WaldenburgFH weight 700, 14px, letter-spacing 0.05em. Rendered in #000000. Preceded by a vertical bar glyph ('||') also in black. Small size + wide tracking creates a dense, stamp-like mark.

### Trust Logo Grid
**Role:** Social proof — partner/client logos displayed in muted grayscale

Logos rendered in #777169 or filtered to desaturated via CSS brightness(0) invert. Arranged in a 6-column grid inside a rounded-20px card on #f5f3f1 background. All logos reduced to same tonal weight — hierarchy flattened intentionally.

## Do's and Don'ts

### Do
- Use 9999px border-radius on ALL buttons, nav pills, and tags — no rectangular buttons exist in this system.
- Apply Waldenburg weight 300 with -0.02em letter-spacing for every headline 32px and above — never use Inter or a heavier weight for display text.
- Keep all interactive chrome in the #000000 / #fdfcfc / #e5e5e5 axis — color (#0447ff, #ff4704) is reserved for decorative orbs and illustration fills only.
- Use #f5f3f1 at 20-24px radius for primary cards; reserve #ffffff elevated cards (with hairline shadow) for product screenshots and UI previews only.
- Apply 0.05em letter-spacing to WaldenburgFH (logo only) and -0.02em to Waldenburg headlines; use 0.01em for all Inter body/UI text.
- Use surface-color contrast (#fdfcfc → #f5f3f1) as the primary elevation signal — shadows should be sub-pixel hairlines, never soft blurs.

### Don't
- Never use #0447ff or #ff4704 for button backgrounds, link colors, hover states, or any interactive affordance — they appear only in decorative SVG/gradient orbs.
- Never use Waldenburg or WaldenburgFH for body text, labels, or buttons — Inter handles all functional text without exception.
- Never apply heavy shadows (blur > 4px or spread > 2px) — the shadow vocabulary tops out at 4px blur with 0.04 opacity.
- Never use rectangular (0px radius) buttons or fully square cards in this system — even inputs and tooltip-like elements have at least 4px radius.
- Never introduce color-coded states (green success, red error, blue info) as prominent UI elements — the system has no semantic color infrastructure at the UI layer.
- Never set Inter below 10px or above 20px for UI text — display sizes use Waldenburg, not Inter at large scale.
- Never place text or UI on top of the gradient orbs — they are always isolated floating shapes, not backgrounds or card surfaces.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#fdfcfc` | Page background — nearly white with a faint warm cast |
| 2 | Card Surface | `#f5f3f1` | Feature cards, product tile backgrounds, section insets |
| 3 | Border / Divider | `#e5e5e5` | Hairline borders on all interactive and structural elements |
| 4 | Elevated Card | `#ffffff` | White cards that float above Warm Sand via subtle ring shadow |

## Elevation

- **White Elevated Card:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **Button / Control Ring:** `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **Inset Surface:** `rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset`

## Imagery

ElevenLabs uses two distinct visual registers. Product screenshots — detailed UI captures of the ElevenCreative and ElevenAgents dashboards — are displayed at full fidelity inside white elevated cards (20px radius), cropped and contained rather than full-bleed, showing the actual product interface as explanatory content. The second register is abstract animated orbs: perfect circles filled with soft radial gradients blending violet (#0447ff) and orange (#ff4704) through pink and peach mid-tones, displayed in a horizontal carousel against the warm sand card. These orbs are the only chromatic element on the page and function as a synaesthetic map of voice types — color encodes personality and timbre, not data. No photography exists on the page. Icons are minimal outlined style at low stroke weight, monochrome (#777169 or #000000), never multicolor. The overall image density is low — text dominates, with visuals appearing in contained demo sections rather than as atmospheric backgrounds.

## Layout

Max-width approximately 1200px centered on #fdfcfc canvas. Navigation is a sticky top bar with full-width background, pill buttons right-aligned, logo left — very low height (~36px). The hero is split asymmetrically: left-aligned oversized Waldenburg headline with black pill CTA below, right-aligned body copy paragraph — not a standard centered stack. Below the hero, a rounded-20px card container houses the product switcher tabs and voice carousel, sitting as a distinct inset panel. Subsequent sections alternate between full-width flat layouts (text + product screenshot side by side at 50/50 split) and centered text blocks. The trust/logo section uses a rounded-20px card on warm sand to frame a 6-column logo grid. Section vertical rhythm is generous — approximately 80-120px between sections, creating a comfortable breathing pace despite information density. No sidebar layout exists; everything is single-column or 2-column max.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #000000
- text (secondary): #777169
- background (canvas): #fdfcfc
- background (card): #f5f3f1
- border: #e5e5e5
- accent (decorative only): #0447ff, #ff4704
- primary action: #000000 (filled action)

**Example Component Prompts**

1. **Hero section**: #fdfcfc background. Left column: headline in Waldenburg weight 300, 48px, #000000, letter-spacing -0.96px, line-height 1.08. Below headline: black pill button (background #000000, text #ffffff, radius 9999px, padding 0 16px, Inter 15px weight 500) beside ghost text button (transparent bg, #000000 text, same size). Right column: body copy Inter 16px weight 400 #777169.

2. **Warm Sand Feature Card**: background #f5f3f1, border-radius 20px, no shadow, no border, padding 0 32px. Card title Inter 16px weight 500 #000000. Body text Inter 14px weight 400 #777169.

3. **Product Tab Switcher**: Container with 3 pill tabs, border-radius 20px overall. Active tab: background #ffffff, border-radius 18px, padding 8px 12px, inset shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px. Inactive tabs: transparent bg, same padding. Inter 14px weight 500 #000000. Outer container background #f5f3f1.

4. **Trust Logo Section**: Rounded card background #f5f3f1, radius 20px. 6-column grid of logos all filtered to #777169 (desaturated). Section label above card: Inter 14px weight 400 #777169.

5. **Navigation Bar**: Background #fdfcfc, height ~36px, 1px bottom border #e5e5e5. Logo: WaldenburgFH 700 14px #000000 letter-spacing 0.05em. Nav links: Inter 14px weight 400 #000000, ghost style. Right side: ghost text button 'Log in' + black pill button 'Sign up' (background #000000, #ffffff text, radius 9999px, padding 0 16px).

## Similar Brands

- **Linear** — Same monochrome pill-button system with black filled primary and ghost secondary, no color used for interactive states
- **Vercel** — Black-and-white achromatic UI language with near-white warm canvas, color reserved exclusively for decorative/illustration contexts
- **Notion** — Custom display typeface at light weight (300) for headlines against Inter body text, warm off-white surface palette
- **Resemble AI** — AI voice/audio product with gradient orb motifs as primary visual identity device and minimal interface chrome
- **Perplexity** — Warm parchment-toned canvas (#fdfcfc equivalent) with exclusively monochrome UI controls and typography-first layout

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-parchment-white: #fdfcfc;
  --color-warm-sand: #f5f3f1;
  --color-ash-border: #e5e5e5;
  --color-midnight-ink: #000000;
  --color-driftwood: #777169;
  --color-fog: #a59f97;
  --color-silver-mist: #b1b0b0;
  --color-void-violet: #0447ff;
  --color-ember-orange: #ff4704;

  /* Typography — Font Families */
  --font-waldenburg: 'Waldenburg', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-waldenburgfh: 'WaldenburgFH', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --tracking-subheading: 0.18px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0.2px;
  --text-heading: 32px;
  --leading-heading: 1.17;
  --tracking-heading: -0.64px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
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
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 16-32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tabs: 20px;
  --radius-tags: 14px;
  --radius-cards: 20px;
  --radius-pills: 9999px;
  --radius-badges: 18px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px;
  --radius-tooltips: 8px;
  --radius-cardlarge: 24px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px;
  --shadow-subtle-6: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-7: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-8: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-subtle-9: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;

  /* Surfaces */
  --surface-canvas: #fdfcfc;
  --surface-card-surface: #f5f3f1;
  --surface-border-divider: #e5e5e5;
  --surface-elevated-card: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-parchment-white: #fdfcfc;
  --color-warm-sand: #f5f3f1;
  --color-ash-border: #e5e5e5;
  --color-midnight-ink: #000000;
  --color-driftwood: #777169;
  --color-fog: #a59f97;
  --color-silver-mist: #b1b0b0;
  --color-void-violet: #0447ff;
  --color-ember-orange: #ff4704;

  /* Typography */
  --font-waldenburg: 'Waldenburg', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-waldenburgfh: 'WaldenburgFH', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --tracking-subheading: 0.18px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0.2px;
  --text-heading: 32px;
  --leading-heading: 1.17;
  --tracking-heading: -0.64px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;

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
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px;
  --shadow-subtle-6: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-7: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-8: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-subtle-9: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;
}
```