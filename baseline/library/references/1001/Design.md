# Origin Financial — Style Reference
> serif headlines floating above dusk clouds — editorial finance at horizon altitude

**Theme:** dark

Origin speaks in an editorial financial-register voice: oversized Lyon Display serif headlines (80-96px, weight 300-400) do the emotional work while Suisse Int'l carries the UI at 14-18px against a near-black canvas stacked from #0f1011 through #2e2e2e. The interface is overwhelmingly achromatic — the only true CTA is a white pill with an arrow, never a chromatic button — and the brand's color appears not as controls but as illuminated product surfaces: violet, pink, sky-blue, and deep-indigo feature cards that float in the void like lit windows. The signature move is a full-bleed dusk-sky photograph behind the hero, giving the entire site a 'above the clouds' atmosphere that frames money as horizon, not spreadsheet. Spacing is generous and breathing; cards use 16-30px radii (never sharp), buttons are full pills (1440px), and tracking on small UI text is dramatically wide (0.182em) to feel stamped rather than typed.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#0f1011` | `--color-obsidian` | Primary page canvas — the foundational dark surface behind every section |
| Void Black | `#000000` | `--color-void-black` | Pure black for SVG illustration fills, deepest shadow base, device screen content |
| Carbon | `#090a0b` | `--color-carbon` | Elevated card surfaces and button shadow substrate — one step lighter than the page |
| Graphite | `#2e2e2e` | `--color-graphite` | Mid-tone card surface for overlays, icon borders, and elevated containers |
| Slate | `#3f4041` | `--color-slate` | Secondary button background — muted interactive surface for non-primary actions |
| Mist | `#6a6b6b` | `--color-mist` | Muted helper text and subtle borders — step down from primary text |
| Frost | `#9f9fa0` | `--color-frost` | Body text on dark surfaces, input borders — mid-luminance neutral for readable secondary copy |
| Pearl | `#cacaca` | `--color-pearl` | Light card surface and lighter UI fills — provides contrast on dark sections |
| Bone | `#f5f5f7` | `--color-bone` | Headings and border accents — slightly off-white avoids harsh digital blue |
| Paper White | `#ffffff` | `--color-paper-white` | Primary text, hairlines, and filled CTA pill — the only true action color in the system |
| Amethyst | `#847dff` | `--color-amethyst` | Chromatic card background — the dominant brand accent, appears on feature panels like illuminated glass |
| Lavender Mist | `#d1c9ff` | `--color-lavender-mist` | Light violet card surface — softer accent for secondary feature cards |
| Deep Iris | `#4b49aa` | `--color-deep-iris` | Deep indigo card background — darker chromatic for cards that need to recede |
| Orchid | `#dd90d8` | `--color-orchid` | Pink-violet card background — warm accent that breaks the cool palette rhythm |
| Cyan Spark | `#00b3dd` | `--color-cyan-spark` | Vivid cyan for highlight cards and accent surfaces — the most saturated chromatic in the system |
| Sky Wash | `#90b8f0` | `--color-sky-wash` | Soft sky-blue card background — echoes the hero photograph's atmospheric tone |
| Twilight Navy | `#195f97` | `--color-twilight-navy` | Deep blue for nav borders, section dividers, and chart axes — structural chromatic that grounds the palette |
| Dusk Sky | `linear-gradient(180deg, #0f1011 0%, #131d27 18%, #1a4788 37%, #408ac1 69%, #408ac1 100%)` | `--color-dusk-sky` | Dusk-to-cloud gradient — the hero atmosphere, transitioning from obsidian through deep navy to a soft sky blue |

## Tokens — Typography

### Suisseintltrial — Suisseintltrial — detected in extracted data but not described by AI · `--font-suisseintltrial`
- **Weights:** 400
- **Sizes:** 11px, 14px, 16px
- **Line height:** 1, 1.5, 1.67, 2.18
- **Letter spacing:** 0.182
- **Role:** Suisseintltrial — detected in extracted data but not described by AI

