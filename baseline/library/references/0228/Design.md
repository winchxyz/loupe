# Gleap — Style Reference
> Editorial serif over pastel SaaS — like a design magazine spread rendered in product UI.

**Theme:** light

Gleap runs a light-canvas editorial system: warm cream off-whites, near-black text, and two pastel accents (soft lavender-pink and powder blue) that act as quiet highlights rather than loud brand colors. The signature move is the pairing of a high-contrast editorial serif (PP Editorial New) for hero and section headlines against a geometric grotesk (Switzer) for everything functional, which makes the marketing voice feel like a magazine spread while the product UI stays utilitarian. Surfaces are flat with very soft shadows, cards are generously rounded (24–42px), and buttons sit in a small radius (10px) with either solid black or pastel fills — the contrast between hard geometric controls and large soft product surfaces gives the whole system its rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Primary text, filled dark CTAs, high-contrast borders. Sets the typographic anchor against the cream canvas |
| Graphite | `#333333` | `--color-graphite` | Secondary text and the dominant hairline border color (336 uses). Carries the structural edge system |
| Slate | `#7b7b7b` | `--color-slate` | Muted helper text and inactive link text. Used wherever secondary information must recede |
| Mist | `#bcbcbc` | `--color-mist` | Subtle badge borders and soft body borders. Sits between structural Graphite and canvas in the border hierarchy |
| Silver | `#d6d6d6` | `--color-silver` | Light dividers, input borders, and inactive link borders. The quietest structural neutral |
| Bone | `#f5f2f0` | `--color-bone` | Warm cream surface — badge backgrounds and off-white secondary surfaces. Distinct from pure white, gives the system a paper-like warmth |
| Paper | `#ffffff` | `--color-paper` | Page canvas and card surfaces. The default ground everything sits on |
| Lilac Bloom | `#f1ccff` | `--color-lilac-bloom` | Pink action color for filled buttons, selected navigation states, and focused conversion moments. |
| Sky Veil | `#91e0ff` | `--color-sky-veil` | Secondary accent — used sparingly for icon accents, illustration details, and alternate highlight surfaces. The cool counterpart to Lilac Bloom |

## Tokens — Typography

### Switzer — All functional UI, body copy, subheadings, nav, buttons, badges. Weight 400 for body, 500 for subheadings, 600 for emphasized UI labels. Letter-spacing tightens at larger sizes (-0.025em at 32px, -0.01em at 20px). Substitute: 'Inter' or 'General Sans'. · `--font-switzer`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 16px, 20px, 32px
- **Line height:** 1.19-1.44
- **Letter spacing:** -0.010em at 20px, -0.020em at 32px, -0.025em at 32px+
- **Role:** All functional UI, body copy, subheadings, nav, buttons, badges. Weight 400 for body, 500 for subheadings, 600 for emphasized UI labels. Letter-spacing tightens at larger sizes (-0.025em at 32px, -0.01em at 20px). Substitute: 'Inter' or 'General Sans'.

### PP Editorial New — Hero and section headlines. A high-contrast editorial serif used at display sizes only — the deliberate contrast with the geometric Switzer body is the system's signature typographic move, making the brand read like a magazine rather than a product page. Substitute: 'Playfair Display' or 'DM Serif Display'. · `--font-pp-editorial-new`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 48px, 62px
- **Line height:** 1.20-1.30
- **Letter spacing:** normal
- **Role:** Hero and section headlines. A high-contrast editorial serif used at display sizes only — the deliberate contrast with the geometric Switzer body is the system's signature typographic move, making the brand read like a magazine rather than a product page. Substitute: 'Playfair Display' or 'DM Serif Display'.

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line height:** 1.25, 1.43
- **Role:** Arial — detected in extracted data but not described by AI

### system-ui — system-ui — detected in extracted data but not described by AI · `--font-system-ui`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1
- **Role:** system-ui — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.19 | — | `--text-caption` |
| body | 16px | 1.44 | — | `--text-body` |
| subheading | 20px | 1.4 | -0.2px | `--text-subheading` |
| heading-sm | 32px | 1.2 | -0.8px | `--text-heading-sm` |
| display | 48px | 1.25 | — | `--text-display` |
| display-lg | 62px | 1.2 | — | `--text-display-lg` |

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
| 40 | 40px | `--spacing-40` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 88 | 88px | `--spacing-88` |
| 116 | 116px | `--spacing-116` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| pills | 32px |
| badges | 10px |
| inputs | 10px |
| buttons | 10px |
| cards-elevated | 42px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.04) 0px 8px 16px 0px` | `--shadow-md` |
| subtle | `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 24-32px
- **Element gap:** 16px

## Components

### Editorial Display Heading
**Role:** Hero and section-level headline

PP Editorial New at 48–62px, weight 400, line-height 1.20–1.25, color Obsidian. Centered or left-aligned depending on section. The serif at this scale is the brand's primary signal — never replace it with a sans.

