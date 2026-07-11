# LottieFiles — Style Reference
> playful animation studio on warm paper

**Theme:** light

LottieFiles is a warm, light-mode design system that treats motion as the product and the rest of the UI as a calm stage for it. A near-white canvas with a faint warm cast (f4f4f5 with cream accents like fff8e5) supports generous breathing room, soft 16-24px radii, and almost no shadow. One vivid teal (019d91) carries the only chromatic weight in the chrome — buttons, tags, logo mark — while the rest of the palette stays in a tight zinc-900 / zinc-100 / zinc-200 grayscale. DM Sans speaks loudly in the heroes with very tight tracking and a near-1.0 line-height at 64-96px; Inter handles everything below 32px with quiet -0.01em tracking. Color appears in content, not chrome: bright pastel mascot characters, colored customer logos, and saturated feature icons, so the UI shell can stay quietly neutral and let user work feel like the loudest thing on screen.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Brand Teal | `#019d91` | `--color-brand-teal` | Teal supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Mint Glow | `#61f7cf` | `--color-mint-glow` | Decorative illustration accent, gradient highlights behind hero characters, animated UI flourishes |
| Mint Wash | `#b7ffe7` | `--color-mint-wash` | Teal supporting accent for decorative details and low-frequency emphasis. |
| Cream Paper | `#fff8e5` | `--color-cream-paper` | Warm accent surface for announcement banners, highlight cards, and editorial callouts — breaks the cool grayscale rhythm |
| Leaf Soft | `#94d19f` | `--color-leaf-soft` | Green supporting accent for decorative details and low-frequency emphasis |
| Midnight Ink | `#09090b` | `--color-midnight-ink` | Primary body and heading text, logo wordmark, icon strokes — near-black with a barely-warm tint |
| Zinc 900 | `#18181b` | `--color-zinc-900` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Zinc 600 | `#27272a` | `--color-zinc-600` | Secondary dark surface, hover states on dark elements, strong borders |
| Zinc 500 | `#71717b` | `--color-zinc-500` | Secondary body text, icon fills, muted captions, inactive nav labels |
| Fog Gray | `#9f9fa9` | `--color-fog-gray` | Tertiary text, placeholder copy, disabled labels, lowest-emphasis helper text |
| Mist | `#e4e4e7` | `--color-mist` | Hairline borders, dividers, card outlines, input borders, section separators — the structural line of the system |
| Pearl | `#f4f4f5` | `--color-pearl` | Page canvas, hero backgrounds, band backgrounds, hover surfaces |
| Snow | `#fafafa` | `--color-snow` | Elevated card surfaces, subtle alternating rows, near-white backgrounds for content blocks |
| White | `#ffffff` | `--color-white` | Card surfaces, modal backgrounds, input fills, nav bar background — the top of the surface stack |

## Tokens — Typography

### DM Sans — Display and heading family. Owns all hero headlines (64–96px, weight 600), section titles (48px), and mid-size headings (24–32px). The signature choice is the aggressive negative tracking at display sizes (-0.05em at 96px, -0.04em at 64px) combined with near-1.0 line-heights — characters lock together into one confident shape, no orphan whitespace. · `--font-dm-sans`
- **Substitute:** Plus Jakarta Sans, Manrope
- **Weights:** 400, 500, 600
- **Sizes:** 14, 16, 18, 20, 24, 32, 48, 64, 96
- **Line height:** 1.04–1.56 (tightest at 64–96px, 1.04–1.16)
- **Letter spacing:** -0.05em at 96px, -0.04em at 64px, -0.03em at 48px, -0.01em at 32px and below
- **Role:** Display and heading family. Owns all hero headlines (64–96px, weight 600), section titles (48px), and mid-size headings (24–32px). The signature choice is the aggressive negative tracking at display sizes (-0.05em at 96px, -0.04em at 64px) combined with near-1.0 line-heights — characters lock together into one confident shape, no orphan whitespace.

