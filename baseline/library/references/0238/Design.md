# Adaline — Style Reference
> botanical journal at dawn

**Theme:** light

Adaline renders as a contemplative workspace: a warm cream canvas draped over a painted landscape, with near-black forest text and one deep warm-brown action color. Typography stays geometric and humanist (Akkurat) with an experimental monospace (Fragment Mono) for micro-labels — never decorative, always functional. Surfaces layer as subtle sage tints, borders are hairline thin, and components whisper rather than shout: ghost buttons, outlined nav, 20px pill radii, almost zero elevation. The whole system behaves like a botanical journal — quiet, organic, deliberate — where the only saturated moment is the primary action and the only sharp edge is the cursor.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream Paper | `#fbfdf6` | `--color-cream-paper` | Page canvas, card surfaces, inverted text on dark fills |
| Botanical Ink | `#0a1d08` | `--color-botanical-ink` | Primary headings, body text, outlined/ghost button borders, nav text |
| Bark Brown | `#31200b` | `--color-bark-brown` | Decorative fill, secondary text tone, SVG illustration depth |
| Warm Loam | `#4a3212` | `--color-warm-loam` | Primary action button fill — the single chromatic CTA, deep earthy brown against cream |
| Forest Floor | `#203b14` | `--color-forest-floor` | Green outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Sage Mist | `#eff2e8` | `--color-sage-mist` | First elevated surface above canvas — subtle section banding |
| Lichen | `#e0e5d5` | `--color-lichen` | Secondary surface tint, pill button borders, hairline dividers |
| Moss Veil | `#d7e8b5` | `--color-moss-veil` | Tag/badge backgrounds, soft highlight washes, selected state fills |
| Eucalyptus | `#c5ccb6` | `--color-eucalyptus` | Tertiary surface, large decorative borders, muted section frames |
| Onyx | `#000000` | `--color-onyx` | Logo mark fill, SVG icon strokes, maximum-contrast elements |

## Tokens — Typography

### Akkurat — Primary typeface across all UI — nav, body, headings, buttons. The tight -0.04em tracking at display sizes (47-53px) pulls letters together, giving headlines a dense, inked-on-page quality. Weight 400 is default; 700 reserved for emphasis and nav items. Akkurat's humanist grotesque proportions soften the technical context, making the AI/agent product feel editorial rather than engineering. · `--font-akkurat`
- **Substitute:** Inter, Söhne, or system-ui
- **Weights:** 400, 700
- **Sizes:** 12, 14, 18, 47, 53
- **Line height:** 1.0, 1.33, 1.43, 1.44, 1.67
- **Letter spacing:** -0.04em
- **OpenType features:** `"calt", "kern"`
- **Role:** Primary typeface across all UI — nav, body, headings, buttons. The tight -0.04em tracking at display sizes (47-53px) pulls letters together, giving headlines a dense, inked-on-page quality. Weight 400 is default; 700 reserved for emphasis and nav items. Akkurat's humanist grotesque proportions soften the technical context, making the AI/agent product feel editorial rather than engineering.

### Fragment Mono — Micro-labels, status indicators, tag text, code-adjacent annotations. Used sparingly as typographic punctuation — never for running text. The slight +0.02em tracking widens the mono for legibility at small sizes. Functions as the system's 'technical whisper'. · `--font-fragment-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14
- **Line height:** 1.0
- **Letter spacing:** 0.02em
- **OpenType features:** `"calt", "kern"`
- **Role:** Micro-labels, status indicators, tag text, code-adjacent annotations. Used sparingly as typographic punctuation — never for running text. The slight +0.02em tracking widens the mono for legibility at small sizes. Functions as the system's 'technical whisper'.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1 | -0.48px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.56px | `--text-body-sm` |
| body | 18px | 1.67 | -0.72px | `--text-body` |
| heading-sm | 47px | 0.98 | -1.88px | `--text-heading-sm` |
| display | 53px | 1 | -2.12px | `--text-display` |

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
| 128 | 128px | `--spacing-128` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 20px |
| tags | 9999px |
| images | 8px |
| buttons | 20px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(99, 143, 61, 0.1) 0px 0px 0px 1px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-90px
- **Card padding:** 24-32px
- **Element gap:** 8-16px

## Components

### Primary Action Button (Filled)
**Role:** High-emphasis conversion action