### Lyon Display — Display serif for editorial headlines — the signature voice. 96px weight 300 for hero ('Own your wealth.'), 80px weight 300 for section openers, 38px weight 400 for medium headings. The italic-leaning weight 300 whispers authority where most fintech sites shout it. · `--font-lyon-display`
- **Substitute:** GT Sectra Display, Tiempos Headline, or Playfair Display
- **Weights:** 300, 400
- **Sizes:** 38px, 80px, 96px
- **Line height:** 0.90, 1.00
- **Role:** Display serif for editorial headlines — the signature voice. 96px weight 300 for hero ('Own your wealth.'), 80px weight 300 for section openers, 38px weight 400 for medium headings. The italic-leaning weight 300 whispers authority where most fintech sites shout it.

### Suisse Int'l — Sans-serif workhorse for body, subheadings, and UI copy. 18px weight 300 for subheadings, 16px weight 400 for body, 14px for nav and small copy, 12px for micro labels. Geometric humanist proportions give it a neutral-but-warm voice that doesn't compete with the serif. · `--font-suisse-intl`
- **Substitute:** Inter, Söhne, or General Sans
- **Weights:** 300, 400
- **Sizes:** 12px, 14px, 16px, 18px
- **Line height:** 1.41, 1.43, 1.50, 2.00
- **Role:** Sans-serif workhorse for body, subheadings, and UI copy. 18px weight 300 for subheadings, 16px weight 400 for body, 14px for nav and small copy, 12px for micro labels. Geometric humanist proportions give it a neutral-but-warm voice that doesn't compete with the serif.

### Suisse Int'l Trial — Wide-tracked variant for stamped UI labels — nav items, small buttons, card tags. The dramatic 0.182em letter-spacing makes these elements feel pressed, not typed, creating a distinct register between the editorial serif headlines and the quiet body text. · `--font-suisse-intl-trial`
- **Substitute:** Inter with letter-spacing: 0.182em, or Neue Haas Grotesk
- **Weights:** 400
- **Sizes:** 11px, 14px, 16px
- **Line height:** 1.00, 1.50, 1.67, 2.18
- **Letter spacing:** 0.182em
- **Role:** Wide-tracked variant for stamped UI labels — nav items, small buttons, card tags. The dramatic 0.182em letter-spacing makes these elements feel pressed, not typed, creating a distinct register between the editorial serif headlines and the quiet body text.

### Roboto Mono — Monospace for chart axes, data values, timestamps, and micro-captions. The 0.182em tracked variant at 11px stamps technical labels (e.g. 'SPEND THIS MONTH'). The 0.016-0.021em variants at 12-16px handle inline data display. · `--font-roboto-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, or Geist Mono
- **Weights:** 400, 500
- **Sizes:** 10px, 11px, 12px, 16px
- **Line height:** 1.35, 1.40, 1.50, 2.00
- **Letter spacing:** 0.016em, 0.021em, 0.182em
- **OpenType features:** `"tnum" on, "zero" on`
- **Role:** Monospace for chart axes, data values, timestamps, and micro-captions. The 0.182em tracked variant at 11px stamps technical labels (e.g. 'SPEND THIS MONTH'). The 0.016-0.021em variants at 12-16px handle inline data display.

