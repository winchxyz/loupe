# All-In-One Salon — Style Reference
> modern apothecary on warm bone — premium salon software printed on cool mint paper with a single chartreuse accent

**Theme:** light

GlossGenius is a calm, editorial salon-management system rendered in a warm near-black on cool bone-mint paper. Typography does the heavy lifting: a geometric grotesk at progressively tightened tracking carries everything from 13px nav labels to 72px display headlines, and a separate display face steps in for oversized statements. The palette is almost monastic — a single warm near-black, a cool off-white canvas, and a paper white surface — punctuated by a chartreuse accent button and a rotating set of soft gradient washes (periwinkle, sage, blue-slate) used as feature-card backdrops. Components stay pill-shaped or softly rounded; the design never raises its voice. A dark FAQ band breaks the cream rhythm late in the page, but the system as a whole reads as light, spacious, and quietly confident.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Bark | `#17150e` | `--color-bark` | Primary text, dark filled buttons, logo wordmark, footer, FAQ section background. Warm near-black with olive-brown undertones — it never reads as flat black against the mint canvas |
| Paper White | `#ffffff` | `--color-paper-white` | Elevated card surfaces, button text on dark fills, inverted panels |
| Bone Mist | `#f0f7f6` | `--color-bone-mist` | Page canvas, hero background, soft section fills, card surfaces. The cool mint-white warms slightly against Bark text without ever crossing into beige |
| Ash | `#e2e2e2` | `--color-ash` | Hairline dividers, subtle borders between sections |
| Ink | `#000000` | `--color-ink` | True black reserved for icons and select typographic emphasis |
| Slate | `#333333` | `--color-slate` | Secondary muted text, image captions, tertiary content |
| Charcoal | `#0e1011` | `--color-charcoal` | Navigation text and links — slightly cooler than Bark for hierarchy |
| Chartreuse Pop | `#cccc25` | `--color-chartreuse-pop` | Yellow supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Periwinkle Wash | `linear-gradient(rgb(159, 166, 255), rgb(179, 186, 232))` | `--color-periwinkle-wash` | Feature card gradient base, announcement bar tint. Soft lavender that cools the palette where editorial sections need a color break |
| Moss | `linear-gradient(rgb(108, 136, 83), rgb(153, 171, 145))` | `--color-moss` | Feature card gradient base for alternative editorial blocks — deep botanical green |
| Slate Blue | `linear-gradient(rgb(104, 131, 161), rgb(151, 169, 185))` | `--color-slate-blue` | Feature card gradient base — muted denim for cool-toned editorial sections |
| Sage | `linear-gradient(rgb(154, 193, 150), rgb(174, 199, 176))` | `--color-sage` | Feature card gradient base — fresh botanical green for wellness-leaning blocks |

## Tokens — Typography

### Basel Grotesk Book — The workhorse. Nav labels, body, subheads, headings, and display up to 72px. Tracking tightens aggressively with size — from 0.071em at 13px to -0.04em at 48px+ — which is the system's signature: large headlines almost touch. The intermediate weight 500 is the de-emphasized body for meta; 600 is reserved for emphasis and small caps labels. · `--font-basel-grotesk-book`
- **Substitute:** Inter, Geist, DM Sans
- **Weights:** 400, 500, 600
- **Sizes:** 13, 14, 16, 18, 22, 32, 40, 48, 72
- **Line height:** 1.40, 1.20, 1.13, 1.10, 1.05, 1.02, 0.97
- **Letter spacing:** -0.0400em, -0.0300em, -0.0200em, -0.0150em, -0.0100em, 0.0310em, 0.0560em, 0.0710em
- **Role:** The workhorse. Nav labels, body, subheads, headings, and display up to 72px. Tracking tightens aggressively with size — from 0.071em at 13px to -0.04em at 48px+ — which is the system's signature: large headlines almost touch. The intermediate weight 500 is the de-emphasized body for meta; 600 is reserved for emphasis and small caps labels.

