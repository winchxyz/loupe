# Resend — Style Reference
> Obsidian developer terminal — every surface reads like polished black glass under a focused beam of white type.

**Theme:** dark

Resend is a pure black command surface — the canvas is #000000 with near-zero colorfulness (1%), giving the entire interface the weight of polished obsidian. Headlines use a custom serif (Domaine) at display sizes with tight -0.01em tracking, while UI copy runs in Inter and monospaced code elements appear in CommitMono, creating a three-voice typographic hierarchy that signals dev tooling without decoration. Color appears almost exclusively as functional data punctuation: violet for code identity, blue for interactive borders, and a handful of vivid status colors (green, red, yellow, light blue) that function as email event indicators — never as decoration. The system uses subtle border-based elevation (1px hairlines at #292d30) rather than shadows, keeping all surfaces flush and matte on black.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Page canvas, card backgrounds — the dominant surface across every section |
| Graphite Rail | `#292d30` | `--color-graphite-rail` | Component borders, dividers, image frames — hairline structural separation on black |
| Smoke | `#464a4d` | `--color-smoke` | Subtle secondary borders and muted text-adjacent strokes |
| Ash | `#6c6c6c` | `--color-ash` | Tertiary text, badge labels, de-emphasized body content |
| Steel | `#6e727a` | `--color-steel` | Secondary body text, icon strokes at reduced opacity |
| Fog | `#a1a4a5` | `--color-fog` | Primary muted body text, icon fills, badge borders |
| Mist | `#abafb4` | `--color-mist` | Slightly brighter secondary UI text, active badge outlines |
| Frost | `#f0f0f0` | `--color-frost` | Primary content text — headings, body copy, nav labels — the single high-contrast text color on black |
| Pure White | `#ffffff` | `--color-pure-white` | Maximum-emphasis text, icon fills, active button labels |
| Electric Blue | `#3b9eff` | `--color-electric-blue` | Blue action color for filled buttons, selected navigation states, and focused conversion moments. |
| Resend Violet | `linear-gradient(to right bottom in oklab, rgb(146, 129, 247) 0%, rgb(154, 84, 220) 100%)` | `--color-resend-violet` | Code syntax highlights, email address text in product UI, decorative icon borders — the brand's signature hue, always used inside product surfaces rather than nav or shell; Email app icon gradient from violet to purple — product identity mark |
| Surface Lift | `linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3))` | `--color-surface-lift` | Subtle card-to-canvas gradient top — barely perceptible surface elevation on dark UI |
| Delivered Green | `#3ad389` | `--color-delivered-green` | Green decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Bounced Red | `#ff9592` | `--color-bounced-red` | Red decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Complained Yellow | `#ffca16` | `--color-complained-yellow` | Yellow decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Opened Blue | `#70b8ff` | `--color-opened-blue` | Blue decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |
| Clicked Lavender | `#baa7ff` | `--color-clicked-lavender` | Violet decorative accent for icons, marks, and small graphic details. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Inter — All UI chrome — nav, buttons, body copy, captions, links. The workhorse that disappears into the interface. 600 weight used for interactive emphasis, 400 for running text. · `--font-inter`
- **Substitute:** Inter (free via Google Fonts)
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 16px, 18px, 24px
- **Line height:** 1.33–1.60
- **Letter spacing:** normal
- **Role:** All UI chrome — nav, buttons, body copy, captions, links. The workhorse that disappears into the interface. 600 weight used for interactive emphasis, 400 for running text.

### Domaine — Display-only serif for the largest hero statements and section closers. Weight 400 at near-100px is anti-convention — most dev tools use grotesque sans at this scale, the serif creates authority through editorial restraint. Tightest tracking in the system. · `--font-domaine`
- **Substitute:** DM Serif Display, Playfair Display
- **Weights:** 400
- **Sizes:** 77px, 96px
- **Line height:** 1.00
- **Letter spacing:** -0.01em
- **OpenType features:** `"ss01", "ss04", "ss11"`
- **Role:** Display-only serif for the largest hero statements and section closers. Weight 400 at near-100px is anti-convention — most dev tools use grotesque sans at this scale, the serif creates authority through editorial restraint. Tightest tracking in the system.

