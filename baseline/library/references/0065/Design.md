# Augen Pro — Style Reference
> Silhouette dissolving into white

**Theme:** light

Augen Pro is an achromatic whisper on a near-white void, broken by a single electric-blue signal. The entire interface speaks in low register: the largest text is 27px, headings use weight 350, and the canvas is a barely-warm #f2f2f4 that reads as paper rather than screen. A floating pill navigation anchors the top while content drifts toward the bottom-left, giving the page the feeling of a printed manifesto about future hardware rather than a product catalog. One dark section at the bottom inverts the palette, using the same restraint in reverse: white text on #0f1012 with the blue accent reserved for links and a single floating square ornament. Components are minimal and text-led — pill tags, ghost links, and small superscript labels — with the only visual punctuation being the blue #0071e3 that threads through links, icons, and decorative marks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#0f1012` | `--color-ink-black` | Primary text, icons, dark section background, footer surface |
| Canvas Mist | `#f2f2f4` | `--color-canvas-mist` | Page background, hero canvas, soft surface fill |
| Paper White | `#fdfdfd` | `--color-paper-white` | Card surfaces, inset wells, pure-white content blocks |
| Fog Gray | `#8f8f8f` | `--color-fog-gray` | Muted secondary text, inactive nav items, button ghost text |
| Smoke Gray | `#5e5e5e` | `--color-smoke-gray` | Medium-muted helper text, metadata, tertiary labels |
| Signal Blue | `#0071e3` | `--color-signal-blue` | Hyperlinks, inline link text, accent icons, decorative geometric marks, active-state punctuation |

## Tokens — Typography

### PP Neue Montreal — Sole typeface — a geometric neo-grotesque used for everything from 10px nav labels to 27px headlines. The 350 weight for headings is the signature choice: most sites shout at 600-700, this site whispers at 350, letting negative space and the single blue accent do the work. · `--font-pp-neue-montreal`
- **Substitute:** Inter, Geist, or Söhne — any humanist geometric grotesque with a 350 weight will read similarly.
- **Weights:** 350, 400
- **Sizes:** 10, 12, 13, 14, 16, 18, 27
- **Line height:** 1.20
- **Letter spacing:** -0.020em at all sizes (-0.2px at 10px, -0.28px at 14px, -0.54px at 27px)
- **Role:** Sole typeface — a geometric neo-grotesque used for everything from 10px nav labels to 27px headlines. The 350 weight for headings is the signature choice: most sites shout at 600-700, this site whispers at 350, letting negative space and the single blue accent do the work.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | -0.2px | `--text-caption` |
| body | 14px | 1.2 | -0.28px | `--text-body` |
| body-md | 16px | 1.2 | -0.32px | `--text-body-md` |
| body-lg | 18px | 1.2 | -0.36px | `--text-body-lg` |
| heading | 27px | 1.2 | -0.54px | `--text-heading` |

## Tokens — Spacing & Shapes

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 22 | 22px | `--spacing-22` |
| 30 | 30px | `--spacing-30` |
| 34 | 34px | `--spacing-34` |
| 35 | 35px | `--spacing-35` |
| 50 | 50px | `--spacing-50` |
| 69 | 69px | `--spacing-69` |
| 94 | 94px | `--spacing-94` |
| 113 | 113px | `--spacing-113` |
| 130 | 130px | `--spacing-130` |
| 144 | 144px | `--spacing-144` |
| 220 | 220px | `--spacing-220` |

### Border Radius

| Element | Value |
|---------|-------|
| button | 26px |
| navPill | 54px |
| surface | 63px |
| tagPill | 9999px |
| hairline | 1.8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 94px
- **Card padding:** 11px
- **Element gap:** 6px

## Components

### Floating Pill Navigation
**Role:** Primary top-level navigation bar

Centered floating pill with 54px border-radius, #fdfdfd fill, subtle 1.8px hairline border in #0f1012. Internal padding 11px horizontal. Logo asterisk + nav items (Wearable, Neural, Programs, Updates, Search) in PP Neue Montreal 12px weight 400, text color #0f1012. The active item uses slightly stronger weight or a dot indicator. Floats above the hero with generous top margin, not pinned to the viewport edge.

### Pill Tag (Explore Chips)
**Role:** Small clickable category labels

