# Column — Style Reference
> Halftone atlas meets Swiss ledger — a banking API console floating over a dotted globe, where the map IS the hero and the card IS the illustration.

**Theme:** light

Column operates as a Swiss-precision banking ledger projected onto a halftone atlas. The canvas is paper-white with a sparse, deep-indigo typographic system where weight 300 headlines feel engineered rather than decorated. Color is rationed: the interface stays roughly 95% achromatic while a single Ember Orange anchors featured case-study cards, and teal pill badges provide functional punctuation. The world-map dot pattern is the signature visual motif — small circular points arranged in a grid, tinted across a full spectrum to form continents — doubling as atmospheric texture and geographic context.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#f6f6f8` | `--color-paper-white` | Page background canvas |
| Card White | `#ffffff` | `--color-card-white` | Card surfaces, elevated panels, customer logo strips |
| Deep Ink | `#011821` | `--color-deep-ink` | Primary text, hero headlines, logo wordmark |
| Carbon | `#12161e` | `--color-carbon` | Secondary headings, nav links, icon strokes |
| Slate | `#7c7f88` | `--color-slate` | Muted body copy, helper text, paragraph copy |
| Mist | `#e3e4e8` | `--color-mist` | Hairline borders, dividers, subtle separators |
| Fog | `#a9acb6` | `--color-fog` | Disabled states, subtle icon strokes, caption text |
| Graphite | `#3b3e47` | `--color-graphite` | Code snippets, monospace backgrounds, dense UI fills |
| Deep Indigo | `#111a4a` | `--color-deep-indigo` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Ember Orange | `#ec652b` | `--color-ember-orange` | Featured accent — case-study card charts, high-attention highlights, brand warmth in an otherwise cold palette |
| Midnight Teal | `#023247` | `--color-midnight-teal` | Secondary headings, deep text on light surfaces, code block headers |
| Forest Teal | `#167e6c` | `--color-forest-teal` | Teal supporting accent for decorative details and low-frequency emphasis |
| Sky Blue | `#7ea7e9` | `--color-sky-blue` | Map dot pattern primary fill, illustration secondary tone |
| Pale Cyan | `#c1e8ef` | `--color-pale-cyan` | Pill badge backgrounds, soft wash fills, map dot tint |
| Mint | `#44b48b` | `--color-mint` | Green supporting accent for decorative details and low-frequency emphasis |
| Lavender | `#9f7aee` | `--color-lavender` | Map gradient midpoint, illustration secondary |

## Tokens — Typography

### SuisseIntl — Primary brand typeface — a Swiss neo-grotesque used for all UI text, headlines, body, and nav. Weight 300 at 60px hero size is the signature: whispers authority instead of shouting it. Negative letter-spacing tightens as size grows (-0.03em at 60px, -0.01em at 20px, normal at 14px and below). The 'salt' 2 feature setting enables stylistic alternates that give the type a distinctive, slightly humanist character within a Swiss skeleton. · `--font-suisseintl`
- **Substitute:** Inter or GT America for the geometric structure; the 'salt' alternates are non-replicable
- **Weights:** 300, 400, 500, 600
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 20px, 24px, 28px, 40px, 48px, 52px, 60px
- **Line height:** 1.00–1.50 (tightens with size: 1.50 at body, 1.10 at display)
- **Letter spacing:** -1.8px at 60px, -1.56px at 52px, -1.44px at 48px, -0.8px at 40px, -0.56px at 28px, -0.48px at 24px, -0.2px at 20px, -0.18px at 18px, normal at 16px and below
- **OpenType features:** `'salt' 2`
- **Role:** Primary brand typeface — a Swiss neo-grotesque used for all UI text, headlines, body, and nav. Weight 300 at 60px hero size is the signature: whispers authority instead of shouting it. Negative letter-spacing tightens as size grows (-0.03em at 60px, -0.01em at 20px, normal at 14px and below). The 'salt' 2 feature setting enables stylistic alternates that give the type a distinctive, slightly humanist character within a Swiss skeleton.

### SFMono — Secondary mono — inline code references, API call snippets, technical metadata. Appears inside cards and feature blocks at 10–12px. The 'cv11' feature setting selects character variant 11 (a single-story 'a' style). · `--font-sfmono`
- **Substitute:** JetBrains Mono or IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px
- **Line height:** 1.50
- **OpenType features:** `'cv11', 'salt' 2`
- **Role:** Secondary mono — inline code references, API call snippets, technical metadata. Appears inside cards and feature blocks at 10–12px. The 'cv11' feature setting selects character variant 11 (a single-story 'a' style).

