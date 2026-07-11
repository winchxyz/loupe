# Air — Style Reference
> sky canvas, frosted glass

**Theme:** light

Air's visual system evokes a serene, cloud-like experience with a dominant blue sky background theme. Its typography balances expressive, custom display fonts for impact with understated, functional text for clarity. UI elements are largely monochromatic, maintaining focus through subtle surface variations and ghost-like components. A single vivid blue accent color is reserved for interactive states, guiding user attention and highlighting primary actions against the expansive, airy backdrop.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Sky Canvas | `#426188` | `--color-sky-canvas` | Dominant page background element, providing depth and a sky-like atmosphere. Also used for some decorative headline coloring and borders |
| Action Blue | `#2b7fff` | `--color-action-blue` | Primary accent for interactive elements, such as outlined buttons and links, guiding user actions |
| Midnight Ink | `#000000` | `--color-midnight-ink` | Primary text color for headlines and body copy, ensuring high contrast against light surfaces. Used for borders of selected elements |
| Cloud White | `#ffffff` | `--color-cloud-white` | Background for primary UI surfaces, headers, and text where contrast is needed against darker elements. Also used for ghost button borders and text |
| Charcoal Text | `#1b1b1b` | `--color-charcoal-text` | Secondary text color, providing strong contrast while being slightly softer than pure black. Used for general body text and some borders |
| Haze Grey | `#f5f5f5` | `--color-haze-grey` | Subtle background for input fields and less prominent card surfaces, providing visual separation |

## Tokens — Typography

### Control — Functional text across UI elements including buttons, body text, links, and navigation items. Acts as the primary workhorse font for readability. · `--font-control`
- **Substitute:** Inter
- **Weights:** 500
- **Sizes:** 12px, 13px, 14px, 16px, 20px
- **Line height:** 1.10, 1.40, 1.50
- **Role:** Functional text across UI elements including buttons, body text, links, and navigation items. Acts as the primary workhorse font for readability.

### Control Compressed — Extremely large, bold headlines used for dramatic impact and branding, making a statement through sheer scale and weight. · `--font-control-compressed`
- **Substitute:** Oswald Bold
- **Weights:** 900
- **Sizes:** 259px
- **Line height:** 0.85
- **Role:** Extremely large, bold headlines used for dramatic impact and branding, making a statement through sheer scale and weight.

### Control Cursive — Expressive, decorative headlines, adding a touch of distinct personality. Used for select section titles to soften the brand's technical nature. · `--font-control-cursive`
- **Substitute:** Dancing Script
- **Weights:** 400, 500
- **Sizes:** 20px, 32px, 56px
- **Line height:** 1.00, 1.10, 1.50
- **Role:** Expressive, decorative headlines, adding a touch of distinct personality. Used for select section titles to soften the brand's technical nature.

### Control TNT — Secondary expressive font for occasional headlines and prominent body text accents, offering a distinct visual texture. · `--font-control-tnt`
- **Substitute:** Space Mono
- **Weights:** 400, 500
- **Sizes:** 20px, 32px, 56px
- **Line height:** 1.00, 1.10, 1.50
- **Role:** Secondary expressive font for occasional headlines and prominent body text accents, offering a distinct visual texture.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| heading-sm | 20px | 1.1 | — | `--text-heading-sm` |
| heading | 32px | 1.1 | — | `--text-heading` |
| heading-lg | 56px | 1 | — | `--text-heading-lg` |
| display | 259px | 0.85 | — | `--text-display` |

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
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 14px |
| links | 8px |
| images | 11px |
| inputs | 4px |
| buttons | 8px |

### Layout

- **Section gap:** 48px
- **Card padding:** 20px
- **Element gap:** 8px

## Components

### Ghost Button
**Role:** Subtle, non-primary action button.

