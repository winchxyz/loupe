# Titan — Style Reference
> Wall Street broadsheet on cream paper — black ink, single accent rule, no noise.

**Theme:** light

Titan runs a paper-and-ink editorial system: pure achromatic palette, generous whitespace, and oversized type that reads like a financial broadsheet. Geist carries the voice — a geometric sans at weight 400–500 for everything functional, weight 700 reserved for display headlines that anchor each section. The only structural device is a single black filled pill button; everything else is text, thin hairline borders, and warm-gray card fills (#e9eaeb). Pills at 160px radius and cards at 32px radius create the only curvature in the system — flat, confident, never decorative. No color, no gradients, no shadows; hierarchy comes from type size, weight, and the warm/cool gray contrast between #e9eaeb (canvas wash) and #d8d3cc (accent surface). Geist Mono appears only where numbers demand authority: $1.1B AUM, 0.4% fee.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#111111` | `--color-obsidian` | Primary text, hairline borders, icon strokes, card outlines — the structural ink of the system |
| Paper | `#ffffff` | `--color-paper` | Page canvas, card surfaces, button text on dark fills, nav background |
| Linen | `#e9eaeb` | `--color-linen` | Secondary card surface, subtle wash for grouped content blocks, nav pill fills |
| Sand | `#d8d3cc` | `--color-sand` | Warm-gray accent for ghost button borders, secondary surface fill, tonal divider |
| Graphite | `#615e5b` | `--color-graphite` | Secondary body text, supporting copy, muted icon strokes — warm undertone keeps it editorial not sterile |
| Ash | `#888888` | `--color-ash` | Tertiary text, disabled states, low-emphasis icon details |
| Onyx | `#000000` | `--color-onyx` | Primary action fill — the only chromatic-equivalent moment, used sparingly on the single CTA per screen |

## Tokens — Typography

### Geist — All UI and editorial text. Weight 400 for body and functional copy, weight 500 for nav links, subheadings, and button labels, weight 700 for display headlines and section anchors. The 'ss02' and 'ss03' stylistic sets are enabled — these reshape the 'a' and 'g' to a more humanist terminal-flavored geometry that gives Geist its editorial bite versus a generic neo-grotesque. Negative tracking on display sizes (-0.03em) tightens the 60px hero headline so it reads as a single confident block rather than airy SaaS copy. · `--font-geist`
- **Substitute:** Inter, Manrope, or system-ui as fallback
- **Weights:** 400, 500, 700
- **Sizes:** 10, 12, 14, 16, 18, 20, 24, 32, 40, 60
- **Line height:** 1.00, 1.10, 1.20, 1.30, 1.50
- **Letter spacing:** 0.02em at ≤14px, normal 14–24px, -0.03em at ≥32px
- **OpenType features:** `"ss02" on, "ss03" on`
- **Role:** All UI and editorial text. Weight 400 for body and functional copy, weight 500 for nav links, subheadings, and button labels, weight 700 for display headlines and section anchors. The 'ss02' and 'ss03' stylistic sets are enabled — these reshape the 'a' and 'g' to a more humanist terminal-flavored geometry that gives Geist its editorial bite versus a generic neo-grotesque. Negative tracking on display sizes (-0.03em) tightens the 60px hero headline so it reads as a single confident block rather than airy SaaS copy.

### Geist Mono — Reserved exclusively for financial figures and key statistics — AUM ($1.1B), fee rate (0.4%), flat fee ($0), and any tabular data. The monospace grid aligns decimal points and makes the numbers feel audited rather than decorative. Weight 500 for the numeric display, weight 400 for supporting labels. · `--font-geist-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, or ui-monospace
- **Weights:** 400, 500
- **Sizes:** 11, 13, 20, 28, 48
- **Line height:** 1.00, 1.10
- **Letter spacing:** -0.01em, 0.03em
- **OpenType features:** `"ss08" on`
- **Role:** Reserved exclusively for financial figures and key statistics — AUM ($1.1B), fee rate (0.4%), flat fee ($0), and any tabular data. The monospace grid aligns decimal points and makes the numbers feel audited rather than decorative. Weight 500 for the numeric display, weight 400 for supporting labels.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.3 | 0.2px | `--text-caption` |
| label | 12px | 1.3 | 0.36px | `--text-label` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| body-lg | 18px | 1.5 | — | `--text-body-lg` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| stat | 28px | 1 | -0.28px | `--text-stat` |
| heading | 32px | 1.2 | -0.96px | `--text-heading` |
| heading-lg | 40px | 1.1 | -1.2px | `--text-heading-lg` |
| display | 60px | 1 | -1.8px | `--text-display` |

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
| 52 | 52px | `--spacing-52` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 88 | 88px | `--spacing-88` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 20px |
| cards | 32px |
| buttons | 160px |
| nav-pills | 140px |
| small-elements | 10px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 24px

## Components

### Primary CTA Button
**Role:** Single action per screen — the only filled button in the system

Obsidian (#000000) background, Paper (#ffffff) text, Geist weight 500 at 12–14px, all-caps tracking 0.03em. 160px border-radius (fully pill). 11px vertical / 18px horizontal padding. Arrow glyph (→) appended with 6px gap. This is the only moment Onyx appears — its rarity makes it function as punctuation.

### Ghost Text Button
**Role:** Secondary action paired with primary CTA

No background, no border. Obsidian (#111111) text at 12–14px Geist weight 500, all-caps tracking 0.03em. Arrow glyph follows the label. Sits 16–20px to the right of the primary CTA. 'See why' pattern — text-only confidence.

### Navigation Pill
**Role:** Top-level nav items and CTA (Join Titan)

Linen (#e9eaeb) fill, Obsidian (#111111) 1px border, 140px border-radius. Geist weight 500 at 14px. 5px vertical / 12px horizontal padding. Joins with 8px gap. The 'Join Titan' variant switches to Obsidian fill with Paper text for prominence.

### Hero Split Panel
**Role:** Above-the-fold brand statement

Two-column split: left 50% holds the 60px display headline in Obsidian weight 700 with -1.8px tracking, sub-copy at 18px in Obsidian, and the CTA pair. Right 50% holds an editorial engraving/illustration on Paper with no border, square edges. 80px vertical padding. Gap between columns is implicit whitespace, not a divider.

### Editorial Feature Card
**Role:** 3-column offering cards in the 'matters most' section

Linen (#e9eaeb) fill, 32px border-radius, 24px padding on all sides. No border, no shadow. Heading at 20px Geist weight 500 in Obsidian, arrow (→) inline. Body copy at 16px Geist weight 400 in Graphite (#615e5b). Cards align to a 3-column grid with 24px gap.

### Stat Triptych
**Role:** Bottom of hero — three key figures side by side

Three columns, no dividers, no card chrome. Each stat stacks: label at 12px Geist weight 400 in Graphite with 0.36px tracking, figure at 28px Geist Mono weight 500 in Obsidian. 10px row gap between label and figure. Aligned baseline across the three columns.

### Numbered List Row
**Role:** 'How we add value' four-step process

Full-width row, no card surface. Left column holds a 24px-tall bordered circle containing the step number (1–4) in Obsidian on Paper, 32px diameter, 160px border-radius. 20px gap, then step title at 20px Geist weight 500 in Obsidian. Right column holds supporting copy at 16px Graphite. 1px Obsidian bottom border separates rows.

### Section Heading
**Role:** Sits at the top of each content section

40px Geist weight 500, Obsidian, -1.2px tracking. Left-aligned, 0px left margin. 80px margin-bottom to separate from the content block below. No eyebrow label, no underline, no decorative element — the type size does all the work.

### Editorial Illustration Panel
**Role:** Decorative/atmospheric visuals in the right column of hero or content sections

Full bleed within its container, square corners (0px radius), no border. Renders as black-and-white line engravings (New Yorker / Wall Street Journal spot-illustration tradition). Tonal — never color. Functions as visual rest point against the type-heavy layout.

### Header Bar
**Role:** Sticky top navigation

Paper background, 1px Obsidian bottom border. Logo left (TITAN wordmark with circular glyph), nav pills center, account actions right. 16px vertical / 24px horizontal padding. 1200px max-width centered. No shadow, no blur — flat editorial masthead.

### Checklist Item
**Role:** 'Human advice you can trust' bullet points

Circular check icon in Obsidian at 20px diameter, 8px gap to the right. Label at 20px Geist weight 500 Obsidian. Supporting copy at 16px Graphite below with 8px gap. 20px row gap between checklist items. No card surface — sits directly on Paper.

### Caption Disclaimer Link
**Role:** Fine-print footnote with info icon

Small info icon (ⓘ) in Ash (#888888) at 12px, followed by text at 12px Graphite. Sits at the bottom of a section with 24px top margin. The only place Ash appears in body text — used to signal 'regulatory fine print, not primary content.'

## Do's and Don'ts

### Do
- Use Obsidian (#111111) for all text, borders, and icon strokes — the system is monochrome, never introduce color
- Apply 160px border-radius to all buttons and 140px to nav pills; 32px to all card surfaces
- Reserve the 60px display size for hero headlines and section openers only — never for body or functional copy
- Enable 'ss02' and 'ss03' on all Geist usage — these stylistic sets are part of the brand voice
- Use Geist Mono at weight 500 for every currency figure, percentage, and numeric statistic
- Achieve separation through 1px Obsidian borders and surface color shifts (Paper → Linen → Sand) — never through drop shadows
- Apply -0.03em letter-spacing at 32px and above, and +0.02–0.03em at 14px and below

### Don't
- Never use chromatic colors — no blues, greens, reds, or purple for accents, states, or decorative elements
- Never apply drop shadows, glows, or any box-shadow elevation — the system is flat by design
- Never use radii other than 160px (buttons), 140px (nav pills), 32px (cards), 20px (tags), 10px (small elements)
- Never set the primary CTA more than once per screen — its rarity is what gives it authority
- Never use Geist Mono for body copy or headings — reserve it strictly for financial figures and data
- Never center-align body text — only headlines and CTAs may be centered; everything else is left-aligned
- Never use gradients, background images, or any non-monochromatic fill on interface surfaces

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#ffffff` | Page background, primary card surface, nav background |
| 1 | Linen Wash | `#e9eaeb` | Secondary card fill for grouped content blocks, nav pill backgrounds, subtle sectional wash |
| 2 | Sand Accent | `#d8d3cc` | Warm-toned surface for ghost button fills and tonal dividers — introduces the only chromatic undertone in the system |
| 3 | Onyx Block | `#000000` | Primary action surface — used once per screen for the singular CTA |

## Elevation

Zero shadow philosophy. The system achieves separation through surface color shifts (Paper → Linen → Sand) and 1px hairline borders in Obsidian (#111111). No drop shadows, no glows, no elevation tokens. Depth is communicated typographically through type size and weight, not visually through z-axis simulation.

## Imagery

Imagery is editorial engraving in the Wall Street Journal / New Yorker spot-illustration tradition — black ink line work on white paper, no color, no photography. Illustrations carry the same warm-black line weight as the text, making them feel like a continuation of the type rather than a separate visual layer. The cityscape, figures, and objects are tightly composed within square (uncropped) frames, never bleed off the page edge. Zero product screenshots, zero stock photography, zero 3D renders. When photography appears (as in the 'Human advice' portrait), it is muted, documentary, and placed as a single square panel opposite text — never as a full-bleed background.

## Layout

Max-width 1200px centered with generous outer padding (48–80px). The hero is a 50/50 split: oversized type left, editorial illustration right, no full-bleed background. Subsequent sections follow a consistent rhythm — a 40px section heading left-aligned, then either a 3-column card grid (offerings), a numbered full-width list (process), or a 50/50 text+image split (trust). The page never uses full-viewport sections, never alternates dark/light bands, never centers a column. Vertical rhythm is set by 80px section gaps and 24px element gaps. Navigation is a single sticky header — no sidebar, no mega-menu. The overall feel is a long-scroll editorial article, not a product landing page.

## Agent Prompt Guide

**Quick Color Reference**
- text: #111111 (Obsidian)
- background: #ffffff (Paper)
- card surface: #e9eaeb (Linen)
- accent surface: #d8d3cc (Sand)
- border: #111111 (Obsidian)
- primary action: #000000 (filled action)

**Example Component Prompts**
1. Create a Primary Action Button: #000000 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.
2. Build a 3-column offering card grid: each card on #e9eaeb fill, 32px radius, 24px padding. Card heading at 20px Geist weight 500, #111111, with inline → arrow. Body copy at 16px Geist weight 400, #615e5b. 24px gap between cards.
3. Compose a stat triptych: three columns, no dividers. Each stacks a 12px label (Geist, #615e5b, 0.36px tracking) over a 28px figure (Geist Mono weight 500, #111111). 10px gap between label and figure. Align baselines across columns.
4. Render a numbered process row: full-width, 1px #111111 bottom border. Left: 32px circle with 1px #111111 border, step number centered in 20px Geist weight 500. 20px gap, then step title at 20px Geist weight 500 #111111. Right column: 16px Geist weight 400 #615e5b supporting copy.
5. Build a sticky header: #ffffff background, 1px #111111 bottom border, 1200px max-width. Logo 'TITAN' at 20px Geist weight 500 with circular glyph left. Three nav pills (Offerings, About, Blog) in center: #e9eaeb fill, 1px #111111 border, 140px radius, 14px Geist weight 500. 'Join Titan' pill right: #000000 fill, white text, 140px radius.

## Similar Brands

- **Stripe** — Same editorial-style max-width 1200px layout, same minimal achromatic palette, same reliance on oversized 56–60px display headlines to anchor each section
- **Linear** — Shared Geist typeface family and tight letter-spacing on display sizes, though Titan pushes further into editorial engraving illustrations
- **Figma Config** — Same type-first hero with oversized editorial headline, generous whitespace, and zero photographic imagery — word-driven rather than visual
- **Ramp** — Similar fintech positioning with pill-shaped CTAs and restrained neutral palette, though Titan is more monochrome and editorial where Ramp allows itself more product UI surface
- **The New Yorker digital** — Same engraving-illustration tradition, same serif-adjacent confidence in a sans-serif setting, same paper-and-ink visual register

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #111111;
  --color-paper: #ffffff;
  --color-linen: #e9eaeb;
  --color-sand: #d8d3cc;
  --color-graphite: #615e5b;
  --color-ash: #888888;
  --color-onyx: #000000;

  /* Typography — Font Families */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.3;
  --tracking-caption: 0.2px;
  --text-label: 12px;
  --leading-label: 1.3;
  --tracking-label: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-stat: 28px;
  --leading-stat: 1;
  --tracking-stat: -0.28px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.96px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.2px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -1.8px;

  /* Typography — Weights */
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
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 24px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 20px;
  --radius-3xl: 32px;
  --radius-full: 140px;
  --radius-full-2: 160px;

  /* Named Radii */
  --radius-tags: 20px;
  --radius-cards: 32px;
  --radius-buttons: 160px;
  --radius-nav-pills: 140px;
  --radius-small-elements: 10px;

  /* Surfaces */
  --surface-paper-canvas: #ffffff;
  --surface-linen-wash: #e9eaeb;
  --surface-sand-accent: #d8d3cc;
  --surface-onyx-block: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #111111;
  --color-paper: #ffffff;
  --color-linen: #e9eaeb;
  --color-sand: #d8d3cc;
  --color-graphite: #615e5b;
  --color-ash: #888888;
  --color-onyx: #000000;

  /* Typography */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.3;
  --tracking-caption: 0.2px;
  --text-label: 12px;
  --leading-label: 1.3;
  --tracking-label: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-stat: 28px;
  --leading-stat: 1;
  --tracking-stat: -0.28px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.96px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.2px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -1.8px;

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
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 20px;
  --radius-3xl: 32px;
  --radius-full: 140px;
  --radius-full-2: 160px;
}
```