# Claude — Style Reference
> Warm letterpress on cream paper — a literary workspace where ink-black text rests on ivory stock and color appears only as deliberate annotation.

**Theme:** light

Claude's design system reads like a letterpress journal on cream paper — a warm ivory canvas (#faf9f5) under near-black ink (#141413), with taupe linen borders that frame content like printed margins. The interface is almost achromatic: color is rationed to a single dusty blue accent, used sparingly for emphasis rather than decoration. Typography carries the brand: a humanist sans (Anthropic Sans) for UI and a literary serif (Anthropic Serif) for headlines, which transforms what could be generic SaaS into something editorial and considered. Components are flat, border-defined, and gently rounded — the system trades drop shadows for hairline warmth, creating a tactile paper-like quality instead of the usual glass-and-elevation vocabulary of tech products.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ivory Canvas | `#faf9f5` | `--color-ivory-canvas` | Page background, primary canvas — warm off-white that makes the interface feel like printed paper rather than a screen |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, input fields, elevated containers sitting atop the ivory canvas |
| Warm Parchment | `#f0eee6` | `--color-warm-parchment` | Secondary surface for subtle differentiation — toggle backgrounds, hover washes, muted zones |
| Ink Black | `#141413` | `--color-ink-black` | Primary text, dark filled buttons, high-emphasis UI elements — near-black with a warm cast |
| Charcoal | `#1f1e1d` | `--color-charcoal` | Secondary text, nav text, body copy — slightly lighter than Ink for hierarchical depth |
| Warm Slate | `#3d3d3a` | `--color-warm-slate` | Tertiary text, button labels, subdued body content — reads as soft graphite |
| Stone Gray | `#73726c` | `--color-stone-gray` | Muted helper text, captions, inactive nav items — quiet supporting voice |
| Pewter | `#9c9a92` | `--color-pewter` | Subtle icons, decorative strokes, low-emphasis inline elements |
| Linen Border | `#dedcd1` | `--color-linen-border` | Hairline borders, card outlines, dividers — the warm taupe that defines surfaces without harshness |
| Cool Stone | `#b7b7b5` | `--color-cool-stone` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Dust Blue | `#ccdbe8` | `--color-dust-blue` | Sole chromatic accent — link states, decorative highlights, subtle wash backgrounds, icon tints. The only color in an otherwise monochrome system |

## Tokens — Typography

### Anthropic Serif — Editorial display and heading type. Used for hero headlines (56px weight 330), section headings (30px), plan tier names, and price figures. The low weight 330 for large display sizes is anti-convention — most tech brands use 700+ for hero text, but this whisper-weight serif creates authority through literary restraint rather than visual volume. Liga features enabled for refined ligatures. · `--font-anthropic-serif`
- **Substitute:** Source Serif 4, Tiempos Text, or PT Serif
- **Weights:** 330, 400
- **Sizes:** 18px, 24px, 30px, 56px
- **Line height:** 1.20, 1.33, 1.56
- **OpenType features:** `"liga"`
- **Role:** Editorial display and heading type. Used for hero headlines (56px weight 330), section headings (30px), plan tier names, and price figures. The low weight 330 for large display sizes is anti-convention — most tech brands use 700+ for hero text, but this whisper-weight serif creates authority through literary restraint rather than visual volume. Liga features enabled for refined ligatures.

### Anthropic Sans — Interface and body type. Weight 430 (between regular and medium) is the workhorse for body text and buttons — 400 for body, 430 for buttons and emphasis, 500 for subheadings, 600 for strong UI labels. Size 24px sans serves as a mid-scale heading or prominent label. The 430 weight is distinctive — it provides more presence than 400 without jumping to the heaviness of 500, giving the UI a slightly warmer, less clinical feel than standard system fonts. · `--font-anthropic-sans`
- **Substitute:** Inter, IBM Plex Sans, or Söhne
- **Weights:** 400, 430, 500, 600
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 24px
- **Line height:** 1.33, 1.40, 1.43, 1.50, 1.63
- **Letter spacing:** normal
- **OpenType features:** `"liga"`
- **Role:** Interface and body type. Weight 430 (between regular and medium) is the workhorse for body text and buttons — 400 for body, 430 for buttons and emphasis, 500 for subheadings, 600 for strong UI labels. Size 24px sans serves as a mid-scale heading or prominent label. The 430 weight is distinctive — it provides more presence than 400 without jumping to the heaviness of 500, giving the UI a slightly warmer, less clinical feel than standard system fonts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.5 | — | `--text-caption` |
| body | 15px | 1.63 | — | `--text-body` |
| subheading | 18px | 1.56 | — | `--text-subheading` |
| heading-sm | 24px | 1.33 | — | `--text-heading-sm` |
| heading | 30px | 1.33 | — | `--text-heading` |
| display | 56px | 1.2 | — | `--text-display` |

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
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 9.6px |
| cards | 16px |
| inputs | 9.6px |
| buttons | 9.6px |
| containers | 24px |
| hero-panels | 32px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 32px
- **Element gap:** 8px

