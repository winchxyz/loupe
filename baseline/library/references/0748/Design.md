# Linear — Style Reference
> midnight command deck — acid-lime status light on obsidian instrument panel

**Theme:** dark

Linear is a midnight command deck for product teams: a near-black canvas, razor-thin type, and one acid-lime accent that cuts through the dark like a status light. The interface is deliberately quiet — the accent color is rationed to a single primary action per screen, with everything else living in a tight monochrome scale of cool grays. Cards gain presence through 1px inset borders and soft drop shadows rather than fills, and the entire surface stack stays in a narrow 4-step range from canvas to elevated. Typography is Inter Variable at 510/590 with custom stylistic sets, producing dense, instrument-panel density where every pixel earns its place. The voice is engineering-native: Berkeley Mono for code, tight tracking on all display sizes, and a refusal to decorate what data can already say.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Onyx | `#08090a` | `--color-onyx` | Page background, primary canvas, deepest surface |
| Charcoal | `#0f1011` | `--color-charcoal` | Navigation bar, card base, elevated surface level 1 |
| Obsidian | `#161718` | `--color-obsidian` | Deepest card backgrounds, modal overlays, deepest elevation |
| Graphite | `#23252a` | `--color-graphite` | Hairline borders, dividers, card inset edges, input outlines |
| Iron | `#323334` | `--color-iron` | Medium borders, secondary dividers, subtle separators |
| Steel | `#383b3f` | `--color-steel` | Input field backgrounds, slightly raised surface, soft borders |
| Slate | `#62666d` | `--color-slate` | Muted text, placeholder text, inactive nav, low-emphasis borders — the workhorse gray |
| Fog | `#8a8f98` | `--color-fog` | Secondary text, captions, metadata, icon stroke at rest |
| Mist | `#d0d6e0` | `--color-mist` | Tertiary text, light icon strokes, subtle borders on dark surfaces |
| Platinum | `#e5e5e6` | `--color-platinum` | High-contrast borders, inverted surface fills, strong separators |
| Snow | `#f7f8f8` | `--color-snow` | Primary text, primary icons, high-contrast UI elements — near-white but not pure |
| Acid Lime | `#e4f222` | `--color-acid-lime` | Green action color for filled buttons, selected navigation states, and focused conversion moments |
| Indigo | `#5e6ad2` | `--color-indigo` | Icon accent, link emphasis, brand surface washes, decorative indigo that signals Linear identity in secondary contexts |
| Emerald | `#27a644` | `--color-emerald` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Crimson | `#eb5757` | `--color-crimson` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Cyan | `#02b8cc` | `--color-cyan` | Teal wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Inter Variable — All UI text — navigation, headings, body, buttons, badges, inputs. The custom weight 510 sits between Regular and Medium for that signature Linear "precise but not bold" voice; weight 590 is used sparingly for emphasis. Weight 300 on display sizes is an anti-loud choice: the headlines whisper authority through restraint rather than shout with 700+. · `--font-inter-variable`
- **Substitute:** Inter (Google Fonts), or General Sans
- **Weights:** 300, 400, 510, 590
- **Sizes:** 10, 11, 12, 13, 14, 15, 16, 17, 20, 24, 32, 48, 64, 72
- **Line height:** 1.00, 1.13, 1.20, 1.33, 1.40, 1.47, 1.50, 1.60, 1.71, 2.00, 2.46, 2.75
- **Letter spacing:** -0.0220em at 72px (-1.58px), -0.0150em at 64px (-0.96px), -0.0130em at 48px (-0.624px), -0.0120em at 32px (-0.384px), -0.0110em at 24px (-0.264px), -0.0100em at 20px (-0.2px)
- **OpenType features:** `"cv01" on, "ss03" on`
- **Role:** All UI text — navigation, headings, body, buttons, badges, inputs. The custom weight 510 sits between Regular and Medium for that signature Linear "precise but not bold" voice; weight 590 is used sparingly for emphasis. Weight 300 on display sizes is an anti-loud choice: the headlines whisper authority through restraint rather than shout with 700+.

