# General Intelligence Company — Style Reference
> illustrated metropolis behind frosted glass

**Theme:** light

General Intelligence Company presents as an editorial publication about applied AI: a warm off-white canvas (#fefffc) holds near-black serif headlines and compact sans body text, with a single vivid blue (#0081c0) used sparingly as accent. Full-bleed painted illustrations (a twilight cityscape, a flowering meadow) establish atmosphere, while frosted-glass text cards float over them to deliver the message — the hero is a literary tableau, not a product screenshot. The custom display serif 'ppmondwest' with its tight -0.02em tracking sets a measured, almost academic register; the sans 'af' keeps every other surface quiet and functional. Components feel paper-like and light: hairline borders, soft ring shadows, generous corner radii on cards (12-24px), and pill-shaped floating controls rather than heavy filled panels.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Hudson Blue | `#0081c0` | `--color-hudson-blue` | Blue wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Slate Cyan | `#41a1cf` | `--color-slate-cyan` | Blue accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Graphite Night | `#282834` | `--color-graphite-night` | Floating navigation island fill and icon strokes — the dark surface that anchors the pill-shaped nav against the light canvas |
| Ink | `#171717` | `--color-ink` | Primary text and dominant border color. Drives 619 occurrences — the structural backbone of the interface |
| Carbon | `#2c2c2c` | `--color-carbon` | Secondary heading text and dark UI elements — slightly softer than Ink for subheadings and dense text blocks |
| Iron | `#444141` | `--color-iron` | Button borders, icon strokes, mid-dark surface edges. Sits between Ink and Steel on the dark scale |
| Steel | `#646464` | `--color-steel` | Muted helper text and link borders. The first step down from primary text — used for body captions and less-prominent metadata |
| Fog | `#b4b8b4` | `--color-fog` | Light hairlines and faint surface fills — gentle dividers that separate content without drawing attention |
| Ash | `#a5afaf` | `--color-ash` | Mid-gray for subtle background fills and muted borders on inactive elements |
| Mist | `#cfd3cf` | `--color-mist` | Soft fill for inactive or decorative surface layers — the lightest non-white tone before borders kick in |
| Sage | `#dee2de` | `--color-sage` | Card and button border ring — the barely-there outline that gives surfaces their edge in lieu of shadow |
| Cream | `#fefffc` | `--color-cream` | Page canvas — a warm off-white that prevents the site from feeling clinical. The single most prominent background |
| Linen | `#f9faf7` | `--color-linen` | Secondary surface and nav fill — one step cooler than Cream, used for floating panels and alternating bands |
| Paper | `#ffffff` | `--color-paper` | Card surfaces, elevated panels, and the topmost layer in the surface stack. Pure white for content blocks floating above the Cream canvas |
| Obsidian | `#1f1f29` | `--color-obsidian` | High-contrast neutral action fill for primary buttons on light surfaces. |

## Tokens — Typography

### ppmondwest — Display headings — the editorial serif that gives the brand its literary, almost academic register. Used at 40-54px with tight -0.02em tracking. The 'liga' 0 feature setting deliberately disables ligatures, preserving the spaced, slightly geometric character of each letterform. · `--font-ppmondwest`
- **Substitute:** Source Serif 4, Lora, or PT Serif
- **Weights:** 400, 500
- **Sizes:** 40px, 48px, 54px
- **Line height:** 1.10
- **Letter spacing:** -0.02em
- **OpenType features:** `"liga" 0`
- **Role:** Display headings — the editorial serif that gives the brand its literary, almost academic register. Used at 40-54px with tight -0.02em tracking. The 'liga' 0 feature setting deliberately disables ligatures, preserving the spaced, slightly geometric character of each letterform.

### af — Body text, UI elements, navigation, buttons, and inline links. The functional workhorse — compact, quiet, and highly legible. Light negative tracking (-0.01 to -0.012em) tightens dense UI text without feeling stylized. · `--font-af`
- **Substitute:** Inter, Söhne, or Geist Sans
- **Weights:** 400, 500, 600, 700
- **Sizes:** 13px, 15px, 16px, 18px
- **Line height:** 1.20-1.50
- **Letter spacing:** -0.0120em, -0.0100em
- **Role:** Body text, UI elements, navigation, buttons, and inline links. The functional workhorse — compact, quiet, and highly legible. Light negative tracking (-0.01 to -0.012em) tightens dense UI text without feeling stylized.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.4 | -0.156px | `--text-caption` |
| body-sm | 15px | 1.5 | -0.15px | `--text-body-sm` |
| subheading | 18px | 1.3 | -0.18px | `--text-subheading` |
| heading | 40px | 1.1 | -0.8px | `--text-heading` |
| heading-lg | 48px | 1.1 | -0.96px | `--text-heading-lg` |
| display | 54px | 1.1 | -1.08px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 50px |
| cards | 12px |
| buttons | 4px |
| heroCards | 24px |
| elevatedCards | 16px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.15) 0px 2px 6px 0px` | `--shadow-sm` |
| subtle | `rgb(222, 226, 222) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) ...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) ...` | `--shadow-subtle-3` |
| sm-2 | `rgba(0, 0, 0, 0.05) 0px 1px 8px 0px` | `--shadow-sm-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 48px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Floating Pill Navigation
**Role:** Primary site navigation — a dark glassmorphic island floating at the top of the page

