# Sequel — Style Reference
> blackbox gallery, lit by cinema

**Theme:** dark

Sequel operates as a cinematic dark-stage design system — a black canvas where content is lit like film subjects. The palette is 100% achromatic: pure black grounds every screen, warm off-white (#f5f5f0) acts as the rare contrast material, and white serves as the only signal color. Typography is editorial and oversized: a serif display face (Bradford) at 58–128px carries authority through weight rather than volume, while a geometric sans (VisueltPro) handles UI, body, and meta at whisper-light 300 weight. Components are deliberately few and generous: full-bleed imagery in 10px-rounded cards, pill-shaped controls at 9999px radius, and tight letter-spacing that compresses large headlines into sculptural forms. The whole system reads as a gallery, not a dashboard — content earns space, UI stays invisible.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Page canvas, image backgrounds, text inversion panels |
| Carbon | `#202020` | `--color-carbon` | Elevated surface layer, card backgrounds, modals |
| Graphite | `#333333` | `--color-graphite` | Hairline borders, divider rules, badge outlines, subtle surface dividers |
| Bone | `#c0c0c0` | `--color-bone` | Mid-neutral text, secondary metadata, icon strokes on dark |
| Smoke | `#999999` | `--color-smoke` | Muted helper text, de-emphasized labels, disabled state |
| Ash | `#b3b3b3` | `--color-ash` | Tertiary body text, captions over imagery |
| Fog | `#cccccc` | `--color-fog` | Quaternary text, subtle dividers on light sections |
| Chalk | `#ffffff` | `--color-chalk` | Primary headlines, body text, icon fills, pill button surface and text |
| Linen | `#f5f5f0` | `--color-linen` | Warm off-white contrast surface — inverted panels, cream text on dark, button hover fill. Sits between pure white and black as the system's only warm neutral |

## Tokens — Typography

### VisueltPro — Primary UI and body face — navigation, buttons, body copy, meta, badges, lists. Weight 300 for body creates the system's anti-emphasis: text whispers rather than asserts. Weight 500 reserved for nav and button labels where legibility at small sizes matters. · `--font-visueltpro`
- **Substitute:** Inter, Söhne, Neue Haas Grotesk
- **Weights:** 300, 400, 500
- **Sizes:** 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 30, 32
- **Line height:** 1.20, 1.40, 1.50
- **Letter spacing:** -0.020em to -0.050em at display, -0.020em at body, +0.030em to +0.080em for uppercase meta and badges
- **Role:** Primary UI and body face — navigation, buttons, body copy, meta, badges, lists. Weight 300 for body creates the system's anti-emphasis: text whispers rather than asserts. Weight 500 reserved for nav and button labels where legibility at small sizes matters.

### Bradford — Editorial display serif for hero and section headlines. Carries brand authority through typographic rarity — a serif in a sea of dark sans-serif SaaS. Single weight 500 with tight tracking at -0.025em to -0.050em compresses letterforms into sculptural blocks. Use at 58px+ only; below that the system falls back to VisueltPro. · `--font-bradford`
- **Substitute:** Tiempos Headline, Canela, GT Sectra
- **Weights:** 500
- **Sizes:** 32, 58, 128
- **Line height:** 1.00, 1.20
- **Letter spacing:** -0.0500em, -0.0250em
- **Role:** Editorial display serif for hero and section headlines. Carries brand authority through typographic rarity — a serif in a sea of dark sans-serif SaaS. Single weight 500 with tight tracking at -0.025em to -0.050em compresses letterforms into sculptural blocks. Use at 58px+ only; below that the system falls back to VisueltPro.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.36px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.28px | `--text-body-sm` |
| body | 18px | 1.4 | -0.36px | `--text-body` |
| subheading | 22px | 1.4 | -0.44px | `--text-subheading` |
| heading | 32px | 1.2 | -1.6px | `--text-heading` |
| heading-lg | 58px | 1.2 | -2.9px | `--text-heading-lg` |
| display | 128px | 1 | -6.4px | `--text-display` |

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
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 10px |
| badges | 9999px |
| images | 10px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.35) 0px 10px 30px 0px, rgba(255, 255, 255...` | `--shadow-xl` |
| lg | `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px` | `--shadow-lg` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 96px
- **Card padding:** 19px
- **Element gap:** 16px

## Components

### Pill Primary Button
**Role:** Top-level call to action (e.g. 'Build the future')

White fill #ffffff, black text #000000, border-radius 9999px, padding 16px 24px, VisueltPro 500 at 15px with -0.30px tracking. Drop shadow rgba(0,0,0,0.15) 0 4px 20px. No border. Text label includes trailing arrow glyph for directional affordance.

### Pill Ghost Button
**Role:** Secondary action on dark canvas

Transparent fill, 1px border #ffffff at 50% opacity, border-radius 9999px, padding 16px 24px, VisueltPro 500 at 15px in #ffffff. No shadow. Used where the primary button is already present and a quieter alternative is needed.

### Pill Inverted Button
**Role:** Action on light or warm surface

Linen #f5f5f0 fill, black text, 9999px radius, 16px 24px padding. Functions as the warm-surface counterpart to the Pill Primary Button.

### Editorial Image Card
**Role:** Large content card for features, categories, or portfolio entries

Full-bleed photograph fills the card, 10px border-radius, no border, no internal padding around the image. Headline and meta overlay the bottom of the image in white. Multi-layer shadow: rgba(0,0,0,0.35) 0 10px 30px outer + rgba(255,255,255,0.08) 0 1px 0 inset top edge to catch light.

### Pill Category Badge
**Role:** Taxonomy tag floating over image cards

Surface rgba(255,255,255,0.08) with inset white highlight rgba(255,255,255,0.08) 0 1px 0 inset, text VisueltPro 500 at 10–11px in white, uppercase, letter-spacing +0.08em, border-radius 9999px, padding 5px 11px. Sits top-right or top-left of an Editorial Image Card.

### Centered Headline Block
**Role:** Section opener for marketing pages

Single line or two-line headline in Bradford 500 at 58–128px, color #ffffff, letter-spacing -2.9px to -6.4px, line-height 1.0–1.2, text-align center. Followed by no subtitle in many cases — the line stands alone against the void.

### Sticky Top Navigation
**Role:** Global site navigation

Transparent on #000000 canvas, no visible background fill. Logo 'sequel' lowercase + three vertical bars mark in white at left, Pill Ghost or text button at right. Height ~64px, no border-bottom, content padded 20px horizontal.

### Body Text Block
**Role:** Supporting paragraph copy under headlines or in cards

VisueltPro 300 at 15–18px, line-height 1.5, color #c0c0c0 for secondary or #999999 for tertiary. Never uses weight above 400 for body — the system reserves visual weight for headlines and buttons.

### Full-bleed Hero Image
**Role:** Atmospheric opening visual

Edge-to-edge photograph or cinematic still at 16:9 or 21:9, no border-radius, no border. Dark scenes with a single warm light source — the page's signature is a glowing subject in a void. Optional text overlay or headline positioned bottom-left or centered.

### Two-column Feature Pair
**Role:** Side-by-side content blocks (e.g. Founders / Athletes cards)

Two Editorial Image Cards in a 1:1 grid, separated by 16–24px horizontal gap. Cards share equal height, text inside each card aligns bottom-left, badges align top-right of each card.

### Logo Lockup
**Role:** Brand mark in nav and footer

Wordmark 'sequel' in VisueltPro 400 at ~20px, lowercase, #ffffff, followed by three thin vertical bars of equal height in white — acts as a stylized 'III' or progress indicator. No icon, no symbol, no color.

### Inverted Light Panel
**Role:** Section that breaks the dark rhythm with warm contrast

Full-width band with #f5f5f0 background, black #000000 text, 10px corner radius only if contained (usually full-bleed). Headlines in Bradford or VisueltPro dark, buttons in dark-on-linen style. Use sparingly — one per page maximum to preserve impact.

## Do's and Don'ts

### Do
- Use Bradford at 58px or larger for editorial headlines; fall back to VisueltPro 500 at 30–54px for sub-headlines.
- Set all buttons to 9999px radius with 16px vertical / 24px horizontal padding.
- Reserve #f5f5f0 (Linen) for inverted sections and contrast panels — never mix it into a dark card.
- Use VisueltPro weight 300 for all body and supporting copy; reserve 500 exclusively for nav, buttons, and badges.
- Apply letter-spacing between -0.020em and -0.050em on all display and body text; widen to +0.030em to +0.080em only on uppercase badges and meta.
- Make Editorial Image Cards full-bleed with 10px radius and the multi-layer shadow (outer dark drop + inset top white highlight).
- Keep the system 100% achromatic — white, grays, black, and the single warm off-white. No chromatic accents.

### Don't
- Do not introduce any hue — no blues, greens, reds, or purples. The 0% colorfulness is the brand.
- Do not use border-radius between 1px and 9px on cards, or between 1px and 9998px on buttons. The radii are binary: 10px for cards, 9999px for pills.
- Do not use VisueltPro weight 400 for body copy — weight 300 is the system's anti-volume signature. Weight 400 is reserved for the logo lockup.
- Do not place headline text on a light background without switching to #000000 — the system inverts cleanly, never tints.
- Do not add drop shadows to text, navigation, or static content. Shadows are reserved for image cards and floating buttons only.
- Do not use color borders or colored icon fills — all strokes are white, black, or grayscale.
- Do not break the 1280px max-width with full-bleed decorative gradients or color bands — the canvas must stay at #000000.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Void | `#000000` | Base page canvas — every section defaults here |
| 2 | Carbon | `#202020` | Raised cards, modals, image overlay scrims |
| 3 | Graphite | `#333333` | Border-defined surfaces, badge outlines, subtle elevation via border rather than shadow |
| 4 | Linen | `#f5f5f0` | Inverted warm panel — the system's contrast surface for callouts and inverted buttons |

## Elevation

- **Card with image:** `rgba(0, 0, 0, 0.35) 0px 10px 30px 0px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset`
- **Floating action button:** `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px`

## Imagery

Photography is the primary visual language and it is consistently cinematic: dark, moody, high-contrast scenes with a single warm light source acting as the focal point. Subjects are framed tight — a face lit by window light, a glass-walled room glowing in a void, a studio with a single lamp. No lifestyle, no stock, no staged corporate imagery. Color treatment is always desaturated or near-monochrome, reinforcing the achromatic UI. Images are presented full-bleed at 10px corner radius, and often carry a single line of headline text directly overlaid on the photograph. Icons are not a major element; the wordmark and a three-bar mark handle all symbolic identity. No illustrations, no 3D renders, no product UI screenshots — the brand tells its story through portraiture and architectural photography only.

## Layout

Single-column centered layout constrained to a 1280px max-width, with sections separated by ~96px of vertical breathing room. The hero is a full-bleed cinematic image with a centered or bottom-left Bradford headline overlaid; it occupies the full first viewport. Below the fold, content flows in alternating centered stacks and two-column image-card pairs. Text is always centered horizontally, headlines are single-line, and supporting copy is constrained to a narrow measure (~560px) and centered under the headline. Navigation is a minimal sticky top bar with a left logo and a single right-aligned pill button — no menu items, no mega-menu, no sidebar. Sections are separated by generous negative space rather than dividers or color bands. The 2-column card grid (e.g. Founders + Athletes) repeats as the primary content unit below the hero.

## Agent Prompt Guide

## Quick Color Reference
- text: #ffffff (primary), #c0c0c0 (secondary), #999999 (muted)
- background: #000000 (canvas), #202020 (elevated), #f5f5f0 (inverted panel)
- border: #333333 (hairline), #ffffff at 50% (ghost button)
- accent: none — the system is fully achromatic
- primary action: no distinct CTA color

## 3-5 Example Component Prompts

1. **Build a centered editorial headline block**: Full viewport section on #000000 canvas. Headline in Bradford 500, 128px, line-height 1.0, letter-spacing -6.4px, color #ffffff, text-align center. No subtitle, no button — the line stands alone.

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

3. **Build an Editorial Image Card with badge**: Container 10px border-radius, multi-layer shadow rgba(0,0,0,0.35) 0 10px 30px outer + rgba(255,255,255,0.08) 0 1px 0 inset. Full-bleed photograph inside, no internal padding around image. Top-right badge: rgba(255,255,255,0.08) surface, 9999px radius, 5px 11px padding, VisueltPro 500 10px uppercase white with +0.08em tracking. Bottom-left headline overlay: VisueltPro 500, 22px, #ffffff, -0.44px tracking.

4. **Build a Sticky Top Navigation**: Transparent background over #000000, height 64px, padding 0 20px horizontal, flex row, justify-between. Left: 'sequel' wordmark in VisueltPro 400 20px lowercase #ffffff followed by three 2px-wide white vertical bars 14px tall. Right: Pill Ghost Button — transparent fill, 1px #ffffff 50% border, 9999px radius, 16px 24px padding, VisueltPro 500 15px #ffffff label.

5. **Build an Inverted Light Panel**: Full-bleed section, background #f5f5f0, centered content max-width 720px. Headline in Bradford 500, 58px, line-height 1.2, letter-spacing -2.9px, color #000000. Body paragraph VisueltPro 300, 16px, line-height 1.5, color #333333. Pill Inverted Button below: #f5f5f0 fill, #000000 text, 9999px radius, 16px 24px padding.

## Similar Brands

- **Khosla Ventures** — Same black-canvas editorial style with full-bleed cinematic photography and oversized serif headlines; both treat the homepage as a gallery rather than a dashboard.
- **Founders Fund** — Minimalist dark-mode site with large editorial typography and almost no chromatic color; both rely on photography and wordplay to carry brand voice.
- **Apple Vision Pro** — Full-bleed moody photography with centered oversized headlines and pill-shaped CTAs on a pure-black canvas; both use 100% achromatic palettes to let imagery do the talking.
- **A24** — Cinematic dark aesthetic with serif display type, minimal UI chrome, and imagery that bleeds edge-to-edge at near-zero border-radius.
- **Linear** — Pill button shapes, weight-300 body typography, and dark surface stack (#000 → #202020 → #333) with the same hairline border language.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-black: #000000;
  --color-carbon: #202020;
  --color-graphite: #333333;
  --color-bone: #c0c0c0;
  --color-smoke: #999999;
  --color-ash: #b3b3b3;
  --color-fog: #cccccc;
  --color-chalk: #ffffff;
  --color-linen: #f5f5f0;

  /* Typography — Font Families */
  --font-visueltpro: 'VisueltPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-bradford: 'Bradford', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 18px;
  --leading-body: 1.4;
  --tracking-body: -0.36px;
  --text-subheading: 22px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.44px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -1.6px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.9px;
  --text-display: 128px;
  --leading-display: 1;
  --tracking-display: -6.4px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

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
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;
  --card-padding: 19px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 10px;
  --radius-badges: 9999px;
  --radius-images: 10px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.35) 0px 10px 30px 0px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset;
  --shadow-lg: rgba(0, 0, 0, 0.15) 0px 4px 20px 0px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-carbon: #202020;
  --surface-graphite: #333333;
  --surface-linen: #f5f5f0;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-black: #000000;
  --color-carbon: #202020;
  --color-graphite: #333333;
  --color-bone: #c0c0c0;
  --color-smoke: #999999;
  --color-ash: #b3b3b3;
  --color-fog: #cccccc;
  --color-chalk: #ffffff;
  --color-linen: #f5f5f0;

  /* Typography */
  --font-visueltpro: 'VisueltPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-bradford: 'Bradford', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.36px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 18px;
  --leading-body: 1.4;
  --tracking-body: -0.36px;
  --text-subheading: 22px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.44px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -1.6px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.9px;
  --text-display: 128px;
  --leading-display: 1;
  --tracking-display: -6.4px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.35) 0px 10px 30px 0px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset;
  --shadow-lg: rgba(0, 0, 0, 0.15) 0px 4px 20px 0px;
}
```