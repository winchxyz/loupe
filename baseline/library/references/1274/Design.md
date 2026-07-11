# Dimension — Style Reference
> Pre-dawn glassmorphic command deck

**Theme:** dark

Dimension speaks in a near-monochrome dark register: a near-black canvas, glassmorphic surfaces that float above it, and one muted indigo that surfaces only as accent punctuation. Typography is restrained and humanist — DM Sans for body, Geist for display — letting the 72px whisper-weight headlines carry the room without color needing to shout. Components are pill-shaped or soft-rounded; nearly every interactive element (buttons, nav, tags, the floating dock) uses a 9999px radius, while cards settle into 24–40px curves. The page breathes: generous vertical rhythm, thin hairline borders in #e5e5e5 at low opacity, and minimal elevation — depth comes from translucency and blur, not shadow stacks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#0a0a0a` | `--color-void` | Page background, deep surface — the canvas everything floats above |
| Char | `#1d1d1d` | `--color-char` | Elevated card surface, modal background |
| Iron | `#3d3d3d` | `--color-iron` | Mid-tier surface, hover state on dark elements |
| Slate | `#505050` | `--color-slate` | Disabled surface, secondary button background |
| Smoke | `#797979` | `--color-smoke` | Inactive surface, placeholder fill |
| Graphite | `#161616` | `--color-graphite` | Deepest UI element fill, icon strokes against light areas |
| Ink | `#282828` | `--color-ink` | Hairline dividers, subtle borders on glass surfaces |
| Fog | `#686868` | `--color-fog` | Muted link text, secondary metadata |
| Mist | `#c2c2c2` | `--color-mist` | Secondary body text, soft captions |
| Ash | `#b2b2b2` | `--color-ash` | Icon color at rest, inactive button label |
| Bone | `#e5e5e5` | `--color-bone` | Primary text, dominant border tone (often at reduced opacity), icon strokes — the workhorse neutral |
| Paper | `#ffffff` | `--color-paper` | Light neutral action fill for buttons on dark surfaces. |
| Onyx | `#000000` | `--color-onyx` | Icon fill on light surfaces, SVG illustration shadow |
| Indigo Haze | `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(107,98,242,0.565) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0))` | `--color-indigo-haze` | Sole chromatic accent — used in the hero wash gradient and the radial spotlight behind hero content; restrained indigo, never used for solid buttons |
| Dawn Wash | `linear-gradient(180deg, rgb(72,103,175), rgb(156,175,184), rgb(196,149,119))` | `--color-dawn-wash` | Hero background atmosphere — cool slate-blue band sitting between deeper navy and warm earth tones, suggesting pre-sunrise sky |

## Tokens — Typography

### DM Sans — Primary workhorse — body copy, nav items, buttons, list rows, tags. Weight 500 for nav/button labels, 700 for inline emphasis. At 72px it carries the hero headline; the -0.035em tracking tightens the large display set and gives the geometric letterforms a condensed, editorial posture. · `--font-dm-sans`
- **Substitute:** Inter, Manrope
- **Weights:** 400, 500, 700
- **Sizes:** 14px, 15px, 16px, 18px, 40px, 72px
- **Line height:** 1.00–1.56 (size-dependent)
- **Letter spacing:** -0.035em at 72px; 0.025em at small sizes (all-caps labels)
- **OpenType features:** `"ss01" on, "cv11" on`
- **Role:** Primary workhorse — body copy, nav items, buttons, list rows, tags. Weight 500 for nav/button labels, 700 for inline emphasis. At 72px it carries the hero headline; the -0.035em tracking tightens the large display set and gives the geometric letterforms a condensed, editorial posture.

### Geist — Secondary face — used for mid-weight subheadings, card titles, and tabular UI text inside the product mockup. Geist's slightly taller x-height and geometric neutrality make it feel like UI-native body type, complementing DM Sans's warmer editorial voice without competing. · `--font-geist`
- **Substitute:** Inter, Satoshi
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 24px, 32px, 36px, 48px
- **Line height:** 1.14–1.71
- **Role:** Secondary face — used for mid-weight subheadings, card titles, and tabular UI text inside the product mockup. Geist's slightly taller x-height and geometric neutrality make it feel like UI-native body type, complementing DM Sans's warmer editorial voice without competing.

