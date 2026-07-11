# Vercel — Style Reference
> Prismatic monolith on graph paper — a single dark triangle refracts a full conic spectrum against a faint engineer grid, and everything else on the page is pure black-on-white precision.

**Theme:** light

Vercel operates as a near-monochrome engineering workspace: off-white canvas (#fafafa), near-black text and filled actions (#171717, never pure #000), hairline borders (#ebebeb) carrying structure instead of shadows, and one signature burst of prismatic color from the conic-gradient prism logo that appears exactly once per screen. The type system is exclusively Geist — a geometric grotesque with very tight negative tracking at large sizes (-0.06em at 48px) and no decorative weights — giving the entire UI a precise, lab-instrument quality. Density is compact: 6px radii dominate cards and buttons, 12px padding wraps most surfaces, and 2–8px gaps control rhythm. Color is rationed — chromatic blue, red, and teal appear only as decorative illustration accents; the product chrome stays strictly achromatic with the prism gradient serving as the only chromatic punctuation.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Graphite | `#171717` | `--color-graphite` | Primary text, filled action buttons, primary borders. The near-black is intentional — not #000000 — giving surfaces a slightly warmer, inkier feel than pure black would |
| Marble White | `#fafafa` | `--color-marble-white` | Page canvas, card surfaces, elevated panels. Not pure white — the faint warmth reads as paper rather than screen |
| Pearl | `#ffffff` | `--color-pearl` | Inset surface white used inside cards, button text on dark fills, and inner panel highlights |
| Hairline | `#ebebeb` | `--color-hairline` | Default border color for cards, nav, inputs, dividers. Carries structural separation in place of shadows |
| Felt Gray | `#4d4d4d` | `--color-felt-gray` | Secondary text, muted nav items, icon strokes, sub-labels. The workhorse mid-gray for everything between primary text and placeholder |
| Smoke | `#666666` | `--color-smoke` | Tertiary nav text, metadata, timestamps, non-active UI labels |
| Ash | `#a8a8a8` | `--color-ash` | Placeholder text, disabled borders, low-priority dividers |
| Fog | `#7d7d7d` | `--color-fog` | Subtle body text, helper copy, inactive tab labels |
| Ice Tint | `#f0fbff` | `--color-ice-tint` | Subtle cool wash used on a small number of list rows and decorative callouts — the only chromatic surface tint in the system |
| Carbon | `#000000` | `--color-carbon` | SVG icon fills, logo stroke, and true-black contrast moments. Used sparingly in vector artwork rather than as a UI fill |
| Prism Blue | `#52aeff` | `--color-prism-blue` | Decorative illustration accent — appears in the prismatic gradient, diagrams, and hero refraction. Not used for UI controls or text |
| Prism Red | `#e5484d` | `--color-prism-red` | Decorative illustration accent within the prism spectrum and diagram strokes only |
| Prism Teal | `#45dec5` | `--color-prism-teal` | Decorative illustration accent within the prism spectrum and diagram strokes only |
| Vercel Blue | `#0070f3` | `--color-vercel-blue` | Reserved brand blue for links, logo-tied CTAs, and the occasional chart highlight. Appears more in nav and footer chrome than body content |

## Tokens — Typography

### Geist — Primary UI and display typeface. Geist is custom (Vercel-built) and brings a neo-grotesque geometry with very tight default tracking that distinguishes it from Inter or system sans. Used for everything from 12px captions to 48px hero headlines. The weight 400 does the work of a bold on most sites — Vercel rarely exceeds 600 even for headings, letting negative letter-spacing do the visual weight · `--font-geist`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px
- **Line height:** 1.00, 1.17, 1.20, 1.25, 1.33, 1.43, 1.50, 1.52, 1.56, 1.80
- **Letter spacing:** -0.02em at 16px, tightening to -0.06em at 48px. Body text sits at roughly -0.02em; display climbs to -0.06em
- **OpenType features:** `"liga" on, "ss05" on`
- **Role:** Primary UI and display typeface. Geist is custom (Vercel-built) and brings a neo-grotesque geometry with very tight default tracking that distinguishes it from Inter or system sans. Used for everything from 12px captions to 48px hero headlines. The weight 400 does the work of a bold on most sites — Vercel rarely exceeds 600 even for headings, letting negative letter-spacing do the visual weight

### Geist Mono — Monospace companion for code blocks, terminal output, package names, and inline technical strings. Tracking stays at normal — mono type is allowed to breathe compared to the display sans · `--font-geist-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 500, 600
- **Sizes:** 8px, 10px, 12px, 13px, 14px, 16px
- **Line height:** 1.00, 1.20, 1.43, 1.54, 1.67
- **OpenType features:** `"liga"`
- **Role:** Monospace companion for code blocks, terminal output, package names, and inline technical strings. Tracking stays at normal — mono type is allowed to breathe compared to the display sans

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.02px | `--text-caption` |
| body | 14px | 1.56 | -0.02px | `--text-body` |
| heading-sm | 20px | 1.33 | -0.04px | `--text-heading-sm` |
| heading | 24px | 1.25 | -0.05px | `--text-heading` |
| heading-lg | 32px | 1.2 | -0.05px | `--text-heading-lg` |
| display | 48px | 1.17 | -0.06px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 50 | 50px | `--spacing-50` |
| 135 | 135px | `--spacing-135` |
| 157 | 157px | `--spacing-157` |

### Border Radius

| Element | Value |
|---------|-------|
| tab | 64px |
| cards | 6px |
| large | 100px |
| pills | 9999px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) ...` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.04) 0px 2px 2px 0px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) ...` | `--shadow-subtle-3` |
| subtle-4 | `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0...` | `--shadow-subtle-4` |
| subtle-5 | `rgb(235, 235, 235) 0px 0px 0px 1px` | `--shadow-subtle-5` |
| subtle-6 | `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` | `--shadow-subtle-6` |
| subtle-7 | `rgb(235, 235, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0...` | `--shadow-subtle-7` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 24px
- **Element gap:** 12-16px

