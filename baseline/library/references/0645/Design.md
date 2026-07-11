# Slash — Style Reference
> Nocturnal private bank — obsidian panels, gold ink. A vault door opening onto an editorial spread.

**Theme:** dark

Slash speaks in a dark editorial register: near-black canvases, Inter for the working surface, and a high-contrast display serif (Ivy Presto) that gives headlines the gravity of a financial broadsheet. Color is rationed — white and warm grays carry 95% of the interface, with a molten-gold gradient reserved for chart fills, emphasis strokes, and the occasional italic accent. Components are compact and sharp: 2px corners on inputs, nav, and inline links create a technical, ledger-like precision; 10px corners soften cards and image tiles just enough to feel modern without going soft. The feel is 'premium private banking rendered as a product UI' — quiet surfaces, confident typography, and gold used like a signature, not a brand wash.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Deepest canvas, page background, elevation shadows |
| Carbon | `#030304` | `--color-carbon` | Recessed surfaces, card shadows, image matte backgrounds |
| Inkwell | `#08080a` | `--color-inkwell` | Primary dark surface, button borders, body depth |
| Graphite | `#121317` | `--color-graphite` | Raised button fills, input backgrounds, card body |
| Slate | `#1c1d22` | `--color-slate` | Card surfaces, elevated panels, secondary surfaces |
| Iron | `#2e3038` | `--color-iron` | Icon strokes, subtle dividers, tertiary borders |
| Steel | `#464853` | `--color-steel` | Nav dividers, low-emphasis borders |
| Fog | `#5e616e` | `--color-fog` | Body text on dark surfaces, default borders, muted UI |
| Ash | `#777a88` | `--color-ash` | Secondary text, link borders, mid-emphasis strokes |
| Silver | `#9194a1` | `--color-silver` | Nav text, metadata, inactive controls |
| Pearl | `#acafb9` | `--color-pearl` | Helper text, icon outlines, tertiary labels |
| Chalk | `#cdcdcd` | `--color-chalk` | Body color on light contexts, ghost borders |
| Bone | `#e2e3e9` | `--color-bone` | Primary body text, heading text, high-emphasis content |
| Paper | `#ffffff` | `--color-paper` | Headings, CTA fills, primary borders, logo, high-emphasis text |
| Ember Gold | `#cc9166` | `--color-ember-gold` | Inline link text and underlines, chart accent strokes, italic emphasis — warm amber against obsidian creates editorial warmth without looking promotional |
| Molten Gold | `linear-gradient(103deg, rgb(174, 147, 87), rgb(255, 240, 204) 40%, rgb(174, 147, 87) 70%, rgba(189, 157, 79, 0))` | `--color-molten-gold` | Gradient anchor for chart fills, hero accents, premium highlight washes |
| Chalk Glow | `#fff0cc` | `--color-chalk-glow` | Gradient highlight peak, used only inside the molten-gold gradient and chart fill highlights |

## Tokens — Typography

### Ivy Presto — Display and editorial headings — used in italic for the hero phrase ('higher standard') and in roman for the largest section titles. This serif does the heavy lifting for brand voice; its high stroke contrast and oldstyle proportions make the product feel like a financial publication rather than a SaaS dashboard. · `--font-ivy-presto`
- **Substitute:** Playfair Display, GT Super, Cormorant Garamond
- **Weights:** 400, 500
- **Sizes:** 32px, 52px, 64px, 88px
- **Line height:** 1.00, 1.13, 1.25
- **Letter spacing:** 0.01
- **Role:** Display and editorial headings — used in italic for the hero phrase ('higher standard') and in roman for the largest section titles. This serif does the heavy lifting for brand voice; its high stroke contrast and oldstyle proportions make the product feel like a financial publication rather than a SaaS dashboard.