### ABCFavorit — Section headings and subheadings. At 56px weight 400 with -0.05em tracking, punches well above its point size. At 14-20px used for feature labels and callouts. The custom geometric grotesque gives sharper corners than Inter, distinguishing marketing headings from UI copy. · `--font-abcfavorit`
- **Substitute:** ABC Favorit (commercial), Söhne, GT America
- **Weights:** 400, 500
- **Sizes:** 14px, 16px, 20px, 56px
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.05em at 56px; +0.025em at smaller display sizes
- **OpenType features:** `"ss01", "ss04", "ss11"; also "ss01", "ss03", "ss04"`
- **Role:** Section headings and subheadings. At 56px weight 400 with -0.05em tracking, punches well above its point size. At 14-20px used for feature labels and callouts. The custom geometric grotesque gives sharper corners than Inter, distinguishing marketing headings from UI copy.

### CommitMono — Code samples, badge labels, filename strings, and terminal-style inline snippets. Distinguishes developer content from prose at a glance — the monospace voice signals 'this is actual code', not metaphor. · `--font-commitmono`
- **Substitute:** JetBrains Mono, Fira Code
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.33–1.50
- **Letter spacing:** normal
- **Role:** Code samples, badge labels, filename strings, and terminal-style inline snippets. Distinguishes developer content from prose at a glance — the monospace voice signals 'this is actual code', not metaphor.

### Helvetica — Helvetica — detected in extracted data but not described by AI · `--font-helvetica`
- **Weights:** 400, 600, 700
- **Sizes:** 14px
- **Line height:** 1, 1.71
- **Role:** Helvetica — detected in extracted data but not described by AI