### Suisseintl — Suisseintl — detected in extracted data but not described by AI · `--font-suisseintl`
- **Weights:** 300, 400
- **Sizes:** 12px, 14px, 16px, 18px
- **Line height:** 1, 1.41, 1.43, 1.5, 2
- **Role:** Suisseintl — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.35 | 0.19px | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.41 | — | `--text-subheading` |
| heading | 38px | 1 | — | `--text-heading` |
| heading-lg | 80px | 0.9 | — | `--text-heading-lg` |
| display | 96px | 0.9 | — | `--text-display` |

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
| 60 | 60px | `--spacing-60` |
| 68 | 68px | `--spacing-68` |
| 100 | 100px | `--spacing-100` |
| 120 | 120px | `--spacing-120` |
| 140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| tags | 14385.6px |
| cards | 16px |
| inputs | 8px |
| buttons | 1440px |
| feature-cards | 30px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(0, 0, 0, 0.2) 0px 18px 20px 0px` | `--shadow-lg` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 12px

## Components

### Primary CTA Pill
**Role:** The only true action button — white filled pill with arrow icon

White (#ffffff) fill, near-black (#090a0b) text, border-radius 1440px (full pill), padding 12px 18px, Suisse Int'l Trial 11px weight 400 with 0.182em letter-spacing, uppercase. Trailing arrow glyph (→). Shadow: rgba(0,0,0,0.2) 0px 18px 20px 0px. Never chromatic — the brand's restraint is the confidence.

### Ghost Nav Button
**Role:** Secondary nav action ('LOG IN') — quiet, typographic, non-competing

Transparent background, white (#ffffff) text, no border, Suisse Int'l Trial 11px weight 400, 0.182em letter-spacing, uppercase, padding 12px 18px. Sits to the left of the primary CTA in the top nav.

### Centered Nav Group
**Role:** Product/employer/resources cluster in the top bar

Three text links (PRODUCTS +, FOR EMPLOYERS, RESOURCES) centered in the header. Suisse Int'l Trial 11px, 0.182em letter-spacing, uppercase, white text, 8px border-radius on the active link container. ~12px horizontal padding per item.

### Floating Chat Input
**Role:** Hero-level conversational search — the primary interaction on the landing

Wide frosted-glass bar, Graphite (#2e2e2e) fill with transparency, ~30px radius, full width up to ~700px. Placeholder text in Frost (#9f9fa0), Suisse Int'l 16px. Trailing circular arrow button in Paper White. Floats below the hero CTA with margin-top ~24px.

### Feature Card — Chromatic
**Role:** Product showcase cards with vivid illuminated backgrounds

Large 30px-radius card, ~370px wide. Background is a full-bleed photograph (sandy dunes, night sky, calendar scene) with a dark gradient overlay from rgba(15,16,17,0.7) to transparent. Top-left tag label in Roboto Mono 10px uppercase with 0.182em tracking, white text. Internal data display in Paper White, Suisse Int'l 14-18px.

### Promo Pill
**Role:** Limited-time offer badge floating above the hero headline

Translucent dark fill (rgba(15,16,17,0.5)), Paper White border, 14385.6px radius (full pill), padding 4px 12px. Text: Suisse Int'l Trial 11px weight 400, 0.182em letter-spacing, uppercase, white. Sits centered above the display headline.

### Award Badge Cluster
**Role:** Social proof — Forbes and PastCompany laurels

Two badges side by side below the hero. Each badge: white text on transparent background, centered alignment. Award name (e.g. 'Forbes') in Suisse Int'l weight 400, 14-16px, with a laurel wreath SVG icon flanking each side. Category text in smaller tracked uppercase below.

### Phone Mockup Container
**Role:** Hero showcase for the mobile app — tilted device render

Realistic iPhone render at ~30-degree rotation (perspective transform), positioned center-stage on the Obsidian canvas. The device screen shows the app UI (Graphite fill, cyan chart line, white data). No background container — the phone floats on the dark canvas.

### Section Heading Pair
**Role:** Editorial section openers — 'Simplify your money', 'Track everything'

Two-part composition: first word in Lyon Display 80px weight 300 italic-leaning, second word in Lyon Display 80px weight 300 regular. Centered alignment, Bone (#f5f5f7) text. Optional subheading below in Suisse Int'l 18px weight 300, Frost (#9f9fa0).

### Logo Mark
**Role:** Top-left brand identifier

Small square monogram in Paper White, positioned top-left of the header. ~24px square, no text lockup. Minimal and confident — the wordmark is implied.

## Do's and Don'ts

### Do
- Use Lyon Display weight 300 for all display headlines — never bold the serif; the whisper-weight IS the authority
- Make every CTA a white pill with a trailing arrow (→) — never use a chromatic button for primary actions
- Apply 0.182em letter-spacing to all UI labels in Suisse Int'l Trial 11px uppercase — the tracked stamp is a signature register
- Set body text in Frost (#9f9fa0), not Paper White — save white for true emphasis and CTA fills
- Use 30px radius for feature cards and 1440px for buttons — the contrast between generous card corners and full-pill buttons defines the geometry
- Stack the dark surface ladder in order: #0f1011 → #090a0b → #2e2e2 → #3f4041 — never skip steps, the subtle elevation read depends on it
- Frame the hero with a full-bleed sky/dusk photograph or the dusk gradient — this is the brand's emotional anchor

### Don't
- Don't use Lyon Display for body text or UI — it's display-only; let Suisse Int'l carry the functional voice
- Don't apply chromatic colors to buttons, nav, or interactive controls — chromatic is for product surfaces and feature cards only
- Don't use sharp 0px or 4px border-radius on cards — the minimum card radius in this system is 16px
- Don't use Roboto Mono for body prose — reserve it for data values, timestamps, and tracked micro-labels
- Don't center-align body paragraphs — center only display headlines and short subheadings; left-align explanatory copy
- Don't mix the dusk-sky gradient with other gradients in the same section — one atmospheric moment per page
- Don't add borders to feature cards — let the chromatic background and 30px radius carry the containment

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Obsidian Canvas | `#0f1011` | Base page background — the foundational dark surface |
| 2 | Carbon Layer | `#090a0b` | Slightly elevated card and container surfaces |
| 3 | Graphite Plate | `#2e2e2` | Mid-elevation card surfaces, frosted overlays, device screens |
| 4 | Slate Cap | `#3f4041` | Secondary interactive surfaces, button backgrounds |
| 5 | Pearl Lift | `#cacaca` | Light surface for high-contrast panels |

