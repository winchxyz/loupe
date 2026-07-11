# Apple — Style Reference
> Cathedral of white space and one blue dot. Apple's pages are vast pale chambers where a single product floats and a single blue button glows — everything else is silence.

**Theme:** light

Apple's product page language is quiet maximalism: enormous type breathing against near-white canvas, with the product as the only loud object. The visual system relies on extreme contrast in scale — 160px hero headlines sit beside 12px legal microcopy — rather than color or ornament. A single blue accent (#0071e3) powers all interactivity; every other chromatic color is content-specific (product variants, hero gradients) and never appears on UI chrome. Surfaces are mostly flat with whisper-soft elevation (inset 1px hairline shadows, never drop shadows on cards). The rhythm is generous vertical whitespace punctuated by full-bleed gradient bands that contextualize hero imagery. Typography does the work of hierarchy: SF Pro Display at weight 600 for headlines, SF Pro Text at 400 for body, both with aggressive negative tracking that tightens the feel of even the largest sizes.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Apple Blue | `#0071e3` | `--color-apple-blue` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Link Blue | `#0066cc` | `--color-link-blue` | Inline text links, secondary clickable text in body copy and footers |
| Space Black | `#1d1d1f` | `--color-space-black` | Primary headings, body text, icon strokes, nav labels — the dominant text color across every surface |
| Slate | `#313131` | `--color-slate` | Secondary UI text, dark button labels, footer links, muted headings |
| Gunmetal | `#444545` | `--color-gunmetal` | Tertiary text and link color in darker UI contexts, secondary navigation |
| Fog | `#6b6c6c` | `--color-fog` | Muted body text, captions, sub-labels, secondary metadata, de-emphasized descriptions |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, elevated panels, button text on dark fills, content backgrounds |
| Mist | `#f3f6f6` | `--color-mist` | Page canvas, section backgrounds, subtle differentiation from white card surfaces |
| Silver | `#e8e8ed` | `--color-silver` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Cloud | `#dedfe2` | `--color-cloud` | Light dividers, secondary borders, input field backgrounds, table row alternation |
| Obsidian | `#000000` | `--color-obsidian` | True black for fine icon detail, input borders, maximum-contrast text in dark hero zones |
| Pacific Gradient | `linear-gradient(rgb(0, 76, 148) 45%, rgb(41, 123, 196) 90%)` | `--color-pacific-gradient` | Hero section gradient — the iPad Air product page opens with a deep-to-bright blue wash that cradles the product; mid-point #004c94 at 45% |
| Spectrum | `linear-gradient(90deg, rgb(0, 144, 247) 8%, rgb(186, 98, 252), rgb(242, 65, 107), rgb(245, 86, 0))` | `--color-spectrum` | Rare decorative gradient appearing in special campaign banners — blue to violet to coral to orange; never used on UI controls |
| Signal Teal | `#00a1b3` | `--color-signal-teal` | Headline accent color for one specific product variant or campaign line |
| Iris Violet | `#8668ff` | `--color-iris-violet` | Headline accent color for a specific product variant section |
| Ember | `#ed6300` | `--color-ember` | Headline accent color for warm-product-variant callouts |
| Russet | `#b64400` | `--color-russet` | Dark warm accent for badge or tag color in product variant context |

## Tokens — Typography

### SF Pro Text — All UI and body type — body copy (17–18px/400), button labels (14–17px/400), captions and legal (8–12px/400), sub-section headings (24–34px/600), large statement blocks (44px/300). Weight 300 is reserved for oversized statement text that should whisper rather than shout. The hierarchy is extreme: a 160px display headline and 12px caption are both common in the same view. · `--font-sf-pro-text`
- **Substitute:** Inter, -apple-system, BlinkMacSystemFont
- **Weights:** 300, 400, 600
- **Sizes:** 8px, 12px, 14px, 17px, 18px, 20px, 24px, 34px, 44px
- **Line height:** 1.18–1.50 for body; 1.83–2.41 for legal/large blocks
- **Letter spacing:** -0.031em at 44px, -0.022em at 24px, -0.016em at 17px, -0.010em at 12px, -0.003em at 8px
- **OpenType features:** `"numr" on`
- **Role:** All UI and body type — body copy (17–18px/400), button labels (14–17px/400), captions and legal (8–12px/400), sub-section headings (24–34px/600), large statement blocks (44px/300). Weight 300 is reserved for oversized statement text that should whisper rather than shout. The hierarchy is extreme: a 160px display headline and 12px caption are both common in the same view.

