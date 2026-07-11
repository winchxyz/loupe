# PostHog — Style Reference
> Warm beige CRT desktop with a sleepy sloth. A cream-toned 1989 computer screen where file icons line the edges and the product lives inside a faux browser window, framed by amber, olive-khaki, and one electric blue accent.

**Theme:** light

PostHog's design system is a warm retro-desktop metaphor: a beige CRT-era wallpaper canvas frames a simulated browser window that holds all product UI, while file-folder icons line both side margins and a pixel-art sloth mascot stands guard in the corner. The palette deliberately rejects cool SaaS gray in favor of earthy cream, amber, olive-khaki, and one vivid cobalt blue, giving the whole site the feel of a 1989 terminal workstation rather than a modern dashboard. Typography is IBM Plex Sans at slightly tight tracking (-0.025em), lending a technical-readable voice that suits developer-tools positioning without feeling sterile. Components are compact and unembellished — 4px corners, minimal elevation, thin borders, and amber-filled primary buttons — so the desktop chrome, illustrations, and mascot do the personality work that decoration normally would.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Desktop Beige | `#e1d7c2` | `--color-desktop-beige` | Desktop wallpaper canvas, outer page background — the warm CRT-era base that everything else sits on |
| Browser White | `#ffffff` | `--color-browser-white` | Browser window interior, card surfaces, the clean working area inside the desktop frame |
| Cream Paper | `#fdfdf8` | `--color-cream-paper` | Secondary card surface, subtle warm white alternative to pure white for less stark sections |
| Linen | `#eeefe9` | `--color-linen` | Muted surface for inactive tabs, secondary panels, soft dividers |
| Fog Khaki | `#e5e7e0` | `--color-fog-khaki` | Tertiary surface, hover backgrounds on warm-tinted areas |
| Ash Border | `#d2d3cc` | `--color-ash-border` | Hairline borders on warm surfaces |
| Sage | `#bfc1b7` | `--color-sage` | Mid-border, shadow tint, muted dividers — warm gray-green instead of cool gray |
| Lichen | `#b3b3af` | `--color-lichen` | Shadow base, disabled borders |
| Moss | `#9ea096` | `--color-moss` | Muted text on warm surfaces, icon strokes, secondary button borders |
| Olive | `#65675e` | `--color-olive` | Secondary body text, captions, inactive nav items |
| Dark Olive | `#4d4f46` | `--color-dark-olive` | Primary body text, nav text, link text in body copy |
| Bark | `#23251d` | `--color-bark` | Heading text, emphasis body, high-contrast text on warm backgrounds |
| Ink | `#111827` | `--color-ink` | Display headings, highest-contrast text |
| Charcoal | `#374151` | `--color-charcoal` | Body text in default browser-white areas, card content |
| Jet | `#000000` | `--color-jet` | Maximum contrast text, black outlines on illustrations and icons |
| Amber Button | `#f1a82c` | `--color-amber-button` | Yellow supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Saffron Border | `#b17816` | `--color-saffron-border` | Outlined button borders, secondary amber stroke elements, focused amber outline |
| Saffron Deep | `#eb9d2a` | `--color-saffron-deep` | Amber hover state, secondary amber fills |
| Amber Shadow | `#cd8407` | `--color-amber-shadow` | Amber pressed/active state, deep amber accents |
| Cobalt | `linear-gradient(90deg, rgb(1, 67, 203), rgb(43, 111, 244) 24.04%, rgb(210, 52, 1) 46.63%, rgb(255, 101, 0) 65.87%, rgb(251, 160, 0) 83.17%, rgb(1, 67, 203))` | `--color-cobalt` | Active nav underline, link color, icon highlights, selected state accent — the one cool color in an otherwise warm palette; Brand rainbow gradient — blue to orange to amber, used on the wordmark and brand dividers |
| Ember | `#f54e00` | `--color-ember` | Orange supporting accent for decorative details and low-frequency emphasis |
| Fern | `#6aa84f` | `--color-fern` | Green supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |

