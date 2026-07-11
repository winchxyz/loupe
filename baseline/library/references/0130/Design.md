# Home — Style Reference
> Broadsheet financial broadside — the masthead itself is the design

**Theme:** light

NewForm operates as an editorial financial publication disguised as a fund website. A near-white, faintly green-tinted canvas holds massive serif display type at 140-295px that does the heavy lifting, while a single neon green (#2bee4b) acts as surgical punctuation on the CTA and small decorative marks. Layout is spacious and asymmetric, with black-and-white photography cropped in rounded rectangles placed beside or overlapping display headlines. UI chrome is stripped to almost nothing — wordmark, a 'Menu' label, and a green mark icon — letting the typography and imagery own every page.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Linen | `#fafffa` | `--color-linen` | Page canvas, card surfaces, text on dark fills — a faintly green-tinted near-white that keeps the whole site from reading as a stark #ffffff |
| Obsidian Ink | `#121613` | `--color-obsidian-ink` | Primary text, dominant borders, image frames, footer background — a warm-tinted near-black that pairs with Linen instead of pure black to keep the palette organic |
| Pure Black | `#000000` | `--color-pure-black` | Hard borders, icon strokes, the deepest text layer where maximum contrast against Linen is needed |
| Bark | `#232924` | `--color-bark` | Secondary dark surface, heading borders, subtle elevated panels — a half-step lighter than Obsidian for layered depth |
| Sage | `#516254` | `--color-sage` | Muted heading text, secondary borders — a desaturated green-gray that keeps muted copy tonally consistent with the Linen canvas |
| Mist | `#c8d2c8` | `--color-mist` | Quiet heading borders, hairline dividers — a barely-there green-gray that registers only at large display sizes |
| Voltage | `#2bee4b` | `--color-voltage` | Green action color for filled buttons, selected navigation states, and focused conversion moments. |
| Moss Glow | `#93b799` | `--color-moss-glow` | Green supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Pollen | `#c4e4c9` | `--color-pollen` | Gray supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Tokens — Typography

### TWK Lausanne — Primary UI and body family. 350 for nav and labels, 400 for body copy, 550 for the rare emphasized UI moment. 200 is reserved for one or two whisper-weight display moments. The weight 350 sits between regular and light — it is the brand's signature body voice: present but never loud. · `--font-twk-lausanne`
- **Substitute:** Inter (350 weight), or Söhne if licensed
- **Weights:** 200, 350, 400, 550
- **Sizes:** 11px, 14px, 16px, 18px, 72px, 96px, 155px
- **Line height:** 1.00–1.40
- **Letter spacing:** -0.04em at 155px, -0.02em at 96px, +0.01em at small UI sizes
- **Role:** Primary UI and body family. 350 for nav and labels, 400 for body copy, 550 for the rare emphasized UI moment. 200 is reserved for one or two whisper-weight display moments. The weight 350 sits between regular and light — it is the brand's signature body voice: present but never loud.

### Editorial New — Hero display headlines. Ultra-tight 0.90 leading means lines of type nearly touch — the weight 300 stays thin even at 240px, so the display whispers at billboard scale. Used for the largest statements on the page. · `--font-editorial-new`
- **Substitute:** Canela, Domaine Display Light, or Playfair Display at reduced weight
- **Weights:** 300
- **Sizes:** 60px, 140px, 240px
- **Line height:** 0.90
- **Letter spacing:** -0.02em at 240px, -0.01em at 140px
- **Role:** Hero display headlines. Ultra-tight 0.90 leading means lines of type nearly touch — the weight 300 stays thin even at 240px, so the display whispers at billboard scale. Used for the largest statements on the page.

### PP Mondwest — Secondary display voice for the most extreme scale moments (up to 295px). PP Mondwest's geometric, almost western-style serifs give the design a second typographic personality when the message needs a different emotional register from Editorial New. · `--font-pp-mondwest`
- **Substitute:** GT Sectra, Rouge, or Reckless
- **Weights:** 400
- **Sizes:** 60px, 165px, 295px
- **Line height:** 0.90
- **Letter spacing:** -0.04em
- **Role:** Secondary display voice for the most extreme scale moments (up to 295px). PP Mondwest's geometric, almost western-style serifs give the design a second typographic personality when the message needs a different emotional register from Editorial New.

### Times — System fallback for elements that need a serif at small sizes — appears sparingly in image captions and micro-copy where Times' neutrality avoids competing with the custom display faces. · `--font-times`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.20
- **Role:** System fallback for elements that need a serif at small sizes — appears sparingly in image captions and micro-copy where Times' neutrality avoids competing with the custom display faces.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.4 | 0.11px | `--text-caption` |
| body-sm | 14px | 1.4 | -0.28px | `--text-body-sm` |
| body | 16px | 1.4 | -0.32px | `--text-body` |
| subheading | 18px | 1.4 | -0.36px | `--text-subheading` |
| heading-sm | 60px | 0.9 | -1.2px | `--text-heading-sm` |
| heading | 72px | 1.1 | — | `--text-heading` |
| heading-lg | 96px | 1.1 | -1.92px | `--text-heading-lg` |
| display | 140px | 0.9 | -1.4px | `--text-display` |
| display-lg | 240px | 0.9 | -4.8px | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 15 | 15px | `--spacing-15` |
| 20 | 20px | `--spacing-20` |
| 25 | 25px | `--spacing-25` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 35 | 35px | `--spacing-35` |
| 40 | 40px | `--spacing-40` |
| 45 | 45px | `--spacing-45` |
| 50 | 50px | `--spacing-50` |
| 55 | 55px | `--spacing-55` |
| 60 | 60px | `--spacing-60` |
| 120 | 120px | `--spacing-120` |
| 190 | 190px | `--spacing-190` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 14px |
| images | 14px |
| buttons | 10px |
| smallElements | 5px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(16, 94, 29, 0.45) 1px 8px 20px 0px` | `--shadow-lg` |
| lg-2 | `rgba(18, 146, 39, 0.25) 1px 8px 20px 0px` | `--shadow-lg-2` |

### Layout

- **Page max-width:** 1440px
- **Section gap:** 80-120px
- **Card padding:** 20px
- **Element gap:** 20px

## Components

### Voltage CTA Button
**Role:** Primary action — the only filled button on the site

Fill #2bee4b, text in Obsidian Ink (#121613) at 14px TWK Lausanne 550, uppercase tracking +0.01em. Padding 20px 50px. Radius 10px. Carries a dual-layer green-tinted shadow: rgba(16,94,29,0.45) 1px 8px 20px 0px as the inner halo, rgba(18,146,39,0.25) 1px 8px 20px 0px as the softer outer wash. A right-arrow glyph (→) follows the label. The button glows green rather than casting a neutral shadow — a deliberate choice that keeps the luminous accent on-brand even in the elevation.

### Ghost Link Button
**Role:** Secondary navigation and inline actions

No background. Text in Obsidian Ink, 14px TWK Lausanne 350. Underline appears on hover. Used for 'Menu', footer links, and read-more affordances where a full CTA would be too loud.

### Image Tile
**Role:** Inline editorial photography

B&W or duotone-tinted photographs cropped into rectangles with 14px radius. No border, no shadow. Images sit on the Linen canvas and overlap or sit adjacent to display type. Sized in editorial proportions, not uniform — some are tall portrait crops, some wide landscape.

### Nav Header
**Role:** Site-wide top bar

Full-bleed Linen bar, 50px horizontal padding. Wordmark 'NewForm' at 14px TWK Lausanne 550 left-aligned, where 'New' is Obsidian Ink and 'Form' is Voltage (#2bee4b) — the green split is the logo itself. Right side carries 'Menu' label and a Voltage '||' mark icon, both 14px.

### Display Headline Block
**Role:** Hero and section statements

Editorial New 300 or PP Mondwest 400 at 140–295px, line-height 0.90, tracking -0.04em to -0.01em depending on size. Color Obsidian Ink. Lines are intentionally tight — the bottom of one line nearly grazes the cap-height of the next. No maximum width constraint; headlines break naturally at viewport edges.

### Caption Pair
**Role:** Image descriptions and editorial metadata

Small Times 16px italic-feeling regular weight, Sage (#516254) color, positioned bottom-left of image tiles. Short, observational fragments — not full sentences.

### Accent Tick Mark
**Role:** Decorative punctuation scattered through the layout

Short horizontal Voltage (#2bee4b) lines, roughly 40–60px wide, 2px tall, placed at various points near display headlines or section transitions. They function as visual rests — small green beats against the monochrome field.

### Section Divider
**Role:** Vertical rhythm between content blocks

No visible line. Sections are separated by generous whitespace (80–120px) and the scale shift between display type and body type. The absence of a divider is the divider.

### Portfolio Card
**Role:** Portfolio company entries

Linen surface with 14px radius, 20px padding. Company name in TWK Lausanne 400 18px Obsidian Ink. Category tag in 11px TWK Lausanne 350 uppercase Sage. No card border, no shadow — the card is defined by the type change, not a container.

## Do's and Don'ts

### Do
- Use Voltage (#2bee4b) only for filled CTAs, the '||' mark, and short tick accents — never for body text, headings, or backgrounds
- Set display headlines at line-height 0.90 with tracking between -0.04em and -0.01em so lines visually lock together
- Pair Editorial New (weight 300) with PP Mondwest (weight 400) rather than using one for every display moment
- Keep image tiles at 14px radius and let them overlap or sit adjacent to display type — they are editorial crops, not product thumbnails
- Use 20px gaps for inline element rhythm and reserve 80–120px for section breaks
- Split the wordmark 'NewForm' with 'New' in Obsidian Ink and 'Form' in Voltage — this green split is the logo
- Let the Linen canvas (#fafffa) carry the page; avoid placing any large surface in pure #ffffff

### Don't
- Do not add any second saturated color — the entire chromatic system is one neon green
- Do not use box-shadows outside the CTA button, and never use a neutral-gray shadow on the green button
- Do not set display headlines at 1.0+ line-height — the 0.90 tight leading is the signature
- Do not use bordered cards, filled panels, or elevated surfaces — type scale alone defines hierarchy
- Do not place colored photographs; all imagery is black-and-white or desaturated duotone
- Do not use weights heavier than 550 in TWK Lausanne — the brand voice lives in the 200–400 range
- Do not break the near-white canvas with a dark hero section; the page stays Linen top to bottom

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Linen Canvas | `#fafffa` | Full-bleed page background — the warm-tinted near-white that every section sits on |
| 1 | Linen Card | `#fafffa` | Same hex as canvas — cards are defined by 14px radius and padding, not a different fill |
| 2 | Obsidian Panel | `#121613` | Rare dark surface for footer or inverted moments, with Linen text on top |

## Elevation

- **Voltage CTA Button:** `rgba(16, 94, 29, 0.45) 1px 8px 20px 0px, rgba(18, 146, 39, 0.25) 1px 8px 20px 0px`

## Imagery

Black-and-white editorial photography throughout. Images are tightly cropped architectural details, financial infrastructure (ticker boards, vault interiors, server racks), and human subjects in work environments. All treatment is monochrome or desaturated duotone — no color photography appears. Frames use 14px radius. Images are placed asymmetrically, often overlapping or sitting beside massive display headlines rather than being centered in cards. The visual register is broadsheet financial press, not product marketing.

## Layout

Full-bleed Linen canvas with a max content width around 1440px. The hero is a single display headline that breaks across multiple lines at viewport scale, with a small image tile tucked into the line breaks. Below the hero, sections alternate between text-forward statement blocks and image-and-caption pairs in a loose asymmetric grid. No traditional card grids, no multi-column feature rows. Navigation is a minimal top bar (wordmark left, menu + mark right) with no sticky behavior visible. The site reads top-to-bottom as a scrollable editorial spread, with each section separated by 80–120px of whitespace rather than dividers or alternating background bands.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #121613
- background: #fafffa
- border: #121613 or #000000
- accent / decoration: #2bee4b
- primary action: #2bee4b (filled action)

**3-5 Example Component Prompts**

1. **Hero Display Headline**: Set a 4-line headline at 240px Editorial New weight 300, color #121613, line-height 0.90, letter-spacing -4.8px. Background #fafffa. A 14px-radius B&W image tile (~280×200px) floats beside the second line, slightly overlapping the baseline.

2. Create a Primary Action Button: #2bee4b background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

3. **Nav Header**: Full-width bar on #fafffa, 50px horizontal padding. Left: wordmark 'New' in #121613 + 'Form' in #2bee4b, both 14px TWK Lausanne 550. Right: 'Menu' label in #121613 14px TWK Lausanne 350, followed by a #2bee4b '||' icon mark.

4. **Editorial Section with Image**: Left column (45% width): B&W image, 14px radius, no border. Right column: 60px Editorial New 300 display heading in #121613, line-height 0.90, letter-spacing -1.2px. Below heading, a 16px TWK Lausanne 350 paragraph in #121613. A short #2bee4b horizontal tick (~50px × 2px) sits at the section's right edge.

5. **Portfolio Card**: Linen surface (#fafffa), 14px radius, 20px padding, no border or shadow. Company name in TWK Lausanne 400 18px #121613. Category tag below in 11px TWK Lausanne 350 uppercase #516254, tracking +0.01em.

## Typography Pairing Logic

TWK Lausanne handles everything from 11px captions to 155px sub-display moments. When the headline needs to exceed 155px and carry a serif voice, the site switches to Editorial New (weight 300, tighter apertures) or PP Mondwest (weight 400, more geometric serifs). The choice between Editorial New and PP Mondwest is editorial, not systematic — use Editorial New for statements that should feel literary and PP Mondwest for statements that should feel architectural. Do not mix the two display faces in the same headline.

## Similar Brands

- **Brainchild (VC fund site)** — Same broadsheet-editorial approach: near-white canvas, massive serif display type, single vivid accent color used as punctuation rather than fill, B&W photography in rounded tiles
- **Paradigm (crypto fund)** — Similar oversized display serif headlines at 200px+, monochrome page with one neon accent, near-white canvas instead of dark mode
- **Atelier TOC** — Shares the magazine-spread layout rhythm where type and photography interlock asymmetrically rather than sitting in a grid
- **Werkstatt (design studio)** — Uses Editorial New-class display faces at extreme sizes on a warm near-white canvas with hairline borders instead of elevation

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-linen: #fafffa;
  --color-obsidian-ink: #121613;
  --color-pure-black: #000000;
  --color-bark: #232924;
  --color-sage: #516254;
  --color-mist: #c8d2c8;
  --color-voltage: #2bee4b;
  --color-moss-glow: #93b799;
  --color-pollen: #c4e4c9;

  /* Typography — Font Families */
  --font-twk-lausanne: 'TWK Lausanne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-editorial-new: 'Editorial New', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-mondwest: 'PP Mondwest', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.4;
  --tracking-caption: 0.11px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 60px;
  --leading-heading-sm: 0.9;
  --tracking-heading-sm: -1.2px;
  --text-heading: 72px;
  --leading-heading: 1.1;
  --text-heading-lg: 96px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.92px;
  --text-display: 140px;
  --leading-display: 0.9;
  --tracking-display: -1.4px;
  --text-display-lg: 240px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -4.8px;

  /* Typography — Weights */
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-w350: 350;
  --font-weight-regular: 400;
  --font-weight-w550: 550;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-190: 190px;

  /* Layout */
  --page-max-width: 1440px;
  --section-gap: 80-120px;
  --card-padding: 20px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-md: 4.9968px;
  --radius-lg: 9.9936px;
  --radius-xl: 14px;

  /* Named Radii */
  --radius-cards: 14px;
  --radius-images: 14px;
  --radius-buttons: 10px;
  --radius-smallelements: 5px;

  /* Shadows */
  --shadow-lg: rgba(16, 94, 29, 0.45) 1px 8px 20px 0px;
  --shadow-lg-2: rgba(18, 146, 39, 0.25) 1px 8px 20px 0px;

  /* Surfaces */
  --surface-linen-canvas: #fafffa;
  --surface-linen-card: #fafffa;
  --surface-obsidian-panel: #121613;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-linen: #fafffa;
  --color-obsidian-ink: #121613;
  --color-pure-black: #000000;
  --color-bark: #232924;
  --color-sage: #516254;
  --color-mist: #c8d2c8;
  --color-voltage: #2bee4b;
  --color-moss-glow: #93b799;
  --color-pollen: #c4e4c9;

  /* Typography */
  --font-twk-lausanne: 'TWK Lausanne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-editorial-new: 'Editorial New', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pp-mondwest: 'PP Mondwest', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-times: 'Times', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.4;
  --tracking-caption: 0.11px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 60px;
  --leading-heading-sm: 0.9;
  --tracking-heading-sm: -1.2px;
  --text-heading: 72px;
  --leading-heading: 1.1;
  --text-heading-lg: 96px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.92px;
  --text-display: 140px;
  --leading-display: 0.9;
  --tracking-display: -1.4px;
  --text-display-lg: 240px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -4.8px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-190: 190px;

  /* Border Radius */
  --radius-md: 4.9968px;
  --radius-lg: 9.9936px;
  --radius-xl: 14px;

  /* Shadows */
  --shadow-lg: rgba(16, 94, 29, 0.45) 1px 8px 20px 0px;
  --shadow-lg-2: rgba(18, 146, 39, 0.25) 1px 8px 20px 0px;
}
```