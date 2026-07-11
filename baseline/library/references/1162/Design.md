# Authkit — Style Reference
> blueprint on midnight glass

**Theme:** dark

AuthKit operates in a midnight blueprint language: near-black canvas, cool blue-gray typography, and a single electric iris purple that marks the only thing you can press. Surfaces are matte and flat — no glossy gradients, no heavy drop shadows — instead, a constellation of soft blue glows (rgba(186, 207, 247, 0.32)) and hairline 1px inset strokes suggest an interface drawn in light on dark paper. Typography is restrained and confident: a geometric workhorse (Untitled Sans) handles everything from 12px captions to 24px section titles, while a wider display face (aeonikPro) introduces hero and section headlines. Almost all decorative color lives in the shadows themselves, not in fills — the result reads as technical, precise, and quietly luminous rather than colorful.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Ink | `#05060f` | `--color-midnight-ink` | Page canvas and primary surface — the near-black ground everything else is drawn onto. Slight cool tint keeps it from feeling truly black, giving a blueprint-paper quality |
| Graphite Plate | `#2f343e` | `--color-graphite-plate` | Elevated card and panel surface — one step above canvas, used for previewed UI mockups and form containers. Matte, never glossy |
| Steel Border | `#3f4959` | `--color-steel-border` | Hairline borders, dividers, and muted structural lines between UI elements |
| Fog | `#81899b` | `--color-fog` | De-emphasized helper text and secondary metadata that should recede behind primary content |
| Pebble | `#9da7ba` | `--color-pebble` | Muted body text and disabled-state labels — readable but clearly secondary |
| Moonlight | `#c7d3ea` | `--color-moonlight` | Primary body and icon color — cool off-white that carries the interface's default voice |
| Ice | `#d1e4fa` | `--color-ice` | Highlighted body text, strong secondary labels, and badge content where extra presence is needed without going full white |
| Glacier | `#d8ecf8` | `--color-glacier` | Headings, link text, and section titles — the brightest readable text, used to anchor the eye on the most important strings |
| Frost Link | `#b6d9fc` | `--color-frost-link` | Active link states and glow-infused accent text where a clear blue signal is required |
| Electric Iris | `#663af3` | `--color-electric-iris` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Ember | `#e46d4c` | `--color-ember` | Alternative brand accent for live-preview or demo CTAs where a warm contrast is needed against the cool palette |
| Azure | `#027dea` | `--color-azure` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Cipher Mint | `#269684` | `--color-cipher-mint` | Teal supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Blueprint Glow | `linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)` | `--color-blueprint-glow` | Soft highlight gradient endpoint — appears in the vertical text gradient (Glacier → Frost Link) and as the top stop in hero light gradients |

## Tokens — Typography

### Untitled Sans — Workhorse UI and body face. Carries everything from 12px captions to 24px section titles; weight 400 is default body, 500 for emphasis, 600–700 for button labels and form controls. Slight negative tracking (-0.01em) tightens the dark-mode rhythm. · `--font-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12, 14, 16, 18, 24
- **Line height:** 1.17, 1.20, 1.33, 1.43, 1.50
- **Letter spacing:** -0.01em
- **Role:** Workhorse UI and body face. Carries everything from 12px captions to 24px section titles; weight 400 is default body, 500 for emphasis, 600–700 for button labels and form controls. Slight negative tracking (-0.01em) tightens the dark-mode rhythm.

### aeonikPro — Display and hero-only face. Used for the 'AuthKit' wordmark and large section headlines at 44–48px. Wider proportions and a cleaner geometric skeleton give the brand a distinctive presence that Untitled Sans cannot supply at scale. Normal tracking. · `--font-aeonikpro`
- **Substitute:** Aeonik
- **Weights:** 400, 500
- **Sizes:** 28, 44, 48
- **Line height:** 1.14, 1.16, 1.17, 1.20
- **Letter spacing:** normal
- **Role:** Display and hero-only face. Used for the 'AuthKit' wordmark and large section headlines at 44–48px. Wider proportions and a cleaner geometric skeleton give the brand a distinctive presence that Untitled Sans cannot supply at scale. Normal tracking.

