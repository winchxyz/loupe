# Stripe — Style Reference
> violet horizon at dawn — a single electric accent on a vast calm canvas, with light bleeding in from the right edge.

**Theme:** light

Stripe operates as a financial infrastructure for the internet: airy, confident, nearly typographic. The interface is a near-monochrome canvas of cool whites and deep navy ink, interrupted only by a single electric violet accent that makes every action feel switched on. Headlines are set in weight 300 with aggressive negative tracking — authority through restraint, not volume — and gradient text is the signature move for hero statements, flowing from electric violet through slate gray. Decorative gradients (violet → magenta → amber) appear as soft halos behind product art and hero edges, never as backgrounds for content. Surfaces are flat, corners stay at 4px, and elevation is reserved for floating product mockups rather than UI chrome.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Iris | `#533afd` | `--color-electric-iris` | Primary action fill, active nav, brand focal point — the only saturated color allowed to carry weight against the white canvas |
| Lumen Violet | `#8087ff` | `--color-lumen-violet` | Hover/active washes, secondary link state, icon accents, soft brand halos |
| Midnight Ink | `#061b31` | `--color-midnight-ink` | Primary text, nav ink, dark CTA text — deep near-black blue, never pure black |
| Steel | `#50617a` | `--color-steel` | Body text, secondary headings, default link color — the workhorse neutral that reads as typography, not decoration |
| Slate | `#64748d` | `--color-slate` | Muted helper text, captions, de-emphasized labels, iconography at rest |
| Pewter | `#7d8ba4` | `--color-pewter` | Tertiary text, placeholder content, supporting metadata |
| Fog | `#3c4f69` | `--color-fog` | Stronger secondary text where Steel feels too light, card subtitle ink |
| Mist | `#e5edf5` | `--color-mist` | Page background, hairline borders, card borders — the cool off-white that keeps the canvas from feeling sterile |
| Snow | `#f8fafd` | `--color-snow` | Card surface, raised panels, subtle elevation base — one step warmer than Mist |
| Paper | `#ffffff` | `--color-paper` | Pure white reserved for elevated cards, button text on dark fills, and nav surfaces |
| Ember | `#ff6118` | `--color-ember` | Decorative warm accent inside gradient artwork and product illustrations — never used as a functional UI color |
| Solar | `#ffbb00` | `--color-solar` | Highlight wash inside decorative gradient blooms, warm counterweight to violet |
| Periwinkle Tint | `#e2e4ff` | `--color-periwinkle-tint` | Soft violet wash for inactive chip backgrounds, ghost button hover, tag fills |
| Iris Glow | `#d6d9fc` | `--color-iris-glow` | Lighter violet tint for selected states, secondary fills, soft brand surfaces |
| Verdant | `#81b81a` | `--color-verdant` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Dawn Bloom | `radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)` | `--color-dawn-bloom` | Gradient endpoint for hero gradient washes — magenta counterpoint to Electric Iris |
| Spectrum Veil | `linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94))` | `--color-spectrum-veil` | Gradient origin for tri-color violet→pink→amber spectrum washes behind hero and feature sections |

## Tokens — Typography

