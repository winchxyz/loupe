# Apple — Style Reference
> black void with one lit object

**Theme:** dark

Apple's MacBook Pro page operates as a cinematic dark stage: pure black canvas with a single hero-sized product photograph emerging from shadow, no decorative chrome, no gradient panels competing with the device. The system is essentially monochromatic — 98% achromatic — using tight negative letter-spacing on oversized display type (SF Pro Display at 80px) to create a sense of engineered precision rather than warmth. Color is rationed: one signature blue accent (#2997ff) powers interactive links and the pill-shaped buy button, while a subtle multi-color gradient occasionally appears in spec infographics as visual punctuation. Components are generous and soft — 28px card radii, 980px pill nav bars, 999px fully-rounded buttons — creating a tactile, object-like quality where every interactive element feels machined rather than drawn. The visual rhythm alternates between enormous breathing room (120px+ section gaps around hero blocks) and dense informational blocks (fine-print legal text at 12px), producing a confident cadence that trusts silence as a design tool.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Pure Black | `#000000` | `--color-pure-black` | Page canvas, hero backgrounds, image voids |
| Graphite | `#1d1d1f` | `--color-graphite` | Card surfaces, footer, secondary text on light surfaces |
| Smoke | `#333336` | `--color-smoke` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Charcoal | `#161617` | `--color-charcoal` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Steel | `#424245` | `--color-steel` | Muted body text on dark surfaces, secondary metadata |
| Fog | `#86868b` | `--color-fog` | Secondary text, captions, subdued headings on dark backgrounds |
| Pearl | `#f5f5f7` | `--color-pearl` | Primary text on dark canvas, button text, light surface accent |
| White | `#ffffff` | `--color-white` | Maximum contrast text, button labels on blue fills |
| Platinum | `#cccccc` | `--color-platinum` | Tertiary text, fine-print, icon strokes on dark |
| Slate Gray | `#6e6e73` | `--color-slate-gray` | Disabled or very subtle helper text |
| Signal Blue | `#2997ff` | `--color-signal-blue` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Deep Link Blue | `#0066cc` | `--color-deep-link-blue` | Hover/visited link state, secondary chromatic reference in specs |
| Action Blue | `#0071e3` | `--color-action-blue` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Muted Teal | `linear-gradient(90deg, rgb(228, 246, 240), rgb(157, 207, 202) 31%, rgb(107, 149, 172) 68%, rgb(69, 101, 125))` | `--color-muted-teal` | Cool-toned link variant, used sparingly in spec highlights; Cool spec bar gradient endpoint — teal-to-steel transitions in performance metrics |
| Sunset Spectrum | `linear-gradient(108deg, rgb(0, 144, 247), rgb(186, 98, 252) 33%, rgb(242, 65, 107) 66%, rgb(245, 86, 0))` | `--color-sunset-spectrum` | Spec infographic gradient — blue through violet, pink, orange as decorative punctuation in technical highlight strips |
| Aurora | `linear-gradient(90deg, rgb(53, 169, 138) 0%, rgb(109, 212, 0))` | `--color-aurora` | Green gradient accent for battery-life and efficiency spec bars |

## Tokens — Typography

### SF Pro Display — All display and heading text from 21px upward. Hero headlines at 80px weight 600 with -0.015em tracking create Apple's signature confident, condensed voice. Subheadings drop to 48–56px. Weights stay 400 or 600 — no decorative bold. · `--font-sf-pro-display`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 17px, 19px, 20px, 21px, 24px, 28px, 32px, 40px, 48px, 56px, 64px, 80px
- **Line height:** 1.07–1.21 (tight, display-optimized)
- **Letter spacing:** -0.015em at 80px (-1.2px), -0.009em at 40–48px, -0.003em at 24–28px, 0.007–0.012em on small caps labels
- **OpenType features:** `"numr" on`
- **Role:** All display and heading text from 21px upward. Hero headlines at 80px weight 600 with -0.015em tracking create Apple's signature confident, condensed voice. Subheadings drop to 48–56px. Weights stay 400 or 600 — no decorative bold.