## Components

### Filled Primary Button
**Role:** Main action — used for Sign Up, Start Deploying, Deploy Now

#171717 background, #ffffff text, Geist 14px weight 500, 6px radius, 8px 16px padding, no border. Sits flat on the canvas — the only elevation comes from the near-black fill against the off-white page, which is enough contrast that no shadow is needed. Always paired with a 14px leading icon when iconography is present.

### Outlined Secondary Button
**Role:** Tertiary action — Get a Demo, Learn about Enterprise

Transparent background, 1px #171717 border, #171717 text, Geist 14px weight 500, 6px radius, 8px 16px padding. Inverts cleanly on dark sections. The outlined variant is as common as the filled one — Vercel never uses a gray-filled secondary button.

### Pill Navigation Chip
**Role:** Category filter tabs (AI Apps, Web Apps, Ecommerce, Marketing, Platforms)

#ffffff background, 1px #ebebeb border, #171717 text, Geist 13px weight 500, 9999px radius, 6px 14px padding. Active state: fills to #fafafa with slightly darker border. No shadows — the pill shape and border do the work.

### Top Navigation Bar
**Role:** Global header with logo, product menu, auth actions

Sticky top, #fafafa background, 1px bottom border in #ebebeb, ~64px tall. Logo left (12px black triangle + Geist wordmark), center group of Geist 14px weight 500 nav links in #4d4d4d with chevron-down caret on dropdown items, right group contains outlined Ask AI button, Log In text link, and filled Sign Up button. All links separated by 4px gaps.

### Product Feature Card
**Role:** Grid card promoting a product surface (Agents, AI Apps, Web Apps, etc.)

#ffffff background, 1px #ebebeb border, 6px radius, 24px internal padding. Heading in Geist 18px weight 600 #171717, description in Geist 14px weight 400 #4d4d4d, circular icon container (40px, 1px #ebebeb border, icon inside) with a small right-arrow CTA in a 32px circle. Optional illustration block at the bottom. Cards have no shadow — the hairline border + white-on-canvas lift is the elevation strategy.

### Hero Section
**Role:** First viewport — brand statement and primary CTAs

#fafafa background overlaid with a very faint engineer grid (1px lines, #f2f2f2 or 4% opacity #171717, 40px module). Centered stack: Geist 48px weight 500 headline in #171717 with -0.06em tracking, Geist 16px weight 400 subhead in #4d4d4d, then a row containing filled black CTA and outlined CTA. Below the text, a centered prismatic gradient background with the dark triangular Vercel prism logo — this is the only chromatic moment in the system.

