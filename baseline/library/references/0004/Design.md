# Gsap — Style Reference
> neon playground in midnight void — dark canvas where every color glows

**Theme:** dark

GSAP operates as a neon playground floating in midnight void: near-black canvas, cream-white typography that glows against the dark, and a rainbow of vivid accent hues that feel electrically charged. The system uses a custom display face (Mori) at extreme sizes — from 14px body copy to 224px hero numerals — with tightly tracked letter-spacing that compresses at scale, giving headlines a sculpted, almost typographic-object quality. Color is the primary organizational device: each product tool or category claims its own accent (pink, orange, green, violet, blue, lime), expressed as colored headings, bracket-bracketed metadata tags, and gradient illustrations. Surfaces stay flat — no shadows, no elevation games — so the color does the heavy lifting. Components are rounded and pill-shaped, navigation is horizontally minimal, and copy uses a distinctive `{ bracketed }` syntax for section labels.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#0e100f` | `--color-void-black` | Page canvas, card surfaces, primary background — the dark stage that makes all accent colors appear to emit light |
| Cream Glow | `#fffce1` | `--color-cream-glow` | Primary text, icon strokes, button borders, nav link colors — warm off-white reads softer than pure white against the near-black canvas and carries a slight luminosity |
| Olive Stone | `#42433d` | `--color-olive-stone` | Muted borders, secondary dividers, low-emphasis UI structure |
| Ash Gray | `#7c7c6f` | `--color-ash-gray` | Body metadata, icon fills at reduced weight, helper text — the desaturated middle ground that recedes from the cream foreground |
| Pulse Green | `linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)` | `--color-pulse-green` | Section headings, nav active states, accent borders — the brand's primary chromatic voice, electric and high-energy; Diagonal brand gradient for decorative illustrations and section accents |
| Candy Pink | `#fec5fb` | `--color-candy-pink` | Tool category accent (Scroll), section headings, decorative borders — soft pastel that glows against the void |
| Ember Orange | `#ff8709` | `--color-ember-orange` | Tool category accent (SVG), section headings, warm punctuation — saturated amber that cuts through the cool palette |
| Electric Violet | `#9d95ff` | `--color-electric-violet` | Tool category accent, section headings, decorative strokes — cool purple that signals creativity tools |
| Signal Blue | `#00bae2` | `--color-signal-blue` | Tool category accent, section headings, link-like emphasis — cyan that reads as technical/precise |
| Lime Flash | `#abff84` | `--color-lime-flash` | Gradient endpoint, secondary green accent, highlights — lighter companion to Pulse Green, used in the diagonal brand gradient |

## Tokens — Typography

### Mori — Sole typeface across all contexts — body, nav, headings, hero. The custom face is sculpted for display use: it sustains legibility at 224px hero scale and stays friendly at 14px body. Weight 600 is reserved for emphasized words inline (e.g. 'effortlessly') and active nav items; weight 400 carries everything else. The very tight line-heights (0.90–1.05) at large sizes let the type become a spatial object rather than just text. Substitute with Inter Tight or Manrope for a similar geometric-but-friendly feel. · `--font-mori`
- **Substitute:** Inter Tight
- **Weights:** 400, 600
- **Sizes:** 14, 16, 17, 18, 19, 20, 21, 23, 24, 32, 33, 34, 40, 44, 66, 76, 89, 101, 224
- **Line height:** 0.90–1.40
- **Letter spacing:** -0.010em at body (14–21px), -0.011em at mid-display (23–44px), -0.020em at hero (66–224px)
- **OpenType features:** `"ss01" on`
- **Role:** Sole typeface across all contexts — body, nav, headings, hero. The custom face is sculpted for display use: it sustains legibility at 224px hero scale and stays friendly at 14px body. Weight 600 is reserved for emphasized words inline (e.g. 'effortlessly') and active nav items; weight 400 carries everything else. The very tight line-heights (0.90–1.05) at large sizes let the type become a spatial object rather than just text. Substitute with Inter Tight or Manrope for a similar geometric-but-friendly feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.38 | -0.14px | `--text-caption` |
| body-sm | 16px | 1.4 | -0.16px | `--text-body-sm` |
| body | 18px | 1.38 | -0.18px | `--text-body` |
| subheading | 21px | 1.2 | -0.23px | `--text-subheading` |
| heading-sm | 24px | 1.15 | -0.26px | `--text-heading-sm` |
| heading | 34px | 1.15 | -0.37px | `--text-heading` |
| heading-lg | 44px | 1.1 | -0.48px | `--text-heading-lg` |
| display | 89px | 1.05 | -1.78px | `--text-display` |
| display-lg | 101px | 1 | -2.02px | `--text-display-lg` |
| hero | 224px | 0.9 | -4.48px | `--text-hero` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 76 | 76px | `--spacing-76` |
| 96 | 96px | `--spacing-96` |
| 108 | 108px | `--spacing-108` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 100px |
| cards | 8px |
| buttons | 100px |
| nav-items | 100px |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Pill Ghost Button (Primary CTA)
**Role:** The main call-to-action — download, sign up, 'Get GSAP'

