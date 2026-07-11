# GitHub — Style Reference
> violet aurora over developer cosmos — deep midnight surfaces lit by floating purple glows and quiet white type

**Theme:** dark

GitHub operates in a cosmic dark-mode universe where deep near-black canvases (#0d1117) recede behind floating violet and blue radial glows that feel more like aurora than UI. The interface is overwhelmingly achromatic — white and cool-white text on layered dark surfaces — with color appearing as sparse functional punctuation: a soft sky-blue for links, a vivid mint for success/code, and a single emerald CTA that anchors conversion. Typography is custom (Mona Sans) with an unusually wide weight range and aggressive negative tracking on display sizes that makes large headlines feel compressed and confident. Components are flat and low-elevation — 6px radii on controls, 24px on cards — with borders and subtle surface lifts doing the structural work that shadows would do elsewhere. The overall rhythm is spacious, editorial, and quiet, with 3D character illustrations and gradient halos providing the only moments of visual exuberance.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Canvas | `#0d1117` | `--color-midnight-canvas` | Page background, primary canvas — GitHub's signature near-black with a barely-perceptible cool tint |
| Abyss Surface | `#090d0a` | `--color-abyss-surface` | Deepest overlay, button base, modal backgrounds — one shade darker than canvas for contrast pop |
| Void Black | `#000000` | `--color-void-black` | Input fields, nav fills, absolute darkest layers — used where pure black is needed for separation |
| Elevated Surface | `#151a22` | `--color-elevated-surface` | Button fills, secondary card surfaces — one step up from canvas for interactive elements |
| Card Surface | `#283041` | `--color-card-surface` | Card backgrounds, raised panels — cool-tinted gray that reads blue-tinged in dark mode |
| Border Subtle | `#21262d` | `--color-border-subtle` | Hairline borders, dividers, input outlines — barely visible structural lines |
| Border Muted | `#818b98` | `--color-border-muted` | Secondary borders, icon strokes, subtle UI edges |
| Border Strong | `#9198a1` | `--color-border-strong` | Nav borders, button borders, more prominent structural edges |
| Text Primary | `#ffffff` | `--color-text-primary` | Headlines, primary text, high-emphasis content |
| Text Cool White | `#f0f6fc` | `--color-text-cool-white` | Body text, nav text — a faint blue-white that reduces glare vs pure white |
| Text Muted | `#a4aea6` | `--color-text-muted` | Secondary text, descriptions, helper text — desaturated gray-green |
| Text Subtle | `#c3c4c5` | `--color-text-subtle` | Tertiary text, button labels, low-emphasis labels |
| Icon Neutral | `#9ea0a2` | `--color-icon-neutral` | Default icon fills, card borders, low-emphasis graphical elements |
| Vibrant Mint | `#5fed83` | `--color-vibrant-mint` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Emerald CTA | `#08872b` | `--color-emerald-cta` | Primary action button fill — deep emerald that signals commitment without neon aggression |
| Sky Link | `#8dd6ff` | `--color-sky-link` | Links, icon highlights, accent strokes — soft sky blue for interactive emphasis and code reference |
| Vivid Violet | `#8c93fb` | `--color-vivid-violet` | Card accent borders, illustration highlights — saturated violet for feature differentiation |
| Aurora Gradient | `radial-gradient(circle at 0px 100%, rgb(230, 183, 254) 10%, rgb(80, 73, 194) 20%, rgba(87, 78, 255, 0) 60%)` | `--color-aurora-gradient` | Hero atmospheric background — deep indigo that anchors the violet aurora effect |
| Cosmic Glow | `radial-gradient(rgb(167, 162, 255) 30%, rgba(147, 80, 255, 0.5))` | `--color-cosmic-glow` | Radial glow halos, floating orb effects — soft violet light source behind 3D characters |
| Dusk Beam | `linear-gradient(rgba(120, 115, 203, 0.2) 60%, rgb(5993d4) 100%)` | `--color-dusk-beam` | Linear gradient endpoint for section transitions — cool blue fade |

## Tokens — Typography

### Mona Sans — Primary typeface across all UI — the 425–480 intermediate weights (a GitHub signature) allow micro-tonal shifts between body, caption, and label without changing size. Display sizes (40–64px) use aggressive negative tracking (-0.0350em) that compresses headlines for editorial confidence. Mona Sans is GitHub's custom variable sans; substitute with Inter or General Sans for the geometric neutrality, though the intermediate weights are unique to Mona. · `--font-mona-sans`
- **Substitute:** Inter
- **Weights:** 400, 425, 440, 460, 480, 500, 600, 800
- **Sizes:** 14, 16, 18, 22, 24, 40, 48, 64
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.0350em at 48–64px, 0.0100em at 14–18px
- **OpenType features:** `"ss01" on, "cv11" on`
- **Role:** Primary typeface across all UI — the 425–480 intermediate weights (a GitHub signature) allow micro-tonal shifts between body, caption, and label without changing size. Display sizes (40–64px) use aggressive negative tracking (-0.0350em) that compresses headlines for editorial confidence. Mona Sans is GitHub's custom variable sans; substitute with Inter or General Sans for the geometric neutrality, though the intermediate weights are unique to Mona.

### Mona Sans Mono — Code samples, technical labels, file references — monospace companion to Mona Sans with slight positive tracking (0.0150em) for code legibility on dark backgrounds · `--font-mona-sans-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 14
- **Line height:** 1.50
- **Letter spacing:** 0.0150em
- **Role:** Code samples, technical labels, file references — monospace companion to Mona Sans with slight positive tracking (0.0150em) for code legibility on dark backgrounds

### ui-monospace — Fallback system monospace for code blocks and inline code snippets · `--font-ui-monospace`
- **Substitute:** SF Mono, Menlo, Consolas
- **Weights:** 400
- **Sizes:** 14
- **Line height:** 1.50
- **Role:** Fallback system monospace for code blocks and inline code snippets

### Mona Sans VF — Mona Sans VF — detected in extracted data but not described by AI · `--font-mona-sans-vf`
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 24px
- **Line height:** 1, 1.25, 1.43, 1.5
- **Role:** Mona Sans VF — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.01px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.01px | `--text-body-sm` |
| body | 16px | 1.5 | 0.01px | `--text-body` |
| subheading | 18px | 1.4 | 0.01px | `--text-subheading` |
| heading-sm | 22px | 1.3 | — | `--text-heading-sm` |
| heading | 24px | 1.2 | -0.01px | `--text-heading` |
| heading-lg | 40px | 1.18 | -0.02px | `--text-heading-lg` |
| display | 64px | 1 | -0.035px | `--text-display` |

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
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 60px |
| cards | 24px |
| links | 6px |
| pills | 60px |
| images | 16px |
| inputs | 6px |
| buttons | 6px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-96px
- **Card padding:** 24-32px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** Conversion action — Sign up, Get started

Emerald green fill (#08872b), white text, 6px radius, padding 8px 16px. Medium weight (500) Mona Sans at 14px. No shadow — relies on color contrast against dark canvas for prominence.

### Outline Button
**Role:** Secondary action — Try GitHub Copilot, Learn more

Transparent fill, 1px white border (#ffffff at 80% opacity), white text, 6px radius, padding 8px 16px. Ghost-style against the hero; shifts to a filled neutral on internal pages.

### Nav Dropdown Link
**Role:** Top-level navigation items with submenus

No background, #f0f6fc text at 14px weight 500, 4px horizontal padding, 8px vertical. Caret indicator on hover, underline appears with subtle violet glow on active.

### Search Input
**Role:** Global command palette / search

Dark surface fill (#000000 or #151a22), 6px radius, 1px subtle border, monospace placeholder text. Compact height (~32px), icon prefix, keyboard shortcut hint right-aligned.

### Email Input
**Role:** Hero email capture field

White background fill (#ffffff), #0d1117 text, 6px radius, padding 12px 16px. The only light-on-dark inversion in the hero — bright input reads as 'fillable' against the dark canvas.

### Feature Card
**Role:** Tabbed content cards (Code, Plan, Collaborate, etc.)

Dark elevated surface (#151a22 or transparent on dark bg), 24px radius, generous 24–32px padding, subtle 1px border in #21262d. Often contains a code-editor sub-component or product screenshot.

### Code Editor Block
**Role:** Embedded code preview with syntax highlighting

Very dark fill (#0d1117 or #000000), mono font (Mona Sans Mono at 14px), line numbers in muted gray (#9198a1), syntax tokens in #5fed83 (keywords), #8dd6ff (strings), #8c93fb (functions). 6-16px radius depending on containment context.

### Tab Pill Group
**Role:** Feature category navigation (Code/Plan/Collaborate/Automate/Secure)

Pill-shaped container (60px radius), dark surface fill, 1px subtle border. Active tab uses lighter background or bottom underline indicator. Labels in #f0f6fc at 14px weight 500.

### 3D Character Illustration
**Role:** Decorative mascots floating in hero and section backgrounds

Glossy, dimensional 3D-rendered creatures (purple octopus-like, yellow blob, pink bird) with soft shadows and subtle glow. Always placed against radial violet gradient halos. Not interactive — pure atmosphere.

### Hero Gradient Banner
**Role:** Full-bleed hero background atmosphere

Radial gradient from #e6b7fe (soft violet) through #5049c2 (deep indigo) to transparent. Creates a cosmic light source effect, always paired with floating 3D characters in the visual focal point.

### Section Divider Glow
**Role:** Transition between dark sections

Linear or radial gradient using #a7a2ff and #5993d4 at low opacity — creates a horizon-line effect between content blocks without hard borders.

### Link Text
**Role:** Inline links, navigation text links

No underline by default; #8dd6ff (sky blue) color at body weight. On hover, underline appears with 1px offset. Links sit inline with body copy without disrupting reading flow.

### Badge / Tag
**Role:** Status indicators, category labels

60px radius pill shape, dark surface fill (#21262d or #283041), muted text in #f0f6fc at 12-14px. Compact height (~24px), small horizontal padding (8-12px).

## Do's and Don'ts

### Do
- Use 6px radius for all interactive controls (buttons, inputs, links) — this sharp-but-soft corner is GitHub's signature control shape
- Reserve #08872b emerald exclusively for the single most important conversion action per page — never use it for secondary buttons or decorative elements
- Apply -0.0350em letter-spacing to display text at 40px+ — this aggressive negative tracking is what makes Mona Sans headlines feel compressed and confident rather than airy
- Use #8dd6ff sky blue for all interactive text links — never use white for links, the blue is what signals clickability
- Layer radial violet gradients (#5049c2 → transparent) behind hero content to create the cosmic atmosphere — the aurora glow is signature to GitHub's dark identity
- Use Mona Sans intermediate weights (425–480) for subtle hierarchy shifts between body, label, and caption without changing size
- Keep cards at 24px radius and elevated surfaces at 6px–24px — the 18px gap between control and card radii creates clear visual layering

### Don't
- Don't add drop shadows to cards or buttons — GitHub uses flat surfaces and subtle border tints for elevation, not shadows
- Don't use white (#ffffff) for body text on dark backgrounds — use #f0f6fc to reduce the harshness of pure white on near-black
- Don't apply the emerald CTA color to anything other than the primary action — diluting it kills its conversion power
- Don't use #8dd6ff for non-interactive decorative elements — its meaning is 'clickable/linked' and using it for headings or labels breaks the semantic contract
- Don't introduce warm colors (oranges, reds, yellows) into the UI palette — GitHub's system is cool-only: blue, violet, mint, and grayscale
- Don't use sharp 0px or large 12px+ radii on buttons — 6px is the only button radius; deviating breaks the control identity
- Don't use heavy font weights (700-800) for body or UI text — reserve 600-800 for display headlines only; body stays in the 400-500 range

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Midnight Canvas | `#0d1117` | Page background, primary canvas |
| 1 | Elevated Surface | `#151a22` | Button fills, secondary card surfaces, interactive elements |
| 2 | Card Surface | `#283041` | Raised card panels, feature containers |
| 3 | Void Black | `#090d0a` | Modal overlays, deepest UI layers, maximum contrast pop |

## Elevation

GitHub deliberately avoids drop shadows in favor of flat surfaces differentiated by subtle background-color shifts and 1px hairline borders. Elevation is communicated through surface tone (canvas → elevated → card) rather than z-axis shadow, which keeps the dark mode interface feeling weightless and modern rather than skeuomorphic.

## Imagery

Imagery is dominated by glossy 3D-rendered character mascots — purple, yellow, and pink creature-like forms with soft dimensional shading — that float against radial violet gradient halos. These illustrations are decorative atmosphere rather than explanatory content: they provide visual warmth and brand personality without conveying product information. Product screenshots and code editor mockups appear in feature sections, always embedded in dark cards with realistic syntax highlighting. The icon system is line-based and mono-colored, using the sky-blue and neutral-gray palette. Photography is essentially absent — the visual identity is fully illustrated/3D-rendered rather than photographic. Imagery occupies roughly 30-40% of the page in hero sections, dropping to 10-15% in content sections where text and code dominate.

## Layout

Full-bleed dark canvas with max-width 1200px content containers centered horizontally. The hero is a full-viewport-height dark section with centered headline stack (headline + subtext + email CTA row) above a floating 3D character arrangement over a radial violet glow. Below the hero, content sections alternate between pure dark canvas and slightly elevated surfaces, each anchored by a centered headline + subhead pattern. Feature sections use a tabbed card interface (Code/Plan/Collaborate/Automate/Secure) with the active tab showing a large dark code editor or product visual. Navigation is a sticky top bar with left-aligned logo, center-left dropdown menus (Platform, Solutions, Resources, Open Source, Enterprise, Pricing), right-aligned search command palette, and sign-in/sign-up controls. Section rhythm uses 64-96px vertical gaps between bands, with gradient glow dividers replacing hard borders between sections. The overall density is spacious and editorial — large type, generous padding, and breathing room between content blocks rather than information-dense grids.

## Agent Prompt Guide

Quick Color Reference:
- text: #ffffff (headlines), #f0f6fc (body), #a4aea6 (muted)
- background: #0d1117 (canvas), #151a22 (elevated), #283041 (card)
- border: #21262d (subtle), #9198a1 (strong)
- accent: #8dd6ff (links, sky blue)
- primary action: #08872b (filled action)
- brand violet: #8c93fb (feature highlights, illustration accents)

Example Component Prompts:
1. Create a Primary Action Button: #08872b background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. Create a feature card: #151a22 surface fill, 24px radius, 1px #21262d border, 32px padding. Headline at 22px Mona Sans weight 600 #ffffff. Body text at 16px weight 400 #f0f6fc. Optional #8dd6ff sky-blue link at the bottom with no underline by default.

3. Create a tabbed feature section: dark pill container with 60px radius and #21262d border, containing 5 tab labels (Code, Plan, Collaborate, Automate, Secure) in #f0f6fc 14px weight 500. Active tab gets a bottom underline in #8c93fb violet. Below the tabs, a dark code editor block (#0d1117 fill, 16px radius) with Mona Sans Mono 14px code and syntax highlighting: #5fed83 keywords, #8dd6ff strings, #8c93fb functions.

4. Create a top navigation bar: #0d1117 background, 64px height, full-width with max-width 1400px inner container. Left: GitHub logo + dropdown nav items (Platform, Solutions, Resources, Open Source, Enterprise, Pricing) in #f0f6fc 14px weight 500 with #9198a1 caret icons. Right: dark search input (6px radius, #000000 fill, #9198a1 placeholder) + Sign in link + Sign up outline button (1px #ffffff border, 6px radius, 14px weight 500).

5. Create a CTA banner: centered stack on #0d1117 canvas. A small violet (#8c93fb) icon at the top (32px). Headline at 40px Mona Sans weight 600 #ffffff with -0.0350em tracking. Subtext at 18px weight 400 #a4aea6. Below: a single emerald (#08872b) button, 6px radius, 12px 24px padding, white text at 14px weight 500.

## Similar Brands

- **Linear** — Same dark-mode flat-surface philosophy with violet/purple accent gradients, generous spacing, and compressed display headlines using negative letter-spacing
- **Vercel** — Both use deep near-black canvases with minimal color, geometric sans-serif type, and sharp 6px control radii — though Vercel leans monochrome where GitHub adds violet
- **Notion** — Similar quiet dark-mode aesthetic with custom sans-serif, low colorfulness, and card-based content sections — though Notion uses warmer neutrals
- **Supabase** — Shared developer-tool identity with dark canvas, emerald green CTA, and gradient hero atmospheres — Supabase leans more green, GitHub more violet
- **Cursor** — Both pair dark editorial layouts with floating 3D character mascots and violet/purple gradient halos, creating a similar 'cosmic developer' visual mood

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-midnight-canvas: #0d1117;
  --color-abyss-surface: #090d0a;
  --color-void-black: #000000;
  --color-elevated-surface: #151a22;
  --color-card-surface: #283041;
  --color-border-subtle: #21262d;
  --color-border-muted: #818b98;
  --color-border-strong: #9198a1;
  --color-text-primary: #ffffff;
  --color-text-cool-white: #f0f6fc;
  --color-text-muted: #a4aea6;
  --color-text-subtle: #c3c4c5;
  --color-icon-neutral: #9ea0a2;
  --color-vibrant-mint: #5fed83;
  --color-emerald-cta: #08872b;
  --color-sky-link: #8dd6ff;
  --color-vivid-violet: #8c93fb;
  --color-aurora-gradient: #5049c2;
  --gradient-aurora-gradient: radial-gradient(circle at 0px 100%, rgb(230, 183, 254) 10%, rgb(80, 73, 194) 20%, rgba(87, 78, 255, 0) 60%);
  --color-cosmic-glow: #a7a2ff;
  --gradient-cosmic-glow: radial-gradient(rgb(167, 162, 255) 30%, rgba(147, 80, 255, 0.5));
  --color-dusk-beam: #5993d4;
  --gradient-dusk-beam: linear-gradient(rgba(120, 115, 203, 0.2) 60%, rgb(5993d4) 100%);

  /* Typography — Font Families */
  --font-mona-sans: 'Mona Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mona-sans-mono: 'Mona Sans Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-ui-monospace: 'ui-monospace', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-mona-sans-vf: 'Mona Sans VF', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.01px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.01px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.02px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.035px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w425: 425;
  --font-weight-w440: 440;
  --font-weight-w460: 460;
  --font-weight-w480: 480;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-96px;
  --card-padding: 24-32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 48px;
  --radius-full-2: 60px;

  /* Named Radii */
  --radius-tags: 60px;
  --radius-cards: 24px;
  --radius-links: 6px;
  --radius-pills: 60px;
  --radius-images: 16px;
  --radius-inputs: 6px;
  --radius-buttons: 6px;

  /* Surfaces */
  --surface-midnight-canvas: #0d1117;
  --surface-elevated-surface: #151a22;
  --surface-card-surface: #283041;
  --surface-void-black: #090d0a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-midnight-canvas: #0d1117;
  --color-abyss-surface: #090d0a;
  --color-void-black: #000000;
  --color-elevated-surface: #151a22;
  --color-card-surface: #283041;
  --color-border-subtle: #21262d;
  --color-border-muted: #818b98;
  --color-border-strong: #9198a1;
  --color-text-primary: #ffffff;
  --color-text-cool-white: #f0f6fc;
  --color-text-muted: #a4aea6;
  --color-text-subtle: #c3c4c5;
  --color-icon-neutral: #9ea0a2;
  --color-vibrant-mint: #5fed83;
  --color-emerald-cta: #08872b;
  --color-sky-link: #8dd6ff;
  --color-vivid-violet: #8c93fb;
  --color-aurora-gradient: #5049c2;
  --color-cosmic-glow: #a7a2ff;
  --color-dusk-beam: #5993d4;

  /* Typography */
  --font-mona-sans: 'Mona Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mona-sans-mono: 'Mona Sans Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-ui-monospace: 'ui-monospace', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-mona-sans-vf: 'Mona Sans VF', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.01px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.01px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.02px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.035px;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 48px;
  --radius-full-2: 60px;
}
```