## Elevation

- **Primary CTA Pill:** `rgba(0, 0, 0, 0.2) 0px 18px 20px 0px`

## Imagery

Imagery strategy is restrained and product-centric. The hero uses a full-bleed dusk-sky photograph (clouds at altitude, blue-to-near-black) as the signature emotional moment — no lifestyle, no people, no props. Below the hero, the visual language shifts to product mockups: a tilted-perspective iPhone render showing the app dashboard (Graphite fill, cyan chart line, dark mode UI), and feature cards built from full-bleed photographs (sandy desert dunes for budget, night sky for transactions, calendar scene for spending) with dark gradient overlays. Icons are minimal — a square logo mark, laurel wreath SVGs for awards, and simple line glyphs. No illustration system; no abstract 3D renders. Photography is high-contrast and atmospheric, never staged or lifestyle.

## Layout

Max-width 1200px centered for all content containers. The page alternates between atmospheric full-bleed moments (hero sky, dark showcase) and contained sections. Hero pattern: full-bleed sky photograph with centered editorial headline (Lyon Display 96px), floating chat input below the CTA, and centered award badges at the bottom. Section rhythm: each new section starts with a centered serif heading (80px Lyon Display), followed by a 3-column card grid with 24-30px gaps. Navigation is a minimal top bar — logo left, three center links, 'LOG IN' + white pill CTA right. Cards use generous 30px radii and breathe with 80px section gaps. The overall density is spacious and editorial — sections are separated by the dark canvas itself, not by dividers or background changes.

## Agent Prompt Guide

## Quick Color Reference
- Page background: #0f1011 (Obsidian)
- Card surface: #2e2e2e (Graphite)
- Elevated surface: #090a0b (Carbon)
- Primary text: #ffffff (Paper White)
- Secondary text: #9f9fa0 (Frost)
- Muted text: #6a6b6b (Slate)
- Border / hairline: #f5f5f7 (Bone)
- primary action: #ffffff (filled action)

## Example Component Prompts
1. Create a Primary Action Button: #ffffff background, #000000 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. **Feature Card (Chromatic)**: 30px border-radius card with full-bleed photograph background (e.g. sandy desert), dark gradient overlay from rgba(15,16,17,0.7) to transparent. Top-left tag in Roboto Mono 10px uppercase, 0.182em letter-spacing, white. Data display inside: Suisse Int'l 18px weight 300 white for values, 14px weight 400 Frost (#9f9fa0) for labels.

3. **Centered Section Heading**: Lyon Display 80px weight 300, color #f5f5f7, centered, line-height 0.9. Optional two-word composition with first word italic-leaning. Subheading below: Suisse Int'l 18px weight 300, color #9f9fa0, centered, max-width 480px.