### SF Pro Display — All display and heading type — product page hero headlines (80–160px), section headings (40–56px), nav labels and eyebrow text (21–28px). Weight 600 for hero and key headlines, 400 for sub-headings. Aggressive negative letter-spacing tightens the visual density even at extreme sizes: -0.040em at 160px, -0.015em at 40–48px, near-zero at 21px. The signature choice: 160px headlines at weight 600 with -6.4px tracking are architectural, not decorative. · `--font-sf-pro-display`
- **Substitute:** Inter, system-ui, -apple-system
- **Weights:** 400, 600
- **Sizes:** 21px, 28px, 40px, 48px, 56px, 80px, 160px
- **Line height:** 1.07–1.19 for body sizes; 0.88–1.14 for display
- **Letter spacing:** -0.040em at 160px, -0.015em at 48px, -0.005em at 28px, -0.003em at 21px
- **OpenType features:** `"numr" on`
- **Role:** All display and heading type — product page hero headlines (80–160px), section headings (40–56px), nav labels and eyebrow text (21–28px). Weight 600 for hero and key headlines, 400 for sub-headings. Aggressive negative letter-spacing tightens the visual density even at extreme sizes: -0.040em at 160px, -0.015em at 40–48px, near-zero at 21px. The signature choice: 160px headlines at weight 600 with -6.4px tracking are architectural, not decorative.

### SF Pro Text — Default body paragraph text — the reading voice of the page. Weight 400, not 300, because 400 at 17–18px is the sweet spot for long-form readability on screens. · `--font-sf-pro-text`
- **Substitute:** Inter, -apple-system
- **Weights:** 400
- **Sizes:** 8px, 12px, 14px, 17px, 18px, 20px, 24px, 34px, 44px
- **Line height:** 1.43–1.47
- **Letter spacing:** -0.0310em, -0.0270em, -0.0220em, -0.0200em, -0.0190em, -0.0160em, -0.0110em, -0.0100em, -0.0030em
- **OpenType features:** `"numr"`
- **Role:** Default body paragraph text — the reading voice of the page. Weight 400, not 300, because 400 at 17–18px is the sweet spot for long-form readability on screens.

