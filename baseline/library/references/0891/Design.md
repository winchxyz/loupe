# Acctual — Style Reference
> Clean paper desk at dusk

**Theme:** light

Acctual is a near-monochrome invoice product dressed in soft paper-like neutrals — white surfaces, whisper-gray sections, and barely-there borders. The visual system is defined by restraint: chromatic color appears only as small functional punctuation (a blue checkmark, a pink avatar tile, a violet gradient wash) against an otherwise achromatic canvas. Typography does the heavy lifting — a geometric sans (Open Runde) sets confident headlines with tight negative tracking, while generous 20–32px radii and pill-shaped controls give every surface a soft, tactile, almost stationery-like quality. The overall feel is a clean invoice desk at the end of the day: papers fanned out, a paperclip and keyboard on the corner, nothing decorative competing with the work.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Card surfaces, testimonial panels, elevated content blocks |
| Cool Mist | `#f7fafc` | `--color-cool-mist` | Page canvas, alternating section bands, soft wash behind content |
| Stone Edge | `#afb0b1` | `--color-stone-edge` | Hairline dividers, FAQ separators, faint horizontal rules |
| Graphite Mute | `#8d8d8d` | `--color-graphite-mute` | Muted body copy, helper text, secondary metadata, grayscale logo cloud |
| Charcoal Whisper | `#1e1e1e` | `--color-charcoal-whisper` | Secondary text, subdued labels, supporting copy |
| Midnight Ink | `#0f0f0f` | `--color-midnight-ink` | Primary body and heading text — the voice of the page |
| Onyx Button | `#0d111b` | `--color-onyx-button` | Dark supporting neutral for text, icons, and strong contrast. Do not promote it to the primary CTA color |
| Tinted Shadow | `#242628` | `--color-tinted-shadow` | Button ring/border color and shadow base — gives dark CTAs dimensional edge without harshness |
| Invoice Blue | `#0098f2` | `--color-invoice-blue` | Eyebrow tags, feature checkmarks, inline accent links, brand highlight — the only saturated UI color, used as a small bright signal |
| Magenta Tile | `#f200ca` | `--color-magenta-tile` | Decorative avatar fills, sender-icon accents in invoice mockups, brand illustration highlight |
| Iris Glow | `#6d56fc` | `--color-iris-glow` | Decorative avatar fills, brand illustration accent, secondary color in product mockups |
| Wash Sky | `#cfeafa` | `--color-wash-sky` | Decorative pastel wash behind illustrations and product cards — the only chromatic surface tint |
| Wash Lilac | `#e1e0fc` | `--color-wash-lilac` | Decorative pastel wash for product card backgrounds — softens white without losing light theme |
| Wash Petal | `#f6d2f4` | `--color-wash-petal` | Decorative pastel wash for product card backgrounds — warm counterpoint to sky and lilac |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Open Runde — Primary brand typeface — handles body, labels, subheadings, all headings, and the 64px display. The geometric forms with softened terminals give the system a modern-but-friendly voice; tight negative tracking on larger sizes (–0.037em at display) creates confident density without feeling heavy. Weights step from 400 body to 500 UI labels to 600 headings. · `--font-open-runde`
- **Substitute:** Inter, DM Sans, or General Sans
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 20px, 32px, 40px, 64px
- **Line height:** 1.13–1.50
- **Letter spacing:** -0.012em at 20px (–0.24px), -0.020em at 32px (–0.64px), -0.030em at 40px (–1.2px), -0.037em at 64px (–2.4px)
- **OpenType features:** `"blwf", "cv03", "cv04", "cv09", "cv11"`
- **Role:** Primary brand typeface — handles body, labels, subheadings, all headings, and the 64px display. The geometric forms with softened terminals give the system a modern-but-friendly voice; tight negative tracking on larger sizes (–0.037em at display) creates confident density without feeling heavy. Weights step from 400 body to 500 UI labels to 600 headings.