### -apple-system — -apple-system — detected in extracted data but not described by AI · `--font-apple-system`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.5, 1.55
- **OpenType features:** `"liga" 0`
- **Role:** -apple-system — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.6 | — | `--text-subheading` |
| heading-sm | 20px | 1.3 | — | `--text-heading-sm` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 56px | 1 | -2.8px | `--text-heading-lg` |
| display | 96px | 1 | -0.96px | `--text-display` |

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
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 104 | 104px | `--spacing-104` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 10px |
| cards | 16px |
| large | 24px |
| badges | 6px |
| modals | 16px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(176, 199, 217, 0.145) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgb(0, 0, 0) 0px 0px 0px 8px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0p...` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 32px
- **Element gap:** 16px

## Components

### Primary Outlined Action Button
**Role:** Main CTA — 'Get started' in nav and hero

Transparent background, 1px solid #3b9eff border, 8px radius, #ffffff text at Inter 14px weight 500. Padding: 1px all sides (tight fit to border). On dark canvas the electric blue ring is the single chromatic signal in the entire nav bar, drawing the eye to the only action that matters.

### Ghost Navigation Button
**Role:** Nav dropdowns — Features, Company, Resources, Help, Docs, AI

Transparent background, no visible border, #f0f0f0 at 71% opacity text, Inter 14px weight 400. Padding: 4px vertical, 0px horizontal. Chevron indicator appended. Zero radius. Fades into the black nav bar, deferring attention to the CTA.

### Ghost Text Link Button
**Role:** Secondary actions — Documentation, Log in, View on GitHub

No background, no border, #fcfdff at ~94% opacity, Inter 14px weight 400. Padding: 0. Used inline beside filled/outlined actions as the quieter alternative path.

### Muted Secondary Button
**Role:** Tertiary navigation links — Pricing

No background, no border, #a1a4a5 text, Inter 14px weight 400. Padding: 4px top/bottom. The lowest-contrast button in the system — visually recedes to a hint.

### Announcement Badge / Pill
**Role:** Inline announcement tag — 'Announcing Resend Forward'

Transparent background, 1px solid #292d30 border, 16px radius, #f0f0f0 text at Inter 14px weight 400. Small arrow glyph appended. Sits above hero headline as a notification-style entry point.

### Feature Card
**Role:** Product feature highlight panels in section grids

Background #000000 (or near-black gradient from #1b1b1b to #030303), 16px radius, 1px solid #292d30 border, 32px padding all sides. No box-shadow. Content: icon + heading (Inter 16-18px weight 600, #ffffff) + body (Inter 14px weight 400, #a1a4a5).

### Testimonial Card
**Role:** Social proof quote cards in horizontal scroll section

Background #000000, 16px radius, 1px solid #292d30 border, 32px padding. Quote body in Inter 14px weight 400 at #f0f0f0, attribution in #a1a4a5 at 12px. Avatar image at 32px rounded-full. No shadow — sits flush in dark scroll container.

### Code Snippet Block
**Role:** Inline product demo code panels in feature sections

Background near-black with 1px #292d30 border, 16px radius. CommitMono 14px weight 400. Keywords and identifiers in #9281f7 (Resend Violet), email addresses in #9281f7, strings in #f0f0f0. Filename tabs use Inter 12px #a1a4a5 with #3b9eff for active file color.

### Status Event Badge
**Role:** Email event row indicators in analytics product UI

No background, no border-radius. Icon + label text at 14px Inter weight 400. Delivered = #3ad389, Bounced = #ff9592, Complained = #ffca16, Opened = #70b8ff, Clicked = #baa7ff. These are the only vivid color uses in the entire product surface.

### Email App Icon
**Role:** Brand product mark shown in logo/hero sections

Rounded square with 24px radius, violet-to-purple gradient (linear-gradient from #9281f7 to #9a54dc in oklab colorspace). Envelope icon in white centered. Dark inner shadow creates depth. Represents the Resend email product identity.

### Navigation Bar
**Role:** Site-wide sticky top bar

Background #000000 with backdrop-filter blur(25px) for frosted glass behavior when content scrolls beneath. Height 59px. Left: Resend wordmark in white. Center: ghost nav buttons. Right: Log in ghost link + 'Get started' outlined blue CTA. 1px solid #292d30 bottom border separates from content.

### Logo / Partner Wordmark Strip
**Role:** Trust signal section — company logo grid

White SVG logos (#ffffff, 60-80% opacity) on black background. No cards or borders — logos float directly on canvas. Two rows, 6 columns. Caption text above in #a1a4a5 at Inter 14px.

## Do's and Don'ts

### Do
- Use #000000 as the default background for every section, card, and container — deviations must be justified by a visible elevation hierarchy via 1px #292d30 border.
- Apply Domaine weight 400 exclusively to hero display text (77-96px) and use ABCFavorit for section headings (56px) — never swap these roles.
- Reserve the six vivid status colors (#3ad389, #ff9592, #ffca16, #70b8ff, #baa7ff, #9281f7) strictly for product-UI data contexts such as email event rows or code syntax — never for decorative section backgrounds or nav elements.
- Use CommitMono for any code, filename, CLI snippet, or developer token — never Inter or ABCFavorit in code contexts.
- Keep button borders at 6px radius for action buttons and pill badges at 16px radius — maintain this distinction to separate call-to-action shape from tagging shape.
- Use #3b9eff only as the outlined border on the primary CTA button — this is the only chromatic color in the nav/shell and must remain singular.
- Set all card padding to 32px and maintain 1px solid #292d30 as the only border treatment — no shadow stacks, no color fills, no gradients on cards.

### Don't
- Never use a filled colored background for action buttons — the design uses outlined (#3b9eff border) or ghost (transparent) buttons exclusively. A filled blue or violet button breaks the matte black surface language.
- Never apply Domaine or ABCFavorit to UI chrome such as nav labels, badge text, or button copy — those belong exclusively to Inter.
- Never use more than one vivid status color in a non-product-UI context — the moment a page-level section uses green or yellow as decoration, the email event system loses its meaning.
- Never add drop shadows to cards or sections — elevation is achieved through 1px border contrast on black, not shadow lifting.
- Never use a white or light background for any full-width section — even 'light' content blocks must remain on near-black (#000000 or #0b0e14).
- Never increase letter-spacing on display text — Domaine and ABCFavorit run at negative tracking (-0.01em and -0.05em respectively); positive tracking at display sizes conflicts with the editorial compression of this system.
- Never mix more than two typefaces in a single component — one font for UI copy (Inter) and one for code (CommitMono) is the maximum; headings use ABCFavorit or Domaine depending on size, never both simultaneously.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#000000` | Page background — pure black, the dominant surface |
| 1 | Card Surface | `#0b0e14` | Feature cards and elevated containers — barely distinguishable from canvas, separation via 1px #292d30 border |
| 2 | UI Rail | `#292d30` | Border color for all component edges, image frames, dividers |
| 3 | Overlay | `#1b1b1b` | Gradient top of dark cards and hero overlays; backdrop-filter: blur(25px) for frosted glass dropdowns |

## Elevation