### SF Pro Text — Button labels, navigation items, tab labels, in-card headings. Always semibold — Apple buttons are never bold, they are confident semibold. · `--font-sf-pro-text`
- **Substitute:** Inter, -apple-system
- **Weights:** 600
- **Sizes:** 8px, 12px, 14px, 17px, 18px, 20px, 24px, 34px, 44px
- **Line height:** 1.18–1.29
- **Letter spacing:** -0.0310em, -0.0270em, -0.0220em, -0.0200em, -0.0190em, -0.0160em, -0.0110em, -0.0100em, -0.0030em
- **OpenType features:** `"numr"`
- **Role:** Button labels, navigation items, tab labels, in-card headings. Always semibold — Apple buttons are never bold, they are confident semibold.

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | -0.01px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.016px | `--text-body-sm` |
| body | 17px | 1.47 | -0.022px | `--text-body` |
| body-lg | 21px | 1.38 | -0.003px | `--text-body-lg` |
| subheading | 24px | 1.29 | -0.022px | `--text-subheading` |
| subheading-lg | 28px | 1.19 | -0.015px | `--text-subheading-lg` |
| heading | 40px | 1.1 | -0.015px | `--text-heading` |
| heading-lg | 48px | 1.14 | -0.015px | `--text-heading-lg` |
| display | 80px | 1.07 | -0.02px | `--text-display` |
| display-xl | 160px | 0.88 | -0.04px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 13 | 13px | `--spacing-13` |
| 14 | 14px | `--spacing-14` |
| 19 | 19px | `--spacing-19` |
| 20 | 20px | `--spacing-20` |
| 25 | 25px | `--spacing-25` |
| 28 | 28px | `--spacing-28` |
| 30 | 30px | `--spacing-30` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 83 | 83px | `--spacing-83` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 12px |
| cards | 28px |
| badges | 980px |
| inputs | 12px |
| buttons | 980px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.11) 0px 0px 1px 0px inset` | `--shadow-subtle` |
| xl | `rgba(0, 0, 0, 0.05) 0px 0px 35px 20px` | `--shadow-xl` |

### Layout

- **Page max-width:** 980px
- **Section gap:** 80px
- **Card padding:** 40px
- **Element gap:** 10px

## Components

### Pill Button (Primary)
**Role:** The singular interactive element — every CTA in the system

Filled #0071e3 background, white text, SF Pro Text weight 600 at 14–17px, border-radius 980px, padding 8px 16px (compact) to 11px 22px (standard). Single border, no shadow. Letter-spacing -0.016em. The fully rounded radius is the most recognizable Apple UI signature — no other shape is acceptable for a CTA.

### Pill Button (Ghost)
**Role:** Secondary actions, supplementary links, nav anchors

Transparent background, #0066cc text or #1d1d1f text, no border, border-radius 980px, padding matching primary variant. Often paired with a › chevron to indicate 'learn more' navigation. Weight 400, not 600, to signal lower priority.

### Inline Text Link
**Role:** Body-copy links and footers

#0066cc text on white, no underline by default, underline on hover. SF Pro Text 17px/400. Underline thickness 1px, offset 2px. Never a button shape — links in paragraphs are always text-only.

### Content Card
**Role:** Feature highlights, product detail panels, media cards

#ffffff background, border-radius 28px, no border, no drop shadow by default. Padding 40px. Optional inset 1px shadow rgba(0,0,0,0.11) for cards that sit on the Mist canvas. Contains a heading (SF Pro Display 40–48px/600) and supporting body copy (SF Pro Text 17–21px/400). Cards are large, generous, and architectural.

### Full-Bleed Hero Band
**Role:** Product hero, campaign section, category showcase

Full-viewport-width band with a gradient or solid color background. Contains a centered product name (SF Pro Display 80–160px/600), a single line tagline, the product visual centered below, and an optional CTA. Section gap below is 80–120px. The gradient runs from rgb(0,76,148) at 45% to rgb(41,123,196) at 90% — deep-to-bright blue reads as sky/water, not decoration.

### Sub-Nav Bar
**Role:** Product-page navigation between Overview, Tech Specs, Compare, Buy

Sticky horizontal bar at top of product pages, #ffffff background with bottom hairline border #d2d2d7. Left: product name in SF Pro Text 21px/600 (#1d1d1f). Right: tab links in SF Pro Text 14px/400. Active tab gets a #1d1d1f text and thin underline; the 'Buy' tab is a filled #0071e3 pill button with white text, 980px radius, 8px 16px padding.

### Global Header Bar
**Role:** Site-wide navigation

Translucent or solid #ffffff bar, ~44px tall. Apple logo (small) on left, product category links centered, search/bag icons right. Links are SF Pro Text 12px/400 in #1d1d1f. No borders, no background fill on individual items.

### Legal/Footnote Block
**Role:** Asterisk disclaimers, regulatory text, fine print

SF Pro Text 12px/400 #6b6c6c, line-height 1.33, max-width 980px centered. Often preceded by a super-script ‡ or * in the same color. Generous margin-top (40–80px) from the content it qualifies.

### Product Variant Selector
**Role:** Color or configuration picker on product pages

Horizontal row of small color swatches or text options, SF Pro Text 14px/400 #1d1d1f. Selected variant gets a 1px #1d1d1f circular outline. No fill change — selection is indicated by an outline ring only.

### Highlight Card (Video Feature)
**Role:** Large media-driven content card with overlay text

Full-width card, border-radius 28px, contains a background video or image with text overlaid in the top-left corner. Overlay text: SF Pro Display 40–56px/600 #1d1d1f, with 17–21px body copy below. Optional play icon in SF Symbols style, 16px circle with play triangle. Aspect ratio ~16:9.

### Utility Icon Button
**Role:** Search, bag, close, share, play/pause

SF Symbols icon, 16–20px, #1d1d1f stroke or fill, no background, no border, no radius. Click target is padded to 44×44px via invisible wrapper. Icons are always monochrome — no colored icons in chrome.

## Do's and Don'ts

### Do
- Use #0071e3 exclusively for filled CTA pill buttons; no other blue may power a primary action
- Set border-radius to 980px on every button, badge, and pill-shaped element — the fully rounded capsule is non-negotiable
- Use SF Pro Display weight 600 for all headlines; weight 400 reads as a heading draft, not finished type
- Apply negative letter-spacing that scales with size: -0.040em at 160px, -0.015em at 48px, -0.003em at 17px — tracking must tighten as type grows
- Maintain 80px+ vertical section gaps between major content blocks; whitespace is the primary structural tool
- Keep all UI chrome monochrome (#1d1d1f text on #ffffff/#f3f6f6 surfaces) — color appears only in product imagery, hero gradients, and the one blue CTA
- Use the inset 1px shadow rgba(0,0,0,0.11) instead of drop shadows for surface elevation; depth comes from hairline definition, not blur

### Don't
- Never use drop shadows on cards — Apple uses flat surfaces or inset hairlines, not elevated panels
- Never place a chromatic color on a navigation element, icon, or text label outside the CTA
- Never use a border-radius between 4px and 20px for cards or buttons; the scale jumps from 12px (small elements) to 28px (cards) to 980px (pills)
- Never bold body copy — SF Pro Text weight 400 is the reading voice; weight 600 is reserved for buttons, labels, and sub-headings
- Never use more than one CTA color on a page; the Apple Blue #0071e3 is the only interactive chromatic token
- Never crowd sections — maintain a minimum 60px between any two distinct content blocks
- Never use the spectrum gradient on functional UI; it is reserved for campaign banners and must never appear on buttons, links, or form controls

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f3f6f6` | Page-level background for body sections between hero bands |
| 1 | Surface White | `#ffffff` | Cards, content panels, product detail sections — the dominant elevated surface |
| 2 | Hero Tint | `#0071e3` | Full-bleed gradient hero bands in deep blue (from rgb(0,76,148) to rgb(41,123,196)) |
| 3 | Divider Silver | `#e8e8ed` | Hairline separators, disabled states, subtle structural lines |