## Tokens — Typography

### ui-monospace — ui-monospace — detected in extracted data but not described by AI · `--font-ui-monospace`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.43
- **Role:** ui-monospace — detected in extracted data but not described by AI

### IBM Plex Sans — Primary typeface for everything from UI to headings. IBM Plex Sans has a slight technical, almost monospace-influenced geometry that matches the developer-tool positioning and the retro-terminal aesthetic. Weight 500–600 carries most of the visual weight, avoiding ultra-bold shouting. · `--font-ibm-plex-sans`
- **Substitute:** Inter, system-ui, -apple-system, sans-serif
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 19px, 20px, 21px, 24px, 36px
- **Line height:** 1.00, 1.25, 1.33, 1.38, 1.40, 1.43, 1.50, 1.56, 1.71
- **Letter spacing:** -0.025em across all sizes
- **Role:** Primary typeface for everything from UI to headings. IBM Plex Sans has a slight technical, almost monospace-influenced geometry that matches the developer-tool positioning and the retro-terminal aesthetic. Weight 500–600 carries most of the visual weight, avoiding ultra-bold shouting.

### Source Code Pro — Code snippets, terminal-like content, inline `<code>` elements. Used sparingly. · `--font-source-code-pro`
- **Substitute:** JetBrains Mono, Fira Code, ui-monospace, monospace
- **Weights:** 500
- **Sizes:** 14px
- **Line height:** 1.43
- **Role:** Code snippets, terminal-like content, inline `<code>` elements. Used sparingly.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.3px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.35px | `--text-body-sm` |
| body | 16px | 1.5 | -0.4px | `--text-body` |
| subheading | 18px | 1.56 | -0.45px | `--text-subheading` |
| heading-sm | 21px | 1.38 | -0.525px | `--text-heading-sm` |
| heading | 24px | 1.33 | -0.6px | `--text-heading` |
| heading-lg | 36px | 1.25 | -0.9px | `--text-heading-lg` |

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
| 17 | 17px | `--spacing-17` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 34 | 34px | `--spacing-34` |
| 64 | 64px | `--spacing-64` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 4px |
| icons | 4px |
| buttons | 4px |
| browserWindow | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` | `--shadow-xl` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 48px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Desktop Wallpaper Canvas
**Role:** Outer page background

Full-viewport #e1d7c2 warm beige surface. This IS the brand. Contains the browser window centered at max-width 1200px, plus sidebar file icons on left and right margins.

### Browser Window Frame
**Role:** Container for all product UI

White #ffffff surface, 8px border-radius, 25px/50px box-shadow rgba(0,0,0,0.25) creating the floating-above-desktop effect. Includes a faux title bar with three traffic-light circles and a URL field reading 'home.mdx', plus a toolbar row with formatting controls.

### Sidebar File Icon
**Role:** Desktop file shortcut

Small pixel-art icon (home.mdx, customers.mdx, demo.mov, etc.) with a label underneath. Left sidebar holds navigation, right sidebar holds secondary pages. Icons are tiny — ~32px — with warm-toned fills and black outlines.

### Pixel-Art Sloth Mascot
**Role:** Brand mascot illustration

Large pixel-art sloth character in a brown wicker chair, working on a laptop with a basketball hoop nearby. Renders at the right side of the hero. Uses #f1a82c amber, #f54e00 ember, #6aa84f fern, and warm browns — all from the brand palette. The sloth IS the product personality.

### Amber Filled Button
**Role:** Primary action

#f1a82c amber background, #000000 or near-black text, 4px border-radius, padding 8px 16px, IBM Plex Sans 14–15px weight 500. Reads as warm and inviting, not corporate. Default state is flat with no shadow.

### Ghost Secondary Button
**Role:** Secondary action, paired with amber CTA

Transparent background, #111827 or #4d4f46 text, 1px #4d4f46 border, 4px radius, same padding as amber button. Used for 'Install with AI' and similar quieter actions.

### Underlined Tab
**Role:** In-page section navigation

Horizontal tab bar with active tab in #111827 text plus a 2px #2f80fa cobalt underline, inactive tabs in #65675 olive. Tabs sit inside the browser window on a white surface. Spacing 24px between tabs.

### Section Header Card
**Role:** In-browser section divider

White card with a 2px cobalt #2f80fa left border, IBM Plex Sans 24px weight 600 heading in #111827, body text in #4d4f46. Functions as a bold visual break between content blocks inside the browser window.

### Feature Link with Icon
**Role:** In-content navigation

IBM Plex Sans 14–15px weight 500, #2f80fa cobalt text or #111827 text, preceded by a small colored icon (chart, gear, sparkles). Links are inline within paragraph text or listed vertically with 8px gap.

### Top Navigation Bar
**Role:** Site-level nav

Sits ABOVE the desktop wallpaper, on its own white or transparent bar. PostHog wordmark with spectrum-gradient mark on the left, nav items in #111827 IBM Plex Sans 14px weight 500, amber 'Get started – free' button on the right. Minimal height ~56px.

### Pill Tag
**Role:** Category labels, status indicators

9999px border-radius, small padding 2px 10px, IBM Plex Sans 12px weight 500, background #eeefe9 with #4d4f46 text, or amber #f1a82c with black text. Rounded pill shape contrasts intentionally with the otherwise 4px-cornered system.

### Code Snippet Block
**Role:** Technical examples, CLI commands

Source Code Pro 14px weight 500, #23251d Bark text on #fdfdf8 cream background, 4px radius, 1px #d2d3cc border, padding 12px 16px. Compact and monospace — feels like a terminal window.

### Footer File Stack
**Role:** Bottom-of-page decoration

Right-side margin gets a decorative pixel-art 'yard' illustration — a hedge, a fence, a sloth watering a garden, another sloth sleeping. Purely atmospheric, reinforces the desktop metaphor down to the footer.

### Inline Link
**Role:** Body text links

#2f80fa cobalt or #b17816 saffron underline link, no decoration by default, underline on hover. Weight inherits from body text.

## Do's and Don'ts

### Do
- Use the warm beige #e1d7c2 as the outer page background — never white or cool gray at the page level
- Apply IBM Plex Sans with -0.025em letter-spacing across all sizes from 12px to 36px
- Use 4px border-radius for buttons, cards, and code blocks; reserve 9999px exclusively for pill tags
- Pair every amber #f1a82c filled button with a ghost outlined secondary button beside it
- Use #2f80fa cobalt sparingly — as active-tab underlines, selected states, and link color — to make it feel electric against the warm palette
- Apply the single heavy 25px/50px shadow ONLY to the browser window frame; keep all interior components flat
- Use #111827 Ink or #23251d Bark for headings, never pure #000000 except on illustration outlines

### Don't
- Don't use cool grays, blue-grays, or slate tones anywhere — the palette is warm khaki, olive, cream, amber, and cobalt only
- Don't add borders or shadows to components inside the browser window — keep the interior flat, let the browser frame be the only elevated thing
- Don't round corners beyond 4px for non-pill elements — the sharp-rectangular feel is part of the retro-terminal character
- Don't introduce new accent colors beyond #2f80fa cobalt, #f54e00 ember, and #6aa84f fern — the warm palette must stay disciplined
- Don't use IBM Plex Sans at weight 800 or higher; the system caps at 700 and the visual voice stays measured, not shouting
- Don't use white #ffffff as the page background — the desktop wallpaper must always be the warm beige
- Don't use system sans-serif (Inter, SF Pro) as a substitute for IBM Plex Sans at headings — the slight technical geometry is signature

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Desktop Wallpaper | `#e1d7c2` | Outer page background — the warm beige CRT-era wallpaper that everything sits on |
| 1 | Browser Frame | `#ffffff` | Main browser window interior, product UI working surface |
| 2 | Cream Card | `#fdfdf8` | Sub-cards within the browser window, softer than pure white |
| 3 | Linen Tab | `#eeefe9` | Inactive tab surfaces, muted secondary panels |
| 4 | Hover Wash | `#e5e7e0` | Subtle hover/selection backgrounds on warm surfaces |

