# Calendly.com — Style Reference
> Quiet professional calendar on frosted paper

**Theme:** light

Calendly's design system is a quiet, professional canvas built on white surfaces and near-black text, with a signature dark navy (#0b3558) that gives headlines weight without resorting to pure black. A single vivid blue (#006bff) acts as the lone functional accent, reserved for CTAs and interactive moments, while the rest of the palette stays deliberately desaturated. The brand's most distinctive move is decorative gradient shapes—pink, violet, and warm yellow blobs—layered behind product UI mockups to add warmth and depth to an otherwise austere interface. Typography is a single custom family (Gilroy) at generous sizes with confident weights, and components are lightweight: 4px button radii, soft blue-gray shadows, and hairline borders that feel precise rather than playful.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Navy | `#0b3558` | `--color-midnight-navy` | Headlines, primary brand text, logo wordmark, dark headings — the signature voice of the brand |
| Signal Blue | `#006bff` | `--color-signal-blue` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Slate Blue | `#476788` | `--color-slate-blue` | Secondary body text, muted descriptions, icon strokes, nav links in body context |
| Carbon | `#0a0a0a` | `--color-carbon` | Primary body text, button text on light surfaces, high-emphasis copy |
| Paper | `#ffffff` | `--color-paper` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Mist | `#f8f9fb` | `--color-mist` | Page canvas background, footer surface, subtle section differentiation |
| Fog | `#e7edf6` | `--color-fog` | Soft surface fills, badge backgrounds, subtle hover states, input fills |
| Mist Border | `#d4e0ed` | `--color-mist-border` | Hairline dividers, card borders, input borders, subtle structural lines |
| Silver | `#e6e6e6` | `--color-silver` | Secondary borders, icon containers, low-emphasis structural lines |
| Steel Blue | `#a6bbd1` | `--color-steel-blue` | Muted helper text, placeholder text, tertiary icon strokes |
| Info Blue | `#004eba` | `--color-info-blue` | Blue supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |
| Magenta Bloom | `#e55cff` | `--color-magenta-bloom` | Decorative gradient shape behind product mockups, illustration accent — non-functional, atmospheric only |
| Ultraviolet | `#8247f5` | `--color-ultraviolet` | Decorative gradient shape accent, illustration secondary tone — non-functional |
| Amber Spark | `#ffa600` | `--color-amber-spark` | Decorative gradient accent in illustration compositions — non-functional |
| Cyan Pop | `#0099ff` | `--color-cyan-pop` | Decorative gradient accent in product mockup backdrops — non-functional |

## Tokens — Typography

### Gilroy — Single-family type system used for all text. Weights 600-700 for headlines create confident, geometric authority; 400-500 for body keeps reading comfortable. Gilroy's rounded geometric forms give the brand warmth without sacrificing professionalism. · `--font-gilroy`
- **Substitute:** Manrope or DM Sans
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px, 28px, 38px, 50px, 68px, 80px
- **Line height:** 1.00, 1.10, 1.20, 1.21, 1.40, 1.50, 1.60, 1.64, 1.71, 2.00
- **Role:** Single-family type system used for all text. Weights 600-700 for headlines create confident, geometric authority; 400-500 for body keeps reading comfortable. Gilroy's rounded geometric forms give the brand warmth without sacrificing professionalism.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| micro | 12px | 1.5 | — | `--text-micro` |
| caption | 14px | 1.5 | — | `--text-caption` |
| body-sm | 16px | 1.6 | — | `--text-body-sm` |
| body | 18px | 1.64 | — | `--text-body` |
| body-lg | 20px | 1.6 | — | `--text-body-lg` |
| subheading | 24px | 1.4 | — | `--text-subheading` |
| heading-sm | 28px | 1.4 | — | `--text-heading-sm` |
| heading | 38px | 1.21 | — | `--text-heading` |
| heading-lg | 50px | 1.2 | — | `--text-heading-lg` |
| display | 68px | 1.1 | — | `--text-display` |

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
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 8px |
| badges | 50px |
| inputs | 4px |
| buttons | 4px |
| productMockups | 16px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 1...` | `--shadow-sm` |
| sm-2 | `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 1...` | `--shadow-sm-2` |
| sm-3 | `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 1...` | `--shadow-sm-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** Main conversion action

