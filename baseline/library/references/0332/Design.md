# Superhuman — Style Reference
> Cinematic cockpit behind warm parchment — a productivity instrument panel where atmospheric photography meets structured cream-toned UI surfaces.

**Theme:** mixed

Superhuman feels like a cinematic productivity cockpit — moody atmospheric photography bleeds behind glassmorphic UI panels while the page itself stays anchored in warm parchment neutrals. The hero is a full-viewport dusk photograph with overlapping product panels floating at various depths, then the page snaps to a warm off-white (#f2f0eb) canvas for feature content. Custom variable font 'Super Sans VF' is the entire typographic system — tight negative tracking at display sizes (-0.028em at 64px) makes headlines feel compressed and urgent. Violet (#714cb6) is the sole chromatic system accent, appearing as outlined ghost buttons and focus rings against otherwise achromatic surfaces. The dark muted-red (#421d24) surfaces only in the announcement banner and footer, creating a bracketed frame around the entire page.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Parchment Canvas | `#f2f0eb` | `--color-parchment-canvas` | Primary page background below the hero; the warm, slightly toasted off-white that distinguishes this from sterile white SaaS canvases |
| Ink | `#292827` | `--color-ink` | Primary text, borders, nav labels — near-black with a warm brown undertone instead of pure black |
| Bone | `#ffffff` | `--color-bone` | Card surfaces, hero text, button text on dark backgrounds |
| Fog | `#e3e3e2` | `--color-fog` | Subtle UI dividers, light button borders, tab backgrounds |
| Driftwood | `#dcd7d3` | `--color-driftwood` | Secondary dividers and section rule lines |
| Graphite | `#666666` | `--color-graphite` | Secondary body text — feature descriptions and supporting copy beneath headings |
| Aubergine | `#421d24` | `--color-aubergine` | Announcement banner background, footer background — deep muted red that brackets the page top and bottom |
| Aubergine Deep | `#4e242c` | `--color-aubergine-deep` | SVG icon fills and border accents within dark brand surfaces |
| Iris | `#714cb6` | `--color-iris` | Ghost/outlined action borders, link text, focus rings — the only chromatic accent across light UI surfaces; outlined ghost 'Get the suite' button uses this as its border and text |
| Indigo Glow | `#353088` | `--color-indigo-glow` | Focus shadow on primary CTA links (inset ring depth cue) |
| Lavender Chip | `#d4c7ff` | `--color-lavender-chip` | Sign-up button fill on dark hero — soft violet chip against dark photography |
| Hero Dusk Gradient | `linear-gradient(to left bottom, rgba(168, 164, 216, 0.5), rgba(107, 165, 232, 0.5), rgba(176, 112, 192, 0.6), rgba(144, 136, 208, 0.5))` | `--color-hero-dusk-gradient` | Full-viewport hero background gradient overlaying the dusk photography; pastel violet-to-blue-to-purple sweep |

## Tokens — Typography

### Super Sans VF — The sole typeface for all text — headlines, body, nav, buttons, captions. Custom variable font with tight negative tracking baked into large sizes: -0.028em at 64px collapses letterforms until display text reads as a single compressed block. Weight 460 is the default body weight; 600–700 reserved for headlines. The variable weight axis allows granular fine-tuning not possible with static weights. · `--font-super-sans-vf`
- **Substitute:** Inter Variable or Neue Haas Grotesk
- **Weights:** 460, 500, 540, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 19px, 20px, 22px, 26px, 28px, 48px, 64px
- **Line height:** 0.76–1.50 (0.76 at display, 1.20–1.50 at body)
- **Letter spacing:** -0.028em at 64px, -0.027em at 48px, -0.022em at 28px, -0.020em at 26px, -0.014em at 22px, -0.008em at 18-20px
- **Role:** The sole typeface for all text — headlines, body, nav, buttons, captions. Custom variable font with tight negative tracking baked into large sizes: -0.028em at 64px collapses letterforms until display text reads as a single compressed block. Weight 460 is the default body weight; 600–700 reserved for headlines. The variable weight axis allows granular fine-tuning not possible with static weights.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.3 | -0.14px | `--text-subheading` |
| heading-sm | 22px | 1.25 | -0.31px | `--text-heading-sm` |
| heading | 28px | 1.2 | -0.62px | `--text-heading` |
| heading-lg | 48px | 1 | -1.3px | `--text-heading-lg` |
| display | 64px | 0.96 | -1.79px | `--text-display` |

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 12px |
| pills | 999px |
| buttons | 8px |
| cardsLarge | 24px |
| announcementBanner | 16px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(113, 76, 182) 0px 0px 0px 1px inset` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Announcement Banner
**Role:** Full-width top-of-page notification strip

Background #421d24, white text at 14px weight 500, 12px vertical padding, 16px radius on inner button. Contains ghost text link 'Learn more' with no border. Full bleed edge-to-edge above the nav.

### Primary Navigation
**Role:** Sticky top navigation bar

White background, Ink (#292827) nav labels at 16px weight 460. Logo left-aligned. 'Sign up' uses Lavender Chip (#d4c7ff) background, Ink text, 8px radius, 6px/12px padding. 'Log in' and 'Contact sales' are ghost text links with no border. Nav transitions from transparent over hero to white with backdrop-blur on scroll (animation: page_header-fade-in).

### Hero Section
**Role:** Full-viewport brand opening

Full-bleed dusk photography with linear-gradient(to left bottom, rgba(168,164,216,0.5), rgba(107,165,232,0.5), rgba(176,112,192,0.6), rgba(144,136,208,0.5)) overlay. White display text at 64px weight 600, line-height 0.96, letter-spacing -1.79px, centered. Subheadline at 18-20px weight 460. CTA 'Get Superhuman' is a white-background pill with Ink text, 8px radius, Iris inset shadow on focus, animated gradient rotation on hover (hero-button-gradient-angle-rotate).

### Get Superhuman CTA Button
**Role:** Primary hero call-to-action

Background #ffffff, text #292827 at 16px weight 500, 8px radius, 12px vertical / 24px horizontal padding. Focus ring: rgb(113,76,182) 0px 0px 0px 1px inset. Includes a small arrow icon with Iris (#714cb6) tint. Animated gradient halo on hover.

### Sign Up Button
**Role:** Nav-level signup action

Background #d4c7ff (Lavender Chip), text #292827 (Ink), 8px border-radius, 6px top/bottom padding, 12px left/right padding. No border. Sits in top-right nav cluster.

### Ghost Outlined Button (Iris)
**Role:** Secondary action on light surfaces

Background transparent, border 1px solid #714cb6, text #714cb6, 8px radius, 6px/12px padding. Used for 'Get the suite' on the parchment canvas section.

### Suite Tab Button
**Role:** Product switcher tabs (Mail / Grammarly / Coda / Go)

Active state: #e3e3e2 background, Ink text, 999px radius pill, 12px vertical padding. Inactive state: transparent background, Ink text, same radius. 16px horizontal padding. Icon precedes label at 16px.

### Social Proof Logo Bar
**Role:** Trust logos strip

White card surface, 1px solid #e3e3e2 border, 0px radius (sharp edges), logos in Ink at roughly 80-120px wide each, evenly distributed in a single row. Parchment canvas background behind. 36px vertical padding.

### Product Feature Card
**Role:** Per-product detail panel inside tab sections

White background, 16px radius, 16px padding all sides, 1px solid #e3e3e2 border. Contains product label at 12px weight 500 with Iris icon, heading at 28px weight 600, body at 16px Graphite (#666666), and a link at 14px Iris (#714cb6).

### Glassmorphic Hero Panel
**Role:** Product UI preview panels floating in hero

Background rgba(255,255,255,0.13), backdrop-filter blur(12px), 999px radius on pill-shaped variants or 24px on rectangular panels, 12px/16px padding. White text inside. These appear as layered floating cards over the hero photograph.

### Footer
**Role:** Full-width site footer

Background #421d24, white text throughout. Nav links at 14px weight 460. Brand logo top-left. Four column layout. 32px horizontal padding, 36px top/bottom padding.

## Do's and Don'ts

### Do
- Use #f2f0eb as the page canvas for all content sections below the hero — never plain white (#ffffff) as the canvas background.
- Apply Super Sans VF at weight 600–700 for all headings with letter-spacing -0.022em to -0.028em at sizes 28px and above.
- Use #714cb6 exclusively as outlined ghost button borders and link colors on light surfaces — never as a filled button background.
- Reserve #421d24 only for the announcement banner and footer — it must bracket the page without appearing in content sections.
- Set border-radius 8px for inline buttons and badges, 16px for cards, 999px for pill tabs and floating UI chips.
- Use backdrop-filter: blur(12px) on any UI panel that overlaps the hero photography to maintain the glassmorphic depth effect.
- Pair display headlines (64px) with line-height 0.96 — sub-1.0 line-height at display sizes is the signature compression of this system.

### Don't
- Don't use a pure white (#ffffff) page background for content sections — the parchment (#f2f0eb) canvas is what separates this from generic SaaS.
- Don't apply #714cb6 as a filled button background — evidence shows it appears only as outlined borders and link text, never as a button fill.
- Don't use letter-spacing at 0 or positive values for headings — all heading sizes use negative tracking; flat tracking breaks the compressed headline aesthetic.
- Don't introduce additional typefaces — Super Sans VF handles every text role; mixing in system fonts or other typefaces breaks the typographic cohesion.
- Don't use standard box-shadow elevation for cards — depth is achieved through overlapping layout and backdrop-blur, not drop shadows.
- Don't place the aubergine (#421d24) in mid-page content sections, feature cards, or UI components — its role is structural framing (banner + footer) only.
- Don't use rounded corners smaller than 8px on interactive elements — the minimum radius in this system is 8px; sharp 0px borders only appear on flat content containers and logo bars.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Hero Photography | `#421d24` | Full-viewport hero with dusk photography + translucent gradient overlay; dark surfaces here only |
| 1 | Parchment Canvas | `#f2f0eb` | Primary content page background below hero for all feature sections |
| 2 | Bone Card | `#ffffff` | Card and panel surfaces that lift off the parchment canvas |
| 3 | Fog Divider | `#e3e3e2` | Tab indicators, secondary separators, low-contrast borders on white surfaces |

## Elevation

- **Outlined Ghost Button (Iris focus state):** `rgb(113, 76, 182) 0px 0px 0px 1px inset`

## Imagery

Superhuman uses full-bleed cinematic lifestyle photography in the hero — dark-toned dusk and evening skies with human subjects (woman looking upward, silhouetted figures) that read as contemplative rather than corporate. Photography is high-contrast with deep cool blues and magentas, treated with semi-transparent gradient overlays in pastel violet/blue/pink (the hero gradient system). Product UI screenshots are embedded as floating glassmorphic panels directly over the photography — not contained in device frames, just floating at depth. Below the hero, imagery shifts to pure product: email UI, document surfaces, and AI suggestions shown in white-background card panels. Illustrated abstract geometric compositions appear in promotional sections (stacked rectangle frames, golden-ratio wireframes) as editorial art rather than UI. Icons throughout are outlined mono-color at ~16-20px, using Iris (#714cb6) tint on light surfaces and white on dark surfaces. The design is moderately image-heavy in the hero and text-dominant in feature sections.

## Layout

Max-width approximately 1200px centered, but hero is full-bleed edge-to-edge with no container. Hero occupies 100vh with centered headline stack and CTA, product UI panels float asymmetrically left and right over the photography. Below hero: white/parchment alternating bands with 64px section gaps. Logo bar is a single full-width row with sharp borders. Suite section uses a tab switcher (pill tabs) above a large product panel — single column centered. Feature sections use 2-column text-left / product-right alternating layout. Navigation is a fixed top bar that starts transparent over the hero and fades to white with blur on scroll. Footer is 4-column grid at full width in dark aubergine. Overall rhythm is spacious with 64px between sections and 36px internal section padding.

## Agent Prompt Guide

**Quick Color Reference**
- text: #292827 (Ink)
- background (canvas): #f2f0eb (Parchment)
- card surface: #ffffff
- border: #e3e3e2 (light) / #dcd7d3 (divider)
- accent / outlined action border: #714cb6 (Iris)
- secondary text: #666666 (Graphite)
- dark frame (banner/footer): #421d24
- primary action: #421d24 (filled action)

**Example Component Prompts**

1. Hero Section: Full-bleed dusk photograph with linear-gradient(to left bottom, rgba(168,164,216,0.5), rgba(107,165,232,0.5), rgba(176,112,192,0.6), rgba(144,136,208,0.5)) overlay. Center-aligned headline: 'Superpowers, everywhere you work' in Super Sans VF (substitute: Inter Variable) weight 600, 64px, line-height 0.96, letter-spacing -1.79px, color #ffffff. Sub-headline at 20px weight 460, #ffffff, letter-spacing -0.16px. CTA button: background #ffffff, text #292827, 8px radius, 12px/24px padding, weight 500, 16px. Iris inset ring on focus: rgb(113,76,182) 0px 0px 0px 1px inset.

2. Feature Section on Parchment: Background #f2f0eb. Section heading at 48px Super Sans VF weight 600, #292827, letter-spacing -1.30px, line-height 1.0. Body text at 16px weight 460, #666666, line-height 1.5. 'Get the suite' ghost button: transparent background, 1px solid #714cb6 border, text #714cb6, 8px radius, 6px/12px padding.

3. Product Feature Card: Background #ffffff, 1px solid #e3e3e2 border, 16px border-radius, 16px padding. Label at 12px weight 500, #714cb6 with Iris icon. Heading at 28px weight 600, #292827, letter-spacing -0.62px. Body at 16px weight 460, #666666. Link at 14px weight 500, #714cb6, underline on hover.

4. Announcement Banner: Full-width, background #421d24, 12px vertical padding, 32px horizontal padding. Text: 'Looking for Superhuman Mail?' at 14px weight 500, #ffffff. Inline 'Learn more' link in white, 16px radius inner button, no border.

5. Suite Tab Switcher: Row of pill tabs, 999px radius. Active: background #e3e3e2, text #292827, 12px/16px padding. Inactive: transparent background, #292827 text. All tabs: 16px, weight 500, Super Sans VF.

## Gradient System

Four radial spotlight gradients animate behind the hero section, positioned at different edges to simulate colored lighting on the photography:
- Violet spotlight: radial-gradient(circle at 68% 50%, rgba(133,125,250,0.6) 0px, rgba(0,0,0,0) 50%)
- Pink spotlight: radial-gradient(circle at 50% 98%, rgba(255,51,102,0.6) 0px, rgba(0,0,0,0) 50%)
- Blue spotlight: radial-gradient(circle at 93% 50%, rgba(75,105,227,0.5) 0px, rgba(0,0,0,0) 50%)
- Cyan spotlight: radial-gradient(circle at 50% 75%, rgba(104,222,255,0.5) 0px, rgba(0,0,0,0) 50%)

These stack via multiple background layers to produce the cinematic dusk atmosphere. The CTA button also has a rotating gradient animation (hero-button-gradient-angle-rotate) on hover — a slow rotation of the violet-blue palette around the button border.

## Motion Philosophy

Motion is expressive but controlled. Base transition: 0.2s ease on color, border-color, background-color, box-shadow. Slower 0.3s for layout shifts (gap changes). Hero entrance uses fade-slide sequences: fade-slide-down-from-transparent (headline) and fade-slide-up-from-transparent (subtext), creating a cinematic reveal. The navigation bar transitions from transparent+blur-0 to white+blur on scroll (page_header-fade-in, page_header-remove-blur). Asset grids use fade-in/fade-out (0.5s) for tab switching. The signature CTA micro-interaction is hero-button-gradient-angle-rotate — a continuous slow rotation of the gradient behind the button border on hover. Easing is overwhelmingly ease (780×) with no linear transitions — everything accelerates and decelerates.

## Similar Brands

- **Linear** — Same single chromatic accent on ghost button borders against warm-neutral canvas, tight negative letter-spacing on display headlines, no shadow elevation
- **Notion** — Warm off-white canvas (not pure white) as page background, sharp-edged logo strips, product UI as primary hero visual
- **Loom** — Full-bleed dark photography hero transitioning to light content sections, glassmorphic floating UI panels over photography
- **Arc Browser** — Muted violet/purple accent system against near-monochrome warm neutrals, cinematic lifestyle hero photography with product overlay

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-parchment-canvas: #f2f0eb;
  --color-ink: #292827;
  --color-bone: #ffffff;
  --color-fog: #e3e3e2;
  --color-driftwood: #dcd7d3;
  --color-graphite: #666666;
  --color-aubergine: #421d24;
  --color-aubergine-deep: #4e242c;
  --color-iris: #714cb6;
  --color-indigo-glow: #353088;
  --color-lavender-chip: #d4c7ff;
  --color-hero-dusk-gradient: #a8a4d8;
  --gradient-hero-dusk-gradient: linear-gradient(to left bottom, rgba(168, 164, 216, 0.5), rgba(107, 165, 232, 0.5), rgba(176, 112, 192, 0.6), rgba(144, 136, 208, 0.5));

  /* Typography — Font Families */
  --font-super-sans-vf: 'Super Sans VF', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.31px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.62px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.3px;
  --text-display: 64px;
  --leading-display: 0.96;
  --tracking-display: -1.79px;

  /* Typography — Weights */
  --font-weight-w460: 460;
  --font-weight-medium: 500;
  --font-weight-w540: 540;
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
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 999px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-links: 12px;
  --radius-pills: 999px;
  --radius-buttons: 8px;
  --radius-cardslarge: 24px;
  --radius-announcementbanner: 16px;

  /* Shadows */
  --shadow-subtle: rgb(113, 76, 182) 0px 0px 0px 1px inset;

  /* Surfaces */
  --surface-hero-photography: #421d24;
  --surface-parchment-canvas: #f2f0eb;
  --surface-bone-card: #ffffff;
  --surface-fog-divider: #e3e3e2;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-parchment-canvas: #f2f0eb;
  --color-ink: #292827;
  --color-bone: #ffffff;
  --color-fog: #e3e3e2;
  --color-driftwood: #dcd7d3;
  --color-graphite: #666666;
  --color-aubergine: #421d24;
  --color-aubergine-deep: #4e242c;
  --color-iris: #714cb6;
  --color-indigo-glow: #353088;
  --color-lavender-chip: #d4c7ff;
  --color-hero-dusk-gradient: #a8a4d8;

  /* Typography */
  --font-super-sans-vf: 'Super Sans VF', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.31px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.62px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.3px;
  --text-display: 64px;
  --leading-display: 0.96;
  --tracking-display: -1.79px;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 999px;

  /* Shadows */
  --shadow-subtle: rgb(113, 76, 182) 0px 0px 0px 1px inset;
}
```