### Caveat — Handwritten signature accent for testimonial attributions and small personal notes — a single humanizing voice against the geometric Open Runde. Use sparingly; one instance per testimonial, never in functional UI. · `--font-caveat`
- **Substitute:** Caveat (Google Fonts) or Kalam
- **Weights:** 600
- **Sizes:** 16px, 24px
- **Line height:** 1.33–1.50
- **Role:** Handwritten signature accent for testimonial attributions and small personal notes — a single humanizing voice against the geometric Open Runde. Use sparingly; one instance per testimonial, never in functional UI.

### Inter — Reserved fallback for system metadata rows; treated as utilitarian neutral text, not a brand voice · `--font-inter`
- **Substitute:** system-ui, -apple-system, Segoe UI
- **Weights:** 500
- **Sizes:** 14px
- **Line height:** 1.43
- **Role:** Reserved fallback for system metadata rows; treated as utilitarian neutral text, not a brand voice

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | -0.24px | `--text-subheading` |
| heading | 32px | 1.25 | -0.64px | `--text-heading` |
| heading-lg | 40px | 1.21 | -1.2px | `--text-heading-lg` |
| display | 64px | 1.13 | -2.4px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 1250px |
| cards | 20px |
| images | 32px |
| inputs | 12px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px` | `--shadow-subtle` |
| subtle-2 | `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0...` | `--shadow-subtle-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Primary Pill Button
**Role:** Main call-to-action (e.g. 'Create an invoice', 'Sign up for free')

Fill #0d111b (Onyx Button), white text in Open Runde 500 at 14px, fully pill-shaped at 100px radius, 13px vertical × 24px horizontal padding. Carries a 1px #242628 ring and a subtle 1px 48%-opacity dark drop shadow. No hover lift — color deepens slightly instead. This is the only filled button in the system.

### Ghost Text Link
**Role:** Secondary actions in the top nav ('Log in')

No background, no border. Open Runde 500 at 14px in #0f0f0f. Sits inline with the nav row; relies on weight contrast against the wordmark rather than any container.

### Eyebrow Tag
**Role:** Small label above section headlines ('Same day payouts, zero subscription fees')

Open Runde 500 at 14px in #0098f2 (Invoice Blue), centered above the display heading. No background, no border — color alone signals its function as a category label.

### Feature Check Pill
**Role:** Inline trust signals under the hero CTA ('2.7% card fee', '1% bank transfer fee', '1% stablecoin fee')

A row of three short statements: small #0098f2 checkmark glyph + Open Runde 500 at 14px in #1e1e1e. No container, no border — the checkmark color is the only chromatic signal.

### Hero Display Heading
**Role:** Primary page title ('Invoices that work harder')

Open Runde 600 at 64px, line-height 1.13, letter-spacing –2.4px, color #0f0f0f. Centered. The tightest tracking in the system — this is the moment Open Runde's negative tracking earns its keep, condensing the headline into a dense confident block.

### Invoice Mockup Card
**Role:** Product visualization in the hero and feature sections