5. **Floating Chat Input**: Frosted-glass bar, background #2e2e2e with 80% opacity, border-radius 30px, max-width 700px, padding 16px 20px. Placeholder text: 'How have tariffs imp...' in Suisse Int'l 16px weight 400, color #9f9fa0. Trailing circular button: #ffffff fill, #090a0b arrow icon, 32px diameter.

## Similar Brands

- **Wealthfront** — Same editorial dark-mode fintech aesthetic with oversized serif headlines and a restrained, nearly monochromatic interface
- **Monarch Money** — Dark personal-finance product with chromatic feature cards floating on a near-black canvas, and a similar serif-plus-sans typographic pairing
- **Copilot Money** — Dark-mode personal finance app with chrome gradients, tilted device mockups, and a 'above the clouds' emotional register
- **Arc Browser** — Same white pill CTA convention, dramatic dark canvas, and the use of chromatic color only for product surfaces — not interactive controls
- **Linear** — Similar minimal top navigation, near-black canvas, and the convention of letting one white filled pill be the only action color in the system

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #0f1011;
  --color-void-black: #000000;
  --color-carbon: #090a0b;
  --color-graphite: #2e2e2e;
  --color-slate: #3f4041;
  --color-mist: #6a6b6b;
  --color-frost: #9f9fa0;
  --color-pearl: #cacaca;
  --color-bone: #f5f5f7;
  --color-paper-white: #ffffff;
  --color-amethyst: #847dff;
  --color-lavender-mist: #d1c9ff;
  --color-deep-iris: #4b49aa;
  --color-orchid: #dd90d8;
  --color-cyan-spark: #00b3dd;
  --color-sky-wash: #90b8f0;
  --color-twilight-navy: #195f97;
  --color-dusk-sky: #408ac1;
  --gradient-dusk-sky: linear-gradient(180deg, #0f1011 0%, #131d27 18%, #1a4788 37%, #408ac1 69%, #408ac1 100%);

  /* Typography — Font Families */
  --font-suisseintltrial: 'Suisseintltrial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-display: 'Lyon Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisse-intl: 'Suisse Int'l', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisse-intl-trial: 'Suisse Int'l Trial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-suisseintl: 'Suisseintl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.35;
  --tracking-caption: 0.19px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.41;
  --text-heading: 38px;
  --leading-heading: 1;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.9;
  --text-display: 96px;
  --leading-display: 0.9;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

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
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-140: 140px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 30px;
  --radius-full: 1440px;
  --radius-full-2: 14385.6px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-tags: 14385.6px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 1440px;
  --radius-feature-cards: 30px;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.2) 0px 18px 20px 0px;

  /* Surfaces */
  --surface-obsidian-canvas: #0f1011;
  --surface-carbon-layer: #090a0b;
  --surface-graphite-plate: #2e2e2;
  --surface-slate-cap: #3f4041;
  --surface-pearl-lift: #cacaca;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #0f1011;
  --color-void-black: #000000;
  --color-carbon: #090a0b;
  --color-graphite: #2e2e2e;
  --color-slate: #3f4041;
  --color-mist: #6a6b6b;
  --color-frost: #9f9fa0;
  --color-pearl: #cacaca;
  --color-bone: #f5f5f7;
  --color-paper-white: #ffffff;
  --color-amethyst: #847dff;
  --color-lavender-mist: #d1c9ff;
  --color-deep-iris: #4b49aa;
  --color-orchid: #dd90d8;
  --color-cyan-spark: #00b3dd;
  --color-sky-wash: #90b8f0;
  --color-twilight-navy: #195f97;
  --color-dusk-sky: #408ac1;

  /* Typography */
  --font-suisseintltrial: 'Suisseintltrial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-display: 'Lyon Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisse-intl: 'Suisse Int'l', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-suisse-intl-trial: 'Suisse Int'l Trial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-suisseintl: 'Suisseintl', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.35;
  --tracking-caption: 0.19px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.41;
  --text-heading: 38px;
  --leading-heading: 1;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.9;
  --text-display: 96px;
  --leading-display: 0.9;

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
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-140: 140px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 30px;
  --radius-full: 1440px;
  --radius-full-2: 14385.6px;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.2) 0px 18px 20px 0px;
}
```