### Logo Mark
**Role:** Vercel brand identity — black triangle / prism

Custom mark: equilateral or isoceles triangle rendered in #171717 with sharp 0px corners, used at 16–20px in nav, 32–48px in hero. The hero variant sits over a conic gradient (gold → red → steel-blue → mint → transparent) that emanates from below, creating the signature prismatic refraction.

### Prismatic Conic Gradient
**Role:** Signature brand atmosphere — appears once on hero, once on key product moments

Conic gradient from 180deg at 50% 70%: transparent → gold (#eec32d) → red (#ec4b4b) → steel blue (#709ab9) → mint (#4dffbf) → transparent. Applied as a soft radial wash behind the prism logo, not as a full-bleed background. The gradient is the only place where chromatic color is used in the design system.

### Engineer Grid Overlay
**Role:** Subtle structural background pattern on hero and section dividers

1px grid lines in #f2f2f2 or 4%-opacity #171717, 40–48px module size, full-bleed across the canvas. Functions as a blueprint texture — visible on close inspection but recessive at normal viewing distance. Sometimes a small + cross-hair mark sits at the top-left grid intersection as a designer's registration mark.

### Wireframe Globe Illustration
**Role:** Secondary hero visual — global infrastructure narrative

Line-art globe drawn in #ebebeb strokes at 1px, with latitude/longitude grid lines. Small Vercel prism triangles (8px, #171717) mark deployment points along the surface. Blue accent strokes (#52aeff) radiate from select nodes to suggest active connections. No fill, no shadow — pure linework.

### Code Block
**Role:** Inline code, terminal output, CLI commands

#fafafa or slightly darker #f5f5f5 background, 1px #ebebeb border, 6px radius, Geist Mono 12–13px weight 400. Syntax highlighting uses a restricted palette: #297a3a green for strings/keywords, #0070f3 blue for properties, #7820bc purple for keywords, #e5484d red for errors. No language label, no copy button chrome — just the code.

### Tab Bar
**Role:** Content switching within product sections

Horizontal row of pill chips (9999px radius) or low-radius tabs (6px). Active tab fills with #171717 text and underlines with a 2px #171717 bar; inactive tabs are #4d4d4d. Geist 13px weight 500. No background change between active/inactive — the underline is the only state signal.

## Do's and Don'ts

### Do
- Use #171717 for all filled buttons and primary text — never #000000 for UI fills, the warmer near-black is part of the brand
- Default to 6px radius for cards, buttons, and inputs; reserve 9999px (pill) only for nav chips, category filters, and tag-style elements
- Apply the prismatic conic gradient exactly once per major section, always behind the triangle logo mark — it is a logo accent, not a background fill
- Use Geist with negative letter-spacing proportional to size: -0.02em at 14–16px, scaling to -0.06em at 48px. Never use positive tracking on Geist
- Keep the page 99% achromatic — chromatic blue, red, and teal may only appear in illustrations, the prism gradient, and code syntax highlighting
- Use hairline #ebebeb borders for structural separation instead of shadows on cards, inputs, and nav — the surface lift comes from #ffffff on #fafafa, not from drop shadows
- Pair every primary filled button with an outlined secondary button of the same size and type — Vercel never ships a single-CTA hero

### Don't
- Do not use #0070f3 or any chromatic color as a button background or primary CTA fill — the filled action is always #171717
- Do not apply drop shadows larger than the 2px/8px tail in the standard elevation stack — the system is designed to work without heavy shadows
- Do not use border-radius values other than 6px, 9999px, or 100px for UI components — 12px, 16px, and 32px only appear on imagery
- Do not set body or heading type above weight 600 — Vercel leans on tight tracking, not bold weight, for visual emphasis
- Do not use the prismatic gradient as a section background, card fill, or text treatment — it belongs exclusively behind the prism logo
- Do not introduce new chromatic colors outside the four prism hues (#52aeff, #e5484d, #45dec5, plus the gradient gold and mint) — the system is intentionally near-monochrome
- Do not use pure white (#ffffff) as the page canvas — always #fafafa, which reads as paper rather than screen

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fafafa` | Page background — the base floor everything sits on |
| 1 | Card | `#ffffff` | Inner panel surface inside cards and feature blocks, creates a subtle 1-step lift over canvas |
| 2 | Wash | `#f0fbff` | Occasional cool tint row used for highlight strips or callout panels |

## Elevation

- **Card / Button / Link:** `rgba(0,0,0,0.08) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 2px 0, #fafafa 0 0 0 1px inset`
- **Image / List:** `rgba(0,0,0,0.08) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 2px 0, rgba(0,0,0,0.04) 0 8px 8px -8px, #fafafa 0 0 0 1px inset`
- **Nav Border:** `rgba(0,0,0,0.08) 0 0 0 1px, #fafafa 0 0 0 1px`

## Imagery

Imagery is almost entirely illustrative and diagrammatic rather than photographic. The hero features the signature dark triangular prism refracting a conic spectrum gradient — this is the only decorative artwork and it doubles as the logo. Supporting visuals are wireframe line drawings (globe with latitude lines, deployment node maps) rendered in 1px #ebebeb strokes with selective #171717 and #52aeff accent strokes. Product cards include small UI mockup snapshots — actual product screenshots at small scale inside 6px-radius frames with the standard hairline border. There is no lifestyle photography, no human imagery, no environmental context. Icons are minimal mono-line geometric shapes (circles, arrows, triangles) at 1–1.5px stroke weight, almost always inside 32–40px circular containers with a hairline border. The overall image density is low — most of the page is text and whitespace; visuals earn their placement.

## Layout

Pages are max-width 1200px centered with generous outer gutters. The hero is a single centered stack (headline → subhead → CTA row → prism visual) on a full-width #fafafa canvas with a faint 40px grid overlay. Below the hero, content breaks into sections separated by 64–80px vertical gaps, each section typically using a 3-column card grid (equal width, 24px gaps) for product features and use cases. Some sections use a 2-column text+visual split. There is no alternating light/dark banding — the entire page stays light. Navigation is a single sticky top bar with a bottom hairline border. A footer reuses the nav styling with additional link columns. The layout rhythm is: centered hero → 3-col grid → centered stat bar → 3-col grid → 2-col infrastructure section with globe visual → 3-col grid → footer. No sidebar, no mega-menu, no floating elements.

## Agent Prompt Guide

## Quick Color Reference
- Text: #171717
- Background: #fafafa
- Card surface: #ffffff
- Border: #ebebeb
- Muted text: #4d4d4d
- primary action: #171717 (filled action)

## Example Component Prompts

1. **Hero section**: #fafafa canvas with a faint 40px grid in #f2f2f2. Centered Geist 48px weight 500 headline in #171717, letter-spacing -0.06em. Subtext in Geist 16px weight 400, #4d4d4d. Below: a centered Vercel triangle logo (32px, #171717, sharp corners) sitting over a conic gradient (from 180deg at 50% 70%: transparent → #eec32d → #ec4b4b → #709ab9 → #4dffbf → transparent). Two buttons side by side: filled #171717 with #ffffff text, 6px radius, Geist 14px weight 500, 8px 16px padding, plus outlined variant with 1px #171717 border and transparent background.

2. **Product feature card**: #ffffff background, 1px #ebebeb border, 6px radius, 24px padding. Heading Geist 18px weight 600 #171717, description Geist 14px weight 400 #4d4d4d, bottom-right a 40px circular icon container (1px #ebebeb border) holding a mono-line arrow icon in #171717. No shadow.

3. **Category filter row**: horizontal row of pill chips, 9999px radius, #ffffff background, 1px #ebebeb border, Geist 13px weight 500 #171717 text, 6px 14px padding, 8px gap between chips. Active chip: #fafafa background with 1px #d4d4d4 border.

4. **Navigation bar**: sticky top, #fafafa background, 1px bottom border #ebebeb, 64px tall, flex row with 1200px max-width centered. Left: 12px black triangle logo + Geist 16px weight 500 wordmark #171717. Center: nav links Geist 14px weight 500 #4d4d4d with 4px gap, chevron caret on dropdown items. Right: outlined "Ask AI" button (6px radius, 1px #171717 border), "Log In" text link #171717, filled "Sign Up" button (#171717 bg, #ffffff text, 6px radius).

5. **Stat callout strip**: centered Geist 32px weight 500 headline #171717 with inline highlighted word in #0070f3, subtext Geist 16px weight 400 #4d4d4d below, no background fill, sits directly on the #fafafa canvas with 64px vertical breathing room above and below.

## Elevation Philosophy

Elevation is achieved through surface contrast, not shadow. The system has exactly three surface levels (#fafafa canvas → #ffffff card → #f0fbff wash) and relies on 1px #ebebeb hairline borders plus the natural luminance step between surfaces to communicate layering. When shadows do appear, they are minimal: a 1px ring (rgba(0,0,0,0.08)) for definition and at most a 2px–8px soft tail for products cards holding imagery. There is no large diffuse shadow, no neumorphism, no glow. The design language treats shadow as a finishing detail, not a structural element.

## Similar Brands

- **Linear** — Same near-monochrome light UI with 6px radii, hairline borders, and a single near-black filled action button as the only chromatic moment
- **Raycast** — Compact density, Geist-family type with tight negative tracking, pill-shaped nav chips, and 1px structural borders instead of shadows
- **Stripe** — Geometric grotesque type (Geist pairing with Stripe's Sohne), centered max-width layouts, product card grids with subtle borders, and a very restrained color palette
- **Cursor** — Developer-tool visual language: dark prism icon on white canvas, tight tracking on display type, 6px radii, and a love of prismatic accents against otherwise achromatic chrome

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-graphite: #171717;
  --color-marble-white: #fafafa;
  --color-pearl: #ffffff;
  --color-hairline: #ebebeb;
  --color-felt-gray: #4d4d4d;
  --color-smoke: #666666;
  --color-ash: #a8a8a8;
  --color-fog: #7d7d7d;
  --color-ice-tint: #f0fbff;
  --color-carbon: #000000;
  --color-prism-blue: #52aeff;
  --color-prism-red: #e5484d;
  --color-prism-teal: #45dec5;
  --color-vercel-blue: #0070f3;

  /* Typography — Font Families */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.02px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: -0.02px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.04px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.05px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.05px;
  --text-display: 48px;
  --leading-display: 1.17;
  --tracking-display: -0.06px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-135: 135px;
  --spacing-157: 157px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 24px;
  --element-gap: 12-16px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 32px;
  --radius-full: 64px;
  --radius-full-2: 100px;
  --radius-full-3: 9999px;

  /* Named Radii */
  --radius-tab: 64px;
  --radius-cards: 6px;
  --radius-large: 100px;
  --radius-pills: 9999px;
  --radius-buttons: 6px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.04) 0px 2px 2px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 8px -8px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-5: rgb(235, 235, 235) 0px 0px 0px 1px;
  --shadow-subtle-6: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --shadow-subtle-7: rgb(235, 235, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-canvas: #fafafa;
  --surface-card: #ffffff;
  --surface-wash: #f0fbff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-graphite: #171717;
  --color-marble-white: #fafafa;
  --color-pearl: #ffffff;
  --color-hairline: #ebebeb;
  --color-felt-gray: #4d4d4d;
  --color-smoke: #666666;
  --color-ash: #a8a8a8;
  --color-fog: #7d7d7d;
  --color-ice-tint: #f0fbff;
  --color-carbon: #000000;
  --color-prism-blue: #52aeff;
  --color-prism-red: #e5484d;
  --color-prism-teal: #45dec5;
  --color-vercel-blue: #0070f3;

  /* Typography */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.02px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: -0.02px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.04px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.05px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.05px;
  --text-display: 48px;
  --leading-display: 1.17;
  --tracking-display: -0.06px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-135: 135px;
  --spacing-157: 157px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 32px;
  --radius-full: 64px;
  --radius-full-2: 100px;
  --radius-full-3: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.04) 0px 2px 2px 0px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 8px -8px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-4: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-5: rgb(235, 235, 235) 0px 0px 0px 1px;
  --shadow-subtle-6: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --shadow-subtle-7: rgb(235, 235, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
```