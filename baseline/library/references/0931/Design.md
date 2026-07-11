# Amrit Palace — Style Reference
> Candlelit menu under smoked glass. A two-typeface system where whisper-weight serif headlines hover above a warm, compact UI lit by copper accents.

**Theme:** light

Amrit Palace uses a dim-lit fine-dining language: deep charcoal canvases, warm cream and sand surfaces, and a single copper accent that glows like candle light. Display headlines speak in a ultra-light variable serif with aggressively tight tracking and sub-1.0 line-heights — type that feels engraved rather than set, evoking menus and estate signage. The body is handled by a geometric sans (Satoshi) in restrained 500/700 weights, never loud. Spacing is compact and the geometry is almost entirely sharp-cornered (3px radius maximum), letting photography and negative space do the emotional work. The palette moves in warm earth tones — no cool grays, no pure whites, no decorative gradients — giving the interface a candlelit, material-rich atmosphere.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Warm Sand | `#d8cbb8` | `--color-warm-sand` | Page canvas, review section background — the dominant neutral carrying all light-mode surfaces |
| Charcoal | `#2c2c2c` | `--color-charcoal` | Primary text, hero overlays, dark section backgrounds, hairline rules — near-black with a slight warm bias |
| Smoke | `#dfdad5` | `--color-smoke` | Light surface tint, card backgrounds on cream sections, subtle text on dark |
| Taupe | `#b6ab9c` | `--color-taupe` | Borders, dividers, outlined button strokes — warm gray separating structural elements |
| Greige | `#bfb4a3` | `--color-greige` | Mid-tone surface for secondary panels, muted text on light backgrounds |
| Obsidian | `#292622` | `--color-obsidian` | Deepest dark for high-contrast text and dark hero image washes — warm-toned black |
| Ember | `#d49653` | `--color-ember` | Accent — Google star fill, review rating highlight, decorative copper warmth; the only chromatic color in the system |
| Stone | `#978e81` | `--color-stone` | Mid-neutral for tertiary text, inactive labels, breadcrumb tone |
| Bark | `#615b53` | `--color-bark` | Dark warm neutral for footer/section transitions and muted body text on light |

## Tokens — Typography

### TT Ramillas Variable — Display and heading serif — whisper-weight at massive sizes (50–115px) with line-heights below 1.0 and tracking as tight as -0.04em. This is the signature voice: a menu-cover elegance that says luxury through restraint, not boldness. The 0.80–0.90 line-heights on huge sizes make lines almost touch, creating a sculpted, engraved feel. · `--font-tt-ramillas-variable`
- **Substitute:** Playfair Display, DM Serif Display, Cormorant Garamond
- **Weights:** 300
- **Sizes:** 22px, 26px, 50px, 65px, 69px, 115px
- **Line height:** 0.80, 0.85, 0.90, 1.00, 1.20
- **Letter spacing:** -0.04em at 115px, -0.035em at 69px, -0.03em at 50px, -0.006em at 22px
- **OpenType features:** `"liga" on, "dlig" on`
- **Role:** Display and heading serif — whisper-weight at massive sizes (50–115px) with line-heights below 1.0 and tracking as tight as -0.04em. This is the signature voice: a menu-cover elegance that says luxury through restraint, not boldness. The 0.80–0.90 line-heights on huge sizes make lines almost touch, creating a sculpted, engraved feel.

