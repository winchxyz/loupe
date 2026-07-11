# Monad — Style Reference
> Monospaced technical journal on cream paper — quiet, precise, editorial.

**Theme:** light

Monad renders as a quiet editorial document on warm parchment: cream canvas, charcoal ink, and a single near-gray lavender card surface carry the entire UI. The signature move is type — a humanist serif at 400 weight for headlines paired with a monospaced font for nearly all UI text creates a technical-journal feel that is rare in B2B SaaS. Color is almost completely absent from the interface; the peach, lavender, and mint tones that exist are confined to the data-flow diagram in the hero, where they behave as soft atmospheric washes rather than brand accents. Components are flat and confident: 100px pill buttons, 40px-radius cards, hairline borders in near-black, and a single soft ambient shadow — nothing is heavy, nothing is glossy. The overall rhythm is generous breathing room, centered text stacks, and horizontal flow lines that suggest movement without animation.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Parchment Cream | `#f6f3f1` | `--color-parchment-cream` | Page canvas, nav background, badge surfaces — the warm off-white base that makes the entire interface feel like paper rather than screen |
| Ink Black | `#000000` | `--color-ink-black` | Primary text, icon strokes, hairline borders, and the dominant outline color across nav, cards, and dividers |
| Charcoal | `#242424` | `--color-charcoal` | Primary action button fill, badge borders, elevated surface — filled CTAs sit slightly off pure black for visual softness |
| Graphite | `#4e4d4d` | `--color-graphite` | Body and heading text at lower contrast, secondary card borders, muted UI elements |
| Slate Shadow | `#3d3d3d` | `--color-slate-shadow` | Tertiary borders and decorative strokes where pure black would feel too heavy |
| Warm Stone | `#797776` | `--color-warm-stone` | Muted helper text, link underlines, and low-emphasis labels |
| Lavender Mist | `#cfdaf5` | `--color-lavender-mist` | Card surface tint — the only non-grayscale surface color, used as a gentle wash to separate elevated content from the cream canvas |
| Peach to Periwinkle Wash | `linear-gradient(rgba(255, 148, 115, 0.8) 7%, rgba(160, 181, 235, 0.8) 83.82%)` | `--color-peach-to-periwinkle-wash` | Decorative gradient endstop in the data-flow diagram — soft atmospheric color, never used as a UI accent |
| Mint to Periwinkle Wash | `linear-gradient(rgb(160, 181, 235), rgb(167, 252, 205))` | `--color-mint-to-periwinkle-wash` | Decorative gradient in the data-flow diagram aura — appears as a soft green glow around the central processing node |

## Tokens — Typography

### Untitled Serif — All headlines and display text. Anti-convention: weight 400 (not 600-700) lets the serif shapes whisper — authority comes from the typeface's humanist proportions and generous negative tracking, not from boldness. · `--font-untitled-serif`
- **Substitute:** Source Serif 4, Lora, or PT Serif
- **Weights:** 400
- **Sizes:** 24px, 28px, 32px, 40px, 80px
- **Line height:** 1.20
- **Letter spacing:** -0.0200em
- **Role:** All headlines and display text. Anti-convention: weight 400 (not 600-700) lets the serif shapes whisper — authority comes from the typeface's humanist proportions and generous negative tracking, not from boldness.

### ABC Diatype Mono — Body text, navigation, buttons, badges, tags, and all functional UI copy. The monospaced treatment for non-code text is the system's most distinctive choice — it gives every label the visual weight of a typeset annotation, reinforcing the technical-journal metaphor. · `--font-abc-diatype-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, or Berkeley Mono
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 28px
- **Line height:** 1.30-1.35
- **Letter spacing:** -0.0200em
- **Role:** Body text, navigation, buttons, badges, tags, and all functional UI copy. The monospaced treatment for non-code text is the system's most distinctive choice — it gives every label the visual weight of a typeset annotation, reinforcing the technical-journal metaphor.

### Untitled Sans — Secondary body text fallback — appears minimally, likely for paragraphs where monospaced character widths would be distracting at length · `--font-untitled-sans`
- **Substitute:** Inter, Söhne, or system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.35
- **Letter spacing:** -0.0200em
- **Role:** Secondary body text fallback — appears minimally, likely for paragraphs where monospaced character widths would be distracting at length

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.3 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.35 | -0.28px | `--text-body-sm` |
| body | 16px | 1.35 | -0.32px | `--text-body` |
| subheading | 18px | 1.35 | -0.36px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.64px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.8px | `--text-heading-lg` |
| display | 80px | 1.2 | -1.6px | `--text-display` |

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
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 200 | 200px | `--spacing-200` |
| 216 | 216px | `--spacing-216` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 100px |
| cards | 40px |
| inputs | 8px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 40px
- **Element gap:** 16px

## Components

### Filled CTA Button
**Role:** Primary action trigger in nav and hero

