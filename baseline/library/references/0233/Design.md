# Geniestudio — Style Reference
> playful pastel sky with floating doodles

**Theme:** light

Geniestudio speaks the visual language of a modern design canvas: an airy, pastel-blue workspace where playful illustrated characters drift across generous negative space. The system pairs one near-black CTA (#181d27) against a pale blue canvas (#ebf5ff) with a quartet of saturated illustration accents — cornflower blue, tangerine, violet, mustard — that inject warmth without competing with the UI. Typography is restrained and geometric: Aeonik weight 500 carries the headlines with tight -0.02em tracking, while Geist 500/600 handles everything from 10px captions to button labels. Surfaces are flat, borders are hairline, radii are generous (32px is the default), and shadows are barely-there blue-tinted washes rather than dark drops. The result is a tool that feels creative, approachable, and quietly confident — color is reserved for storytelling, not chrome.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Sky Wash | `#ebf5ff` | `--color-sky-wash` | Page canvas — pale blue sets the airier alternative to pure white and gives the page a soft atmospheric base |
| Paper White | `#fafdff` | `--color-paper-white` | Card and elevated surface — a whisper cooler than pure white, keeps surfaces from feeling stark against the sky canvas |
| Cloud Veil | `#f6f7f8` | `--color-cloud-veil` | Subtle alternate surface and fill wash for muted UI elements that need separation without contrast |
| Pure White | `#ffffff` | `--color-pure-white` | Nested card surfaces, icon fills, and button text — the brightest stop in the stack |
| Midnight Ink | `#0a0d12` | `--color-midnight-ink` | Primary text and heading color — near-black with a cool cast, achieves 19.5:1 against white for maximum readability |
| Pressed Charcoal | `#181d27` | `--color-pressed-charcoal` | Primary action buttons and dark UI blocks — the only filled action color in the system, creates decisive contrast against the pale canvas |
| Stone | `#535862` | `--color-stone` | Body text, hairline borders, and icon strokes — the workhorse neutral for everything between headings and the canvas |
| Fog | `#93979f` | `--color-fog` | Muted helper text, secondary borders, and disabled states — sits between Stone and the canvas to recede gracefully |
| Cornflower | `#4fbeff` | `--color-cornflower` | Illustration accent and decorative icon stroke — the cool counterweight to the warm accent trio |
| Tangerine | `#f26110` | `--color-tangerine` | Illustration accent and decorative warm pop — provides energy and contrast in character and icon design |
| Amethyst | `#9552e0` | `--color-amethyst` | Illustration accent and decorative stroke — adds the cool-purple note that distinguishes the palette from a typical blue-orange scheme |
| Mustard | `#bb9915` | `--color-mustard` | Illustration accent and decorative warm-yellow stroke — the earthy counterpoint that keeps the palette from feeling synthetic |
| Signal Blue | `#0099ff` | `--color-signal-blue` | Link text, active link borders, and decorative brand-blue fills — the chromatic voice for navigation and emphasis |
| Deep Cobalt | `#0069e0` | `--color-deep-cobalt` | Hover/active state for Signal Blue, gradient stop in the brand blue gradient, and decorative illustration stroke |
| Morning Tint | `#cce7ff` | `--color-morning-tint` | Tinted card and chip background — the lightest blue stop, used for callout cards and soft highlights |
| Lilac Mist | `#f1e6ff` | `--color-lilac-mist` | Tinted card background for purple-coded sections or category chips |
| Sprout | `#d3f6e3` | `--color-sprout` | Gray wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Buttery Gradient | `linear-gradient(rgb(255, 249, 224) 0%, rgb(255, 236, 163) 100%)` | `--color-buttery-gradient` | Gradient: linear-gradient(rgb(255, 249, 224) 0%, rgb(255, 236, 163) 100%) — soft warm wash for feature callouts |
| Lilac Gradient | `linear-gradient(rgb(244, 235, 255) 0%, rgb(228, 204, 255) 100%)` | `--color-lilac-gradient` | Gradient: linear-gradient(rgb(244, 235, 255) 0%, rgb(228, 204, 255) 100%) — soft purple wash for feature callouts |
| Sky Gradient | `linear-gradient(rgb(229, 246, 255) 0%, rgb(194, 233, 255) 100%)` | `--color-sky-gradient` | Gradient: linear-gradient(rgb(229, 246, 255) 0%, rgb(194, 233, 255) 100%) — soft blue wash for feature callouts |
| Sunset Gradient | `linear-gradient(rgb(255, 242, 235) 0%, rgb(255, 209, 184) 100%)` | `--color-sunset-gradient` | Gradient: linear-gradient(rgb(255, 242, 235) 0%, rgb(255, 209, 184) 100%) — warm orange wash for feature callouts |
| Brand Blue Gradient | `linear-gradient(rgb(71, 157, 255) 11.43%, rgb(0, 105, 224) 78.2%)` | `--color-brand-blue-gradient` | Gradient: linear-gradient(rgb(71, 157, 255) 11.43%, rgb(0, 105, 224) 78.2%) — the signature brand gradient for hero accents and premium surfaces |

## Tokens — Typography

### Aeonik — Display and heading family — a single weight (500) across all display sizes from 20px to 148px, with tight -0.02em tracking that tightens the wordmark without becoming geometric. The "case" feature standardizes letterforms for brand consistency. The signature 148px hero size paired with 1.05 line-height creates a poster-like headline block. · `--font-aeonik`
- **Substitute:** Inter, Satoshi, General Sans
- **Weights:** 500
- **Sizes:** 20px, 24px, 32px, 48px, 72px, 148px
- **Line height:** 1.05-1.25
- **Letter spacing:** -0.0200em
- **OpenType features:** `"case"`
- **Role:** Display and heading family — a single weight (500) across all display sizes from 20px to 148px, with tight -0.02em tracking that tightens the wordmark without becoming geometric. The "case" feature standardizes letterforms for brand consistency. The signature 148px hero size paired with 1.05 line-height creates a poster-like headline block.

### Geist — Body, UI, caption, and button family — Geist handles every functional text from 10px micro-labels to 20px subheads. Weight 500 is the default, 600 reserved for emphasis. The -0.01em tracking and "case" feature keep utility text aligned with the display family. · `--font-geist`
- **Substitute:** Inter, Söhne, Geist Sans (open-source)
- **Weights:** 500, 600
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 20px
- **Line height:** 1.14-1.50
- **Letter spacing:** -0.0100em
- **OpenType features:** `"case"`
- **Role:** Body, UI, caption, and button family — Geist handles every functional text from 10px micro-labels to 20px subheads. Weight 500 is the default, 600 reserved for emphasis. The -0.01em tracking and "case" feature keep utility text aligned with the display family.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.14 | -0.1px | `--text-caption` |
| body | 14px | 1.35 | -0.14px | `--text-body` |
| body-lg | 16px | 1.5 | -0.16px | `--text-body-lg` |
| subheading | 18px | 1.4 | -0.18px | `--text-subheading` |
| heading-sm | 20px | 1.25 | -0.4px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.64px | `--text-heading` |
| heading-lg | 48px | 1.17 | -0.96px | `--text-heading-lg` |
| display | 72px | 1.11 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 88 | 88px | `--spacing-88` |
| 120 | 120px | `--spacing-120` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 32px |
| icons | 16px |
| pills | 9999px |
| images | 16px |
| buttons | 32px |
| cards-inner | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(4, 69, 144, 0.08) 0px 14px 20px 4px` | `--shadow-lg` |
| subtle | `rgba(10, 13, 18, 0.8) 0px 1px 2px 0px, rgb(10, 13, 18) 0p...` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 24-40px
- **Element gap:** 16-24px

## Components

### Primary Action Button (filled)
**Role:** The singular high-emphasis CTA

Pressed Charcoal (#181d27) background, white (#ffffff) text, Geist 500 at 16px, 9999px pill radius (effectively 32px+ for the 40px height), 12px vertical / 28px horizontal padding. The dark fill against the sky canvas is the only moment of true visual weight on the page.

### Ghost Navigation Button
**Role:** Compact utility action in the top nav

Same Pressed Charcoal fill as the primary action but scaled down — Geist 500 at 14px, white text, 9999px radius, 8px vertical / 16px horizontal padding. Sits in the top-right of the navigation bar.

### Testimonial Card
**Role:** Social proof card in a multi-column grid

Paper White (#fafdff) surface, 1px Stone (#535862) hairline border, 32px border-radius, 40px padding. Contains a quote in Geist 16px weight 500, a 48px circular avatar, name in Geist 14px weight 600 in Midnight Ink, role/company in Geist 12px in Stone, and a company logo aligned right. No drop shadow — separation comes from the border alone.

### Feature Callout Card (tinted)
**Role:** Category-coded highlight card

Tinted surface in one of four pastel washes (Morning Tint, Lilac Mist, Sprout, or Veil), 32px border-radius, 24-40px padding. Houses an illustration or icon and a short descriptor. The tint is the entire visual identity — no border, no shadow.

### Top Navigation Bar
**Role:** Persistent header with brand mark and utility links

Transparent over the sky canvas, no background fill. Left: Genie diamond logomark + wordmark in Midnight Ink. Center: Geist 14px text links (How it works, Pricing) in Stone. Right: ghost dark button. No border, no shadow — the nav floats.

### Hero Headline Block
**Role:** The opening visual statement

Centered, Aeonik 500 at 72-148px, Midnight Ink (#0a0d12) text, letter-spacing -1.44px, line-height 1.05-1.11. Optional inline accent: illustrated emoji characters in Cornflower, Tangerine, Amethyst, Mustard replace one inline word. Geist 18px weight 500 subtext in Stone below.

### Icon Tile
**Role:** Decorative or functional icon container

16px border-radius, 24-32px square, fill in one of the four accent colors or a tinted neutral. Used for inline icons and as illustration anchors.

### Avatar Group
**Role:** Clustered user avatars for social context

Circular 40-48px avatars with 4-8px negative overlap, alternating between the four illustration accent colors. No border.

### Section Divider (implicit)
**Role:** Breaks between page sections

No visible line — sections separate through 64-80px vertical gap and alternating surface treatments (sky canvas → paper card → sky canvas). The whitespace is the divider.

### Testimonial Grid Container
**Role:** Multi-column social proof layout

3-column grid with 24px gap, 3 cards per row, each card 32px radius with 1px Stone border. Cards align their footers (avatar + name + company logo) along a consistent baseline.

### Brand Gradient Surface
**Role:** Premium or hero accent block

Filled with the Brand Blue Gradient (linear-gradient 135deg from #479dff to #0069e0). Used sparingly for hero accents, premium tier cards, or the brand mark backdrop. Pairs with white text in Geist 500.

### Logo Mark
**Role:** Brand identity in nav and social cards

Diamond/rhombus glyph in Midnight Ink, 24-32px, paired with the 'Genie' wordmark in Geist 500 16px. The mark echoes the card radius family with its slightly soft angles.

## Do's and Don'ts

### Do
- Use Pressed Charcoal (#181d27) exclusively for the primary action — it is the only filled button color in the system
- Set every card, button, and large container to 32px border-radius — the 32px radius is the system's signature curvature
- Keep the page canvas at Sky Wash (#ebf5ff); do not default to pure white for the body background
- Pair Aeonik 500 for all display text with Geist 500/600 for all UI text — never mix in a third family
- Use the four illustration accents (Cornflower, Tangerine, Amethyst, Mustard) only for decorative illustration, emoji characters, and icon fills — never for UI controls or text
- Apply -0.02em letter-spacing to all Aeonik text and -0.01em to all Geist text for typographic consistency
- Separate cards from the canvas with a 1px Stone (#535862) border rather than a drop shadow

### Don't
- Do not use Signal Blue (#0099ff) or Deep Cobalt (#0069e0) for primary action buttons — the action color is Pressed Charcoal, not blue
- Do not apply heavy dark drop-shadows; the system uses one blue-tinted 8% opacity wash and hairline borders only
- Do not use the illustration accent colors for body text, headings, or functional UI states
- Do not use multiple font families; Aeonik is for display, Geist is for everything else
- Do not mix radii — avoid using 4px, 12px, or 20px; the scale is 8px (inner), 16px (icons/images), 24px (large cards), and 32px (default)
- Do not fill the page with saturated colors; the dominant visual experience is pastel sky with sparse pops of character
- Do not use pure white (#ffffff) for the page canvas — use Sky Wash (#ebf5ff) or Paper White (#fafdff) for surfaces

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Sky Canvas | `#ebf5ff` | Page background, sets the airy pastel atmosphere |
| 1 | Paper Card | `#fafdff` | Default card and panel surface, lifts content off the canvas |
| 2 | Pure White Nest | `#ffffff` | Nested elements, icons inside cards, and button text |
| 3 | Tinted Chip | `#cce7ff` | Category-tinted cards and soft highlight washes |
| 4 | Veil | `#f6f7f8` | Muted fill surface for inactive or secondary blocks |

## Elevation

- **Cards and feature panels:** `rgba(4, 69, 144, 0.08) 0px 14px 20px 4px`
- **Primary action buttons (active/pressed):** `rgba(10, 13, 18, 0.8) 0px 1px 2px 0px, rgb(10, 13, 18) 0px 0px 0px 1px`

## Imagery

Illustration-dominant visual language with zero photography. The site relies on hand-drawn-style characters (emoji-faced blobs in the four accent colors), simple geometric props (clouds, paper planes, flowers, mushrooms), and tiny UI motifs (envelopes, hearts, stars) floating across generous negative space. Illustrations are flat with soft fills and minimal outlines, using the full Cornflower/Tangerine/Amethyst/Mustard quartet. Tinted gradient washes (Buttery, Lilac, Sky, Sunset) serve as soft backdrops for feature callouts. The aesthetic is sticker-pack playful — childlike but precise, with characters scattered like confetti rather than arranged in grids.

## Layout

Full-bleed page on a max-width 1200px container, with sections flowing vertically at 64-80px intervals. The hero is a centered single-column stack: headline, optional inline illustrated characters, subtext, primary button. The second section abandons the grid entirely for a scattered-illustration composition with a single short caption anchored center. Subsequent sections return to structured grids — a 3-column testimonial grid with 24px gaps, then 2-column or single-column feature bands. The overall rhythm alternates between generous breathing room (sections with 80%+ whitespace) and denser card grids. Navigation is a minimal top bar with no background fill, and sections separate through whitespace rather than dividers or alternating background colors.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0a0d12 (Midnight Ink)
- background: #ebf5ff (Sky Wash)
- surface/card: #fafdff (Paper White)
- border: #535862 (Stone) at 1px
- accent: #4fbeff (Cornflower) for decorative use only
- primary action: #181d27 (filled action)

**3-5 Example Component Prompts**

1. **Hero Headline Block**: Centered on Sky Wash (#ebf5ff) canvas. Headline in Aeonik 500 at 72px, Midnight Ink (#0a0d12), letter-spacing -1.44px, line-height 1.11. Optional inline replacement: three circular 48px character avatars in Cornflower (#4fbeff), Tangerine (#f26110), and Amethyst (#9552e0). Subtext in Geist 500 at 18px, Stone (#535862). Primary button: Pressed Charcoal (#181d27) background, white text, Geist 500 16px, 9999px radius, 12px 28px padding.

2. **Testimonial Card**: Paper White (#fafdff) surface, 1px Stone (#535862) border, 32px border-radius, 40px padding. Quote text in Geist 500 at 16px, Midnight Ink. Footer row: 48px circular avatar (left), name in Geist 600 14px Midnight Ink + role in Geist 500 12px Stone (center-left), company logo (right). No shadow.

3. **Feature Callout Card (Tinted)**: Morning Tint (#cce7ff) fill, 32px radius, 32px padding. 48px square icon tile with 16px radius in Cornflower (#4fbeff) at top-left. Headline in Aeonik 500 at 24px, Midnight Ink. Description in Geist 500 at 14px, Stone. No border, no shadow.

4. **Top Navigation Bar**: Transparent over Sky Wash canvas. Left: 24px diamond logomark in Midnight Ink + 'Genie' wordmark in Geist 500 16px. Center: Geist 500 14px links in Stone with 24px gap. Right: ghost dark button — Pressed Charcoal fill, white text, Geist 500 14px, 9999px radius, 8px 16px padding. No border, no background.

5. **Brand Gradient Hero Accent**: A 400px wide block filled with the Brand Blue Gradient (linear-gradient 135deg, #479dff → #0069e0), 32px radius, 40px padding. White Geist 500 18px text centered. Used once per page for premium emphasis.

## Similar Brands

- **Figma** — Same soft pastel canvas with generous whitespace, rounded cards, and a single dark primary action against a light background
- **Linear** — Same hairline-border card treatment, tight letter-spacing on geometric sans, and the philosophy of one decisive accent color
- **Pitch** — Same playful character-driven illustration style mixed with clean SaaS UI, and the pastel tinted card surfaces
- **Notion** — Same airy generous layout with minimal borders, soft surfaces, and a willingness to let illustrations breathe across the canvas

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-sky-wash: #ebf5ff;
  --color-paper-white: #fafdff;
  --color-cloud-veil: #f6f7f8;
  --color-pure-white: #ffffff;
  --color-midnight-ink: #0a0d12;
  --color-pressed-charcoal: #181d27;
  --color-stone: #535862;
  --color-fog: #93979f;
  --color-cornflower: #4fbeff;
  --color-tangerine: #f26110;
  --color-amethyst: #9552e0;
  --color-mustard: #bb9915;
  --color-signal-blue: #0099ff;
  --color-deep-cobalt: #0069e0;
  --color-morning-tint: #cce7ff;
  --color-lilac-mist: #f1e6ff;
  --color-sprout: #d3f6e3;
  --color-buttery-gradient: #fff2be;
  --gradient-buttery-gradient: linear-gradient(rgb(255, 249, 224) 0%, rgb(255, 236, 163) 100%);
  --color-lilac-gradient: #e4ccff;
  --gradient-lilac-gradient: linear-gradient(rgb(244, 235, 255) 0%, rgb(228, 204, 255) 100%);
  --color-sky-gradient: #c2e9ff;
  --gradient-sky-gradient: linear-gradient(rgb(229, 246, 255) 0%, rgb(194, 233, 255) 100%);
  --color-sunset-gradient: #ffd1b8;
  --gradient-sunset-gradient: linear-gradient(rgb(255, 242, 235) 0%, rgb(255, 209, 184) 100%);
  --color-brand-blue-gradient: #479dff;
  --gradient-brand-blue-gradient: linear-gradient(rgb(71, 157, 255) 11.43%, rgb(0, 105, 224) 78.2%);

  /* Typography — Font Families */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.14;
  --tracking-caption: -0.1px;
  --text-body: 14px;
  --leading-body: 1.35;
  --tracking-body: -0.14px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.4px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.96px;
  --text-display: 72px;
  --leading-display: 1.11;
  --tracking-display: -1.44px;

  /* Typography — Weights */
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-120: 120px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 24-40px;
  --element-gap: 16-24px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 36px;
  --radius-full: 90px;

  /* Named Radii */
  --radius-cards: 32px;
  --radius-icons: 16px;
  --radius-pills: 9999px;
  --radius-images: 16px;
  --radius-buttons: 32px;
  --radius-cards-inner: 8px;

  /* Shadows */
  --shadow-lg: rgba(4, 69, 144, 0.08) 0px 14px 20px 4px;
  --shadow-subtle: rgba(10, 13, 18, 0.8) 0px 1px 2px 0px, rgb(10, 13, 18) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-sky-canvas: #ebf5ff;
  --surface-paper-card: #fafdff;
  --surface-pure-white-nest: #ffffff;
  --surface-tinted-chip: #cce7ff;
  --surface-veil: #f6f7f8;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-sky-wash: #ebf5ff;
  --color-paper-white: #fafdff;
  --color-cloud-veil: #f6f7f8;
  --color-pure-white: #ffffff;
  --color-midnight-ink: #0a0d12;
  --color-pressed-charcoal: #181d27;
  --color-stone: #535862;
  --color-fog: #93979f;
  --color-cornflower: #4fbeff;
  --color-tangerine: #f26110;
  --color-amethyst: #9552e0;
  --color-mustard: #bb9915;
  --color-signal-blue: #0099ff;
  --color-deep-cobalt: #0069e0;
  --color-morning-tint: #cce7ff;
  --color-lilac-mist: #f1e6ff;
  --color-sprout: #d3f6e3;
  --color-buttery-gradient: #fff2be;
  --color-lilac-gradient: #e4ccff;
  --color-sky-gradient: #c2e9ff;
  --color-sunset-gradient: #ffd1b8;
  --color-brand-blue-gradient: #479dff;

  /* Typography */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.14;
  --tracking-caption: -0.1px;
  --text-body: 14px;
  --leading-body: 1.35;
  --tracking-body: -0.14px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.4px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -0.96px;
  --text-display: 72px;
  --leading-display: 1.11;
  --tracking-display: -1.44px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-120: 120px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 36px;
  --radius-full: 90px;

  /* Shadows */
  --shadow-lg: rgba(4, 69, 144, 0.08) 0px 14px 20px 4px;
  --shadow-subtle: rgba(10, 13, 18, 0.8) 0px 1px 2px 0px, rgb(10, 13, 18) 0px 0px 0px 1px;
}
```