### Inter — All UI, body, nav, buttons, labels, table cells, and secondary headings. Weight 300 carries body and large light-headline work; 400 for paragraphs; 500 for nav and labels; 600–700 for subheadings and button text. The condensed weight ladder lets the system whisper (light) or assert (bold) without changing family. · `--font-inter`
- **Substitute:** Inter (keep), fallback: SF Pro Text, system-ui
- **Weights:** 300, 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 24px, 32px, 48px, 52px
- **Line height:** 1.00, 1.13, 1.25, 1.33, 1.38, 1.43, 1.50, 1.56
- **Letter spacing:** -0.007
- **OpenType features:** `"cv11", "ss01"`
- **Role:** All UI, body, nav, buttons, labels, table cells, and secondary headings. Weight 300 carries body and large light-headline work; 400 for paragraphs; 500 for nav and labels; 600–700 for subheadings and button text. The condensed weight ladder lets the system whisper (light) or assert (bold) without changing family.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.01px | `--text-caption` |
| body-lg | 15px | 1.43 | — | `--text-body-lg` |
| subheading | 18px | 1.38 | -0.007px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.013px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.02px | `--text-heading` |
| heading-lg | 48px | 1.13 | -0.022px | `--text-heading-lg` |
| display | 64px | 1 | -0.025px | `--text-display` |
| display-xl | 88px | 1 | -0.04px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 22 | 22px | `--spacing-22` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 105 | 105px | `--spacing-105` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 2px |
| tags | 9999px |
| cards | 10px |
| links | 2px |
| pills | 9999px |
| images | 10px |
| inputs | 2px |
| modals | 10px |
| buttons | 2px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120-160px
- **Card padding:** 24-32px
- **Element gap:** 6-12px

## Components

### Filled Light CTA
**Role:** Primary action button (Get Started, Sign Up)

Background #ffffff, text #08080a, radius 2px, padding 10px 20px, Inter 15px weight 500, tracking -0.007em. Thin and rectangular — reads like a printer's mark, not a pill. Used sparingly; one per view maximum.

### Ghost Border Button
**Role:** Secondary action (Sign In, Learn more)

Transparent background, 1px border #777a88, text #e2e3e9, radius 2px, padding 10px 20px, Inter 15px weight 400. Hover shifts border to #e2e3e9. Carries the same shape language as the filled button for consistent rhythm.

### Pill Nav Tag
**Role:** Navigation chips, status tags, category labels

Radius 9999px, background transparent, 1px border in #464853 or #9194a1, text Inter 13px weight 500 in #acafb9. Pill geometry contrasts with the otherwise rectangular system — reserved for taxonomy and status.

### Email Capture Input
**Role:** Hero lead-capture field

Background transparent, 1px border #5e616, radius 2px, padding 14px 20px, Inter 15px weight 400, placeholder text #777a88. Sits flush against the adjacent filled CTA — no gap, no radius mismatch — so the pair reads as one composite control.