Charcoal (#242424) background, Parchment Cream (#f6f3f1) text, ABC Diatype Mono 14px weight 500, 100px border-radius, 10px vertical × 24px horizontal padding, no shadow. Includes a subtle arrow chevron in cream.

### Ghost Outline Button
**Role:** Secondary action trigger paired with the filled CTA

Transparent background, 1px Ink Black (#000000) border, Ink Black text, ABC Diatype Mono 14px weight 500, 100px border-radius, 10px vertical × 24px horizontal padding.

### Navigation Bar
**Role:** Sticky top-level navigation

Parchment Cream background, 1px bottom hairline border in Ink Black, logo left, mono nav links center, filled and ghost CTAs right. Links are ABC Diatype Mono 14px, uppercase tracking implied by mono character width.

### Announcement Bar
**Role:** Top-of-page promotional strip

Full-width Ink Black background, Parchment Cream text in ABC Diatype Mono 12-14px, inline CTA pill button in cream with black text. Dismissible with a close icon.

### Source/Destination Tag
**Role:** Pill-shaped labels in the data-flow diagram

White or Parchment background, 1px Ink Black border, 100px border-radius, left-aligned icon + ABC Diatype Mono 12-14px label, 8px 16px padding. These float on connector lines in the hero diagram.

### Feature Card
**Role:** Content card in the 'How Monad Works' section

Lavender Mist (#cfdaf5) background, no border, 40px border-radius, 40px padding, soft ambient shadow (rgba(0,0,0,0.1) 0 0 10px). Contains a small icon, serif heading, and mono body text. The right side often features a decorative gradient illustration (peach/lavender/mint).

### FAQ Accordion Item
**Role:** Expandable question row in the FAQ section

No background, no border-radius, 1px hairline bottom border in Ink Black at 20-30% opacity, ABC Diatype Mono 16px question text in Ink Black, plus/minus icon right-aligned. Expanded state reveals body text below in Graphite.

### Data Flow Diagram
**Role:** Hero visualization showing sources → processing → destinations

Full-width composition spanning below the hero text. Left column stacks source tags (ANY SOURCE, CLOUD LOGS, VULNERABILITIES, IAM ACTIVITY, EDR ALERTS, SAAS AUDIT LOGS, ASSET INVENTORY). Center contains a soft mint-green radial glow with a processing node and small status badges (EVENT, INGEST, ROUTE, NORMALIZE). Right column stacks destination tags (SIEM, CLOUD STORAGE, XDR, DATA LAKE, ANY DESTINATION). Thin connector lines link sources to center to destinations.

### Processing Status Badge
**Role:** Small inline labels in the data flow diagram

Tiny pill tags (100px radius) with mono text at 10-12px. Success states use a subtle green dot prefix; neutral states use a gray dot. No background fill, just a hairline border.

### Decorative Gradient Panel
**Role:** Right-side illustration within feature cards

Soft translucent gradients blending peach (#ff9473), lavender (#a0b5eb), mint (#a7fccd), and amber (#e2c161) at 60-80% opacity. Always contained within the card's 40px radius. Never used as a CTA or interactive element.

### Footer Link Group
**Role:** Column-based footer navigation

Section headings in ABC Diatype Mono 12px weight 500 with positive tracking (0.050em), uppercase. Links below in mono 14px weight 400, Graphite color, 12px row gap.

## Do's and Don'ts

### Do
- Use Untitled Serif weight 400 for all headlines — never bold, never black-weight.
- Use ABC Diatype Mono for every functional UI label: buttons, nav, tags, badges, and short body text.
- Apply 100px border-radius to all buttons, tags, and pill-shaped elements.
- Apply 40px border-radius to all card and panel surfaces.
- Keep the canvas Parchment Cream (#f6f3f1) — never switch to pure white, which would break the editorial warmth.
- Use the soft ambient shadow (rgba(0,0,0,0.1) 0 0 10px) sparingly — only on elevated cards, never on buttons or nav.
- Confine all chromatic color to decorative gradient illustrations; the UI itself stays near-grayscale.

### Don't
- Don't use bold or semibold weights for serif headlines — the 400 weight is the signature.
- Don't use a proportional sans-serif for body text or nav — mono is the system's identity.
- Don't add saturated brand colors as accents, underlines, or active states — the palette is intentionally restrained.
- Don't use square or 4-8px corner radii on interactive elements — pills (100px) and generous rounding (40px) are required.
- Don't place colored gradients behind text or use them as section backgrounds — they belong only in decorative illustration panels.
- Don't use heavy drop shadows or layered elevation — the system relies on one subtle 10px ambient shadow.
- Don't break the cream canvas with white or near-white surfaces — the warmth must persist across all page levels.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Parchment Canvas | `#f6f3f1` | Page background — warm cream off-white that defines the editorial paper feel |
| 1 | Lavender Card | `#cfdaf5` | Elevated card surface — subtle near-gray lavender tint separates content blocks from the canvas |
| 2 | Charcoal Surface | `#242424` | Dark elevated surface for CTAs and badges — the only non-warm surface in the system |

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`

## Imagery

Monad's visual language is almost entirely diagrammatic and typographic — no photography, no product screenshots, no lifestyle imagery. The hero centers on a data-flow diagram: pill-shaped source tags on the left, a glowing processing node in the center (surrounded by a soft mint-green radial wash), and destination tags on the right, all connected by thin horizontal flow lines. Feature cards pair a text block with a decorative gradient panel on the right — these panels use translucent peach, lavender, mint, and amber gradients with abstract geometric shapes (circles, rounded squares, constellation-like dots). Icons throughout are minimal line-art glyphs in Ink Black at consistent stroke weight. The overall density is text-dominant; imagery serves as atmospheric accent rather than content.

## Agent Prompt Guide

## Quick Color Reference
- text: #000000 (Ink Black)
- background: #f6f3f1 (Parchment Cream)
- card surface: #cfdaf5 (Lavender Mist)
- border / hairline: #000000 at 1px
- muted text: #4e4d4d (Graphite)
- primary action: no distinct CTA color

## Example Component Prompts

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

2. **Feature Card**: Lavender Mist (#cfdaf5) background, 40px border-radius, 40px padding, shadow rgba(0,0,0,0.1) 0 0 10px. Left column: small icon, then heading in Untitled Serif 24px weight 400, then body in ABC Diatype Mono 16px color #4e4d4d. Right column: decorative gradient panel (peach to lavender, 60-80% opacity) contained within the card radius.

3. **Pill Source Tag**: White or transparent background, 1px #000000 border, 100px border-radius, 8px/16px padding. Left-aligned 14px icon in #000000, then label in ABC Diatype Mono 12px weight 400 color #000000, 8px gap between icon and text.

4. **FAQ Accordion Row**: Full-width row, no background, 1px bottom border in #000000 at 20% opacity. Question text in ABC Diatype Mono 16px color #000000. Plus/minus icon right-aligned, 1.5px stroke in #000000. 24px vertical padding.

5. **Announcement Bar**: Full-width #000000 background, 48px height, centered content. Text in ABC Diatype Mono 13px color #f6f3f1. Inline link or pill button in #f6f3f1 with #000000 text, 100px radius.

## Similar Brands

- **Linear** — Same restrained, near-monochromatic palette with a single dark filled CTA pill and ghost outline secondary — but Monad pushes further with warm cream and a serif/mono type pairing.
- **Stripe** — Similar confidence in using generous whitespace, centered text stacks, and 100px pill buttons for CTAs; both systems rely on layout precision rather than color to create hierarchy.
- **Vercel** — Shares the minimal-chrome, hairline-border, single-shadow approach with a monochromatic UI — Monad differs by using warm cream and serif headlines instead of Vercel's pure grayscale and geometric sans.
- **Resend** — Both use monospaced fonts for functional UI text, warm off-white canvases, and restrained color palettes — a shared technical-editorial sensibility.
- **Cursor** — Similar pill-shaped CTAs, clean centered hero layouts, and confident use of near-zero colorfulness in the core interface while letting illustrations carry chromatic accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-parchment-cream: #f6f3f1;
  --color-ink-black: #000000;
  --color-charcoal: #242424;
  --color-graphite: #4e4d4d;
  --color-slate-shadow: #3d3d3d;
  --color-warm-stone: #797776;
  --color-lavender-mist: #cfdaf5;
  --color-peach-to-periwinkle-wash: #ff9473;
  --gradient-peach-to-periwinkle-wash: linear-gradient(rgba(255, 148, 115, 0.8) 7%, rgba(160, 181, 235, 0.8) 83.82%);
  --color-mint-to-periwinkle-wash: #a7fccd;
  --gradient-mint-to-periwinkle-wash: linear-gradient(rgb(160, 181, 235), rgb(167, 252, 205));

  /* Typography — Font Families */
  --font-untitled-serif: 'Untitled Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-abc-diatype-mono: 'ABC Diatype Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.35;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.35;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.35;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.8px;
  --text-display: 80px;
  --leading-display: 1.2;
  --tracking-display: -1.6px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-200: 200px;
  --spacing-216: 216px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-3xl: 40px;
  --radius-full: 100px;
  --radius-full-2: 2000px;

  /* Named Radii */
  --radius-tags: 100px;
  --radius-cards: 40px;
  --radius-inputs: 8px;
  --radius-buttons: 100px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;

  /* Surfaces */
  --surface-parchment-canvas: #f6f3f1;
  --surface-lavender-card: #cfdaf5;
  --surface-charcoal-surface: #242424;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-parchment-cream: #f6f3f1;
  --color-ink-black: #000000;
  --color-charcoal: #242424;
  --color-graphite: #4e4d4d;
  --color-slate-shadow: #3d3d3d;
  --color-warm-stone: #797776;
  --color-lavender-mist: #cfdaf5;
  --color-peach-to-periwinkle-wash: #ff9473;
  --color-mint-to-periwinkle-wash: #a7fccd;

  /* Typography */
  --font-untitled-serif: 'Untitled Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-abc-diatype-mono: 'ABC Diatype Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.35;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.35;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.35;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.8px;
  --text-display: 80px;
  --leading-display: 1.2;
  --tracking-display: -1.6px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-200: 200px;
  --spacing-216: 216px;

  /* Border Radius */
  --radius-3xl: 40px;
  --radius-full: 100px;
  --radius-full-2: 2000px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}
```