### Basel Classic Book — Oversized display voice. Steps in for the rare 96-144px statements where the grotesk would feel too literal — the line-height collapse to 0.80 and tight -0.03em tracking make these words feel like editorial pull-quotes, not UI. · `--font-basel-classic-book`
- **Substitute:** Tiempos Text, GT Sectra, Playfair Display
- **Weights:** 400
- **Sizes:** 96, 144
- **Line height:** 0.80, 0.90
- **Letter spacing:** -0.0300em
- **Role:** Oversized display voice. Steps in for the rare 96-144px statements where the grotesk would feel too literal — the line-height collapse to 0.80 and tight -0.03em tracking make these words feel like editorial pull-quotes, not UI.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.4 | 0.92px | `--text-caption` |
| body | 16px | 1.4 | 0.5px | `--text-body` |
| body-lg | 18px | 1.2 | -0.18px | `--text-body-lg` |
| subheading | 22px | 1.13 | -0.33px | `--text-subheading` |
| heading-sm | 32px | 1.1 | -0.64px | `--text-heading-sm` |
| heading | 40px | 1.05 | -1.2px | `--text-heading` |
| heading-lg | 48px | 1.05 | -1.92px | `--text-heading-lg` |
| display | 72px | 1.02 | -2.88px | `--text-display` |
| display-xl | 144px | 0.8 | -4.32px | `--text-display-xl` |

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
| 56 | 56px | `--spacing-56` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 108 | 108px | `--spacing-108` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| pills | 9999px |
| badges | 8px |
| buttons | 9999px |
| nav-buttons | 40px |
| feature-cards | 16px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 20-24px
- **Element gap:** 8-16px

## Components

### Announcement Bar
**Role:** Top-of-page promotional strip above the nav