### Satoshi — UI and body sans — compact 12–15px for navigation, labels, buttons, and review metadata. The 500 weight is the default; 700 carries emphasis. The 42px and 199px outliers represent decorative large numerals/accents. Tracking is nearly neutral (-0.01em to +0.01em), keeping the sans functional rather than decorative. · `--font-satoshi`
- **Substitute:** Inter, General Sans, Satoshi (open-source)
- **Weights:** 500, 700
- **Sizes:** 12px, 13px, 14px, 15px, 42px, 199px
- **Line height:** 0.80, 1.00, 1.30, 1.40
- **Letter spacing:** -0.04em at 199px, -0.016em at 42px, -0.01em at 14px, +0.01em at 12px
- **Role:** UI and body sans — compact 12–15px for navigation, labels, buttons, and review metadata. The 500 weight is the default; 700 carries emphasis. The 42px and 199px outliers represent decorative large numerals/accents. Tracking is nearly neutral (-0.01em to +0.01em), keeping the sans functional rather than decorative.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.3 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.4 | -0.14px | `--text-body-sm` |
| heading-sm | 26px | 1.2 | -0.16px | `--text-heading-sm` |
| subheading | 42px | 1 | -0.67px | `--text-subheading` |
| heading | 50px | 0.9 | -1.5px | `--text-heading` |
| heading-lg | 69px | 0.85 | -2.42px | `--text-heading-lg` |
| display | 115px | 0.8 | -4.6px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 17 | 17px | `--spacing-17` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 42 | 42px | `--spacing-42` |
| 92 | 92px | `--spacing-92` |
| 206 | 206px | `--spacing-206` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 3px |
| cards | 3px |
| inputs | 3px |
| buttons | 3px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 20px
- **Element gap:** 16px

## Components

### Dark Hero Section
**Role:** Full-bleed atmospheric opener