Dark fill (#282834) with ~50px border-radius creating a perfect pill shape. Contains icon, text nav items (white #ffffff, 15px af weight 400), and a 'Get Cofounder' CTA. Subtle drop shadow: rgba(0,0,0,0.15) 0px 2px 6px. Centered horizontally, not full-width — sits as a compact floating element.

### Pill CTA Button
**Role:** Primary action in the navigation

Dark fill (#1f1f29 or near-black) with white text ('Get Cofounder'), 15px af weight 500, 4px-8px vertical padding, 12px-16px horizontal padding, 4px border-radius with an inline arrow icon. Compact and confident — does not use the full pill radius despite living inside the pill nav.

### Frosted Hero Text Card
**Role:** Overlaid message card on full-bleed illustrated backgrounds

Large rounded card (24px radius) with a frosted/blur glass effect and a blue-tinted wash. White headline text at display size, white body text, and a white 'Get to know us' link with arrow. Floats over painted cityscape or meadow illustrations. Padding approximately 16-20px.

### Large Display Headline
**Role:** Primary content heading on white sections

ppmondwest at 40-54px, line-height 1.10, letter-spacing -0.02em, color Ink (#171717). Can span 2-3 lines at full width. Inline links within the headline use Hudson Blue (#0081c0) with underline — words like 'multiple fields' become interactive mid-sentence.

### Diagram Card
**Role:** Supporting illustration container in content sections

White (#ffffff) surface with Sage (#dee2de) 1px border, 16-24px border-radius, and soft layered shadows (rgba(0,0,0,0.08) 0px 1px 1px + rgba(0,0,0,0.08) 0px 4px 5px). Contains sparse geometric diagrams — scattered outlined squares representing isolated systems.

### Outlined Action Button
**Role:** Secondary or ghost action

Transparent or Linen fill with Slate Cyan (#41a1cf) or Iron (#444141) 1px border, 4-8px border-radius, 4-8px vertical padding, 12-16px horizontal padding. Text in matching color, af 15px weight 500.

### Sidebar Label
**Role:** Section identifier in multi-column layouts

Small uppercase or labeled text block in Iron (#444141), af 13-15px, with a bold heading ('Isolated systems') and muted body text in Steel (#646464). Sits to the left of a diagram card.

### Timezone Indicator
**Role:** Live status element in nav

Minimal text in the top-right of the floating nav showing local time ('8:30 PM NYC') with a small clock icon. White text on dark nav background, af 13px.

### Full-Bleed Illustrated Section
**Role:** Atmospheric background — a painted cityscape or natural landscape spanning the full viewport

No border-radius, no card wrapping. The illustration IS the section background. Content is delivered via the overlaid frosted text card. Creates a literary, almost cinematic feel — the brand positions itself as embedded in a real painted world, not against a flat color.

## Do's and Don'ts

### Do
- Use ppmondwest at 40-54px for all major headings with -0.02em letter-spacing and line-height 1.10
- Use the frosted card pattern (large radius 16-24px, blur backdrop, white text) for overlaid messages on painted full-bleed backgrounds
- Keep the floating nav as a dark pill (~50px radius) with rgba(0,0,0,0.15) 0px 2px 6px shadow, not a full-width bar
- Use Hudson Blue (#0081c0) exclusively for inline links within headlines — it is the only chromatic color in the system
- Use Cream (#fefffc) as the page canvas and Paper (#ffffff) for elevated card surfaces to maintain the warm off-white base
- Set inline links in display headings with a 1px underline in Hudson Blue — words mid-sentence become interactive without breaking the reading flow
- Default to hairline Sage (#dee2de) borders and soft layered shadows for card depth rather than heavy drop shadows

### Don't
- Do not introduce additional chromatic colors — the system is deliberately monochromatic with a single blue accent
- Do not use filled solid-color CTA buttons on the content canvas — actions are either dark pills in the nav or outlined with Slate Cyan borders
- Do not use a full-width sticky header bar — the nav must float as a centered pill island
- Do not use product screenshots, stock photography, or abstract gradient backgrounds — the imagery language is exclusively painterly illustration
- Do not use system fonts or generic serifs for display headings — ppmondwest's character (and its 'liga' 0 setting) is the brand's signature
- Do not use card grids, pricing tables, or feature matrices — the layout is editorial and reading-first, not catalog-first
- Do not apply large border-radius to content buttons — the 4px radius is intentional, reserving pill shapes for the nav island and frosted overlay cards

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream | `#fefffc` | Page canvas — warm off-white ground for all content |
| 1 | Linen | `#f9faf7` | Floating nav island and subtle band alternation |
| 2 | Paper | `#ffffff` | Card surfaces and content blocks above the canvas |
| 3 | Graphite Night | `#282834` | Dark surface for the floating navigation pill |

## Elevation

- **Floating Nav:** `rgba(0, 0, 0, 0.15) 0px 2px 6px 0px`
- **Frosted Hero Card:** `rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px`
- **Diagram Card:** `rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px`
- **Outlined Button:** `rgb(222, 226, 222) 0px 0px 0px 1px`

## Imagery

The visual language is painterly and illustrative, not photographic. Full-bleed digital paintings — a twilight Manhattan skyline with lit windows and a starry sky, a flowering meadow with daffodils and lush green foliage — span the entire viewport as atmospheric backdrops. The style is detailed, slightly impressionistic, with rich color and depth. These are not stock photos or abstract gradients; they are hand-painted-feeling scenes that ground the brand in a physical, almost romanticized world. Supporting content uses sparse geometric diagrams (outlined squares scattered on white) rather than decorative imagery. Icons are minimal — thin outlined glyphs (clock, arrow, logo mark) in white or Iron. The overall density is text-dominant: the paintings provide one big emotional moment, then the page returns to quiet editorial typography.

## Layout

Centered max-width layout (~1200px) with a single full-viewport hero, then alternating content sections that breathe with generous vertical space. The hero is a full-bleed painted illustration with a frosted text card floating in the lower-left — no centered headline over a background gradient, no product screenshot. Subsequent sections use a white Paper background with the large display heading left-aligned and spanning roughly half the page width, paired with a sidebar text block and a diagram card in a 2-column arrangement. The floating pill navigation is centered at the top, not full-width — it sits as an island. The rhythm is: painted hero → white editorial section → potential next painted band. Content is sparse and literary, with 48px+ section gaps and only 2-3 distinct sections visible above the fold-equivalent scroll depth. No card grids, no pricing tables, no feature matrices — this is a reading experience, not a product catalog.

## Agent Prompt Guide

**Quick Color Reference**
- text: #171717 (Ink)
- background: #fefffc (Cream)
- surface: #ffffff (Paper)
- border: #dee2e0 (Sage)
- accent: #0081c0 (Hudson Blue)
- primary action: #41a1cf (outlined action border)

**Example Component Prompts**

1. **Editorial Headline Section**: White Paper (#ffffff) background, 1200px max-width centered. Display heading 'Existing specialized agents have shown success in multiple fields' at 54px ppmondwest weight 400, color #171717, letter-spacing -1.08px, line-height 1.10. The phrase 'multiple fields' is a link: #0081c0, 1px underline. Below: sidebar with 15px af weight 700 heading 'Isolated systems' in #171717, body text in #646464 af 15px. To the right: a diagram card — #ffffff fill, #dee2de 1px border, 16px radius, soft shadow rgba(0,0,0,0.08) 0px 1px 1px + 0px 4px 5px.

2. **Floating Pill Navigation**: Dark pill (#282834 fill), centered, ~50px border-radius, padding 8px 12px, shadow rgba(0,0,0,0.15) 0px 2px 6px. Left: small outlined logo icon. Middle: nav items 'About', 'Writing', 'Careers' in #ffffff af 15px weight 400. Right: dark ghost button 'Get Cofounder →' in #1f1f29, #ffffff text, 4px radius, 8px 12px padding, af 15px weight 500. Far right: timezone '8:30 PM NYC' in #ffffff af 13px with clock icon.

3. **Frosted Hero Text Card**: Overlaid on a full-bleed painted cityscape background. Card: 24px border-radius, frosted glass with blue-tinted wash, ~20px padding. White headline 'AI that runs businesses autonomously' at 48px ppmondwest weight 400, letter-spacing -0.96px, line-height 1.10. White body text at 15px af weight 400. White 'Get to know us →' link at 15px af weight 500 with 1px underline and arrow icon. Card sits in the lower-left quadrant of the viewport.

4. **Full-Bleed Painted Hero Section**: 100vw × 100vh. Background: a digital painting of a twilight cityscape with lit skyscraper windows, starry sky, and foreground foliage. No border-radius. Content is delivered only through the overlaid frosted text card. Navigation sits as a floating pill at the top center.

5. **Outlined Ghost Button**: Transparent fill, #41a1cf 1px border, 4px radius, 8px 16px padding. Text 'Learn more' in #41a1cf, af 15px weight 500. Optional left/right arrow icon in matching color. Sits inline with body text or below a content block.

## Similar Brands

- **Stripe** — Same editorial design-forward approach with custom display serifs, warm off-white canvases, and a single restrained accent color used for links and emphasis
- **Anthropic** — Restrained monochromatic palette with a warm cream canvas, literary tone, and minimal but deliberate use of accent color
- **Substack** — Reading-first editorial layout with large serif headlines, generous whitespace, and a publication-like rhythm rather than a product-grid structure
- **Vercel** — Floating pill navigation island, frosted glass overlays, and the dark-surface-floating-on-light-canvas pattern

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-hudson-blue: #0081c0;
  --color-slate-cyan: #41a1cf;
  --color-graphite-night: #282834;
  --color-ink: #171717;
  --color-carbon: #2c2c2c;
  --color-iron: #444141;
  --color-steel: #646464;
  --color-fog: #b4b8b4;
  --color-ash: #a5afaf;
  --color-mist: #cfd3cf;
  --color-sage: #dee2de;
  --color-cream: #fefffc;
  --color-linen: #f9faf7;
  --color-paper: #ffffff;
  --color-obsidian: #1f1f29;

  /* Typography — Font Families */
  --font-ppmondwest: 'ppmondwest', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-af: 'af', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.156px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.15px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 54px;
  --leading-display: 1.1;
  --tracking-display: -1.08px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 48px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 50.496px;

  /* Named Radii */
  --radius-nav: 50px;
  --radius-cards: 12px;
  --radius-buttons: 4px;
  --radius-herocards: 24px;
  --radius-elevatedcards: 16px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.15) 0px 2px 6px 0px;
  --shadow-subtle: rgb(222, 226, 222) 0px 0px 0px 1px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px;
  --shadow-sm-2: rgba(0, 0, 0, 0.05) 0px 1px 8px 0px;

  /* Surfaces */
  --surface-cream: #fefffc;
  --surface-linen: #f9faf7;
  --surface-paper: #ffffff;
  --surface-graphite-night: #282834;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-hudson-blue: #0081c0;
  --color-slate-cyan: #41a1cf;
  --color-graphite-night: #282834;
  --color-ink: #171717;
  --color-carbon: #2c2c2c;
  --color-iron: #444141;
  --color-steel: #646464;
  --color-fog: #b4b8b4;
  --color-ash: #a5afaf;
  --color-mist: #cfd3cf;
  --color-sage: #dee2de;
  --color-cream: #fefffc;
  --color-linen: #f9faf7;
  --color-paper: #ffffff;
  --color-obsidian: #1f1f29;

  /* Typography */
  --font-ppmondwest: 'ppmondwest', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-af: 'af', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.156px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.15px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 54px;
  --leading-display: 1.1;
  --tracking-display: -1.08px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 50.496px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.15) 0px 2px 6px 0px;
  --shadow-subtle: rgb(222, 226, 222) 0px 0px 0px 1px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px;
  --shadow-sm-2: rgba(0, 0, 0, 0.05) 0px 1px 8px 0px;
}
```