### sohne-var — The single typeface for everything. Weight 300 carries all display and headline work — an anti-convention choice that whispers authority instead of shouting it. Weight 400 handles body, UI labels, and button text. The variable axis allows precise weight tuning for gradient text transitions. · `--font-sohne-var`
- **Substitute:** Inter, GT America, Söhne (commercial), or Manrope as a free fallback — all share the geometric humanist proportions
- **Weights:** 300, 400
- **Sizes:** 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 26, 32, 34, 44, 48, 56
- **Line height:** 0.80–1.50
- **Letter spacing:** Tightens aggressively with size: 0.010em at 8–12px, 0em at 14–16px, -0.009em at 18–22px, -0.020em at 26–34px, -0.025em at 44–48px, -0.030em at 56px
- **OpenType features:** `"ss01" on, "tnum" on`
- **Role:** The single typeface for everything. Weight 300 carries all display and headline work — an anti-convention choice that whispers authority instead of shouting it. Weight 400 handles body, UI labels, and button text. The variable axis allows precise weight tuning for gradient text transitions.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.3 | -0.18px | `--text-subheading` |
| heading-sm | 22px | 1.25 | -0.2px | `--text-heading-sm` |
| heading | 26px | 1.2 | -0.52px | `--text-heading` |
| heading-lg | 34px | 1.15 | -0.68px | `--text-heading-lg` |
| display | 48px | 1.07 | -1.2px | `--text-display` |
| hero | 56px | 1.03 | -1.68px | `--text-hero` |

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
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 4px |
| cards | 4px |
| inputs | 4px |
| avatars | 9999px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.2) 0px 0px 32px 8px` | `--shadow-xl` |
| xl-2 | `rgba(50, 50, 93, 0.12) 0px 16px 32px 0px` | `--shadow-xl-2` |
| xl-3 | `rgba(23, 23, 23, 0.08) 0px 15px 35px 0px` | `--shadow-xl-3` |
| sm | `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px` | `--shadow-sm` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** The single most important action on any surface

Filled Electric Iris (#533afd) with white text, 4px radius, 12px 16px padding, sohne-var 14–16px weight 400. Trailing arrow glyph at 12px in a subtle inline arrow slot. Hover lifts to a slightly lighter iris via a 10% white overlay. No drop shadow.

### Secondary Outlined Button
**Role:** Companion action beside a primary CTA

Transparent fill with Midnight Ink (#061b31) border at 1px, 4px radius, 12px 16px padding, sohne-var 14–16px weight 400. Text and border in Midnight Ink. Hover inverts to filled Midnight Ink with white text.

### Ghost Text Link
**Role:** Low-emphasis inline action, often paired with a brand icon (Google, Apple)

No background, no border. sohne-var 16px weight 400 in Midnight Ink. Leading icon at 18–20px in a circular soft-gray container. Underline appears on hover only.

### Navigation Bar
**Role:** Persistent top-level wayfinding

White or transparent background, 64px tall, horizontally centered max-width container. Logo at left in Midnight Ink. Menu items in Steel (#50617a) weight 400, 14px, with 8px gap between items. Right cluster: ghost sign-in + filled iris CTA. Dropdown menus appear as white panels with 4px radius and a soft shadow rgba(50,50,93,0.12) 0px 16px 32px.

### Hero Gradient Halo
**Role:** Decorative atmospheric light bleeding from the right edge of the hero

Full-bleed radial gradient from Electric Iris through magenta (#f72df3) into Ember (#ff6118), then dissolving into the canvas Mist. Applied as a background-layer blob, clipped by a soft mask, always positioned to the right or behind headline text.

### Gradient Text Headline
**Role:** Signature hero and section display copy

sohne-var 44–56px weight 300, letter-spacing -0.025em to -0.030em. Fill is a CSS linear-gradient from Electric Iris (#533afd) to Steel (#50617a), creating a left-bright/right-dim effect. Used on all top-level page titles. Secondary clauses within the headline may remain solid Midnight Ink for contrast.

### Product Showcase Card
**Role:** Feature illustration tile in 2-column or 3-column grids

White (#ffffff) surface, 4px radius, 1px Mist (#e5edf5) border, 24px padding. Bottom 30–40% masked with a warm gradient bleed (orange→pink→violet) that rises behind the product mockup. Card title at 22px weight 400 Midnight Ink; supporting copy at 16px Steel.

### Section Header Band
**Role:** Top-of-section title and supporting copy

Left-aligned within a max-width 1200px container. Headline 34–48px weight 300 with gradient text fill. Optional eyebrow line above in Slate (#64748d) at 14px. 48–64px vertical padding from the section body.

### Customer Logo Strip
**Role:** Social proof bar beneath the hero

Single horizontal row, evenly distributed across the content width. Logos in grayscale, 24–32px tall, consistent visual weight. No captions, no dividers, no background.

### Case Study Banner
**Role:** Full-width feature block with a real customer story

Two-row layout: top row is a slim card with a brand badge (yellow rounded square 4px radius), customer one-liner at 18px Midnight Ink, and a outlined CTA right-aligned. Bottom row is a full-bleed editorial photograph with a soft right-side mask. 80px section gap above and below.

### Eyebrow Label
**Role:** Section category tag above headlines

sohne-var 12px weight 400 in Slate (#64748d), letter-spacing 0.12em uppercase. No bullet, no dot — just the text. 16px gap to the headline below.

### Floating Product Mockup
**Role:** Phone, checkout panel, or dashboard preview shown above the card

Realistic product UI captured as art. Sits 16–24px above the card surface, with a soft shadow rgba(0,0,0,0.2) 0px 0px 32px 8px for depth. Mockups are never interactive — they are illustrative.

### Footer
**Role:** Site-level links, region selector, legal

White background, top border 1px Mist. Four-column link grid in Pewter (#7d8ba4) 14px, headings in Midnight Ink 14px weight 400. Generous 64–80px vertical padding.

## Do's and Don'ts

### Do
- Set every headline at weight 300 with letter-spacing of -0.020em or tighter — this is the single most recognizable Stripe choice
- Use Electric Iris (#533afd) filled for exactly one primary action per viewport; never two competing CTAs in the same color
- Apply the gradient text fill (Electric Iris → Steel) to every H1 and most H2s on marketing pages
- Keep all corners at 4px — buttons, cards, inputs, tags, badges. Never use 8px+ radii in the interface
- Layer the violet→magenta→amber radial gradient as a background halo clipped to the right edge of hero sections
- Set the page background to Mist (#e5edf5), not pure white — the cool off-white is part of the brand
- Use sohne-var with font-feature-settings 'ss01' and 'tnum' enabled for tabular numbers and the alternate g

### Don't
- Never use weight 600+ for headlines — it breaks the whisper-authority system
- Never use a second saturated color as a CTA — Ember and Solar are decorative only, not functional
- Never add drop shadows to buttons, nav, or standard cards — only to floating mockups and dropdowns
- Never use letter-spacing wider than 0em on body text or looser than -0.025em on display
- Never place a gradient wash behind readable content — gradients are atmospheric decoration, not backgrounds for text
- Never use border-radius above 8px anywhere in the interface; the 4px discipline is load-bearing
- Never introduce a new typeface — sohne-var is the only voice

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#e5edf5` | Page background — cool off-white with a blue cast |
| 1 | Card | `#f8fafd` | Default card and panel surface |
| 2 | Elevated | `#ffffff` | Highest elevation — floating product mockups, modal surfaces |
| 3 | Violet Wash | `#e2e4ff` | Brand-tinted surface for chips, tags, ghost button hovers |