### SF Pro Text — Body copy at 17–21px weight 400, fine print at 12–14px weight 400, large subhead accents at 40–44px weight 300. Weight 300 is used selectively on large subdued subheads to create quiet authority. · `--font-sf-pro-text`
- **Substitute:** Inter
- **Weights:** 300, 400, 600
- **Sizes:** 12px, 14px, 17px, 18px, 20px, 24px, 44px
- **Line height:** 1.29–1.50 (generous for legibility)
- **Letter spacing:** -0.027em at 12px (caption), -0.022em at 14px, -0.019em at 17px, -0.016em at 18px, -0.010em at 20px
- **OpenType features:** `"numr" on`
- **Role:** Body copy at 17–21px weight 400, fine print at 12–14px weight 400, large subhead accents at 40–44px weight 300. Weight 300 is used selectively on large subdued subheads to create quiet authority.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | -0.32px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.31px | `--text-body-sm` |
| body | 17px | 1.47 | -0.32px | `--text-body` |
| subheading | 21px | 1.38 | -0.32px | `--text-subheading` |
| heading-sm | 28px | 1.21 | -0.34px | `--text-heading-sm` |
| heading | 48px | 1.08 | -0.72px | `--text-heading` |
| heading-lg | 56px | 1.07 | -0.84px | `--text-heading-lg` |
| display | 80px | 1.05 | -1.2px | `--text-display` |

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
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 104 | 104px | `--spacing-104` |
| 144 | 144px | `--spacing-144` |
| 208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 980px |
| cards | 28px |
| small | 10px |
| inputs | 210px |
| buttons | 999px |

### Layout

- **Page max-width:** 980px
- **Section gap:** 120px
- **Card padding:** 28px
- **Element gap:** 10px

## Components

### Buy Button (Filled Pill)
**Role:** Primary commercial action

Fully rounded 999px radius, 36px vertical padding, horizontal padding ~18px. Solid #0071e3 background, white #ffffff text at 17px SF Pro Text weight 400, letter-spacing -0.019em. No shadow, no border, no hover state change visible — appears as a single deterministic blue lozenge.

### Nav Pill Bar (Frosted)
**Role:** Sticky sub-navigation for product pages

980px border-radius creating a fully rounded capsule, frosted/translucent background over #1d1d1f, ~8px vertical padding, items separated by 10px gaps. Active item indicated by 1px white underline. Text at 12px SF Pro Text weight 400, #f5f5f7.

### Hero Headline Display
**Role:** Product page opener

80px SF Pro Display weight 600, line-height 1.05, letter-spacing -0.015em (-1.2px). Color: #f5f5f7 or multi-color gradient variant. Sits bottom-left aligned in hero. Below it, a 21px subtitle in #86868b and 17px body in #f5f5f7.

### Inline Text Link
**Role:** In-body navigation

Underlined #2997ff text, inherits body size and weight. No background, no padding. Underline is 1px solid in the same blue. The single chromatic interactive in dark-mode body copy.

### Price Tag Block
**Role:** Pricing display next to buy CTA

Two-line stack: 14px eyebrow text in #86868b ('From $1699'), 14px sub-line in #f5f5f7 ('or $141.58/mo. for 12 mo.'). No background, no border. Sits flush-left to the Buy button with 12px gap.

### Product Hero Photograph
**Role:** Full-bleed product showcase

Centered or left-aligned device image, ~600–700px wide on desktop, emerges from #000000 via internal lighting. No background card, no border, no shadow — the product IS the focal element. No rounded corners on the image itself.

### Carousel Slide Indicator
**Role:** Highlight section pagination

Row of 5–6 dots centered below a carousel of highlight cards. Active dot is #f5f5f7 (8px), inactive are #86868b (6px). No background, no text, no border. Pure spatial indicator.

### Spec Bar Gradient
**Role:** Performance/battery infographic

Horizontal 28px-radius bar with multi-stop linear gradient (e.g. teal-to-blue 90deg). Height ~12px, full width of its container. Used to visualize spec comparisons — the only place where gradient color is structurally meaningful.

### Footer Legal Block
**Role:** Regulatory and pricing disclosure

Full-width #1d1d1f background section, body text at 12px SF Pro Text weight 400, line-height 1.5, color #86868b. Superscript footnote markers (¹, ²) in the same color. Dense vertical stack with 10–13px paragraph gaps.

### Regional Selector
**Role:** Geo-location prompt at page top

Pill-shaped container with 980px radius, dark #1d1d1f fill, 10px vertical padding. Contains a checkmark icon, 'España' text in #f5f5f7, a dropdown chevron, and a 'Continuar' white text button on a transparent or ghost background.

### Highlight Card Grid
**Role:** Feature showcase carousel items

Large card ~400px wide, 28px border-radius, internal padding ~28px. Surface is #1d1d1f lifting off the black canvas. Contains a feature icon/image, short heading, and brief description. Arranged in horizontal scroll or 3-column grid.

## Do's and Don'ts