## Components

### Primary Dark Button
**Role:** High-emphasis call-to-action for account creation, trial activation, and form submission

Filled with Charcoal (#1f1e1d), white (#ffffff) text in Anthropic Sans weight 430 at 15px. 9.6px border-radius. 20px horizontal padding, 8px vertical. No shadow, no border — the dark fill against the ivory canvas is the only visual weight needed. Examples: "Try Claude" in nav, "Continue with email" in auth form.

### Ghost Outlined Button
**Role:** Secondary action that needs visibility without competing with the primary CTA

Transparent fill, Charcoal (#1f1e1d) text in Anthropic Sans weight 430 at 15px. 9.6px border-radius. 20px horizontal padding, 8px vertical. Hairline border in Cool Stone (#b7b7b5) or Linen (#dedcd1). Example: "Contact sales" in nav bar.

### Download Button
**Role:** Platform-specific action with leading icon

Ghost button variant with a platform icon (Apple logo, etc.) preceding the label. Charcoal text, Linen border, 9.6px radius. Subdued visual weight to avoid competing with primary CTAs. Example: "Download desktop app" with Apple icon.

### Social Auth Button
**Role:** Third-party authentication entry point

White (#ffffff) fill, Charcoal text in Anthropic Sans weight 430 at 15px. 9.6px border-radius, Linen border. Provider icon (Google "G" in brand color) left-aligned with consistent 12px gap. Full-width within form container. No fill on hover — border darkens to Charcoal.

### Email Input Field
**Role:** Primary text input for email capture and form fields

White (#ffffff) fill, Linen (#dedcd1) 1px border. 9.6px border-radius. 16px horizontal padding, 12px vertical. Placeholder text in Stone Gray (#73726c). Focus state: border darkens to Charcoal (#1f1e1d) with no ring or shadow — the border transition is the focus indicator.

### Plan Pricing Card
**Role:** Pricing tier display for subscription plans

White (#ffffff) surface on Ivory Canvas background. Linen (#dedcd1) 1px border, 16px border-radius. 32px internal padding. Contains: decorative line-art icon at top, plan name in Anthropic Serif weight 400 at 24px, tagline in Anthropic Sans body-sm, price in Anthropic Serif weight 400 at 30px, full-width Primary Dark Button, and feature checklist below a hairline divider. No shadow — the border defines the card edge.

### Segmented Toggle
**Role:** Tab-style switch between plan categories or view modes

Anthropic Sans weight 500 at 14px. Two states: selected tab has white (#ffffff) fill with Linen border and Charcoal text on Warm Parchment (#f0eee6) track; unselected tab is text-only in Stone Gray. 9.6px radius on the track container and individual selected pill. 4px internal padding. Example: "Individual" / "Team and Enterprise" toggle above pricing grid.

### Feature Checklist Item
**Role:** Bulleted benefit list within plan cards and feature sections

Checkmark icon in Charcoal (#1f1e1d) at 16px, followed by Anthropic Sans weight 400 at 15px in Charcoal text. 12px vertical gap between items. The checkmark is a simple stroke — not a filled circle or decorative graphic.

### Navigation Bar
**Role:** Primary site navigation and brand identity

Transparent or Ivory Canvas background, no shadow or bottom border. Left: Claude logo (asterisk/sparkle glyph + wordmark). Center: nav links in Anthropic Sans weight 430 at 14px in Charcoal. Right: Ghost Button ("Contact sales") + Primary Dark Button ("Try Claude"). 16px gap between nav items. Logo wordmark in Charcoal.

### Logo Mark
**Role:** Brand identity — the Claude sparkle/asterisk icon and wordmark

Asterisk-like glyph in a warm orange/amber tone (subtle chromatic break from the monochrome system — this is the brand's signature mark, appearing only in the logo and favicon context). Wordmark "Claude" in Anthropic Serif weight 400. Logo sits at ~28px height in nav.

### Auth Form Card
**Role:** Login/signup container with stacked authentication options

White (#ffffff) surface, 16px border-radius, Linen border. 32px padding. Contains: Social Auth Button → "or" divider → Email Input + Primary Dark Button stacked vertically. Fine print below in Stone Gray at 12px. Subtle elevation through background contrast only — no shadow.

### Interactive Demo Panel
**Role:** Product showcase panel displaying Chat/Cowork toggle on a simulated workspace

Large rounded container (32px radius) on Ivory Canvas. White inner surface with Linen border. Contains a pill-shaped segmented control: "Chat" (active, white fill with subtle shadow or border) and "Cowork" (inactive, transparent). Cursor arrow as a decorative element suggesting interactivity. This panel is the visual counterweight to the auth form on the hero.

### Decorative Plan Icon
**Role:** Line-art illustration above each pricing tier name

Simple stroke illustration (tree, branching structure, tree-with-fruit) in Charcoal (#1f1e1d) stroke at ~40px height. Drawn at a consistent stroke weight, centered above the plan name. The organic line-art style softens the data-dense pricing card.

## Do's and Don'ts

### Do
- Use Anthropic Serif weight 330 at 56px for hero display headlines — the whisper-weight serif is the brand's signature editorial voice
- Maintain the Ivory Canvas (#faf9f5) as the base background for all pages; never substitute pure white (#ffffff) at the page level
- Use 9.6px border-radius for all interactive elements (buttons, inputs, toggles, nav elements) — this is the system's defining corner treatment
- Use Linen (#dedcd1) 1px borders for card and container edges instead of drop shadows
- Use Charcoal (#1f1e1d) fill with white text for primary action buttons — the only acceptable filled-button treatment
- Use Anthropic Sans weight 430 for button labels and nav links — this slightly-bold weight is warmer than standard 400
- Apply 32px padding inside plan cards and major content containers, 16-20px inside buttons and inputs
- Keep the palette nearly monochrome; use Dust Blue (#ccdbe8) only for link states and subtle accent washes, never for filled buttons

### Don't
- Do not use drop shadows or box-shadow on cards, buttons, or containers — this system is flat and border-defined
- Do not use pure black (#000000) for body text — Ink (#141413) is the correct near-black with warm cast
- Do not use rounded pill shapes (border-radius: 9999px) for buttons — 9.6px is the maximum
- Do not use bold (700+) or heavy weights for headings — the system relies on 330-400 weights for authority
- Do not introduce additional chromatic colors — Dust Blue is the sole accent in an achromatic system
- Do not use the Cool Stone border (#b7b7b5) for content cards — reserve it only for nav-level interactive elements
- Do not use sans-serif type for section headings or display text — Anthropic Serif is mandatory for all heading-level content
- Do not add gradients, glows, or color transitions to surfaces — warmth comes from the cream canvas, not visual effects

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Ivory Canvas | `#faf9f5` | Base page background — the warm off-white that defines the entire visual atmosphere |
| 1 | Pure White | `#ffffff` | Card surfaces, input fields, form containers — elements that need to lift off the canvas |
| 2 | Warm Parchment | `#f0eee6` | Tertiary surfaces for toggle tracks, subtle hover zones, and areas needing quiet differentiation from the base canvas |
| 3 | Charcoal Block | `#1f1e1d` | Inverted surface for primary buttons and interactive dark elements — the only non-white opaque surface in the light system |

## Elevation

This system deliberately avoids drop shadows. Depth and separation are achieved through three techniques instead: (1) hairline Linen borders (#dedcd1) that define edges with the subtlety of a printed rule line, (2) background contrast shifts between Ivory Canvas, Pure White, and Warm Parchment, and (3) the dark-to-light inversion of Primary Dark Buttons. This flat-but-bordered approach is a defining signature — it rejects the glassmorphism/neumorphism conventions of mainstream tech UI and instead references editorial print design, where pages have structure through typography and rules rather than depth illusions.

## Imagery

Minimal photographic imagery. The visual language is dominated by typography and line-art illustration rather than photography. The decorative plan icons (trees, branching structures) are hand-drawn-feeling line art at consistent stroke weight in Charcoal. The interactive demo panel uses a simulated product interface as the visual hero rather than a marketing photograph. The brand's asterisk/sparkle logo mark provides the only chromatic warmth in the identity. Overall: text-dominant with sparse, deliberate illustration accents — the interface is the product, not a photograph of it.

## Layout

Full-width pages with centered max-width content containers (~1200px). The hero follows a two-column split: left column holds the serif headline and auth form card, right column holds the interactive product demo panel. Both columns occupy roughly equal visual weight. Navigation is a clean top bar with logo left, links center, CTAs right. Section rhythm uses generous vertical spacing (64px section gaps) with alternating background bands — Ivory Canvas as the default, with cards in Pure White creating subtle section breaks. Content is left-aligned for body text and centered for hero headlines. The pricing section shifts to a three-column card grid with consistent card widths. No dark sections — the entire page stays in the light/warm spectrum with only the Primary Dark Buttons providing contrast.

## Agent Prompt Guide

**Quick Color Reference**
- Page background: #faf9f5 (Ivory Canvas)
- Card surface: #ffffff (Pure White)
- Primary text: #141413 (Ink Black)
- Secondary text: #1f1e1d (Charcoal)
- Borders: #dedcd1 (Linen)
- Accent: #ccdbe8 (Dust Blue)
- primary action: no distinct CTA color

**Example Component Prompts**

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.



4. Build a form input: White (#ffffff) fill, #dedcd1 1px border, 9.6px radius, 16px×12px padding. Placeholder text in #73726c at 15px Anthropic Sans weight 400. On focus: border transitions to #1f1e1d with no ring or shadow.

5. Create a segmented toggle: Warm Parchment (#f0eee6) track, 9.6px radius, 4px padding. Active segment: white fill with #dedcd1 border, #141413 text at 14px Anthropic Sans weight 500. Inactive segment: transparent, #73726c text.

## Typographic System

The dual-font approach is a core brand signature: Anthropic Serif for all editorial content (headlines, plan names, prices, hero text) and Anthropic Sans for all functional UI (buttons, nav, body, labels, inputs). Never mix within a single text block. The serif-to-sans transition happens at the content/interface boundary — a card title is serif, its button label is sans. The weight 330 used for 56px display sizes is deliberately light; this is not a brand that shouts with its type. Letter-spacing stays at normal across all sizes — no tracked-out caps, no tight display tracking. The "liga" feature setting is enabled for both fonts to ensure refined ligatures in all contexts.

## Similar Brands

- **Linear** — Same editorial restraint with serif-influenced display type, hairline borders instead of shadows, and a warm minimal palette that rejects generic SaaS conventions
- **Notion** — Similar warm-toned minimal interface with clean typography hierarchy and flat border-defined components rather than heavy elevation
- **Stripe** — Shared approach of using refined typography (Stripe uses its own custom serif/sans pairing) and generous whitespace with a nearly monochromatic palette punctuated by a single accent
- **Arc Browser** — Both systems use warm cream/off-white canvases with near-black text, creating a paper-like editorial feel rather than the typical stark-white tech aesthetic

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ivory-canvas: #faf9f5;
  --color-pure-white: #ffffff;
  --color-warm-parchment: #f0eee6;
  --color-ink-black: #141413;
  --color-charcoal: #1f1e1d;
  --color-warm-slate: #3d3d3a;
  --color-stone-gray: #73726c;
  --color-pewter: #9c9a92;
  --color-linen-border: #dedcd1;
  --color-cool-stone: #b7b7b5;
  --color-dust-blue: #ccdbe8;

  /* Typography — Font Families */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.33;
  --text-display: 56px;
  --leading-display: 1.2;

  /* Typography — Weights */
  --font-weight-w330: 330;
  --font-weight-regular: 400;
  --font-weight-w430: 430;
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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 9.6px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;

  /* Named Radii */
  --radius-nav: 9.6px;
  --radius-cards: 16px;
  --radius-inputs: 9.6px;
  --radius-buttons: 9.6px;
  --radius-containers: 24px;
  --radius-hero-panels: 32px;

  /* Surfaces */
  --surface-ivory-canvas: #faf9f5;
  --surface-pure-white: #ffffff;
  --surface-warm-parchment: #f0eee6;
  --surface-charcoal-block: #1f1e1d;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ivory-canvas: #faf9f5;
  --color-pure-white: #ffffff;
  --color-warm-parchment: #f0eee6;
  --color-ink-black: #141413;
  --color-charcoal: #1f1e1d;
  --color-warm-slate: #3d3d3a;
  --color-stone-gray: #73726c;
  --color-pewter: #9c9a92;
  --color-linen-border: #dedcd1;
  --color-cool-stone: #b7b7b5;
  --color-dust-blue: #ccdbe8;

  /* Typography */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.33;
  --text-display: 56px;
  --leading-display: 1.2;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-lg: 9.6px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
}
```