## Elevation

Apple avoids drop shadows almost entirely. Surface elevation is communicated through: (1) a 1px inset shadow rgba(0,0,0,0.11) on cards that sit on the Mist canvas, creating a hairline of definition at the edge; (2) the subtle tonal difference between #ffffff card surfaces and #f3f6f6 canvas; (3) full-bleed color/gradient bands that separate content sections without using borders or shadows. The one rare drop shadow is rgba(0,0,0,0.05) 0px 0px 35px 20px, used only on special overlay elements — it is a diffused atmospheric glow, not a structural elevation cue. The design philosophy: flatness signals confidence, depth is earned through content, not chrome.

## Imagery

Product photography dominates: the iPad floats centered against gradient sky, shot at a 3/4 angle that shows both screen and side profile. Images are isolated on pure white or gradient backgrounds — no lifestyle context, no hands, no environmental staging. Screen content shows the actual product capability (video editing timeline, app interfaces) rendered at full fidelity. Icons are SF Symbols style: monochrome, 1.5–2px stroke weight, geometric and precise. No illustration, no abstract graphics, no decorative photography — the product is always the hero. Imagery density is high per section (one large product shot per band) but sparse across the page overall.

## Layout

Full-bleed vertical bands stacked top to bottom, each band is a self-contained narrative unit. Max content width 980px centered within full-bleed sections. Hero band: full viewport width with gradient background, centered product name in 80–160px type, product image centered below. Section pattern: headline left-aligned or centered at 40–56px, supporting copy at 17–21px beneath, media block below or to the side. Cards use 2-column or 3-column grids with generous gutters. No sidebar navigation — sub-nav is a horizontal sticky bar. Sections alternate between white (#ffffff) and mist (#f3f6f6) backgrounds, with periodic full-bleed gradient bands breaking the pattern. Vertical rhythm: 80–120px between sections, 40px within sections. The page reads top-to-bottom as a sequence of large quiet statements, each given room to land.

## Agent Prompt Guide

**Quick Color Reference**
- text: #1d1d1f
- background: #ffffff
- border: #d2d2d7
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.
- link: #0066cc
- muted text: #6b6c6c
- primary action: no distinct CTA color

**3 Example Component Prompts**

1. **Create a hero band**: Full-bleed section with linear-gradient(rgb(0,76,148) 45%, rgb(41,123,196) 90%) background, max-width 980px content centered. Product name in SF Pro Display 96px weight 600, color #ffffff, letter-spacing -0.024em. Tagline below in SF Pro Text 21px weight 400, color #ffffff at 80% opacity. Product image centered below text, 200px gap above image.

2. **Create a feature content card**: 980px wide, #ffffff background, border-radius 28px, padding 40px. Heading in SF Pro Display 48px weight 600, color #1d1d1f, letter-spacing -0.015em. Body text in SF Pro Text 21px weight 400, color #1d1d1f, line-height 1.38. Optional inset shadow rgba(0,0,0,0.11) 0px 0px 1px 0px inset if card sits on #f3f6f6 canvas.


## Type Personality

The type system is defined by two extremes coexisting: 160px display headlines at weight 600 with -6.4px tracking (architectural, commanding) beside 12px legal footnotes at weight 400 with -0.036px tracking (whispered, almost invisible). The negative letter-spacing tightens as size grows — the visual density of a 160px headline is comparable to a 40px headline in another system. This is not accidental: it is what makes Apple headlines feel like single shapes rather than words. Weight 300 appears only on oversized statement text (44px+) where it reads as restraint. The number-lining feature ("numr") ensures tabular figures in pricing, specs, and technical data align vertically.

## Similar Brands

- **Linear** — Same minimal product-page language — white canvas, one blue interactive accent, oversized headline as the dominant element, pill-shaped controls, no decorative chrome
- **Stripe** — Shared restraint in typography: massive display headlines with aggressive negative tracking, monochrome palette with one brand color, generous vertical whitespace as structural rhythm
- **Nothing** — Similar philosophy of chromatic silence — UI chrome stays achromatic, color appears only in product imagery and a single accent role, with pill-shaped buttons and flat surfaces
- **Vercel** — Black-on-white minimalism with one accent, oversized type as hero, and the same discipline of letting one large element per section carry the visual weight

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-apple-blue: #0071e3;
  --color-link-blue: #0066cc;
  --color-space-black: #1d1d1f;
  --color-slate: #313131;
  --color-gunmetal: #444545;
  --color-fog: #6b6c6c;
  --color-pure-white: #ffffff;
  --color-mist: #f3f6f6;
  --color-silver: #e8e8ed;
  --color-cloud: #dedfe2;
  --color-obsidian: #000000;
  --color-pacific-gradient: #297bc4;
  --gradient-pacific-gradient: linear-gradient(rgb(0, 76, 148) 45%, rgb(41, 123, 196) 90%);
  --color-spectrum: #ba62fc;
  --gradient-spectrum: linear-gradient(90deg, rgb(0, 144, 247) 8%, rgb(186, 98, 252), rgb(242, 65, 107), rgb(245, 86, 0));
  --color-signal-teal: #00a1b3;
  --color-iris-violet: #8668ff;
  --color-ember: #ed6300;
  --color-russet: #b64400;

  /* Typography — Font Families */
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.016px;
  --text-body: 17px;
  --leading-body: 1.47;
  --tracking-body: -0.022px;
  --text-body-lg: 21px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: -0.003px;
  --text-subheading: 24px;
  --leading-subheading: 1.29;
  --tracking-subheading: -0.022px;
  --text-subheading-lg: 28px;
  --leading-subheading-lg: 1.19;
  --tracking-subheading-lg: -0.015px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.015px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -0.015px;
  --text-display: 80px;
  --leading-display: 1.07;
  --tracking-display: -0.02px;
  --text-display-xl: 160px;
  --leading-display-xl: 0.88;
  --tracking-display-xl: -0.04px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-83: 83px;

  /* Layout */
  --page-max-width: 980px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 36px;
  --radius-full: 170px;
  --radius-full-2: 980px;

  /* Named Radii */
  --radius-nav: 12px;
  --radius-cards: 28px;
  --radius-badges: 980px;
  --radius-inputs: 12px;
  --radius-buttons: 980px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.11) 0px 0px 1px 0px inset;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 0px 35px 20px;

  /* Surfaces */
  --surface-canvas: #f3f6f6;
  --surface-surface-white: #ffffff;
  --surface-hero-tint: #0071e3;
  --surface-divider-silver: #e8e8ed;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-apple-blue: #0071e3;
  --color-link-blue: #0066cc;
  --color-space-black: #1d1d1f;
  --color-slate: #313131;
  --color-gunmetal: #444545;
  --color-fog: #6b6c6c;
  --color-pure-white: #ffffff;
  --color-mist: #f3f6f6;
  --color-silver: #e8e8ed;
  --color-cloud: #dedfe2;
  --color-obsidian: #000000;
  --color-pacific-gradient: #297bc4;
  --color-spectrum: #ba62fc;
  --color-signal-teal: #00a1b3;
  --color-iris-violet: #8668ff;
  --color-ember: #ed6300;
  --color-russet: #b64400;

  /* Typography */
  --font-sf-pro-text: 'SF Pro Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.016px;
  --text-body: 17px;
  --leading-body: 1.47;
  --tracking-body: -0.022px;
  --text-body-lg: 21px;
  --leading-body-lg: 1.38;
  --tracking-body-lg: -0.003px;
  --text-subheading: 24px;
  --leading-subheading: 1.29;
  --tracking-subheading: -0.022px;
  --text-subheading-lg: 28px;
  --leading-subheading-lg: 1.19;
  --tracking-subheading-lg: -0.015px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.015px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -0.015px;
  --text-display: 80px;
  --leading-display: 1.07;
  --tracking-display: -0.02px;
  --text-display-xl: 160px;
  --leading-display-xl: 0.88;
  --tracking-display-xl: -0.04px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-83: 83px;

  /* Border Radius */
  --radius-xl: 12px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 36px;
  --radius-full: 170px;
  --radius-full-2: 980px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.11) 0px 0px 1px 0px inset;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 0px 35px 20px;
}
```