### Do
- Use SF Pro Display at 400 or 600 weight only — never 700 or 800, the system has no bold display voice
- Apply negative letter-spacing at every size: -1.2px at 80px down to -0.31px at 14px, the tight tracking is the signature
- Use 999px border-radius for all commercial buttons and the 980px pill for nav containers — full rounding is non-negotiable
- Default to #000000 canvas with #1d1d1f surfaces stepping up in 4–5 levels of gray, never introduce new background hues
- Reserve #2997ff and #0071e3 as the only chromatic voices — one for links, one for the buy button, no other accent colors in UI chrome
- Maintain 120px+ vertical breathing room between hero-class sections; density is a design failure on product pages
- Use 12px SF Pro Text with 1.5 line-height and #86868b for all legal/footnote text — this typography creates credibility

### Don't
- Never add drop shadows to cards, buttons, or images — depth comes from surface color steps and radii alone
- Do not introduce additional border-radius values outside the system set (10px, 28px, 32px, 36px, 999px, 980px, 210px)
- Never use more than one chromatic accent on a single screen — blue is rationed, not repeated
- Do not apply background colors to text links — the underline IS the affordance
- Avoid weight 700 or above in any context; the system communicates confidence through size and tracking, not weight
- Never add gradients to UI chrome, buttons, or backgrounds — gradients are reserved for spec infographics and the rare headline text effect
- Do not use light theme elements on dark sections or vice versa — the surface stack must be consistent within each viewport

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Canvas | `#000000` | Full-bleed page background, hero void |
| 2 | Deep Surface | `#161617` | Button fills, dark UI containers |
| 3 | Graphite Surface | `#1d1d1f` | Cards, footer, sub-navigation bands |
| 4 | Elevated Surface | `#333336` | Active tab indicators, highlighted UI elements on dark |

## Elevation

- **Buy Button:** `none — flat fill #0071e3`
- **Cards:** `none — separated by surface color shift and 28px radius`
- **Product Hero Image:** `none — emerges from pure black via lighting, not shadow`

## Imagery

Product photography dominates: large, centered or left-aligned MacBook renders on pure black backgrounds, emerging from shadow via internal product lighting rather than external shadow. No lifestyle photography, no people, no environmental context. All imagery is tightly cropped product-on-void, conveying precision and isolation. Icons are minimal monoline SF Symbols-style glyphs in #f5f5f7 or #86868b. Gradients appear only inside spec comparison infographics (horizontal bars) and one headline text-fill. No illustration style — the system is photographic and typographic, not drawn.

## Layout

Full-bleed dark canvas with content max-width ~980px centered. Hero is split: product image occupies the upper 60% of the viewport, headline + subtitle + price + buy button stack in the lower-left at 40% width. Section rhythm alternates between enormous breathing bands (120px vertical padding) and dense text blocks. Below the hero, a secondary sticky pill nav bar appears. Highlight sections use horizontal carousels with dot pagination. The final third of the page shifts to a light-on-light fine-print legal block at 1200px max width. No sidebar, no grid of cards on first screen — the hierarchy is: single hero → sticky nav → carousel highlights → spec strips → legal wall.

## Agent Prompt Guide

**Quick Color Reference**
- text: #f5f5f7 (primary on dark), #86868b (secondary), #1d1d1f (primary on light)
- background: #000000 (canvas), #1d1d1f (surface), #333336 (elevated)
- border: #333336 (hairline), #424245 (dividers)
- accent: #2997ff (links, interactive)
- primary action: no distinct CTA color

**Example Component Prompts:**

1. *Hero product page opener*: Full-bleed #000000 canvas. Display headline at 80px SF Pro Display weight 600, #f5f5f7, letter-spacing -1.2px, line-height 1.05. Subtitle at 21px SF Pro Text weight 400, #86868b. Body line at 17px weight 400, #f5f5f7. A #0071e3 pill button (999px radius, 36px vertical padding, 18px horizontal) with 17px white label sits right of a two-line price block (14px #86868b over 14px #f5f5f7). Centered product photograph above.

2. *Frosted sub-nav pill*: 980px border-radius, #1d1d1f translucent background, 8px vertical padding. Items: 'Overview | Tech Specs | Compare | Switch from PC to Mac' at 12px SF Pro Text weight 400, #f5f5f7, separated by 10px gaps. Active item has a 1px white underline.

3. *Inline link in body copy*: Text at 17px SF Pro Text weight 400, #2997ff, 1px solid #2997ff underline, no background, inline with surrounding #f5f5f7 paragraph text.

4. *Highlight carousel card*: 28px border-radius, #1d1d1f surface, 28px internal padding, 400px wide. Icon at top in #f5f5f7, heading at 24px SF Pro Display weight 600 #f5f5f7, description at 14px weight 400 #86868b.