### SuisseIntlMono — Branded mono for badges, section labels (e.g. 'TRUSTED AT SCALE', 'DEVELOPER FIRST'), and uppercase category tags. Pairs with SuisseIntl to keep the mono family visually consistent with the proportional text. · `--font-suisseintlmono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px
- **Line height:** 1.50
- **OpenType features:** `'cv11', 'salt' 2`
- **Role:** Branded mono for badges, section labels (e.g. 'TRUSTED AT SCALE', 'DEVELOPER FIRST'), and uppercase category tags. Pairs with SuisseIntl to keep the mono family visually consistent with the proportional text.

### Inter — Fallback / system text in certain blocks. Used sparingly; SuisseIntl dominates. · `--font-inter`
- **Substitute:** System UI sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 16px, 20px, 24px
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.0300em, -0.0200em
- **OpenType features:** `'cv11'`
- **Role:** Fallback / system text in certain blocks. Used sparingly; SuisseIntl dominates.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| body-lg | 18px | 1.43 | -0.18px | `--text-body-lg` |
| subheading | 20px | 1.38 | -0.2px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.48px | `--text-heading-sm` |
| heading | 28px | 1.3 | -0.56px | `--text-heading` |
| heading-lg | 40px | 1.1 | -0.8px | `--text-heading-lg` |
| display | 60px | 1.1 | -1.8px | `--text-display` |

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
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 100 | 100px | `--spacing-100` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 8px |
| links | 8px |
| badges | 9999px |
| inputs | 8px |
| buttons | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(17, 26, 74, 0.1) 0px 1px 3px 0px, rgba(17, 26, 74, 0...` | `--shadow-subtle` |
| subtle-2 | `rgba(87, 90, 100, 0.12) 0px 0px 0px 1px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset` | `--shadow-subtle-3` |
| xl | `rgba(0, 0, 0, 0.02) 0px 40px 32px 0px, rgba(0, 0, 0, 0.03...` | `--shadow-xl` |
| sm | `rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0...` | `--shadow-sm` |
| subtle-4 | `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgb(255, 255, 255) 0p...` | `--shadow-subtle-4` |
| subtle-5 | `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` | `--shadow-subtle-5` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 12px

## Components

### Primary Filled Button
**Role:** Primary call-to-action (Sign up, Get started)

Background #111a4a (Deep Indigo), text #ffffff, 8px radius, 12px 20px padding, SuisseIntl 500 at 14px. No visible border; the blue-tinted shadow (rgba 17,26,74 0.1) provides the only depth. Includes a right-arrow glyph (→) after the label, 14px, #ffffff at 80% opacity.

### Ghost / Arrow Link Button
**Role:** Secondary action (Documentation, Learn about our bank)

Transparent background, text #011821 (Deep Ink), 8px radius, 12px 16px padding, SuisseIntl 500 at 14px. 1px solid #e3e4e8 border. Includes a right-chevron (>) glyph. Hover darkens text to #111a4a.

### Section Pill Badge
**Role:** Category/section label (TRUSTED AT SCALE, DEVELOPER FIRST)

Background #c1e8ef (Pale Cyan), text #167e6c (Forest Teal), 9999px radius (fully pill-shaped), 6px 12px padding, SuisseIntlMono 400 at 11px, uppercase, letter-spacing 0.5px. Appears above section headlines as a quiet signpost.

### Financial Data Card
**Role:** Hero / feature mockup — visual storytelling device

White card (#ffffff), 8px radius, 24px padding, blue-tinted shadow stack. Contains: an account header (SuisseIntl 500 14px #011821 with small flag icon), a balance line (SuisseIntl 300 28px #011821, tracking -0.56px), and optional subtext (SuisseIntlMono 400 10px #7c7f88). A thin #e3e4e8 divider separates the header from the balance. These cards are the site's primary illustration device — they replace product photography.

### Case Study Accent Card
**Role:** Featured customer proof (Brex, etc.)

White outer card, 8px radius, blue-tinted shadow, 32px padding. Contains a smaller inner card with #ec652b (Ember Orange) fill at 8px radius — the only place on the page where saturated orange appears at scale. The orange card holds a sparkline chart (white stroke) and balance figure in white. The orange is rationed: one card per case study, nowhere else.

### Customer Logo Strip
**Role:** Social proof — 'trusted by' row

White card, 8px radius, 1px #e3e4e8 border (no shadow on the strip itself), 32px vertical padding. Logos are grayscale (#12161 or #7c7f88) at uniform 20–24px height, spaced with 48px column gap. The strip is contained, never full-bleed.

### Navigation Bar
**Role:** Top-level site navigation

Transparent background, 20px vertical padding, sits on the Paper White canvas. Wordmark left in Deep Ink #011821, SuisseIntl 500 18px. Nav links in Carbon #12161, SuisseIntl 400 14px. Right-side actions: 'Sign in' as ghost link, 'Get started' as a Primary Filled Button. No visible nav background or shadow.

### API Code Snippet Block
**Role:** Developer-facing content / inline documentation

Transparent or Graphite #3b3e47 background, 8px radius, 16px padding. SFMono 400 10px, text in #c1e8ef (Pale Cyan) for syntax. Appears inside Financial Data Cards to show the API call alongside the financial result — reinforcing the developer-first positioning.

### World Map Dot Pattern
**Role:** Atmospheric background motif

Full-bleed decorative layer: a regular grid of small filled circles (~2px diameter) arranged to form a world map. Dots are tinted with a 6-stop linear gradient (orange → purple → blue → cyan → green → yellow) running diagonally at 125deg. Dot density varies — denser over landmasses, sparser over oceans — creating the halftone effect. This is the page's signature visual; it appears in the hero, behind section text, and at the foot of pages.

### Feature Icon
**Role:** Small inline icon in feature lists and cards

Circular or square 24px icon containers with a fill icon at 16px in #111a4a (Deep Indigo). Used for bullet-style feature lists (e.g. 'Bank Accounts', 'Domestic Payments'). Background often #f6f6f8 or transparent.

### Block Quote / Testimonial
**Role:** Customer quote card

Left-aligned text, SuisseIntl 400 18px in #011821, preceded by a large opening quotation mark (#a9acb6, 40px, SuisseIntl 300). Attribution line below in SuisseIntl 400 14px #7c7f88. No card wrapper — quotes sit directly on the Paper White canvas.

### Section Headline Pair
**Role:** Section-level heading pattern

Two-tone headline: first phrase in #011821 Deep Ink, second phrase in #a9acb6 Fog (the gray-on-gray fade creates the 'continuation' effect seen on 'Moving hundreds of billions a month for the world's most sophisticated tech companies and financial institutions'). SuisseIntl 300, 40px, tracking -0.8px.

## Do's and Don'ts

### Do
- Use #f6f6f8 as the page background; use #ffffff only for card surfaces — never invert this hierarchy.
- Set all button and card radii to 8px; use 9999px exclusively for pill badges and tags.
- Reach for SuisseIntl weight 300 at 40–60px for headlines; tighten tracking to -0.02em at 40px and -0.03em at 60px and above.
- Apply the blue-tinted shadow stack (rgba 17,26,74 0.1) to every elevated card so elevation reads as on-brand.
- Reserve #ec652b Ember Orange for a single accent card per case study — ration it; never use it for buttons, links, or backgrounds.
- Use the Forest Teal / Pale Cyan pill badge (#c1e8ef bg, #167e6c text) as the only section-label pattern.
- Let the halftone dot world map breathe as a full-bleed background motif — pair it with ample white space and never overlay busy content on the densest parts of the map.

### Don't
- Do not use pure #ffffff as a page background; the Paper White #f6f6f8 canvas is what makes the design feel intentional rather than blank.
- Do not fill buttons with Deep Ink #011821 — that is the text color. The brand button color is Deep Indigo #111a4a.
- Do not introduce a second accent color alongside Ember Orange; the page is built around one chromatic accent at a time.
- Do not set hero headlines in weight 600 or above; weight 300 is the signature — bold headlines break the engineering-precision feel.
- Do not use 0px or 4px radii for cards or buttons; the consistent 8px radius is a load-bearing design choice.
- Do not add drop shadows in pure black (rgba 0,0,0); every shadow must carry the blue tint (rgba 17,26,74) to stay on-brand.
- Do not place photographs or lifestyle imagery as primary visuals — the site's visual language is UI-card mockups and the halftone map, not photography.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f6f6f8` | Full-page background; the only color filling the page |
| 1 | Card | `#ffffff` | All content surfaces, logo cards, data cards, nav bar |
| 2 | Elevated | `#ffffff` | Hovered cards, feature mockups; distinguished from base by blue-tinted shadow rather than color shift |

## Elevation

- **Card / Data panel:** `rgba(17, 26, 74, 0.1) 0px 1px 3px 0px, rgba(17, 26, 74, 0.05) 0px 1px 0px 0px, inset rgba(255, 255, 255, 0.5) 0px 1px 0px 0px, inset rgba(255, 255, 255, 0.5) 0px 1px 4px 0px`
- **Nav / Button hairline:** `rgba(87, 90, 100, 0.12) 0px 0px 0px 1px`
- **Floating card / mockup:** `rgba(0, 0, 0, 0.02) 0px 40px 32px 0px, rgba(0, 0, 0, 0.03) 0px 22px 18px 0px, rgba(0, 0, 0, 0.03) 0px 12px 10px 0px, rgba(0, 0, 0, 0.04) 0px 7px 5px 0px, rgba(0, 0, 0, 0.07) 0px 3px 2px 0px`
- **Hovered button:** `rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px`

## Imagery

The site has no traditional photography. Visual storytelling is done through two devices: (1) the halftone dot world map, a full-bleed decorative background made of small colored circles forming continents, tinted with a 6-stop diagonal gradient (orange → purple → blue → cyan → green → yellow); and (2) UI mockup cards — financial data panels, API code snippets, and sparkline charts rendered as if they were real product screens. Case-study sections pair a customer's brand color (e.g. Brex orange) as a single accent fill inside a white card. Icons are small, filled, and indigo (#111a4a) at 16px inside 24px containers. The overall visual density is low — the map and cards do the work, the surrounding space does the rest.

## Layout

Max-width 1200px centered content, with full-bleed background layers. The hero is a two-column split: left holds the headline, subhead, and dual CTA; right holds a floating Financial Data Card overlapping a secondary code snippet card, both with heavy blue-tinted drop shadows. Subsequent sections alternate between contained text blocks and wide visual bands. The 'Trusted at Scale' section uses a left-aligned text block beside a full-height halftone map background, with a contained customer-logo card sitting at the bottom of the section. Case-study blocks are 2-column: text left, mockup card right. Section gaps are 80px. Navigation is a transparent top bar with no background fill. The page never uses sidebar navigation or mega-menus — all nav is flat and top-aligned.

## Gradient System

Two gradient patterns define the brand's color language. The World Map Gradient is a 6-stop diagonal: linear-gradient(125deg, #d65620 0%, #9f7aee 14%, #4575cd 32%, #71d2f0 50%, #44b48b 68%, #f4df69 85%) — used exclusively on the halftone dot map to tint landmasses across warm-to-cool-to-warm spectrum. The Hero Bloom Gradient is a radial: radial-gradient(29.88% 184.91% at 6.55% -48.11%, #771c86 0%, #111a4a 100%) — used behind hero cards for an off-screen magenta-to-indigo wash. These are the only two gradients in the system; never introduce a third.

## Map Dot Pattern Specification

The halftone map is built on a 6px dot grid. Dot diameter: 1.5–2px. Grid spacing: 6–8px. Dot opacity varies by geographic region (land = 0.7–1.0, water = 0–0.2). Each dot's fill is sampled from the World Map Gradient based on its position on the 125deg diagonal. The pattern bleeds off all four edges of its container; the map shape is never cropped to a bounding box.

## Agent Prompt Guide

Quick Color Reference:
- text: #011821
- background: #f6f6f8
- card: #ffffff
- border: #e3e4e8
- muted text: #7c7f88
- brand / primary action: no distinct CTA color
- accent: #ec652b (rationed — one card per case study)

Example Component Prompts:
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

2. Create a section label pill badge: Pale Cyan background (#c1e8ef), Forest Teal text (#167e6c), 9999px radius, 6px 12px padding, SuisseIntlMono 400 11px uppercase, letter-spacing 0.5px. Place it directly above a section headline.

3. Create a case-study section: two-column layout. Left column has a 28px SuisseIntl weight 300 headline (#011821) with body copy in 16px weight 400 #7c7f88. Right column holds a white card (8px radius, 32px padding, floating multi-stop drop shadow) containing a smaller inner card filled with #ec652b Ember Orange (8px radius) showing a white sparkline and a balance figure in white SuisseIntl 300 24px.

4. Create a customer logo strip: white card, 8px radius, 1px #e3e4e8 border (no shadow), 32px vertical padding, logos rendered in grayscale (#12161e or #7c7f88) at 20–24px height with 48px column gap. Container max-width 1200px centered.


## Similar Brands

- **Mercury** — Same restrained near-monochrome palette with a single restrained brand color, Swiss-style neo-grotesque typography, and financial-data-card-as-hero pattern
- **Ramp** — Similar white-canvas fintech aesthetic with pill badges, contained customer logo strips, and card-based feature mockups
- **Plaid** — Same API-first banking positioning and developer-targeted code snippets rendered as inline UI; similar halftone/geometric background patterns
- **Stripe** — Same Swiss-precise typography approach (Suisse/Suisse Intl family), tight letter-spacing at large sizes, and gradient-backed hero treatments
- **Wise** — Similar globally-positioned fintech with map-backed hero motifs and a clean indigo-on-white typographic system

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #f6f6f8;
  --color-card-white: #ffffff;
  --color-deep-ink: #011821;
  --color-carbon: #12161e;
  --color-slate: #7c7f88;
  --color-mist: #e3e4e8;
  --color-fog: #a9acb6;
  --color-graphite: #3b3e47;
  --color-deep-indigo: #111a4a;
  --color-ember-orange: #ec652b;
  --color-midnight-teal: #023247;
  --color-forest-teal: #167e6c;
  --color-sky-blue: #7ea7e9;
  --color-pale-cyan: #c1e8ef;
  --color-mint: #44b48b;
  --color-lavender: #9f7aee;

  /* Typography — Font Families */
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sfmono: 'SFMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: -0.18px;
  --text-subheading: 20px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.3;
  --tracking-heading: -0.56px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.8px;
  --text-display: 60px;
  --leading-display: 1.1;
  --tracking-display: -1.8px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

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
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 8px;
  --radius-links: 8px;
  --radius-badges: 9999px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;

  /* Shadows */
  --shadow-subtle: rgba(17, 26, 74, 0.1) 0px 1px 3px 0px, rgba(17, 26, 74, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.5) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset;
  --shadow-subtle-2: rgba(87, 90, 100, 0.12) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 40px 32px 0px, rgba(0, 0, 0, 0.03) 0px 22px 18px 0px, rgba(0, 0, 0, 0.03) 0px 12px 10px 0px, rgba(0, 0, 0, 0.04) 0px 7px 5px 0px, rgba(0, 0, 0, 0.07) 0px 3px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-canvas: #f6f6f8;
  --surface-card: #ffffff;
  --surface-elevated: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #f6f6f8;
  --color-card-white: #ffffff;
  --color-deep-ink: #011821;
  --color-carbon: #12161e;
  --color-slate: #7c7f88;
  --color-mist: #e3e4e8;
  --color-fog: #a9acb6;
  --color-graphite: #3b3e47;
  --color-deep-indigo: #111a4a;
  --color-ember-orange: #ec652b;
  --color-midnight-teal: #023247;
  --color-forest-teal: #167e6c;
  --color-sky-blue: #7ea7e9;
  --color-pale-cyan: #c1e8ef;
  --color-mint: #44b48b;
  --color-lavender: #9f7aee;

  /* Typography */
  --font-suisseintl: 'SuisseIntl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sfmono: 'SFMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-suisseintlmono: 'SuisseIntlMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: -0.18px;
  --text-subheading: 20px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.48px;
  --text-heading: 28px;
  --leading-heading: 1.3;
  --tracking-heading: -0.56px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.8px;
  --text-display: 60px;
  --leading-display: 1.1;
  --tracking-display: -1.8px;

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
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Shadows */
  --shadow-subtle: rgba(17, 26, 74, 0.1) 0px 1px 3px 0px, rgba(17, 26, 74, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.5) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset;
  --shadow-subtle-2: rgba(87, 90, 100, 0.12) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 40px 32px 0px, rgba(0, 0, 0, 0.03) 0px 22px 18px 0px, rgba(0, 0, 0, 0.03) 0px 12px 10px 0px, rgba(0, 0, 0, 0.04) 0px 7px 5px 0px, rgba(0, 0, 0, 0.07) 0px 3px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}
```