### Berkeley Mono — Code, IDs, keyboard shortcuts, technical metadata (issue IDs like ENG-2703, code references in agent prompts). Its presence signals "this is a tool, not a marketing site" — the monospace voice only speaks where precision matters. · `--font-berkeley-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12, 13, 14
- **Line height:** 1.30, 1.40, 1.50, 1.71
- **Letter spacing:** -0.0150em
- **Role:** Code, IDs, keyboard shortcuts, technical metadata (issue IDs like ENG-2703, code references in agent prompts). Its presence signals "this is a tool, not a marketing site" — the monospace voice only speaks where precision matters.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| micro-sm | 12px | 1.4 | — | `--text-micro-sm` |
| caption | 14px | 1.71 | — | `--text-caption` |
| body-lg | 17px | 1.6 | — | `--text-body-lg` |
| subheading | 20px | 1.47 | -0.2px | `--text-subheading` |
| heading-sm | 24px | 1.4 | -0.264px | `--text-heading-sm` |
| heading | 32px | 1.33 | -0.384px | `--text-heading` |
| heading-lg | 48px | 1.2 | -0.624px | `--text-heading-lg` |
| display-sm | 64px | 1.13 | -0.96px | `--text-display-sm` |
| display | 72px | 1 | -1.58px | `--text-display` |

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
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 6px |
| cards | 12px |
| pills | 9999px |
| badges | 2px |
| inputs | 6px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px` | `--shadow-sm` |
| md | `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset` | `--shadow-md` |
| subtle | `rgb(35, 37, 42) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) ...` | `--shadow-subtle-3` |
| xl | `rgba(8, 9, 10, 0.6) 0px 4px 32px 0px` | `--shadow-xl` |
| subtle-4 | `rgba(0, 0, 0, 0.1) 0px 0px 0px 2px` | `--shadow-subtle-4` |
| subtle-5 | `rgba(0, 0, 0, 0.33) 0px 0px 0px 1px` | `--shadow-subtle-5` |
| subtle-6 | `rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255...` | `--shadow-subtle-6` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 24-32px
- **Element gap:** 8-12px

## Components

### Primary Lime CTA
**Role:** The single most important action on any page

Filled with #e4f222 Acid Lime, text in #030404 (near-black) for AAA contrast, weight 510 Inter, 14px, padding 8px 16px, border-radius 6px, subtle 4-layer depth shadow. The lime is the only chromatic fill in the entire system — it exists to be impossible to miss.

### Ghost Nav Button
**Role:** Text-only navigation links in the top bar

No background, text in #8a8f98 Fog at 14px weight 400, no border, padding 8px 12px. On hover, text shifts to #f7f8f8 Snow. Zero visual weight — the nav is a whisper, the CTA is the shout.

### Sign Up Pill Button
**Role:** Outlined registration action in nav

White (#f7f8f8) 1px border, transparent background, #f7f8f8 text at 14px weight 400, padding 6px 14px, border-radius 9999px. The pill geometry is the only fully rounded element — it stands apart from all 6px/12px rectilinear components.

### Product Screenshot Card
**Role:** Large product UI mockups in hero and feature sections

Background #0f1011 Charcoal, border-radius 12px, inset 1px border in rgb(35, 37, 42) Graphite, 2px 4px 4px rgba(0,0,0,0.4) drop shadow. Internal product UI uses its own micro-surface system (#161718 for issue rows, #383b3f for inputs). The card frames the screenshot as a tangible device sitting on the dark canvas.

### Announcement Banner
**Role:** Compact text link in hero (e.g. "Issue tracking is dead")

Transparent background, inline layout, small #5e6ad2 Indigo dot (4px) + text in #d0d6e0 Mist at 13px weight 400, followed by #8a8f98 link text and → arrow. Sits below the hero subtext. Zero chrome — it is a footnote that happens to be a link.

### Customer Logo Strip
**Role:** Row of client/partner logos in the trust band

Logos rendered in #8a8f98 Fog / white at reduced opacity, evenly spaced in a single horizontal row with ~60px gaps. No container, no background, no dividers. The logos float directly on the Onyx canvas.

### Feature Split Section
**Role:** Two-column text + product UI sections

Left column: 48px heading-lg Inter weight 400, #f7f8f8, tracking -0.624px, followed by 17px body-lg in #8a8f98. Right column: Product Screenshot Card. Generous 80-120px vertical gap between sections. The asymmetry is deliberate — text never sits above the product, it always leads or follows.

### Issue Card (Kanban)
**Role:** Individual issue rows in product UI mockups

Background #161718 Obsidian, 1px border in #23252a Graphite, border-radius 6px, padding 12px 16px. Issue ID in Berkeley Mono (ENG-2703), title in Inter 14px weight 510, status pill in lower right. Tight, instrument-panel density.

### Status Pill Badge
**Role:** In Progress / Backlog / Done indicators

Inline label, no border, 2px border-radius, 11-12px Inter weight 510, paired with a 6px colored dot (#eb5757 Crimson for In Progress, #62666d for Backlog, #27a644 for Done). Padding 2px 8px. Text color matches dot color family at reduced opacity or uses #d0d6e0 Mist.

### Input Field
**Role:** Form inputs, search, AI prompt fields

Background #383b3f Steel, border-radius 6px, no visible border at rest, 1px inset shadow rgba(0,0,0,0.2). Text in #f7f8f8, placeholder in #62666d Slate. Padding 8px 12px. Focus state: subtle inner ring in #5e6ad2 Indigo.

### Top Navigation Bar
**Role:** Sticky header across all pages

Background #0f1011 Charcoal, height ~56px, full-width, no visible bottom border (or 1px in #23252a if at edge). Logo left (Linear mark + wordmark in #f7f8f8), nav links center, auth actions right. Padding 0 24px.

### Avatar/Profile Indicator
**Role:** User presence dots and profile chips in product UI

6-8px circular dot, filled with #02b8cc Cyan or #27a644 Emerald for status. Profile chips are 24px circles with 2px border in #23252a, text label 12px in #d0d6e0. Always paired with Berkeley Mono for IDs.

## Do's and Don'ts

### Do
- Use #e4f222 Acid Lime exclusively for one filled primary action per screen — it is rationed, never decorative
- Apply Inter Variable weight 510 for UI emphasis and weight 400 for body — the 510/400 split is the system's voice
- Set tracking to -0.0220em at 72px, scaling proportionally down: the tighter the size, the less the negative tracking
- Use #5e6ad2 Indigo for icon accents, link emphasis, and brand surface washes — not for buttons or large fills
- Layer card depth with inset 1px border in #23252a plus rgba(0,0,0,0.4) drop shadow — never rely on fill alone for elevation
- Reach for Berkeley Mono for all IDs, code references, and keyboard shortcuts — it signals technical context instantly
- Keep vertical rhythm at 80-120px between major sections; use 8-12px gaps for intra-component spacing

### Don't
- Never use #e4f222 Lime for anything other than the single primary CTA — not for borders, not for hover states, not for highlights
- Don't introduce new accent colors — the palette is Lime + Indigo + semantic (Emerald/Crimson/Cyan), nothing else
- Don't use weight 700+ in Inter Variable — the system caps at 590, and weight 300 exists for display restraint
- Don't add gradients to UI surfaces — the only gradient is the black-to-mist banner on scroll fade, and it appears once
- Don't use bright fills on cards — product cards stay in the #161718/#0f1011 range with border-defined edges
- Don't use system fonts as a substitute for Inter — the cv01 and ss03 features are part of the identity, not optional polish
- Don't lighten the canvas — #08090a is near-black but not #000000; the slight warmth keeps it from feeling harsh

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#08090a` | Page background, hero sections, the void that everything floats on |
| 1 | Nav | `#0f1011` | Top navigation bar, sticky header surface |
| 2 | Card | `#161718` | Product UI card backgrounds, elevated content blocks |
| 3 | Input | `#383b3f` | Form input fields, search bars, slightly lifted interactive surfaces |