### dotDigital — Eyebrow and label-only face at 15px. The wide 0.1em tracking and tabular numerals ('tnum') mark these as quiet structural markers — 'Introducing', 'Shine bright', 'Extensible by design' — that precede headlines. Never used for body copy. · `--font-dotdigital`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 15
- **Line height:** 1.20
- **Letter spacing:** 0.1em
- **OpenType features:** `"tnum"`
- **Role:** Eyebrow and label-only face at 15px. The wide 0.1em tracking and tabular numerals ('tnum') mark these as quiet structural markers — 'Introducing', 'Shine bright', 'Extensible by design' — that precede headlines. Never used for body copy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.01px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.01px | `--text-body-sm` |
| body | 16px | 1.5 | -0.01px | `--text-body` |
| subheading | 18px | 1.33 | -0.01px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.01px | `--text-heading-sm` |
| heading | 28px | 1.17 | — | `--text-heading` |
| display | 48px | 1.14 | — | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 100 | 100px | `--spacing-100` |
| 120 | 120px | `--spacing-120` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 10-16px |
| pills | 999px |
| badges | 6px |
| inputs | 2px |
| buttons | 2px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px` | `--shadow-sm` |
| md | `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px` | `--shadow-md` |
| subtle | `rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| subtle-2 | `rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgb...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199...` | `--shadow-subtle-4` |
| subtle-5 | `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset` | `--shadow-subtle-5` |
| subtle-6 | `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168,...` | `--shadow-subtle-6` |
| subtle-7 | `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168,...` | `--shadow-subtle-7` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 24px
- **Element gap:** 8-16px

## Components

### Primary CTA Button (Electric Iris)
**Role:** Filled action button for the single most important action on a page.

Background #663af3, text #ffffff, radius 2px, padding 10px 16px. Untitled Sans weight 500, 16px, line-height 1.5. Sits flat — no drop shadow, relying on the saturated fill against Midnight Ink for emphasis. Used at most once per viewport.

### Ghost Button
**Role:** Secondary actions that should not compete with the primary CTA.

Transparent background with 1px inset hairline rgba(186, 215, 247, 0.06), text #c7d3ea, radius 2px, padding 10px 16px. Untitled Sans weight 500, 16px. The hairline stroke gives presence without adding luminance.

### Pill Navigation Button
**Role:** Top-bar and inline navigation links.

Radius 999px, background transparent or subtle Moonlight tint on hover. Text 14px Untitled Sans weight 400–500, #c7d3ea. Pairs with the sharp 2px form buttons to create a clear primary/pill button pairing.

### Sign-In Form Card
**Role:** Product preview card showing AuthKit's sign-in widget embedded in marketing.

Background #2f343 with card elevation stack (inset highlights + near-black drop shadow). Radius 10px. Contains email input (2px radius, 1px Steel Border), Continue button (Electric Iris), and social provider buttons (Microsoft, Google) in ghost style. Padding 24px.

### Eyebrow Label
**Role:** Small structural marker above a headline — 'Introducing', 'Shine bright', 'Extensible by design'.

dotDigital 15px, weight 400, letter-spacing 0.1em, line-height 1.20. Text color #81899b. The wide tracking and tabular figures are the system's quietest brand signal — it telegraphs 'this is a structural label, not content'.

### Section Heading
**Role:** Mid-tier section titles — 'Your users. Your data. Maximum flexibility.'

aeonikPro 44–48px, weight 400–500, line-height 1.14–1.16, normal tracking. Color #d8ecf8 (Glacier) on Midnight Ink. The combination of a display face at near-regular weight and a cool off-white gives the headline architectural weight without shouting.

### Feature Icon Tile
**Role:** Single sign-on, password, MFA, social login, RBAC, and magic auth feature row entries.