### Inter — UI and body family. Handles all body copy (16/18px), nav and button labels (14/16px), captions (12px), micro-labels (10px), and small headings up to 24–32px. Flat -0.01em tracking across the scale, generous 1.43–1.71 line-heights for readability. Inter does the quiet, utilitarian work so DM Sans can speak loudly. · `--font-inter`
- **Substitute:** system-ui, -apple-system, Segoe UI
- **Weights:** 400, 500, 600
- **Sizes:** 10, 12, 14, 16, 18, 24, 32
- **Line height:** 1.10–1.71
- **Letter spacing:** -0.0100em
- **Role:** UI and body family. Handles all body copy (16/18px), nav and button labels (14/16px), captions (12px), micro-labels (10px), and small headings up to 24–32px. Flat -0.01em tracking across the scale, generous 1.43–1.71 line-heights for readability. Inter does the quiet, utilitarian work so DM Sans can speak loudly.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.12px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.14px | `--text-body-sm` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 20px | 1.4 | -0.2px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.32px | `--text-heading` |
| heading-lg | 48px | 1.16 | -1.44px | `--text-heading-lg` |
| display | 64px | 1.12 | -2.56px | `--text-display` |

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
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| tags | 9999px |
| cards | 24px |
| images | 12px |
| buttons | 16px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Top Navigation Bar
**Role:** Primary site navigation