## Elevation

- **Product cards:** `0px 2px 4px 0px rgba(0, 0, 0, 0.4)`
- **Product cards (inset border):** `inset 0px 0px 0px 1px rgb(35, 37, 42)`
- **Inputs and field outlines:** `0px 0px 0px 1px rgba(0, 0, 0, 0.2)`
- **Buttons and nav (depth stack):** `0px 5px 2px 0px rgba(0, 0, 0, 0.01), 0px 3px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)`
- **Floating overlays and menus:** `0px 4px 32px 0px rgba(8, 9, 10, 0.6)`

## Imagery

Imagery is entirely product-screenshot-driven: full-bleed UI mockups of the Linear app rendered in the same dark palette as the marketing site, creating a seamless visual loop where the product IS the hero. Customer logos appear as monochrome wordmarks in a single trust band. No lifestyle photography, no abstract 3D renders, no illustration. The only non-product visual is the small Indigo status dot in the announcement banner. Product screenshots have 12px radius, 1px inset border, and a soft 4px drop shadow — they read as physical devices sitting on the dark canvas rather than flat graphics.

## Layout

Full-bleed dark canvas at #08090a with max-width 1200px content containers centered. Hero is a two-block vertical stack: large 64-72px headline (weight 300) over single-line subtext, with a compact announcement banner below, followed by a full-width product screenshot card that bleeds close to the container edges. The page alternates between text-left/product-right and product-left/text-right split sections with 80-120px vertical gaps. A customer logo strip sits as a quiet horizontal band between hero and first feature section — no container, just floating logos. The navigation is a single 56px sticky top bar. The overall density is compact and instrument-panel: the page does not breathe with excessive whitespace, it moves through sections with purposeful vertical rhythm.

