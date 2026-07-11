# Brainfish — Style Reference
> Stickers on construction paper

**Theme:** light

Brainfish is a neo-brutalist product site dressed in playground colors: white canvas, a single vivid lime-green accent, and full-bleed pastel sections (sky teal, mint green, cobalt blue) broken up by floating cloud, fish, and app-icon illustrations. Hard offset shadows (2px solid, zero blur) and thin black borders give every interactive surface a sticker-on-paper weight — components feel pinned to the page rather than floating. Type is geometric and tight (Satoshi at weight 500/700 with aggressive negative tracking on display sizes), and color enters the system sparingly: lime for action, pastel tints for data cards, full saturation only in section backgrounds. The whole system reads as a friendly, slightly hand-made explainer — UI is a comic strip about knowledge, not a dashboard.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Lime Pulse | `#a3e635` | `--color-lime-pulse` | Green action color for filled buttons, selected navigation states, and focused conversion moments. |
| Carbon Black | `#000000` | `--color-carbon-black` | Primary text, all borders, hard offset shadows, icon strokes — the structural ink of the system |
| Paper White | `#ffffff` | `--color-paper-white` | Page canvas, card surfaces, button fills, input backgrounds — the base layer everything pins onto |
| Graphite | `#171717` | `--color-graphite` | Secondary borders, card outlines, badge strokes — a near-black for when pure #000 reads too harsh at thin weights |
| Shadow Ink | `#0a0a0d` | `--color-shadow-ink` | Hard offset shadow color (rgb 10,10,13) for buttons, nav, and elevated cards — barely distinguishable from black but used in shadow stacks for slight cool depth |
| Fog | `#f5f5f5` | `--color-fog` | Footer background, subtle surface recess — the only off-white that isn't a pastel tint |
| Steel | `#737373` | `--color-steel` | Muted helper text, icon strokes, input placeholder, disabled-state borders |
| Iron | `#222222` | `--color-iron` | Nav text, nav borders, secondary button text — a softer black for dense navigation |
| Slate | `#333333` | `--color-slate` | Link text, image fallback borders, tertiary borders |
| Buttercream | `#fef3c8` | `--color-buttercream` | Yellow wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Mint Wash | `#d2fae5` | `--color-mint-wash` | Gray wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Lilac Mist | `#fae9ff` | `--color-lilac-mist` | Soft section background, alternate surface, and quiet card fill |
| Bubblegum | `#f5d1fe` | `--color-bubblegum` | Pink wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Amber Spark | `#fbbf25` | `--color-amber-spark` | Decorative illustration fill, accent icons, warm-highlight badges — a vivid yellow used sparingly for playful punctuation |
| Sky Wash | `#b7eaf6` | `--color-sky-wash` | Full-bleed hero section background — the dominant teal-blue band behind the primary headline |
| Cobalt Field | `#3366e0` | `--color-cobalt-field` | Full-bleed testimonial section background — the deep blue band used for social proof and quote panels |
| Meadow | `#b9f0c0` | `--color-meadow` | Full-bleed customer logo strip background — the green band under the product mockup |
| Amber Gradient | `linear-gradient(rgb(253, 229, 177), rgb(252, 214, 131))` | `--color-amber-gradient` | Warm illustration gradient (ramp to #fcd683) — used for hero badges, illustrated sun/warmth motifs |
| Lime Gradient | `linear-gradient(rgb(219, 244, 181), rgb(198, 238, 137))` | `--color-lime-gradient` | Green illustration gradient (ramp to #c6ee89) — used for grass, growth, and vitality motifs |

## Tokens — Typography

### Satoshi — Sole typeface — a geometric sans with circular o-forms and tall x-height. Weight 500 is the body and UI default (buttons, nav, labels); weight 700 is reserved for headlines and display copy. The negative tracking pattern (-1.34px at 64px scaling down to near-zero at 20px) is signature — it tightens display sizes aggressively while keeping body text comfortable. No italic, no light weight; the binary 500/700 gives the system a sticker-label confidence. · `--font-satoshi`
- **Substitute:** Inter, DM Sans, or General Sans
- **Weights:** 500, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px, 32px, 36px, 48px, 64px
- **Line height:** 1.14, 1.16, 1.33, 1.38, 1.40, 1.42, 1.44, 1.50, 1.57, 1.67
- **Letter spacing:** -0.0210em at 64px/12px, -0.0200em at 48px, -0.0170em at 36px, -0.0100em at 32px/14px, -0.0090em at 24px, -0.0060em at 20px and below
- **OpenType features:** `"ss01" on, "cv11" on`
- **Role:** Sole typeface — a geometric sans with circular o-forms and tall x-height. Weight 500 is the body and UI default (buttons, nav, labels); weight 700 is reserved for headlines and display copy. The negative tracking pattern (-1.34px at 64px scaling down to near-zero at 20px) is signature — it tightens display sizes aggressively while keeping body text comfortable. No italic, no light weight; the binary 500/700 gives the system a sticker-label confidence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.252px | `--text-caption` |
| body-sm | 14px | 1.42 | -0.14px | `--text-body-sm` |
| body | 16px | 1.5 | -0.096px | `--text-body` |
| subheading | 18px | 1.44 | -0.108px | `--text-subheading` |
| heading-sm | 20px | 1.4 | -0.12px | `--text-heading-sm` |
| heading | 24px | 1.38 | -0.216px | `--text-heading` |
| heading-lg | 32px | 1.33 | -0.32px | `--text-heading-lg` |
| display | 48px | 1.16 | -0.96px | `--text-display` |
| display-xl | 64px | 1.14 | -1.344px | `--text-display-xl` |

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
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 88 | 88px | `--spacing-88` |
| 100 | 100px | `--spacing-100` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 100px |
| cards | 16px |
| badges | 100px |
| inputs | 4px |
| buttons | 100px |
| cards-lg | 20px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(10, 10, 13) 2px 2px 0px 0px` | `--shadow-subtle` |
| subtle-2 | `rgb(10, 10, 13) 4px 4px 0px 0px` | `--shadow-subtle-2` |
| subtle-3 | `rgb(10, 10, 13) 1px 1px 0px 0px` | `--shadow-subtle-3` |
| subtle-4 | `rgb(23, 23, 23) 4px 4px 0px 0px` | `--shadow-subtle-4` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Lime CTA Button
**Role:** Primary action — book demo, get started, submit forms

Fill #a3e635, 1px solid #000000 border, border-radius 100px (pill), padding 10px 24px, font Satoshi 500 at 16px, text #000000, box-shadow 2px 2px 0px 0px rgb(10,10,13). Icon prefix allowed (calendar, arrow) at 16px, same #000000 stroke. No hover state needed — the shadow offset stays static to preserve the sticker feel.

### Ghost Outlined Button
**Role:** Secondary action — sign in, learn more, watch webinar

Fill #ffffff, 1px solid #000000 border, border-radius 100px, padding 10px 24px, font Satoshi 500 at 16px, text #000000, box-shadow 2px 2px 0px 0px rgb(10,10,13). Suffix icon allowed (external link arrow) at 16px.

### Pill Badge / Tag
**Role:** Section eyebrow, category tag, status indicator

Fill #ffffff, 1px solid #000000 border, border-radius 100px, padding 6px 14px, font Satoshi 500 at 14px, text #000000. Optional small icon prefix (fish, sparkle, brain) at 14px. No shadow — badges sit flat against the page, distinguishing them from buttons which are shadowed.

### Sticker Navigation Bar
**Role:** Top-level site navigation

Fill #ffffff, 1px solid #000000 border, border-radius 100px, padding 8px 16px with internal row-gap 4px, box-shadow 2px 2px 0px 0px rgb(10,10,13). Logo left (fish icon + 'Brainfish' wordmark, Satoshi 700 at 18px), nav links center (Satoshi 500 at 16px, #222222, 16px column-gap), CTA cluster right (Sign In ghost + Book Demo lime). The pill silhouette floating over a colored hero is the site's most recognizable chrome element.

### Product Screenshot Card
**Role:** Hero product mockup, feature illustration

Fill #ffffff, 1px solid #000000 border, border-radius 16px, padding 0 (image bleeds to edge), box-shadow 4px 4px 0px 0px rgb(23,23,23). Internal browser chrome (dots, URL bar) styled with #f5f5f5 fill and #737373 1px borders. Active tab marked with #a3e635 underline.

### Pastel Info Card
**Role:** Feature explanation, onboarding tip, callout

One of four pastel fills (#fef3c8 yellow, #d2fae5 green, #fae9ff lilac, #f5d1fe pink), 1px solid #000000 border, border-radius 12px, padding 24px, box-shadow 2px 2px 0px 0px rgb(10,10,13). Heading Satoshi 700 at 20px #000000, body Satoshi 500 at 16px #000000. Internal small icon allowed top-left at 24px.

### Lime Stat Card
**Role:** Customer result metric — +20% saved hours, +275% bottom-line ROI

Fill #a3e635, 1px solid #000000 border, border-radius 8px, padding 16px, no shadow. Big number Satoshi 700 at 32px #000000 (letter-spacing -0.32px), label Satoshi 500 at 14px #000000 below. Compact size — designed to sit inside a testimonial card, not standalone.

### Testimonial Card
**Role:** Customer quote with stat proof, tilted slightly for hand-placed feel

Fill #ffffff, 1px solid #000000 border, border-radius 16px, padding 24px, box-shadow 4px 4px 0px 0px rgb(23,23,23). Logo header (customer mark + name, Satoshi 700 at 18px). Quote body Satoshi 500 at 16px #000000, line-height 1.5. Attribution row: avatar circle 40px (border 1px #000000) + name (Satoshi 700 at 14px) + title (Satoshi 500 at 14px #737373). Two stat cards (#a3e635 fill, 8px radius) stacked at bottom. Cards may rotate -2deg to +2deg individually for collage effect.

### Customer Logo Strip
**Role:** Social proof band — recognizable brand marks in a row

Full-bleed band, fill #b9f0c0 (meadow green), top edge shaped as a wavy SVG divider (not a straight line — the green bleeds into the white above via a sinusoidal path). Logos rendered as monochrome #000000 SVG marks at ~80px wide, evenly distributed, 80px column-gap. No labels, no dividers between logos.

### Full-Bleed Color Section Background
**Role:** Section canvas for hero, testimonials, problem framing

Full viewport-width fill, no max-width constraint. Three signature colors alternate: #b7eaf6 sky teal (hero), #b9f0c0 meadow green (logo strip), #3366e0 cobalt blue (testimonials). Section transitions use wavy SVG dividers, not straight lines or hard cuts. Headline text always #000000 regardless of background — the contrast pairs verified at 18.2:1+ even against pastels.

### Floating Illustration
**Role:** Decorative atmosphere — clouds, fish, app icons, product fragments

Line-art style: 1.5px to 2px #000000 stroke, no fill (or pastel fill matching nearest section). White fill + 1px #000000 stroke for product-fragment cards. Scattered position (absolute, with slight rotation -8deg to +8deg) to avoid grid feel. Opacity 100% — illustrations are confident, not ghostly. Treat as layout furniture, not chrome.

### Input Field
**Role:** Email capture, search, form fields

Fill #ffffff, 1px solid #000000 border, border-radius 4px, padding 10px 14px, font Satoshi 500 at 16px #000000, placeholder #737373. No focus ring color change — focus state adds box-shadow 2px 2px 0px 0px rgb(10,10,13) and a 2px outline offset. No floating labels; placeholder text serves as the label.

### Eyebrow Chip (Section Intro)
**Role:** Above-headline section label — 'The Knowledge Layer for AI', 'Brainfish works'

Fill #ffffff, 1px solid #000000 border, border-radius 100px, padding 6px 14px, font Satoshi 500 at 14px, text #000000. Optional small brand icon prefix (fish, sparkle). Centered above the section heading, with 16px gap to heading. This is the primary 'topic signal' pattern — every major section starts with one.

## Do's and Don'ts

### Do
- Use #a3e635 as the sole action color — CTA fills, active nav states, and stat highlights only
- Apply hard offset shadows (2px 2px 0px 0px rgb(10,10,13)) to every interactive surface — buttons, nav, cards that respond to click
- Use 100px border-radius for all buttons, badges, and the nav bar — the pill silhouette is the system's most recognizable shape
- Set Satoshi to weight 500 for body and weight 700 for headlines — never use 400 or 600
- Break full-width color sections with wavy SVG dividers, not straight lines or hard cuts
- Use pastel tints (#fef3c8, #d2fae5, #fae9ff, #f5d1fe) for info cards — pick by content mood, not by category mapping
- Keep illustration strokes at 1.5–2px #000000 with no fill (or matching pastel fill) — line art, not flat illustration

### Don't
- Never use soft blurred drop-shadows — the system has zero blur across all elevation
- Never use grayscale gradients for buttons or cards — only the amber and lime illustration gradients exist
- Never use light or italic weights — Satoshi 500/700 is the binary
- Never use straight horizontal section dividers — always wavy SVG paths between color bands
- Never add opacity to illustrations — keep them at 100% with full stroke weight
- Never use #0000ee or browser-default link colors — links are #000000 with underline, or #333333 for secondary
- Never place a button on a pastel card without its 1px #000000 border and 2px offset shadow — naked fills break the sticker metaphor

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper White | `#ffffff` | Base canvas — most content lives on white |
| 1 | Fog | `#f5f5f5` | Subtle surface recess for footer and quiet bands |
| 2 | Pastel Card Tints | `#fef3c8` | Colored info cards (yellow/green/purple/pink tints used interchangeably at this level) |

## Elevation

- **Nav bar, CTA buttons, primary cards:** `2px 2px 0px 0px rgb(10, 10, 13)`
- **Outlined links, large interactive cards on hover:** `4px 4px 0px 0px rgb(10, 10, 13)`
- **Small inline buttons, inline cards:** `1px 1px 0px 0px rgb(10, 10, 13)`
- **Elevated testimonial cards:** `4px 4px 0px 0px rgb(23, 23, 23)`

## Imagery

Illustrations dominate over photography. The visual language is line-art with occasional pastel fills: outlined clouds float across the teal hero, small fish swim through the blue testimonial section, and scattered app/brand icons (Notion, Slack, HubSpot, etc.) tumble through the green 'problem' band. All illustrations use 1.5–2px black strokes with no gradients, no shadows, no realistic shading. Product screenshots appear once or twice (browser-framed knowledge base mockup) with white browser chrome, traffic-light dots, and active tabs underlined in lime. The overall effect is scrapbook-like — hand-placed stickers, not polished 3D renders. Photography is absent; the system is pure UI plus illustration.

## Layout

Sections are full-bleed and colored, not boxed: the page alternates between 100vw bands of teal hero, white product section, green customer-logo strip, and blue testimonial section. Max-width content within each band is 1200px, centered, with 24–80px of horizontal padding. Section rhythm uses wavy SVG dividers (never straight edges) between color transitions, and vertical section gaps of 80px inside white content bands. The hero is split — centered headline stack over the teal background, product mockup below, no split-image columns. Content sections use 2-column layouts (text left, visual right) for feature blocks and centered single-column stacks for the problem framing. Customer logo strip and eyebrow chips are centered. The footer sits on a soft #f5f5f5 gray band.

## Agent Prompt Guide

Quick Color Reference:
- text: #000000 (all body, headings, labels)
- background: #ffffff (page canvas and card surfaces)
- border: #000000 (1px on all interactive surfaces and cards)
- accent: #a3e635 (Lime Pulse — stat cards, illustration highlights, eyebrow icons)
- section-bg: #b7eaf6 (sky), #b9f0c0 (meadow), #3366e0 (cobalt)
- pastel-card tints: #fef3c8, #d2fae5, #fae9ff, #f5d1fe
- primary action: #a3e635 (filled action)

Example Component Prompts:

1. Build a hero section: full-bleed #b7eaf6 background with a wavy white divider at the bottom edge. Centered eyebrow pill (white fill, 1px #000 border, 100px radius, 6px 14px padding, Satoshi 500 14px) reading a topic label. Below it, display headline Satoshi 700 64px #000000, letter-spacing -1.34px, line-height 1.14, centered, max-width 720px. Body subtext Satoshi 500 18px #000000, centered, max-width 600px. Two buttons centered in a 16px row: lime CTA (#a3e635 fill, 1px #000 border, 100px radius, 10px 24px padding, Satoshi 500 16px, 2px 2px 0px #0a0a0d shadow) and ghost button (white fill, same border/radius/padding/shadow, 16px Satoshi 500 16px). Scattered cloud illustrations (1.5px #000 stroke, no fill) absolutely positioned around the text.

2. Build a testimonial card: white fill, 1px #000 border, 16px radius, 4px 4px 0px #171717 shadow, 24px padding, rotated -2deg. Customer logo header (Satoshi 700 18px). Quote body Satoshi 500 16px #000000, line-height 1.5. Attribution row: 40px circular avatar (1px #000 border) + name (Satoshi 700 14px) + title (Satoshi 500 14px #737373). Two stat cards stacked at bottom: #a3e635 fill, 1px #000 border, 8px radius, 16px padding — big number Satoshi 700 32px -0.32px tracking, label Satoshi 500 14px below.

3. Build a lime stat card: #a3e635 fill, 1px #000 border, 8px radius, 16px padding, no shadow. Big metric Satoshi 700 32px #000000, letter-spacing -0.32px. Sub-label Satoshi 500 14px #000000 on the next line. Designed to sit inside a white testimonial card, not standalone.

4. Build a customer logo strip: full-bleed band, #b9f0c0 fill, top edge a wavy SVG path transitioning from the white section above. Five to seven monochrome black SVG logos (#000000 only) at 80px wide, evenly spaced, 80px column-gap, vertically centered, no labels.

5. Build a pastel info card: fill #fef3c8 (or alternate between #d2fae5, #fae9ff, #f5d1fe for variety), 1px #000 border, 12px radius, 24px padding, 2px 2px 0px #0a0a0d shadow. Small icon (24px, 1.5px #000 stroke) top-left. Heading Satoshi 700 20px #000. Body Satoshi 500 16px #000000, line-height 1.5.

## Similar Brands

- **Linear** — Same hard offset shadows and tight geometric sans (Satoshi/Inter family) at display sizes with negative tracking
- **Notion** — Same hand-drawn illustration scattered across full-bleed colored sections, playful sticker-on-page weight
- **Vercel** — Same binary type weight system (500/700) and ultra-tight letter-spacing on display sizes, though Vercel goes dark where Brainfish goes light
- **Framer** — Same neo-brutalist elevation (hard 2px offset shadows, zero blur) combined with a single vivid accent color against white
- **Cron (Notion Calendar)** — Same full-bleed colored section bands separated by wavy SVG dividers rather than straight cuts

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-lime-pulse: #a3e635;
  --color-carbon-black: #000000;
  --color-paper-white: #ffffff;
  --color-graphite: #171717;
  --color-shadow-ink: #0a0a0d;
  --color-fog: #f5f5f5;
  --color-steel: #737373;
  --color-iron: #222222;
  --color-slate: #333333;
  --color-buttercream: #fef3c8;
  --color-mint-wash: #d2fae5;
  --color-lilac-mist: #fae9ff;
  --color-bubblegum: #f5d1fe;
  --color-amber-spark: #fbbf25;
  --color-sky-wash: #b7eaf6;
  --color-cobalt-field: #3366e0;
  --color-meadow: #b9f0c0;
  --color-amber-gradient: #fde5b1;
  --gradient-amber-gradient: linear-gradient(rgb(253, 229, 177), rgb(252, 214, 131));
  --color-lime-gradient: #dbf4b5;
  --gradient-lime-gradient: linear-gradient(rgb(219, 244, 181), rgb(198, 238, 137));

  /* Typography — Font Families */
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.252px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.42;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.096px;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --tracking-subheading: -0.108px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.12px;
  --text-heading: 24px;
  --leading-heading: 1.38;
  --tracking-heading: -0.216px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.33;
  --tracking-heading-lg: -0.32px;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -0.96px;
  --text-display-xl: 64px;
  --leading-display-xl: 1.14;
  --tracking-display-xl: -1.344px;

  /* Typography — Weights */
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-100: 100px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 100px;

  /* Named Radii */
  --radius-nav: 100px;
  --radius-cards: 16px;
  --radius-badges: 100px;
  --radius-inputs: 4px;
  --radius-buttons: 100px;
  --radius-cards-lg: 20px;

  /* Shadows */
  --shadow-subtle: rgb(10, 10, 13) 2px 2px 0px 0px;
  --shadow-subtle-2: rgb(10, 10, 13) 4px 4px 0px 0px;
  --shadow-subtle-3: rgb(10, 10, 13) 1px 1px 0px 0px;
  --shadow-subtle-4: rgb(23, 23, 23) 4px 4px 0px 0px;

  /* Surfaces */
  --surface-paper-white: #ffffff;
  --surface-fog: #f5f5f5;
  --surface-pastel-card-tints: #fef3c8;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-lime-pulse: #a3e635;
  --color-carbon-black: #000000;
  --color-paper-white: #ffffff;
  --color-graphite: #171717;
  --color-shadow-ink: #0a0a0d;
  --color-fog: #f5f5f5;
  --color-steel: #737373;
  --color-iron: #222222;
  --color-slate: #333333;
  --color-buttercream: #fef3c8;
  --color-mint-wash: #d2fae5;
  --color-lilac-mist: #fae9ff;
  --color-bubblegum: #f5d1fe;
  --color-amber-spark: #fbbf25;
  --color-sky-wash: #b7eaf6;
  --color-cobalt-field: #3366e0;
  --color-meadow: #b9f0c0;
  --color-amber-gradient: #fde5b1;
  --color-lime-gradient: #dbf4b5;

  /* Typography */
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.252px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.42;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.096px;
  --text-subheading: 18px;
  --leading-subheading: 1.44;
  --tracking-subheading: -0.108px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.12px;
  --text-heading: 24px;
  --leading-heading: 1.38;
  --tracking-heading: -0.216px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.33;
  --tracking-heading-lg: -0.32px;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -0.96px;
  --text-display-xl: 64px;
  --leading-display-xl: 1.14;
  --tracking-display-xl: -1.344px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-100: 100px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 100px;

  /* Shadows */
  --shadow-subtle: rgb(10, 10, 13) 2px 2px 0px 0px;
  --shadow-subtle-2: rgb(10, 10, 13) 4px 4px 0px 0px;
  --shadow-subtle-3: rgb(10, 10, 13) 1px 1px 0px 0px;
  --shadow-subtle-4: rgb(23, 23, 23) 4px 4px 0px 0px;
}
```