White card with 20px radius and 2.5px 6%-opacity shadow, floating on a pastel wash background (#cfeafa, #e1e0fc, or #f6d2f4 — rotates between instances). Internally structured as a two-column FROM/TO block with circular brand-tinted avatar tiles in #f200ca or #6d56fc.

### Testimonial Card
**Role:** Customer quote panel

White (#ffffff) card with 20px radius, no border, no shadow beyond the soft 6% system shadow. Quote text in Open Runde 500 at 24px in #0f0f0f, centered. Attribution uses Caveat 600 at 16px in #8d8d8d — the only handwritten voice in the system.

### Logo Cloud Row
**Role:** Social proof band of customer logos

Single horizontal row on #f7fafc background. Logos rendered in #8d8d8d (Graphite Mute) — uniformly desaturated so no single brand dominates. Equal horizontal spacing, vertically centered, no captions.

### FAQ Accordion Item
**Role:** Expandable Q&A row in the FAQ section

Full-width row, no container card. Top hairline border at 1px #afb0b1 (Stone Edge) — the only border element that carries visual weight. Question text in Open Runde 500 at 16px in #0f0f0f. Right-aligned '+' glyph in #0f0f0f, 20px size. Vertical padding 16–20px. Rows sit directly on #f7fafc canvas with no separation between them other than the rule.

### Top Navigation Bar
**Role:** Persistent page header

White (#ffffff) background, no border, no shadow. Left: Acctual wordmark in #0d111b at ~20px Open Runde 600. Center: nav text links (Invoicing, Pricing, Blog, Guides) in Open Runde 500 at 14px in #0f0f0f. Right: 'Log in' ghost link + Primary Pill Button ('Sign up for free'). Sits on the page canvas with comfortable 24px vertical padding.

### Decorative Stationery Illustration
**Role:** Atmospheric props around the hero (paperclip, keyboard corner, binder clip, invoice card edges)

Photographic-style props with soft 32px masking radius, partially cropped at viewport edges so they read as 'desk surface' atmosphere. Treated in muted neutrals with the occasional magenta/violet tint to echo the product card palette. Never overlap the headline; always sit at the canvas edges.

## Do's and Don'ts

### Do
- Keep the system 99% achromatic — let #0098f2, #f200ca, and #6d56fc appear only as small functional dots (checkmarks, avatar tiles, eyebrow tags) no larger than 24px.
- Use Open Runde for all interface text; reserve Caveat exclusively for testimonial attributions and personal signatures.
- Apply 100px or 1250px border-radius to any element that should feel tappable or pill-shaped — buttons, tags, status chips.
- Use 20px radius for cards and 32px for masked images and illustrations; never mix in 4px or 8px radii on foreground UI.
- Tighten letter-spacing aggressively on display sizes — at 64px use –2.4px, at 40px use –1.2px — to match the dense geometric feel of Open Runde's large optical sizes.
- Build CTA hierarchy with a single dark filled pill (#0d111b) and a single ghost text link; never introduce a second filled button color.
- Separate sections with whitespace and alternating #f7fafc bands, not with borders or background color changes.

### Don't
- Don't use #0098f2, #f200ca, or #6d56fc as large fills, section backgrounds, or page banners — they are punctuation, not paint.
- Don't add a hover-lift shadow, a colored glow, or a multi-layer drop shadow to any element — the system is built on 6% black at 2.5px offset only.
- Don't introduce a second brand color for buttons; the primary action is always #0d111b onyx, period.
- Don't use Caveat in functional UI like buttons, links, or labels — it is a signature accent, not a voice.
- Don't set body text below 14px or above 1.5 line-height; the system breathes because the body stays at 16px / 1.5.
- Don't apply sharp corners (0–4px radius) to any foreground element — the entire surface language is soft and rounded.
- Don't pair Open Runde with another geometric sans as a heading; let Open Runde carry the page alone.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#f7fafc` | Default body background, alternating band behind text-heavy sections |
| 1 | Card Surface | `#ffffff` | Testimonial panel, FAQ card, product mockup base — the only true white in the system |
| 2 | Pastel Wash | `#cfeafa` | Decorative backing for invoice/avatar mockups — adds warmth without breaking the light theme |
| 2 | Pastel Lilac | `#e1e0fc` | Secondary decorative wash, rotates with sky and petal in product mockups |
| 2 | Pastel Petal | `#f6d2f4` | Tertiary decorative wash, completes the three-color pastel rotation behind illustrations |

## Elevation

- **Primary CTA button:** `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px`
- **Cards and product mockups:** `rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px`

## Imagery

Imagery is sparse and atmospheric rather than illustrative or photographic in a marketing sense. The dominant visual technique is floating stationery — a paperclip, a keyboard corner, a binder clip, a partially-cropped invoice card — treated as cropped product photography with soft 32px masking, partially bleeding off the viewport edges to read as 'desk surface' context. There is no lifestyle photography, no people, no stock imagery. The product itself is shown as a clean white invoice mockup card floating over one of three pastel wash backgrounds (sky, lilac, petal). Icons in the product are minimal circular avatar tiles in saturated brand colors (magenta, violet, blue). The overall density is text-dominant with imagery serving as corner atmosphere rather than focal content.

## Layout

The page is max-width 1200px centered on a #f7fafc canvas, with a sticky white top nav bar (no border, no shadow) carrying the wordmark left, nav links center, and a dark pill CTA right. The hero is a centered text stack on the full canvas width — eyebrow tag, 64px display headline, supporting paragraph, dark pill CTA, then a row of three inline feature check pills — flanked by decorative stationery props bleeding off the left and right edges. Below the hero sits a single product mockup card (invoice visualization) over a pastel wash, visually anchoring the center. The page alternates between #f7fafc bands and white card surfaces to create rhythm without using borders. A logo cloud row breaks the rhythm with uniformly desaturated logos. The FAQ section sits on a single full-width band with hairline-bordered accordion rows; no card container. The overall rhythm is spacious — 64px between sections, 24px between elements, 16px between text lines — leaning into the 'clean desk' metaphor rather than packing information densely.

## Agent Prompt Guide

## Quick Color Reference
- text: #0f0f0f (Midnight Ink)
- background: #f7fafc (Cool Mist canvas), #ffffff (Paper White cards)
- border: #afb0b1 (Stone Edge hairlines)
- accent: #0098f2 (Invoice Blue — checkmarks, eyebrow tags)
- pastel wash: #cfeafa / #e1e0fc / #f6d2f4 (rotating behind product mockups)
- primary action: no distinct CTA color

## Example Component Prompts

1. **Hero Section.** Canvas #f7fafc. Centered stack. Eyebrow tag in Open Runde 500, 14px, #0098f2. Display headline in Open Runde 600, 64px, #0f0f0f, line-height 1.13, letter-spacing -2.4px. Body in Open Runde 400, 16px, #1e1e1e, line-height 1.5. Dark pill button: fill #0d111b, 100px radius, 13px 24px padding, Open Runde 500 14px white text, shadow rgb(36,38,40) 0 0 0 1px + rgba(27,28,29,0.48) 0 1px 2px 0. Below: row of three feature pills — #0098f2 checkmark glyph + Open Runde 500 14px #1e1e1e text, 24px gap between.

2. **Invoice Mockup Card.** White #ffffff card, 20px radius, shadow rgba(0,0,0,0.06) 0 2.5px 2.5px 0. Padding 24px. Two-column FROM/TO layout with 32px gap. Each column has a 40px circular avatar tile in #f200ca or #6d56fc containing a white brand glyph, plus label 'FROM'/'TO' in Open Runde 500 12px #8d8d8d uppercase, name in Open Runde 600 20px #0f0f0f, email in Open Runde 400 14px #8d8d8d. Card sits on a #cfeafa pastel wash backdrop.

3. **Testimonial Card.** White #ffffff card, 20px radius, soft 6% black shadow, 32px padding. Quote in Open Runde 500 24px #0f0f0f, centered, max-width 720px. Attribution line in Caveat 600 16px #8d8d8d, centered below quote with 16px gap.

4. **FAQ Accordion Row.** Full-width on #f7fafc canvas, no card container. 1px top border in #afb0b1. Vertical padding 20px. Question in Open Runde 500 16px #0f0f0f, left-aligned. Right-aligned '+' icon in #0f0f0f at 20px. No background change on hover.

5. **Top Navigation Bar.** White #ffffff background, no border, no shadow, sticky top. 24px vertical padding. Left: Acctual wordmark in Open Runde 600 20px #0d111b. Center: nav text links in Open Runde 500 14px #0f0f0f with 32px gap. Right: 'Log in' ghost text link in Open Runde 500 14px #0f0f0f, then dark pill button (Sign up for free) at 100px radius, fill #0d111b, white text, 8px 20px padding.

## Pastel Wash System

Acctual uses a three-color pastel rotation — #cfeafa (sky), #e1e0fc (lilac), #f6d2f4 (petal) — as the only chromatic surfaces in the system. They appear exclusively as soft circular or rounded-rectangle washes behind product mockups and invoice cards, never as section backgrounds, never as fills on functional UI. The purpose is to give the otherwise achromatic interface a hint of warmth and to echo the brand accent colors (#0098f2, #6d56fc, #f200ca) at a muted 20% saturation. Always pick one wash per product card; never stack them; never apply gradients between them. They sit beneath the card, cropped to the card's silhouette, with the same 20–32px radius as the card itself.

## Surface Discipline

The system operates on three surface layers, not five: canvas (#f7fafc), card (#ffffff), and decorative wash (pastel). There is no modal overlay, no tooltip surface, no elevated dropdown — when a UI element needs to rise above the canvas, it does so with the single 6% black shadow at 2.5px offset, never with a separate surface color. This three-layer discipline is what keeps the page reading as 'paper on a desk' rather than 'software with depth'.

## Similar Brands

- **Mercury** — Same near-monochrome fintech canvas with soft cool-gray sections, pill-shaped dark CTAs, and chromatic color used as small functional punctuation rather than fills
- **Stripe** — Same restrained color discipline (one brand accent, everything else achromatic) with generous 20px+ card radii and centered hero headline with eyebrow tag
- **Ramp** — Same confident geometric sans headline treatment with tight negative tracking at large display sizes, and identical dark-on-white pill button hierarchy
- **Linear** — Same hairline-border-only section dividers, no heavy borders anywhere, and the same 'let typography do the work' attitude toward information hierarchy

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-cool-mist: #f7fafc;
  --color-stone-edge: #afb0b1;
  --color-graphite-mute: #8d8d8d;
  --color-charcoal-whisper: #1e1e1e;
  --color-midnight-ink: #0f0f0f;
  --color-onyx-button: #0d111b;
  --color-tinted-shadow: #242628;
  --color-invoice-blue: #0098f2;
  --color-magenta-tile: #f200ca;
  --color-iris-glow: #6d56fc;
  --color-wash-sky: #cfeafa;
  --color-wash-lilac: #e1e0fc;
  --color-wash-petal: #f6d2f4;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-caveat: 'Caveat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.64px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.21;
  --tracking-heading-lg: -1.2px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.4px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 32px;
  --radius-full: 100px;
  --radius-full-2: 1250px;

  /* Named Radii */
  --radius-tags: 1250px;
  --radius-cards: 20px;
  --radius-images: 32px;
  --radius-inputs: 12px;
  --radius-buttons: 100px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px;
  --shadow-subtle-2: rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-page-canvas: #f7fafc;
  --surface-card-surface: #ffffff;
  --surface-pastel-wash: #cfeafa;
  --surface-pastel-lilac: #e1e0fc;
  --surface-pastel-petal: #f6d2f4;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #ffffff;
  --color-cool-mist: #f7fafc;
  --color-stone-edge: #afb0b1;
  --color-graphite-mute: #8d8d8d;
  --color-charcoal-whisper: #1e1e1e;
  --color-midnight-ink: #0f0f0f;
  --color-onyx-button: #0d111b;
  --color-tinted-shadow: #242628;
  --color-invoice-blue: #0098f2;
  --color-magenta-tile: #f200ca;
  --color-iris-glow: #6d56fc;
  --color-wash-sky: #cfeafa;
  --color-wash-lilac: #e1e0fc;
  --color-wash-petal: #f6d2f4;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-caveat: 'Caveat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.64px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.21;
  --tracking-heading-lg: -1.2px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.4px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 32px;
  --radius-full: 100px;
  --radius-full-2: 1250px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px;
  --shadow-subtle-2: rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px;
}
```