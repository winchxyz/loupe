# Giga — Style Reference
> Literary dusk over mountain ridges — A serif headline floats over a cinematic photograph, with a single warm ember glow below.

**Theme:** mixed

Giga operates as a literary enterprise-AI brand: cinematic mountain photography as the primary visual, serif display type for emotional weight, and an almost monastic monochrome palette disrupted by a single warm orange-red accent. The interface alternates between full-bleed photographic light sections and near-black dark panels, creating a dawn-to-dusk rhythm that mirrors the hero image. Headlines use a humanist serif at light weight — anti-convention for an AI company, deliberately editorial rather than technical. Components are compact and pill-shaped: buttons, tags, and badges all share the 9999px radius, while cards settle into a soft 16px. Density is tight but not cramped, with 10px baseline gaps and generous section breathing room (48-64px). Color is rationed — white and near-black do 95% of the work, and the one vivid orange-red (#fe2c02) plus a single green status dot are the only chromatic interruptions.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Primary text, hairlines, icon strokes, borders on light surfaces — the dominant structural color |
| Paper | `#ffffff` | `--color-paper` | Page backgrounds, card surfaces, text on dark sections |
| Carbon | `#161717` | `--color-carbon` | Dark surface panels, filled button backgrounds — warm-tinted near-black, not pure black |
| Ember | `#fe2c02` | `--color-ember` | Primary accent — link/CTA emphasis, the one chromatic moment in the system, warm orange-red against the monochrome field |
| Sprout | `#49de80` | `--color-sprout` | Green outline accent for tags, dividers, and focused UI edges |
| Slate | `#8a8f98` | `--color-slate` | Muted helper text, secondary borders, disabled state strokes |
| Iron | `#202020` | `--color-iron` | Secondary text on light surfaces, dark-mode body text |
| Fog | `#b3b3b3` | `--color-fog` | Light borders, placeholder text, subtle dividers |
| Ash | `#969696` | `--color-ash` | Tertiary text, low-emphasis labels |
| Smoke | `#808080` | `--color-smoke` | Muted borders, low-priority separators |
| Stone | `#666666` | `--color-stone` | Tertiary text, metadata |
| Ink | `#050505` | `--color-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Dusk Fade | `linear-gradient(rgb(0, 0, 0) 0%, rgb(15, 14, 13) 8%)` | `--color-dusk-fade` | Hero overlay gradient endpoint — top-of-photo darkening for text legibility |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Emilio Light — Display and section headlines — the signature choice. A humanist serif at light weight used at 41-48px creates an editorial, literary voice that contrasts with the AI-tech convention of geometric sans-serif. Letter-spacing tightens to -0.03em at display sizes. Substitute: Cormorant Garamond Light or Libre Caslon Text Light for similar warmth without licensing the custom face. · `--font-emilio-light`
- **Substitute:** Cormorant Garamond
- **Weights:** 300, 400
- **Sizes:** 24px, 41px, 48px
- **Line height:** 1.20, 1.30
- **Letter spacing:** -0.0300em at 48px, -0.0200em at 41px
- **Role:** Display and section headlines — the signature choice. A humanist serif at light weight used at 41-48px creates an editorial, literary voice that contrasts with the AI-tech convention of geometric sans-serif. Letter-spacing tightens to -0.03em at display sizes. Substitute: Cormorant Garamond Light or Libre Caslon Text Light for similar warmth without licensing the custom face.

### Inter — Body text, UI labels, secondary headings, navigation. The workhorse — appears at every size from 8px micro-labels to 44px section headers. Weight 400 is the default, 500 for emphasis. · `--font-inter`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500
- **Sizes:** 8px, 9px, 10px, 11px, 12px, 13px, 14px, 16px, 29px, 44px
- **Line height:** 1.00, 1.36, 1.50, 1.54, 1.64, 1.70, 1.71, 1.75, 1.85, 1.93, 2.00, 2.22
- **Letter spacing:** -0.0300em, 0.0070em
- **Role:** Body text, UI labels, secondary headings, navigation. The workhorse — appears at every size from 8px micro-labels to 44px section headers. Weight 400 is the default, 500 for emphasis.

### Geist Mono — Code-adjacent labels, monospace badges, small-caps-style indicators. The slight positive tracking (0.009em) gives it a technical, label-like quality that contrasts with the serif headlines. · `--font-geist-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 500
- **Sizes:** 11px, 12px, 14px
- **Line height:** 1.20, 2.00, 2.18
- **Letter spacing:** 0.0090em
- **Role:** Code-adjacent labels, monospace badges, small-caps-style indicators. The slight positive tracking (0.009em) gives it a technical, label-like quality that contrasts with the serif headlines.

### Giga Sans Display — Custom display sans for sub-headings and card titles. The tight 0.86 line-height at 22px gives a dense, stacked feel. Substitute: Inter at equivalent weight and tracking since the Giga Sans faces are licensed. · `--font-giga-sans-display`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 22px
- **Line height:** 0.86, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** Custom display sans for sub-headings and card titles. The tight 0.86 line-height at 22px gives a dense, stacked feel. Substitute: Inter at equivalent weight and tracking since the Giga Sans faces are licensed.

### Giga Sans Text — Custom body sans — essentially an Inter variant. Used for link text and dense body content. Substitute: Inter at 14px/400. · `--font-giga-sans-text`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 14px
- **Line height:** 1.20
- **Letter spacing:** normal
- **Role:** Custom body sans — essentially an Inter variant. Used for link text and dense body content. Substitute: Inter at 14px/400.

### Inter Display — Optically-adjusted variant for body display sizes — slightly wider apertures than standard Inter. Substitute: standard Inter. · `--font-inter-display`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 16px
- **Line height:** 1.50, 1.51, 2.50
- **Letter spacing:** 0.0060em
- **Role:** Optically-adjusted variant for body display sizes — slightly wider apertures than standard Inter. Substitute: standard Inter.

### Giga Sans Display Trial 400 — Giga Sans Display Trial 400 — detected in extracted data but not described by AI · `--font-giga-sans-display-trial-400`
- **Weights:** 400
- **Sizes:** 30px
- **Line height:** 1.33, 1.5
- **Role:** Giga Sans Display Trial 400 — detected in extracted data but not described by AI

### Giga Sans Text Trial 400 — Giga Sans Text Trial 400 — detected in extracted data but not described by AI · `--font-giga-sans-text-trial-400`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.2
- **Role:** Giga Sans Text Trial 400 — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 2.18 | 0.1px | `--text-caption` |
| body | 14px | 1.71 | — | `--text-body` |
| subheading | 22px | 0.86 | — | `--text-subheading` |
| heading-sm | 30px | 1.33 | — | `--text-heading-sm` |
| heading | 41px | 1.3 | -0.82px | `--text-heading` |
| display | 48px | 1.2 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 50 | 50px | `--spacing-50` |
| 60 | 60px | `--spacing-60` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 16px |
| badges | 9999px |
| images | 3.85px |
| inputs | 6px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(247, 107, 21, 0.5) 0px 0px 4px 0px` | `--shadow-sm` |
| xl | `rgba(0, 0, 0, 0.7) 0px 12px 32px -16px, rgba(0, 0, 0, 0.7...` | `--shadow-xl` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 48-64px
- **Card padding:** 20px
- **Element gap:** 10px

## Components

### Pill CTA Button
**Role:** Primary call-to-action on light hero surfaces

White background, black text, 9999px border-radius (full pill), 9px vertical × 16px horizontal padding, 14px Inter weight 500. No border. Text is short — 2-3 words max. Examples: 'Talk to us', 'Explore Agent Canvas'. The pill shape is the button's defining trait — no rounded-rect buttons exist in this system.

### Pill Outline Button
**Role:** Secondary action on dark sections

Transparent or #161717 background, 1px border in #ffffff at 9999px radius, white text at 14px Inter 500. 8px vertical × 16px horizontal padding. Used for navigation items like 'Sign in' in the header.

### Feature Card
**Role:** Content card in feature grids and product sections

Dark surface (#161717) on dark sections, 16px border-radius, 20px internal padding. Icon at top in white or Sprout green at ~16px. Title in Inter 500 14-16px white. Body text in #8a8f98 at 12-14px. No shadow on the card itself — the surface color differentiation is the elevation.

### Agent Canvas Showcase Card
**Role:** Product feature card with embedded screenshot

White surface, 16px radius, contains a product screenshot/image with the actual app UI visible (mountain landscape, agent creation interface). Title 'Agent Canvas' in Inter 500, body in #969696. Ghost pill button at bottom-left for 'Explore' action.

### Status Badge
**Role:** Notification or news indicator

Full pill (9999px radius), semi-transparent dark background, uppercase Geist Mono 11px text. Often paired with a 6px Sprout green dot (#49de80) prefix. Examples: 'GIGA LAUNCHES BROKER AGENT'. Padding: 5px vertical, 10px horizontal.

### Top Navigation Bar
**Role:** Global site header

Transparent over hero image, ~64px height. Logo left (Giga wordmark + small icon), nav items center-left ('Product', 'Company' with dropdown indicators), 'Sign in' text link + pill CTA far right. No background fill — sits directly on the photograph.

### Dark Statistics Panel
**Role:** Inline data/metrics display

Full-width #161717 band. Label in uppercase Geist Mono 10-11px #8a8f98. Metric value in large Inter 300 at 29-44px, white. Minimal padding — relies on the dark band itself to create visual containment.

### Trust Logo Strip
**Role:** Social proof row below hero

Full-width row on dark or transparent background. 5-6 partner logos in white/light gray at uniform ~16-20px height, evenly spaced with large gaps (60-80px). Logos are monochrome wordmarks — no color logos.

### Feature Column Item
**Role:** Three-column feature list

Vertical stack: icon (16px, white) → title (Inter 500 14px white) → description (12-14px #8a8f98). 3px gap between icon and title, 6px between title and body. Minimal — no card chrome, just typography on the dark surface.

### Section Label Tag
**Role:** Eyebrow text above section headings

Small uppercase label (e.g., 'CUSTOM AGENTS') in Geist Mono or Inter 10-12px, #8a8f98 or Sprout green. Often prefixed with a small colored dot. Sits 12-16px above the section heading.

## Do's and Don'ts

### Do
- Use 9999px border-radius for all buttons, badges, and tags — pill shape is non-negotiable
- Use Emilio Light (or Cormorant Garamond substitute) at weight 300 for display headlines at 41-48px with -0.03em letter-spacing
- Use the warm #161717 (Carbon) for dark surfaces, never pure #000000 — the warm tint is intentional
- Reserve #fe2c02 (Ember) for a single accent moment per viewport — link emphasis or one CTA, never multiple
- Pair a Sprout green (#49de80) 6px dot with uppercase Geist Mono status badges
- Maintain 10px baseline element gap and 48-64px section gap for the compact-but-breathing rhythm
- Use 16px radius for cards, 6px for inputs, 3.85px for inline images — never round-rect buttons

### Don't
- Don't use geometric sans-serif (Inter/SF) for display headlines — the serif at light weight IS the brand
- Don't apply #fe2c02 to backgrounds larger than a link or single button — it loses impact at scale
- Don't use pure #000000 for dark surfaces — the warm #161717 prevents the UI from feeling clinical
- Don't create rounded-rect (4-8px) buttons — every interactive element is a pill or a text link
- Don't stack more than one full-color photograph in a single viewport — the dusk image owns the hero
- Don't add drop shadows to cards on the dark surface — surface color differentiation is the elevation system
- Don't use letter-spacing wider than 0.01em on body text — tracking is tight across the system

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Photographic Canvas | `#000000` | Full-bleed mountain/dusk photograph with dark gradient overlay — the base layer of the hero |
| 1 | Dark Panel | `#161717` | Content sections, statistics, feature grids — the dominant dark surface below the hero |
| 2 | Card Surface | `#ffffff` | Product showcase cards (Agent Canvas) that sit on the dark panel, creating contrast |

## Elevation

- **Floating card with glow:** `rgba(0, 0, 0, 0.7) 0px 12px 32px -16px, rgba(0, 0, 0, 0.7) 0px 12px 60px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px`
- **Ember glow accent:** `rgba(247, 107, 21, 0.5) 0px 0px 4px 0px`

## Imagery

Full-bleed cinematic landscape photography dominates — mountain ridges at dusk with layered atmospheric haze. The photograph is the hero, not a background; it occupies 100% viewport height with text floating over it via a subtle dark gradient overlay at the top. Imagery is high-quality, naturalistic, and serves an emotional/mood function rather than product illustration. No product screenshots, no illustrations, no abstract graphics. The only non-photographic visual elements are monochrome partner logos in the trust strip and small UI icons in feature columns. Photography treatment: high-resolution, no duotone, no heavy filters — the natural blue-to-warm gradient of dusk is the brand's color story.

## Layout

Full-bleed hero with centered text over photograph, max-width 1200px content from the nav down. The page alternates: photographic light section → dark statistics band → dark feature sections with white product cards. Navigation is a single transparent bar with no background. Content below the hero uses a centered single-column for headlines followed by 3-column feature grids and left-aligned product showcase cards. Section gaps are generous (48-64px) creating breathing room between compact inner content. The overall rhythm is: cinematic opening → dense dark content blocks → expansive product showcases.

## Agent Prompt Guide

## Quick Color Reference
- Text: #000000 (light surfaces), #ffffff (dark surfaces)
- Background: #ffffff (light), #161717 (dark panels), #000000 (photographic hero)
- Border: #000000 (hairlines), #8a8f98 (muted), #ffffff (on dark)
- Accent: #fe2c02 (Ember — single-use warm red)
- Status: #49de80 (Sprout green for live dots)
- primary action: #161717 (filled action)

## 3-5 Example Component Prompts

1. Create a Primary Action Button: #161717 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. **Dark Feature Section**: Background #161717, full-width. Section eyebrow 'CUSTOM AGENTS' in Inter 10px uppercase, #8a8f98, with 6px #fe2c02 dot prefix. Section heading 'Built to handle complexity' in Emilio Light 41px weight 300, #ffffff, letter-spacing -0.82px. Three-column feature grid below at 10px column gap: icon (16px white) → title (Inter 500 14px white) → body (Inter 14px #8a8f98).

3. **Product Showcase Card**: White surface (#ffffff), 16px border-radius, 20px padding. Contains a product screenshot with 3.85px image radius. Title 'Agent Canvas' in Inter 500 16px #000000. Body in Inter 14px #969696. Ghost pill button bottom-left: transparent background, 1px #000000 border at 9999px radius, 8px×16px padding, Inter 14px weight 500 #000000.

4. **Statistics Band**: Full-width #161717 background. Two metrics side by side with large gap. Label 'DEFLECTION RATE' in Geist Mono 10px uppercase #8a8f98. Value '7%' in Inter 300 at 44px, #ffffff.

5. **Trust Logo Strip**: Transparent or dark background. Five monochrome white logos at 16-20px height, evenly spaced with 60-80px gaps. No captions, no borders — logos sit on the existing surface.

## Gradient System

Gradients are used sparingly and only for atmospheric purposes:
- **Hero overlay**: linear-gradient(rgb(0,0,0) 0%, rgb(15,14,13) 8%) — a near-invisible dark fade at the very top of the photograph to anchor the nav
- **Section transitions**: linear-gradient(rgb(0,0,0) 15%, rgb(249,249,249) 90%) — used between the photographic hero and the first content section
- **Color-tinted washes**: pink (#ff9aea), green (#c3eaca), and blue (#88bbf5) gradients fading to white — decorative accents in feature sections, each at 0-30% width
Never use gradients on buttons, cards, or interactive elements. Gradients are purely atmospheric.

## Similar Brands

- **Linear** — Same pill-button + monochrome palette approach, though Linear is fully dark; Giga borrows the pill geometry and single-accent discipline
- **Vercel** — Shared compact density, minimal color rationing, and full-bleed dark hero photography; both use Geist family for labels
- **Anthropic** — Similar enterprise-AI positioning with warm-tinted dark surfaces and cinematic photography; both ration color aggressively
- **Stripe** — Same trust-strip pattern below hero and editorial headline treatment; Giga takes Stripe's literary confidence further with a serif display face
- **Arc Browser** — Shared full-bleed photographic hero with floating text and a single warm accent color punctuating an otherwise neutral interface

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-carbon: #161717;
  --color-ember: #fe2c02;
  --color-sprout: #49de80;
  --color-slate: #8a8f98;
  --color-iron: #202020;
  --color-fog: #b3b3b3;
  --color-ash: #969696;
  --color-smoke: #808080;
  --color-stone: #666666;
  --color-ink: #050505;
  --color-dusk-fade: #0f0e0d;
  --gradient-dusk-fade: linear-gradient(rgb(0, 0, 0) 0%, rgb(15, 14, 13) 8%);

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-emilio-light: 'Emilio Light', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-giga-sans-display: 'Giga Sans Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-text: 'Giga Sans Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-display: 'Inter Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-display-trial-400: 'Giga Sans Display Trial 400', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-text-trial-400: 'Giga Sans Text Trial 400', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 2.18;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-subheading: 22px;
  --leading-subheading: 0.86;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.33;
  --text-heading: 41px;
  --leading-heading: 1.3;
  --tracking-heading: -0.82px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -1.44px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 48-64px;
  --card-padding: 20px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-md: 3.85px;
  --radius-md-2: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 1000px;
  --radius-full-2: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-badges: 9999px;
  --radius-images: 3.85px;
  --radius-inputs: 6px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-sm: rgba(247, 107, 21, 0.5) 0px 0px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.7) 0px 12px 32px -16px, rgba(0, 0, 0, 0.7) 0px 12px 60px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-photographic-canvas: #000000;
  --surface-dark-panel: #161717;
  --surface-card-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-carbon: #161717;
  --color-ember: #fe2c02;
  --color-sprout: #49de80;
  --color-slate: #8a8f98;
  --color-iron: #202020;
  --color-fog: #b3b3b3;
  --color-ash: #969696;
  --color-smoke: #808080;
  --color-stone: #666666;
  --color-ink: #050505;
  --color-dusk-fade: #0f0e0d;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-emilio-light: 'Emilio Light', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-giga-sans-display: 'Giga Sans Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-text: 'Giga Sans Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter-display: 'Inter Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-display-trial-400: 'Giga Sans Display Trial 400', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-giga-sans-text-trial-400: 'Giga Sans Text Trial 400', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 2.18;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-subheading: 22px;
  --leading-subheading: 0.86;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.33;
  --text-heading: 41px;
  --leading-heading: 1.3;
  --tracking-heading: -0.82px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -1.44px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-md: 3.85px;
  --radius-md-2: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-full: 1000px;
  --radius-full-2: 9999px;

  /* Shadows */
  --shadow-sm: rgba(247, 107, 21, 0.5) 0px 0px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.7) 0px 12px 32px -16px, rgba(0, 0, 0, 0.7) 0px 12px 60px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
}
```