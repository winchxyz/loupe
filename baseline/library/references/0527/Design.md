# Modal — Style Reference
> Phosphor terminal inside a holographic cube

**Theme:** dark

Modal renders an AI infrastructure terminal aesthetic: pure black canvas with luminescent mint-green type that glows like phosphor on a CRT. The signature visual is a volumetric green glass cube — internal light source, soft particle scatter, a single artifact of physical weight in an otherwise weightless digital environment. Typography splits between a custom display sans (Goga) for headlines and Inter Variable for all operational UI, creating a clear voice distinction between the brand speaking and the product speaking. Color is ruthlessly disciplined: near-black surface stack, one vivid neon green (#7fee64) for live action, one soft mint (#ddffdc) for readable type, and almost nothing else. The palette occasionally inverts into a pale mint section for testimonials — a deliberate cool-water counterpoint to the dark engine room.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Phosphor Mint | `#ddffdc` | `--color-phosphor-mint` | Primary text on dark surfaces, body type on black — pale green reads as luminescent rather than white, reinforcing the terminal metaphor |
| Reactor Green | `#7fee64` | `--color-reactor-green` | Green action color for filled buttons, selected navigation states, and focused conversion moments |
| Soft Glow | `#c8f9b6` | `--color-soft-glow` | Accent backgrounds and highlighted text, eyebrow labels over imagery — diluted green for surfaces that need to feel alive without competing with Reactor Green |
| Pale Mist | `#def0dd` | `--color-pale-mist` | Inverted section background for testimonials and proof — the only light surface, a cool exhale from the dark engine room |
| Sage Tint | `#aed2a4` | `--color-sage-tint` | Secondary muted accent, subtle decorative strokes and dimmed green states |
| Void | `#000000` | `--color-void` | Page canvas, image backgrounds, code editor surfaces — true black, no warm cast, so the green accents read as the only light source |
| Carbon | `#212525` | `--color-carbon` | Elevated surface level one — nav bar, card base on dark, subtle distinction from pure black at ~15.5:1 contrast against white |
| Moss | `#3e4a3c` | `--color-moss` | Elevated surface level two, icon strokes on dark, button borders — green-tinted dark that keeps the surface hierarchy within the brand hue family |
| Fern | `#485346` | `--color-fern` | Card borders, button outlines, link underlines — the workhorse border color, green-tinted to avoid the clinical look of pure gray on black |
| Lichen | `#677d64` | `--color-lichen` | Muted body text, secondary borders — readable but recedes, used for supporting copy and metadata |
| Slate | `#697368` | `--color-slate` | Quiet utility borders and de-emphasized text — sits between Lichen and Stone in the neutral scale |
| Stone | `#859085` | `--color-stone` | Mid-gray borders, dividers between sections — achromatic enough to separate content blocks without pulling focus |
| Bone | `#ffffff` | `--color-bone` | Maximum-contrast text and icon fills, sparingly used where mint green would be insufficient |

## Tokens — Typography

### Goga — Display and heading face — a custom grotesque with slightly humanist proportions and subtle character alternates. Used for hero headlines at 60-64px (line-height 1.0-1.1, whisper-tight), section headings at 40-54px, and subheadings at 20-24px. The negative letter-spacing (-0.015em at large sizes, -0.006em at medium) tightens the word image so headlines feel carved rather than set. ss01 alternates should be on to activate the custom g and other details that give Goga its identity. · `--font-goga`
- **Substitute:** Inter Display, Satoshi, General Sans
- **Weights:** 400, 500
- **Sizes:** 20px, 24px, 40px, 54px, 60px, 64px
- **Line height:** 1.0–1.5 (1.0 at 64px, 1.1 at 60px, 1.3 at 40px, 1.4 at 24px, 1.5 at 20px)
- **Letter spacing:** -0.96px at 64px, -0.36px at 24px
- **OpenType features:** `"ss01" on`
- **Role:** Display and heading face — a custom grotesque with slightly humanist proportions and subtle character alternates. Used for hero headlines at 60-64px (line-height 1.0-1.1, whisper-tight), section headings at 40-54px, and subheadings at 20-24px. The negative letter-spacing (-0.015em at large sizes, -0.006em at medium) tightens the word image so headlines feel carved rather than set. ss01 alternates should be on to activate the custom g and other details that give Goga its identity.

### Inter Variable — Operational UI and body type — nav items, button labels, form fields, body copy, code annotations. Tight tracking at small sizes (-0.026em at 12px, -0.022em at 14px) keeps dense UI text compact. The cv11 character variant should be active to apply Inter's single-story 'a' and other refinements. Uppercase eyebrow labels use 0.1em positive tracking for the spaced-out labeling convention seen in 'WHY MODAL' and 'PROGRAMMABLE INFRA'. · `--font-inter-variable`
- **Substitute:** Inter (Google Fonts), Switzer, Geist Sans
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.33–1.50
- **Letter spacing:** -0.31px at 12px, -0.31px at 14px, 0.1em for uppercase labels
- **OpenType features:** `"cv11" on`
- **Role:** Operational UI and body type — nav items, button labels, form fields, body copy, code annotations. Tight tracking at small sizes (-0.026em at 12px, -0.022em at 14px) keeps dense UI text compact. The cv11 character variant should be active to apply Inter's single-story 'a' and other refinements. Uppercase eyebrow labels use 0.1em positive tracking for the spaced-out labeling convention seen in 'WHY MODAL' and 'PROGRAMMABLE INFRA'.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | -0.31px | `--text-caption` |
| body-sm | 14px | 1.38 | -0.31px | `--text-body-sm` |
| body | 16px | 1.5 | -0.35px | `--text-body` |
| subheading | 20px | 1.5 | -0.12px | `--text-subheading` |
| heading-sm | 24px | 1.4 | -0.36px | `--text-heading-sm` |
| heading | 40px | 1.3 | -0.6px | `--text-heading` |
| heading-lg | 54px | 1.2 | -0.81px | `--text-heading-lg` |
| display | 64px | 1.05 | -0.96px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 8px |
| pills | 9999px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1)...` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 16-20px
- **Element gap:** 16px

## Components

### Reactor Primary Button
**Role:** Filled action button for highest-priority CTAs (Get Started, Sign Up)

Background #7fee64 (Reactor Green), text #000000, 4px radius, 8-10px vertical padding with ~20px horizontal padding. Inter Variable 14-16px weight 500, letter-spacing -0.022em. The vivid green fill against black makes the button feel like an active power switch. No border, no shadow — the color does all the work.

### Ghost Secondary Button
**Role:** Secondary CTA beside primary (Contact Us, Learn More)

Transparent or #000000 background, 1px solid #485346 (Fern) border, 4px radius, 8-10px vertical padding. Text in #ddffdc (Phosphor Mint) at Inter 14-16px weight 500. Hover state should intensify the border to #7fee64 to echo the primary action.

### Text Link
**Role:** Inline navigation and content links within body copy

No background, 1px bottom border in #859984 (mid-gray-green) or contextual green, text in #ddffdc or #859984. 8px radius on the underline for a subtle modern touch. Inter Variable inherits from body context.

### Nav Bar
**Role:** Top-level site navigation with brand mark and account actions

Background #212525 (Carbon), full-width, horizontal flex with logo left, center menu items at 14px Inter weight 500, right cluster with Log In text link and Sign Up filled Reactor button. Active menu item indicated by a #7fee64 bottom border (2-3px). Height approximately 56-64px.

### Hero Section
**Role:** Above-the-fold brand statement with primary product visual

Pure #000000 background, centered text block. Goga display headline at 60-64px line-height 1.0-1.1 in #ddffdc. Subhead in Inter 16px #ddffdc at ~80% opacity. Dual CTA row (Reactor primary + Ghost secondary). Below text: a volumetric 3D green glass cube with internal yellow-green light source, rendered with a green particle scatter field on the black canvas.

### Logo Strip
**Role:** Customer/partner social proof band

Horizontal row of customer logos on #000000 background, separated by 1px #485346 vertical dividers. Logos rendered in #859085 or #677d64 monochrome. Equal column width per logo, no card chrome — the strip is a single quiet band.

### Feature Section (Why Modal)
**Role:** Tabbed content area explaining product capabilities

Two-column layout: left rail with uppercase Inter labels (tracking 0.1em, 12px, #677d64) as navigation items, right area with Goga heading (40px, #ddffdc) and body copy. Active tab is indicated by a #7fee64 left border or dot. Each tab pairs its text with a code block or product screenshot on a green-tinted background.

### Code Block
**Role:** Product code samples and terminal output

Background #000000 or #212525, 16px radius, 1px #485346 border, padding 20px. Monospaced code (JetBrains Mono or Berkeley Mono) with green syntax highlighting: keywords in #7fee64, strings in #c8f9b6, comments in #677d64. Line numbers in #485346. The green code colors should feel like the same phosphor that illuminates the headline text.

### Customer Testimonial Card
**Role:** Social proof from named individuals

Background #def0dd (Pale Mist) on the inverted section, no border, 16px radius, 20px padding. Avatar circle (40px) with name in Inter 14px weight 600 and role/title in weight 400 #677d64. Quote text in Inter 14-16px weight 400 in #000000. Cards arranged in a horizontal row with 16px gap, equal width.

### Eyebrow Label
**Role:** Section pre-title, category markers (WHY MODAL, PROGRAMMABLE INFRA)

Inter Variable 12px weight 500, uppercase, letter-spacing 0.1em, color #677d64 or #7fee64 depending on context. Paired with a small dot or square indicator. These labels create the 'instrument panel' feel of the design.

### Closing CTA Banner
**Role:** Final conversion section (Ship your first app in minutes)

Full-width #000000 band with 3D green cube cluster on the left and Goga heading + Reactor primary button on the right. Generous vertical padding (80-120px). The cube cluster echoes the hero, creating bookend visual symmetry.

### Icon (UI)
**Role:** Inline icons in nav, feature lists, and cards

Outlined style, 1.5-2px stroke weight, 16-20px size, color #ddffdc or #677d64 depending on hierarchy. Geometric, minimal — no fill icons. Icons should feel like terminal glyphs, not illustrations.

## Do's and Don'ts

### Do
- Set all page backgrounds to #000000 — any gray dilutes the phosphor effect and makes green accents look flat.
- Use #ddffdc for all primary text on dark surfaces; reserve #ffffff for maximum-contrast moments only.
- Apply Reactor Green (#7fee64) exclusively to live, active, or action states — it should never decorate.
- Set Goga to weights 400-500 with ss01 alternates active — the font's identity lives in those custom letterforms and the moderate weight.
- Use uppercase Inter labels with 0.1em tracking for all section eyebrows (WHY MODAL, PROGRAMMABLE INFRA) — they are the navigation grammar of the page.
- Keep corner radii small: 4px for buttons, 8px for inline links, 16px for cards. The design is sharp, not soft.
- Invert to #def0dd (Pale Mist) for testimonial and human-proof sections — the cool green break prevents dark fatigue.

### Don't
- Do not introduce gradients anywhere — the design language is flat with one luminous exception (the 3D cube).
- Do not use pure gray neutrals for borders or text — every neutral in the system is green-tinted (Fern, Lichen, Stone) to stay within the phosphor palette.
- Do not apply heavy box-shadows or elevation to cards on dark surfaces — depth comes from the surface stack (#000 → #212525 → #3e4a3c), not blur.
- Do not use Reactor Green for large background fills or decorative shapes — its saturation is reserved for small, functional moments.
- Do not set body text below 14px or above 16px — the Inter sizes cap at three steps to maintain the dense, terminal rhythm.
- Do not use warm colors (reds, oranges, yellows) in UI — even the cube's inner glow is green, not yellow-warm.
- Do not use rounded pill shapes for primary buttons — 4px radius is the signature; pills are reserved for tags and badges only.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#000000` | Page background — true black anchors all content and makes green accents appear to emit light |
| 1 | Carbon Surface | `#212525` | Nav bar, sticky headers, first elevation step from canvas |
| 2 | Moss Surface | `#3e4a3c` | Card backgrounds on dark, icon containers, code block surfaces |
| 3 | Fern Surface | `#485346` | Highlighted card states, active containers, secondary button backgrounds |
| 4 | Pale Mist Surface | `#def0dd` | Inverted light section for testimonials — the only departure from the dark surface stack |

