# Hyer Aviation — Style Reference
> Airline tail-fin etched into marble

**Theme:** mixed

Hyer Aviation operates on a duality: a stark, high-contrast canvas that alternates between crisp white editorial space and deep blue-tinted black voids, anchored by an almost-black primary that behaves like a structural ink rather than a color. Typography is oversized and architectural — a single custom display face (HelveticaNowDisplay) carries every voice, from a 187px wordmark to 17px body copy, using tight tracking at scale to feel carved rather than typeset. A single warm terracotta accent (#bc7155) provides the only chromatic warmth in an otherwise monochromatic system, reserved for the most deliberate action moments. Components are stripped to their bones: pill buttons, hairline dividers, generous white space, and almost no elevation — the page reads as a print magazine spread about flight, not a product dashboard.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian Ink | `#000d10` | `--color-obsidian-ink` | Primary text, logo, borders, filled buttons, nav — reads as pure black but carries a barely-perceptible cool tint that warms the terracotta accent by proximity |
| Copper Clay | `#bc7155` | `--color-copper-clay` | Accent fill for featured actions and decorative shapes — a warm terracotta that is the only chromatic voice in the system, deliberately off-trend for aviation (not sky blue) to signal craft and human service over machinery |
| Marble White | `#ffffff` | `--color-marble-white` | Primary canvas, text on dark sections, ghost-button fills |
| Dusk Blue-Black | `#0f0f1c` | `--color-dusk-blue-black` | Dark section backgrounds — deeper than Obsidian, with a noticeable indigo cast that separates full-bleed dark bands from the near-black used for text |
| Midnight Slate | `#151623` | `--color-midnight-slate` | Alternate dark section background — a touch lighter and more violet than Dusk Blue-Black, used to create subtle variation between full-bleed dark bands |
| Ash Gray | `#8e8e95` | `--color-ash-gray` | Muted body text, secondary nav, hairline borders — a true neutral that recedes against Obsidian Ink without competing |
| Bone | `#d5d3d4` | `--color-bone` | Warm light gray for subtle surface differentiation and high-contrast text on dark sections |

## Tokens — Typography

### HelveticaNowDisplay — The single typeface carries every voice on the site. Weight 400 at extreme sizes (131px, 187px) for the logo and hero wordmark — a deliberate anti-convention choice that makes the wordmark feel like an architectural mark, not a banner. Weight 700 for editorial headlines at 52–63px, set tight (-0.02em) so the letterforms nearly touch. Weight 400 at 17–23px for body and navigation, with generous 1.61 leading that lets paragraphs breathe like print. · `--font-helveticanowdisplay`
- **Substitute:** Inter (400, 700) with tight tracking, or Neue Haas Grotesk Display
- **Weights:** 400, 700
- **Sizes:** 17, 18, 20, 23, 30, 37, 52, 60, 63, 131, 187
- **Line height:** 0.80 (display), 0.91–1.10 (headings), 1.20 (subheadings), 1.61 (body)
- **Letter spacing:** -2px at 187px (-0.02em equivalent), -1.2px at 63px, 0 at 30–37px, +0.2px at 17–20px
- **Role:** The single typeface carries every voice on the site. Weight 400 at extreme sizes (131px, 187px) for the logo and hero wordmark — a deliberate anti-convention choice that makes the wordmark feel like an architectural mark, not a banner. Weight 700 for editorial headlines at 52–63px, set tight (-0.02em) so the letterforms nearly touch. Weight 400 at 17–23px for body and navigation, with generous 1.61 leading that lets paragraphs breathe like print.

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 700
- **Sizes:** 17px
- **Line height:** 1
- **Role:** sans-serif — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 17px | 1.61 | 0.2px | `--text-caption` |
| body | 20px | 1.61 | — | `--text-body` |
| subheading | 23px | 1.2 | — | `--text-subheading` |
| heading-sm | 30px | 1.1 | — | `--text-heading-sm` |
| heading | 37px | 1.1 | — | `--text-heading` |
| heading-lg | 52px | 1.09 | -1px | `--text-heading-lg` |
| display | 63px | 1 | -1.2px | `--text-display` |
| wordmark | 187px | 0.8 | -3.74px | `--text-wordmark` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 11 | 11px | `--spacing-11` |
| 13 | 13px | `--spacing-13` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 17 | 17px | `--spacing-17` |
| 21 | 21px | `--spacing-21` |
| 22 | 22px | `--spacing-22` |
| 23 | 23px | `--spacing-23` |
| 31 | 31px | `--spacing-31` |
| 34 | 34px | `--spacing-34` |
| 38 | 38px | `--spacing-38` |
| 53 | 53px | `--spacing-53` |
| 59 | 59px | `--spacing-59` |
| 60 | 60px | `--spacing-60` |
| 68 | 68px | `--spacing-68` |
| 119 | 119px | `--spacing-119` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 1000px |
| cards | 0px |
| inputs | 0px |
| buttons | 1000px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 68px
- **Card padding:** 22px
- **Element gap:** 23px

## Components

### Wordmark Logo
**Role:** Primary brand identifier

The literal 'Hyer' wordmark set in HelveticaNowDisplay weight 400 at 131–187px, line-height 0.80, letter-spacing -0.02em. The ® registered mark sits as a small superscript to the right of the wordmark, also in Obsidian Ink. Never colorized, never re-weighted — the wordmark IS the brand mark and uses its sheer scale to dominate the hero.

### Filled Pill Button (Dark)
**Role:** Primary action

1000px border-radius, Obsidian Ink (#000d10) fill, white text, HelveticaNowDisplay weight 700 at 17–18px, padding 15px 22px. No shadow, no border. Used for the dominant action in any context (All Solutions, Ownership).

### Ghost Pill Button
**Role:** Secondary action

1000px border-radius, transparent fill, 1px Obsidian Ink border, Obsidian Ink text, same dimensions as filled variant. Used alongside filled buttons as a paired secondary call.

### Top Navigation Bar
**Role:** Site navigation

Horizontal top-right nav (Solutions, About us, Contact), HelveticaNowDisplay weight 400 at ~17–18px, Obsidian Ink text, 13px margin between items. No background, no underline, no active state indicator visible. A circular menu trigger (hamburger) sits to the far right as a solid Obsidian Ink circle.

### Hero Headline (Editorial)
**Role:** Section-opening statement

HelveticaNowDisplay weight 700, 52–63px, line-height 1.0–1.09, letter-spacing -0.02em, Obsidian Ink. Set as a single block of text across 4–6 lines with no line breaks forced by markup — the wrap is organic, giving the type a manifesto feel. Always left-aligned, never centered.

### Feature Block with Hairline Divider
**Role:** Content grouping in multi-item lists

Each item separated from the next by a 1px Ash Gray (#8e8e95) horizontal line at full column width. Above each line: subhead in HelveticaNowDisplay weight 700 at ~20–23px in Obsidian Ink. Below: body copy in weight 400 at 17–18px. Generous vertical breathing room (~38px) between divider and subhead.

### Full-Bleed Dark Section
**Role:** Alternate background band

Background fills the full viewport width with Dusk Blue-Black (#0f0f1c) or Midnight Slate (#151623). Headlines in white at display sizes, body in white or Bone (#d5d3d4). No cards, no elevation — the section is a single flat plane of dark color with text floating on it.

### Hero Aircraft Image
**Role:** Primary visual

Full-bleed or large-format product photography of a private jet, composited over a soft sky gradient (white-to-pale-blue). No rounded corners, no frame, no overlay treatment. The aircraft is the hero — no lifestyle context, no passengers visible.

### Page Section Band
**Role:** Vertical rhythm unit

Alternating white and deep blue-tinted black bands stacked vertically with ~68px vertical gap. Each band is full-width; content within is contained to a 1200px max-width centered column. No visible dividers between bands — the color change is the divider.

### Inline Tag Row
**Role:** Language/metadata indicators

Small inline items (flag emojis, language labels) set inline with body text in dark sections, no badge chrome, no pill background. Appears as part of the paragraph flow.

## Do's and Don'ts

### Do
- Use 1000px border-radius for every button and interactive tag — no exceptions
- Set headlines at weight 700 with letter-spacing -0.02em so letterforms nearly touch at display sizes
- Alternate full-bleed white and #0f0f1c or #151623 bands with 68px vertical rhythm between them
- Reserve #bc7155 Copper Clay for at most one action per screen — it is the only warm voice in an otherwise cold system
- Left-align all editorial copy within its column; never center-align body text or feature lists
- Use the 187px wordmark scale for the logo and nothing else — hero headlines max out at 63px
- Separate list items with 1px #8e8e95 hairline dividers that span the full column width

### Don't
- Do not introduce drop shadows, glows, or any elevation effects — depth comes from color contrast alone
- Do not use a second typeface — HelveticaNowDisplay at varying weights carries the entire voice
- Do not center-align feature lists, body copy, or multi-line headlines
- Do not use #bc7155 for borders, text, or decorative shapes — it is fill-only and rare
- Do not add rounded corners to images, cards, or sections — the system is sharp-edged except for pill buttons
- Do not use #000d10 on #0f0f1c or #151623 — they are too close in luminance; pair dark text with #ffffff or #d5d3d4
- Do not stack more than two buttons in a row; pairs (one filled, one ghost) are the maximum unit

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Marble White | `#ffffff` | Primary canvas for editorial and content sections |
| 1 | Bone | `#d5d3d4` | Warm neutral for subtle surface differentiation within light sections |
| 2 | Ash Gray | `#8e8e95` | Mid-tone for borders, hairlines, and secondary text |
| 3 | Obsidian Ink | `#000d10` | Text and primary structural elements |
| 4 | Dusk Blue-Black | `#0f0f1c` | Dark section background |
| 5 | Midnight Slate | `#151623` | Alternate dark section background |

## Elevation

This system deliberately avoids elevation. No drop shadows, no glow effects, no layered cards floating on backgrounds. Depth is created exclusively through color contrast — a near-black band on white, or a white block on a dark band. Surfaces are flat planes, not floating objects. Where a button needs to feel interactive, its filled black fill on white (or vice versa) provides the contrast, never a shadow.

## Imagery

Imagery is aircraft-as-hero: large, full-bleed or generously sized private jet photographs with no lifestyle context, no passengers, no cockpit interiors. The sky is always a soft gradient from white to pale blue — never dramatic sunset, never stormy, never a hangar. Treatment is photographic realism with no duotone, no desaturation, no color grading. Images float on the canvas without frames, rounded corners, or masks. The aircraft is treated like a luxury product shot: isolated, centered, monumental. No illustration, no abstract graphics, no icon system beyond the single hamburger menu trigger. The product photograph IS the visual language.

## Layout

The page is a vertical sequence of full-bleed bands alternating between white and deep blue-tinted black, each band containing centered content constrained to a 1200px max-width. The hero is an asymmetric composition: the wordmark dominates the upper-left third of the viewport, navigation anchors the upper-right, and the aircraft image sits in the lower-center bleeding off the bottom edge. Headlines are always left-aligned within their content column — never centered. The rhythm is generous: ~68px between sections, large blocks of white space, no dense multi-column grids. Content blocks within light sections use a 2-column arrangement (large left column for headline, narrower right column for paired feature items separated by hairline dividers). Dark sections invert: content is bottom-aligned and narrower, with headlines at the top and descriptive paragraphs at the bottom.

## Agent Prompt Guide

**Quick Color Reference**
- Text: #000d10 (Obsidian Ink)
- Background: #ffffff (Marble White)
- Dark section background: #0f0f1c (Dusk Blue-Black)
- Border / hairline: #8e8e95 (Ash Gray)
- Accent / featured action: #bc7155 (Copper Clay)
- Text on dark: #ffffff or #d5d3d4
- primary action: #bc7155 (filled action)

**3-5 Example Component Prompts**

1. Create a hero section: white canvas (#ffffff). A left-aligned wordmark 'Brand' set in HelveticaNowDisplay weight 400 at 187px, line-height 0.80, letter-spacing -3.74px, color #000d10, with a small ® superscript in the same color. A right-aligned horizontal nav (3 items, 18px, weight 400, color #000d10, 13px gaps). Below the wordmark, a full-width photograph of a private jet, unframed, bleeding to the bottom edge.

2. Create a feature list block on white (#ffffff): a left-aligned editorial headline in HelveticaNowDisplay weight 700 at 63px, line-height 1.0, letter-spacing -1.2px, color #000d10, wrapping across 4–6 lines naturally. Below, a 2-column grid of three items, each topped by a 1px #8e8e95 hairline divider spanning the column width. Each item has a subhead in weight 700 at 20px (#000d10) and body copy in weight 400 at 17px (#000d10), with 38px vertical space between divider and subhead.

3. Create a dark band: full-bleed #0f0f1c background. A white headline at the top center in HelveticaNowDisplay weight 700 at 52px, line-height 1.09, letter-spacing -1px. Body paragraph at the bottom-right in white at 17px, line-height 1.61, max-width ~400px. No cards, no shadows, no elevation.

4. Create a paired button group: two pill buttons side by side with 13px gap. First button: #000d10 fill, white text, 1000px border-radius, padding 15px 22px, text in HelveticaNowDisplay weight 700 at 17px. Second button: transparent fill, 1px #000d10 border, #000d10 text, same dimensions and radius.

5. Create a featured action button: #bc7155 (Copper Clay) fill, white text, 1000px border-radius, padding 15px 22px, text in HelveticaNowDisplay weight 700 at 17px. Use sparingly — this is the system's only warm chromatic moment and should appear at most once per screen.

## Similar Brands

- **VistaJet** — Same private-aviation editorial language: full-bleed dark sections, oversized type, single brand color against monochrome, pill-shaped ghost buttons
- **NetJets** — Same mix of stark white editorial space and deep dark bands, wordmark-as-hero, generous whitespace, minimal component chrome
- **Aman Resorts** — Same ultra-minimal approach: near-black text on white, massive serif-replacement display type, hairline dividers, absence of shadows, editorial magazine feel
- **Bang & Olufsen** — Same treatment of product as monumental object floating in white space, no rounded corners, near-black primary, single warm accent for featured moments

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian-ink: #000d10;
  --color-copper-clay: #bc7155;
  --color-marble-white: #ffffff;
  --color-dusk-blue-black: #0f0f1c;
  --color-midnight-slate: #151623;
  --color-ash-gray: #8e8e95;
  --color-bone: #d5d3d4;

  /* Typography — Font Families */
  --font-helveticanowdisplay: 'HelveticaNowDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 17px;
  --leading-caption: 1.61;
  --tracking-caption: 0.2px;
  --text-body: 20px;
  --leading-body: 1.61;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --text-heading: 37px;
  --leading-heading: 1.1;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.09;
  --tracking-heading-lg: -1px;
  --text-display: 63px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --text-wordmark: 187px;
  --leading-wordmark: 0.8;
  --tracking-wordmark: -3.74px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-31: 31px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-53: 53px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-119: 119px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 68px;
  --card-padding: 22px;
  --element-gap: 23px;

  /* Border Radius */
  --radius-3xl: 45px;
  --radius-full: 1000px;

  /* Named Radii */
  --radius-tags: 1000px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 1000px;

  /* Surfaces */
  --surface-marble-white: #ffffff;
  --surface-bone: #d5d3d4;
  --surface-ash-gray: #8e8e95;
  --surface-obsidian-ink: #000d10;
  --surface-dusk-blue-black: #0f0f1c;
  --surface-midnight-slate: #151623;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian-ink: #000d10;
  --color-copper-clay: #bc7155;
  --color-marble-white: #ffffff;
  --color-dusk-blue-black: #0f0f1c;
  --color-midnight-slate: #151623;
  --color-ash-gray: #8e8e95;
  --color-bone: #d5d3d4;

  /* Typography */
  --font-helveticanowdisplay: 'HelveticaNowDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 17px;
  --leading-caption: 1.61;
  --tracking-caption: 0.2px;
  --text-body: 20px;
  --leading-body: 1.61;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.1;
  --text-heading: 37px;
  --leading-heading: 1.1;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.09;
  --tracking-heading-lg: -1px;
  --text-display: 63px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --text-wordmark: 187px;
  --leading-wordmark: 0.8;
  --tracking-wordmark: -3.74px;

  /* Spacing */
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-31: 31px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-53: 53px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-68: 68px;
  --spacing-119: 119px;

  /* Border Radius */
  --radius-3xl: 45px;
  --radius-full: 1000px;
}
```