### system-ui — Fallback for icon-adjacent text and rendered product UI screenshots — never appears in marketing surface · `--font-system-ui`
- **Weights:** 400, 500
- **Sizes:** 18px
- **Line height:** 1.50
- **Role:** Fallback for icon-adjacent text and rendered product UI screenshots — never appears in marketing surface

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.5 | 0.35px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| body-lg | 18px | 1.43 | — | `--text-body-lg` |
| subheading | 24px | 1.33 | — | `--text-subheading` |
| heading-sm | 32px | 1.25 | — | `--text-heading-sm` |
| heading | 40px | 1.2 | — | `--text-heading` |
| heading-lg | 48px | 1.14 | — | `--text-heading-lg` |
| display | 72px | 1 | -2.52px | `--text-display` |

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
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
|---------|-------|
| pill | 9999px |
| tags | 9999px |
| cards | 24px |
| inputs | 10px |
| buttons | 9999px |
| iconContainers | 4px |
| largeContainers | 40px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Floating Pill Navigation
**Role:** Primary site navigation

Fixed bottom-center bar, 40px tall, 9999px radius, background #1d1d1d at ~80% opacity with backdrop blur, hairline border 1px #e5e5e5 at 10% opacity. Contains the wordmark, 3–4 nav links in DM Sans 15px weight 500 #e5e5e5, and a white pill CTA flush to the right edge. Floats with 24px margin from the viewport bottom on desktop.

### Primary CTA Button (White Pill)
**Role:** Main conversion action

Pill shape, 9999px radius, height ~40px, horizontal padding 16–20px. Background #ffffff, text #0a0a0a, DM Sans 15px weight 500. No shadow. Includes a trailing arrow glyph (→) in the same color at 14px. Sits flush inside the floating nav or stands alone on hero — never filled with color.

### Hero Display Headline
**Role:** Above-the-fold value proposition

DM Sans 72px weight 400, line-height 1.00, letter-spacing -0.035em (~-2.5px), color #ffffff. The whisper-weight choice at this size is the signature: most dark-mode SaaS sites shout at 700; Dimension speaks. Wraps to two lines, left-aligned, max-width ~520px.

### Glass Product Mockup
**Role:** Hero visual / product showcase

Rounded container, 24px radius, background #1d1d1d with backdrop-filter blur ~20px, 1px border #e5e5e5 at 8% opacity. Contains three stacked pill rows: an app-icon dock (pill 9999px, 64px tall, 5 product icons each in a 40px circular #282828 well, topped with red #ef4444-style notification badges); a status/chat row (pill 9999px, #3d3d3d background, avatar + 'Dimension' label + 'Reviewing team chats…' in #c2c2c2). The glassmorphism — translucency over a warm/cool gradient hero — does the work that shadows would in a conventional system.

### App Icon Dock
**Role:** Integration showcase within product mockup

Inner pill, 9999px radius, height ~64px, background #2a2a2a, 4px gap between icon wells. Each icon sits in a 40px square with 8px radius and #282828 fill. Notification badges are 18px circles, red, top-right, white DM Sans 11px weight 700 numeral.

### Feature List (Numbered)
**Role:** Capability enumeration on hero left column

Vertical stack with 8px row gap. Section header in DM Sans 16px weight 500 #e5e5e5. Each row: 40px tall, two-column grid (label left, ordinal right). Label is DM Sans 16px weight 400 #c2c2c2; ordinal ('01'–'05') is DM Sans 14px weight 500 #686868. Rows separated by 1px #e5e5e5 borders at 6% opacity — not dividers, just hairlines.

### Feature Bullet Row
**Role:** Hero left-column sub-points

Single-line row, 24px tall, 8px column gap between icon and text. Icon 14px stroke #b2b2b2 (unicorn-like glyphs: paw, compass, chat, lock). Text DM Sans 15px weight 400 #c2c2c2. No bullets, no chevrons — the icon is the marker.

### Status Pill
**Role:** Inline status indicator within product UI

9999px radius, height ~36px, padding 8px 16px, background #3d3d3d. Left: 20px circular avatar with 'D' monogram. Center: DM Sans 14px weight 500 #e5e5e5 'Dimension'. Right: DM Sans 14px weight 400 #c2c2c2 status text with trailing ellipsis.

### Hairline Divider
**Role:** Section separator

1px line, full container width, #e5e5e5 at 6–10% opacity. Replaces heavy borders and dividers — the system communicates separation through near-invisible lines, not contrast.

### Gradient Hero Backdrop
**Role:** Above-the-fold atmospheric background

Full-bleed band, approximately 100vh tall, gradient transitions from deep navy-blue at top (rgb(72,103,175)) through cool slate (rgb(156,175,184)) to warm earth tone at bottom (rgb(196,149,119)) — the 'pre-dawn' palette. Sits behind the glass mockup with a radial #6b62f2→#ffffff spotlight bleeding from upper-center. Below the fold, the page returns to solid #0a0a0a.

### Tag / Chip
**Role:** Inline category marker