## Elevation

- **Nav Bar:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

Imagery is dominated by a single recurring 3D artifact: a translucent green glass cube with an internal yellow-green light source, rendered with volumetric glow and a subtle particle scatter field on the black canvas. This cube appears in the hero and reappears in the closing CTA, creating visual bookends. No photography is used — the design is entirely typographic and 3D-rendered. Customer logos in the social proof strip are monochrome and treated as typographic marks, not brand showcases. The only photographic-style content is avatar headshots in testimonial cards, rendered as small circles on the inverted light section. The overall visual density is low — the page is primarily text and negative space, with the cube as the singular object of visual weight.

## Layout

The page follows a dark-first, centered-when-prose / asymmetric-when-features structure. The hero is a centered text-and-visual stack on full-bleed black: headline, subhead, dual CTA, then the 3D cube below. The logo strip is a single full-width band with vertical dividers, equally columned. Feature sections use a two-column asymmetric grid: narrow left rail (30%) with uppercase tab labels, wider right content area (70%) with heading, body, and a code block or product screenshot on a green-tinted background. The testimonial section breaks the dark rhythm entirely with a full-width #def0dd light band containing equally-sized card columns. The closing CTA returns to dark with a split layout: 3D cubes left, text-and-button right. Vertical rhythm is generous (64-80px section gaps) with content max-width centered at ~1200px. Navigation is a single horizontal bar at top, sticky, with logo left and account actions right.