White (#ffffff) background, 64px tall, 1px bottom border in #e4e4e7. Logo on the left (teal wordmark + icon), nav links centered (Inter 14px, weight 500, #09090b), search field + language selector + ghost Login + filled teal Sign up button on the right. Sticky on scroll with the same hairline shadow as the elevation token.

### Filled Teal Button
**Role:** Primary brand button

Background #019d91, text #ffffff, Inter 14px weight 500, padding 10px 20px, border-radius 16px. No border, no shadow at rest. Hover: brightness +4%. Used for 'Get started for free', 'Sign up', 'Explore case studies'. The system's only saturated button fill — use sparingly so it keeps its signal value.

### Ghost Navigation Button
**Role:** Secondary nav action

Transparent background, text #09090b, Inter 14px weight 500, no border, no radius, padding 8px 12px. Hover: background #f4f4f5. Used for 'Login' and 'Log in' links. The neutral companion to the filled teal button — same weight class, different posture.

### Announcement Banner
**Role:** Promotional strip below nav

White background with 1px #e4e4e7 border, 16px radius, 16-20px padding. Left: small illustration tile (120px wide, 12px radius). Center: title in Inter 14px weight 600 #09090b, body in Inter 12px #71717b. Right: teal text link 'Learn more.' and close icon. Floats as a single rounded module on the canvas, not a full-width bar.

### Hero Section
**Role:** First-screen brand statement

Pearl #f4f4f5 background, 64px+ vertical padding, two-column on desktop (60/40 split). Left: DM Sans 64–96px weight 600 headline at -2.56 to -4.8px tracking, line-height 1.12, color #09090b, max 3 lines. Body in Inter 18px #71717b below, max 380px width. Filled teal button under body. Right: full-color mascot illustration with no container, characters bleed toward the edge.

### Feature Row Card
**Role:** Four-up feature strip below hero

No card chrome — flat row on Pearl background. Each item: 48px colored square icon container (rounded 12px, saturated fill: yellow #ffbf00, pink #ff6b9d, teal #019d91, blue #3b82f6), title in Inter 16px weight 600 #09090b, description in Inter 14px #71717b. 32px gap between icon and text, 24px gap between items.

### Social Proof Logo Bar
**Role:** Trust signal with brand logos

Centered heading 'Trusted by 16 million+ designers…' in Inter 14px #71717b, then a single horizontal row of grayscale brand logos (Google, Disney, Nike, Uber, Spotify, Netflix, Microsoft, Airbnb, Amazon, TikTok). Logos rendered in #71717b or #09090b at uniform 28–32px height, 48–64px gap between, no logos are colored. The row is the loudest typographic moment after the hero.

### Customer Showcase Card
**Role:** Large preview tile for case study

Full-bleed background image or screenshot, 24px radius, aspect ~4:5 or 1:1. Bottom: brand logo and small caption in white. Padding 24px. Cards are 4-up on desktop, horizontally scrollable on mobile with peek of the next card. No border, no shadow — the image fills edge-to-edge inside the radius.

### Testimonial Card
**Role:** Quote card with author

White #ffffff background, 1px #e4e4e7 border, 24px radius, padding 32px. Top: author avatar (48px circle) + name in Inter 14px weight 600 + role/company in Inter 12px #71717b. Quote in Inter 18px #09090b, line-height 1.5. Brand logo at bottom-left in grayscale. Cards have a 4-up horizontal scroll with partial peek of the next card.

### Search Field
**Role:** Global animation search

White background, 1px #e4e4e7 border, 8px radius, height 36px, padding 0 12px 0 36px. Search icon on the left in #71717b. Placeholder 'Search animations' in Inter 14px #9f9fa9. Keyboard shortcut pill '⌘ K' on the right in #f4f4f5 background, Inter 12px #71717b, 4px radius. Focus: 2px #019d91 ring with 2px offset.

### Icon Badge Tile
**Role:** Small colored icon container

48px square, 12px radius, solid saturated fill (yellow, pink, teal, blue from a 4-color feature palette). Icon inside in white at 24px. Used in feature rows and category nav. The only place where multiple saturated colors appear systematically in the UI shell.

## Do's and Don'ts

### Do
- Use DM Sans at 64–96px weight 600 with -0.04 to -0.05em tracking for every page-level headline — the tight lockup is the brand's voice.
- Reserve #019d91 for the single most important action on each screen; never run two filled teal buttons side by side.
- Use 16px radius for buttons and tags, 24px for cards, 12px for images, 8px for nav controls — the four-tier radius scale is the structural rhythm.
- Default cards to a 1px #e4e4e7 border on a #ffffff surface over a #f4f4f5 canvas. Borders separate, shadows do not.
- Let Inter carry everything below 32px; never use DM Sans for body copy or button labels.
- Place mascots and illustrations full-color and full-bleed against the neutral shell — the UI should recede so the artwork leads.
- Use 64px section gaps and 24px card padding as the default; tighten to 32px/16px only for dense utility screens.

### Don't
- Do not add drop shadows beyond the 1px hairline token; the system reads as flat by design.
- Do not introduce a second saturated accent color into the chrome — teal is the only chromatic voice in UI controls.
- Do not use DM Sans for body, captions, or button labels; the contrast between DM Sans display and Inter body is the hierarchy.
- Do not set text below 4.5:1 contrast — use #09090b on #ffffff/#fafafa/#f4f4f5/#fff8e5 surfaces for primary copy.
- Do not round cards beyond 24px or use sharp 0px corners on large surfaces; the system is soft but not bubbly.
- Do not place colored buttons on cream #fff8e5 backgrounds where the teal loses contrast — teal needs a white or pearl field.
- Do not stack more than three type sizes within a single component; the scale is already wide, restraint is the point.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#f4f4f5` | Page background and section bands |
| 2 | Snow | `#fafafa` | Subtle alternation inside bands |
| 3 | White | `#ffffff` | Cards, modals, inputs, nav bar |
| 4 | Dark | `#18181b` | Inverted surfaces, dark feature cards, dark CTA variants |

## Elevation

- **Button, dropdown, sticky elements:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Imagery

Illustration-forward. The signature visual is the 'Lottie Spirits' — a cast of full-color, rounded mascot characters in saturated pastels (teal, pink, orange, yellow, purple) with stick limbs and simple kawaii faces. They appear in the hero as a group, peeking around the headline, and recur in illustrations, empty states, and category pages. Photography is minimal and reserved for customer case studies, where phone screenshots and product captures sit inside rounded tiles. No abstract gradients, no 3D renders. Icons are filled, single-color, and live inside colored square badges rather than floating alone. The imagery rule: color belongs to the characters and the user, not to the chrome.

## Layout

Centered, max-width ~1200px content column on a full-bleed #f4f4f5 canvas. The hero is a two-column split (text-left / mascot-right at ~60/40) with generous 80–96px vertical padding. Below the hero, sections alternate between Pearl and White backgrounds in seamless bands, each with 64px top/bottom padding and the content column re-centered. Feature blocks use a 4-column grid, testimonials and customer showcases use a 4-up horizontal carousel with peek, and the social proof bar is a single centered row of grayscale logos. Navigation is a sticky top bar, not a sidebar. The page breathes — sections are separated by whitespace, never by dividers or alternating dark bands.

## Agent Prompt Guide

## Quick Color Reference
- text: #09090b (primary), #71717b (secondary), #9f9fa9 (tertiary)
- background: #f4f4f5 (canvas), #ffffff (card), #fafafa (alt), #18181b (dark surface)
- border: #e4e4e7 (hairline)
- accent: #019d91 (brand teal — filled buttons, logo, active states)
- warm accent: #fff8e5 (cream banner surface), #61f7cf (mint illustration), #b7ffe7 (mint wash)
- primary action: no distinct CTA color

## Example Component Prompts

1. **Hero block on Pearl canvas**: Background #f4f4f5. Headline 'Great designs come alive with motion!' in DM Sans 64px weight 600, color #09090b, letter-spacing -2.56px, line-height 1.12. Subtext in Inter 18px weight 400, color #71717b, max-width 380px. Filled teal button: background #019d91, text #ffffff, Inter 14px weight 500, 16px radius, padding 10px 20px, label 'Get started for free'. Right side: full-color mascot illustration, no container, characters bleed toward the right edge.

2. **Testimonial card (4-up carousel)**: Background #ffffff, 1px border #e4e4e7, 24px radius, padding 32px. Avatar 48px circle top-left. Name in Inter 14px weight 600 #09090b, role in Inter 12px #71717b. Quote in Inter 18px #09090b, line-height 1.5, max 4 lines. Grayscale brand logo bottom-left at 20px height. 24px gap between cards in the row.

3. **Ghost nav button (Login)**: Transparent background, text 'Login' in Inter 14px weight 500, color #09090b, no border, no radius, padding 8px 12px. Hover: background #f4f4f5. Pair directly left of a filled teal button in the nav bar.

4. **Filled teal nav button (Sign up)**: Background #019d91, text 'Sign up' in Inter 14px weight 500, color #ffffff, no border, 8px radius (nav variant — tighter than the 16px hero button), padding 8px 16px. This is the only saturated fill in the chrome.

5. **Feature row item (4-up)**: 48px colored icon container, 12px radius, solid fill from the 4-color feature palette (#ffbf00 / #ff6b9d / #019d91 / #3b82f6), white 24px icon centered. Title in Inter 16px weight 600 #09090b, 8px gap. Description in Inter 14px #71717b, max 2 lines.

## Similar Brands

- **Figma** — Same clean light canvas, generous whitespace, single saturated accent in the chrome, rounded 16–24px components, and 4-up feature strips
- **Notion** — Warm near-white surfaces, hairline borders instead of shadows, Inter for UI, and a calm shell that lets user content and illustrations carry the color
- **Vercel** — Tight typographic lockups on hero headlines, near-flat elevation, and a single brand accent reserved for the most important action
- **Linear** — Restrained grayscale UI, bold display headlines, generous breathing room, and the discipline of one accent color
- **Framer** — Illustration-led marketing surfaces with full-color characters, soft radii, and a quiet neutral shell

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-brand-teal: #019d91;
  --color-mint-glow: #61f7cf;
  --color-mint-wash: #b7ffe7;
  --color-cream-paper: #fff8e5;
  --color-leaf-soft: #94d19f;
  --color-midnight-ink: #09090b;
  --color-zinc-900: #18181b;
  --color-zinc-600: #27272a;
  --color-zinc-500: #71717b;
  --color-fog-gray: #9f9fa9;
  --color-mist: #e4e4e7;
  --color-pearl: #f4f4f5;
  --color-snow: #fafafa;
  --color-white: #ffffff;

  /* Typography — Font Families */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.32px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -1.44px;
  --text-display: 64px;
  --leading-display: 1.12;
  --tracking-display: -2.56px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 48px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-images: 12px;
  --radius-buttons: 16px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-canvas: #f4f4f5;
  --surface-snow: #fafafa;
  --surface-white: #ffffff;
  --surface-dark: #18181b;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-brand-teal: #019d91;
  --color-mint-glow: #61f7cf;
  --color-mint-wash: #b7ffe7;
  --color-cream-paper: #fff8e5;
  --color-leaf-soft: #94d19f;
  --color-midnight-ink: #09090b;
  --color-zinc-900: #18181b;
  --color-zinc-600: #27272a;
  --color-zinc-500: #71717b;
  --color-fog-gray: #9f9fa9;
  --color-mist: #e4e4e7;
  --color-pearl: #f4f4f5;
  --color-snow: #fafafa;
  --color-white: #ffffff;

  /* Typography */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.32px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -1.44px;
  --text-display: 64px;
  --leading-display: 1.12;
  --tracking-display: -2.56px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 48px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
```