Full-bleed periwinkle (#9fa6ff) band, ~40px tall, with small 13px text in Bark (#17150e). Bold label + thin description + text link. No background image, no shadow — flat color block.

### Top Navigation
**Role:** Primary site navigation

White/bone-mist background, Basel Grotesk 13px nav items at 0.071em tracking (visibly spaced caps). Logo left, menu center, outlined CTA right. 40px radius on the CTA button. No sticky shadow — sits flat.

### Outlined Nav Button
**Role:** Secondary nav-level action

Pill (9999px radius), 1px Bark border, transparent fill, 13px Bark label at 0.056em tracking. ~10px 20px padding. Becomes filled Bark on hover.

### Dark Filled Button
**Role:** Primary action button (hero, forms)

Pill (9999px radius), Bark (#17150e) background, Paper White text, 16px / weight 500, 20px 32px padding. No shadow. Small caps optional with 0.056em tracking.

### Chartreuse Accent Button
**Role:** Secondary action / highlight

Pill (9999px radius), Chartreuse Pop (#cccc25) background, Bark (#17150e) text, 16px / weight 500, 20px 32px padding. The chartreuse carries the eye without screaming.

### Hero Block
**Role:** Above-the-fold value proposition

Bone Mist canvas. Eyebrow label at 13px caps with 0.071em tracking. Headline at 72px Basel Grotesk weight 400 with -2.88px tracking, line-height 1.02. Body at 18px in Slate. Two stacked pill buttons: dark first, chartreuse second. No hero image — pure typography.

### Feature Card (Gradient Wash)
**Role:** Product capability showcase

Full-bleed gradient background (periwinkle, moss, slate-blue, or sage), 16-24px radius, contains a white product-screenshot tile inset at ~16px from edges. Card title in 32-40px Bark inside the gradient zone; supporting text in deeper version of the gradient hue. No shadow — the gradient IS the elevation.

### FAQ Dark Band
**Role:** Accordion-style frequently asked questions

Full-bleed Bark (#17150e) section. Left column: 40px Paper White headline. Right column: accordion items with Paper White text, 1px rgba(255,255,255,0.15) dividers. Inline software-type links at 16px in Periwinkle Wash (#9fa6ff) with underline.

### Sticky Support Chip
**Role:** Persistent chat/contact affordance

Fixed bottom-right pill, 9999px radius, Paper White background, subtle 0 2px 8px rgba(0,0,0,0.08) shadow, 14px Bark text with small dark icon. The only place the system admits a shadow exists.

### Logo Wordmark
**Role:** Brand identity mark in nav

GLOSS GENIUS set in Basel Grotesk caps, 16-18px, 0.15em tracking (wider than any other element), Bark fill. The wide tracking is the logo's signature — nothing else in the system tracks this wide.

### Nav Menu Item
**Role:** Primary navigation link

Basel Grotesk 13px caps, 0.071em tracking, Bark color. Trailing chevron icon at 10px. No underline by default; subtle 1px Bark underline on hover.

### Inline Text Link
**Role:** In-content navigation (FAQ list, body copy)

16px body text, Periwinkle Wash (#9fa6ff) fill, 1px underline offset 3px. No color change on hover — the system trusts the underline to do the work.

## Do's and Don'ts

### Do
- Use 9999px radius for every button, tag, and pill-shaped control — pill geometry is non-negotiable.
- Set display headlines (40px+) in Basel Grotesk weight 400 with tracking between -1.2px and -2.88px; the tightening is what makes the type read as editorial.
- Reserve Chartreuse Pop (#cccc25) for a single accent purpose per screen — never pair it with another saturated hue in the same composition.
- Build feature cards on gradient washes (periwinkle, moss, slate-blue, sage) with white product-screenshot insets; the gradient replaces shadow as the elevation signal.
- Set nav and small-caps labels at 13px with tracking of 0.071em-0.092em — wide tracking on caps is the system's quiet authority move.
- Keep the page canvas at Bone Mist (#f0f7f6) for the majority of sections; use the Bark dark band sparingly for one or two FAQ/footer zones.
- Stack CTAs vertically on hero and form surfaces — dark filled first, Chartreuse second — never place them side by side in the primary fold.

### Don't
- Don't use pure #000000 for body text — always reach for Bark (#17150e); the warm undertone is what makes the page feel like printed paper rather than a screen.
- Don't apply shadows to cards, feature blocks, or section backgrounds; the system uses color and gradient as elevation, not drop-shadow.
- Don't pair Chartreuse Pop with a second saturated accent in the same view — the page becomes a fruit salad.
- Don't set display headlines at line-height above 1.05; the tight leading is what gives Basel Grotesk its compressed, magazine-cover feel.
- Don't use sharp corners on buttons, badges, or cards — the 8px minimum is for badges only, everything else rounds to pill or 16px+.
- Don't introduce a new font family; Basel Grotesk carries the full hierarchy up to 72px, and Basel Classic appears only at 96-144px.
- Don't use letter-spacing tighter than -0.04em — Basel Grotesk loses legibility beyond that point and starts to feel unstable.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Bone Mist Canvas | `#f0f7f6` | Page background, hero background, most editorial sections |
| 1 | Paper White | `#ffffff` | Elevated cards, product screenshots, dialog surfaces |
| 2 | Bark Inverted | `#17150` | Dark FAQ band, footer, dark filled buttons |
| 3 | Periwinkle Wash | `#9fa6ff` | Gradient feature card backgrounds |

## Elevation

The system deliberately avoids drop-shadows as an elevation signal. Instead, elevation is communicated through surface lightness (Bone Mist → Paper White), gradient washes on feature cards (periwinkle, moss, slate-blue, sage), and the single dark inversion for the FAQ band. The only sanctioned shadow is on the sticky support chip at 0 2px 8px rgba(0,0,0,0.08) — a one-off concession for a floating element that must detach from the page.

## Imagery

Imagery is sparing and product-centric. Real product screenshots (the GlossGenius dashboard, review widgets, booking pages) are inset into white cards within colored gradient feature panels — the interface is the hero, not lifestyle photography. Where photography appears inside screenshots, it is warm, candid, salon-context (stylists with clients, beauty treatment close-ups). No abstract 3D, no illustration system, no icon-as-decoration — icons are thin-stroke geometric and appear only in functional contexts (chevrons, support chat, menu indicators).

## Layout

Max-width 1200px centered container with generous side padding. The hero is full-bleed Bone Mist with a left-aligned stacked headline + two-button CTA group occupying roughly 60% of the width — the right 40% intentionally empty for breathing room. Feature sections use alternating two-column compositions: headline + body on the left, gradient feature card on the right. The feature card row is a horizontal scroll carousel (visible arrow controls). The page rhythm is overwhelmingly light with one dark inversion late in the page (FAQ band, left column headline / right column accordion). Navigation is a flat top bar, not sticky with shadow. Vertical spacing between sections runs 64-80px, with section breaks communicated by canvas tone shift rather than dividers.

## Agent Prompt Guide

Quick Color Reference:
- text: #17150e (Bark — warm near-black)
- background: #f0f7f6 (Bone Mist — cool mint-white)
- elevated surface: #ffffff (Paper White)
- border / divider: #e2e2e2 (Ash)
- accent: #cccc25 (Chartreuse Pop — secondary button only)
- primary action: no distinct CTA color

Example Component Prompts:
1. **Dark filled button**: Pill shape at 9999px radius, #17150e background, #ffffff text, Basel Grotesk 16px weight 500 with 0.056em letter-spacing, 20px vertical and 32px horizontal padding. No shadow. Use for the primary action in hero and form contexts.

2. **Chartreuse accent button**: Same pill geometry at 9999px radius, but #cccc25 background with #17150e text. Always positioned as the second button below a dark filled primary. Use sparingly — one Chartreuse per screen maximum.

3. **Hero headline**: Basel Grotesk 72px, weight 400, color #17150e, letter-spacing -2.88px, line-height 1.02. Set in a 1200px max-width container on a #f0f7f6 canvas. Pair with an eyebrow label at 13px caps with 0.071em tracking and a body paragraph at 18px in #333333.

4. **Feature card with gradient wash**: 16-24px radius, background linear-gradient(rgb(159, 166, 255), rgb(179, 186, 232)) (periwinkle). Inset a white product screenshot tile with 16px margin from card edges. Card title in 32px Basel Grotesk weight 500, #17150e, positioned above the screenshot tile.

5. **FAQ accordion item**: 1px bottom border in rgba(255,255,255,0.15), #ffffff text at 16px Basel Grotesk weight 400, 24px vertical padding. Expanded state shows body text in #e2e2e2 at 14px. The dark band background is #17150e.

## Similar Brands

- **Glossier** — Same warm near-black on cool off-white paper aesthetic, same editorial restraint, same soft gradient washes in feature panels.
- **Squarespace** — Shared commitment to oversized tightly-tracked geometric sans display headlines and pill-shaped controls on a light canvas.
- **Calendly** — Similar SaaS landing-page rhythm — light hero, generous spacing, single accent color, product-screenshot-as-hero pattern.
- **Notion** — Both use a near-black-on-off-white typography-first approach with minimal chrome and a single subtle accent color.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bark: #17150e;
  --color-paper-white: #ffffff;
  --color-bone-mist: #f0f7f6;
  --color-ash: #e2e2e2;
  --color-ink: #000000;
  --color-slate: #333333;
  --color-charcoal: #0e1011;
  --color-chartreuse-pop: #cccc25;
  --color-periwinkle-wash: #9fa6ff;
  --gradient-periwinkle-wash: linear-gradient(rgb(159, 166, 255), rgb(179, 186, 232));
  --color-moss: #6c8853;
  --gradient-moss: linear-gradient(rgb(108, 136, 83), rgb(153, 171, 145));
  --color-slate-blue: #6883a1;
  --gradient-slate-blue: linear-gradient(rgb(104, 131, 161), rgb(151, 169, 185));
  --color-sage: #9ac192;
  --gradient-sage: linear-gradient(rgb(154, 193, 150), rgb(174, 199, 176));

  /* Typography — Font Families */
  --font-basel-grotesk-book: 'Basel Grotesk Book', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-basel-classic-book: 'Basel Classic Book', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 0.92px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.5px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.18px;
  --text-subheading: 22px;
  --leading-subheading: 1.13;
  --tracking-subheading: -0.33px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: -1.2px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -1.92px;
  --text-display: 72px;
  --leading-display: 1.02;
  --tracking-display: -2.88px;
  --text-display-xl: 144px;
  --leading-display-xl: 0.8;
  --tracking-display-xl: -4.32px;

  /* Typography — Weights */
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
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 20-24px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 1440px;

  /* Named Radii */
  --radius-cards: 24px;
  --radius-pills: 9999px;
  --radius-badges: 8px;
  --radius-buttons: 9999px;
  --radius-nav-buttons: 40px;
  --radius-feature-cards: 16px;

  /* Surfaces */
  --surface-bone-mist-canvas: #f0f7f6;
  --surface-paper-white: #ffffff;
  --surface-bark-inverted: #17150;
  --surface-periwinkle-wash: #9fa6ff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-bark: #17150e;
  --color-paper-white: #ffffff;
  --color-bone-mist: #f0f7f6;
  --color-ash: #e2e2e2;
  --color-ink: #000000;
  --color-slate: #333333;
  --color-charcoal: #0e1011;
  --color-chartreuse-pop: #cccc25;
  --color-periwinkle-wash: #9fa6ff;
  --color-moss: #6c8853;
  --color-slate-blue: #6883a1;
  --color-sage: #9ac192;

  /* Typography */
  --font-basel-grotesk-book: 'Basel Grotesk Book', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-basel-classic-book: 'Basel Classic Book', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 0.92px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.5px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.18px;
  --text-subheading: 22px;
  --leading-subheading: 1.13;
  --tracking-subheading: -0.33px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.64px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: -1.2px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -1.92px;
  --text-display: 72px;
  --leading-display: 1.02;
  --tracking-display: -2.88px;
  --text-display-xl: 144px;
  --leading-display-xl: 0.8;
  --tracking-display-xl: -4.32px;

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
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 1440px;
}
```