## Agent Prompt Guide

**Quick Color Reference**
- Text on dark: #ddffdc
- Page background: #000000
- Border: #485346
- Accent / surface: #c8f9b6 or #def0dd
- primary action: #7fee64 (filled action)

**Example Component Prompts**

1. Create a Primary Action Button: #7fee64 background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. *Create a feature tab section:* Two-column grid, 30% left / 70% right. Left rail: vertical stack of 4 uppercase Inter 12px labels (letter-spacing 0.1em) in #677d64; active label gets a #7fee64 left border (2px) and #ddffdc text. Right area: Goga heading at 40px weight 400 in #ddffdc, line-height 1.3, letter-spacing -0.6px. Body in Inter 16px weight 400 in #ddffdc. Below: code block with #000000 background, 16px radius, 1px #485346 border, 20px padding, monospaced code with green syntax highlighting.

3. *Create a testimonial card row:* Full-width #def0dd background band, 64px vertical padding. Row of 4 equal-width cards with 16px gap, no individual card borders, 16px radius, 20px padding. Each card: 40px circular avatar top-left, Inter 14px weight 600 name and weight 400 #677d64 role below. Quote text in Inter 16px weight 400 in #000000.

4. *Create a nav bar:* Full-width sticky bar, #212525 background, 56px height, horizontal flex. Left: small green cube logo (12px) + 'Modal' wordmark in Goga 20px weight 500 #ddffdc. Center: nav items (Product, Solutions, Resources, Customers, Pricing, Docs) in Inter 14px weight 500 #ddffdc, 24px gap. Right: 'Log In' text link and 'Sign Up' filled #7fee64 button with #000000 text, 4px radius, 8px 16px padding.

