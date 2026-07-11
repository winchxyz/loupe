# Wispr Flow — Style Reference
> cream paper with deep teal ink and a lavender highlighter.

**Theme:** mixed

Wispr Flow operates as an editorial-meets-tech aesthetic: a warm cream canvas (#ffffeb) hosts a refined duotone of deep teal and soft lavender, with the design toggling between bright open sections and near-black dramatic ones. Typography is the signature — EB Garamond serif at 64–120px carries every hero headline with tight negative tracking, while Figtree sans-serif handles all UI, body, and navigation text at compact sizes. Buttons are soft lavender pills, borders are hairline-dark, and corners are generously rounded (14px on controls, 32px on cards, fully rounded on decorative orbs). The system is restrained in palette but expressive in type pairing — a newspaper serif shouting across a modern interface.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream Paper | `#ffffeb` | `--color-cream-paper` | Primary page canvas, card surfaces, light section backgrounds — the warm ivory that defines the entire light theme |
| Midnight Ink | `#1a1a1a` | `--color-midnight-ink` | Primary text, dark section backgrounds, hairline borders, nav dividers — near-black rather than pure black for warmth |
| Pure Black | `#000000` | `--color-pure-black` | Decorative SVG fills and shadow color — not a text or surface token |
| White | `#ffffff` | `--color-white` | Text on dark surfaces, nav bar background, badge fills, inverse button text |
| Stone Mist | `#e4e4d0` | `--color-stone-mist` | Subtle borders on the cream canvas, nav background variant, muted surface tint — barely-there warm gray that separates without shouting |
| Graphite Veil | `#8a8a80` | `--color-graphite-veil` | Medium-contrast borders, control outlines, and structural separators. |
| Smoke | `#5f5f59` | `--color-smoke` | Tertiary text, low-emphasis captions, less prominent body copy |
| Charcoal | `#222222` | `--color-charcoal` | Nav borders, button borders, dark UI chrome — one step lighter than Midnight Ink for layered dark elements |
| Charcoal Mist | `#333333` | `--color-charcoal-mist` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Deep Forest Teal | `#034f46` | `--color-deep-forest-teal` | Announcement banner background, dark testimonial band, badge fills, brand-defining accent section — rich teal that anchors visual weight |
| Lavender Whisper | `#f0d7ff` | `--color-lavender-whisper` | Primary CTA button background, headline underline accent, highlight washes — the soft purple that signals actionable moments without aggression |
| Amber Pulse | `#ffa946` | `--color-amber-pulse` | Decorative accent, badge highlight, illustration warm fill — small dose of warmth against the teal-and-lavender duotone |

## Tokens — Typography

### Figtree — All UI text — body, navigation, buttons, labels, captions, badge text, footer. Weight 500 for nav items and labels, 600 for button text, 700 for emphasized inline text. Compact line-heights (0.95–1.00) on larger sizes give headings a tight controlled feel. · `--font-figtree`
- **Substitute:** Inter, DM Sans, Manrope
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 20px, 22px, 24px, 32px
- **Line height:** 1.00, 1.30, 0.95
- **Role:** All UI text — body, navigation, buttons, labels, captions, badge text, footer. Weight 500 for nav items and labels, 600 for button text, 700 for emphasized inline text. Compact line-heights (0.95–1.00) on larger sizes give headings a tight controlled feel.

### EB Garamond — Display and hero headlines — used at 64–120px for section titles ('Don't type, just speak', '4x faster than typing') and 32–48px for sub-display. The serif choice is the brand's most distinctive decision: an editorial voice inside a tech product. Negative letter-spacing tightens the classical letterforms into a modern headline block. · `--font-eb-garamond`
- **Substitute:** Cormorant Garamond, Playfair Display, Lora
- **Weights:** 400
- **Sizes:** 32px, 48px, 64px, 120px
- **Line height:** 0.85–1.30
- **Letter spacing:** -0.0500em at 64px, -0.0700em at 48px, -0.1300em at 120px, -0.0300em at 32px
- **OpenType features:** `"liga" on, "dlig" on`
- **Role:** Display and hero headlines — used at 64–120px for section titles ('Don't type, just speak', '4x faster than typing') and 32–48px for sub-display. The serif choice is the brand's most distinctive decision: an editorial voice inside a tech product. Negative letter-spacing tightens the classical letterforms into a modern headline block.

### Apple Color Emoji — Apple Color Emoji — detected in extracted data but not described by AI · `--font-apple-color-emoji`
- **Weights:** 400
- **Sizes:** 72px
- **Line height:** 1.3
- **Role:** Apple Color Emoji — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.3 | — | `--text-caption` |
| body | 16px | 1.3 | — | `--text-body` |
| subheading | 20px | 1.3 | — | `--text-subheading` |
| heading-sm | 24px | 1 | — | `--text-heading-sm` |
| heading | 32px | 1 | — | `--text-heading` |
| heading-lg | 48px | 0.95 | -0.07px | `--text-heading-lg` |
| display | 64px | 0.95 | -0.05px | `--text-display` |
| display-xl | 120px | 0.85 | -0.13px | `--text-display-xl` |

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
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 104 | 104px | `--spacing-104` |
| 128 | 128px | `--spacing-128` |
| 168 | 168px | `--spacing-168` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 14px |
| cards | 32px |
| badges | 1000px |
| images | 40px |
| buttons | 14px |
| smallBadges | 8px |
| decorativeOrbs | 1600px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 32px
- **Element gap:** 8-16px

## Components

### Primary CTA Button (Lavender)
**Role:** The signature action — download, get started, primary conversion

Filled with Lavender Whisper (#f0d7ff), Midnight Ink (#1a1a1a) text, Figtree weight 600 at 14–16px. Rounded 14px. Padding 10px 18px. Includes Apple logo icon prefix. 1px solid Midnight Ink border for definition against cream.

### Ghost Outlined Button
**Role:** Secondary action — alternative download, watch demo, learn more

Transparent fill on cream surfaces; Midnight Ink (#1a1a1a) 1px border, Midnight Ink text at Figtree 600/14px. Rounded 14px. On dark sections: white border, white text.

### Navigation Bar
**Role:** Sticky top navigation with brand, links, and dual CTAs

White (#ffffff) background, 1px Stone Mist (#e4e4d0) border, rounded 14px (pill-shaped outer container). Internal padding 8–12px. Logo 'Flow' with bar-chart icon in Midnight Ink. Nav links in Figtree 500/14px. Two CTAs: outlined 'Flow for Android' (dark border) and lavender 'Download for macOS'.

### Platform Pill Button
**Role:** Section header pills indicating available platforms

Transparent fill, 1px white or Midnight Ink border, rounded 1000px (fully rounded). Figtree 500/14px text. Contains platform icon + name (Mac, Windows, iPhone, Android).

### Announcement Banner
**Role:** Top-of-page promotional strip with case study link

Full-bleed Deep Forest Teal (#034f46) background, white text at Figtree 500/14px. Centered single-line message with right-arrow link affordance. No border, no radius — spans viewport edge to edge.

### Dark Feature Section
**Role:** Full dark section showcasing the product on multiple platforms

Midnight Ink (#1a1a1a) background spanning full viewport width. White text for headlines (Figtree 600/32–48px) and body. White ghost 'Watch in action' button. Phone mockup floats right with dark UI inside. Curved arc of colorful app icons sweeps across the section.

### Testimonial Logo Strip
**Role:** Social proof band with client logos

Deep Forest Teal (#034f46) background, white text headline above logos. Logos rendered in white at varying sizes. Character illustration (flat illustration style) on left edge. Generous vertical padding 48–64px.

### Hero Section (Light)
**Role:** Primary above-the-fold section with headline, subtext, and CTA

Cream Paper (#ffffeb) background, centered text block. Display headline in EB Garamond 64–120px with two-tone treatment: first half in Graphite Veil (#8a8a80), second half in Midnight Ink. Subtext in Figtree 400/18–20px Midnight Ink. Lavender CTA centered below. Decorative circular text path and waveform orb elements flank the headline.

### Feature Card
**Role:** Product feature highlight cards in grid layouts

Cream Paper or White background, rounded 32px, 1px Stone Mist border. Padding 32px. Headline in Figtree 600/20–24px, body in 400/16px. May contain a product screenshot or illustration at 40px radius.

### Decorative Orb Element
**Role:** Floating circular UI elements that animate and orbit text

1600px radius (fully circular). Dark fill (#1a1a1a) or lavender fill. Contains waveform visualization, circular text path, or app icon. Functions as a brand-mark moment, not a functional component.

### Badge / Tag
**Role:** Small status indicators, version tags, category labels

Rounded 1000px (pill shape) or 8px for square tags. 8–12px vertical padding, 12–16px horizontal. Figtree 500/12–14px. Filled variants: Deep Forest Teal background with white text. Outlined: border with colored text.

### Underline Accent
**Role:** Decorative highlight under key words in display headlines

Lavender Whisper (#f0d7ff) rounded rectangle or stroke beneath a word in the headline. 4–6px height, extends slightly beyond text width. Applied to power words like 'faster' in '4x faster than typing'.

## Do's and Don'ts

### Do
- Use EB Garamond exclusively for display headlines at 48px and above — it is the brand's most recognizable choice and should not be substituted with sans-serif at display sizes
- Apply Lavender Whisper (#f0d7ff) for the single primary CTA on any view — never use it for more than one action per screen
- Set body text in Figtree at 16px/1.3 — the compact line-height is intentional and contributes to the dense editorial feel
- Toggle between cream (#ffffeb) and Midnight Ink (#1a1a1a) for full section backgrounds — the contrast between light and dark bands is structural, not decorative
- Round all buttons, nav, and controls at 14px — this is the system's control radius and creates visual consistency across the interface
- Use 64–80px vertical gaps between major sections to let the serif headlines breathe
- Render headlines in two tones (Graphite Veil + Midnight Ink) for editorial impact on hero sections
- Include a 1px Midnight Ink border on lavender buttons to define them against the cream background

### Don't
- Do not use pure black (#000000) for text or surfaces — Midnight Ink (#1a1a1a) is the correct dark token for warmth
- Do not apply the serif (EB Garamond) to body text, UI labels, or anything below 32px — Figtree owns the functional text layer
- Do not use Lavender Whisper for large filled backgrounds, banners, or section backgrounds — it is a CTA accent, not a surface
- Do not place white or light text on Lavender Whisper — contrast is insufficient; always pair lavender with Midnight Ink text
- Do not introduce additional accent hues (blues, greens, reds) for buttons or states — the system is a duotone plus amber, and new chromatic colors break the palette
- Do not use sharp corners (0–4px radius) on cards, buttons, or nav — the system is consistently rounded at 14px+
- Do not stack multiple dark sections consecutively without a cream break between them — the light/dark alternation is rhythmic and structural
- Do not use display sizes below 48px or above 120px — EB Garamond's tracking is calibrated for that range

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream Paper | `#ffffeb` | Base page canvas — the dominant light surface across hero, feature, and CTA sections |
| 1 | White Nav Surface | `#ffffff` | Navigation bar and elevated card surfaces that need to lift off the cream |
| 2 | Stone Mist Surface | `#e4e4d0` | Muted secondary surfaces, subtle panel backgrounds on cream |
| 3 | Lavender Wash | `#f0d7ff` | Accent surface for CTA buttons and highlight zones |
| 4 | Deep Forest Band | `#034f46` | Dark accent section — announcement bars, testimonial/logo strips |
| 5 | Midnight Ink | `#1a1a1a` | Full dark sections — feature showcases with phone mockups and app icon arcs |

## Elevation

- **Floating Navigation Bar:** `0 2px 8px rgba(0,0,0,0.08) — subtle lift to separate the white pill from cream/dark backgrounds`

## Imagery

Illustration-driven with selective product mockup photography. The hero uses a flat geometric character illustration (woman with oversized binoculars) and decorative circular text paths. Dark sections feature a phone mockup with dark UI, surrounded by a sweeping arc of 15+ colorful third-party app icons (Slack, Notion, Gmail, GitHub, Linear, etc.) that curve across the dark background. No lifestyle photography. Logos appear as white marks on teal bands. Illustrations are flat, brand-colored (orange, red, teal), and function as editorial accents rather than explanatory diagrams. The visual language is more 'design publication' than 'SaaS product page' — text and type carry the weight, imagery punctuates.

## Layout

Max-width 1200px centered content with full-bleed colored bands. The page alternates between cream and dark sections as its primary structural device. Hero is centered single-column with flanking decorative orbs. Dark feature section uses asymmetric two-column: text-left, phone-mockup-right with a diagonal app-icon arc connecting them. Testimonial band is full-bleed teal with centered logo strip. Generous 64–80px section gaps create breathing room. Navigation is a floating white pill at the top of each section, rounded 14px, with a thin border. Content is never crammed — the layout prioritizes typographic impact over information density.

## Agent Prompt Guide

**Quick Color Reference**
- Canvas: #ffffeb (cream)
- Dark surface: #1a1a1a (midnight ink)
- Text primary: #1a1a1a
- Text secondary: #8a8a80 (graphite veil)
- Border: #1a1a1a or #e4e4d0 (stone mist)
- Accent: #f0d7ff (lavender whisper)
- primary action: #f0d7ff (filled action)

**Example Component Prompts**

1. Build a hero section: cream canvas (#ffffeb), centered text. Headline at 64px EB Garamond weight 400, two-tone — first half #8a8a80, second half #1a1a1a, letter-spacing -0.05em. Subtext at 18px Figtree 400 in #1a1a1a. Lavender CTA button (#f0d7ff fill, #1a1a1a border, #1a1a1a text, 14px radius, 10px 18px padding, Figtree 600/14px). 80px vertical padding top and bottom.

2. Build a ghost outlined button: transparent fill, 1px #1a1a1a border, 14px radius, 10px 18px padding, text in Figtree 600/14px #1a1a1a. Use for secondary actions like 'Watch in action' or 'Try Flow'.

3. Build a navigation bar: white (#ffffff) background, 14px radius, 1px #e4e4d0 border, padding 8px 12px internally. Brand mark 'Flow' with bar-chart icon in Figtree 600/16px #1a1a1a. Nav links in Figtree 500/14px #1a1a1a. Right side: outlined 'Flow for Android' (1px #1a1a1a border) and lavender 'Download for macOS' button.

4. Build a dark feature section: #1a1a1a background spanning full width. Two-column layout — left: headline in Figtree 600/32px white, body in Figtree 400/16px #8a8a80, white ghost 'Watch in action' button. Right: phone mockup with dark UI, surrounded by curved arc of colorful app icons. 80px vertical padding.

5. Build a testimonial logo band: full-bleed #034f46 background. Centered headline in white Figtree 500/16px. Row of 6–8 white client logos (Groupon, Vercel, Replit, Nuuly, Warp, Rivian) at consistent height. Flat character illustration on the left edge. 48px vertical padding.

## Typographic Signature

The EB Garamond + Figtree pairing is the design system's most load-bearing decision. EB Garamond is a Renaissance-era serif with high contrast and calligraphic terminals — at 64–120px with negative tracking, it reads as editorial, premium, and human. It contrasts deliberately with the geometric Figtree sans-serif that handles all functional text. This split mirrors magazine design: serif for the 'story', sans for the 'interface'. Never merge these into a single typeface system. Display sizes require serif; UI sizes require sans. The two-tone headline treatment (Graphite Veil for the setup, Midnight Ink for the punch) adds a second axis of typographic hierarchy beyond size and weight.

## Section Rhythm

The page alternates cream → dark → cream → teal-band → cream in a deliberate rhythm. Each full-bleed color band is a breathing moment that resets the reader's eye. Dark sections are reserved for product demonstration (phone mockup, app arc). Teal sections are reserved for social proof (logos, testimonials). Cream sections carry the editorial headlines and feature descriptions. An AI agent should treat this 3-state color rhythm (cream/dark/teal) as a layout primitive and assign new content sections to one of these three modes based on their function.

## Similar Brands

- **Linear** — Same editorial-meets-tech aesthetic with serif display headlines and a restrained cream/dark palette, though Linear uses a cooler cream and lacks the lavender accent
- **Stripe** — Similar generous spacing, rounded controls, and duotone accent strategy with a single warm color punctuating a neutral canvas
- **Notion** — Comfortable density, cream-toned warmth, and a preference for borders over shadows to define surface boundaries
- **Pitch** — Editorial typography-led layout with alternating light/dark sections and a single soft accent color for CTAs
- **Arc browser** — Cream canvas, playful serif/sans pairing, and a lavender-to-teal accent palette that signals creative rather than corporate

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-cream-paper: #ffffeb;
  --color-midnight-ink: #1a1a1a;
  --color-pure-black: #000000;
  --color-white: #ffffff;
  --color-stone-mist: #e4e4d0;
  --color-graphite-veil: #8a8a80;
  --color-smoke: #5f5f59;
  --color-charcoal: #222222;
  --color-charcoal-mist: #333333;
  --color-deep-forest-teal: #034f46;
  --color-lavender-whisper: #f0d7ff;
  --color-amber-pulse: #ffa946;

  /* Typography — Font Families */
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-eb-garamond: 'EB Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-color-emoji: 'Apple Color Emoji', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1;
  --text-heading: 32px;
  --leading-heading: 1;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: -0.07px;
  --text-display: 64px;
  --leading-display: 0.95;
  --tracking-display: -0.05px;
  --text-display-xl: 120px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -0.13px;

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
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-168: 168px;
  --spacing-224: 224px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 32px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 80px;
  --radius-full-3: 992px;
  --radius-full-4: 1000px;
  --radius-full-5: 1600px;

  /* Named Radii */
  --radius-nav: 14px;
  --radius-cards: 32px;
  --radius-badges: 1000px;
  --radius-images: 40px;
  --radius-buttons: 14px;
  --radius-smallbadges: 8px;
  --radius-decorativeorbs: 1600px;

  /* Surfaces */
  --surface-cream-paper: #ffffeb;
  --surface-white-nav-surface: #ffffff;
  --surface-stone-mist-surface: #e4e4d0;
  --surface-lavender-wash: #f0d7ff;
  --surface-deep-forest-band: #034f46;
  --surface-midnight-ink: #1a1a1a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-cream-paper: #ffffeb;
  --color-midnight-ink: #1a1a1a;
  --color-pure-black: #000000;
  --color-white: #ffffff;
  --color-stone-mist: #e4e4d0;
  --color-graphite-veil: #8a8a80;
  --color-smoke: #5f5f59;
  --color-charcoal: #222222;
  --color-charcoal-mist: #333333;
  --color-deep-forest-teal: #034f46;
  --color-lavender-whisper: #f0d7ff;
  --color-amber-pulse: #ffa946;

  /* Typography */
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-eb-garamond: 'EB Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-color-emoji: 'Apple Color Emoji', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1;
  --text-heading: 32px;
  --leading-heading: 1;
  --text-heading-lg: 48px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: -0.07px;
  --text-display: 64px;
  --leading-display: 0.95;
  --tracking-display: -0.05px;
  --text-display-xl: 120px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -0.13px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-168: 168px;
  --spacing-224: 224px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 80px;
  --radius-full-3: 992px;
  --radius-full-4: 1000px;
  --radius-full-5: 1600px;
}
```