Outlined/ghost style: 1px solid #fffce1 border, transparent fill, 100px border-radius (fully pill-shaped), Cream Glow (#fffce1) text at 16–17px weight 400, 16px horizontal / 10px vertical padding. Includes a trailing circular arrow icon (→) in a small outlined circle. Hovers increase border opacity or invert to filled.

### Pill Outline Button (Tool 'Explore' CTA)
**Role:** Secondary action linking to individual tool pages

1px solid #fffce1 border, 100px radius, Cream Glow text at 16px, 15px vertical / 16px horizontal padding. Label format: 'Explore {ToolName}'.

### Nav Pill
**Role:** Top navigation links (Tools, Showcase, Community, etc.)

Inline text links without background, 100px radius, Cream Glow text at ~16px weight 400. Active state could show accent underline. No visible container — nav sits directly on canvas with whitespace as separator.

### Get GSAP Nav Button
**Role:** Persistent CTA in the top-right of the nav bar

Same as Pill Ghost Button but slightly smaller: 1px #fffce1 border, 100px radius, 'Get GSAP' label at 14–15px.

### Bracket Section Tag
**Role:** Tiny section labels like `{ Why GSAP® }`, `{ GSAP® Tools }`

Cream Glow text at 14px weight 400, wrapped literally in curly braces as design elements: `{ Label }`. The braces are real characters, not graphics. Sits inline with content, left-aligned, small-caps feel.

### Tool Category Card
**Role:** Feature blocks for each GSAP plugin (Scroll, SVG, etc.)

Two-column layout: gradient/3D illustration on the left (rounded with 8px radius), text on the right. The tool name ('Scroll', 'SVG') is a large heading (40–44px) in the tool's signature accent color (pink for Scroll, orange for SVG, etc.). Description in Cream Glow at 18–21px. An 'Explore {Tool}' pill button below. Sections separated by 1px hairline divider in #42433d.

### Hero Gradient Illustration
**Role:** Decorative 3D gradient shape beside or behind hero text