### Editorial Card
**Role:** Industry/vertical cards (Who we're built for)

Background #1c1d22, 1px border #2e3038, radius 10px, padding 32px, Inter 20px weight 600 in #e2e3e9 for the card title. Image tiles inside use 10px radius to match. Cards are uniform in height across a row.

### Transaction Row
**Role:** List row inside dashboard panels

Transparent background, no border between rows, column gap 14px, padding 12px 0. Logo (24px) + company name (Inter 15px weight 500, #e2e3e9) on the left, amount (Inter 15px weight 500, #e2e3e9, tabular-nums) on the right. Negative deltas in #cc9166, positive in #e2e3e9.

### Dashboard Mockup Panel
**Role:** Hero product preview surface

Background #1c1d22, 1px border #2e3038, radius 10px, padding 24px. Internal sub-panels (balance, transactions, spend limits) use #08080a fills with 1px #2e3038 borders and 2px radius — a nested surface hierarchy that creates depth without shadows.

### Balance Chart
**Role:** Hero sparkline / analytics visualization

Stroke #cc9166 at 1.5px, area fill the molten-gold gradient (103deg, #ae9357 → #fff0cc at 40% → #ae9357 at 70% → transparent). X-axis labels Inter 12px weight 400 in #777a88. The gradient is the only saturated surface in the system and should remain the sole chart fill.

### Status Pill
**Role:** Active / Paused indicators in spend-limit tables

Radius 9999px, padding 2px 10px, Inter 12px weight 500. Active uses #cc9166 text on transparent fill with a 1px #cc9166 border. Paused uses #777a88 text and border. Minimal surface area — color carries the meaning.

### Top Navigation Bar
**Role:** Primary site header

Full-width, transparent background, 1px bottom border #9194a1. Left: Slash wordmark in #ffffff. Center: nav links (Company, Products, Solutions, Customers, Pricing, FAQ) in Inter 14px weight 500, #e2e3e9, separated by 6px column gaps. Right: 'Sign In' ghost link + 'Get Started' filled CTA. Announcement bar above uses 1px #9194a1 border-bottom and Inter 13px text.

### Feature Tile (Foundation)
**Role:** Product capability cards (Checking and Treasury, Working Capital)

Background #1c1d22, 1px border #2e3038, radius 10px, padding 32px. Large visual area on top (illustration or UI mock) in 10px radius crops, then Inter 20px weight 600 title in #e2e3e9, then Inter 14px weight 400 body in #acafb9.

### Logo Strip
**Role:** Customer/trust logo band (Corgi, Bland, HiKE, PrimalHerbs, Privy)

Horizontal flex row, 32px column gaps, logos rendered in #acafb9 or #777a88 monochrome at 28px height. No borders, no card backgrounds — logos float on the canvas at their native aspect ratio.

### Hero Editorial Headline
**Role:** Primary hero title block

Ivy Presto 64–88px weight 400, line-height 1.00, tracking -0.025 to -0.04em, color #e2e3e9 or #ffffff. Key phrase is set in italic (Ivy Presto weight 500 italic) and shifted into the Ember Gold #cc9166 to create the brand's signature 'one golden sentence' moment.

## Do's and Don'ts

### Do
- Set display headlines in Ivy Presto at 64–88px, tracking -0.025 to -0.04em, and italicize one key phrase per hero in #cc9166.
- Use the molten-gold gradient (linear-gradient 103deg, #ae9357 → #fff0cc at 40% → #ae9357 at 70% → transparent) only for chart area fills and premium highlight washes.
- Apply 2px radius to all inputs, nav items, inline links, and the filled/ghost CTA pair so the system reads as a ledger.
- Build depth through 1px borders in #2e3038 and surface-tone shifts (#08080a → #121317 → #1c1d22) rather than drop shadows.
- Keep pill radius 9999px reserved for status tags and category chips so the soft geometry stays rare.
- Set tabular numerals (font-feature tnum) on all monetary values, balances, and transaction amounts in Inter.
- Pair every email/lead-capture input with an adjacent filled white CTA at identical 2px radius — no gap, no enclosing card.

### Don't
- Don't introduce drop shadows beyond the single #030304 contact shadow on dropdowns and modals — the system is intentionally shadowless.
- Don't use color other than #cc9166 or the gold gradient for accent — no blues, greens, or purples for emphasis.
- Don't round buttons, inputs, or nav items to anything other than 2px; the 10px radius belongs only to cards and image tiles.
- Don't set display type in Inter; Ivy Presto (or its substitute) owns every size at 52px and above.
- Don't place white or light text on the #cc9166 gold — contrast is too low; reserve gold for italic emphasis and thin strokes on dark.
- Don't use the gold gradient for full backgrounds or section washes; it is a chart-fill and accent-stroke treatment only.
- Don't use the filled white CTA more than once per viewport — its scarcity is what makes it an action.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#000000` | Page-level background, hero backdrop, section base |
| 1 | Inkwell | `#08080a` | Slightly lifted dark surface for full-width bands |
| 2 | Graphite | `#121317` | Card bodies, input fields, elevated button fills |
| 3 | Slate | `#1c1d22` | Featured cards, dashboard mockups, floating panels |

## Elevation

Elevation is implied through surface tone shifts and 1px hairline borders, never drop shadows. Cards separate from the canvas with a 1px border at #2e3038 or #5e616, and a subtle lighter fill like #1c1d22. The only shadow in the system is a tight contact shadow at #030304 used on the most elevated overlays (dropdowns, modals) — depth without blur keeps the ledger aesthetic intact.

## Imagery

Imagery is product-led and architectural: hero features a full dashboard mockup (balance, gold-gradient chart, transaction list, spend-limit table) at near-1:1 scale as a background plate behind the editorial headline. The 'Who we're built for' section uses a 4-card row where each card contains a real UI screenshot of a different surface (transaction history, order detail, etc.) cropped to 10px radius. The 'Foundation' section pairs a 3D glass shield render with a credit-approval card mockup — both with warm directional lighting that echoes the gold gradient. Photography is minimal: one lifestyle shot of a startup office sits as the rightmost card to add human warmth. Icons are 1px-stroke monoline in #e2e3e9 or #acafb9. The overall density is image-heavy in the hero and section openers, then collapses to text-dominant for the foundation feature descriptions.

## Layout

Full-bleed dark canvas with content centered at max-width 1200px. The hero is a split composition: large editorial headline anchored bottom-left over a product mockup that fills the right two-thirds of the viewport at slight scale. Below the fold, sections alternate between wide single-column title blocks and 3–4 column card grids. The 'Who we're built for' row uses a horizontal carousel of uniform 4:3 cards. The 'Foundation' section uses a 2-column grid for feature tiles, each with a square visual on top. Vertical rhythm is generous between sections (120–160px gaps) but tight within rows (6–14px element gaps). Navigation is a minimal top bar with a thin bottom border and an optional announcement strip above it. No sidebar, no sticky header beyond the nav, no mega-menus visible.

## Agent Prompt Guide

**Quick Color Reference**
- background: #000000 (canvas) / #1c1d22 (card) / #121317 (raised surface)
- text: #ffffff (headings) / #e2e3e9 (body) / #777a88 (muted) / #acafb9 (helper)
- border: #2e3038 (subtle) / #5e616e (default) / #777a88 (emphasis)
- accent: #cc9166 (Ember Gold) + molten-gold gradient for charts and italic emphasis
- primary action: #ffffff (filled action)

**Example Component Prompts**
1. Build a hero headline block: Ivy Presto 88px weight 400 italic, #cc9166, tracking -0.04em, line-height 1.0, over a #000000 canvas with a right-side dashboard mockup panel at 10px radius, #1c1d22 fill, 1px #2e3038 border.
2. Create a Primary Action Button: #ffffff background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.
3. Build a balance chart visualization: 1.5px #cc9166 stroke line, area filled with the molten-gold gradient (linear-gradient 103deg, #ae9357 → #fff0cc at 40% → #ae9357 at 70% → transparent), x-axis labels Inter 12px #777a88, 2px tick marks.
4. Build a transaction row: flex row with 14px column gap, 24px company logo (Meta, Stripe, etc.), Inter 15px weight 500 company name in #e2e3e9, right-aligned amount in Inter 15px weight 500 #e2e3e9 with tabular-nums, 12px vertical padding, no border between rows.
5. Build a vertical card (Editorial Card): #1c1d22 background, 1px #2e3038 border, 10px radius, 32px padding, Inter 20px weight 600 title in #e2e3e9 at top-left, 10px-radius image tile below filling the card width.

## Typography Philosophy

The system runs on a two-family tension: Ivy Presto (or Playfair Display) owns voice, Inter owns labor. Ivy Presto appears in roman at display sizes for section titles and in italic for editorial emphasis — it is the only place where the brand 'speaks.' Inter does everything else, from 12px captions to 32px subheadings, in a 5-weight ladder (300, 400, 500, 600, 700) that lets a single family express whisper-quiet body and bold-as-necessary UI. Letter-spacing tightens aggressively as size grows: -0.007em at 15px body, -0.025em at 64px display, -0.04em at 88px hero. The result is type that feels pressed and editorial at large sizes and precise and utilitarian at small sizes — a financial publication rendered in interactive form.

## Gradient System

One gradient, one job. The molten-gold gradient (103deg, #ae9357 → #fff0cc at 40% → #ae9357 at 70% → transparent) is reserved for chart area fills, premium highlight washes, and the rarest hero accent. It should never become a section background or card fill — that would dilute its scarcity. The diagonal angle and the fade-to-transparent tail make the gradient read as light hitting a surface from upper-left, reinforcing the 3D shield and card-mockup motifs. Pair the gradient with a 1.5px #cc9166 stroke for the chart line; the stroke continues the gold accent onto a hairline geometry.

## Similar Brands

- **Mercury** — Same dark editorial banking register, restrained gold-free palette, and serif/sans display tension — though Mercury leans more geometric while Slash uses italic Ivy Presto for editorial emphasis.
- **Brex** — Both position business banking as premium financial product with sharp 2px-radius inputs, compact dashboards, and brand color used as a thin accent stroke rather than a button fill.
- **Ramp** — Shared compact density, dark mode default, and a product-mockup-as-hero treatment where the dashboard floats behind the headline at near-1:1 scale.
- **Found** — Same contrast between a quiet monochrome UI and a single warm accent color used for emphasis, plus a strong typographic voice in display sizes.
- **Plaid** — Dark editorial fintech aesthetic with a serif-leaning display voice and restrained use of saturated color — the data-visualization-as-hero pattern echoes.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-carbon: #030304;
  --color-inkwell: #08080a;
  --color-graphite: #121317;
  --color-slate: #1c1d22;
  --color-iron: #2e3038;
  --color-steel: #464853;
  --color-fog: #5e616e;
  --color-ash: #777a88;
  --color-silver: #9194a1;
  --color-pearl: #acafb9;
  --color-chalk: #cdcdcd;
  --color-bone: #e2e3e9;
  --color-paper: #ffffff;
  --color-ember-gold: #cc9166;
  --color-molten-gold: #ae9357;
  --gradient-molten-gold: linear-gradient(103deg, rgb(174, 147, 87), rgb(255, 240, 204) 40%, rgb(174, 147, 87) 70%, rgba(189, 157, 79, 0));
  --color-chalk-glow: #fff0cc;

  /* Typography — Font Families */
  --font-ivy-presto: 'Ivy Presto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body-lg: 15px;
  --leading-body-lg: 1.43;
  --text-subheading: 18px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.007px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.013px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.02px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.022px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.025px;
  --text-display-xl: 88px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.04px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-105: 105px;
  --spacing-224: 224px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 120-160px;
  --card-padding: 24-32px;
  --element-gap: 6-12px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-lg: 10px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-nav: 2px;
  --radius-tags: 9999px;
  --radius-cards: 10px;
  --radius-links: 2px;
  --radius-pills: 9999px;
  --radius-images: 10px;
  --radius-inputs: 2px;
  --radius-modals: 10px;
  --radius-buttons: 2px;

  /* Surfaces */
  --surface-canvas: #000000;
  --surface-inkwell: #08080a;
  --surface-graphite: #121317;
  --surface-slate: #1c1d22;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #000000;
  --color-carbon: #030304;
  --color-inkwell: #08080a;
  --color-graphite: #121317;
  --color-slate: #1c1d22;
  --color-iron: #2e3038;
  --color-steel: #464853;
  --color-fog: #5e616e;
  --color-ash: #777a88;
  --color-silver: #9194a1;
  --color-pearl: #acafb9;
  --color-chalk: #cdcdcd;
  --color-bone: #e2e3e9;
  --color-paper: #ffffff;
  --color-ember-gold: #cc9166;
  --color-molten-gold: #ae9357;
  --color-chalk-glow: #fff0cc;

  /* Typography */
  --font-ivy-presto: 'Ivy Presto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body-lg: 15px;
  --leading-body-lg: 1.43;
  --text-subheading: 18px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.007px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.013px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.02px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.022px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.025px;
  --text-display-xl: 88px;
  --leading-display-xl: 1;
  --tracking-display-xl: -0.04px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-105: 105px;
  --spacing-224: 224px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-lg: 10px;
  --radius-full: 9999px;
}
```