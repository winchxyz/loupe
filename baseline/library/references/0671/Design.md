# Ferrari — Style Reference
> Monochrome gallery under spotlights — a completely achromatic interface that lets the cars carry all color through photography.

**Theme:** mixed

Ferrari's digital presence is a monochrome gallery under spotlights — a completely achromatic interface where the cars carry all color through photography, and the UI itself stays disciplined in pure black, white, and grayscale. Layouts are editorial: full-bleed dark cinematic heroes with centered all-caps titles, alternating into white content sections with generous breathing room and a rigid text-left/image-right rhythm. The visual language is restrained and confident — thin circular arrow CTAs, wide-tracked uppercase navigation, hairline borders, zero chromatic accents, and zero decorative gradients. Every surface decision defers to the photograph: the interface must never compete with the car.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Pure White | `#ffffff` | `--color-pure-white` | Page canvas, light section backgrounds, card surfaces, text on dark backgrounds |
| Pure Black | `#000000` | `--color-pure-black` | Full-bleed dark hero and feature sections, deep navigation bar, primary text on light backgrounds |
| Carbon Black | `#181818` | `--color-carbon-black` | Secondary dark surfaces, dark cards, footer backgrounds — sits one step lifted from pure black |
| Graphite | `#303030` | `--color-graphite` | Elevated dark surfaces, dark borders, subtle dark-mode structure — one step lighter than Carbon |
| Steel Gray | `#8f8f8f` | `--color-steel-gray` | Muted helper text, secondary icon strokes, subdued metadata on both light and dark surfaces |

## Tokens — Typography

### Body-Font — Body-Font — detected in extracted data but not described by AI · `--font-body-font`
- **Weights:** 400
- **Sizes:** 9px, 11px, 12px, 13px
- **Line height:** 1.27, 1.5, 1.78, 2
- **Letter spacing:** 0.015, 0.022, 0.028, 0.083, 0.091
- **Role:** Body-Font — detected in extracted data but not described by AI

### Ferrari custom sans-serif — Single weight 400 typeface used for everything — navigation, headlines, body, labels. All-caps headlines and nav with aggressive positive tracking (0.083–0.091em) is the signature move; body copy uses near-zero or slightly positive tracking (0.015–0.028em). Absence of bold/light weights is a deliberate editorial choice: hierarchy is created by size and tracking, never weight contrast. · `--font-ferrari-custom-sans-serif`
- **Substitute:** Inter, Helvetica Neue, or Neue Haas Grotesk — pick something with clean geometric forms and even weight distribution at 400
- **Weights:** 400
- **Sizes:** 
- **Line height:** 1.27–2.00
- **Letter spacing:** 0.0150em to 0.0910em — widest on small uppercase nav/label text (0.083–0.091em), tight on body copy
- **Role:** Single weight 400 typeface used for everything — navigation, headlines, body, labels. All-caps headlines and nav with aggressive positive tracking (0.083–0.091em) is the signature move; body copy uses near-zero or slightly positive tracking (0.015–0.028em). Absence of bold/light weights is a deliberate editorial choice: hierarchy is created by size and tracking, never weight contrast.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.78 | — | `--text-caption` |
| body-sm | 12px | 1.78 | — | `--text-body-sm` |
| body | 13px | 1.78 | — | `--text-body` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 10 | 10px | `--spacing-10` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 25 | 25px | `--spacing-25` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 44 | 44px | `--spacing-44` |
| 50 | 50px | `--spacing-50` |
| 54 | 54px | `--spacing-54` |
| 55 | 55px | `--spacing-55` |
| 60 | 60px | `--spacing-60` |
| 123 | 123px | `--spacing-123` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 0px |
| cards | 0px — sharp corners, no rounding on images or content cards |
| images | 0px — full-bleed photography with no corner softening |
| inputs | 0px |
| buttons | 9999px — perfectly circular pill/button treatment |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80-120px
- **Element gap:** 10-16px