Ultra-rounded pill (9999px radius) with 1.8px hairline border in #0071e3, transparent fill, #0071e3 text. 11px horizontal padding, ~4px vertical. PP Neue Montreal 12px weight 350. Used in groups of 2-4 to label product lines or topics. The blue stroke + transparent fill is the only chromatic border treatment on the entire site.

### Section Label
**Role:** Micro-label introducing a section or grouping content

All-lowercase or unstyled small text in PP Neue Montreal 12-13px weight 400, color #0f1012. Examples: 'augen', 'Explore', 'Our Progress'. No decoration, no caps, no colon — just quiet positioning above the content it describes.

### Headline
**Role:** Page or section H1/H2

PP Neue Montreal 27px weight 350, color #0f1012, letter-spacing -0.54px. Period at the end is mandatory — 'Beyond Humanware.' is a statement, not a title. The 350 weight is the signature: it reads as confident understatement.

### Body Paragraph
**Role:** Standard reading text

PP Neue Montreal 16-18px weight 350, color #5e5e5 or #0f1012 depending on hierarchy. Line-height 1.2 is tight — almost no leading — which forces the white space around the text to do the breathing.

### Inline Link
**Role:** Hyperlinked text within paragraphs

Inherits body text styling but color shifts to #0071e3. No underline by default; the color shift alone signals interactivity. Used for phrases like 'to enhance everyday life.'

### Ghost Link Button
**Role:** Tertiary action — navigation to a page or resource

PP Neue Montreal 14px weight 400, #0071e3 text, paired with a small blue arrow or chevron icon. No background, no border, no padding. Example: 'Go to Updates →'. The blue-on-white ghost treatment is the site's de facto action — there are no filled buttons.

### Hero Composition
**Role:** Full-bleed hero section

#f2f2f4 background, 100vh or near-100vh height. A centered human silhouette in mid-tone gray emerges from and dissolves into the white. Content cluster (label + headline + tags) sits anchored to the bottom-left with 69-94px inset from the viewport edge. No gradient, no overlay — just the figure against the void.

### Embedded Media Well
**Role:** Video or image content within body sections

Small thumbnail or play button in #0f1012, positioned to the left of an accompanying paragraph. Restrained size — roughly 200-300px wide — never dominates the section.

### Dark Inversion Section
**Role:** Final section that inverts the palette

Full-bleed #0f1012 background. Headings in #fdfdfd, body text in #8f8f8f or #fdfdfd at reduced opacity. A single #0071e3 square floats on the left edge as the only color punctuation, echoing the blue links. This section provides visual closure after the all-white upper page.

### Microphone FAB
**Role:** Floating voice-input control

Small circular button in the bottom-left corner, ~32px diameter, #fdfdfd fill with #0f1012 mic icon and 1.8px hairline border. Floats independently of the layout grid, suggesting ambient interactivity.

### Announcement Pill
**Role:** Secondary informational banner below the nav

Centered pill, 54px radius, #fdfdfd fill, 1.8px border. Contains a short message ('Discover the future in every update') in 12px PP Neue Montreal plus a small blue switch/toggle indicator on the right. Sits ~16-22px below the main nav.

## Do's and Don'ts

### Do
- Use PP Neue Montreal at weight 350 for all headings; 400 is the maximum weight anywhere on the page
- Keep the largest text size at 27px — resist the urge to scale up; the whisper is the point
- Apply -0.020em letter-spacing to all type at all sizes
- Use 54px or 9999px border-radius for pills and tags; use 26px for small buttons; use 1.8px hairlines for borders
- Reserve #0071e3 exclusively for inline links, the ghost link button text, and the single decorative blue square — never as a filled button background
- Maintain 94px vertical gaps between major sections; 6-11px for tight inner padding on pills and tags
- Anchor hero content to the bottom-left with 69-94px viewport inset; let whitespace carry the composition

### Don't
- Do not introduce filled buttons in #0071e3 or any other color — actions are ghost links with arrows, not filled CTAs
- Do not use font weights above 400; the 350 headline weight is the signature and any bolder treatment breaks the system
- Do not scale headings above 27px; the restrained type scale is what makes the page feel editorial
- Do not add drop shadows, blurs, or any z-depth effects — surface changes use color, not elevation
- Do not introduce additional accent colors; the entire system runs on #0f1012, #f2f2f4, #fdfdfd, and #0071e3
- Do not center body text or paragraph blocks — they are always left-aligned
- Do not use underline for links; the #0071e3 color shift alone signals interactivity

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f2f2f4` | Base page background — a warm off-white that reads as paper |
| 1 | Paper | `#fdfdfd` | Pure white content surfaces, video/image wells |
| 2 | Inverse | `#0f1012` | Dark counterpoint section at bottom of page |