Abstract organic shape (nucleus/blob) with a 114.41deg gradient from Pulse Green (#0ae448) to Lime Flash (#abff84), or pink-to-blue, with soft inner highlights. Contained at ~8px corner radius. Acts as visual punctuation, not informational.

### Hero Headline
**Role:** The largest typographic element — product name + tagline

Mori at 89–224px weight 400 in Cream Glow, line-height 0.90–1.00, letter-spacing -0.020em. Often split across lines: noun on one line, exclamation/tagline on next. The extreme size and tight tracking make the type feel sculpted.

### Bracketed Description Block
**Role:** Secondary descriptive copy in the hero zone

Sits inside literal curly brace characters at left and right margins. Cream Glow text at 16–18px weight 400. The braces are oversized and act as decorative framing.

### Code Snippet Block
**Role:** Inline code examples in documentation/promotional contexts

Cream Glow monospace-adjacent text, possibly with green or accent-colored syntax tokens. Background stays the canvas color — no code-block panel, no border.

### Gradient Text Accent
**Role:** Specific words within headlines that emphasize action

Individual words (e.g. 'effortlessly') colored in Pulse Green or another accent. The word remains Mori weight 400, same size as surrounding cream text, just recolored — emphasis through hue, not weight.

### Hairline Section Divider
**Role:** Horizontal separator between content bands

1px solid #42433d (olive stone) line stretching full content width. Subtle but definite — provides scroll rhythm without visual noise.

### Top Banner Strip
**Role:** Promotional announcement bar (e.g. 'GSAP is now free for everyone!')

Thin horizontal bar at the very top, filled with Pulse Green or gradient green. Dark text on green background, small text size (~14px), centered. The only fully-saturated filled band in the system.

### Logo Wordmark
**Role:** GSAP brand identifier in the nav

The 'GSAP' text set in Mori weight 600, Cream Glow color, with a small custom geometric mark (the 'G' or asterisk-like symbol) sometimes in green accent.

## Do's and Don'ts

### Do
- Use 100px border-radius for all buttons, nav items, and tag pills — the fully-pill shape is a signature, not optional
- Keep the canvas at #0e100f flat — never introduce a lighter card surface; use 1px #42433d or #fffce1 borders for separation instead
- Wrap section labels in literal `{ curly braces }` characters as a design element, not as ASCII decoration
- Use Mori weight 400 for almost everything; reserve weight 600 only for inline emphasis words and active nav states
- Let each product tool or feature claim its own accent color from the rainbow (pink, orange, green, violet, blue, lime) — color is the organizational system, not decoration
- Apply letter-spacing proportionally: -0.010em at body sizes, tightening to -0.020em at 89px+ display sizes
- Use 224px hero text with line-height 0.90 and letter-spacing -0.020em to create the sculpted-typographic-object effect

### Don't
- Do not introduce drop shadows, glow effects, or any elevation tokens — the design is intentionally shadowless
- Do not use a lighter card surface color; the entire interface is a single dark plane separated only by hairline borders
- Do not use a border-radius between 9px and 99px — the system jumps from 8px (content blocks) directly to 100px (pills)
- Do not apply accent colors as filled button backgrounds — the system uses outlined/ghost actions exclusively, with accent color on text and borders only
- Do not set body line-height above 1.40; the tight, sculpted feel depends on compressed vertical rhythm
- Do not use more than 2–3 words of weight 600 in a single paragraph — emphasis must be selective to stay readable
- Do not mix accent colors within a single word or short phrase — one accent per heading, one accent per card

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#0e100f` | Full-page background, hero sections, content bands — the single flat dark surface |
| 2 | Raised Surface | `#0e100f` | Cards and contained blocks use the same canvas color, separated only by 1px cream borders at 8px radius — no tonal lift |

## Elevation

Zero shadows. The dark-mode system deliberately avoids drop shadows and elevation tokens entirely. Depth and hierarchy come from 1px hairline borders in cream (#fffce1) or accent colors, from color contrast itself, and from generous whitespace. The flatness is a signature — the page feels like a poster, not a UI.

## Imagery

Imagery is abstract and sculptural, not photographic. The site uses large 3D-rendered organic shapes (blobs, nuclei, fluid forms) filled with diagonal gradients from the accent palette — typically Pulse Green to Lime Flash, or pink to blue. These shapes sit beside text in feature cards, contained at ~8px corner radius, never full-bleed. Icons are minimal and inline (small outlined arrows in circles for CTAs). There is no lifestyle photography, no product screenshots, no human imagery. The visual language is closer to a generative-art poster than a traditional SaaS site: color and type do the work that photography would do elsewhere.

## Layout

Full-bleed dark canvas, max-width ~1280px centered for text content. The hero is a single massive typographic statement (224px headline) left-aligned with a small gradient decorative shape near the headline, a bracketed description block below-left, and a pill CTA below-right — all on the same dark plane, no hero image background. Below the hero, the page alternates between text blocks and tool-category sections, each separated by a 1px #42433d hairline divider. Tool sections use a consistent 2-column rhythm: gradient illustration left, text right, with the tool name as a large accent-colored heading. Section vertical gaps are generous (~80px) to let the dark background breathe. The top of the page has a thin green promotional banner, then a minimal horizontal nav bar. There are no sidebars, no mega-menus, no card grids with more than 2 columns.

## Agent Prompt Guide

**Quick Color Reference**
- text: #fffce1 (Cream Glow)
- background: #0e100f (Void Black)
- border: #42433d (Olive Stone) for dividers, #fffce1 for buttons
- accent: #0ae448 (Pulse Green) — brand chromatic voice
- secondary accents: #fec5fb, #ff8709, #9d95ff, #00bae2, #abff84
- primary action: no distinct CTA color

**3-5 Example Component Prompts**

1. *Create a hero section on #0e100f canvas. Headline 'Animate anything!' at 224px Mori weight 400, color #fffce1, line-height 0.90, letter-spacing -0.020em, left-aligned. A small gradient blob (114.41deg, #0ae448 → #abff84, 8px radius) floating near the headline. Below: bracketed description `{ A robust JS animation library }` at 17px Mori weight 400, #fffce1. A ghost pill button right-aligned: 1px #fffce1 border, 100px radius, 'Get GSAP →' in #fffce1 at 16px, 16px/10px padding.*

2. *Create a tool category card. Left: a gradient 3D blob shape at 8px radius. Right: heading 'Scroll' at 44px Mori weight 400, color #fec5fb, letter-spacing -0.011em. Description at 18px Mori weight 400, #fffce1. Below: an outlined pill button 'Explore Scroll' with 1px #fffce1 border, 100px radius, 15px/16px padding.*

3. *Create a section label tag: text 'Why GSAP®' wrapped in literal curly braces `{ Why GSAP® }`, Mori 14px weight 400, #fffce1, left-aligned with 8px margin-bottom before the main content.*

4. *Create a horizontal hairline divider: 1px solid #42433d, full content width, 80px vertical margin above and below to separate content sections on the #0e100f canvas.*

5. *Create a top promotional banner: full-width strip at the very top, filled with #0ae448, text 'GSAP is now free for everyone!' centered at 14px Mori weight 600, color #0e100f, 5px vertical padding.*

## Similar Brands

- **Linear** — Same flat dark canvas, cream-white text, pill-shaped UI elements, and hairline divider system — though Linear is more monochrome and GSAP is more chromatic
- **Vercel** — Same ultra-tight letter-spacing at large display sizes, dark canvas with vivid accent colors, and geometric custom display typography
- **Three.js** — Both are JS creative-tooling sites that treat the page itself as a demo — abstract 3D gradient shapes beside typographic headlines, dark canvas, no lifestyle imagery
- **Framer** — Same playful dark-mode energy with rainbow accent palette and sculptural 3D gradient shapes as hero decoration
- **Figma Config** — Same oversized display typography at hero scale, color-as-organization for product categories, and flat shadowless dark surfaces

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-black: #0e100f;
  --color-cream-glow: #fffce1;
  --color-olive-stone: #42433d;
  --color-ash-gray: #7c7c6f;
  --color-pulse-green: #0ae448;
  --gradient-pulse-green: linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%);
  --color-candy-pink: #fec5fb;
  --color-ember-orange: #ff8709;
  --color-electric-violet: #9d95ff;
  --color-signal-blue: #00bae2;
  --color-lime-flash: #abff84;

  /* Typography — Font Families */
  --font-mori: 'Mori', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.38;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.16px;
  --text-body: 18px;
  --leading-body: 1.38;
  --tracking-body: -0.18px;
  --text-subheading: 21px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.23px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.26px;
  --text-heading: 34px;
  --leading-heading: 1.15;
  --tracking-heading: -0.37px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.48px;
  --text-display: 89px;
  --leading-display: 1.05;
  --tracking-display: -1.78px;
  --text-display-lg: 101px;
  --leading-display-lg: 1;
  --tracking-display-lg: -2.02px;
  --text-hero: 224px;
  --leading-hero: 0.9;
  --tracking-hero: -4.48px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-108: 108px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-lg: 8px;
  --radius-full: 100px;

  /* Named Radii */
  --radius-tags: 100px;
  --radius-cards: 8px;
  --radius-buttons: 100px;
  --radius-nav-items: 100px;

  /* Surfaces */
  --surface-canvas: #0e100f;
  --surface-raised-surface: #0e100f;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-black: #0e100f;
  --color-cream-glow: #fffce1;
  --color-olive-stone: #42433d;
  --color-ash-gray: #7c7c6f;
  --color-pulse-green: #0ae448;
  --color-candy-pink: #fec5fb;
  --color-ember-orange: #ff8709;
  --color-electric-violet: #9d95ff;
  --color-signal-blue: #00bae2;
  --color-lime-flash: #abff84;

  /* Typography */
  --font-mori: 'Mori', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.38;
  --tracking-caption: -0.14px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.16px;
  --text-body: 18px;
  --leading-body: 1.38;
  --tracking-body: -0.18px;
  --text-subheading: 21px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.23px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.26px;
  --text-heading: 34px;
  --leading-heading: 1.15;
  --tracking-heading: -0.37px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.48px;
  --text-display: 89px;
  --leading-display: 1.05;
  --tracking-display: -1.78px;
  --text-display-lg: 101px;
  --leading-display-lg: 1;
  --tracking-display-lg: -2.02px;
  --text-hero: 224px;
  --leading-hero: 0.9;
  --tracking-hero: -4.48px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-76: 76px;
  --spacing-96: 96px;
  --spacing-108: 108px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-lg: 8px;
  --radius-full: 100px;
}
```