## Components

### Dark Cinematic Hero
**Role:** Full-bleed opening section — establishes brand mood through photography

Background: #000000. Car photograph fills the viewport edge-to-edge with no border or radius. Small uppercase label (Racing) at ~11px, #ffffff, letter-spacing 0.091em, positioned above the headline. Display headline (SCUDERIA FERRARI) at ~32-42px, weight 400, #ffffff, all caps, letter-spacing ~0.05em, centered. Below headline: ghost text link with circular arrow button. No padding — content sits over the photograph with no container or surface treatment.

### Navigation Bar
**Role:** Primary site navigation

Background: #181818. Height ~60px. Ferrari prancing horse logo at far left. Nav items: RACING, SPORTS CARS, COLECCIONES, EXPERIENCIAS, ABOUT US — all at ~11px, weight 400, #ffffff, uppercase, letter-spacing 0.091em, wide spacing between items. No dropdowns, no backgrounds, no borders — text floats on the dark bar.

### Circular Arrow CTA
**Role:** Primary and secondary call-to-action button

Border: 1px solid #ffffff, fully circular (border-radius: 9999px). Diameter ~40px. Contains a thin right-pointing arrow icon centered inside. No background fill — ghost/outlined style. Paired with uppercase text link (DESCUBRIR, LEER MÁS) in #ffffff or #000000 at ~11px, letter-spacing 0.091em, positioned to the left of the circle. The text and circle are horizontally aligned, baseline-matched.

### Light Content Section
**Role:** Article or news content block on white canvas

Background: #ffffff. Split layout: left column ~45% with text, right column ~55% with photograph. Heading in all caps, weight 400, ~24-32px, #000000, tight letter-spacing. Body text at ~13px, weight 400, #181818, generous line-height 2.0. Photo on right: edge-to-edge, no radius, no border, no shadow. Vertical centering of text with image. Section padding: ~80-100px top and bottom.

### Text-Only Ghost Link
**Role:** Secondary navigation or inline action

No background, no border, no underline. Uppercase text at ~11-12px, #000000 or #181818, letter-spacing 0.083-0.091em. May be paired with circular arrow CTA. Used for VER TODAS LAS NOTICIAS, LEER MÁS, DESCUBRIR actions.

### Carousel Pagination Dots
**Role:** Slide position indicator

Horizontal row of small circular dots (~8px diameter). Active dot: filled #d40000 or #000000 (ferrari red may appear here as the sole chromatic exception). Inactive dots: hollow or low-opacity #8f8f8f. Dots spaced ~10px apart, centered below the content. No numbers, no progress bar.

### Full-Bleed Editorial Image
**Role:** Photographic content showcase

Edge-to-edge placement with 0px border-radius. No shadow, no border, no caption overlay. Images are always dark, atmospheric, and high-contrast — photographed in studio or cinematic environments. The image is the surface; the interface provides no frame.

### Two-Column Split Section
**Role:** Standard content layout pairing text and image

50/50 or 45/55 split. Left: text block with headline + body + CTA, right: photograph. Generous gutter of ~40-60px between columns. On mobile, stacks vertically with image below text. No background color change between sections — flow is seamless white-to-white, with rhythm created by spacing alone.

### Footer Navigation Block
**Role:** Site-wide links and legal information

Background: #181818 or #000000. Link text at ~9-11px, #ffffff or #8f8f8f, uppercase, wide letter-spacing 0.091em. Links arranged in columns or horizontal groups. Hairline 1px border-top in #303030 to separate from content. Social/legal text at 9px caption scale.

### Slide Navigation Arrows
**Role:** Carousel left/right controls

Minimal chevron arrows (‹ ›) positioned at vertical center on left and right edges of the carousel area. No background, no button shape. Color: #000000 on light sections, #ffffff on dark sections. ~20px size, thin stroke. Invisible until hover.

## Do's and Don'ts