Full-viewport dark image (#2c2c2c/#292622 wash) with centered serif headline in TT Ramillas 300 at 115px, white (#dfdad5) color, letter-spacing -4.6px, line-height 0.80. Overline text in Satoshi 500 at 12px spaced tracking +0.12em, uppercase, positioned left/right of the headline as a flanking label pair. No buttons in the hero — atmosphere only.

### Image Overlay Section
**Role:** Text-over-image content block

Full-bleed warm-toned food photography with dark scrim. Headline in TT Ramillas 300 at 69px, #dfdad5, letter-spacing -2.42px, line-height 0.85, left-aligned. Body text in Satoshi 500 at 15px, #dfdad5, max-width ~480px. Ghost button (see Outlined Action Button) below body copy.

### Outlined Action Button
**Role:** Primary interactive element — ghost/outlined style

Transparent background, 1px border in #d8cbb8, text in #d8cbb8 (Satoshi 500, 12px, tracking +0.01em, uppercase). Padding 10px 20px. Border-radius 3px. This is the only button style — no filled buttons exist in the system. The outlined treatment keeps the interface quiet and editorial.

### Review Carousel Card
**Role:** Social proof tile

Light cream surface (#dfdad5) on sand canvas (#d8cbb8). Border-radius 3px. Padding 20px. Five gold stars (#d49653) in a row at the top, followed by review body text in Satoshi 500 at 14px, #2c2c2c. Source label (Yelp/Reddit/MapQuest) in Satoshi 500 at 12px, #978e81, positioned top-right. Author name in Satoshi 700 at 12px, #2c2c2c, at the bottom.

### Google Rating Widget
**Role:** Aggregate review score display

Horizontal card with five #d49653 stars, Google 'G' logo, score '4.7' in TT Ramillas 300 at 42px, superscript '/5', and 'Excellent / Based on 3,576 reviews' label in Satoshi 500 at 12px #2c2c2c. Light surface (#dfdad5), 3px radius.

### Navigation Bar
**Role:** Top-level site navigation

Dark transparent bar over hero. Logo at far left, primary nav links (Satoshi 500, 12px, #dfdad5, tracking +0.01em, uppercase) centered-left, secondary controls (Menu, Order Now, cart icon in a #d49653 square) at far right. No visible background fill — text floats on the dark image.

### Section Headline Block
**Role:** Editorial section opener on light sections

TT Ramillas 300 at 69px, #2c2c2c, letter-spacing -2.42px, line-height 0.85, left-aligned. Accompanied by a Google Rating Widget positioned right-aligned on the same row. No subheading — the headline stands alone with maximum whitespace below before content.

### Overline Flank Label
**Role:** Decorative label paired with display text

Satoshi 500 at 12px, uppercase, tracking +0.01em, #d8cbb8 (on dark) or #2c2c2c (on light). Flanks a headline horizontally (e.g. 'SERVING CENTRAL FLORIDA' left, 'ESTABLISHED 1996' right of a centered display line). A signature layout device that frames the serif headline like a book jacket.

### Body Paragraph
**Role:** Supporting editorial text

Satoshi 500 at 15px, #2c2c2c on light sections or #d8cbb8 on dark. Line-height 1.4, max-width 480–560px for readability. No link color variation — inline links inherit text color with a 1px underline in #d49653.

## Do's and Don'ts

### Do
- Use TT Ramillas Variable at weight 300 exclusively for all display and heading text — never bold the serif.
- Set line-heights below 1.0 (0.80–0.90) on all display sizes 50px and above to create the engraved, menu-cover feel.
- Keep corner radius at 3px everywhere — the system is sharp-cornered by design, allowing warmth to come from color and photography, not shape.
- Use #d8cbb8 for all text on dark sections and #2c2c2c for all text on light sections — never invert or use pure white/black.
- Apply the flanking overline label pattern (left + right small caps flanking a centered headline) for editorial section openers.
- Let the Ember (#d49653) appear only on Google stars, review rating highlights, and the cart icon — treat it as functional punctuation, not decoration.
- Pair the outlined action button (1px #d8cbb8 border, transparent fill) as the single button style — do not introduce filled or colored variants.

### Don't
- Never use a filled colored button — the system is ghost/outlined only.
- Do not introduce gradients, drop shadows, or glow effects — the design is flat and atmospheric.
- Do not round corners beyond 3px — avoid pill shapes, large radii, or circular elements.
- Do not use pure white (#ffffff) or pure black (#000000) — all whites are warm (#dfdad5/#d8cbb8), all blacks are warm (#2c2c2c/#292622).
- Do not set display type in Satoshi — the sans is for UI and body only; display is always TT Ramillas 300.
- Do not use line-heights of 1.5+ on display sizes — the tight 0.80–0.90 leading is signature.
- Do not add multiple accent colors — Ember (#d49653) is the only chromatic color; do not introduce blues, greens, or other hues for variety.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Page Canvas | `#d8cbb8` | Default light-mode background — warm sand tone |
| 2 | Card Surface | `#dfdad5` | Lighter cream for elevated cards and review tiles |
| 3 | Dark Section | `#2c2c2c` | Hero and dark mode sections — warm near-black |
| 4 | Deep Dark | `#292622` | Image overlay and deepest contrast layer |
| 5 | Accent Wash | `#d49653` | Copper accent for stars, highlights, decorative emphasis |

## Imagery

Full-bleed photography dominates: dim-lit restaurant interiors with warm tungsten lighting, close-up food shots on dark wood, and shallow depth-of-field table details. Images are treated with a dark warm overlay (charcoal-to-black gradient wash) to unify them with the type. No illustrations, no icons beyond a small cart square, no abstract graphics. Photography carries 70%+ of the visual real estate on the hero and content sections. The color treatment is consistently warm — no cool or desaturated editorial styling.

## Layout

Full-bleed sections stacked vertically, alternating between dark (hero, image overlay) and light (sand-toned review section). Max-width 1200px for contained content blocks like the review carousel. The hero is a full-viewport dark image with centered display text flanked by overline labels. Content sections use generous vertical padding (60–80px) with left-aligned headlines. The review section uses a horizontally scrollable card row with no visible scrollbar. Navigation is a minimal top bar floating over the hero with no background fill.

## Agent Prompt Guide

**Quick Color Reference**
- text: #2c2c2c (on light) / #d8cbb8 (on dark)
- background: #d8cbb8
- card surface: #dfdad5
- border: #b6ab9c
- accent / stars: #d49653
- primary action: no distinct CTA color

**3-5 Example Component Prompts**

1. Create a dark hero section: full-bleed dark image with charcoal scrim (#2c2c2c overlay). Centered display headline 'FLAVORS THAT STAY' in TT Ramillas Variable weight 300, 115px, #dfdad5, letter-spacing -4.6px, line-height 0.80. Flank the headline with two overline labels in Satoshi 500, 12px, uppercase, tracking +0.12em, #d8cbb8 — one left ('SERVING CENTRAL FLORIDA'), one right ('ESTABLISHED 1996').

2. Create a review card on a light section: 3px border-radius, 20px padding, surface #dfdad5 on canvas #d8cbb8. Five stars in #d49653 across the top. Review body text in Satoshi 500, 14px, #2c2c2c, line-height 1.4. Source label top-right in Satoshi 500, 12px, #978e81. Author name bottom-left in Satoshi 700, 12px, #2c2c2c.

3. Create a section opener block: left-aligned headline in TT Ramillas Variable weight 300, 69px, #2c2c2c, letter-spacing -2.42px, line-height 0.85. Right-aligned Google rating widget (five #d49653 stars, score 4.7 in TT Ramillas 300 at 42px, 'Excellent' label in Satoshi 500 at 12px). Light sand background (#d8cbb8). No subheading, no body text — just headline and rating on the same row with 64px vertical padding above and below.

4. Create a ghost action button: transparent background, 1px solid border in #d8cbb8, text 'About Us' in Satoshi 500, 12px, uppercase, tracking +0.01em, #d8cbb8. Padding 10px 20px. Border-radius 3px. This is the only button style in the system.

5. Create a body text block on a dark image section: left-aligned, max-width 480px. Supporting text in Satoshi 500, 15px, #d8cbb8, line-height 1.4. Headline above in TT Ramillas Variable weight 300, 69px, #dfdad5, letter-spacing -2.42px, line-height 0.85. Ghost button below body text using #d8cbb8 border and text.

## Similar Brands

- **Eleven Madison Park** — Same dim-lit luxury hospitality language — full-bleed warm photography, whisper-weight serif headlines, and a restrained single-accent palette that lets imagery dominate.
- **Maison Premiere** — Warm earth-tone palette (sand, cream, charcoal), ultra-light serif display type with tight tracking, and editorial overline labels flanking centered headlines.
- **Le Bernardin** — Dark immersive hero photography with engraved serif display type, minimal UI chrome, and a single warm metallic accent color used only for functional highlights.
- **SAGA** — Compact two-typeface system pairing a variable serif display with a geometric sans body, warm sand canvas, and 3px-radius geometry throughout.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-warm-sand: #d8cbb8;
  --color-charcoal: #2c2c2c;
  --color-smoke: #dfdad5;
  --color-taupe: #b6ab9c;
  --color-greige: #bfb4a3;
  --color-obsidian: #292622;
  --color-ember: #d49653;
  --color-stone: #978e81;
  --color-bark: #615b53;

  /* Typography — Font Families */
  --font-tt-ramillas-variable: 'TT Ramillas Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.14px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.16px;
  --text-subheading: 42px;
  --leading-subheading: 1;
  --tracking-subheading: -0.67px;
  --text-heading: 50px;
  --leading-heading: 0.9;
  --tracking-heading: -1.5px;
  --text-heading-lg: 69px;
  --leading-heading-lg: 0.85;
  --tracking-heading-lg: -2.42px;
  --text-display: 115px;
  --leading-display: 0.8;
  --tracking-display: -4.6px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-42: 42px;
  --spacing-92: 92px;
  --spacing-206: 206px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 20px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-sm: 3px;

  /* Named Radii */
  --radius-tags: 3px;
  --radius-cards: 3px;
  --radius-inputs: 3px;
  --radius-buttons: 3px;

  /* Surfaces */
  --surface-page-canvas: #d8cbb8;
  --surface-card-surface: #dfdad5;
  --surface-dark-section: #2c2c2c;
  --surface-deep-dark: #292622;
  --surface-accent-wash: #d49653;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-warm-sand: #d8cbb8;
  --color-charcoal: #2c2c2c;
  --color-smoke: #dfdad5;
  --color-taupe: #b6ab9c;
  --color-greige: #bfb4a3;
  --color-obsidian: #292622;
  --color-ember: #d49653;
  --color-stone: #978e81;
  --color-bark: #615b53;

  /* Typography */
  --font-tt-ramillas-variable: 'TT Ramillas Variable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-satoshi: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.14px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.16px;
  --text-subheading: 42px;
  --leading-subheading: 1;
  --tracking-subheading: -0.67px;
  --text-heading: 50px;
  --leading-heading: 0.9;
  --tracking-heading: -1.5px;
  --text-heading-lg: 69px;
  --leading-heading-lg: 0.85;
  --tracking-heading-lg: -2.42px;
  --text-display: 115px;
  --leading-display: 0.8;
  --tracking-display: -4.6px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-42: 42px;
  --spacing-92: 92px;
  --spacing-206: 206px;

  /* Border Radius */
  --radius-sm: 3px;
}
```