Filled vivid blue (#006bff) background, white text in Gilroy 600 at 16px. 4px border-radius, padding 8px 24px. Subtle blue-tinted shadow (three-layer, very soft). Used for 'Get started', 'Sign up for free', and all primary conversion moments.

### Ghost Nav Button
**Role:** Secondary nav action (Login)

Transparent background with #0b3558 navy text at 14px Gilroy 500. No border. Sits inline with the primary CTA in the navigation bar. 4px radius for consistency.

### OAuth Provider Button
**Role:** Third-party sign-in

White background, full-width or large, 4px radius. Contains a 24px brand-colored provider logo (Google/M/Microsoft) on the left and dark text label. Dark navy (#0b3558) text at 16px Gilroy 500. No shadow; 1px solid #d4e0ed border or no border depending on context.

### Product UI Card
**Role:** Showcase of product interface

White (#ffffff) surface representing a screenshot or mock of the Calendly product. 16px border-radius, generous blue-tinted shadow. Typically floats over a decorative gradient shape backdrop. The card itself is the visual hero—its content (calendar, booking form, event list) communicates the product.

### Decorative Gradient Shape
**Role:** Atmospheric backdrop behind product cards

Large, soft-edged organic blob shape using gradients of magenta (#e55cff), ultraviolet (#8247f5), amber (#ffa600), and cyan (#0099ff). Sits behind product UI cards at reduced opacity. No functional purpose—pure visual atmosphere. Edges are blurred or feathered, creating a watercolor effect.

### Feature List Item
**Role:** Feature highlight with icon and description

Horizontal layout: colored icon (#006bff or #0b3558, 24px) on the left, bold title in Gilroy 600 at 18-20px in #0b3558, supporting description in Gilroy 400 at 14-16px in #476788. Stacked vertically with 24-32px row gap. Active item shows blue underline or accent bar.

### Info Badge
**Role:** Status or category indicator

Pill-shaped (50px border-radius), small height (~24px), #004eba background or #e7edf6 soft blue background depending on prominence. White or #0b3558 text at 12px Gilroy 600. Padding 4px 12px. Used sparingly for tags and status labels.

### Navigation Bar
**Role:** Top-level site navigation

White background, full-width, 64-72px height. Calendly logo (navy icon + wordmark) left-aligned, centered menu items (Product, Solutions, Resources, Pricing) with 14px Gilroy 500 in #0b3558, right-aligned actions (Login ghost + Get started filled CTA). Bottom hairline border in #e6e6e6.

### Headline Block
**Role:** Section heading

Large display text in Gilroy 700 at 50-68px in #0b3558. Often left-aligned in hero sections, centered in feature sections. Line-height tight (1.1-1.2) for impact. The dark navy color—not pure black—is the signature choice that distinguishes Calendly from generic SaaS.

### Social Proof Stat
**Role:** Trust indicator with large number

Centered layout, large number in Gilroy 700 at 38-50px in #0a0a0a or #0b3558, followed by supporting text at 16px in #476788. Used for 'Trusted by more than 100,000 organizations' type statements. High contrast, minimal decoration.

### Tabbed Feature Section
**Role:** Multi-feature showcase with tabbed navigation

Two-column layout: left column holds a vertical list of feature titles (each with icon + bold title + muted description), right column holds a product UI card or illustration. Active tab shows blue accent. 80px section gap. White background.

## Do's and Don'ts

### Do
- Use #0b3558 navy for all headlines—never pure black (#000000) for display text
- Reserve #006bff exclusively for primary CTAs and active states; never use it for body text or decorations
- Apply 4px border-radius to all buttons and inputs for a precise, professional feel
- Layer product UI cards over soft gradient shapes (magenta, violet, amber, cyan) to add visual warmth
- Use blue-tinted shadows (rgba(71, 103, 136, ...)) instead of neutral gray shadows to keep elevation on-brand
- Set body text to Gilroy 400-500 at 16-18px with #0a0a0a for primary copy and #476788 for secondary
- Maintain 80px section gaps between major content blocks; 24-32px between items within a section

### Don't
- Don't use pure black (#000000) for headlines—always use #0b3558 navy to maintain the brand voice
- Don't apply gradients to text, buttons, or backgrounds—gradients are reserved for decorative shape backdrops only
- Don't use border-radius above 16px on cards or above 4px on buttons—the system is geometric, not pillowy
- Don't introduce additional accent colors; #006bff is the only functional chromatic color in the system
- Don't use solid drop shadows with high opacity—shadows must be soft, multi-layered, and blue-tinted
- Don't mix font families—Gilroy is used for all text from micro captions to 80px displays
- Don't use the decorative gradient colors (#e55cff, #8247f5, #ffa600, #0099ff) for UI elements—they are atmospheric only

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f8f9fb` | Page background, base layer |
| 1 | Card | `#ffffff` | Standard surface for product UI mockups, content cards, navigation |
| 2 | Soft Fill | `#e7edf6` | Muted surface for badges, secondary panels, subtle differentiation |
| 3 | Action | `#006bff` | Primary interactive surface for CTAs and active states |

## Elevation

- **Product UI Card:** `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.08) 0px 30px 50px 0px`
- **Link Card / Embedded Content:** `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 4px 10px 0px, rgba(71, 103, 136, 0.05) 0px 10px 20px 0px`
- **Primary Button:** `rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.06) 0px 15px 30px 0px`

## Imagery

The visual language centers on product UI mockups—realistic representations of the Calendly interface (calendar grids, booking forms, event lists) rendered as white cards. These cards are the heroes of the page, always floating over decorative gradient shapes: soft, organic blobs in magenta, ultraviolet, amber, and cyan that bleed off edges and create watercolor-like backdrops. There is no photography of people, no lifestyle imagery, no abstract 3D renders. Icons are flat, single-color, 24px, in navy or blue. The overall effect is product-as-hero: the interface itself communicates the value, while gradient shapes provide visual energy without competing for attention.

## Layout

Max-width 1200px centered container with generous 80px section gaps. The page follows a consistent rhythm: hero is a 2-column split (text left at 50% width, product mockup right with gradient backdrop), followed by centered headline + subhead + CTA blocks, then alternating 2-column feature sections (text left/product right or text right/product left). The hero is not full-viewport but occupies the top 80% of the first screen. Navigation is a sticky top bar at 64-72px height. Social proof stats appear as centered text below the hero. Content density is spacious and editorial—each section breathes with white space rather than packing information. Cards in grids use 2-3 columns with 24-32px gaps.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0a0a0a
- background: #f8f9fb
- surface: #ffffff
- border: #d4e0ed
- accent: #0b3558
- primary action: no distinct CTA color

**3-5 Example Component Prompts**

1. **Hero Headline Block**: Render a 68px Gilroy 700 headline in #0b3558 with 1.1 line-height, left-aligned, max-width 600px. Below it, an 18px Gilroy 400 subtext in #476788. To the right, a product UI card (white #ffffff, 16px radius, blue-tinted shadow) floating over a magenta-to-violet gradient blob.

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

3. **OAuth Provider Button**: Create a full-width white button, 4px radius, 1px solid #d4e0ed border, padding 12px 24px. Left-aligned 24px Google logo, 16px Gilroy 500 text in #0b3558 reading 'Sign up with Google'.

4. **Feature List Item**: Build a vertical list item with a 24px #006bff icon on the left, 20px Gilroy 600 title in #0b3558, and 14px Gilroy 400 description in #476788 below. 24px row gap between items. Active item has a 2px blue left border.

5. **Info Badge**: Render a pill-shaped badge (50px border-radius) with #004eba background, white text in Gilroy 600 at 12px, padding 4px 12px, height ~24px.

## Signature Choices

Three choices define this system and should not be altered:

1. **Navy headlines over black**: Every site uses black for headlines. Calendly uses #0b3558—a deep, slightly desaturated navy. This is the first thing a designer would notice and the hardest to replicate by accident. Never substitute #000000 for display text.

2. **Decorative gradient backdrops**: The magenta/violet/amber/cyan blobs behind product cards are not decoration afterthoughts—they are the brand's visual signature. They appear behind every major product visualization on the site. An AI agent should generate them as soft-edged organic shapes with feathered or blurred edges, not as hard geometric forms.

3. **Blue-tinted shadows**: The shadow color rgba(71, 103, 136, ...) is not neutral gray. This subtle blue cast makes elevation feel part of the brand rather than generic. Use it consistently for all elevated surfaces—cards, buttons, modals.

## Similar Brands

- **Notion** — Same clean light canvas with white surfaces, generous spacing, and minimal accent color usage; both favor single-font type systems and lightweight component weights
- **Typeform** — Similar use of colorful gradient shapes behind product mockups; both use white product UI as the visual hero with atmospheric color backdrops
- **Linear** — Shared precision in spacing, restrained palette, and confident type weights; both favor 4-8px radii and hairline borders over decorative shadows
- **Doodle** — Direct scheduling-tool competitor with comparable light-mode layout, centered headline blocks, and product-screenshot hero patterns
- **Intercom** — Similar editorial layout rhythm with alternating text/product sections, generous white space, and blue accent for CTAs

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-midnight-navy: #0b3558;
  --color-signal-blue: #006bff;
  --color-slate-blue: #476788;
  --color-carbon: #0a0a0a;
  --color-paper: #ffffff;
  --color-mist: #f8f9fb;
  --color-fog: #e7edf6;
  --color-mist-border: #d4e0ed;
  --color-silver: #e6e6e6;
  --color-steel-blue: #a6bbd1;
  --color-info-blue: #004eba;
  --color-magenta-bloom: #e55cff;
  --color-ultraviolet: #8247f5;
  --color-amber-spark: #ffa600;
  --color-cyan-pop: #0099ff;

  /* Typography — Font Families */
  --font-gilroy: 'Gilroy', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 12px;
  --leading-micro: 1.5;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body-sm: 16px;
  --leading-body-sm: 1.6;
  --text-body: 18px;
  --leading-body: 1.64;
  --text-body-lg: 20px;
  --leading-body-lg: 1.6;
  --text-subheading: 24px;
  --leading-subheading: 1.4;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.4;
  --text-heading: 38px;
  --leading-heading: 1.21;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.2;
  --text-display: 68px;
  --leading-display: 1.1;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 50px;

  /* Named Radii */
  --radius-cards: 8px;
  --radius-badges: 50px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --radius-productmockups: 16px;

  /* Shadows */
  --shadow-sm: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 4px 10px 0px, rgba(71, 103, 136, 0.05) 0px 10px 20px 0px;
  --shadow-sm-2: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.08) 0px 30px 50px 0px;
  --shadow-sm-3: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.06) 0px 15px 30px 0px;

  /* Surfaces */
  --surface-canvas: #f8f9fb;
  --surface-card: #ffffff;
  --surface-soft-fill: #e7edf6;
  --surface-action: #006bff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-midnight-navy: #0b3558;
  --color-signal-blue: #006bff;
  --color-slate-blue: #476788;
  --color-carbon: #0a0a0a;
  --color-paper: #ffffff;
  --color-mist: #f8f9fb;
  --color-fog: #e7edf6;
  --color-mist-border: #d4e0ed;
  --color-silver: #e6e6e6;
  --color-steel-blue: #a6bbd1;
  --color-info-blue: #004eba;
  --color-magenta-bloom: #e55cff;
  --color-ultraviolet: #8247f5;
  --color-amber-spark: #ffa600;
  --color-cyan-pop: #0099ff;

  /* Typography */
  --font-gilroy: 'Gilroy', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 12px;
  --leading-micro: 1.5;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body-sm: 16px;
  --leading-body-sm: 1.6;
  --text-body: 18px;
  --leading-body: 1.64;
  --text-body-lg: 20px;
  --leading-body-lg: 1.6;
  --text-subheading: 24px;
  --leading-subheading: 1.4;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.4;
  --text-heading: 38px;
  --leading-heading: 1.21;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.2;
  --text-display: 68px;
  --leading-display: 1.1;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 50px;

  /* Shadows */
  --shadow-sm: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 4px 10px 0px, rgba(71, 103, 136, 0.05) 0px 10px 20px 0px;
  --shadow-sm-2: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.08) 0px 30px 50px 0px;
  --shadow-sm-3: rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.06) 0px 15px 30px 0px;
}
```