# Fey — Style Reference
> obsidian trading terminal — a Bloomberg-derived control room where charts, news, and data float in a void of black.

**Theme:** dark

Fey operates in obsidian — a near-black canvas (#0b0b0b) with subtly lifted card surfaces (#131313, #191919) creating depth closer to a professional trading terminal than a typical SaaS landing. The entire interface speaks in one typeface (calibre) at multiple weights, with aggressive negative tracking on large sizes that tightens display copy into something architectural rather than friendly. Three chromatic accents are deployed as functional punctuation, never decoration: orange (#ffa16c) marks the moments the brand wants you to feel — headlines, brand mark, urgency; blue (#479ffa) anchors interactive navigation and primary chart data; green (#4ebe96) signals positive market movement on price tags and buy/sell chips. The page rhythm is product-forward: oversized device mockups in a horizontal carousel do the selling, with short text blocks playing supporting role.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ember Orange | `#ffa16c` | `--color-ember-orange` | Orange supporting accent for decorative details and low-frequency emphasis. |
| Signal Blue | `#479ffa` | `--color-signal-blue` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Tape Green | `#4ebe96` | `--color-tape-green` | Green supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |
| Snow | `#ffffff` | `--color-snow` | Primary text and foreground icons — the dominant interface voice against the dark canvas |
| Fog | `#868f97` | `--color-fog` | Secondary/muted body text, helper copy, inactive labels — carries the load when white would shout |
| Ash | `#cccccc` | `--color-ash` | Tertiary text, disabled icons, low-emphasis captions |
| Smoke | `#999999` | `--color-smoke` | Muted body and metadata text — sits between Fog and the canvas for non-essential information |
| Iron | `#828282` | `--color-iron` | Secondary headings and chart axis labels |
| Platinum | `#e6e6e6` | `--color-platinum` | Hairline borders, divider lines, ghost button outlines — the thinnest readable separator on dark |
| Slate | `#525252` | `--color-slate` | Dim borders, inactive chart gridlines, low-contrast dividers where Platinum would be too bright |
| Void | `#000000` | `--color-void` | Deepest surface and shadow core — used inside elevated elements and behind the heaviest drop-shadows |
| Obsidian | `#0b0b0b` | `--color-obsidian` | Primary page canvas — the near-black the entire UI floats on |
| Graphite | `#131313` | `--color-graphite` | First-level card surface — visible separation from canvas without brightness |

## Tokens — Typography

### calibre — Sole typeface for the entire system — UI, display, body, nav, and footer. The aggressive negative letter-spacing at large sizes (-0.08em at 48–54px) tightens display copy into something architectural and modern; 400 is the workhorse, 600–700 for emphasis. Calibre's slightly compressed geometry and tall x-height make it read as a financial-grade instrument typeface, closer to a Bloomberg label than a friendly app. · `--font-calibre`
- **Substitute:** Inter Tight, or Suisse Int'l at matching tracking
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10, 11, 12, 14, 15, 16, 18, 24, 26, 48, 54
- **Line height:** 1.00–1.58
- **Letter spacing:** -0.0800em, -0.0530em
- **Role:** Sole typeface for the entire system — UI, display, body, nav, and footer. The aggressive negative letter-spacing at large sizes (-0.08em at 48–54px) tightens display copy into something architectural and modern; 400 is the workhorse, 600–700 for emphasis. Calibre's slightly compressed geometry and tall x-height make it read as a financial-grade instrument typeface, closer to a Bloomberg label than a friendly app.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.5 | -0.53px | `--text-caption` |
| body | 14px | 1.5 | -0.742px | `--text-body` |
| heading-sm | 18px | 1.3 | -0.954px | `--text-heading-sm` |
| heading | 24px | 1.25 | -1.92px | `--text-heading` |
| heading-lg | 26px | 1.2 | -2.08px | `--text-heading-lg` |
| display | 48px | 1.1 | -3.84px | `--text-display` |
| display-lg | 54px | 1 | -4.32px | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 14 | 14px | `--spacing-14` |
| 15 | 15px | `--spacing-15` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 21 | 21px | `--spacing-21` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 42 | 42px | `--spacing-42` |
| 103 | 103px | `--spacing-103` |
| 190 | 190px | `--spacing-190` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| icons | 6px |
| images | 16px |
| modals | 10px |
| buttons | 6px |
| navButtons | 99px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.8) 0px 0px 44px 0px` | `--shadow-xl` |
| subtle | `rgba(0, 0, 0, 0.85) 0px 1px 0px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 40px
- **Card padding:** 24px
- **Element gap:** 18px

## Components

### Top Navigation Bar
**Role:** Minimal header anchoring the page