Filled with Warm Loam (#4a3212), cream text (#fbfdf6), 20px border-radius, 24px vertical padding × 32px horizontal. Akkurat 14px weight 700, tracking -0.04em. Hovers to Forest Floor (#203b14). The deep earthy brown against cream creates urgency through warmth, not aggression — like dark soil against paper.

### Ghost/Outlined Button
**Role:** Secondary action, nav-style controls

Transparent fill, 1px Botanical Ink (#0a1d08) border, 20px radius, 12px×24px padding. Akkurat 14px weight 700, Botanical Ink text. Used for 'Watch Demo' and nav items. The outlined action border is the only chromatic border system — always Botanical Ink.

### Navigation Bar
**Role:** Top-level site navigation

Full-width transparent over canvas, max-width 1200px centered. Logo (Adaline wordmark + slash mark in #000000) center-aligned, nav links left (Products, Pricing, Blog), CTA pair right. 20px radius on all interactive elements. Akkurat 14px weight 700, Botanical Ink.

### Hero Headline
**Role:** Primary page title

Akkurat 47-53px weight 400, line-height ~1.0, tracking -1.88 to -2.12px. Botanical Ink (#0a1d08). Centered alignment. The weight 400 (not 700) is a signature choice — authority through scale and restraint, not boldness. Sits over the painted landscape background without competing.

### Trust Logo Strip
**Role:** Social proof, client logos

Horizontal row of monochrome logo marks, evenly spaced, centered. Each logo rendered in Botanical Ink (#0a1d08) at uniform height (~24px). 'Trusted by' label above in Fragment Mono 14px, tracking +0.02em, in Botanical Ink.

### Micro-Label
**Role:** Section headers, status indicators, tags

Fragment Mono 14px weight 400, tracking +0.02em, Botanical Ink. Used for 'Trusted by' and similar meta-labels. Uppercase by convention. Functions as typographic annotation between major content blocks.

### Tag/Badge
**Role:** Category labels, status pills

Moss Veil (#d7e8b5) background, Botanical Ink text, 9999px border-radius, 4px×12px padding. Fragment Mono 14px. The only place where a green tint appears as fill — small functional punctuation, never large area.

### Card Surface
**Role:** Content containers, feature blocks

Cream Paper (#fbfdf6) or Lichen (#e0e5d5) background, 1px Botanical Ink or Eucalyptus border, 8-20px radius, 24-32px padding. No shadow. The border defines the edge, not elevation. Content inside uses Akkurat body text with -0.04em tracking.

### Landscape Backdrop
**Role:** Hero and section atmospheric imagery

Full-bleed painted illustration: misty lake, rolling hills, solitary bench, bonsai-like trees. Color palette: sage greens, warm earths, cream sky. No hard edges — everything soft and atmospheric. The imagery is the brand's emotional anchor; UI elements float over it with cream/ink contrast.

## Do's and Don'ts

### Do
- Use Warm Loam (#4a3212) exclusively for the primary filled action — never use it for decorative elements, icons, or large surfaces
- Set all button and nav radii to 20px; use 8px for images and 9999px for tags only
- Apply -0.04em letter-spacing to all Akkurat text at every size — the tight tracking is the typeface's signature density
- Layer surfaces in order: Cream Paper → Sage Mist → Lichen → Moss Veil → Eucalyptus — never skip levels or invert the stack
- Use Fragment Mono 14px for all micro-labels and status text; reserve Akkurat for all running text and headings
- Center-align hero headlines at 47-53px weight 400 — the weight choice (not 700) is the authority signal
- Use 1px Botanical Ink borders for all outlined/ghost interactive elements — the border color is always #0a1d08

### Don't
- Don't use weight 700 for headlines — Akkurat at weight 400 with tight tracking carries more presence than bold would
- Don't add drop shadows beyond the single 1px green-tinted ring; the system is shadow-averse by design
- Don't introduce saturated colors outside the established earth/sage palette — no blues, no vivid greens, no warm reds
- Don't use sharp corners (0px radius) on any interactive element — minimum 8px for images, 20px for controls
- Don't apply Fragment Mono to body copy or headings — it's strictly for micro-labels and technical annotations
- Don't separate nav and button radii into different values — both lock to 20px for system consistency
- Don't use #fbfdf6 text on light surfaces or Botanical Ink on dark fills without verifying the 17:1 contrast ratio holds

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fbfdf6` | Page background — warm off-white with green undertone |
| 1 | First Elevation | `#eff2e8` | Subtle section banding, alternating content blocks |
| 2 | Second Elevation | `#e0e5d5` | Card surfaces, pill button outlines, bordered containers |
| 3 | Third Elevation | `#d7e8b5` | Active states, selected highlights, accent tags |
| 4 | Fourth Elevation | `#c5ccb6` | Decorative frames, large section borders, muted overlays |

## Elevation

- **Primary Button:** `rgba(99, 143, 61, 0.1) 0px 0px 0px 1px`

## Imagery

The site is anchored by a single signature visual: a painted landscape illustration — misty lake, bonsai trees, solitary bench, rolling sage hills in cream sky. This is not photography or flat illustration; it has painterly depth, soft atmospheric perspective, and a muted earth/sage palette that mirrors the UI color tokens. The landscape is full-bleed, used as a hero backdrop and section divider. Iconography is minimal and monolinear: a simple slash mark for the logo, clean outline icons in the trust strip. The visual language is contemplative and organic — a botanical journal aesthetic, not a tech-product aesthetic. Imagery occupies roughly 40% of the hero viewport and bleeds behind the headline without competing.

## Layout

Centered max-width 1200px content within a full-bleed canvas. Hero is a centered headline stack over full-bleed landscape imagery — text floats, doesn't compete. Navigation is top-fixed, transparent, with logo centered and nav links/CTA pair split left/right. The trust logo strip is a centered horizontal row directly below the headline. Sections alternate with 64-90px vertical gaps, using subtle sage surface tints (Lichen, Sage Mist) to create banding rather than hard dividers. Content blocks tend toward centered stacks or 2-column text+image splits. The page breathes — spacious, contemplative density, not information-packed.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0a1d08 (Botanical Ink)
- background: #fbfdf6 (Cream Paper)
- border: #0a1d08 (Botanical Ink for interactive) / #c5ccb6 (Eucalyptus for decorative)
- accent: #203b14 (Forest Floor)
- primary action: #4a3212 (filled action)

**Example Component Prompts**

1. Create a Primary Action Button: #4a3212 background, #fbfdf6 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. *Create a primary action button:* Filled with Warm Loam (#4a3212), cream text (#fbfdf6), 20px border-radius, 24px×32px padding. Akkurat 14px weight 700, letter-spacing -0.56px. Hovers to Forest Floor (#203b14).

3. *Create a micro-label:* Fragment Mono 14px weight 400, tracking +0.02em, Botanical Ink (#0a1d08). 8px margin-bottom from adjacent content.

4. *Create a card surface:* Lichen (#e0e5d5) background, 1px Botanical Ink border, 8px radius, 32px padding. Akkurat body text 18px weight 400, -0.72px tracking. No shadow.

5. *Create a trust logo strip:* Centered horizontal flex row, 48px gap between logos. 'Trusted by' label above in Fragment Mono 14px. Each logo 24px height, Botanical Ink fill.

## Color System Logic

The palette operates on a single axis: green-warmth saturation. The canvas is warm cream with green undertone. Text is near-black with green undertone. The single brand color (Warm Loam) is a warm brown that sits *between* the green and warm poles — it's the chromatic pivot. This is why the system feels cohesive despite using multiple hues: every color shares the same earthy, botanical DNA. The sage surface stack (Sage Mist → Lichen → Moss Veil → Eucalyptus) is a green desaturation gradient, each step adding ~10% chroma. Never mix these as if they were distinct palettes — they're a single continuous surface language.

## Similar Brands

- **Linear** — Same near-monochrome palette with a single deep accent color, tight geometric typography, minimal elevation system, and hairline border-first component design
- **Notion** — Shared warm off-white canvas, restrained color usage, and the habit of letting illustration/imagery do emotional work while UI stays quiet and functional
- **Vercel** — Similar centered nav with logo-in-middle layout, large weight-400 headlines with tight tracking, and the same restraint of using exactly one chromatic accent for CTAs
- **Anthropic** — Same editorial/serif-adjacent calm, warm earth-tone palette, and the philosophy that AI products should feel contemplative rather than aggressive or futuristic
- **Read.cv** — Both use Akkurat (or Akkurat-adjacent) grotesques, warm cream canvases, and the same botanical/contemplative mood that resists tech-cliché aesthetics

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-cream-paper: #fbfdf6;
  --color-botanical-ink: #0a1d08;
  --color-bark-brown: #31200b;
  --color-warm-loam: #4a3212;
  --color-forest-floor: #203b14;
  --color-sage-mist: #eff2e8;
  --color-lichen: #e0e5d5;
  --color-moss-veil: #d7e8b5;
  --color-eucalyptus: #c5ccb6;
  --color-onyx: #000000;

  /* Typography — Font Families */
  --font-akkurat: 'Akkurat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-fragment-mono: 'Fragment Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.56px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.72px;
  --text-heading-sm: 47px;
  --leading-heading-sm: 0.98;
  --tracking-heading-sm: -1.88px;
  --text-display: 53px;
  --leading-display: 1;
  --tracking-display: -2.12px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-128: 128px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-90px;
  --card-padding: 24-32px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 20px;

  /* Named Radii */
  --radius-nav: 20px;
  --radius-tags: 9999px;
  --radius-images: 8px;
  --radius-buttons: 20px;

  /* Shadows */
  --shadow-subtle: rgba(99, 143, 61, 0.1) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-canvas: #fbfdf6;
  --surface-first-elevation: #eff2e8;
  --surface-second-elevation: #e0e5d5;
  --surface-third-elevation: #d7e8b5;
  --surface-fourth-elevation: #c5ccb6;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-cream-paper: #fbfdf6;
  --color-botanical-ink: #0a1d08;
  --color-bark-brown: #31200b;
  --color-warm-loam: #4a3212;
  --color-forest-floor: #203b14;
  --color-sage-mist: #eff2e8;
  --color-lichen: #e0e5d5;
  --color-moss-veil: #d7e8b5;
  --color-eucalyptus: #c5ccb6;
  --color-onyx: #000000;

  /* Typography */
  --font-akkurat: 'Akkurat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-fragment-mono: 'Fragment Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.56px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.72px;
  --text-heading-sm: 47px;
  --leading-heading-sm: 0.98;
  --tracking-heading-sm: -1.88px;
  --text-display: 53px;
  --leading-display: 1;
  --tracking-display: -2.12px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-128: 128px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 20px;

  /* Shadows */
  --shadow-subtle: rgba(99, 143, 61, 0.1) 0px 0px 0px 1px;
}
```