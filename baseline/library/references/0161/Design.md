# Jeton — Style Reference
> Coral sunrise over white paper — a warm gradient hero dissolving into clean white pages, punctuated by a single vivid orange-red and three functional accent hues.

**Theme:** light

Jeton operates on a white-canvas banking language interrupted by moments of warm coral heat: a sunset-toned hero gradient anchors the top, while the rest of the page lives on clean white with a single vivid orange-red as the dominant brand mark. The signature move is functional color-coding — green for Add, cobalt blue for Send, pink-red for Exchange — where each action verb gets its own hue paired with a rounded square icon tile, turning routine verbs into a color-coded vocabulary. Components are weightless and border-driven: 16px rounded surfaces, outlined chromatic actions rather than filled buttons, and a distinctive pill-shaped floating bottom nav that feels like a control strip lifted off the page. Type is bold, generous, and tightly led (line-height 0.90 on display) in a custom geometric sans, giving headlines presence without weight. The overall rhythm is spacious white between sections of color, with warm orange-tinted shadows adding a subtle glow rather than hard elevation.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Coral Flame | `linear-gradient(135deg, #f8a4a4 0%, #f73b20 100%)` | `--color-coral-flame` | Outlined action borders, hero headlines, active links, key icon strokes — the dominant brand mark; its intensity against pure white creates urgency without aggression; Full-bleed hero background gradient — a warm wash from pink through coral to peach, the visual identity of the brand's first impression |
| Brandwood | `#360802` | `--color-brandwood` | Deep accent for bold display type, input borders, high-contrast text — a near-black with warm brown undertone that pairs naturally with the coral |
| Sunset Fade | `#fef5f3` | `--color-sunset-fade` | Warm tinted surface for subtle layering above the white canvas — barely warmer than the page |
| Blush Mist | `#fbdfd9` | `--color-blush-mist` | Secondary warm tint surface, used behind the hero gradient base and soft section washes |
| Pure White | `#ffffff` | `--color-pure-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Carbon | `#000000` | `--color-carbon` | Icon strokes and minimal accent borders where absolute contrast is required |
| Mint Action | `#34c771` | `--color-mint-action` | Green outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Cobalt Pulse | `#477ee9` | `--color-cobalt-pulse` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Magenta Spark | `#fb2d54` | `--color-magenta-spark` | Red outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### Sequel Sans — Sole typeface across the system — display, body, nav, buttons. Sequel Sans is a geometric humanist sans with wide apertures and generous x-height, giving it warmth uncommon in geometric faces. Weight 450 (a medium-light step between regular and medium) appears to be the workhorse, used for both display and body — a non-conventional choice that keeps the page from feeling heavy. · `--font-sequel-sans`
- **Substitute:** Inter, DM Sans, or Satoshi
- **Weights:** 400, 450, 500
- **Sizes:** 12px, 14px, 16px, 23px, 33px, 44px, 72px, 106px, 110px, 155px
- **Line height:** 0.90–1.50
- **Letter spacing:** 0.01em at 12–23px, 0.03em at 72–155px — unusually positive tracking that opens up display type, giving headlines a airy, almost editorial quality
- **Role:** Sole typeface across the system — display, body, nav, buttons. Sequel Sans is a geometric humanist sans with wide apertures and generous x-height, giving it warmth uncommon in geometric faces. Weight 450 (a medium-light step between regular and medium) appears to be the workhorse, used for both display and body — a non-conventional choice that keeps the page from feeling heavy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.4 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.4 | 0.14px | `--text-body-sm` |
| body | 16px | 1.5 | 0.16px | `--text-body` |
| subheading | 23px | 1.4 | 0.23px | `--text-subheading` |
| heading-sm | 33px | 1.25 | 0.99px | `--text-heading-sm` |
| heading | 44px | 1.2 | 1.32px | `--text-heading` |
| heading-lg | 72px | 1.1 | 2.16px | `--text-heading-lg` |
| display | 106px | 1 | 3.18px | `--text-display` |
| display-xl | 155px | 0.9 | 4.65px | `--text-display-xl` |

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
| 56 | 56px | `--spacing-56` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 84px |
| cards | 16px |
| links | 12px |
| inputs | 16px |
| buttons | 16px |
| nav-pill | 150px |
| large-cards | 24px |
| action-tiles | 12px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32...` | `--shadow-lg` |
| md | `rgba(0, 0, 0, 0.05) 0px -4px 16px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Hero Gradient Banner
**Role:** Full-bleed opening section with warm sunset gradient

Full-viewport gradient from soft pink through coral to peach, occupying the entire first screen. Contains centered 3D circular disk illustration (concentric layered rings in warm gradient), a 155px display headline at line-height 0.90, and a 106px subheadline. No border, no surface — the gradient IS the surface.