Transparent over the #0b0b0b canvas. Left: brand glyph (Ember Orange). Center-left: nav links (Features, Pricing, Updates, Students, App) in calibre 14–15px weight 500, color Fog (#868f97) on default, Snow (#ffffff) on hover. Far right: a notification chip + a 99px-radius pill button ('Learn more') in Snow text on transparent fill, 1px Platinum border, 6px vertical / 18px horizontal padding. Height ~56px.

### Pill CTA (nav variant)
**Role:** Soft, non-aggressive action in the header

Border-radius 99px, background transparent, 1px solid #e6e6e6 border, padding 6px 18px, text calibre 14px weight 500 in #ffffff. The pill shape is reserved for the nav region; body CTAs use the smaller 6px radius.

### Hero Product Mockup
**Role:** First-screen proof — a device frame containing a live product screen

A tablet/phone-shaped frame (16px radius, #131313 fill, 1px subtle border) containing a dark product screenshot with chart, ticker data, and a news recap column. Wrapped in a 44px black ambient glow (rgba(0,0,0,0.8) 0 0 44px). Sits on #0b0b0b canvas, full-bleed width up to the page max.

### Section Label
**Role:** Small overline marking a section's topic

Calibre 12–14px weight 500, color Ember Orange (#ffa16c), letter-spacing normal. Always appears 16–24px above the section heading it belongs to. Example: 'Highlights' label above the carousel section.

### Display Heading
**Role:** Page-level headlines and hero copy

Calibre 48–54px weight 600–700, color #ffffff, letter-spacing -0.08em (≈ -4.3px at 54px), line-height 1.00–1.10. The extreme negative tracking and large size are the signature — they give the page its architectural weight.

### Feature Carousel Card
**Role:** Scrollable product showcase items

A product-mockup screenshot inside a 16px-radius frame on a #131313 card surface, with a caption below in calibre 15–16px weight 500 #ffffff. Cards are arranged in a horizontal overflow strip with a fixed 24px gap; arrow controls sit in the upper-right.

### Insider Transaction Row
**Role:** Compact data row inside the Insider card

Horizontal row on #131313 surface: 40px circular portrait left, name (calibre 16px weight 600 #ffffff) + company (calibre 12–14px weight 400 #868f97) stacked center, action chip ('Buy' or 'Sell') far right. Rows separated by 1px #525252 hairline. Padding 14–18px vertical.

### Action Chip
**Role:** Compact buy/sell signal on insider rows

6px radius, 1px border, ~6px 10px padding. 'Buy' uses Tape Green (#4ebe96) text and border; 'Sell' uses a desaturated red (derive: #c8746a) text and border on transparent fill. No filled background — these are outlined ghost chips, never solid blocks.

### News Recap Card
**Role:** Compact AI-generated news block inside product mockups

#131313 fill, 10–13.98px radius, 16–18px padding. Top row: small source label (e.g. 'Morning recap') in calibre 11–12px weight 500, color #868f97, paired with a right-aligned timestamp in same style. Body: calibre 14–15px weight 400, color #ffffff, line-height 1.4. A 'Read more' link at the bottom in #868f97.

### Earnings Alert Bar
**Role:** Horizontal real-time notification strip

A 44–50px-radius pill (fully rounded ends) on #131313 surface with a 1px subtle border. Left: a small brand icon in a 28px colored tile (Ember Orange, Signal Blue, or a brand variant per company). Center: headline (calibre 14px weight 500 #ffffff) + green checkmark in Tape Green. Right: a secondary 'Press release' ghost action with calendar icon. Used in the centered 'Earnings in real time' section.

### Stock Chart Block
**Role:** Primary data visualization inside product mockups

Dark plot area on #131313. A single line series in Signal Blue (#479ffa) at 1.5–2px stroke, with a faint area fill below at ~10% opacity. Gridlines: 1px #525252 at 10–15% opacity. Axis labels: calibre 10–11px weight 500 in #868f97. Legend pills (1D/5D/1M/YTD/etc.) sit below in a 6px-radius ghost style.

### Carousel Arrow Control
**Role:** Horizontal-scroll affordance for the Highlights strip

Two 36–40px circular buttons in the upper-right of the carousel section. #131313 fill, 1px #525252 border, 16px-radius, white chevron icon at 16px. Active/hover state raises border to #e6e6e6 and brightens icon to Snow.

## Do's and Don'ts

### Do
- Use #0b0b0b as the page canvas and step up through #131313 → #191919 for card elevations; never paint a card with a saturated color.
- Reserve Ember Orange (#ffa16c) for section labels and the most important headline per screen — one moment per viewport, never two.
- Set radius to 16px on cards and image frames, 6px on buttons and icons, 99px only on the header pill — the three tiers are non-negotiable.
- Track all display sizes (24px and above) at -0.08em; body (12–18px) at -0.053em. These numbers are the signature — flat tracking makes the type feel generic.
- Use Signal Blue (#479ffa) exclusively for the primary chart line and active nav state. If a clickable element is not a chart, its active state is white, not blue.
- Render the hero product mockup with the 44px black ambient glow — it is the only shadow in the system allowed to be large and diffuse.
- Let the page breathe: 40px between major sections, 18–24px inside card rows, and full-bleed mockups in a horizontal scroll rather than cramped grids.

### Don't
- Don't add drop-shadows to cards or buttons. Elevation is a surface-color step, not a shadow — the page is matte on matte.
- Don't use the chromatic accents as filled backgrounds. Blue, orange, and green are stroke and text only; they earn attention by being rare.
- Don't set body text below 12px or use letter-spacing > 0 anywhere. Calibre's negative tracking is the identity — going positive flattens it.
- Don't introduce a second typeface. The system is monotypographic; any serif, mono, or display face breaks the instrument-grade read.
- Don't place the warm Ember Orange on a non-headline element. Once it appears on a button, icon, or border, the page stops feeling restrained.
- Don't use white (#ffffff) for muted or secondary text. White is the loudest possible voice in this system — muted copy must be Fog (#868f97) or Ash (#cccccc).
- Don't render product mockups in a flat grid of equal cards. The carousel rhythm (one oversized, the rest stepping down) is the page's narrative structure.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#0b0b0b` | Primary page background — the near-black void everything floats on |
| 1 | Card | `#131313` | First-elevation card surface — news recaps, insider rows, product mockup frames |
| 2 | Elevated Card | `#191919` | Second-elevation panels, hover surfaces, or stacked layers inside hero mockups |
| 3 | Deep | `#000000` | Core of drop-shadows and deepest recessed elements; used in shadow stacks for atmospheric depth |

## Elevation

- **Hero product mockup:** `rgba(0, 0, 0, 0.8) 0px 0px 44px 0px`
- **Primary button (pressed / separator line):** `rgba(0, 0, 0, 0.85) 0px 1px 0px 0px`

## Imagery

Imagery is product-first and dark-native: oversized device mockups (tablet and phone frames) containing real-feeling dark UI screens with charts, ticker data, and news recaps. Portrait photography appears only as small 40px circular avatars on insider rows. Lifestyle or hero photography is absent; the void IS the atmosphere. Gradients are used as a single 97° linear wash for the brand mark (orange-to-dark-brown) and on the secondary chip icons in the alert bar (blue-to-navy, yellow-to-olive). No stock illustration, no 3D renders — the product screenshot carries the entire visual weight.

## Layout

Page is a single column, max-width 1200px centered, set on a full-bleed #0b0b0b canvas. The hero is a full-viewport band with one oversized product mockup centered or slightly right-offset, with the brand wordmark and a single large headline below. Section rhythm is generous: 40px between bands, each band either centered-stack (short text + product) or carousel (one large item + horizontal scroll of smaller items). The Highlights carousel breaks the centered rhythm intentionally — a strip of product cards scrolls horizontally with arrow controls on the right. Navigation is a single thin top bar; no sidebar, no mega-menu, no footer clutter visible in the hero viewport. The closing 'Earnings in real time' section returns to a centered stack with a large human silhouette portrait emerging from black as a single atmospheric image.

## Agent Prompt Guide

QUICK COLOR REFERENCE
- text: #ffffff (primary), #868f97 (secondary/muted), #cccccc (tertiary)
- background: #0b0b0b (page canvas), #131313 (card surface), #191919 (elevated card)
- border: #525252 (dim divider), #e6e6e6 (ghost/button border)
- accent: #ffa16c Ember Orange (headline emphasis only)
- chart / interactive: #479ffa Signal Blue
- positive financial signal: #4ebe96 Tape Green
- primary action: no distinct CTA color

3-5 EXAMPLE COMPONENT PROMPTS

1. Header navigation: transparent over #0b0b0b. Brand glyph in #ffa16c at 24px. Nav links (Features, Pricing, Updates, Students, App) in calibre 14px weight 500, #868f97. Far right: a 99px-radius ghost pill with 1px #e6e6e6 border, 6px 18px padding, text 'Learn more' in #ffffff, calibre 14px weight 500. Bar height 56px.

2. Hero device mockup: a 16px-radius frame on #131313 fill, 1px #525252 border, wrapped in a 44px black ambient glow (rgba(0,0,0,0.8) 0 0 44px). Inside, a dark product screen with a Signal Blue (#479ffa) chart line, #868f97 axis labels in calibre 10px, and a news recap column at the right. Headline below: 'Make better investments.' in calibre 54px weight 700, #ffffff, letter-spacing -4.32px, line-height 1.0.

3. Insider transaction row: #131313 surface, padding 14px 18px, 1px #525252 bottom border. 40px circular portrait left, name in calibre 16px weight 600 #ffffff stacked above company in calibre 12px weight 400 #868f97. Right-aligned 'Buy' chip: 6px radius, 1px #4ebe96 border, transparent fill, text #4ebe96, padding 6px 10px, calibre 12px weight 500.

4. News recap card: #131313 fill, 10px radius, 18px padding. Top row: 'Morning recap' in calibre 11px weight 500 #868f97 left, timestamp 'Summarized at 10:12AM' in calibre 11px weight 400 #868f97 right. Body in calibre 14px weight 400 #ffffff, line-height 1.4. 'Read more' link in #868f97, calibre 13px.

5. Carousel arrow control: 36px circle, #131313 fill, 1px #525252 border, 16px white chevron icon centered. Hover state: border becomes #e6e6e6. Used in the upper-right of the Highlights carousel.

## Similar Brands

- **Wealthsimple** — Same near-black canvas, single-accent restraint, and a single geometric typeface carrying the whole interface
- **Linear** — Dark-mode UI with one typeface, aggressive negative tracking on display sizes, and ghost/outlined buttons over solid CTAs
- **Mercury** — Financial product page with obsidian surface stack, matte elevation, and a single warm accent to mark brand moments
- **Public.com** — Dark investing app with green-as-positive-signal, oversized product mockups in the hero, and a horizontal carousel for features
- **Substack** — Minimal dark landing with a single font, restrained color, and short text blocks beneath large product silhouettes

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ember-orange: #ffa16c;
  --color-signal-blue: #479ffa;
  --color-tape-green: #4ebe96;
  --color-snow: #ffffff;
  --color-fog: #868f97;
  --color-ash: #cccccc;
  --color-smoke: #999999;
  --color-iron: #828282;
  --color-platinum: #e6e6e6;
  --color-slate: #525252;
  --color-void: #000000;
  --color-obsidian: #0b0b0b;
  --color-graphite: #131313;

  /* Typography — Font Families */
  --font-calibre: 'calibre', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: -0.53px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.742px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.954px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -1.92px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.08px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -3.84px;
  --text-display-lg: 54px;
  --leading-display-lg: 1;
  --tracking-display-lg: -4.32px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-103: 103px;
  --spacing-190: 190px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 40px;
  --card-padding: 24px;
  --element-gap: 18px;

  /* Border Radius */
  --radius-md: 3.2px;
  --radius-md-2: 6px;
  --radius-lg: 10px;
  --radius-xl: 13.9806px;
  --radius-2xl: 16px;
  --radius-full: 50px;
  --radius-full-2: 99px;
  --radius-full-3: 275px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-icons: 6px;
  --radius-images: 16px;
  --radius-modals: 10px;
  --radius-buttons: 6px;
  --radius-navbuttons: 99px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.8) 0px 0px 44px 0px;
  --shadow-subtle: rgba(0, 0, 0, 0.85) 0px 1px 0px 0px;

  /* Surfaces */
  --surface-canvas: #0b0b0b;
  --surface-card: #131313;
  --surface-elevated-card: #191919;
  --surface-deep: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ember-orange: #ffa16c;
  --color-signal-blue: #479ffa;
  --color-tape-green: #4ebe96;
  --color-snow: #ffffff;
  --color-fog: #868f97;
  --color-ash: #cccccc;
  --color-smoke: #999999;
  --color-iron: #828282;
  --color-platinum: #e6e6e6;
  --color-slate: #525252;
  --color-void: #000000;
  --color-obsidian: #0b0b0b;
  --color-graphite: #131313;

  /* Typography */
  --font-calibre: 'calibre', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: -0.53px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.742px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.954px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -1.92px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.08px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -3.84px;
  --text-display-lg: 54px;
  --leading-display-lg: 1;
  --tracking-display-lg: -4.32px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-103: 103px;
  --spacing-190: 190px;

  /* Border Radius */
  --radius-md: 3.2px;
  --radius-md-2: 6px;
  --radius-lg: 10px;
  --radius-xl: 13.9806px;
  --radius-2xl: 16px;
  --radius-full: 50px;
  --radius-full-2: 99px;
  --radius-full-3: 275px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.8) 0px 0px 44px 0px;
  --shadow-subtle: rgba(0, 0, 0, 0.85) 0px 1px 0px 0px;
}
```