5. *Create a closing CTA banner:* Full-bleed #000000 band, 80-120px vertical padding, two-column layout. Left column: cluster of 3D green glass cubes at varying scales, scattered. Right column: Goga heading at 54px weight 400 in #ddffdc, line-height 1.1, max-width 480px. Below: single Reactor Green primary button, 10px 24px padding, 4px radius.

## Similar Brands

- **Replicate** — Same dark-canvas + neon-green-accent + monospaced-code aesthetic for ML/AI infrastructure
- **Together AI** — Dark-mode AI infrastructure branding with a single saturated accent color and code-forward product imagery
- **Anyscale** — Black background with vivid green brand accent, custom display typeface, and developer-terminal visual language
- **Vercel** — Pure black canvas, monochrome-with-one-accent palette, geometric sans display type, and minimal-elevation card system
- **Linear** — Dark-first interface, tight Inter-style UI type, small corner radii, and high-contrast luminescent accents against true black

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-phosphor-mint: #ddffdc;
  --color-reactor-green: #7fee64;
  --color-soft-glow: #c8f9b6;
  --color-pale-mist: #def0dd;
  --color-sage-tint: #aed2a4;
  --color-void: #000000;
  --color-carbon: #212525;
  --color-moss: #3e4a3c;
  --color-fern: #485346;
  --color-lichen: #677d64;
  --color-slate: #697368;
  --color-stone: #859085;
  --color-bone: #ffffff;

  /* Typography — Font Families */
  --font-goga: 'Goga', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.31px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --tracking-body-sm: -0.31px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.35px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.12px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.36px;
  --text-heading: 40px;
  --leading-heading: 1.3;
  --tracking-heading: -0.6px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.81px;
  --text-display: 64px;
  --leading-display: 1.05;
  --tracking-display: -0.96px;

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
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 16-20px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-links: 8px;
  --radius-pills: 9999px;
  --radius-buttons: 4px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;

  /* Surfaces */
  --surface-void-canvas: #000000;
  --surface-carbon-surface: #212525;
  --surface-moss-surface: #3e4a3c;
  --surface-fern-surface: #485346;
  --surface-pale-mist-surface: #def0dd;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-phosphor-mint: #ddffdc;
  --color-reactor-green: #7fee64;
  --color-soft-glow: #c8f9b6;
  --color-pale-mist: #def0dd;
  --color-sage-tint: #aed2a4;
  --color-void: #000000;
  --color-carbon: #212525;
  --color-moss: #3e4a3c;
  --color-fern: #485346;
  --color-lichen: #677d64;
  --color-slate: #697368;
  --color-stone: #859085;
  --color-bone: #ffffff;

  /* Typography */
  --font-goga: 'Goga', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.31px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --tracking-body-sm: -0.31px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.35px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.12px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.36px;
  --text-heading: 40px;
  --leading-heading: 1.3;
  --tracking-heading: -0.6px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.81px;
  --text-display: 64px;
  --leading-display: 1.05;
  --tracking-display: -0.96px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```