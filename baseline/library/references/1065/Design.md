# Framer — Style Reference
> Midnight gallery with monumental type — a dark exhibition hall where 100px headlines hang on black walls like spotlit artwork.

**Theme:** dark

Framer is a pitch-black gallery where colossal sans-serif type floats on void, and one electric blue does all the shouting. The interface is essentially typographic architecture: massive display headlines (85–110px) with aggressive negative tracking anchor each section, while a single grid of project tiles in the mid-scroll does the visual work that gradients or illustrations do elsewhere. Components are deliberately quiet — pill-shaped buttons, hairline borders, near-invisible shadows — so the typography and showcase imagery carry the energy. Density is compact (10px gutters), surfaces are barely-distinguished shades of near-black, and the only chromatic note is #0099ff for links and emphasis, creating a designer-tool atmosphere that feels more like a portfolio site than a SaaS landing page.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page background, hero canvas, deepest surface — the default everywhere; nothing sits on top of it, everything floats within it |
| Obsidian | `#080808` | `--color-obsidian` | Sub-surface for cards and panels directly on the canvas — barely lighter than Void, so elevation is felt rather than seen |
| Graphite | `#171717` | `--color-graphite` | Elevated card surface, modal backgrounds, project tile frames — the most clearly distinct card layer above the canvas |
| Carbon | `#222222` | `--color-carbon` | Higher-elevation panels, inset wells, code blocks — a step up from Graphite for content that needs to feel enclosed |
| Iron | `#2b2b2b` | `--color-iron` | Top-tier surface for floating elements, sticky bars, or hover-states on dark cards |
| Snow | `#ffffff` | `--color-snow` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Ash | `#999999` | `--color-ash` | Body text, secondary descriptions, subdued copy — the workhorse gray for everything that isn't a heading |
| Smoke | `#a6a6a6` | `--color-smoke` | Lighter secondary text, metadata, timestamps — slightly brighter than Ash for hierarchy within muted copy |
| Pearl | `#cccccc` | `--color-pearl` | High-emphasis muted text, captions on light surfaces, disabled labels that still need to read |
| Slate | `#666666` | `--color-slate` | De-emphasized text, tertiary metadata, placeholder content, icon strokes on dark surfaces |
| Steel | `#8c8c8c` | `--color-steel` | Mid-muted text and borders, divider lines on dark backgrounds where #333333 would be invisible |
| Electric Signal | `#0099ff` | `--color-electric-signal` | Blue supporting accent for decorative details and low-frequency emphasis. |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### GT Walsheim Framer Medium — Hero display headline — used only for the single biggest statement on the page; the 0.85 line-height and -0.05em tracking make letters nearly touch, creating a block-like sculptural headline that dominates the viewport · `--font-gt-walsheim-framer-medium`
- **Substitute:** Inter Tight 600 or Mona Sans 700 at matching metrics
- **Weights:** 500
- **Sizes:** 110px
- **Line height:** 0.85
- **Letter spacing:** -0.05em
- **OpenType features:** `"ss02"`
- **Role:** Hero display headline — used only for the single biggest statement on the page; the 0.85 line-height and -0.05em tracking make letters nearly touch, creating a block-like sculptural headline that dominates the viewport

### GT Walsheim Medium — Section display and large headings — medium weight (not bold) keeps the type feeling architectural rather than aggressive; same -0.05em tracking carries the display voice into 85px and 62px section openers · `--font-gt-walsheim-medium`
- **Substitute:** Mona Sans 600 or General Sans 600
- **Weights:** 500
- **Sizes:** 32px, 62px, 85px
- **Line height:** 0.95–1.13
- **Letter spacing:** -0.05em to -0.031em
- **OpenType features:** `"ss02", "ss02", "tnum"`
- **Role:** Section display and large headings — medium weight (not bold) keeps the type feeling architectural rather than aggressive; same -0.05em tracking carries the display voice into 85px and 62px section openers

### Mona Sans — Secondary headlines, subtitles, and mid-weight UI text — the bridge between monumental display and compact body; 62px use creates variety in section headers · `--font-mona-sans`
- **Substitute:** Inter 500 or Geist 500
- **Weights:** 500
- **Sizes:** 12px, 13px, 17px, 18px, 62px
- **Line height:** 1.0–2.28
- **Letter spacing:** -0.05em to -0.046em
- **Role:** Secondary headlines, subtitles, and mid-weight UI text — the bridge between monumental display and compact body; 62px use creates variety in section headers

