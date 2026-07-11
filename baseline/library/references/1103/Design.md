# Amplemarket — Style Reference
> Frosted white workspace, sun-stained corner gradient. A bright cool neutrals system with a deep violet core and one orange ember, all set in a single tight grotesk.

**Theme:** light

Amplemarket operates as a minimal white canvas pierced by concentrated color. The default page is near-empty — white backgrounds, a single grotesk typeface at work, hairline borders, and tight negative tracking at display sizes that compresses the headline into a compact block. The signature move is a vivid radial atmosphere (orange → cream → lavender → cyan) that bleeds in from page edges as a soft glow rather than a background fill, paired with a hand-drawn line illustration that humanizes the otherwise austere grid. A deep violet (#10054d) is reserved for dark sections and bold accent surfaces, never competing with the bright gradient. Components are flat, border-driven, and generously spaced; elevation is almost always a 1px inset ring rather than a drop shadow. The effect is a workspace that feels calm and grown-up, with color appearing in deliberate, emotional bursts.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#111111` | `--color-ink-black` | Primary text, hairline borders, icon strokes, filled button background — the dominant structural neutral at ~5000 occurrences, always reading as near-black with no warm or cool cast |
| Paper White | `#ffffff` | `--color-paper-white` | Primary page and card surfaces, inverse text on dark buttons and dark sections |
| Obsidian Warm | `#272625` | `--color-obsidian-warm` | Dark section background (CTAs, feature blocks), dark surface for cards inside dark contexts — subtly warmer than pure black so the violet text on top still feels in the same family |
| Graphite Mid | `#6d6c6b` | `--color-graphite-mid` | Secondary body text, muted labels, caption helper copy, decorative image borders |
| Cream Paper | `#f4f3ef` | `--color-cream-paper` | Soft warm off-white for subtle surface lifts, link/chip backgrounds — the only non-pure-white surface tint in the system |
| Stone Border | `#b1b1af` | `--color-stone-border` | Light hairline borders on nav and link components, low-contrast dividers |
| Pearl Mist | `#ecebea` | `--color-pearl-mist` | Subtle disabled or secondary button surface, barely-there hover states |
| Deep Violet | `#10054d` | `--color-deep-violet` | Brand purple — appears on dark surfaces, emphasis cards, and the bold accent; concentrated and used sparingly so it reads as a power color, not a wash |
| Violet Shade | `#2e2460` | `--color-violet-shade` | Input field background on dark sections, slightly lifted violet that keeps form controls readable against the obsidian surface |
| Ember Orange | `#e8400d` | `--color-ember-orange` | Orange wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Blush Pink | `#ffd7f0` | `--color-blush-pink` | Soft pastel card surface — used on feature or category tiles to break the monochrome rhythm with a gentle chromatic note |
| Mint Green | `#b7efb2` | `--color-mint-green` | Soft pastel card surface — secondary chromatic card variant in the same family as Blush Pink and Pale Yellow |
| Pale Yellow | `#ffef99` | `--color-pale-yellow` | Soft pastel card surface — warm accent tile, reads warm against the cool violets |
| Lilac Wash | `#e2ddfd` | `--color-lilac-wash` | Near-gray lavender card surface — the quietest chromatic tile, used when a hint of color is needed without breaking the neutral rhythm |

## Tokens — Typography

### Labil Grotesk Variable — Single-family system — Labil Grotesk carries every voice from 8px micro-labels to the 84px hero display. Variable weight axis spans Regular through Black. The custom stylistic sets ss01 and ss02 are enabled across the board, activating alternate letterforms (notably the single-story 'a' and a distinctive 'g') that give the brand its quiet distinctive voice. The signature typographic move is aggressive negative tracking at display sizes: -0.05em at 84px and -0.04em at 56px compresses the headline into a dense block that reads as confident rather than airy. Small sizes sit in positive tracking (+0.025em, +0.030em) for label and eyebrow legibility. · `--font-labil-grotesk-variable`
- **Substitute:** Inter Variable (closest free analog with similar grotesk proportions and weight range); fall back to system-ui sans for body when Labil is unavailable
- **Weights:** 400, 500, 700, 900
- **Sizes:** 8, 10, 12, 14, 16, 20, 24, 28, 36, 44, 56, 84
- **Line height:** 0.80, 1.00, 1.10, 1.20, 1.30
- **Letter spacing:** -0.0500em to 0.0300em (tightest at 84px ≈ -4.2px, expanding to +0.84px at small caps labels)
- **OpenType features:** `"ss01" on, "ss02" on`
- **Role:** Single-family system — Labil Grotesk carries every voice from 8px micro-labels to the 84px hero display. Variable weight axis spans Regular through Black. The custom stylistic sets ss01 and ss02 are enabled across the board, activating alternate letterforms (notably the single-story 'a' and a distinctive 'g') that give the brand its quiet distinctive voice. The signature typographic move is aggressive negative tracking at display sizes: -0.05em at 84px and -0.04em at 56px compresses the headline into a dense block that reads as confident rather than airy. Small sizes sit in positive tracking (+0.025em, +0.030em) for label and eyebrow legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | 0.3px | `--text-caption` |
| eyebrow | 12px | 1.2 | 0.36px | `--text-eyebrow` |
| body-sm | 14px | 1.3 | -0.14px | `--text-body-sm` |
| body | 16px | 1.3 | -0.16px | `--text-body` |
| subheading | 20px | 1.2 | -0.34px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.48px | `--text-heading-sm` |
| heading | 28px | 1.1 | -0.56px | `--text-heading` |
| heading-lg | 36px | 1.1 | -0.72px | `--text-heading-lg` |
| display | 56px | 1 | -2.24px | `--text-display` |
| hero | 84px | 0.8 | -4.2px | `--text-hero` |

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 84 | 84px | `--spacing-84` |
| 100 | 100px | `--spacing-100` |
| 112 | 112px | `--spacing-112` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 12px |
| icons | 12px |
| pills | 9999px |
| small | 4px |
| inputs | 12px |
| buttons | 12px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(17, 17, 17, 0.05) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| xl | `rgba(17, 17, 17, 0.12) 0px 26px 60px -6px, rgba(17, 17, 1...` | `--shadow-xl` |
| sm | `rgba(17, 17, 17, 0.02) 0px -6px 6px 0px, rgba(17, 17, 17,...` | `--shadow-sm` |
| subtle-2 | `rgba(17, 17, 17, 0.05) 0px 0px 1px 0px, rgba(17, 17, 17, ...` | `--shadow-subtle-2` |
| xl-2 | `rgba(25, 34, 35, 0.12) 0px 26px 60px -6px, rgba(25, 34, 3...` | `--shadow-xl-2` |
| subtle-3 | `rgba(17, 17, 17, 0.04) 0px 1px 2px 0px, rgba(17, 17, 17, ...` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 20px
- **Element gap:** 8px

## Components

### Sticky Pill Navigation
**Role:** Primary top navigation — floats as a pill with logo, dropdown links, and dual CTAs

White pill (8px radius) on white page, separated visually by its own drop shadow and a subtle top border. Logo on the left in Ink Black, three link groups (Product, Why us, Resources) with chevron-down icons, two flat links (Customers, Pricing), then an outlined 'Open app' button (white fill, Ink Black 1px border, 8px radius, 16px 20px padding) and a filled 'Get free trial' button (Ink Black fill, white text, 8px radius, 16px 20px padding). Nav height ~56-64px, anchored to the top of the viewport.

### NEW Eyebrow Pill Badge
**Role:** Announcement badge above hero headline

8px radius pill. Ink Black 1px border, white fill. Left cell is filled Ink Black with 'NEW' text in white at 12px weight 700 positive tracking +0.36px. Right cell is white with descriptive text in Ink Black at 12px weight 500, followed by a right-arrow icon. Total height ~28px, padding 6px 12px on each cell.

### Email Capture Input + Submit
**Role:** Primary hero lead-capture form

Single horizontal pill, 12px radius, white fill, Ink Black 1px border, ~56px height. Left field: transparent, placeholder 'Enter your company email' in Graphite Mid (#6d6c6b) at 16px. Right button: Ink Black fill, white text 'Get free trial' at 16px weight 500, flush to the right edge with no internal gap. Placeholder text uses a softer weight to keep the affordance obvious without a label.

### Filled Primary Button
**Role:** High-emphasis action (Get free trial, Discover Duo on dark)

12px radius. Ink Black (#111111) fill with Paper White text at 16px weight 500, letter-spacing -0.16px. Padding 14px 20px. No border. On dark sections, the variant inverts to Paper White fill with Ink Black text. Hover: subtle 1px inset ring in the same tone at 5% opacity.

### Outlined Secondary Button
**Role:** Lower-emphasis action paired with primary (Open app)

8px radius. Paper White fill, Ink Black 1px border, Ink Black text at 16px weight 500, letter-spacing -0.16px. Padding 14px 20px. Sits to the left of the primary in the nav with a clear visual demotion — the border is the only differentiator.

### Logo Trust Card
**Role:** Customer logo tile in the trust grid

White surface, 12px radius, no border, no shadow. Centered logo at ~24px height in Ink Black, with a small caption 'Migrated off [Competitor]' beneath in Graphite Mid at 14px. Arranged in a 4-column grid with 16-20px gaps. The card itself is invisible — only the logo and caption register.

### Testimonial Card
**Role:** Single customer quote with attribution

White surface, no card chrome. Quote text at 28-36px weight 500, Ink Black, letter-spacing -0.56 to -0.72px, sitting on a left-aligned column. Below the quote: a 1px hairline divider (rgba(17,17,17,0.12)), then a 40px circular avatar, the customer's name in weight 500, role in Graphite Mid weight 400, and the company logo right-aligned in the same row.

### Dark Section CTA Block
**Role:** Full-bleed dark band for product feature highlights (Duo Copilot)

Obsidian Warm (#272625) background, full-bleed. Centered stack with vertical padding 80-100px. Eyebrow pill badge with a small duo-tone icon (white + Deep Violet) sitting in a white rounded square. Headline 'Transform the way you sell with Duo Copilot' in Paper White at 44-56px weight 500, letter-spacing -1.76 to -2.24px. Subtext in Paper White at 16px weight 400. Single white-outlined 'Discover Duo' button centered below.

### Hand-Drawn Line Illustration
**Role:** Decorative hero accent — rocket/astronaut on the right side of the hero

Single-weight black line illustration on the white hero canvas, positioned far-right, partially cropped by the viewport. ~1.5px stroke, no fill, no shading. Sits at the same scale as the headline so it reads as a counterweight rather than decoration. The illustration is the only figurative element in the system.

### Social Proof Stars Row
**Role:** Trust indicator under the hero form

Inline row: Google 'G' logo (multicolor), five filled stars in Ink Black, then 'Generative AI Cool Vendor by' in Graphite Mid at 12px followed by 'Gartner' in weight 700 Ink Black. All elements are 12-14px, sitting on a single baseline.

### Pastel Feature Card
**Role:** Chromatic accent tile for category groupings

Solid pastel fill (Blush Pink / Mint Green / Pale Yellow / Lilac Wash), 12px radius, padding 20px. Icon at 24px in Ink Black, title at 20px weight 500 Ink Black, optional caption at 14px weight 400 Graphite Mid. No border, no shadow. Used sparingly — typically 3-4 per page, always to break an otherwise monochrome section.

### Dark Input Field
**Role:** Form control inside dark sections

Violet Shade (#2e2460) fill, 12px radius, no visible border, Paper White text, Graphite Mid placeholder. Padding 14px 16px. Focus: 2px ring in Paper White at 50% opacity. Used in Obsidian Warm sections where standard white inputs would shatter the atmosphere.

## Do's and Don'ts

### Do
- Use the hero gradient as a corner-anchored radial atmosphere on white sections only — never tile it or stretch it to full bleed
- Apply Labil Grotesk Variable with ss01 and ss02 enabled on every text element; do not fall back to a default grotesk
- Set tracking to -0.05em at the 84px display size, -0.04em at 56px, and let it expand to +0.025em at 12px eyebrow sizes
- Use Ink Black (#111111) for every primary action fill, every text element, and every structural border; do not introduce a second near-black
- Use 12px radius for buttons, inputs, images, and cards; reserve 8px for nav and small chips, 4px for tiny inline elements, 9999px for status pills
- Anchor radial gradients off-canvas (negative percentage origins) so the color bleeds in from the edge rather than centering as a disc
- Pair the Filled Primary Button (Ink Black) with the Outlined Secondary Button (white + 1px border) in the same row — the contrast is the hierarchy

### Don't
- Do not use the pastel chromatic tiles as more than 3-4 per page; they lose meaning when they become the dominant surface
- Do not apply drop shadows to standard cards — prefer the 1px inset ring (rgba(17,17,17,0.05)) or no elevation at all
- Do not use the orange Ember as a solid button fill or text color at body sizes; it is an atmospheric and focal accent only
- Do not mix the cool (lavender→cyan) and warm (orange→cream) gradients in the same section — pick one emotional temperature per screen
- Do not center the gradient on a hero — always offset the origin to a corner so the page feels like sunlight entering a room, not a spotlight
- Do not use letter-spacing looser than -0.01em at sizes 24px and above; the tight tracking is the signature, not a detail
- Do not place dark sections back-to-back; always separate with a white band so the Obsidian surface reads as a deliberate destination

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#ffffff` | Default page and card surface |
| 1 | Cream | `#f4f3ef` | Soft warm lift for sub-surfaces, chip backgrounds |
| 2 | Pastel Tile | `#ffd7f0` | Chromatic card variant — pink tile |
| 2 | Pastel Tile | `#ffef99` | Chromatic card variant — yellow tile |
| 2 | Pastel Tile | `#b7efb2` | Chromatic card variant — green tile |
| 2 | Pastel Tile | `#e2ddfd` | Chromatic card variant — lilac tile |
| 3 | Obsidian | `#272625` | Dark section background |
| 4 | Violet Depth | `#10054d` | Deep brand surface for emphasis cards on dark contexts |

## Elevation

- **Form controls and inputs:** `rgba(17, 17, 17, 0.05) 0px 0px 0px 1px inset`
- **Elevated card:** `rgba(17, 17, 17, 0.12) 0px 26px 60px -6px, rgba(17, 17, 17, 0.02) 0px 28px 28px -14px, rgba(17, 17, 17, 0.04) 0px 6px 6px -3px, rgba(17, 17, 17, 0.04) 0px 1px 1px -0.5px`
- **Card top edge highlight:** `rgba(17, 17, 17, 0.02) 0px -6px 6px 0px, rgba(17, 17, 17, 0.01) 0px -23px 9px 0px`
- **Image with depth:** `rgba(25, 34, 35, 0.12) 0px 26px 60px -6px, rgba(25, 34, 35, 0.02) 0px 28px 28px -14px, rgba(25, 34, 35, 0.04) 0px 6px 6px -3px, rgba(25, 34, 35, 0.04) 0px 1px 1px -0.5px`

## Imagery

Two visual modes coexist deliberately. The first is photographic-real-but-illustrated: a single hand-drawn line illustration (rocket/astronaut) appears in the hero as a counterweight to the headline — single-weight black stroke, no fill, partially cropped by the viewport edge. The second is purely typographic and product-screenshot: customer logos (Mistral AI, Pylon, Omni, Wasabi, Ceros, CLARA, Momentum, Cerebras) appear as monochrome wordmarks on white, paired with short migration captions. Product photography does not appear on the marketing site. The visual language is therefore 90% typography and 10% line illustration, with the radial gradient acting as the only photographic-quality element.

## Layout

Max-width 1200px centered container with generous outer gutters. The hero is the only full-bleed element: it extends edge-to-edge with the radial gradient anchored to the upper-left corner and a single illustration bleeding off the right edge. Below the hero, the page is a series of full-width white bands separated by 80px vertical padding. The trust grid is a 4-column × 2-row logo wall with no visible card chrome. Testimonials sit in a single centered column at ~800px max width. Dark sections break the white rhythm as full-bleed Obsidian bands with centered single-column content. Navigation is a sticky pill floating over the hero and anchoring to the top on scroll.

## Agent Prompt Guide

Quick Color Reference:
- text: #111111 (Ink Black)
- background: #ffffff (Paper White)
- dark surface: #272625 (Obsidian Warm)
- secondary text: #6d6c6b (Graphite Mid)
- border: #111111 (Ink Black at 1px)
- accent: #e8400d (Ember Orange) — atmospheric only
- primary action: no distinct CTA color

Example Component Prompts:

1. Hero section: White #ffffff canvas. Radial gradient anchored at top-left: radial-gradient(386% 163% at -13% -17%, #e8400d 0%, #ffeed8 26%, #d0b2ff 84%). Centered stack, max-width 720px. NEW pill badge above headline: 8px radius, 1px Ink Black border, split cell with Ink Black 'NEW' (12px weight 700, white text, +0.36px tracking) and white cell with body copy (12px weight 500). Headline at 84px Labil Grotesk weight 500, #111111, -0.05em tracking (≈ -4.2px), line-height 0.80. Subtext at 20px weight 400, #6d6c6b, -0.34em tracking. Email input + submit: 12px radius, 1px Ink Black border, 56px height, white fill, placeholder 'Enter your company email' in #6d6c6b, submit button flush right with Ink Black fill and white text 'Get free trial' at 16px weight 500.

2. Trust logo grid: White #ffffff background, 80px top padding. Centered heading 'Trusted by thousands of teams' at 28px weight 500, #111111, -0.56em tracking. 4-column grid, 20px column gap, 28px row gap. Each cell: no card chrome, logo at 24px height in #111111, caption 'Migrated off [Tool]' in 14px weight 400 #6d6c6b.

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

4. Pastel feature card row: White #ffffff background, 28px column gap, 3 cards in a row. Each card: solid pastel fill (#ffd7f0, #ffef99, #b7efb2), 12px radius, 20px padding. Icon at 24px in #111111, title at 20px weight 500 #111111, caption at 14px weight 400 #6d6c6b. No border, no shadow.

5. Testimonial card: White #ffffff background, no card chrome, max-width 800px centered. Quote at 36px weight 500 #111111, -0.72em tracking, line-height 1.10. Below: 1px divider in rgba(17,17,17,0.12), then a row with 40px circular avatar, name in 16px weight 500 #111111, role in 14px weight 400 #6d6c6b, and company logo right-aligned at 20px height.

## Typographic Voice

The typographic system is single-family and single-axis. Labil Grotesk Variable is the only voice — there is no serif, no mono, no display face. Weight is the primary expressive axis: 400 for body, 500 for headlines and emphasis, 700 for buttons and labels, 900 reserved for oversized or poster-like moments. The custom stylistic sets ss01 and ss02 are not optional; they activate the alternate 'a' and 'g' that distinguish the brand from Inter or Söhne. Tracking is the secondary axis and is treated as a structural decision: tight at display (compresses the block, conveys density and confidence), loose at eyebrow (breathing room for label legibility). Do not introduce a second font family for any reason — if a different voice is needed, differentiate through weight and tracking.

## Gradient Philosophy

Gradients are atmospheric, not structural. They are never used as section backgrounds, never tiled, never centered as a focal disc. Each gradient is a single large radial that originates off-canvas (negative x or y percentages) so the color bleeds into the page edge like sunlight through a window. Three gradient recipes exist: warm (orange → cream → lavender) for the hero and any section that should feel aspirational; cool (lavender → mint → cyan) for mid-page sections that need a temperature shift; reversed cool (lavender → cream → orange) as a sibling to the cool gradient. The page should never use more than one gradient at a time, and the gradient should occupy no more than 30-40% of any given section's visual area.

## Similar Brands

- **Linear** — Same single-grotesk typographic system with tight negative tracking at large sizes and the same white-canvas-plus-one-accent rhythm
- **Stripe** — Same warm-cool radial gradient atmosphere anchored to page corners, same generous whitespace, same minimal card chrome with hairline borders
- **Vercel** — Same black/white monochromatic base with selective pastel chromatic cards and the same confident negative-tracking display headlines
- **Attio** — Same pill-shaped sticky navigation, same dominant white canvas with a single dark CTA band, same use of small chromatic surface variants to break monochrome

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink-black: #111111;
  --color-paper-white: #ffffff;
  --color-obsidian-warm: #272625;
  --color-graphite-mid: #6d6c6b;
  --color-cream-paper: #f4f3ef;
  --color-stone-border: #b1b1af;
  --color-pearl-mist: #ecebea;
  --color-deep-violet: #10054d;
  --color-violet-shade: #2e2460;
  --color-ember-orange: #e8400d;
  --color-blush-pink: #ffd7f0;
  --color-mint-green: #b7efb2;
  --color-pale-yellow: #ffef99;
  --color-lilac-wash: #e2ddfd;

  /* Typography — Font Families */
  --font-labil-grotesk-variable: 'Labil Grotesk Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.3px;
  --text-eyebrow: 12px;
  --leading-eyebrow: 1.2;
  --tracking-eyebrow: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.3;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: -0.56px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.72px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -2.24px;
  --text-hero: 84px;
  --leading-hero: 0.8;
  --tracking-hero: -4.2px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 20px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 12px;
  --radius-icons: 12px;
  --radius-pills: 9999px;
  --radius-small: 4px;
  --radius-inputs: 12px;
  --radius-buttons: 12px;

  /* Shadows */
  --shadow-subtle: rgba(17, 17, 17, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl: rgba(17, 17, 17, 0.12) 0px 26px 60px -6px, rgba(17, 17, 17, 0.02) 0px 28px 28px -14px, rgba(17, 17, 17, 0.04) 0px 6px 6px -3px, rgba(17, 17, 17, 0.04) 0px 1px 1px -0.5px;
  --shadow-sm: rgba(17, 17, 17, 0.02) 0px -6px 6px 0px, rgba(17, 17, 17, 0.01) 0px -23px 9px 0px;
  --shadow-subtle-2: rgba(17, 17, 17, 0.05) 0px 0px 1px 0px, rgba(17, 17, 17, 0.04) 1px 1px 1px 0px, rgba(17, 17, 17, 0.03) 2px 3px 2px 0px, rgba(17, 17, 17, 0.01) 4px 4px 2px 0px;
  --shadow-xl-2: rgba(25, 34, 35, 0.12) 0px 26px 60px -6px, rgba(25, 34, 35, 0.02) 0px 28px 28px -14px, rgba(25, 34, 35, 0.04) 0px 6px 6px -3px, rgba(25, 34, 35, 0.04) 0px 1px 1px -0.5px;
  --shadow-subtle-3: rgba(17, 17, 17, 0.04) 0px 1px 2px 0px, rgba(17, 17, 17, 0.04) 0px 4px 8px 0px, rgba(17, 17, 17, 0.04) 0px 0px 1px 0px, rgba(17, 17, 17, 0.04) 0px 0px 1px 0px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-cream: #f4f3ef;
  --surface-pastel-tile: #ffd7f0;
  --surface-pastel-tile: #ffef99;
  --surface-pastel-tile: #b7efb2;
  --surface-pastel-tile: #e2ddfd;
  --surface-obsidian: #272625;
  --surface-violet-depth: #10054d;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink-black: #111111;
  --color-paper-white: #ffffff;
  --color-obsidian-warm: #272625;
  --color-graphite-mid: #6d6c6b;
  --color-cream-paper: #f4f3ef;
  --color-stone-border: #b1b1af;
  --color-pearl-mist: #ecebea;
  --color-deep-violet: #10054d;
  --color-violet-shade: #2e2460;
  --color-ember-orange: #e8400d;
  --color-blush-pink: #ffd7f0;
  --color-mint-green: #b7efb2;
  --color-pale-yellow: #ffef99;
  --color-lilac-wash: #e2ddfd;

  /* Typography */
  --font-labil-grotesk-variable: 'Labil Grotesk Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.3px;
  --text-eyebrow: 12px;
  --leading-eyebrow: 1.2;
  --tracking-eyebrow: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.3;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: -0.56px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.72px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -2.24px;
  --text-hero: 84px;
  --leading-hero: 0.8;
  --tracking-hero: -4.2px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  /* Shadows */
  --shadow-subtle: rgba(17, 17, 17, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl: rgba(17, 17, 17, 0.12) 0px 26px 60px -6px, rgba(17, 17, 17, 0.02) 0px 28px 28px -14px, rgba(17, 17, 17, 0.04) 0px 6px 6px -3px, rgba(17, 17, 17, 0.04) 0px 1px 1px -0.5px;
  --shadow-sm: rgba(17, 17, 17, 0.02) 0px -6px 6px 0px, rgba(17, 17, 17, 0.01) 0px -23px 9px 0px;
  --shadow-subtle-2: rgba(17, 17, 17, 0.05) 0px 0px 1px 0px, rgba(17, 17, 17, 0.04) 1px 1px 1px 0px, rgba(17, 17, 17, 0.03) 2px 3px 2px 0px, rgba(17, 17, 17, 0.01) 4px 4px 2px 0px;
  --shadow-xl-2: rgba(25, 34, 35, 0.12) 0px 26px 60px -6px, rgba(25, 34, 35, 0.02) 0px 28px 28px -14px, rgba(25, 34, 35, 0.04) 0px 6px 6px -3px, rgba(25, 34, 35, 0.04) 0px 1px 1px -0.5px;
  --shadow-subtle-3: rgba(17, 17, 17, 0.04) 0px 1px 2px 0px, rgba(17, 17, 17, 0.04) 0px 4px 8px 0px, rgba(17, 17, 17, 0.04) 0px 0px 1px 0px, rgba(17, 17, 17, 0.04) 0px 0px 1px 0px;
}
```