## Elevation

- **Dropdown Panel:** `rgba(50, 50, 93, 0.12) 0px 16px 32px 0px`
- **Floating Product Mockup:** `rgba(0, 0, 0, 0.2) 0px 0px 32px 8px`
- **Hero Card:** `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px`

## Imagery

Photography is editorial and high-quality, used sparingly in case study banners — full-bleed aerial or wide-angle lifestyle shots with strong directional light. Product mockups (phone, checkout, dashboard) are realistic and detailed, treated as artwork rather than UI. Gradients are the primary visual language: radial blooms of violet → magenta → amber bleeding off the right edge of the hero, or warm color washes rising from the bottom of product cards. No decorative icons, no abstract geometry, no illustrations — the system relies on type, product art, and gradient light. Iconography (when present in nav or buttons) is line-based at 1.5px stroke, mono-color, in Slate or Midnight Ink.

## Layout

Full-width sections within a max-width 1200px centered content column. Hero is split: left 60% holds the gradient-text headline and CTA cluster, right 40% dissolves into the gradient halo. Below the hero, a single-row logo strip spans the full content width. Feature sections alternate between two-column (text-left, product-mockup-right) and three-column product card grids. Section gaps are generous (64–80px) with no dividers — flow is seamless. Case study banners break the rhythm with a full-bleed photograph. The page is never asymmetric or zigzag — the grid is calm and predictable, letting the gradient accents do the visual work.

## Agent Prompt Guide

**Quick Color Reference**
- text: #061b31 (Midnight Ink)
- background: #e5edf5 (Mist)
- card: #f8fafd (Snow)
- border: #e5edf5 (Mist)
- accent: #533afd (Electric Iris)
- primary action: #533afd (filled action)