## Elevation

The design deliberately avoids drop shadows. The only depth treatment is a 1.8px hairline border on pills and the floating nav — barely visible, more like a printed line than an interface shadow. Surfaces are distinguished by background color shifts (#f2f2f4 → #fdfdfd → #0f1012) rather than elevation. This is a flat, paper-like design language where weight and contrast create hierarchy instead of z-depth.

## Imagery

Imagery is dominated by a single, large, ethereal human silhouette in the hero — a profile view in mid-gray that dissolves into the white canvas with no hard edge. The treatment is photographic but heavily manipulated: high-key, desaturated to near-monochrome, with soft falloff that makes the figure feel like a memory rather than a portrait. Beyond the hero, imagery is absent or minimal: small thumbnail video wells, no lifestyle photography, no product shots. The rest of the page is pure typography and whitespace. Icons are mono-stroke line icons in #0f1012, used sparingly for the microphone FAB, the arrow in 'Go to Updates', and the toggle in the announcement pill. The overall visual register is contemplative and editorial — closer to a design publication hero than a product page.

## Layout

The page is full-bleed on a #f2f2f4 canvas with a 1200px max-width content corridor. The floating pill nav is dead-centered at the top with generous breathing room. The hero is a single near-viewport-height composition with content anchored bottom-left — the figure occupies the visual center while the label/headline/tag cluster sits in the lower-left quadrant, creating an asymmetric tension. Below the hero, the middle section is a left-aligned text block paired with a small media well to its left, in a single row with significant horizontal gap. The final section inverts to #0f1012 dark, maintaining the same single-column text rhythm but with a blue geometric square floating on the far left edge as a counterweight. Vertical rhythm is defined by 94px section gaps — the page feels spacious and unhurried, never information-dense.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0f1012
- background: #f2f2f4
- card/surface: #fdfdfd
- border/hairline: #0f1012 at 1.8px
- muted text: #5e5e5e / #8f8f8f
- accent (links, icons, decoration): #0071e3
- primary action: no distinct CTA color

**3-5 Example Component Prompts**

1. *Floating Pill Navigation*: Centered pill at top of page, 54px border-radius, #fdfdfd fill, 1.8px border in #0f1012, 11px horizontal padding. Contains an asterisk logo icon in #0f1012 followed by nav items (Wearable, Neural, Programs, Updates, Search) set in PP Neue Montreal 12px weight 400, #0f1012. Floats with ~50px top margin on a #f2f2f4 canvas.

2. *Hero Headline Block*: Bottom-left of the hero, positioned with 69-94px inset. A small label 'augen' in PP Neue Montreal 12px weight 400 #0f1012, followed by a 27px weight 350 headline 'Beyond Humanware.' in #0f1012 with letter-spacing -0.54px. Below it, the word 'Explore' in 12px weight 400 #0f1012, then a row of pill tags (A¹ Sense, B¹ Eye, A² Neuro) each with 9999px radius, transparent fill, 1.8px border in #0071e3, and #0071e3 text at 12px weight 350.

3. *Ghost Link Button*: A 14px PP Neue Montreal weight 400 text 'Go to Updates' in #0071e3, immediately followed by a small right-pointing arrow icon also in #0071e3. No background, no border, no padding. Sits beneath a section heading on the dark #0f1012 section.

4. *Dark Inversion Section*: Full-width band with #0f1012 background. Left-aligned content with 69-94px viewport padding. A small label 'Our Progress' in 12px PP Neue Montreal weight 400 #fdfdfd, a heading 'The new Method' in 27px weight 350 #fdfdfd, and a body paragraph at 16px weight 350 in #8f8f8f. A single #0071e3 square (roughly 32-40px) floats on the far left edge of the section as the only color mark.

5. *Inline Link within Body*: Body paragraph in PP Neue Montreal 18px weight 350 #5e5e5e, with a phrase like 'to enhance everyday life.' rendered in #0071e3 — no underline, no weight change, no background. The color shift is the only signal.

## Type Voice

The typography reads as a printed philosophy essay, not a product page. Two weights (350, 400) carry every hierarchy on the site. Headlines at 27px weight 350 are deliberate understatement — they trust the reader to lean in. Body text at 16-18px weight 350 or 400 in #5e5e5e or #0f1012 sits at near-default tightness (line-height 1.2), letting the surrounding 94px section gaps and 69-94px viewport insets provide the breathing room. The consistent -0.020em letter-spacing is subtle enough to feel native to the font rather than an applied effect.

## Color Discipline

The system runs on a strict three-neutral-plus-one-accent model. The near-black #0f1012 (not pure #000) and near-white #fdfdfd (not pure #fff) create a warm, paper-like register. The #f2f2f4 canvas sits between them as a soft ground. #0071e3 is the only chromatic color and appears in exactly three roles: inline link text, ghost link button text + arrow, and a single decorative geometric mark. No filled buttons, no large color blocks, no gradient washes — the blue is a signal, not a surface.

## Similar Brands

- **Apple (Vision Pro / Human Interface pages)** — Same near-white canvas, whisper-weight headlines, and single-link-blue accent; both use the silhouette-on-white hero treatment and PP Neue Montreal sits in the same family as SF Pro.
- **Nothing (nothing.tech)** — Equally restrained achromatic palette with a single dot-matrix accent, large airy hero compositions, and ghost-link CTAs over filled buttons.
- **Linear** — Same hairline-border pill components, -0.02em letter-spacing, and devotion to a small grayscale palette with one chromatic accent for interaction.
- **HUMAN (human.fund)** — Identical editorial whitespace discipline, weight-350 neo-grotesque headlines, and the practice of letting one human silhouette carry the entire hero against white.
- **OpenAI (research / announcements pages)** — Shares the near-white canvas, the off-black text color that avoids pure #000, the absence of filled CTAs in favor of text links, and the type-led editorial rhythm.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink-black: #0f1012;
  --color-canvas-mist: #f2f2f4;
  --color-paper-white: #fdfdfd;
  --color-fog-gray: #8f8f8f;
  --color-smoke-gray: #5e5e5e;
  --color-signal-blue: #0071e3;

  /* Typography — Font Families */
  --font-pp-neue-montreal: 'PP Neue Montreal', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: -0.2px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: -0.28px;
  --text-body-md: 16px;
  --leading-body-md: 1.2;
  --tracking-body-md: -0.32px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.36px;
  --text-heading: 27px;
  --leading-heading: 1.2;
  --tracking-heading: -0.54px;

  /* Typography — Weights */
  --font-weight-w350: 350;
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-69: 69px;
  --spacing-94: 94px;
  --spacing-113: 113px;
  --spacing-130: 130px;
  --spacing-144: 144px;
  --spacing-220: 220px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 94px;
  --card-padding: 11px;
  --element-gap: 6px;

  /* Border Radius */
  --radius-sm: 1.8px;
  --radius-lg: 10px;
  --radius-3xl: 26px;
  --radius-full: 54px;
  --radius-full-2: 63px;

  /* Named Radii */
  --radius-button: 26px;
  --radius-navpill: 54px;
  --radius-surface: 63px;
  --radius-tagpill: 9999px;
  --radius-hairline: 1.8px;

  /* Surfaces */
  --surface-canvas: #f2f2f4;
  --surface-paper: #fdfdfd;
  --surface-inverse: #0f1012;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink-black: #0f1012;
  --color-canvas-mist: #f2f2f4;
  --color-paper-white: #fdfdfd;
  --color-fog-gray: #8f8f8f;
  --color-smoke-gray: #5e5e5e;
  --color-signal-blue: #0071e3;

  /* Typography */
  --font-pp-neue-montreal: 'PP Neue Montreal', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: -0.2px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: -0.28px;
  --text-body-md: 16px;
  --leading-body-md: 1.2;
  --tracking-body-md: -0.32px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.36px;
  --text-heading: 27px;
  --leading-heading: 1.2;
  --tracking-heading: -0.54px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-69: 69px;
  --spacing-94: 94px;
  --spacing-113: 113px;
  --spacing-130: 130px;
  --spacing-144: 144px;
  --spacing-220: 220px;

  /* Border Radius */
  --radius-sm: 1.8px;
  --radius-lg: 10px;
  --radius-3xl: 26px;
  --radius-full: 54px;
  --radius-full-2: 63px;
}
```