## Elevation

- **Browser Window:** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`

## Imagery

PostHog's visual language is built on pixel-art illustration, not photography. The hero features a large pixel-art sloth in a wicker chair working on a laptop with a basketball hoop, rendered in the brand's warm amber, ember, and fern palette with black pixel outlines — a deliberate retro-game aesthetic. Sidebars are populated with tiny pixel-art file icons (documents, film strips, books, store, trash). The right side of the page extends into a decorative pixel-art yard scene with a hedge, fence, watering sloth, and sleeping sloth. There is no photography, no product screenshots, no 3D renders — every visual element is either hand-pixel-art or pure UI. The pixel art uses the exact UI palette (amber #f1a82c, ember #f54e00, fern #6aa84f, warm browns) so the illustrations feel native to the interface, not decorative add-ons. Icons throughout the UI are simple monoline or filled shapes in cobalt #2f80fa and olive #4d4f46, never multicolor.

## Layout

The page is a single desktop scene rather than a traditional landing page. Outer page is full-bleed warm beige #e1d7c2 wallpaper. A single browser-window frame sits centered at max-width 1200px, 8px border-radius, 25px offset shadow, containing all product UI. Left and right sidebars (each ~80px wide) hold vertical stacks of pixel-art file icons with labels, functioning as decorative navigation. Inside the browser: a faux title bar with traffic lights, a URL field, and a formatting toolbar; then a hero with two-column layout (text left, pixel-art sloth illustration right); then a horizontal tab bar with 4 tabs (only one visible at a time); then a section header card with a cobalt left border, followed by two-column feature blocks. Section gaps are ~48px. Card padding is 16px. The rhythm is intentionally compact — this is a dense info-rich product, not a spacious marketing page — but the surrounding beige desktop gives it breathing room.

## Agent Prompt Guide

**Quick Color Reference**
- Canvas/desktop: #e1d7c2 (warm beige, never replace with white)
- Browser interior surface: #ffffff
- Primary text: #111827 headings, #4d4f46 body
- Borders: #b3b3af on white, #4d4f46 on warm
- Accent (active states, links): #2f80fa cobalt
- primary action: no distinct CTA color

**Example Component Prompts**

1. Build a hero section on a warm beige #e1d7c2 full-bleed canvas. Center a browser-window card (white #ffffff, 8px radius, 25px 50px rgba(0,0,0,0.25) shadow, max-width 1200px). Inside, two-column layout: left column has a 36px IBM Plex Sans weight 600 heading in #111827 with -0.025em tracking, 16px body in #4d4f46, then an amber #f1a82c filled button (4px radius, 8px 16px padding, #000000 text, IBM Plex Sans 14px weight 500) paired with a ghost outlined button (1px #4d4f46 border, transparent fill, #111827 text). Right column shows pixel-art sloth illustration using #f1a82c, #f54e00, #6aa84f, black outlines.

2. Create a section header card inside a white browser window: 2px solid #2f80fa left border, padding 16px 20px, white background. Heading in IBM Plex Sans 24px weight 600 in #111827, body in 15px weight 400 in #4d4f46. 4px border-radius on the right corners only.

3. Build a vertical tab bar of file icons: each item is a 32×32px pixel-art icon with a 12px IBM Plex Sans weight 400 label in #4d4f46 below it, gap 16px between items, items aligned left. Icons use cobalt #2f80fa, amber #f1a82c, and olive #4d4f46 fills with black pixel outlines.

4. Create a code snippet block: Source Code Pro 14px weight 500, text in #23251d Bark, background #fdfdf8 cream, 1px #d2d3cc border, 4px radius, padding 12px 16px. The cream-on-cream warmth is signature.

5. Build a pill tag: 9999px border-radius, padding 2px 10px, IBM Plex Sans 12px weight 500, background #f1a82c amber, text #000000. Use sparingly for category labels and status.

## Similar Brands

- **Vercel** — Both use a single-page product hero with compact developer-focused typography and minimal decoration, letting one bold accent color carry the brand
- **Linear** — Similar compact density, tight typographic tracking, and a deliberate avoidance of heavy shadows or decorative gradients in favor of confident flat surfaces
- **Arc browser** — Both lean into a meta-interface metaphor (Arc = browser-as-workspace, PostHog = desktop-as-website) that breaks the standard landing-page template
- **Retool** — Developer-tools positioning with a personality-driven illustration style and warm accent colors rather than the typical cold blue SaaS palette

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-desktop-beige: #e1d7c2;
  --color-browser-white: #ffffff;
  --color-cream-paper: #fdfdf8;
  --color-linen: #eeefe9;
  --color-fog-khaki: #e5e7e0;
  --color-ash-border: #d2d3cc;
  --color-sage: #bfc1b7;
  --color-lichen: #b3b3af;
  --color-moss: #9ea096;
  --color-olive: #65675e;
  --color-dark-olive: #4d4f46;
  --color-bark: #23251d;
  --color-ink: #111827;
  --color-charcoal: #374151;
  --color-jet: #000000;
  --color-amber-button: #f1a82c;
  --color-saffron-border: #b17816;
  --color-saffron-deep: #eb9d2a;
  --color-amber-shadow: #cd8407;
  --color-cobalt: #2f80fa;
  --gradient-cobalt: linear-gradient(90deg, rgb(1, 67, 203), rgb(43, 111, 244) 24.04%, rgb(210, 52, 1) 46.63%, rgb(255, 101, 0) 65.87%, rgb(251, 160, 0) 83.17%, rgb(1, 67, 203));
  --color-ember: #f54e00;
  --color-fern: #6aa84f;

  /* Typography — Font Families */
  --font-ui-monospace: 'ui-monospace', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-ibm-plex-sans: 'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-source-code-pro: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.35px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.45px;
  --text-heading-sm: 21px;
  --leading-heading-sm: 1.38;
  --tracking-heading-sm: -0.525px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.6px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.9px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

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
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-64: 64px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 48px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 4px;
  --radius-icons: 4px;
  --radius-buttons: 4px;
  --radius-browserwindow: 8px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  /* Surfaces */
  --surface-desktop-wallpaper: #e1d7c2;
  --surface-browser-frame: #ffffff;
  --surface-cream-card: #fdfdf8;
  --surface-linen-tab: #eeefe9;
  --surface-hover-wash: #e5e7e0;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-desktop-beige: #e1d7c2;
  --color-browser-white: #ffffff;
  --color-cream-paper: #fdfdf8;
  --color-linen: #eeefe9;
  --color-fog-khaki: #e5e7e0;
  --color-ash-border: #d2d3cc;
  --color-sage: #bfc1b7;
  --color-lichen: #b3b3af;
  --color-moss: #9ea096;
  --color-olive: #65675e;
  --color-dark-olive: #4d4f46;
  --color-bark: #23251d;
  --color-ink: #111827;
  --color-charcoal: #374151;
  --color-jet: #000000;
  --color-amber-button: #f1a82c;
  --color-saffron-border: #b17816;
  --color-saffron-deep: #eb9d2a;
  --color-amber-shadow: #cd8407;
  --color-cobalt: #2f80fa;
  --color-ember: #f54e00;
  --color-fern: #6aa84f;

  /* Typography */
  --font-ui-monospace: 'ui-monospace', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-ibm-plex-sans: 'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-source-code-pro: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.35px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.45px;
  --text-heading-sm: 21px;
  --leading-heading-sm: 1.38;
  --tracking-heading-sm: -0.525px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.6px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.9px;

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
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-64: 64px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
```