## Agent Prompt Guide

Quick Color Reference:
- text: #f7f8f8 (primary), #8a8f98 (secondary), #62666d (muted)
- background: #08090a (canvas), #0f1011 (nav/card), #161718 (deep card)
- border: #23252a (hairline), #383b3f (input)
- accent: #5e6ad2 (indigo icon/link)
- primary action: #e4f222 (filled action)

Example Component Prompts:

1. Create a Primary Action Button: #e4f222 background, #08090a text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. Product Screenshot Card: background #0f1011, border-radius 12px, inset 1px border in #23252a, drop shadow 0 2px 4px rgba(0,0,0,0.4). Internal product rows on #161718 with 1px #23252a borders, 6px radius, 12px 16px padding.

3. Top Navigation: full-width bar at 56px height, background #0f1011, padding 0 24px. Logo left (#f7f8f8). Nav links center in #8a8f98 Fog at 14px weight 400, hover to #f7f8f8. Sign up button right: outlined pill with 1px #f7f8f8 border, border-radius 9999px, padding 6px 14px.

4. Feature Split Section: two-column grid, gap 64px. Left: 48px heading Inter weight 400, #f7f8f8, tracking -0.624px. Right: Product Screenshot Card. Vertical section gap 100px.

5. Status Badge: inline-flex with 6px dot (#eb5757 Crimson or #27a644 Emerald) + label text in #d0d6e0 Mist at 12px Inter weight 510, 2px 8px padding, 2px border-radius.

## Similar Brands

- **Vercel** — Same near-black canvas, Inter Variable typography, single high-contrast accent color (Vercel's white-on-black geometry vs Linear's acid lime), and product-screenshot-driven hero sections with minimal decoration
- **Cursor** — Identical dark instrument-panel aesthetic, compact density, code-editor-influenced typography, and the "tool for engineers" voice that uses mono fonts and tight tracking
- **Raycast** — Dark-mode product UI with one signature accent color, tight 4px spacing grid, and the same approach of using inset borders and subtle shadows rather than fills for card elevation
- **Arc Browser** — Dark canvas with selective high-saturation accents, generous use of Inter at custom weights, and product-screenshot-as-hero composition
- **Stripe** — Though lighter, shares the custom-variable-font approach, tight tracking on display sizes, and the discipline of one accent color doing all the heavy lifting

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-onyx: #08090a;
  --color-charcoal: #0f1011;
  --color-obsidian: #161718;
  --color-graphite: #23252a;
  --color-iron: #323334;
  --color-steel: #383b3f;
  --color-slate: #62666d;
  --color-fog: #8a8f98;
  --color-mist: #d0d6e0;
  --color-platinum: #e5e5e6;
  --color-snow: #f7f8f8;
  --color-acid-lime: #e4f222;
  --color-indigo: #5e6ad2;
  --color-emerald: #27a644;
  --color-crimson: #eb5757;
  --color-cyan: #02b8cc;

  /* Typography — Font Families */
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-berkeley-mono: 'Berkeley Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-micro-sm: 12px;
  --leading-micro-sm: 1.4;
  --text-caption: 14px;
  --leading-caption: 1.71;
  --text-body-lg: 17px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.47;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.264px;
  --text-heading: 32px;
  --leading-heading: 1.33;
  --tracking-heading: -0.384px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.624px;
  --text-display-sm: 64px;
  --leading-display-sm: 1.13;
  --tracking-display-sm: -0.96px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.58px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-w510: 510;
  --font-weight-w590: 590;

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
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 24-32px;
  --element-gap: 8-12px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 22px;
  --radius-full: 400px;
  --radius-full-2: 9999px;

  /* Named Radii */
  --radius-nav: 6px;
  --radius-cards: 12px;
  --radius-pills: 9999px;
  --radius-badges: 2px;
  --radius-inputs: 6px;
  --radius-buttons: 6px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px;
  --shadow-md: rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset;
  --shadow-subtle: rgb(35, 37, 42) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px;
  --shadow-xl: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px;
  --shadow-subtle-5: rgba(0, 0, 0, 0.33) 0px 0px 0px 1px;
  --shadow-subtle-6: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;

  /* Surfaces */
  --surface-canvas: #08090a;
  --surface-nav: #0f1011;
  --surface-card: #161718;
  --surface-input: #383b3f;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-onyx: #08090a;
  --color-charcoal: #0f1011;
  --color-obsidian: #161718;
  --color-graphite: #23252a;
  --color-iron: #323334;
  --color-steel: #383b3f;
  --color-slate: #62666d;
  --color-fog: #8a8f98;
  --color-mist: #d0d6e0;
  --color-platinum: #e5e5e6;
  --color-snow: #f7f8f8;
  --color-acid-lime: #e4f222;
  --color-indigo: #5e6ad2;
  --color-emerald: #27a644;
  --color-crimson: #eb5757;
  --color-cyan: #02b8cc;

  /* Typography */
  --font-inter-variable: 'Inter Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-berkeley-mono: 'Berkeley Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-micro-sm: 12px;
  --leading-micro-sm: 1.4;
  --text-caption: 14px;
  --leading-caption: 1.71;
  --text-body-lg: 17px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.47;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.264px;
  --text-heading: 32px;
  --leading-heading: 1.33;
  --tracking-heading: -0.384px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.624px;
  --text-display-sm: 64px;
  --leading-display-sm: 1.13;
  --tracking-display-sm: -0.96px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.58px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 22px;
  --radius-full: 400px;
  --radius-full-2: 9999px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px;
  --shadow-md: rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset;
  --shadow-subtle: rgb(35, 37, 42) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px;
  --shadow-xl: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px;
  --shadow-subtle-5: rgba(0, 0, 0, 0.33) 0px 0px 0px 1px;
  --shadow-subtle-6: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;
}
```