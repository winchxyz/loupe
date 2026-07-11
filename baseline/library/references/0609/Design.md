# Travelperk — Style Reference
> Lime spark on warm parchment — electric CTA green against aged-paper cream, zero shadows, everything rounded at exactly 26px.

**Theme:** light

Perk radiates controlled energy — a lime-charged black-and-cream field where electric #beff50 punches through near-black and warm off-white surfaces. The warm off-white (#f5f5eb) hero background reads as aged paper next to the electric lime, making the palette feel tactile rather than digital. A single custom sans, OTSono, does all the work at every scale from 10px UI labels to 200px display glyphs, with tight 0.89-0.90 leading and -0.03em tracking at display sizes making the oversized headlines feel compressed and purposeful. The 26px radius is the system's dominant shape language — applied uniformly to buttons, cards, and image frames — creating rounded-corner consistency that softens an otherwise high-contrast black/lime/cream palette. No shadows, no gradients — surfaces differ only by background value, with #14140f dark cards, #ffffff white cards, and #f5f5eb warm-cream cards all sharing the same 26px radius and no elevation metaphor.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Lime | `#beff50` | `--color-electric-lime` | Primary CTA buttons, active UI chips, icon accent fills — the single chromatic accent that detonates against every surface (near-black, white, and cream alike), creating urgency without red-coded alarm |
| Near Black | `#14140f` | `--color-near-black` | Primary text color, dark card backgrounds, nav borders — a warmed black (not pure #000000) that pairs with cream for a slightly analog feeling |
| Pure Black | `#000000` | `--color-pure-black` | High-contrast text, icon fills, button borders at max contrast |
| Pure White | `#ffffff` | `--color-pure-white` | Card backgrounds, overlay surfaces, inverted button text |
| Warm Cream | `#f5f5eb` | `--color-warm-cream` | Page hero background, section fills — the warm off-white that makes Electric Lime feel naturalistic rather than neon |
| Parchment Card | `#fafaf5` | `--color-parchment-card` | Secondary card surface, nested panel backgrounds |
| Stone | `#d2d2c8` | `--color-stone` | Borders, disabled states, circular icon-only buttons in inactive state |
| Graphite | `#6e6e64` | `--color-graphite` | Body text, supporting labels, card subtext — warm mid-gray that keeps warmth consistent across the achromatic scale |
| Charcoal | `#30302a` | `--color-charcoal` | Dark surface card backgrounds, secondary dark mode elements |
| Slate Border | `#919183` | `--color-slate-border` | Dividers, subtle borders on light surfaces |
| Signal Blue | `#144fcc` | `--color-signal-blue` | SVG icon fills — brand-category transport icons only |
| Coral Alert | `#eb3131` | `--color-coral-alert` | Status badges — 'Needs Approval' destructive state only |
| Mint Confirm | `#1dc479` | `--color-mint-confirm` | Status badges — 'Confirmed' positive state only |

## Tokens — Typography

### OTSono — The sole typeface across every context — navigation, badges, body, hero — making the design legible entirely through weight and size differentiation rather than font switching. At 80–200px, 0.89 line-height stacks headlines tighter than their cap-height, creating a compressed slab-like mass. The -0.03em tracking at display sizes and +0.10em at small caps/labels span the entire letter-spacing vocabulary of the system. · `--font-otsono`
- **Substitute:** Cabinet Grotesk, Geist, or General Sans (rounded terminals, high x-height grotesque)
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 17px, 18px, 20px, 22px, 24px, 30px, 32px, 40px, 64px, 80px, 90px, 200px
- **Line height:** 0.89–1.50 (display: 0.89–0.90, body: 1.40–1.50, headings: 1.00–1.20)
- **Letter spacing:** -0.03em at display sizes (80px, 90px, 200px); +0.10em at small label/badge sizes
- **OpenType features:** `Not explicitly detected`
- **Role:** The sole typeface across every context — navigation, badges, body, hero — making the design legible entirely through weight and size differentiation rather than font switching. At 80–200px, 0.89 line-height stacks headlines tighter than their cap-height, creating a compressed slab-like mass. The -0.03em tracking at display sizes and +0.10em at small caps/labels span the entire letter-spacing vocabulary of the system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.5 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 30px | 1.2 | — | `--text-heading-sm` |
| heading | 40px | 1.1 | — | `--text-heading` |
| heading-lg | 64px | 1 | -1.92px | `--text-heading-lg` |
| display | 90px | 0.89 | -2.7px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 26px |
| badges | 8px |
| images | 26px |
| buttons | 26px |
| pillTabs | 26px |
| iconButtons | 50% |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 60px
- **Card padding:** 24-40px
- **Element gap:** 8-16px

## Components

### Primary CTA Button
**Role:** Main conversion action — 'Book a demo', 'Get started'

Background #beff50, text #14140f, border 1px solid #14140f, border-radius 26px, padding 16px 16px. OTSono 16px weight 500. No shadow. The lime fill makes this the loudest element on any surface — used sparingly, max 2 per page section.

### Ghost Button — Dark
**Role:** Secondary actions on light backgrounds

Background transparent, text #14140f, border 1px solid #14140f, border-radius 26px, padding 16px 12px–16px. OTSono 16px weight 400. Used for 'Learn more', 'Show all features' on cream/white backgrounds.

### Ghost Button — Light
**Role:** Secondary actions on dark backgrounds

Background transparent, text #ffffff, border 1px solid #ffffff, border-radius 26px, padding 16px. OTSono 16px weight 400. Used when button sits on #14140f dark card or dark section.

### Circular Icon Button — Filled
**Role:** Play, pause, nav arrows

Background #d2d2c8, text #000000, border 1px solid #000000, border-radius 50%, padding 0px (intrinsic icon sizing). Used for video player controls and carousel navigation.

### Circular Icon Button — Ghost
**Role:** Alternate icon-only action

Background transparent, text #000000, border 1px solid #14140f, border-radius 50%, padding 0px. Appears alongside filled circular variant for paired controls.

### White Feature Card
**Role:** Product UI preview cards, floating info overlays on hero

Background #ffffff, border-radius 26px, no box-shadow, variable internal padding. Floats over hero cream background. Contains profile chips, flight info, or approval workflow UI. Text: #14140f primary, #6e6e64 secondary.

### Cream Feature Card
**Role:** Section feature blocks on alternating layouts

Background #fafaf5, border-radius 26px, no shadow, padding 24-40px. Houses illustrations and feature copy. Text #14140f primary, #6e6e64 body.

### Dark Feature Card
**Role:** High-contrast feature highlight, pulled quote blocks

Background #14140f, border-radius 26px, no shadow, padding 24-40px. Text and headlines in #ffffff. Electric Lime accents (#beff50) may appear as icon fills or highlight chips within.

### Lime Accent Card
**Role:** Hero feature callout — 'Real-time visibility' highlight block

Background #beff50, border-radius 26px, no shadow, padding 24-40px. Text in #14140f or #000000. The only card surface using the brand accent — used once per section to designate the primary featured insight.

### Text Badge / Status Chip
**Role:** 'On time', 'Expense submitted', 'Confirmed', 'Needs Approval' labels

Background #ffffff, text #14140f, border-radius 8px, padding 2px 8px. OTSono 12-13px weight 500. Status variants swap background or text to #1dc479 (confirmed) or #eb3131 (needs approval).

### Announcement Banner
**Role:** Top-of-page global notification strip

Full-width, background #beff50, text #14140f, OTSono 14px weight 400. Contains inline 'Learn more' underline link and ✕ dismiss icon. The only globally persistent lime surface — reinforces brand color before hero loads.

### Tab Pill Selector
**Role:** 'Automate / Control / Support' section toggles

Active state: background #14140f, text #ffffff, border-radius 26px, padding 8px 16px. Inactive state: background transparent, text #14140f. OTSono 14-16px weight 500. Container background is #d2d2c8 at 26px radius.

### Navigation Bar
**Role:** Sticky top nav

Background #f5f5eb or #ffffff, no shadow. Logo left-aligned. Nav links in OTSono 16px weight 400, color #14140f. Right cluster: globe icon + 'Book a demo' ghost button + 'Get started' lime CTA + user icon + hamburger. Bottom border 1px solid #d2d2c8.

## Do's and Don'ts

### Do
- Use #beff50 as the exclusive CTA fill — max one lime button and one lime surface element per viewport; never fill two adjacent containers with lime
- Apply 26px border-radius to all cards, buttons, and image frames regardless of content type — the single radius value IS the shape language
- Set display headlines (64px+) at line-height 0.89–1.00 with -0.03em letter-spacing so stacked lines form a compressed typographic mass
- Keep all surfaces on the warm achromatic scale: #14140f / #30302a / #fafaf5 / #f5f5eb / #ffffff — never introduce cool-tinted grays or blue-cast neutrals
- Use #6e6e64 for all supporting body text and card subtext, reserving #14140f for primary labels and headlines only
- Distinguish card hierarchy by background value alone: white (#ffffff) → cream (#fafaf5) → warm cream (#f5f5eb) → dark (#14140f) — no shadows, no borders needed
- OTSono is the only typeface — use size and weight (400 vs 500) as the sole differentiation between body and emphasis

### Don't
- Never use box-shadow or drop-shadow on any card or button — elevation is achieved through background color contrast, not shadow depth
- Never use more than two border-radius values in a layout: 26px for all cards/buttons/images, 8px for badges/chips, 50% for icon-only circles — no other radii
- Never place Electric Lime (#beff50) text on a white background — lime is a background color only; text on lime must be #14140f or #000000
- Never introduce a second typeface — OTSono handles all scales from 10px UI labels to 200px display; switching fonts breaks the single-voice identity
- Never use cool grays (#9ca3af, #6b7280 etc.) — all neutrals must carry the warm undertone of the #f5f5eb → #6e6e64 → #14140f scale
- Never stack two dark cards (#14140f) without a cream or white surface between them — the dark/light alternation defines the page rhythm
- Never apply the 26px radius to inline text links, dividers, or table rows — radius belongs only on bounded box elements

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Ground | `#f5f5eb` | Hero background and primary page fill — warm cream that makes lime feel organic not neon |
| 1 | Section Surface | `#fafaf5` | Feature cards and alternating section backgrounds — one step brighter than page ground |
| 2 | Elevated Card | `#ffffff` | White cards floating over cream backgrounds — the contrast provides the 'elevation' without shadow |
| 3 | Dark Surface | `#14140f` | Dark feature cards and announcement strip — maximum contrast against all light surfaces |

## Elevation

Zero shadow system — no box-shadow appears on any card or interactive element. Hierarchy is communicated entirely through background color: #14140f dark cards sit visually 'above' cream backgrounds not through shadow depth but through contrast mass. White (#ffffff) cards appear to float over #f5f5eb sections purely because of the value difference. This flat-surface approach makes the Electric Lime (#beff50) accent carry all the visual weight that shadows would otherwise provide.

## Imagery

Product UI screenshots displayed as floating cards over the hero background, cropped at 26px radius to match the card system. A real hand holding a phone (product mockup) anchors the hero center — lifestyle-adjacent but product-focused, not editorial. The second section features a full-bleed video embed (no autoplay) with a 'Watch full video' pill button overlay, using motion documentary-style footage. Illustrations inside feature cards are flat, line-based, geometric — two-color (black line on lime or cream fill), matching the brand palette exactly. Icons throughout the UI are 1.5px stroke weight, monochrome (#14140f or #ffffff depending on surface). No photography outside the hero hand shot and video. Image-to-text ratio is low — the design is text and UI-screenshot dominant.

## Layout

Max-width ~1200px centered on a full-bleed warm cream (#f5f5eb) hero. Hero is full-viewport with centered headline text (OTSono 80-90px) and floating product UI cards arranged in a loose z-pattern around a central phone mockup. Below hero: alternating white and cream bands, each 60px vertical padding. Feature sections use a horizontal scroll card row (4 cards visible, arrow-navigated) rather than a static grid. Tab-switched feature sections (Automate / Control / Support) show 3-column card layouts within a contained max-width box. Logo bar (social proof) runs full-width on cream. Navigation is sticky, top bar, minimal — no mega-menu. Section transitions are seamless (no visual dividers, pure background-color shifts). Overall density is spacious — generous whitespace between the large display type and card elements.

## Agent Prompt Guide

**Quick Color Reference**
- Page background: #f5f5eb (warm cream)
- Primary text: #14140f (near-black)
- Supporting text: #6e6e64 (warm graphite)
- CTA button fill: #beff50 (electric lime)
- Card surface (light): #ffffff
- Border / stone: #d2d2c8

**Example Component Prompts**

1. Hero section: Background #f5f5eb full-bleed. Centered headline 'The intelligent platform for travel and spend' at 90px OTSono weight 500, #14140f, line-height 0.89, letter-spacing -0.03em. Below: two buttons side by side — 'Book a demo' (background #beff50, text #14140f, border 1px solid #14140f, border-radius 26px, padding 16px) and 'Get started' (background transparent, text #14140f, border 1px solid #14140f, border-radius 26px, padding 16px). Float three white (#ffffff) cards at 26px radius around a central phone mockup.

2. Feature card (lime highlight): Background #beff50, border-radius 26px, padding 32px. Headline 'Real-time visibility & actionable insights' at 24px OTSono weight 500, #14140f. Body text 16px OTSono weight 400, #14140f, line-height 1.5. Flat two-color illustration (black lines on lime) in upper portion.

3. Dark feature card: Background #14140f, border-radius 26px, padding 32px. Headline 'Role-based permissions & controls' at 30px OTSono weight 500, #ffffff, line-height 1.1. Body 16px OTSono weight 400, #6e6e64.

4. Announcement banner: Full-width background #beff50. Text 'Focus on your next breakthrough. We'll handle the shadow work.' OTSono 14px weight 400, #14140f. Inline link 'Learn more' underlined, #14140f. ✕ close icon right-aligned, #14140f.

5. Navigation bar: Background #f5f5eb. Logo 'perk+' left, OTSono 18px weight 500 #14140f. Nav links center: OTSono 16px weight 400 #14140f, gap 24px. Right cluster: ghost button 'Book a demo' (border 1px solid #14140f, radius 26px, padding 12px 16px) + CTA 'Get started' (background #beff50, border 1px solid #14140f, radius 26px, padding 12px 16px). Bottom border 1px #d2d2c8.

## Similar Brands

- **Ramp** — Same high-contrast dark/light card alternation with a single vivid accent color on CTA buttons against otherwise achromatic palette
- **Notion** — Single typeface system doing all the hierarchy work through size/weight alone, warm off-white page background instead of pure white
- **Linear** — Flat-surface card system with no shadows — elevation via background color contrast only
- **Vercel** — Black/white/accent-only palette with 26px rounded cards and ghost+filled button pairing on the same nav
- **Monzo** — Electric single-hue brand accent (coral/lime) punching against near-black and white in a fintech travel-adjacent context

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-electric-lime: #beff50;
  --color-near-black: #14140f;
  --color-pure-black: #000000;
  --color-pure-white: #ffffff;
  --color-warm-cream: #f5f5eb;
  --color-parchment-card: #fafaf5;
  --color-stone: #d2d2c8;
  --color-graphite: #6e6e64;
  --color-charcoal: #30302a;
  --color-slate-border: #919183;
  --color-signal-blue: #144fcc;
  --color-coral-alert: #eb3131;
  --color-mint-confirm: #1dc479;

  /* Typography — Font Families */
  --font-otsono: 'OTSono', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.2;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.92px;
  --text-display: 90px;
  --leading-display: 0.89;
  --tracking-display: -2.7px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-224: 224px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 60px;
  --card-padding: 24-40px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 18px;
  --radius-3xl: 26px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;

  /* Named Radii */
  --radius-cards: 26px;
  --radius-badges: 8px;
  --radius-images: 26px;
  --radius-buttons: 26px;
  --radius-pilltabs: 26px;
  --radius-iconbuttons: 50%;

  /* Surfaces */
  --surface-page-ground: #f5f5eb;
  --surface-section-surface: #fafaf5;
  --surface-elevated-card: #ffffff;
  --surface-dark-surface: #14140f;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-electric-lime: #beff50;
  --color-near-black: #14140f;
  --color-pure-black: #000000;
  --color-pure-white: #ffffff;
  --color-warm-cream: #f5f5eb;
  --color-parchment-card: #fafaf5;
  --color-stone: #d2d2c8;
  --color-graphite: #6e6e64;
  --color-charcoal: #30302a;
  --color-slate-border: #919183;
  --color-signal-blue: #144fcc;
  --color-coral-alert: #eb3131;
  --color-mint-confirm: #1dc479;

  /* Typography */
  --font-otsono: 'OTSono', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.2;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.92px;
  --text-display: 90px;
  --leading-display: 0.89;
  --tracking-display: -2.7px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-224: 224px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 18px;
  --radius-3xl: 26px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;
}
```