# Revenue-Grade Automation — Style Reference
> monochrome engineering blueprint with a violet spark

**Theme:** light

Default runs on near-monochrome restraint: white and light-gray canvas, near-black text, and a single vivid violet as the only chromatic voice. Typography is compressed and structural — NB International Pro at near-unity line-heights (0.97) gives display type an engineered, blueprint feel rather than a decorative one. Components stay flat, bordered, and utility-first: 8px radii, hairline dark borders, no decorative shadows or gradients. The violet (#5757f8) does all chromatic work — primary CTAs, active nav, link text — and its scarcity makes it semantically loud. Every element reads like part of a control panel: the workflow builder screenshots, the logo cloud, the two-column problem/solution bands all share the same quiet, technical rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Default Violet | `#5757f8` | `--color-default-violet` | Violet action color for filled buttons, selected navigation states, and focused conversion moments |
| Ink Black | `#202020` | `--color-ink-black` | Primary text, icon strokes, hairline borders, dark ghost button borders — the structural anchor of the entire interface |
| Carbon | `#333333` | `--color-carbon` | Secondary text, muted UI text, input borders — one step lighter than Ink for hierarchy without color |
| Frost | `#f5f5f5` | `--color-frost` | Page canvas, subtle surface washes, input backgrounds, ghost button fills — the dominant background tone |
| Paper White | `#ffffff` | `--color-paper-white` | Card surfaces, elevated panels, button text on violet, input fields — the bright surface layer above Frost |

## Tokens — Typography

### NB International Pro — Display and heading type. Tight line-heights (0.97 at 72px) create compressed, architectural headlines rather than airy marketing type. The negative tracking (-0.02em) tightens large sizes into a single visual block. NB International's geometric grotesque character gives the system an engineered, technical voice. · `--font-nb-international-pro`
- **Substitute:** Space Grotesk, Inter Tight, or General Sans
- **Weights:** 500, 700
- **Sizes:** 26px, 36px, 48px, 64px, 72px
- **Line height:** 0.97, 1.00, 1.20
- **Letter spacing:** -0.02em
- **Role:** Display and heading type. Tight line-heights (0.97 at 72px) create compressed, architectural headlines rather than airy marketing type. The negative tracking (-0.02em) tightens large sizes into a single visual block. NB International's geometric grotesque character gives the system an engineered, technical voice.

### Saans Trial — Body, UI controls, buttons, inputs, card text, nav links. The workhorse family for everything non-display. Weight 500 for body reads with quiet confidence; weight 700 for buttons and labels adds authority without aggression. Generous line-height (1.40–1.43) at body sizes keeps dense text blocks readable. · `--font-saans-trial`
- **Substitute:** Inter, Geist, or Söhne
- **Weights:** 500, 700
- **Sizes:** 14px, 16px, 18px, 20px
- **Line height:** 1.20, 1.40, 1.43
- **Role:** Body, UI controls, buttons, inputs, card text, nav links. The workhorse family for everything non-display. Weight 500 for body reads with quiet confidence; weight 700 for buttons and labels adds authority without aggression. Generous line-height (1.40–1.43) at body sizes keeps dense text blocks readable.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.43 | — | `--text-caption` |
| body-sm | 16px | 1.4 | — | `--text-body-sm` |
| body | 18px | 1.4 | — | `--text-body` |
| subheading | 20px | 1.2 | — | `--text-subheading` |
| heading-sm | 26px | 1.2 | -0.52px | `--text-heading-sm` |
| heading | 36px | 1 | -0.72px | `--text-heading` |
| heading-lg | 48px | 1 | -0.96px | `--text-heading-lg` |
| display | 72px | 0.97 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 80 | 80px | `--spacing-80` |
| 88 | 88px | `--spacing-88` |
| 96 | 96px | `--spacing-96` |
| 176 | 176px | `--spacing-176` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 8px |
| pills | 9999px |
| inputs | 8px |
| buttons | 8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 24px

## Components

### Primary CTA Button
**Role:** Main conversion action — demo booking, signup

Filled violet (#5757f8) background, white text, 8px radius, 10–20px horizontal padding, 5px vertical padding. Saans Trial weight 500, 14–16px. Arrow icon (→) appended in white. 1425.6px (pill) variant for inline hero CTAs.

### Ghost Button
**Role:** Secondary action — "See an interactive demo"

White or transparent background, #202020 1px border, #202020 text, 8px radius, 20px horizontal padding. Saans Trial weight 500. No fill on hover, slight darkening instead.

### Email Input with Inline CTA
**Role:** Hero lead capture

White background, #f5f5f5 or #202020 hairline border, 8px radius, 16–20px padding. Placeholder text in Carbon (#333333). Violet CTA button attached to the right inside a shared container, 8px outer radius.

### Product Feature Card
**Role:** Showcase product UI screenshots in feature sections

White (#ffffff) background, #202020 1px border, 8px radius, 24px internal padding. Contains a product screenshot or illustration. No shadow — the border alone defines the card edge.

### Dark Feature Panel
**Role:** High-contrast feature showcase (e.g. "chaos vs. Default" comparison)

#202020 background, white text and icons, 8px radius, 24px padding. Used to invert the canvas and create visual rhythm in alternating sections.

### Logo Cloud Row
**Role:** Social proof — customer/partner logos

Single horizontal row of monochrome logos on the #f5f5f5 canvas, evenly spaced with 33–48px gaps. Logos rendered in their own brand colors or desaturated to near-black.

### Workflow Builder Node
**Role:** Product UI element — workflow step cards

White background, #202020 1px border, 8px radius, 12–16px padding. Icon prefix in colored square (green for form, blue for data, red for error). Label in Saans 500, sublabel in smaller weight. Connected by thin #202020 lines with circular node points.

### Status Pill
**Role:** Inline status indicators in workflow nodes

Pill shape (9999px radius), small padding (2–6px vertical, 8–12px horizontal), colored background with matching text. Green (#22c55e) for success ("Meeting booked"), red (#ef4444) for error ("Meeting not booked"). Saans 500 at 12–14px.

### Navigation Bar
**Role:** Top-level site navigation

White or transparent background, sticky. Logo left, nav links center in Saans 500, Login (text link) and violet CTA right. No border-bottom — separation comes from the canvas color shift.

### Pill Announcement Tag
**Role:** Above-hero release announcement

White background, #202020 1px border, pill radius, 8–12px vertical padding, 16–20px horizontal. Small sparkle/star icon prefix. Saans 500 at 14px.

### Two-Column Problem/Solution Block
**Role:** Mid-page value proposition

Two equal columns side by side, each with a small uppercase eyebrow label (e.g. "Problem", "Solution") in Carbon, a subheading in NB International, and body text in Saans. Light Frost (#f5f5f5) or Paper White background, 24px internal padding, 48px column gap.

### Footer Section
**Role:** Site footer with links and branding

White or Frost background, multi-column link grid in Saans 500 at 14–16px, small logo and copyright. Minimal — no heavy graphics or decorative elements.

## Do's and Don'ts

### Do
- Use #5757f8 only for primary actions, active states, and link text — its scarcity is its power
- Set all border-radius to 8px for cards, buttons, inputs, and images, or 9999px for pills — no intermediate values
- Use NB International Pro for all headings and display text, with -0.02em letter-spacing and line-height ≤1.0 for sizes above 36px
- Separate elements with 1px #202020 borders and whitespace, never with shadows or gradients
- Keep the page background at #f5f5f5 and card surfaces at #ffffff — the two-step neutral stack is the structural backbone
- Use #202020 for all primary text and icon strokes — never introduce a third dark neutral
- Maintain 24px element gaps and 24px card padding as the base rhythm, scaling to 80px between major sections

### Don't
- Do not introduce additional chromatic colors — the system is monochrome + one violet accent, and adding more breaks the restraint
- Do not use shadows on cards, buttons, or panels — depth comes from borders and background contrast only
- Do not use decorative gradients — this system has none and they would clash with the engineering aesthetic
- Do not set heading line-height above 1.0 for sizes 36px+ — the compressed, near-unity leading is a signature choice
- Do not use #333333 for primary text or large bodies of text — reserve Carbon for secondary/muted text and small UI elements
- Do not use border-radius values other than 8px or 9999px — intermediate radii would soften the precise, technical feel
- Do not use photography, lifestyle imagery, or abstract decorative graphics — product screenshots and bordered panels are the only visuals

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f5f5f5` | Page background, section bands |
| 1 | Card | `#ffffff` | Product screenshots, content cards, elevated panels |
| 2 | Accent Fill | `#5757f8` | Primary action buttons, active states |
| 3 | Ink Surface | `#202020` | Dark feature cards, illustration backgrounds |

## Elevation

This system deliberately avoids shadows. All depth and separation is achieved through borders (1px #202020 or #f5f5f5), background color contrast, and whitespace. A shadow would undermine the flat, engineering-blueprint feel that defines the visual language.

## Imagery

Product screenshots dominate — specifically screenshots of the workflow builder UI, showing node-based flowcharts with colored status indicators, connection lines, and side panels. These are shown in bordered white cards, never full-bleed. Supporting visuals include dark (#202020) feature panels with floating white pill-shaped error/label tags arranged in a scattered, chaotic pattern to contrast with the organized Default side. No photography, no lifestyle imagery, no abstract gradients. The product IS the hero content.

## Agent Prompt Guide

## Quick Color Reference
- Canvas/background: #f5f5f5
- Card surface: #ffffff
- Primary text: #202020
- Secondary text: #333333
- Border: #202020 (1px) or #f5f5f5
- Accent/primary action: #5757f8 (filled action)
- Accent text on white: #5757f8 (5.1:1 contrast — passes AA)

## Example Component Prompts

1. **Hero Section**: Center on #f5f5f5 canvas. Pill announcement tag above headline (white bg, #202020 1px border, 9999px radius, 8px/16px padding, Saans 500 14px in #202020). Headline at 72px NB International Pro weight 500, #202020, line-height 0.97, letter-spacing -1.44px. Subtext at 18px Saans 500, #202020, max-width 640px centered. Email input group: white bg, #202020 1px border, 8px radius, 16px padding, with inline violet (#5757f8) button "Book a demo →" at 14px Saans 500 white text, right-attached.

2. **Product Feature Card**: White (#ffffff) surface, #202020 1px border, 8px radius, 24px padding. Contains a workflow builder screenshot showing connected nodes with green status pills. 8px gap between cards in a two-column grid with 48px column gap.

3. **Two-Column Problem/Solution Block**: #ffffff background per column, no border. Eyebrow label "Problem" / "Solution" in Saans 500 14px, #333333, uppercase. Subheading in NB International 36px weight 500, #202020, line-height 1.0, letter-spacing -0.72px. Body text in Saans 500 16px, #202020, line-height 1.4.

4. **Dark Comparison Panel**: #202020 background, 8px radius, 24px padding. White (#ffffff) text and floating error/label pills (white bg, #202020 border, 9999px radius, 12px/8px padding) scattered to show "chaos" vs. an organized Default layout on the right side of the pair.

5. **Navigation Bar**: White or transparent, max-width 1200px centered. Logo left, nav links (Platform, Use cases, Pricing, Resources) in Saans 500 14px #202020 center. Right side: "Login" text link in #202020, then violet (#5757f8) pill button "Book a demo →" at 14px Saans 500 white text, 9999px radius, 20px/10px padding.

## Typographic Personality

The combination of NB International Pro's geometric grotesque character with aggressive negative tracking and sub-1.0 line-heights at large sizes is the most distinctive typographic choice. Headlines at 72px sit at line-height 0.97, meaning lines overlap slightly — this creates a dense, block-like display effect that reads as engineered architecture rather than marketing prose. The contrast with Saans Trial's generous 1.4 line-height at body sizes reinforces the two-register system: compressed authority above, readable clarity below.

## Similar Brands

- **Linear** — Same near-monochrome interface with a single vivid accent color (Linear's purple vs. Default's violet), tight geometric display type, and bordered flat cards with no shadows
- **Vercel** — Restrained light theme, single accent color, compressed display headlines, and a technical/engineering visual register rather than marketing warmth
- **Retool** — Developer-tool aesthetic with workflow/builder UI as the hero content, flat bordered components, and a minimal color palette
- **Make (Integromat)** — Automation-platform visual language with node-based workflow screenshots as primary product imagery and a single brand accent against neutral surfaces

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-default-violet: #5757f8;
  --color-ink-black: #202020;
  --color-carbon: #333333;
  --color-frost: #f5f5f5;
  --color-paper-white: #ffffff;

  /* Typography — Font Families */
  --font-nb-international-pro: 'NB International Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-saans-trial: 'Saans Trial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.52px;
  --text-heading: 36px;
  --leading-heading: 1;
  --tracking-heading: -0.72px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.96px;
  --text-display: 72px;
  --leading-display: 0.97;
  --tracking-display: -1.44px;

  /* Typography — Weights */
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-176: 176px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 24px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 1425.6px;

  /* Named Radii */
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;

  /* Surfaces */
  --surface-canvas: #f5f5f5;
  --surface-card: #ffffff;
  --surface-accent-fill: #5757f8;
  --surface-ink-surface: #202020;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-default-violet: #5757f8;
  --color-ink-black: #202020;
  --color-carbon: #333333;
  --color-frost: #f5f5f5;
  --color-paper-white: #ffffff;

  /* Typography */
  --font-nb-international-pro: 'NB International Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-saans-trial: 'Saans Trial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --text-body: 18px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.52px;
  --text-heading: 36px;
  --leading-heading: 1;
  --tracking-heading: -0.72px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.96px;
  --text-display: 72px;
  --leading-display: 0.97;
  --tracking-display: -1.44px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-176: 176px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 1425.6px;
}
```