5. *Spec gradient bar*: 28px border-radius, 12px height, full container width. Fill: linear-gradient(90deg, rgb(228, 246, 240), rgb(157, 207, 202) 31%, rgb(107, 149, 172) 68%, rgb(69, 101, 125)). No label, no border.

## Similar Brands

- **Samsung Galaxy product pages** — Same dark-canvas + single-product-hero + pill-button + blue accent interaction model, though Samsung uses more gradient atmosphere
- **Bose product detail pages** — Identical monochrome precision aesthetic with large product photography on black and 999px pill buy buttons
- **Sony PlayStation hardware pages** — Full-bleed dark hero with oversized display type, minimal UI chrome, and rationed color usage for CTAs only
- **Bang & Olufsen product pages** — Same machined-object-on-void photography treatment, 28px card radii, and typographic confidence through tracking rather than weight

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-pure-black: #000000;
  --color-graphite: #1d1d1f;
  --color-smoke: #333336;
  --color-charcoal: #161617;
  --color-steel: #424245;
  --color-fog: #86868b;
  --color-pearl: #f5f5f7;
  --color-white: #ffffff;
  --color-platinum: #cccccc;
  --color-slate-gray: #6e6e73;
  --color-signal-blue: #2997ff;
  --color-deep-link-blue: #0066cc;
  --color-action-blue: #0071e3;
  --color-muted-teal: #45657d;
  --gradient-muted-teal: linear-gradient(90deg, rgb(228, 246, 240), rgb(157, 207, 202) 31%, rgb(107, 149, 172) 68%, rgb(69, 101, 125));
  --color-sunset-spectrum: #0090f7;
  --gradient-sunset-spectrum: linear-gradient(108deg, rgb(0, 144, 247), rgb(186, 98, 252) 33%, rgb(242, 65, 107) 66%, rgb(245, 86, 0));
  --color-aurora: #35a98a;
  --gradient-aurora: linear-gradient(90deg, rgb(53, 169, 138) 0%, rgb(109, 212, 0));

  /* Typography — Font Families */
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.32px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.31px;
  --text-body: 17px;
  --leading-body: 1.47;
  --tracking-body: -0.32px;
  --text-subheading: 21px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.32px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.21;
  --tracking-heading-sm: -0.34px;
  --text-heading: 48px;
  --leading-heading: 1.08;
  --tracking-heading: -0.72px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -0.84px;
  --text-display: 80px;
  --leading-display: 1.05;
  --tracking-display: -1.2px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

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
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-104: 104px;
  --spacing-144: 144px;
  --spacing-208: 208px;

  /* Layout */
  --page-max-width: 980px;
  --section-gap: 120px;
  --card-padding: 28px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 18px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 36px;
  --radius-full: 210px;
  --radius-full-2: 980px;
  --radius-full-3: 999px;

  /* Named Radii */
  --radius-nav: 980px;
  --radius-cards: 28px;
  --radius-small: 10px;
  --radius-inputs: 210px;
  --radius-buttons: 999px;

  /* Surfaces */
  --surface-canvas: #000000;
  --surface-deep-surface: #161617;
  --surface-graphite-surface: #1d1d1f;
  --surface-elevated-surface: #333336;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-pure-black: #000000;
  --color-graphite: #1d1d1f;
  --color-smoke: #333336;
  --color-charcoal: #161617;
  --color-steel: #424245;
  --color-fog: #86868b;
  --color-pearl: #f5f5f7;
  --color-white: #ffffff;
  --color-platinum: #cccccc;
  --color-slate-gray: #6e6e73;
  --color-signal-blue: #2997ff;
  --color-deep-link-blue: #0066cc;
  --color-action-blue: #0071e3;
  --color-muted-teal: #45657d;
  --color-sunset-spectrum: #0090f7;
  --color-aurora: #35a98a;

  /* Typography */
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.32px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.31px;
  --text-body: 17px;
  --leading-body: 1.47;
  --tracking-body: -0.32px;
  --text-subheading: 21px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.32px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.21;
  --tracking-heading-sm: -0.34px;
  --text-heading: 48px;
  --leading-heading: 1.08;
  --tracking-heading: -0.72px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -0.84px;
  --text-display: 80px;
  --leading-display: 1.05;
  --tracking-display: -1.2px;

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
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-104: 104px;
  --spacing-144: 144px;
  --spacing-208: 208px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 18px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 36px;
  --radius-full: 210px;
  --radius-full-2: 980px;
  --radius-full-3: 999px;
}
```