### Display Headline Block
**Role:** Hero and section title typography

Rendered in Sequel Sans weight 500 at 106–155px, line-height 0.90–1.00, letter-spacing 0.03em. White text on the hero gradient; pure black or Coral Flame on white sections. No max-width constraint — type bleeds to the left edge for editorial impact.

### Outlined CTA Button (Sign up)
**Role:** Primary conversion action

Outlined button with a 1.5–2px Coral Flame (#f73b20) border, 16px radius, 8–10px vertical padding, 16–20px horizontal padding. White fill, Coral Flame text in Sequel Sans 450 at 16px. No drop shadow. This is the system's primary action — defined by its chromatic border against the white fill, not a solid fill.

### App Store Download Button
**Role:** Secondary download action

Rounded 16px button with thin Coral Flame border on white, small Apple/Google icon left, two-line text (store name on top, 'Get it on' / 'Download on the' label below) in 12–14px Sequel Sans. Appears paired vertically in the hero.

### Floating Bottom Nav Pill
**Role:** Persistent navigation control strip

Distinctive 84px-radius pill-shaped floating bar centered at the bottom of the viewport. Coral Flame border on white fill with subtle warm-tinted shadow (rgba(247,59,32,0.1) 0 8px 24px). Contains a home icon, nav items (Personal, Business, Company) with dropdown chevrons, and a separate Support button anchored to the right. The pill shape and shadow make it feel like a physical control hovering above the page.

### Nav Item with Dropdown
**Role:** Section navigation within the floating pill

Sequel Sans 450 at 16px, dark text, followed by a small upward chevron for dropdown affordance. No background change on hover — the chevron indicates interactivity.

### Floating Support Button
**Role:** Persistent help CTA

84px-radius pill anchored bottom-right, white fill, light border, chat-bubble icon left, 'Support' label in 16px Sequel Sans 450. Visually echoes the bottom nav pill as a paired floating element.

### Color-Coded Action Verb
**Role:** Action taxonomy display — Add, Send, Exchange

Each action word appears as large display text (72–106px, weight 500, line-height 1.1) preceded by a 48–56px rounded square icon tile (12px radius) in the matching accent color (Mint for Add, Cobalt for Send, Magenta for Exchange). The icon sits inside the tile with white stroke/fill. The text color matches the tile color, creating a single-color unit. This pattern is the system's way of turning a feature list into a color-coded vocabulary.

### Language Selector
**Role:** Utility nav control in the top bar

Small globe icon + 'EN' label + downward chevron in Sequel Sans 450 at 14px, white text. No border — sits inline in the top-right nav cluster.

### Section Title on White
**Role:** White-canvas section headline

106–155px display text in Coral Flame or pure black, Sequel Sans 500, line-height 0.90–1.00, 0.03em letter-spacing. Centered or left-aligned. No subtitle, no eyebrow — the headline stands alone on white with generous vertical padding (80px+ above and below).

### Warm-Tinted Card
**Role:** Content card on white surface

16–24px radius, white or #fef5f3 fill, no border, subtle shadow rgba(0,0,0,0.05) 0 -4px 16px (upward shadow, creating a lift-from-below effect). 24px internal padding. The upward shadow direction is distinctive — most systems shadow downward; this one lifts.

### Top Nav Bar
**Role:** Minimal header navigation

Transparent or white background, brand wordmark 'Jeton' in Sequel Sans 500 at 24px left, utility cluster (language, login, sign up) right. No heavy border — 1px hairline at most. Sits at the top of the hero gradient on page one, then transitions to white on subsequent sections.

## Do's and Don'ts

### Do
- Use Coral Flame (#f73b20) as an outlined action border, not a filled button background — the system's primary CTA is a border on white
- Apply the three-color functional coding consistently: Mint Action for Add/credit verbs, Cobalt Pulse for Send/transfer verbs, Magenta Spark for Exchange/conversion verbs
- Use 16px radius as the default surface radius; reserve 84–150px exclusively for pill-shaped floating controls (bottom nav, support button)
- Keep type tracking positive: 0.01em on body, 0.03em on display — this openness is a signature, not a default override
- Use the warm-tinted shadow stack (rgba(247,59,32,0.1) 0 8px 24px) for floating elements, and the upward neutral shadow (rgba(0,0,0,0.05) 0 -4px 16px) for card lifts
- Set display headlines at line-height 0.90–1.00 with no max-width — let them bleed to the left edge for editorial scale
- Use the hero sunset gradient only for the first screen; keep all other sections on white with the brand color appearing only in type, borders, and accent tiles

### Don't
- Never fill a button with Coral Flame as a solid background — the system's CTA is outlined, not filled
- Do not use negative letter-spacing on display type — the positive tracking (0.03em) is intentional and defines the headline voice
- Do not introduce shadows with cool or neutral gray tones where a floating element is present — use the warm coral-tinted shadow stack instead
- Do not use Mint Action for error states or Cobalt Pulse for info states — these colors encode action families (Add, Send, Exchange), not semantic states
- Avoid mixing more than three accent colors in a single component — the system is disciplined: coral for brand, one of the three functional colors for action
- Do not use sharp 0px radius on cards or buttons — the 16px minimum radius is system-wide; only pill controls get the 84px+ treatment
- Do not add drop shadows to outlined buttons — they sit flat on white; elevation is reserved for floating pills and lifted cards

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Pure White | `#ffffff` | Primary page canvas — all content sections except the hero |
| 1 | Warm Tint | `#fef5f3` | Subtle warm-tinted surface for card backgrounds and section breaks |
| 2 | Blush Mist | `#fbdfd9` | Slightly more saturated warm wash for featured surfaces and gradient base |
| 3 | Hero Gradient | `#f73b20` | Full-bleed hero background — warm pink-to-coral sunset gradient as first screen |

## Elevation

- **Floating Bottom Nav Pill:** `rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px`
- **Warm-Tinted Card:** `rgba(0, 0, 0, 0.05) 0px -4px 16px 0px`

## Imagery

Imagery is sparse and sculptural. The hero features a single 3D-rendered circular disk — concentric layered rings with a warm gradient shading from coral to peach, appearing as a physical coin or token floating in space. No photography, no lifestyle imagery, no people. The visual language is object-first: the brand mark and action iconography (the colored rounded squares) carry all visual weight. The 3D disk has a soft, slightly blurred quality with smooth gradient surfaces — no hard edges, no wireframe lines. Overall density is very low — mostly white space with one decorative object and a few functional icons.

## Layout

The page follows a full-bleed hero-then-white-sections model. The first screen is a 100vh warm gradient with a floating 3D disk illustration right-of-center and a left-aligned 155px display headline with a 106px subheadline stacked below. Below the fold, the page transitions to pure white sections with centered or left-aligned display text at 106–155px. Section gaps are generous (80px+). Content is organized as single-column typographic statements (no feature grids visible in the hero sequence). The floating bottom nav pill is fixed-position, centered horizontally, and overlaps the fold boundary. Navigation is minimal: a top bar with brand mark left and utility cluster right (language, login, sign up). No sidebar, no mega-menu.

## Agent Prompt Guide

## Quick Color Reference
- Page background: #ffffff
- Card surface (warm tint): #fef5f3
- Primary text / dark accent: #360802
- Outlined action border: #f73b20 (Coral Flame — NOT a filled button background)
- Accent — Add/credit actions: #34c771 (Mint)
- Accent — Send/transfer actions: #477ee9 (Cobalt)
- Accent — Exchange/conversion actions: #fb2d54 (Magenta)
- primary action: #f73b20 (outlined action border)

## Example Component Prompts

1. **Hero Section**: Full-bleed background with a warm gradient from #f8a4a4 through #f73b20 to peach. Centered 3D circular disk illustration (concentric rings, coral-to-peach gradient). Headline: 'One app for all needs' in Sequel Sans 500, 155px, #ffffff, line-height 0.90, letter-spacing 0.03em, left-aligned. Subtext 'Single account for all your payments.' in 16px, #ffffff, right-aligned. Two app store buttons stacked vertically, 16px radius, 1.5px #ffffff border, white text.

2. **Color-Coded Action Block**: Three large action verbs stacked vertically, each 72px Sequel Sans 500, line-height 1.1, 0.03em tracking. 'Add' in #34c771 with a 48px 12px-radius #34c771 tile containing a white plus icon. 'Send' in #477ee9 with a 48px 12px-radius #477ee9 tile containing a white paper-plane icon. 'Exchange' in #fb2d54 with a 48px 12px-radius #fb2d54 tile containing a white swap icon. Centered on #ffffff background, 80px vertical padding.

3. **Floating Bottom Nav**: Centered fixed-position pill at bottom of viewport, 84px border-radius, white #ffffff fill, 1.5px #f73b20 border, shadow rgba(247,59,32,0.1) 0 8px 24px. Contents: home icon (left), 'Personal ▾', 'Business ↗', 'Company ▾' nav items in 16px Sequel Sans 450, #360802. Separate 'Support' pill anchored right with 84px radius, same border style.

4. **Section Title on White**: Centered on #ffffff, 80px top/bottom padding. Headline 'Unify your finances' in Sequel Sans 500, 155px, #f73b20, line-height 0.90, letter-spacing 0.03em. No subtitle, no border, no background.

5. **Outlined Sign-Up Button**: White #ffffff fill, 1.5px #f73b20 border, 16px radius, 10px vertical padding, 20px horizontal padding. Text 'Sign up' in Sequel Sans 450, 16px, #f73b20. No shadow, no hover fill change.

## Signature Design Choices

Three choices define this system's identity:

1. **Outlined chromatic actions over filled buttons** — The primary CTA is a border on white, not a solid fill. This is unusual for fintech (most use filled green/blue CTAs). The outlined coral border against white creates warmth without aggression and keeps the page visually light.

2. **Functional color vocabulary** — Green/blue/pink are not semantic states (success/info/error). They encode action families: Add, Send, Exchange. This turns feature lists into a color-coded verb system that users can learn by color association.

3. **Positive letter-spacing on display type** — Most systems tighten display headlines with negative tracking. Sequel Sans opens up at 0.03em on 72–155px sizes, giving headlines an airy, editorial quality that feels less corporate and more magazine-like.

## Similar Brands

- **Revolut** — Same three-color functional action coding (green for add/top-up, blue for send, pink/red for exchange) with a colorful icon-and-verb pattern. Both treat action verbs as color-coded units rather than using color purely for semantic state.
- **N26** — Warm gradient hero, clean white sections below, minimal outlined controls, and a floating bottom nav. Both use a single vivid warm accent against white for a spacious, modern banking feel.
- **Monzo** — Warm coral-orange brand color used as borders and accents (not fills), generous white space, and a friendly custom sans-serif typeface. Both avoid heavy shadows and dark UI patterns common in fintech.
- **Cash App** — Bold oversized display type on white, playful color-coded action vocabulary, and a brand color used as a typographic accent rather than a button fill. Both feel editorial and approachable rather than corporate-fintech.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-coral-flame: #f73b20;
  --gradient-coral-flame: linear-gradient(135deg, #f8a4a4 0%, #f73b20 100%);
  --color-brandwood: #360802;
  --color-sunset-fade: #fef5f3;
  --color-blush-mist: #fbdfd9;
  --color-pure-white: #ffffff;
  --color-carbon: #000000;
  --color-mint-action: #34c771;
  --color-cobalt-pulse: #477ee9;
  --color-magenta-spark: #fb2d54;

  /* Typography — Font Families */
  --font-sequel-sans: 'Sequel Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 23px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.23px;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.99px;
  --text-heading: 44px;
  --leading-heading: 1.2;
  --tracking-heading: 1.32px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 2.16px;
  --text-display: 106px;
  --leading-display: 1;
  --tracking-display: 3.18px;
  --text-display-xl: 155px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: 4.65px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w450: 450;
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
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 19.255px;
  --radius-2xl-3: 21.66px;
  --radius-3xl: 24px;
  --radius-full: 60px;
  --radius-full-2: 84px;
  --radius-full-3: 112px;
  --radius-full-4: 150px;

  /* Named Radii */
  --radius-nav: 84px;
  --radius-cards: 16px;
  --radius-links: 12px;
  --radius-inputs: 16px;
  --radius-buttons: 16px;
  --radius-nav-pill: 150px;
  --radius-large-cards: 24px;
  --radius-action-tiles: 12px;

  /* Shadows */
  --shadow-lg: rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px;
  --shadow-md: rgba(0, 0, 0, 0.05) 0px -4px 16px 0px;

  /* Surfaces */
  --surface-pure-white: #ffffff;
  --surface-warm-tint: #fef5f3;
  --surface-blush-mist: #fbdfd9;
  --surface-hero-gradient: #f73b20;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-coral-flame: #f73b20;
  --color-brandwood: #360802;
  --color-sunset-fade: #fef5f3;
  --color-blush-mist: #fbdfd9;
  --color-pure-white: #ffffff;
  --color-carbon: #000000;
  --color-mint-action: #34c771;
  --color-cobalt-pulse: #477ee9;
  --color-magenta-spark: #fb2d54;

  /* Typography */
  --font-sequel-sans: 'Sequel Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 23px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.23px;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: 0.99px;
  --text-heading: 44px;
  --leading-heading: 1.2;
  --tracking-heading: 1.32px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 2.16px;
  --text-display: 106px;
  --leading-display: 1;
  --tracking-display: 3.18px;
  --text-display-xl: 155px;
  --leading-display-xl: 0.9;
  --tracking-display-xl: 4.65px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 19.255px;
  --radius-2xl-3: 21.66px;
  --radius-3xl: 24px;
  --radius-full: 60px;
  --radius-full-2: 84px;
  --radius-full-3: 112px;
  --radius-full-4: 150px;

  /* Shadows */
  --shadow-lg: rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px;
  --shadow-md: rgba(0, 0, 0, 0.05) 0px -4px 16px 0px;
}
```