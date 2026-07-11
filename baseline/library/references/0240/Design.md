# Mercury — Style Reference
> Mountain Top Command Center

**Theme:** dark

The design feels like a command center at twilight, expansive and focused. A deep, near-black neutral palette (#1e1e2a, #171721) creates an immersive, cinematic canvas where glowing off-white text (#ededf3) provides crisp clarity. All energy is channeled into a single, vibrant violet-blue accent (#5266eb) reserved strictly for primary calls-to-action, like indicator lights on a high-tech console. The typography is a defining feature, with custom fonts used at light weights for headlines, creating an authoritative yet approachable voice. The contrast between spacious, atmospheric hero imagery and the stark, text-driven UI below creates a journey from aspiration to action.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Mercury Blue | `#5266eb` | `--color-mercury-blue` | Primary CTA buttons — the single, vivid accent in a muted palette, focusing user action. |
| Ghost Blue | `#cdddff` | `--color-ghost-blue` | Secondary button backgrounds, hover states — a desaturated, ethereal blue suggesting interaction. |
| Deep Space | `#171721` | `--color-deep-space` | Outermost page background layer, providing depth. |
| Midnight Slate | `#1e1e2a` | `--color-midnight-slate` | Primary page and section backgrounds. |
| Graphite | `#272735` | `--color-graphite` | Subtle button backgrounds and interactive surfaces. |
| Lead | `#70707d` | `--color-lead` | Borders, dividers, subtle UI accents. |
| Starlight | `#ededf3` | `--color-starlight` | Primary text color for headlines, body, and navigation. |
| Silver | `#c3c3cc` | `--color-silver` | Secondary text, footer copy, disabled states. |
| Pure White | `#ffffff` | `--color-pure-white` | Text on primary CTA buttons (#5266eb). |

## Tokens — Typography

### arcadiaDisplay — All major headlines. Use of the light 360 weight at large sizes is a signature choice creating authority through restraint, not volume. · `--font-arcadiadisplay`
- **Substitute:** Inter, Manrope
- **Weights:** 360, 480, 530
- **Sizes:** 21px, 24px, 28px, 32px, 42px, 49px, 65px
- **Line height:** 1.10-1.20
- **Letter spacing:** Subtle positive tracking (0.01-0.02em) for an open feel.
- **OpenType features:** `"ss01" on`
- **Role:** All major headlines. Use of the light 360 weight at large sizes is a signature choice creating authority through restraint, not volume.

### arcadia — Body copy, UI labels, navigation, legal text, and smaller headings. The workhorse font for all content and interface text. · `--font-arcadia`
- **Substitute:** Inter, Manrope
- **Weights:** 360, 400, 420, 480
- **Sizes:** 12px, 14px, 16px, 18px, 21px
- **Line height:** 1.20-1.50
- **Letter spacing:** Subtle positive tracking (0.005-0.02em) for readability.
- **OpenType features:** `"ss01" on`
- **Role:** Body copy, UI labels, navigation, legal text, and smaller headings. The workhorse font for all content and interface text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.24px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.28px | `--text-body-sm` |
| body | 16px | 1.5 | 0.16px | `--text-body` |
| subheading | 18px | 1.4 | — | `--text-subheading` |
| heading-sm | 21px | 1.35 | — | `--text-heading-sm` |
| heading | 32px | 1.2 | — | `--text-heading` |
| heading-lg | 49px | 1.15 | — | `--text-heading-lg` |
| display | 65px | 1.1 | 0.65px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

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
| 56 | 56px | `--spacing-56` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 112 | 112px | `--spacing-112` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0px |
| inputs | 32px |
| buttons | 32px, 40px |
| containers | 4px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Element gap:** 12-32px

## Components

### Primary Pill Button
**Role:** The main call-to-action on the page.

Solid 'Mercury Blue' (#5266eb) background with 'Pure White' (#ffffff) text. Fully rounded with a 32px radius. Padding is around 16px vertically and 24px horizontally. Uses 'arcadia' font.

### Header Pill Button
**Role:** The secondary call-to-action in the navigation bar.

Translucent 'Ghost Blue' (#cdddff at ~20%) background with 'Starlight' (#ededf3) text. Fully rounded with a 40px radius. Padding is 8px 20px. Uses 'arcadia' font.

### Ghost Nav Link
**Role:** Navigation items and non-primary links in the header.

Transparent background with 'Starlight' (#ededf3) text. No visible border. Generous hit area implied by padding, visually appears as text-only. Uses 'arcadia' font.

### Hero Email Input
**Role:** The email capture field in the hero section.

Transparent background with 'Starlight' (#ededf3) text and placeholder. Left side is fully rounded (32px radius), right side is sharp (0px radius) to join with the button. A thin 'Lead' (#70707d) border is implied for definition.

### Interactive Feature Link
**Role:** Selectable items in a feature list.

Transparent background with 'Starlight' (#ededf3) text. A 1px 'Lead' (#70707d) border on the bottom separates items. No radius. Uses 'arcadiaDisplay' for the title text.

### Footer Link
**Role:** Tertiary links in the page footer.

Transparent background with 'Silver' (#c3c3cc) text. Lighter text color indicates lower priority. Uses 'arcadia' font.

## Do's and Don'ts

### Do
- Use 'arcadiaDisplay' at a light weight (360) for all major headlines to maintain an airy, sophisticated tone.
- Reserve the 'Mercury Blue' (#5266eb) accent exclusively for primary, action-oriented CTAs.
- Employ the deep neutral palette (#171721, #1e1e2a) for all backgrounds to create a focused, immersive environment.
- Utilize extreme corner radii (32px, 40px) for all primary and secondary buttons, creating a signature 'pill' shape.
- Maintain high contrast with 'Starlight' (#ededf3) text on dark backgrounds for all primary content.
- Use generous vertical spacing (80px+) between content sections.
- Differentiate interactive list items with a simple 1px bottom border in 'Lead' (#70707d).

### Don't
- Don't use 'Mercury Blue' (#5266eb) for text, backgrounds, or decorative elements.
- Don't use heavy font weights (>530) for any typography.
- Don't apply shadows for elevation. Use color and opacity shifts instead.
- Don't introduce new saturated colors. The palette is monochrome plus one blue accent.
- Don't use small corner radii on buttons. They should always be pills.
- Don't use 'Pure White' (#ffffff) for body text; reserve it for text on the primary blue CTA.
- Don't create dense, cluttered layouts. Prioritize breathing room.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Abyss | `#171721` | Outermost page background layer. |
| 1 | Surface | `#1e1e2a` | Main content section background. |
| 2 | Interactive | `#272735` | Hover states or contained interactive elements. |

## Elevation

Elevation is achieved through light and color, not shadow. Interactive elements brighten or adopt the brand accent color on hover or focus, appearing to 'light up' from within the dark interface. Layered surfaces are differentiated by subtle shifts in the neutral gray palette (e.g., Midnight Slate #1e1e2a on Deep Space #171721).

## Imagery

The visual language is bifurcated. It opens with a full-bleed, atmospheric photograph of a solitary desk in a vast natural landscape, establishing a mood of boundless ambition and serene focus. This imagery is purely atmospheric, not product-focused. Beyond the hero, the site is starkly text-dominant, with no additional photography or illustration. This contrast positions the brand's 'vibe' first, then transitions to a purely functional, information-driven experience.

## Layout

The layout uses a full-bleed hero that occupies the entire viewport, featuring a centered headline and CTA over a background image. Below the hero, the page transitions to a max-width (approx. 1200px) centered layout on a dark background. Content is organized in simple, single-column stacks with generous vertical spacing, creating a calm, linear reading flow. Navigation is a minimal, semi-transparent top bar that likely becomes sticky. The overall structure is spacious and uncluttered.

## Agent Prompt Guide

### Quick Color Reference
- **Page Background:** Midnight Slate (#1e1e2a)
- **Primary Text:** Starlight (#ededf3)
- **Secondary Text:** Silver (#c3c3cc)
- **Primary CTA:** Mercury Blue (#5266eb)
- **Border/Divider:** Lead (#70707d)

### Example Component Prompts
1. `Create a hero section with a full-bleed atmospheric mountain photo background. Center a display headline: 65px arcadiaDisplay weight 360, color Starlight (#ededf3). Below it, add a sub-headline: 21px arcadia weight 400, color Starlight. Finally, add a CTA button group: an email input with a 32px left radius joined to a primary pill button with a 32px radius.`

2. `Build a primary action button with the text 'Open account'. The button should have a 'Mercury Blue' (#5266eb) background, 'Pure White' (#ffffff) text, a 32px corner radius, and 16px 24px padding. Font is 16px arcadia weight 480.`

3. `Design a feature list section on a 'Midnight Slate' (#1e1e2a) background. Each item is a link with heading text at 28px arcadiaDisplay weight 480 in 'Starlight' (#ededf3), with a 1px solid bottom border in 'Lead' (#70707d) with 24px of bottom padding.`

## Similar Brands

- **Linear** — Shares the deep dark-mode aesthetic, precision typography, and use of a single strong accent color for CTAs.
- **Stripe** — Similar professional, tech-focused dark UI with a distinct accent color and high-quality custom typography.
- **Ramp** — Another fintech brand with a sophisticated dark theme, clean typography, and a single accent color strategy.
- **Vercel** — Also uses a deep black background with crisp, light text and a focus on geometric precision in its UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-mercury-blue: #5266eb;
  --color-ghost-blue: #cdddff;
  --color-deep-space: #171721;
  --color-midnight-slate: #1e1e2a;
  --color-graphite: #272735;
  --color-lead: #70707d;
  --color-starlight: #ededf3;
  --color-silver: #c3c3cc;
  --color-pure-white: #ffffff;

  /* Typography — Font Families */
  --font-arcadiadisplay: 'arcadiaDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arcadia: 'arcadia', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 21px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --text-heading-lg: 49px;
  --leading-heading-lg: 1.15;
  --text-display: 65px;
  --leading-display: 1.1;
  --tracking-display: 0.65px;

  /* Typography — Weights */
  --font-weight-w360: 360;
  --font-weight-regular: 400;
  --font-weight-w420: 420;
  --font-weight-w480: 480;
  --font-weight-w530: 530;

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
  --spacing-56: 56px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-120px;
  --element-gap: 12-32px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;

  /* Named Radii */
  --radius-cards: 0px;
  --radius-inputs: 32px;
  --radius-buttons: 32px, 40px;
  --radius-containers: 4px;

  /* Surfaces */
  --surface-abyss: #171721;
  --surface-surface: #1e1e2a;
  --surface-interactive: #272735;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-mercury-blue: #5266eb;
  --color-ghost-blue: #cdddff;
  --color-deep-space: #171721;
  --color-midnight-slate: #1e1e2a;
  --color-graphite: #272735;
  --color-lead: #70707d;
  --color-starlight: #ededf3;
  --color-silver: #c3c3cc;
  --color-pure-white: #ffffff;

  /* Typography */
  --font-arcadiadisplay: 'arcadiaDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arcadia: 'arcadia', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 21px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --text-heading-lg: 49px;
  --leading-heading-lg: 1.15;
  --text-display: 65px;
  --leading-display: 1.1;
  --tracking-display: 0.65px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
}
```