### Filled Dark CTA
**Role:** Primary conversion button (secondary action)

Obsidian #000000 background, Paper #ffffff text, Switzer 16px weight 500, 10px radius, 14px vertical / 20px horizontal padding. Carries a barely-visible 1px shadow. Used for the second-priority CTA.

### Filled Lilac CTA
**Role:** Primary action button (start trial / book demo)

Lilac Bloom #f1ccff background, Obsidian text, Switzer 16px weight 500, 10px radius, 14px vertical / 20px horizontal padding. The dominant CTA — its pastel fill against the cream canvas draws the eye without visual aggression.

### Ghost Nav Button (Sign up)
**Role:** Top-right navigation conversion

Obsidian background, Paper text, Switzer 14px weight 500, 10px radius, 10px vertical / 20px horizontal padding. Sits in the nav bar as the closed conversion path.

### Tag Pill
**Role:** Category or section label above headlines

Switzer 13–14px weight 500, Lilac Bloom or Bone background, 10px radius, 5px vertical / 12px horizontal padding, Obsidian text. Always centered above a heading, acts as a section marker.

### Product Preview Card
**Role:** Hero product screenshot container

Large rounded card (24–42px radius) containing the product UI screenshot. Subtle gradient overlay from Lilac Bloom to muted purple at the edges. The card sits below the hero with generous breathing room.

### Hairline Border Surface
**Role:** Structural card or input field

Graphite #333333 or Silver #d6d6d6 1px border, Paper background, 10–24px radius. The border is the primary separation method — shadows are secondary.

### Logo Strip Card
**Role:** Social proof — trusted-by row

Logos arranged in a single horizontal row below a 'Trusted by' caption, Paper background, no card container. Logos rendered in Slate #7b7b7b for muted presentation.

### Section Label (All-caps caption)
**Role:** Section divider text

Switzer 14px weight 500, Obsidian, centered. Used to introduce content sections below the hero.

### Chat Bubble (User)
**Role:** Product UI chat thread — user message

Sky Veil #91e0ff background, Obsidian text, Switzer 14px, 16px radius, sits right-aligned in the thread.

### Chat Bubble (Support)
**Role:** Product UI chat thread — agent message

Bone #f5f2f0 or Paper background with Graphite border, Obsidian text, Switzer 14px, 16px radius, sits left-aligned.

### Highlight Gradient Card
**Role:** Accent feature card in marketing sections

Lilac Bloom to muted purple gradient fill, Paper text, 24–42px radius, generous padding (32–48px). Used to break up monochrome sections with color punctuation.

## Do's and Don'ts

### Do
- Use PP Editorial New at 48–62px for any headline that needs to carry the brand voice — never substitute a sans-serif at display sizes
- Set the Lilac Bloom #f1ccff filled button as the primary CTA and the Obsidian filled button as the secondary — this pairing is the system's conversion grammar
- Apply 24–42px border-radius to all marketing cards and 10px to all functional controls (buttons, badges, inputs)
- Use Bone #f5f2f0 for any surface that needs warmth — badges, alternating sections, secondary card backgrounds — not cool gray
- Tighten Switzer letter-spacing at larger sizes: -0.010em at 20px, -0.020em at 32px, -0.025em at 48px+
- Keep shadows at 4% black opacity or below — the system uses radius and whitespace for separation, not elevation
- Place a Tag Pill (Lilac Bloom or Bone fill) directly above any major section heading as a category marker

### Don't
- Do not use PP Editorial New for body copy, nav items, buttons, or badges — reserve it strictly for 48px+ display headlines
- Do not add colored shadows, glows, or heavy elevation — the system is deliberately flat
- Do not introduce additional accent hues beyond Lilac Bloom and Sky Veil — the palette is intentionally two-color
- Do not use Arial or system-ui for primary UI text — Switzer (or its substitute Inter) owns all functional type
- Do not use square or 4px radii on cards — the system's softness depends on the 24–42px range
- Do not apply Lilac Bloom to large background fills beyond cards and CTAs — it should remain a controlled accent
- Do not center-align body paragraphs or functional lists — left-align for readability, center only for hero headlines and short captions

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#ffffff` | Page canvas and default card ground |
| 1 | Bone | `#f5f2f0` | Warm cream secondary surface for badges and alternating sections |
| 2 | Lilac Bloom | `#f1ccff` | Accent surface for highlight cards, tag backgrounds, and CTA fills |
| 3 | Sky Veil | `#91e0ff` | Cool accent surface for illustration cards and secondary highlights |

## Elevation

- **Card:** `0px 8px 16px 0px rgba(0, 0, 0, 0.04)`
- **Button:** `0px 1px 2px 0px rgba(16, 24, 40, 0.05)`

## Imagery

Product screenshots are the dominant visual — large, rounded, tilted slightly within Lilac Bloom gradient frames. The product UI itself (chat threads, inbox lists, detail panels) does the storytelling. No lifestyle photography, no stock imagery. Icons are outlined and monochromatic (Slate or Obsidian). The only decorative visuals are soft pastel gradient washes behind product cards, blending Lilac Bloom into muted purple. The chat avatars in the product UI use rounded colored circles (blue, yellow) as a subtle color source.