- **Icon ring:** `rgba(176, 199, 217, 0.145) 0px 0px 0px 1px`
- **Dropdown / popover:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Focus ring / outline:** `rgb(0, 0, 0) 0px 0px 0px 8px`

## Imagery

Resend's visual language centers on high-fidelity 3D-rendered objects — the hero shows a black modular cube cluster rendered with physically-based lighting on pure black, casting no visible floor shadow. Objects have a lacquered, almost ceramic finish: deep black with subtle specular highlights that emerge from the scene's single directional light. There is no lifestyle photography, no people, no abstract patterns. Product screenshots (email analytics tables, code editors) appear as contained UI panels inside dark card frames, treated as flat surfaces rather than floating mockups. The email app icon uses a violet-to-purple gradient as its only chromatic surface. Icon style is outlined with consistent ~1.5px stroke weight, monochromatic white or gray — never filled with color. Overall image density is low: one hero 3D object, one or two product video panels per section, white company logos on black. The site is text and code dominant; imagery serves as punctuation, not wallpaper.

## Layout

Max-width approximately 1200px centered on a full-bleed black canvas. Hero is full-viewport dark — left-aligned headline block with announcement pill above, two action buttons below, and a right-positioned 3D rendered object floating in the dark field. Section rhythm is seamless black-on-black with only hairline dividers (1px #292d30) separating bands — no alternating light/dark sections, no distinct color shifts between sections. Feature sections use left-text / right-product-video two-column layouts at roughly 40/60 split, alternating which side holds the visual. Social proof uses a horizontal scroll card strip. Code showcase sections use a centered stack with the code panel as the hero visual. The navigation is a fixed top bar at 59px. Footer is minimal — two links only. Overall the page feels vertically long with generous spacing (80-120px section gaps) and very low content density per viewport, pushing focus onto each individual product moment.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #f0f0f0
- text (secondary): #a1a4a5
- background: #000000
- border: #292d30
- accent / brand: #9281f7 (violet, code/product contexts only)
- primary action: #3b9eff (filled action)

**Example Component Prompts**

1. **Nav Bar**: Black background (#000000), height 59px, 1px solid #292d30 bottom border, backdrop-filter blur(25px). Left: 'Resend' wordmark in #ffffff Inter 500 16px. Center: ghost links (#f0f0f0 71% opacity, Inter 400 14px, chevron appended, 0 radius). Right: 'Log in' ghost text (#f0f0f0, Inter 400 14px) + 'Get started' button (transparent bg, 1px solid #3b9eff border, 8px radius, #ffffff Inter 500 14px, 8px vertical / 16px horizontal padding).

2. **Hero Section**: Full-bleed black (#000000). Left column: announcement pill (transparent bg, 1px solid #292d30 border, 16px radius, #f0f0f0 Inter 400 14px, '→' glyph). Below: headline in ABCFavorit weight 400 56px #ffffff letter-spacing -0.05em, line-height 1.0. Subtext: Inter 400 18px #a1a4a5 line-height 1.6. Two buttons below: 'Get started' (transparent, 1px #3b9eff border, 6px radius, #ffffff Inter 500 14px) + 'Documentation' ghost text (#f0f0f0 Inter 400 14px). Right column: 3D rendered black cube object, no background or shadow.

3. **Feature Card**: Background #000000, 1px solid #292d30 border, 16px radius, 32px padding. Monochrome icon in #ffffff at 24px. Heading Inter 600 16px #ffffff, margin-top 16px. Body text Inter 400 14px #a1a4a5, line-height 1.5, margin-top 8px. No box-shadow.

4. **Code Block Panel**: Background #000000, 1px solid #292d30 border, 16px radius. Tab bar: Inter 12px #a1a4a5 filename, active file in #3b9eff. Code body: CommitMono 400 14px, line-height 1.5. Identifiers/keywords: #9281f7. String values and normal text: #f0f0f0. Email addresses: #9281f7. Status values (delivered/bounced): use respective semantic colors (#3ad389 / #ff9592).

5. **Testimonial Card**: Background #000000, 1px solid #292d30 border, 16px radius, 32px padding. Quote text Inter 400 14px #f0f0f0 line-height 1.6. Attribution row: 32px circular avatar + name Inter 500 14px #ffffff + role Inter 400 12px #a1a4a5. No shadow, no gradient.

## Motion Philosophy

Animation is functional and fast, not decorative. Primary durations: 0.15s for hover state transitions (color, border-color, background-color via ease), 0.2s for component entrance animations (opacity + transform). Named animations include hero-text-slide-up-fade (text entering viewport from below), header-slide-down-fade (nav appearing on scroll), and open-scale-up-fade (dropdowns expanding). The scroll-x animation drives the horizontal logo marquee. All interactive state transitions use ease (not ease-in-out) — this gives hover responses a slightly snappier feel on the way in, preventing the 'sticky' sensation of symmetric easing on fast micro-interactions.

## Status Color System

Six vivid colors exist exclusively as email event status indicators within the product analytics UI. They follow a consistent pattern: icon + label, no background fill, icon outlined at ~1px with the status color as borderColor and fill. Green (#3ad389) = delivered, Red (#ff9592) = bounced, Yellow (#ffca16) = complained, Light blue (#70b8ff) = opened, Lavender (#baa7ff) = clicked, Violet (#9281f7) = general code/identity marker. These six colors must never appear as section backgrounds, illustration fills, or button colors — their scarcity on the black canvas is what gives them signal strength.

## Similar Brands

- **Linear** — Same pure-black canvas, outlined ghost CTA, achromatic palette with single chromatic accent, developer-tool positioning
- **Vercel** — Identical near-zero colorfulness dark UI with white type on black, hairline border cards, monospace code blocks as hero visuals
- **Raycast** — Custom geometric grotesque headings, dark product screenshots as primary imagery, single-accent color on otherwise achromatic shell
- **Planetscale** — Developer-facing dark site with serif display type mixed into otherwise sans-heavy UI, status color vocabulary for DB event states
- **Loops** — Email-infrastructure dark SaaS with violet brand accent, Inter for UI, code-centric product screenshots

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-black: #000000;
  --color-graphite-rail: #292d30;
  --color-smoke: #464a4d;
  --color-ash: #6c6c6c;
  --color-steel: #6e727a;
  --color-fog: #a1a4a5;
  --color-mist: #abafb4;
  --color-frost: #f0f0f0;
  --color-pure-white: #ffffff;
  --color-electric-blue: #3b9eff;
  --color-resend-violet: #9281f7;
  --gradient-resend-violet: linear-gradient(to right bottom in oklab, rgb(146, 129, 247) 0%, rgb(154, 84, 220) 100%);
  --color-surface-lift: #1b1b1b;
  --gradient-surface-lift: linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3));
  --color-delivered-green: #3ad389;
  --color-bounced-red: #ff9592;
  --color-complained-yellow: #ffca16;
  --color-opened-blue: #70b8ff;
  --color-clicked-lavender: #baa7ff;

  /* Typography — Font Families */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-domaine: 'Domaine', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-abcfavorit: 'ABCFavorit', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-commitmono: 'CommitMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -2.8px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -0.96px;

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
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --card-padding: 32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-tags: 10px;
  --radius-cards: 16px;
  --radius-large: 24px;
  --radius-badges: 6px;
  --radius-modals: 16px;
  --radius-buttons: 6px;

  /* Shadows */
  --shadow-subtle: rgba(176, 199, 217, 0.145) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(0, 0, 0) 0px 0px 0px 8px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;

  /* Surfaces */
  --surface-canvas: #000000;
  --surface-card-surface: #0b0e14;
  --surface-ui-rail: #292d30;
  --surface-overlay: #1b1b1b;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-black: #000000;
  --color-graphite-rail: #292d30;
  --color-smoke: #464a4d;
  --color-ash: #6c6c6c;
  --color-steel: #6e727a;
  --color-fog: #a1a4a5;
  --color-mist: #abafb4;
  --color-frost: #f0f0f0;
  --color-pure-white: #ffffff;
  --color-electric-blue: #3b9eff;
  --color-resend-violet: #9281f7;
  --color-surface-lift: #1b1b1b;
  --color-delivered-green: #3ad389;
  --color-bounced-red: #ff9592;
  --color-complained-yellow: #ffca16;
  --color-opened-blue: #70b8ff;
  --color-clicked-lavender: #baa7ff;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-domaine: 'Domaine', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-abcfavorit: 'ABCFavorit', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-commitmono: 'CommitMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -2.8px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -0.96px;

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
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Shadows */
  --shadow-subtle: rgba(176, 199, 217, 0.145) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(0, 0, 0) 0px 0px 0px 8px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
```