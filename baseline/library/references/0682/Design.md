# Perplexity AI — Style Reference
> Warm paper library at dawn — a single open page surrounded by quiet tools, rendered in charcoal on cream.

**Theme:** light

Perplexity's interface reads like a scholar's notebook rendered in browser — a warm cream canvas (#faf8f5) that avoids sterile white, paired with deep charcoal text (#27251e) that carries a faint brown warmth. The entire system is almost entirely achromatic: no brand color, no accent hues, no gradients. Identity comes from restraint: one custom sans-serif (pplxSans) used at 12–16px, pill-shaped controls at 9999px radius, hairline-thin borders, and the near-absence of elevation. The layout is a fixed two-pane shell — a 260px left navigation rail and a centered main column — that feels closer to a research tool than a consumer product. Every interactive element is monochrome and geometric; the only shape language is pill for buttons/tags and 12–16px corners for surfaces.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink | `#27251e` | `--color-ink` | Primary text, sidebar surface, active nav background, submitted query fills — deep charcoal with brown warmth that grounds the cream canvas |
| Cream | `#faf8f5` | `--color-cream` | Page canvas, sidebar background, input fields, card surfaces — warm off-white that replaces sterile pure white with paper-like softness |
| Pure Black | `#000000` | `--color-pure-black` | Dark supporting neutral for text, icons, and strong contrast. Do not promote it to the primary CTA color |
| Smoke | `#72706b` | `--color-smoke` | Secondary text, inactive nav labels, icon strokes, helper text — warm gray that recedes without disappearing |
| Ash | `#92918b` | `--color-ash` | Tertiary text, placeholders, disabled states, subtle metadata — lightest readable neutral for de-emphasized content |

## Tokens — Typography

### pplxSans — Universal UI typeface — used for nav labels, body text, input text, button text, and headings. Custom Perplexity sans-serif; the entire interface speaks in one voice at 12–16px. Weight 400 for body and nav, weight 500 for active/selected states and slightly emphasized labels. No display weight exists — even the wordmark 'perplexity' relies on the same family, not a separate headline cut. · `--font-pplxsans`
- **Substitute:** Inter, Söhne, Neue Haas Grotesk
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.33 (12px), 1.43 (14px), 1.50 (16px), 2.00 (14px loose)
- **Role:** Universal UI typeface — used for nav labels, body text, input text, button text, and headings. Custom Perplexity sans-serif; the entire interface speaks in one voice at 12–16px. Weight 400 for body and nav, weight 500 for active/selected states and slightly emphasized labels. No display weight exists — even the wordmark 'perplexity' relies on the same family, not a separate headline cut.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 32 | 32px | `--spacing-32` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 12px |
| inputs | 16px |
| buttons | 9999px |
| navItems | 8px |

### Layout

- **Page max-width:** 768px
- **Section gap:** 32px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Sidebar Navigation
**Role:** Fixed left rail — primary navigation container

260px wide fixed sidebar, #faf8f5 background, no border on the right edge (separation by position). Contains: search field at top, vertically stacked nav items with 8px gap, then a 'History' section heading and thread list. Total content is compact and left-aligned with 16px horizontal padding.

### Sidebar Search
**Role:** Quick thread search in sidebar

Full-width input within sidebar, #faf8f5 background, 8px border-radius, 8px vertical padding, placeholder 'Search' in #92918b at 14px. Borderless or hairline border. Search icon prefix in #72706b.

### Nav Item (Default)
**Role:** Sidebar navigation entry — inactive state

Icon + label, transparent background, #27251 text and icon at 14px pplxSans weight 400. 8px vertical / 12px horizontal padding, 8px border-radius. No hover state background shift — the item stays flat.

### Nav Item (Active/Selected)
**Role:** Sidebar navigation entry — current section

Same dimensions as default but with #27251 text weight shifted to 500 and a very subtle #27251 at low-opacity or a slightly darker fill. The 'Computer' item in the screenshot shows this — bold label, no heavy background fill.

### Primary Search Input
**Role:** Main query input on home and thread pages

Centered in the main column, max-width ~768px, 16px border-radius, 1px border in #e8e6e0 or similar warm hairline, #faf8f5 background. Placeholder 'Type @ for connectors and sources' in #92918b at 16px. Multi-line capable with internal row: left side has '+' attach button and a 'Computer' source tag pill, right side has 'Model' dropdown, microphone icon, and a 32px circular black submit button with white arrow.

### Source Tag Pill
**Role:** Attached source/focus indicator inside the input

Pill shape at 9999px radius, 1px border in #d4d2cc, transparent background, label in #27251 at 14px with a small icon and a '+' to add. Sits inline within the input row.

### Submit Button (Primary Action)
**Role:** Send query — the only filled button in the system

32px × 32px circle, #000000 background, white arrow icon centered. 9999px radius. The single chromatic-dark element on screen — it draws the eye without using color.

### Model Selector
**Role:** AI model picker inside input row

Ghost button: transparent background, 'Model' label + chevron at 14px pplxSans in #27251e. No border. Sits to the left of the submit button.

### Suggested Query Card
**Role:** Pre-built query suggestion on home screen

Row of horizontally stacked cards below the search input. Each card: 12px border-radius, #faf8f5 background, 1px border in #ece9e2, 16px padding, icon + label at 14px pplxSans #27251e. Title row shows an icon and 'Try Computer' label; subtitle area contains short placeholder text bars in #ece9e2 to suggest response preview.

### Sidebar History Item
**Role:** Recent thread entry in sidebar

Truncated thread title at 14px pplxSans #27251, transparent background, 8px border-radius, 8px vertical padding. No timestamps or metadata visible in default state. Helper text 'Recent and active threads will appear here.' at 12px #72706b sits above the list when empty.

### Section Heading (Sidebar)
**Role:** Group label within sidebar

'History' label at 14px pplxSans weight 500 #27251, with optional helper text below at 12px #72706b. No underline, no divider — the heading weight shift is the only differentiator.

### Wordmark Logo
**Role:** Brand identity — centered above main input

Lowercase 'perplexity' at large display size (~48–56px), pplxSans weight 400, #27251e. Not a separate typeface — the same UI font scaled up, with generous letter-spacing. This is the only instance of the type system exceeding 16px and it functions as the page hero without color or decoration.

### Expand Toggle ('More')
**Role:** Show additional navigation items

Same dimensions as a Nav Item but with '...' dots icon prefix instead of a named glyph. #27251 text and icon, 8px padding, 8px radius.

## Do's and Don'ts

### Do
- Use #faf8f5 as the universal canvas — never pure white (#ffffff) for page or card backgrounds
- Set border-radius to 9999px for all buttons, tags, and small interactive controls; 16px for the main search input; 12px for suggestion cards; 8px for sidebar items
- Use pplxSans weight 400 for body and nav, weight 500 exclusively for active/selected states and section headings — never introduce a heavier weight like 600 or 700
- Keep all text in the #27251 to #92918b range — the entire palette is warm and desaturated, no chromatic text ever
- Communicate the primary action through #000000 fill, not color — the submit button is the only black-on-cream element and it should remain the only one per view
- Maintain a 4px spacing base — use 4, 8, 12, 16, 32px increments; never introduce values that break the rhythm
- Separate the sidebar from the main column by fixed positioning and width alone — never add a vertical divider line between them

### Don't
- Don't introduce any chromatic color — no blue, green, red, or purple for buttons, badges, links, or accents; the system is entirely achromatic
- Don't use box-shadows on cards, inputs, buttons, or modals — depth must come from surface inversion and hairlines only
- Don't use a display or headline typeface separate from pplxSans — the wordmark scales the same UI font, not a serif or display cut
- Don't use border-radius values other than 9999px (pills), 16px (input), 12px (cards), or 8px (nav items) — avoid 4px or 6px corners
- Don't add background colors to default nav items — the active state is the only one that gets a fill, and it inverts to #27251
- Don't use pure white (#ffffff) for any surface — it breaks the warm paper quality; always offset slightly toward cream
- Don't exceed 16px for body, nav, button, or input text — the interface is deliberately compact and the wordmark is the only typographic exception

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream Canvas | `#faf8f5` | Page background and main column — warm off-white base |
| 1 | Sidebar | `#faf8f5` | Left navigation rail — same warm cream as canvas, separated by position not contrast |
| 2 | Input Field | `#faf8f5` | Search input and tag pill backgrounds — on-canvas, no contrast shift |
| 3 | Active Item | `#27251` | Selected nav item and submitted query fill — inverts the canvas to charcoal |

## Elevation

The system deliberately avoids box-shadows. Depth is communicated through inversion (dark surface on light canvas), border weight (1px hairlines in warm gray), and position (fixed sidebar vs scrolling main). No drop shadows appear on cards, inputs, or buttons — everything sits flush on the cream surface like ink on paper.

## Imagery

The interface uses essentially no imagery. The only visual elements are: the lowercase 'perplexity' wordmark (set in the UI typeface, not a logo illustration), monochrome line icons throughout the sidebar (16–20px, 1.5px stroke, #27251 or #72706b), and a small set of category icons (search magnifier, plus, clock, compass, grid, finance chart, heart, dot-menu). No photography, no illustrations, no product screenshots, no 3D renders, no decorative graphics. The blank cream canvas IS the visual language — the design communicates through type, geometry, and negative space, not imagery.

## Layout

Fixed two-pane shell: a 260px left sidebar and a flexible-width main column. The sidebar is position:fixed on the left, contains the full navigation hierarchy (search, primary nav items, history section, 'More' expand), and stays in place while the main column scrolls. The main column is centered with content max-width ~768px, creating generous left/right margins of empty cream. The home page hero is vertically centered: wordmark at top, large rounded search input in the middle, and a row of 4–5 suggested query cards below. No full-bleed sections, no alternating bands, no multi-column grids in the main area — everything reads as a single centered stack on a page. Navigation is sidebar-only (no top bar, no mega-menu); density is compact with 8px gaps between nav items and 32px between sidebar groups.

## Agent Prompt Guide

**Quick Color Reference**
- text: #27251e (primary) / #72706b (secondary) / #92918b (tertiary)
- background: #faf8f5
- border: #ece9e2 or #d4d2cc (1px hairline)
- accent: none — system is fully achromatic
- primary action: no distinct CTA color

**Example Component Prompts**
1. Create the main search input: centered in column, max-width 768px, #faf8f5 fill, 1px border in #ece9e2, 16px radius, 16px pplxSans #92918b placeholder 'Type @ for connectors and sources', 16px line-height. Inside row: left has a '+' icon button in #72706b and a 'Computer' source pill (9999px radius, 1px border #d4d2cc, 14px pplxSans #27251e). Right has 'Model ▾' ghost text at 14px #27251e, microphone icon in #72706b, and a 32px circular #000000 submit button with a white right-arrow icon.
2. Create a sidebar nav item: 8px radius, 8px vertical / 12px horizontal padding, transparent background, 16px monochrome line icon in #27251e + 14px pplxSans weight 400 #27251e label, 8px gap between icon and text. On active: weight shifts to 500, no background fill change.
3. Create a suggested query card: 12px radius, #faf8f5 background, 1px border #ece9e2, 16px padding, icon + 'Try Computer' label at 14px pplxSans #27251e, followed by 2–3 short gray placeholder bars (#ece9e2, 8px height, 4px radius) suggesting a response preview.
4. Create the wordmark: centered 'perplexity' at ~48px pplxSans weight 400 #27251e, normal letter-spacing, lowercase, no separate logo mark — the text alone is the brand.
5. Create a history section: 'History' heading at 14px pplxSans weight 500 #27251e, then 12px #72706b helper text 'Recent and active threads will appear here.', then a vertical list of thread items (8px radius, 8px vertical padding, 14px pplxSans #27251e truncated text, transparent background).

## Geometry System

The entire radius vocabulary is four values: 9999px for pills (buttons, source tags, any fully-rounded element), 16px for the main search input, 12px for content cards, and 8px for nav items and small surfaces. This strict four-value scale means the visual hierarchy reads through size and fill, not through radius variation. Never introduce a fifth radius value — the discipline of repetition is what makes the system feel calm.

## Achromatic Discipline

Zero chromatic colors exist in the interface. Every color in the palette is a warm-tinted neutral — #27251e has brown undertones, #faf8f5 has yellow undertones, the grays lean warm. This is a deliberate choice: a product that answers questions should feel like reading a well-printed page, not like interacting with a brand. If you need to draw attention, use weight (400→500), size, or fill inversion (cream→charcoal) — never hue.

## Similar Brands

- **Notion AI** — Same achromatic warm-neutral palette (cream canvas, charcoal text) and same compact single-typeface approach at small sizes
- **Linear** — Same two-pane shell with a fixed sidebar and centered main column, same restrained geometry and near-total absence of color
- **Are.na** — Same paper-like cream canvas with deep charcoal text and almost no decorative imagery — both feel like quiet research tools
- **iA Writer** — Same focus on a single cream surface with a custom sans-serif at small sizes and zero chromatic accents
- **Read.cv** — Same warm off-white background and monochrome interface language, same pill-shaped controls and hairline borders

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink: #27251e;
  --color-cream: #faf8f5;
  --color-pure-black: #000000;
  --color-smoke: #72706b;
  --color-ash: #92918b;

  /* Typography — Font Families */
  --font-pplxsans: 'pplxSans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-32: 32px;

  /* Layout */
  --page-max-width: 768px;
  --section-gap: 32px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 16px;
  --radius-buttons: 9999px;
  --radius-navitems: 8px;

  /* Surfaces */
  --surface-cream-canvas: #faf8f5;
  --surface-sidebar: #faf8f5;
  --surface-input-field: #faf8f5;
  --surface-active-item: #27251;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink: #27251e;
  --color-cream: #faf8f5;
  --color-pure-black: #000000;
  --color-smoke: #72706b;
  --color-ash: #92918b;

  /* Typography */
  --font-pplxsans: 'pplxSans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-32: 32px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}
```