Square ~40px icon container in Graphite Plate (#2f343e) with 6px radius. Icon stroke is Moonlight (#c7d3ea), 1.5px. Label below in Untitled Sans 12–14px weight 400, color #81899b. Arrows between tiles are 1px Moonlight lines with a subtle 186/207/247 glow.

### Theme Toggle Pill
**Role:** Light/dark mode switcher shown above the feature row.

Pill 999px radius, background #2f343e. Two icon segments (moon/sun) in Moonlight. Caption below in Untitled Sans 14px, #81899b.

### Customization Annotation Chip
**Role:** Small labeled callouts pointing at parts of a UI mockup — 'Colour', 'Logo icon', 'Page background', 'Button text', 'Preferred appearance: System / Light / Dark'.

Radius 6–10px, background #2f343 with 1px inset rgba(186, 215, 247, 0.12) hairline. Text 12px Untitled Sans weight 500, #c7d3ea. Connected to the target element with a faint blue guideline. Sits floating around the previewed sign-in card.

### Brand Colour Swatch
**Role:** Row of small colored squares inside the Colour annotation chip.

Four 12px squares, 2px radius, filled with Electric Iris, Ember, Azure, and Cipher Mint. Communicates the customizable brand color slots AuthKit offers.

### Background Grid Overlay
**Role:** Faint architectural grid visible on the Midnight Ink canvas behind the hero.

1px lines in rgba(186, 215, 247, 0.04) forming a ~40px square grid. Plus a radial blue glow at the top center using the Blueprint Glow palette, and thin conic gradient borders around the hero frame. The grid is the 'blueprint' in the north star — it makes the page feel drafted, not designed.

### Hero Wordmark Lockup
**Role:** Centered 'AuthKit' display headline with eyebrow above and subtitle below.

Eyebrow: dotDigital 15px, 0.1em tracking, #81899b, flanked by short horizontal rules. Wordmark: aeonikPro 48px weight 500, #ffffff, line-height 1.14. Subtitle: Untitled Sans 18px weight 400, #9da7ba. Vertical rhythm roughly 16px / 24px / 16px.

### Conic Border Frame
**Role:** Thin glowing border that frames the hero section and the customization mockup.

1px conic gradient at 50% -5% with stops transparent → rgba(124, 145, 182, 0.3) → 0.5 → 0.3 → transparent. Renders as a subtle arc of cool light at the top of the frame, hinting at an illuminated source above the viewport.

## Do's and Don'ts

### Do
- Use Midnight Ink #05060f as the sole page background — never introduce a second canvas color.
- Restrict the Electric Iris #663af3 fill to a single primary CTA per viewport; everything else is ghost, outlined, or neutral.
- Reach for the aeonikPro 48px / weight 500 / line-height 1.14 pairing for any headline that introduces a new section.
- Mark all structural eyebrows with dotDigital 15px / 0.1em tracking / 'tnum' tabular figures, never with Untitled Sans.
- Build elevation from blue-tinted inset hairlines (rgba(186, 215, 247, 0.12)) and 96px inner glows, not from drop shadows.
- Pair form controls (buttons, inputs) at 2px radius with cards at 10–16px and pills at 999px to maintain the sharp-to-soft hierarchy.
- Set section gap to 120px and keep hero-to-section transitions centered on a single vertical axis.

### Don't
- Do not place saturated color on any element other than a primary or alternative-action button — no colored cards, banners, or backgrounds.
- Do not use traditional colored drop shadows; shadows stay near-black or cool-blue, never warm.
- Do not mix more than three typefaces on a single screen — Untitled Sans, aeonikPro, and dotDigital is the complete set.
- Do not round buttons to anything other than 2px; pill-shaped action buttons break the sharp-utility rhythm.
- Do not introduce a second brand color for a primary CTA — Electric Iris is the only first-class action color.
- Do not use Untitled Sans at display sizes (28px+) when aeonikPro is available; the display face is reserved for headlines and the wordmark.
- Do not place text below Glacier #d8ecf8 in luminance for headings — body can drop to Pebble/Fog, but titles must stay bright.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#05060f` | Page background — near-black with faint grid overlay. |
| 1 | Plate | `#2f343` | Card and previewed-UI surface, one shade lifted off canvas. |
| 2 | Iris Lift | `#663af3` | Filled action surface — the only chromatic surface in the system. |

## Elevation

- **Glow accent (icons, highlights):** `0px 0px 6px 0px rgba(186, 207, 247, 0.32)`
- **Ambient glow (secondary highlights):** `0px 0px 12px 0px rgba(238, 186, 247, 0.24)`
- **Hairline inset (links, buttons, outlines):** `inset 0px 0px 0px 1px rgba(186, 215, 247, 0.12)`
- **Card elevation:** `inset 0px 1px 1px 0px rgba(199, 211, 234, 0.12), inset 0px 24px 48px 0px rgba(199, 211, 234, 0.05), 0px 24px 32px 0px rgba(6, 6, 14, 0.7)`

## Imagery

No photography, no illustration, no product screenshots of third-party apps. The visual language is pure UI-on-canvas: sign-in widget previews rendered in CSS, icon glyphs drawn as 1.5px Moonlight strokes, and a faint architectural grid behind everything. The sign-in cards themselves are the imagery — they are the product shown inside the product page. Iconography is monochrome outlined with consistent 1.5px stroke weight, sitting in square Graphite Plate tiles. The only non-UI visual element is the Blueprint Glow gradient that washes the top of the hero, creating a sense of light falling onto the dark canvas.

## Layout

Centered, single-column hero anchored to a max-width of 1200px on a full-bleed Midnight Ink canvas. The hero stacks vertically: eyebrow → wordmark → subtitle → preview card, with the sign-in widget slightly oversized and centered, overlapping a faint background grid. Below the hero, content flows in centered max-width bands separated by 120px gaps, each with an eyebrow + heading + supporting text + a single visual (a feature row of icon tiles, or a full-width previewed UI mockup with annotation chips). The page never uses two-column text+image splits; it always centers. Navigation is a minimal top bar: brand wordmark left, single pill 'Get started' button right, with a small GitHub icon between them. No sidebar, no mega-menu, no sticky chrome beyond the nav.

## Agent Prompt Guide

## Quick Color Reference
- text primary: #ffffff
- text heading: #d8ecf8 (Glacier)
- text body: #c7d3ea (Moonlight)
- text muted: #81899b (Fog)
- background: #05060f (Midnight Ink)
- surface: #2f343e (Graphite Plate)
- border: #3f4959 (Steel)
- accent: #b6d9fc (Frost Link)
- primary action: no distinct CTA color

## 3-5 Example Component Prompts

**Hero Section**: Midnight Ink #05060f background with a faint 1px Blueprint Glow grid. Eyebrow in dotDigital 15px / 0.1em tracking / #81899b, reading 'Introducing'. Wordmark in aeonikPro 48px / weight 500 / #ffffff / line-height 1.14. Subtitle in Untitled Sans 18px / weight 400 / #9da7ba. A centered 2px-radius Electric Iris #663af3 'Get started' button sits below. Top of hero carries a conic gradient border in rgba(124, 145, 182, 0.5).

**Sign-In Widget Preview Card**: Graphite Plate #2f343e background, 10px radius, 24px padding. Card elevation stack: inset 0px 1px 1px 0px rgba(199, 211, 234, 0.12) + inset 0px 24px 48px 0px rgba(199, 211, 234, 0.05) + 0px 24px 32px 0px rgba(6, 6, 14, 0.7). Email input with 2px radius, 1px Steel Border #3f4959, 14px Untitled Sans placeholder. Primary 'Continue' button: 2px radius, Electric Iris #663af3, white text, 10px 16px padding. Two ghost social buttons below in Moonlight #c7d3ea with the same 2px hairline.

**Feature Icon Row**: Six 40px square Graphite Plate #2f343e tiles with 6px radius, each containing a 1.5px-stroke Moonlight #c7d3ea outlined icon. Labels below in Untitled Sans 12–14px / weight 400 / #81899b. Tiles connected by 1px Moonlight lines with a 6px rgba(186, 207, 247, 0.32) glow.

**Theme Toggle Pill**: 999px radius pill, Graphite Plate #2f343e fill, 6px padding. Two 14px icon segments (moon and sun) in Moonlight #c7d3ea, active segment slightly brightened to Glacier #d8ecf8. Caption 'Light and dark modes supported.' below in Untitled Sans 14px / #81899b.

**Customization Annotation Chip**: 10px radius, Graphite Plate #2f343e fill, 1px inset rgba(186, 215, 247, 0.12) hairline. Label in Untitled Sans 12px / weight 500 / #c7d3ea. Connects to its target element with a 1px Moonlight guideline. Inside the Colour chip, four 12px squares at 2px radius filled with Electric Iris #663af3, Ember #e46d4c, Azure #027dea, and Cipher Mint #269684.

## Similar Brands

- **Linear** — Same midnight-canvas + single saturated accent + thin-stroke outlined iconography + tight geometric sans display face.
- **Vercel** — Dark blueprint aesthetic with a single vivid accent (their orange replaces AuthKit's iris), centered max-width hero, and product previews rendered as CSS rather than screenshots.
- **Clerk** — Auth-adjacent developer tool with embedded sign-in widget previews on a dark canvas, a cool off-white type system, and a single chromatic action color.
- **Resend** — Cool blue-gray dark palette, restrained color use, and centered single-column hero with a faint background pattern that frames the wordmark.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-midnight-ink: #05060f;
  --color-graphite-plate: #2f343e;
  --color-steel-border: #3f4959;
  --color-fog: #81899b;
  --color-pebble: #9da7ba;
  --color-moonlight: #c7d3ea;
  --color-ice: #d1e4fa;
  --color-glacier: #d8ecf8;
  --color-frost-link: #b6d9fc;
  --color-electric-iris: #663af3;
  --color-ember: #e46d4c;
  --color-azure: #027dea;
  --color-cipher-mint: #269684;
  --color-blueprint-glow: #bacff7;
  --gradient-blueprint-glow: linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%);

  /* Typography — Font Families */
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-aeonikpro: 'aeonikPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dotdigital: 'dotDigital', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.01px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.01px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --text-display: 48px;
  --leading-display: 1.14;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-200: 200px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 120px;
  --card-padding: 24px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 44px;
  --radius-full: 999px;
  --radius-full-2: 4999.5px;
  --radius-full-3: 9999px;

  /* Named Radii */
  --radius-cards: 10-16px;
  --radius-pills: 999px;
  --radius-badges: 6px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;

  /* Shadows */
  --shadow-sm: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-md: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-subtle: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-subtle-3: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-subtle-4: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-subtle-5: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-6: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-subtle-7: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;

  /* Surfaces */
  --surface-canvas: #05060f;
  --surface-plate: #2f343;
  --surface-iris-lift: #663af3;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-midnight-ink: #05060f;
  --color-graphite-plate: #2f343e;
  --color-steel-border: #3f4959;
  --color-fog: #81899b;
  --color-pebble: #9da7ba;
  --color-moonlight: #c7d3ea;
  --color-ice: #d1e4fa;
  --color-glacier: #d8ecf8;
  --color-frost-link: #b6d9fc;
  --color-electric-iris: #663af3;
  --color-ember: #e46d4c;
  --color-azure: #027dea;
  --color-cipher-mint: #269684;
  --color-blueprint-glow: #bacff7;

  /* Typography */
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-aeonikpro: 'aeonikPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dotdigital: 'dotDigital', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.01px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.01px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --text-display: 48px;
  --leading-display: 1.14;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-200: 200px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 44px;
  --radius-full: 999px;
  --radius-full-2: 4999.5px;
  --radius-full-3: 9999px;

  /* Shadows */
  --shadow-sm: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-md: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-subtle: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-subtle-3: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-subtle-4: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-subtle-5: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-6: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-subtle-7: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;
}
```