### Do
- Use only achromatic colors — black, white, and grayscale — throughout the entire interface. Let photography supply all chromatic energy.
- Set all navigation, labels, and headlines in ALL CAPS with letter-spacing between 0.083em and 0.091em — this wide tracking is the primary signature of the system.
- Use a single typeface at weight 400. Create hierarchy through size and tracking alone, never through bold/light weight contrast.
- Use circular (9999px radius) outlined arrow buttons for all CTAs — a 1px border circle with a thin arrow icon inside, never filled rectangles.
- Let images bleed to edges with 0px border-radius. No frames, no shadows, no rounded corners on photographs.
- Maintain generous vertical rhythm: 80-120px between sections, 10-16px between related elements, 15-20px horizontal padding in text blocks.
- Use #000000 for full-bleed dark stages and #181818 for dark surface layers one step back — create depth through grayscale, not shadow.

### Don't
- Never introduce chromatic UI colors — no red buttons, no blue links, no colored badges. The system is intentionally 0% colorful.
- Never use bold or semibold weights. Weight 400 is the only weight in the system; hierarchy comes from size.
- Never add border-radius to images, cards, or content surfaces. All edges are sharp 0px corners.
- Never use filled rectangular buttons. All CTAs are ghost circular arrow buttons or plain text links.
- Never add drop shadows or box-shadows. Depth is communicated through grayscale layering, never elevation effects.
- Never use decorative gradients. The system is flat — no color transitions, no glows, no blur effects.
- Never crowd the layout. Ferrari's luxury signal is breathing room — if a section feels dense, add 30% more space.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas White | `#ffffff` | Dominant page background for content sections |
| 1 | Pure Black Stage | `#000000` | Full-bleed cinematic hero and feature sections — car photography lives here |
| 2 | Carbon Surface | `#181818` | Navigation bar, dark cards, footer depth |
| 3 | Graphite Surface | `#303030` | Elevated dark elements, subtle structure within dark sections |

## Elevation

The system intentionally avoids drop shadows and box-shadows entirely. Depth is communicated through grayscale surface layering: #000000 (deepest) → #181818 (dark surface) → #303030 (elevated dark) → #ffffff (light canvas). This flat approach keeps all attention on the photography and reinforces the editorial gallery feel — shadows would feel decorative rather than structural in this system.

## Imagery

Photography is the entire visual brand. Images are always dark, high-contrast, cinematic — cars photographed in studios, tunnels, racetracks, and atmospheric environments with dramatic lighting. Treatment: full-bleed, edge-to-edge, 0px border-radius, no frames, no overlays, no duotones. No lifestyle or human photography dominates — the car IS the subject. No illustrations, no icons beyond minimal thin-stroke navigation arrows, no 3D renders, no product mockups. Images carry 80%+ of the visual weight on most pages; text is secondary, supporting the photograph rather than competing with it.

## Layout

Full-bleed page model with no visible max-width container on hero sections — they span edge to edge. Content sections use a max-width of ~1280px centered. The first screen is always a dark cinematic hero: full-viewport car photograph with centered small label → large all-caps headline → ghost arrow CTA. Subsequent sections alternate: white content blocks with text-left/image-right splits at 45/55 ratio, separated by generous 80-120px vertical gaps. Carousels use the full width with edge-positioned chevron arrows and centered dot pagination. Navigation is a single dark bar (60px) with the prancing horse logo left and uppercase text links spread across. The rhythm is deliberately slow and editorial — two or three sections per scroll, never information-dense.

## Agent Prompt Guide

## Quick Color Reference
- Text: #000000 on light sections, #ffffff on dark sections
- Background: #ffffff (light sections), #000000 (dark heroes), #181818 (dark surfaces)
- Border: #303030 on dark, #000000 on light
- Muted text/icons: #8f8f8f
- Accent: none — system is fully achromatic
- primary action: no distinct CTA color

## 3-5 Example Component Prompts