9999px radius, height 28px, padding 6px 14px, background #1d1d1d, 1px border #e5e5e5 at 10% opacity. DM Sans 13px weight 500 #c2c2c2. Used sparingly — one or two per section, never as decoration.

### Icon Button
**Role:** Compact action trigger (close, menu, etc.)

32px square, 8px radius, background transparent, 1px border #e5e5e5 at 10% opacity on hover. Icon 16px, stroke #e5e5e5 at 60% opacity, 1.5px weight.

## Do's and Don'ts

### Do
- Use 9999px radius for every button, nav element, tag, and status pill — pill-shaped is the default interactive form
- Set text color to #e5e5e5 as the primary reading color; reserve pure #ffffff for the wordmark, icon fills, and the primary CTA background
- Use DM Sans 72px weight 400 for the hero headline with -0.035em letter-spacing — whisper-weight at display size is the signature
- Express depth through backdrop-filter blur and translucency on dark surfaces, not through shadow stacks
- Render the indigo accent (#6b62f2) only inside the hero gradient or as a radial glow — never as a solid button fill, badge background, or text color
- Separate content with 1px hairlines in #e5e5e5 at 6–10% opacity rather than contrast or spacing alone
- Anchor every hero with a glassmorphic product artifact (the floating UI mockup pattern) — text should never stand alone on the gradient band

### Don't
- Do not introduce saturated brand colors for buttons, links, or accents — the system is monochromatic by design and the indigo is atmospheric only
- Do not use box-shadows on flat dark surfaces; save the two shadow values for the floating nav and the glass mockup
- Do not use sharp corners (0–4px) on cards or containers — minimum is 10px on inputs, 24px on cards, 40px on hero artifacts
- Do not set body type below 16px or above 18px — DM Sans reads best in that window at weight 400
- Do not use color to convey hierarchy; use weight (400 → 500 → 700) and opacity (#e5e5e5 → #c2c2c2 → #686868)
- Do not place the product mockup on a solid background — it needs the gradient hero or a layered surface to read as glass
- Do not use Geist for the hero headline or DM Sans for the mockup's tabular UI text — the font swap between marketing and product is intentional

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#0a0a0a` | Base canvas — the page sits on near-black |
| 1 | Char | `#1d1d1d` | Card surface, elevated panel |
| 2 | Iron | `#3d3d3d` | Hover state, active surface |
| 3 | Slate | `#505050` | Pressed state, selected surface |

## Elevation

- **Floating Pill Navigation:** `0 8px 32px rgba(0,0,0,0.4)`
- **Glass Product Mockup:** `0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)`

## Imagery

No photography or illustration beyond the product UI mockup itself. The hero atmosphere is created entirely through the dawn-wash gradient and the glassmorphic product container, which shows real rendered UI (app icons, notification badges, status row). The visual language is 'show, don't illustrate' — the product is the hero, framed as a floating glass artifact over a sky gradient. No stock photography, no abstract 3D, no decorative shapes. Iconography is monoline 1.5px stroke in #b2b2b2/#e5e5e5, extremely minimal — paw, compass, chat, lock glyphs suggest capability without being literal.

## Layout

Centered max-width container at 1200px with a two-column hero (text-left ~40%, mockup-right ~60%) on desktop. The hero sits on a full-bleed gradient band that returns to #0a0a0a below the fold. Section rhythm: 80px vertical gaps between bands, alternating full-bleed gradient → solid dark. The floating pill nav is the only persistent navigation — no top bar, no sidebar. Content density is sparse and editorial: each screen presents one idea, one headline, one visual. Card grids are 3-column at desktop, 1-column at mobile, with 24px gap. The product mockup is always the visual anchor on hero/section pages; text never stands alone without a glass artifact to its right.

## Agent Prompt Guide

**Quick Color Reference**
- background: #0a0a0a
- surface (card): #1d1d1d
- border: #e5e5e5 at 8–10% opacity
- text primary: #e5e5e5
- text secondary: #c2c2c2
- accent: #6b62f2 (indigo, gradient-only — never solid)
- primary action: #ffffff (filled action)

**Example Component Prompts**

1. Create a Primary Action Button: #ffffff background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. *Hero headline.* DM Sans 72px weight 400, line-height 1.00, letter-spacing -2.5px, color #ffffff, left-aligned, max-width 520px. Sits above a feature list on a 1200px max-width centered column.

3. *Glass product mockup.* 24px radius container, bg #1d1d1d at 85% opacity, backdrop-filter blur(24px), 1px border #e5e5e5 at 8% opacity, padding 24px, shadow 0 24px 48px rgba(0,0,0,0.35). Contains an inner app-icon dock: 9999px radius pill, 64px tall, bg #2a2a2a, 5 circular icon wells (40px, 8px radius, #282828 fill) separated by 4px gap, each topped with an 18px red notification badge.

4. *Numbered feature list.* Vertical stack, 8px row gap. Header DM Sans 16px weight 500 #e5e5e5. Each row: 40px tall, two-column grid (label DM Sans 16px weight 400 #c2c2c2 left, ordinal '01'–'05' in DM Sans 14px weight 500 #686868 right). Rows separated by 1px #e5e5e5 hairlines at 6% opacity.

5. *Gradient hero backdrop.* Full-bleed band, 100vh on hero, linear-gradient(180deg, rgb(72,103,175) 0%, rgb(156,175,184) 50%, rgb(196,149,119) 100%) with an overlaid radial-gradient(50% 50% at 50% 35%, rgba(107,98,242,0.565) 0%, rgba(255,255,255,0) 100%) bleeding from upper-center.

## Gradient System

Gradients are atmospheric, never decorative chrome. Three uses only: (1) the full-bleed hero 'dawn wash' — cool blue fading to warm earth, evoking pre-sunrise sky; (2) a centered indigo radial spotlight behind hero content, the only place the brand accent appears and only as a glow, never as fill; (3) thin horizontal indigo hairlines (linear-gradient with transparent stops on either side of a central rgba(107,98,242,0.565) band) used as section dividers or accent strokes — always transparent→indigo→transparent, never solid. No gradient should ever appear on a button, card, or interactive surface.

## Glassmorphism Recipe

The signature surface treatment. Combine: background #1d1d1d or #282828 at 70–85% opacity, backdrop-filter blur(16–24px), 1px border #e5e5e5 at 6–10% opacity, optional inset top highlight (inset 0 1px 0 rgba(255,255,255,0.06)). Radius 24px for cards, 40px for large containers, 9999px for pills. Always float over the gradient hero or a layered dark surface — glassmorphism on flat #0a0a0a looks dead; it needs something colorful or lit behind it to read as glass.

## Similar Brands

- **Linear** — Same dark-mode near-monochrome aesthetic with one restrained accent, whisper-weight display type, and pill-shaped interactive elements
- **Vercel** — Shares the Geist typeface lineage and the black-canvas-plus-glassmorphism product-mockup pattern in hero sections
- **Raycast** — Dark glassmorphic product UI floating over gradient hero, monoline iconography, pill-shaped dock components
- **Arc Browser** — Soft dark surfaces, heavy use of 9999px pill radii, and atmospheric color washes that do the work of solid accents
- **Cron** — Same near-black canvas, muted indigo accent used only as gradient/glow, and editorial whisper-weight headlines

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #0a0a0a;
  --color-char: #1d1d1d;
  --color-iron: #3d3d3d;
  --color-slate: #505050;
  --color-smoke: #797979;
  --color-graphite: #161616;
  --color-ink: #282828;
  --color-fog: #686868;
  --color-mist: #c2c2c2;
  --color-ash: #b2b2b2;
  --color-bone: #e5e5e5;
  --color-paper: #ffffff;
  --color-onyx: #000000;
  --color-indigo-haze: #6b62f2;
  --gradient-indigo-haze: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(107,98,242,0.565) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0));
  --color-dawn-wash: #9cafb8;
  --gradient-dawn-wash: linear-gradient(180deg, rgb(72,103,175), rgb(156,175,184), rgb(196,149,119));

  /* Typography — Font Families */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0.35px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.14;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -2.52px;

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
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-2xl: 19px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 9999px;

  /* Named Radii */
  --radius-pill: 9999px;
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-inputs: 10px;
  --radius-buttons: 9999px;
  --radius-iconcontainers: 4px;
  --radius-largecontainers: 40px;

  /* Surfaces */
  --surface-void: #0a0a0a;
  --surface-char: #1d1d1d;
  --surface-iron: #3d3d3d;
  --surface-slate: #505050;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #0a0a0a;
  --color-char: #1d1d1d;
  --color-iron: #3d3d3d;
  --color-slate: #505050;
  --color-smoke: #797979;
  --color-graphite: #161616;
  --color-ink: #282828;
  --color-fog: #686868;
  --color-mist: #c2c2c2;
  --color-ash: #b2b2b2;
  --color-bone: #e5e5e5;
  --color-paper: #ffffff;
  --color-onyx: #000000;
  --color-indigo-haze: #6b62f2;
  --color-dawn-wash: #9cafb8;

  /* Typography */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0.35px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.14;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -2.52px;

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
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-2xl: 19px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 9999px;
}
```