**Example Component Prompts**
1. *Hero with gradient headline*: Create a hero with Mist (#e5edf5) background. Display headline at 56px sohne-var weight 300, letter-spacing -1.68px, filled with linear-gradient from #533afd to #50617a. Subtext at 18px weight 400 in Steel (#50617a). Primary CTA: filled #533afd button, 4px radius, 12px 16px padding, white 14px weight 400 text. Right edge: radial gradient halo from #7f7dfc through #f44bcc into #e5edf5.
2. *Product showcase card*: White (#ffffff) card, 4px radius, 1px #e5edf5 border, 24px padding. Title 22px sohne-var weight 400 in #061b31. Body 16px in #50617a. Bottom 35% masked with a warm gradient (orange #ff6118 → pink #f72df3 → violet #533afd) rising behind a floating phone mockup with shadow rgba(0,0,0,0.2) 0px 0px 32px 8px.
3. Create a Primary Action Button: #533afd background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.
5. *Footer*: White background, 1px #e5edf5 top border, 80px vertical padding. Four-column link grid with 14px #7d8ba4 links and #061b31 column headings, 32px row gap.

## Gradient System

Gradients are atmospheric, not structural. Three canonical uses: (1) **Hero halo** — a right-edge radial bloom from Electric Iris through magenta into the canvas Mist, always clipped, never full-bleed. (2) **Card bottom-wash** — a warm orange→pink→violet gradient rising 30–40% up the card behind a product mockup, creating a sunset-under-the-horizon effect. (3) **Gradient text** — the signature linear fill from Electric Iris to Steel on display headlines. Tri-color spectrum gradients (violet → pink → amber at 90deg) appear only in one-off decorative contexts. The gradient palette is a controlled set: #533afd, #f72df3, #ff6118, #ffbb00. Never combine more than three gradient stops.

## Similar Brands

- **Linear** — Same single-accent-on-calm-canvas discipline with near-monochrome interface and a single violet focal color
- **Notion** — Generous whitespace, light-weight headlines, and an almost typographic-first layout with restrained color
- **Vercel** — Weight-300 display type with aggressive negative tracking and a minimal monochrome palette punctuated by one vivid accent
- **Arc Browser** — Same gradient-as-atmosphere approach where color bleeds from edges rather than filling containers
- **Plaid** — Fintech peer with identical financial-infrastructure tone — calm, trustworthy, type-driven, single accent

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-electric-iris: #533afd;
  --color-lumen-violet: #8087ff;
  --color-midnight-ink: #061b31;
  --color-steel: #50617a;
  --color-slate: #64748d;
  --color-pewter: #7d8ba4;
  --color-fog: #3c4f69;
  --color-mist: #e5edf5;
  --color-snow: #f8fafd;
  --color-paper: #ffffff;
  --color-ember: #ff6118;
  --color-solar: #ffbb00;
  --color-periwinkle-tint: #e2e4ff;
  --color-iris-glow: #d6d9fc;
  --color-verdant: #81b81a;
  --color-dawn-bloom: #f72df3;
  --gradient-dawn-bloom: radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%);
  --color-spectrum-veil: #7232f1;
  --gradient-spectrum-veil: linear-gradient(90deg, rgb(114, 50, 241) 3.13%, rgb(251, 118, 250) 50%, rgb(255, 207, 94));

  /* Typography — Font Families */
  --font-sohne-var: 'sohne-var', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.2px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.52px;
  --text-heading-lg: 34px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.68px;
  --text-display: 48px;
  --leading-display: 1.07;
  --tracking-display: -1.2px;
  --text-hero: 56px;
  --leading-hero: 1.03;
  --tracking-hero: -1.68px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;

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
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;

  /* Named Radii */
  --radius-tags: 4px;
  --radius-cards: 4px;
  --radius-inputs: 4px;
  --radius-avatars: 9999px;
  --radius-buttons: 4px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
  --shadow-xl-2: rgba(50, 50, 93, 0.12) 0px 16px 32px 0px;
  --shadow-xl-3: rgba(23, 23, 23, 0.08) 0px 15px 35px 0px;
  --shadow-sm: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;

  /* Surfaces */
  --surface-canvas: #e5edf5;
  --surface-card: #f8fafd;
  --surface-elevated: #ffffff;
  --surface-violet-wash: #e2e4ff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-electric-iris: #533afd;
  --color-lumen-violet: #8087ff;
  --color-midnight-ink: #061b31;
  --color-steel: #50617a;
  --color-slate: #64748d;
  --color-pewter: #7d8ba4;
  --color-fog: #3c4f69;
  --color-mist: #e5edf5;
  --color-snow: #f8fafd;
  --color-paper: #ffffff;
  --color-ember: #ff6118;
  --color-solar: #ffbb00;
  --color-periwinkle-tint: #e2e4ff;
  --color-iris-glow: #d6d9fc;
  --color-verdant: #81b81a;
  --color-dawn-bloom: #f72df3;
  --color-spectrum-veil: #7232f1;

  /* Typography */
  --font-sohne-var: 'sohne-var', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.2px;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --tracking-heading: -0.52px;
  --text-heading-lg: 34px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.68px;
  --text-display: 48px;
  --leading-display: 1.07;
  --tracking-display: -1.2px;
  --text-hero: 56px;
  --leading-hero: 1.03;
  --tracking-hero: -1.68px;

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
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-sm: 1px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
  --shadow-xl-2: rgba(50, 50, 93, 0.12) 0px 16px 32px 0px;
  --shadow-xl-3: rgba(23, 23, 23, 0.08) 0px 15px 35px 0px;
  --shadow-sm: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;
}
```