## Layout

Centered max-width container at 1200px, with a full-width hero that places a serif headline and two-button CTA stack over a cream canvas. The hero is immediately followed by a large product preview card (full container width) with a Lilac Bloom gradient border. Below: a centered 'Trusted by' logo strip, then alternating content sections that use 2-column or 3-column grids with generous 80–120px vertical gaps. Navigation is a simple top bar — logo left, 3-item center menu, Login + filled Sign up right. No sidebar, no mega-menu. The page breathes heavily between sections.

## Agent Prompt Guide

Quick Color Reference:
- text: #000000 (Obsidian)
- background: #ffffff (Paper)
- warm surface: #f5f2f0 (Bone)
- border: #333333 (Graphite) primary, #d6d6d6 (Silver) light
- accent: #f1ccff (Lilac Bloom)
- secondary accent: #91e0ff (Sky Veil)
- primary action: #f1ccff (filled action)

Example Component Prompts:

1. Hero section: #ffffff canvas. Tag pill at 14px Switzer weight 500, #f1ccff background, 10px radius, 5px/12px padding, #000000 text. Headline at 62px PP Editorial New weight 400, #000000, line-height 1.20, centered. Subtext at 16px Switzer weight 400, #333333, centered, max-width 640px. Two CTAs side by side: (a) #f1ccff filled, 10px radius, 14px/20px padding, 16px Switzer 500 #000000 text; (b) #000000 filled, same shape, #ffffff text.

2. Product preview card: 42px radius, subtle 0 8px 16px rgba(0,0,0,0.04) shadow, Lilac Bloom-to-muted-purple gradient frame (~16px wide gradient border). Contains a flat product UI screenshot with 16px radius internal panels.

3. Feature section grid: 3-column grid with 24px gaps, 80px section gap above. Each card: 24px radius, #ffffff background, 1px #d6d6d6 border, 24px padding. Card icon at 24px, outlined, #333333. Card title at 20px Switzer 500, #000000. Card body at 16px Switzer 400, #7b7b7b.

4. Trust strip: centered caption 'Trusted by 4500+ high-growth global companies' at 16px Switzer 500 #000000. Below: single row of 4–5 logos in #7b7b7b, evenly spaced, 48px tall max.

5. Highlight gradient card: 24px radius, linear-gradient(135deg, #f1ccff, #c89cd9) fill, 32px padding. White #ffffff text at 20px Switzer 500. Decorative blob or icon in #ffffff at 20% opacity.

## Similar Brands

- **Linear** — Same minimal light-canvas approach with one restrained accent color and large rounded product surfaces, though Linear goes darker/more dramatic
- **Framer** — Editorial typographic confidence with a single pastel accent and generous whitespace between product-forward sections
- **Cal.com** — Light, spacious SaaS marketing with rounded product preview cards and a soft pastel accent color
- **Pitch** — High-contrast editorial-meets-product aesthetic with centered hero, large product card, and a single accent hue

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-graphite: #333333;
  --color-slate: #7b7b7b;
  --color-mist: #bcbcbc;
  --color-silver: #d6d6d6;
  --color-bone: #f5f2f0;
  --color-paper: #ffffff;
  --color-lilac-bloom: #f1ccff;
  --color-sky-veil: #91e0ff;

  /* Typography — Font Families */
  --font-switzer: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-editorial-new: 'PP Editorial New', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.19;
  --text-body: 16px;
  --leading-body: 1.44;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.8px;
  --text-display: 48px;
  --leading-display: 1.25;
  --text-display-lg: 62px;
  --leading-display-lg: 1.2;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-116: 116px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 24-32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-xl: 13px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 42px;
  --radius-full: 48px;

  /* Named Radii */
  --radius-cards: 24px;
  --radius-pills: 32px;
  --radius-badges: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-cards-elevated: 42px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.04) 0px 8px 16px 0px;
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-bone: #f5f2f0;
  --surface-lilac-bloom: #f1ccff;
  --surface-sky-veil: #91e0ff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #000000;
  --color-graphite: #333333;
  --color-slate: #7b7b7b;
  --color-mist: #bcbcbc;
  --color-silver: #d6d6d6;
  --color-bone: #f5f2f0;
  --color-paper: #ffffff;
  --color-lilac-bloom: #f1ccff;
  --color-sky-veil: #91e0ff;

  /* Typography */
  --font-switzer: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-editorial-new: 'PP Editorial New', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.19;
  --text-body: 16px;
  --leading-body: 1.44;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.8px;
  --text-display: 48px;
  --leading-display: 1.25;
  --text-display-lg: 62px;
  --leading-display-lg: 1.2;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-116: 116px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-xl: 13px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 42px;
  --radius-full: 48px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.04) 0px 8px 16px 0px;
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
}
```