### Inter Variable — Body copy and feature descriptions — extensive character variant features (cv01–cv11) and stylistic sets (ss02, ss03, ss07) tune letterforms for the brand's geometric, slightly squared personality · `--font-inter-variable`
- **Substitute:** Inter (Google)
- **Weights:** 400
- **Sizes:** 8px, 12px, 13px, 14px, 15px, 18px, 24px
- **Line height:** 0.80–1.40
- **Letter spacing:** -0.02em to 0.03em
- **OpenType features:** `"cv06", "cv11", "dlig", "ss03"`
- **Role:** Body copy and feature descriptions — extensive character variant features (cv01–cv11) and stylistic sets (ss02, ss03, ss07) tune letterforms for the brand's geometric, slightly squared personality

### Inter — UI chrome — nav items, button labels, tag text, form fields, meta labels; tabular numerals (tnum) enabled for numeric data consistency · `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 20px, 22px
- **Line height:** 0.83–1.60
- **Letter spacing:** -0.053em to 0.02em
- **OpenType features:** `"cv01", "tnum"`
- **Role:** UI chrome — nav items, button labels, tag text, form fields, meta labels; tabular numerals (tnum) enabled for numeric data consistency

### Open Runde — Micro labels, eyebrow text, small caps-style category tags — the only 600-weight in the system, used at 9px to create distinctive all-caps section markers above headlines · `--font-open-runde`
- **Substitute:** Inter 700 at 9px with 0.1em tracking
- **Weights:** 600
- **Sizes:** 9px
- **Line height:** 1.11
- **OpenType features:** `"cv01", "cv09"`
- **Role:** Micro labels, eyebrow text, small caps-style category tags — the only 600-weight in the system, used at 9px to create distinctive all-caps section markers above headlines

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.2 | -0.24px | `--text-caption` |
| body | 15px | 1.4 | -0.3px | `--text-body` |
| subheading | 18px | 1.3 | -0.36px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.13 | -1.6px | `--text-heading` |
| heading-lg | 62px | 1 | -3.1px | `--text-heading-lg` |
| display | 85px | 0.95 | -4.25px | `--text-display` |
| hero | 110px | 0.85 | -5.5px | `--text-hero` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 15 | 15px | `--spacing-15` |
| 20 | 20px | `--spacing-20` |
| 30 | 30px | `--spacing-30` |
| 40 | 40px | `--spacing-40` |
| 47 | 47px | `--spacing-47` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 12px |
| tags | 100px |
| cards | 15px |
| tiles | 8px |
| inputs | 8px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(9, 9, 9) 0px 0px 0px 2px` | `--shadow-subtle` |
| subtle-2 | `rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0.5px, rgba(0, 0, ...` | `--shadow-subtle-2` |
| md | `rgba(0, 0, 0, 0.3) 0px 10px 10px 0px` | `--shadow-md` |
| lg | `rgba(0, 0, 0, 0.2) 0px 10px 20px 0px, rgba(0, 0, 0, 0.25)...` | `--shadow-lg` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 60px
- **Card padding:** 20px
- **Element gap:** 10px

## Components

### Hero Pill Button (White)
**Role:** Primary action button in the hero and key CTAs

Fully rounded pill at 100px radius, Snow (#ffffff) background with Inter 500 at 14px in Void (#000000) text. Padding 14px horizontal, no visible border. This is the sole filled action — its white-on-black inversion makes it the strongest element on the page.

### Hero Pill Button (Ghost)
**Role:** Secondary action button in the hero

Fully rounded pill at 100px radius, transparent background with 1px Snow (#ffffff) border at ~30% opacity, Inter 500 at 14px in Snow text. Sits beside the white CTA, creating a paired action system without color competition.

### Navigation Link
**Role:** Top-bar navigation items

Inter 400 at 14px in Snow (#ffffff), no background. On hover or active state, text shifts to Electric Signal (#0099ff). 4–6px column gap between items. No underline.

### Sign Up Button (Nav)
**Role:** Top-right conversion button in the navigation bar

Fully rounded pill at 100px radius, Snow (#ffffff) background with Inter 500 at 13–14px in Void (#000000) text. Padding 6px 14px — more compact than hero CTA. The only filled element in the otherwise borderless nav.

### Project Showcase Tile
**Role:** Grid items displaying customer-built sites in the mid-scroll gallery

Sits on Void (#000000) canvas with no visible border or background. Internal imagery fills the tile to its 8px or 15px radius edges. The tile is a window into content, not a framed card — this restraint is what makes the grid feel like a wall of work rather than a product feature list.

### Testimonial Card
**Role:** Large quote cards in the 'Powering ambitious teams' section

Obsidian (#080808) or Graphite (#171717) surface with 15px radius. Contains a quote mark glyph in Snow (#ffffff) at ~40px, a pull-quote in Inter 400 at 20–24px in Snow, and attribution with avatar + name + role in Inter 400 at 13px in Ash (#999999). Padding 32–40px on all sides. No border, no shadow — the near-black surface creates separation from the Void canvas.

### Client Logo Strip
**Role:** Row of partner/client brand marks below the project grid

Logos in Snow (#ffffff) or Pearl (#cccccc) at uniform height, arranged in 2–3 rows with 20–30px row gap. No background, no border, no framing — logos float on the Void canvas with generous horizontal breathing room.

### Section Heading (Large)
**Role:** Opens each major content section (e.g. 'Powering ambitious teams worldwide')

GT Walsheim Medium at 62–85px in Snow (#ffffff), line-height 0.95–1.13, tracking -0.05em. Left-aligned. No eyebrow label, no subtitle beneath — the headline stands alone on the Void canvas.

### Eyebrow Micro-Label
**Role:** Tiny category or status markers above headlines or in nav

Open Runde 600 at 9px in Ash (#999999) or Electric Signal (#0099ff), uppercase, line-height 1.11. Appears above hero headline (e.g. 'State of Sites '26 • Unlock the report now') as a compact meta-line.

### Feature/Body Paragraph
**Role:** Descriptive copy in hero and section openers

Inter Variable 400 at 15–18px in Ash (#999999), line-height 1.3–1.4, tracking -0.01em. Centered in hero, left-aligned in body sections. The muted gray against the black canvas creates the system's characteristic quiet readability.

### Footer Bar
**Role:** Bottom of page with legal links and secondary nav

Inter 400 at 12–13px in Ash (#999999), arranged horizontally on the Void canvas. 10px column gap between links. No background panel — the footer is just text floating in black.

## Do's and Don'ts

### Do
- Use GT Walsheim Medium or GT Walsheim Framer Medium at 62–110px for any major section opener, with tracking at -0.05em
- Set every button radius to 100px — pill shapes are non-negotiable across primary, secondary, and tag buttons
- Use #0099ff Electric Signal only for inline links, active states, and emphasis text — never for buttons, backgrounds, or large areas
- Default page background to #000000 Void; introduce surface depth only through #080808, #171717, or #222222 in that order
- Apply Inter or Inter Variable with character variant features enabled ("cv01", "cv11") for body copy — the tuned letterforms are part of the brand voice
- Use 10px as the default element gap and 5px as the tight gap; 60px minimum between major sections
- Let project imagery and screenshots fill tiles edge-to-edge with 8–15px radius; never frame them with borders or backgrounds

### Don't
- Don't use any chromatic color other than #0099ff — the 0% colorfulness ratio is the system's defining trait
- Don't add drop shadows to cards on the Void canvas — the near-black surface tones already create separation; shadows will muddy the gallery feel
- Don't use bold (700) or semibold (600) weights for display headlines — GT Walsheim at medium 500 is the voice; heavier weights would feel SaaS-generic
- Don't introduce gradients, glow effects, or color washes — the single detected gradient is barely-visible and decorative only
- Don't set line-height above 1.4 for body text — the system uses tight leading to maintain the compact, architectural rhythm
- Don't use the blue accent for large fills or background panels — it must remain a small, punctuation-level mark
- Don't use 1px solid borders in light grays on the Void canvas — they're invisible; use 15px or 20px radius filled surfaces for containment instead

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Page canvas, hero background, the default everywhere |
| 1 | Obsidian | `#080808` | Cards sitting directly on the canvas — almost imperceptible separation |
| 2 | Graphite | `#171717` | Standard card and project tile surface |
| 3 | Carbon | `#222222` | Elevated panels and inset content blocks |
| 4 | Iron | `#2b2b2b` | Floating elements, sticky bars, highest elevation |

## Elevation

Framer avoids drop shadows on the dark canvas — separation is achieved through near-invisible surface tone shifts (#000000 → #080808 → #171717) and generous spacing rather than elevation. The only detected shadows are on light surfaces (modal overlays) and use heavy diffuse dark blurs (rgba(0,0,0,0.25–0.3) at 10–30px) to maintain the void-like feel. On dark cards, a subtle inner white stroke (rgba(255,255,255,0.1) at 0.5px) creates edge definition without breaking the flat aesthetic.

## Imagery

The site is image-heavy in the mid-scroll where a dense grid of customer-built project tiles dominates — each tile is a full-bleed screenshot of a real website at 8–15px radius, packed into a tight mosaic that reads as a 'wall of work' rather than individual cards. Photography is absent; this is a showcase of product output (websites, dashboards, brand sites). Above and below the grid, the page is pure typography on black void. No illustrations, no abstract graphics, no 3D renders — the only color imagery in the system comes from the customer work itself.

## Layout

Centered max-width 1200px content column on a full-bleed #000000 canvas. Hero is vertically centered text-stack with massive headline, subhead, and paired pill buttons — no hero image. Below the hero, a full-bleed grid of project showcase tiles at variable widths creates a masonry-like wall. A horizontal client logo strip sits beneath the grid in 2 rows. Further down, testimonial cards appear as a left-right pair or carousel at wide screen widths. Navigation is a fixed transparent top bar with horizontal links left/right. Section transitions are seamless — no alternating bands, no dividers, just spacing.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #ffffff Snow
- text (body/muted): #999999 Ash
- background (canvas): #000000 Void
- surface (card): #171717 Graphite
- border: none / use surface tone shift
- accent (links only): #0099ff Electric Signal
- primary action: no distinct CTA color

**Example Component Prompts**
1. *Create a hero section*: #000000 canvas. Headline at 110px GT Walsheim Framer Medium, #ffffff, letter-spacing -5.5px, line-height 0.85. Eyebrow at 9px Open Runde 600, #999999. Body subtext at 18px Inter 400, #999999. Two pill buttons side by side at 100px radius: first is #ffffff fill with #000000 Inter 500 14px text (14px horizontal padding), second is transparent with 1px #ffffff30 border and #ffffff text.

2. *Create a project showcase tile*: #000000 canvas. 8px or 15px radius container with no border or background. Internal image fills the container edge-to-edge at 100% width. Caption overlay (if any) at 12px Inter 400, #999999 below the image.

3. *Create a testimonial card*: #171717 Graphite surface, 15px radius, 32px padding. Large opening quote glyph at 40px #ffffff. Pull-quote at 20–24px Inter 400, #ffffff, line-height 1.3. Attribution row at bottom: 32px circular avatar, name in Inter 500 13px #ffffff, role in Inter 400 13px #999999.

4. *Create a section heading*: #000000 canvas. GT Walsheim Medium at 85px, #ffffff, letter-spacing -4.25px, line-height 0.95, left-aligned. 60px vertical space above and below. No background, no border, no eyebrow required.

5. *Create a client logo strip*: #000000 canvas. 2 rows of 4–6 logos each, logos in #ffffff or #cccccc at 24–32px height, 30px column gap, 20px row gap. No background panel, no borders — logos float on the void.

## Signature Type Voice

The headline system follows a strict three-tier hierarchy: GT Walsheim Framer Medium at 110px for the hero (one per page, never repeated), GT Walsheim Medium at 85px and 62px for section openers, and Mona Sans at 18px for sub-headlines. All three share medium weight (500–600), tight tracking (-0.05em to -0.046em), and compressed line-heights (0.85–1.0). This consistency creates a 'one voice' typographic system even as sizes scale. The medium weight is the anti-convention — most sites jump to 700+ for large type, but Framer's 500 weight at 110px feels architectural and confident, not shouty. Letter spacing tightens as size grows: -0.01em at body, -0.03em at 32px, -0.05em at 85px+. This progressive tracking compression is what makes the 110px hero feel like a solid block of type rather than a string of letters.

## Similar Brands

- **Linear** — Same dark-void canvas with pill-shaped buttons and large geometric sans-serif headlines, but Linear adds purple-blue gradients and more colorful accent states
- **Vercel** — Monochrome black/white aesthetic with massive display type, near-zero colorfulness, and near-invisible surface separation
- **Apple Product Pages** — Full-bleed black canvas with monumental type as the visual hero, product imagery as showcase, minimal chrome — though Apple uses SF Pro and adds more color photography
- **Pitch** — Dark-mode presentation tool with similar typographic confidence and compact density, though Pitch uses more vivid accent colors and gradient washes
- **Arc Browser** — Dark-mode creative-tool aesthetic with bold type and project showcase grids, sharing the 'portfolio-as-product' positioning

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-obsidian: #080808;
  --color-graphite: #171717;
  --color-carbon: #222222;
  --color-iron: #2b2b2b;
  --color-snow: #ffffff;
  --color-ash: #999999;
  --color-smoke: #a6a6a6;
  --color-pearl: #cccccc;
  --color-slate: #666666;
  --color-steel: #8c8c8c;
  --color-electric-signal: #0099ff;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-walsheim-framer-medium: 'GT Walsheim Framer Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-walsheim-medium: 'GT Walsheim Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mona-sans: 'Mona Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.24px;
  --text-body: 15px;
  --leading-body: 1.4;
  --tracking-body: -0.3px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -1.6px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.1px;
  --text-display: 85px;
  --leading-display: 0.95;
  --tracking-display: -4.25px;
  --text-hero: 110px;
  --leading-hero: 0.85;
  --tracking-hero: -5.5px;

  /* Typography — Weights */
  --font-weight-thin: 100;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-47: 47px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 60px;
  --card-padding: 20px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-xl-2: 15px;
  --radius-2xl: 20px;
  --radius-3xl: 30px;
  --radius-3xl-2: 40px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 200px;

  /* Named Radii */
  --radius-nav: 12px;
  --radius-tags: 100px;
  --radius-cards: 15px;
  --radius-tiles: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 100px;

  /* Shadows */
  --shadow-subtle: rgb(9, 9, 9) 0px 0px 0px 2px;
  --shadow-subtle-2: rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0.5px, rgba(0, 0, 0, 0.25) 0px 10px 30px 0px;
  --shadow-md: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.2) 0px 10px 20px 0px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-obsidian: #080808;
  --surface-graphite: #171717;
  --surface-carbon: #222222;
  --surface-iron: #2b2b2b;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-obsidian: #080808;
  --color-graphite: #171717;
  --color-carbon: #222222;
  --color-iron: #2b2b2b;
  --color-snow: #ffffff;
  --color-ash: #999999;
  --color-smoke: #a6a6a6;
  --color-pearl: #cccccc;
  --color-slate: #666666;
  --color-steel: #8c8c8c;
  --color-electric-signal: #0099ff;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-walsheim-framer-medium: 'GT Walsheim Framer Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-gt-walsheim-medium: 'GT Walsheim Medium', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mona-sans: 'Mona Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-open-runde: 'Open Runde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.24px;
  --text-body: 15px;
  --leading-body: 1.4;
  --tracking-body: -0.3px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -1.6px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.1px;
  --text-display: 85px;
  --leading-display: 0.95;
  --tracking-display: -4.25px;
  --text-hero: 110px;
  --leading-hero: 0.85;
  --tracking-hero: -5.5px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-47: 47px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-xl-2: 15px;
  --radius-2xl: 20px;
  --radius-3xl: 30px;
  --radius-3xl-2: 40px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 200px;

  /* Shadows */
  --shadow-subtle: rgb(9, 9, 9) 0px 0px 0px 2px;
  --shadow-subtle-2: rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0.5px, rgba(0, 0, 0, 0.25) 0px 10px 30px 0px;
  --shadow-md: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.2) 0px 10px 20px 0px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
}
```