1. **Dark Hero Section**: Full-bleed #000000 background with a high-contrast car photograph filling the viewport. Small uppercase label 'Racing' at 11px, weight 400, #ffffff, letter-spacing 1px. Display headline 'SCUDERIA FERRARI' at 42px, weight 400, #ffffff, all caps, letter-spacing 2px, centered. Below: ghost text link 'DESCUBRIR' at 11px, #ffffff, letter-spacing 1px, paired with a 40px circular outlined button (1px solid #ffffff, border-radius 9999px) containing a right-arrow icon.

2. **Navigation Bar**: 60px height, #181818 background. Ferrari prancing horse logo at 24px on the far left. Nav items (RACING, SPORTS CARS, COLECCIONES) at 11px, weight 400, #ffffff, all caps, letter-spacing 1px, spaced 30px apart. No backgrounds, no borders, no dropdowns.

3. **News Content Block**: White (#ffffff) background, 1280px max-width centered. Two-column split: left 45% text, right 55% image. Heading 'FERRARI AT IMOLA' at 28px, weight 400, #000000, all caps, letter-spacing 1.5px. Body text at 13px, weight 400, #181818, line-height 2.0. Right column: full-bleed dark photograph, 0px border-radius, no border or shadow. Below text: 'LEER MÁS' ghost link at 11px with 36px circular arrow button (1px solid #000000).

4. **Carousel Pagination**: Three small dots (8px diameter) centered horizontally. Active dot: filled #000000. Inactive dots: #8f8f8f fill. 10px gap between dots. No numbers, no progress bar.

5. **Footer Block**: #181818 background, full-width. Links in columns at 9px, weight 400, #ffffff, all caps, letter-spacing 0.8px. 1px top border in #303030. Social icons as thin-stroke line icons in #8f8f8f.

## Similar Brands

- **Aston Martin** — Same editorial luxury car website approach — full-bleed dark cinematic heroes, all-caps navigation, ghost outlined controls, monochromatic UI letting car photography dominate
- **Porsche** — Shared minimal monochrome interface language with generous whitespace, uppercase tracked navigation, and photography-first content blocks
- **Lamborghini** — Dark hero + white content section pattern, sharp-cornered full-bleed photography, restrained color palette that defers to the vehicle's own color
- **Bang & Olufsen** — Luxury brand that strips its interface to pure black and white with zero chromatic accents, using product photography as the sole visual color source

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-pure-white: #ffffff;
  --color-pure-black: #000000;
  --color-carbon-black: #181818;
  --color-graphite: #303030;
  --color-steel-gray: #8f8f8f;

  /* Typography — Font Families */
  --font-body-font: 'Body-Font', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ferrari-custom-sans-serif: 'Ferrari custom sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.78;
  --text-body-sm: 12px;
  --leading-body-sm: 1.78;
  --text-body: 13px;
  --leading-body: 1.78;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-123: 123px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80-120px;
  --element-gap: 10-16px;

  /* Named Radii */
  --radius-tags: 0px;
  --radius-cards: 0px — sharp corners, no rounding on images or content cards;
  --radius-images: 0px — full-bleed photography with no corner softening;
  --radius-inputs: 0px;
  --radius-buttons: 9999px — perfectly circular pill/button treatment;

  /* Surfaces */
  --surface-canvas-white: #ffffff;
  --surface-pure-black-stage: #000000;
  --surface-carbon-surface: #181818;
  --surface-graphite-surface: #303030;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-pure-white: #ffffff;
  --color-pure-black: #000000;
  --color-carbon-black: #181818;
  --color-graphite: #303030;
  --color-steel-gray: #8f8f8f;

  /* Typography */
  --font-body-font: 'Body-Font', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-ferrari-custom-sans-serif: 'Ferrari custom sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.78;
  --text-body-sm: 12px;
  --leading-body-sm: 1.78;
  --text-body: 13px;
  --leading-body: 1.78;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-123: 123px;
}
```