Background: transparent (rgba(0, 0, 0, 0)), Text: Cloud White (#ffffff), Border: 1px solid Cloud White (#ffffff), Padding: 0px 8px, Radius: 0px. Often used in navigation.

### Navigational Button (Ghost)
**Role:** Navigation button, visually similar to ghost button.

Background: transparent (rgba(0, 0, 0, 0)), Text: Charcoal Text (#1b1b1b), Border: 1px solid Charcoal Text (#1b1b1b), Radius: 8px, Padding: 0px.

### Content Card (Transparent)
**Role:** Informational card, often used for client logos or features without a distinct background.

Background: transparent (rgba(0, 0, 0, 0)), Padding: 0px, Radius: 0px, Shadow: none.

### Feature Card
**Role:** Elevated card for showcasing features or specific content blocks.

Background: Haze Grey (#f5f5f5), Padding: 20px, Radius: 12px, Shadow: none.

### Image Card
**Role:** Card specifically for framing images, with a distinct radius.

Background: transparent (rgba(0, 0, 0, 0)), Padding: 0px, Radius: 14px, Shadow: none.

### Input Field
**Role:** Standard input field for user data entry.

Background: Haze Grey (#f5f5f5), Text: Charcoal Text (#1b1b1b), Border: 1px solid rgba(0, 0, 0, 0.1), Radius: 4px, Padding: 10px.

## Do's and Don'ts

### Do
- Prioritize Cloud White (#ffffff) text on Sky Canvas (#426188) backgrounds for headlines and key information.
- Use Action Blue (#2b7fff) exclusively for outlined interactive elements such as links and primary action buttons.
- Reserve Control Compressed (weight 900, size 259px) for hero-level headlines to maximize visual impact.
- Apply Haze Grey (#f5f5f5) as the background for input fields and subtle card surfaces to differentiate them.
- Implement a consistent 8px spacing unit for element gaps, and 48px for vertical section spacing.
- Use 14px border radius for content cards and 8px for buttons to maintain a consistent softness.
- Utilize Control, weight 500, at sizes 12-20px for all functional text to ensure readability and consistency.

### Don't
- Do not use Action Blue (#2b7fff) as a background for filled content blocks or decorative elements.
- Avoid using multiple chromatic colors; limit the palette to Sky Canvas (#426188) and Action Blue (#2b7fff) as primary brand colors.
- Do not use hard-edged elements; apply defined border radii of 4px, 8px, 11px, or 14px to all interactive and container elements.
- Avoid excessive use of drop shadows; the design relies on surface color differentiation rather than elevation for visual hierarchy.
- Do not place body text directly on the Sky Canvas (#426188) background; it has too low contrast. Use neutral surfaces instead.
- Do not vary line heights randomly; adhere to the specified 1.0, 1.1, 1.4, and 1.5 ratios for consistent vertical rhythm.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Sky Canvas | `#426188` | Primary background for the page, setting the overall atmospheric tone. |
| 2 | Haze Grey | `#f5f5f5` | Background for input fields and subtle feature cards, providing a slightly elevated surface. |
| 3 | Cloud White | `#ffffff` | Background for primary UI elements like headers and navigation, offering clean contrast. |

## Elevation

The design strongly minimizes shadows, opting instead for background blur (`backdrop-filter: blur(12px)`) and distinct surface colors to convey depth and hierarchy. The absence of heavy shadows contributes to the 'airy' and light aesthetic.

## Imagery

Imagery primarily features product concepts, often with abstract or stylized representations of data and workflows. There are also product shots of various digital devices, usually contained within cards. Icons are subtle, monochromatic, and usually outlined. The overall imagery is sparse, focusing on explaining product functionalities rather than lifestyle; when present, visuals often employ backdrop-filter blurring to create a 'frosted glass' effect, integrating seamlessly with the sky canvas background.

## Layout

The page layout is primarily full-bleed, extending content to the viewport edges, with a strong emphasis on consistent vertical spacing. The hero section is full-bleed, featuring large typographic elements centered over the background. Subsequent sections often include alternating content blocks (e.g., text on left, image on right) and grid-based arrangements for features. Navigation is a sticky top bar with ghost buttons and a prominent outlined 'Start for free' button, suggesting availability across the entire experience. Sections maintain a comfortable density, preventing information overload within the expansive background.

## Agent Prompt Guide

Create an Outlined Primary Action: Transparent background, #2b7fff border and text, 9999px radius, compact pill padding. Use it for the main CTA instead of a filled button.

Example Component Prompts:
1. Create a primary outlined button: Background transparent, text Action Blue (#2b7fff), border 1px solid Action Blue (#2b7fff), radius 8px, padding 10px 20px. Text 'Get started' using Control font, weight 500, size 16px.
2. Create a heading section: Background Sky Canvas (#426188), headline 'Human creativity. AI scale.' using Control Cursive, weight 500, size 56px, color Cloud White (#ffffff). Below it, a ghost button with a Cloud White (#ffffff) border, Cloud White (#ffffff) text, radius 8px, 'Get some Air' in Control font, weight 500, size 16px.
3. Create a feature card: Background Haze Grey (#f5f5f5), padding 20px, radius 12px. Inside, a heading 'Understand your library' using Control font, weight 500, size 20px, color Charcoal Text (#1b1b1b), followed by body text using Control font, weight 500, size 14px, color Charcoal Text (#1b1b1b).

## Similar Brands

- **Figma** — Clear, functional typography combined with a minimalist UI and a single primary accent color.
- **Notion** — Reliance on subtle grey surface variations and ghost-like interactive elements for a sense of spaciousness.
- **Webflow** — Use of large, expressive display typography in hero sections contrasted with clean body text.
- **Linear** — Focus on high-contrast text and interactive elements against a largely monochromatic background, with limited use of color.
- **Dropbox** — Clean, spacious UI with an emphasis on content and clear call-to-actions without heavy visual adornment.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-sky-canvas: #426188;
  --color-action-blue: #2b7fff;
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-charcoal-text: #1b1b1b;
  --color-haze-grey: #f5f5f5;

  /* Typography — Font Families */
  --font-control: 'Control', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-compressed: 'Control Compressed', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-cursive: 'Control Cursive', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-tnt: 'Control TNT', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --text-display: 259px;
  --leading-display: 0.85;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --section-gap: 48px;
  --card-padding: 20px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-lg-2: 11px;
  --radius-xl: 14px;

  /* Named Radii */
  --radius-cards: 14px;
  --radius-links: 8px;
  --radius-images: 11px;
  --radius-inputs: 4px;
  --radius-buttons: 8px;

  /* Surfaces */
  --surface-sky-canvas: #426188;
  --surface-haze-grey: #f5f5f5;
  --surface-cloud-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-sky-canvas: #426188;
  --color-action-blue: #2b7fff;
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-charcoal-text: #1b1b1b;
  --color-haze-grey: #f5f5f5;

  /* Typography */
  --font-control: 'Control', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-compressed: 'Control Compressed', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-cursive: 'Control Cursive', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-control-tnt: 'Control TNT', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --text-display: 259px;
  --leading-display: 0.85;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-lg-2: 11px;
  --radius-xl: 14px;
}
```