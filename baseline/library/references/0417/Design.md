# ChatGPT — Style Reference
> monastic writing desk at dawn — one input field on a white page, nothing else to look at

**Theme:** light

ChatGPT's interface is a monastic writing desk at dawn: a near-monochrome white canvas where the prompt input is the only object in the room. The design strips away every conventional UI signal — no brand color, no gradients, no meaningful shadows, no decorative imagery — leaving ink on paper. System-sans typography does all the work, with a single near-black (#0d0d0d) carrying text, icons, borders, and filled controls interchangeably. The page is a two-column shell: a narrow icon-and-text sidebar pinned left, and an empty stage where a centered sentence ('Where should I begin?') floats above a rounded input field. The discipline is compact spacing (6-10px), 10px corner radii, and a custom wordmark font (OpenAI Sans) that whispers the brand name once in the header and then disappears.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#0d0d0d` | `--color-ink-black` | Dark supporting neutral for text, icons, and strong contrast. Do not promote it to the primary CTA color |
| Paper | `#f9f9f9` | `--color-paper` | Sidebar background, page canvas — the slightly cooler off-white that separates the nav rail from the main stage |
| Snow | `#ffffff` | `--color-snow` | Main content surface, input field background, card surfaces — the brighter white where the user's attention belongs |
| Smoke | `#5d5d5d` | `--color-smoke` | Tertiary text, subdued helper copy, subtle shadow tint — secondary to Ink Black |
| Ash | `#8f8f8f` | `--color-ash` | Placeholder text, inactive icons, secondary nav, muted meta — the quietest visible gray |
| Fog | `#ececec` | `--color-fog` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |

## Tokens — Typography

### ui-sans-serif — All UI text — sidebar nav at 14px/400, buttons and body at 16px/400-500, nav emphasis at 16px/500, the empty-state question at 24px/400. System stack only; no webfont loads for content text, which keeps the interface fast and platform-native. · `--font-ui-sans-serif`
- **Substitute:** system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 24px
- **Line height:** 20px (14px/1.43), 24px (16px/1.50), 28px (18px/1.56), 24px (24px/1.00)
- **OpenType features:** `"liga" 0`
- **Role:** All UI text — sidebar nav at 14px/400, buttons and body at 16px/400-500, nav emphasis at 16px/500, the empty-state question at 24px/400. System stack only; no webfont loads for content text, which keeps the interface fast and platform-native.

### OpenAI Sans — Brand wordmark 'ChatGPT' in the header only — the single branded typography moment on the page. Tight tracking (-0.015em) and weight 600 give it a compact, confident mark that contrasts with the regular-weight system sans surrounding it. · `--font-openai-sans`
- **Weights:** 600
- **Sizes:** 18px
- **Line height:** 28px (1.56)
- **Letter spacing:** -0.27px
- **Role:** Brand wordmark 'ChatGPT' in the header only — the single branded typography moment on the page. Tight tracking (-0.015em) and weight 600 give it a compact, confident mark that contrasts with the regular-weight system sans surrounding it.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 20 | — | `--text-caption` |
| body | 16px | 24 | — | `--text-body` |
| subheading | 18px | 28 | -0.27px | `--text-subheading` |
| heading | 24px | 24 | — | `--text-heading` |

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
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 127 | 127px | `--spacing-127` |

### Border Radius

| Element | Value |
|---------|-------|
| inputs | 10px |
| buttons | 10px |
| navItems | 10px |
| largeElements | 28px |

### Layout

- **Section gap:** 60-64px
- **Element gap:** 6-8px

## Components

### Sidebar Navigation Rail
**Role:** Persistent left panel containing primary navigation and user account

260px wide, #f9f9f9 background, no border on the right edge — separation comes from the Paper-to-Snow value shift. Contains a top logo, nav items, and a pinned footer with user/settings/help. No header bar above it; it stands alone as a full-height column.

### Sidebar Nav Item
**Role:** Icon + label link in the sidebar

14px system sans weight 400, #0d0d0d text and icon, 8px gap between icon and label, 10px border-radius. Active/hover state: #ececec background fill. No left border accent or color change — only the background shifts to indicate state.

### Brand Header
**Role:** Top bar showing the ChatGPT wordmark and account actions

Sits in the main content area's top-left. 'ChatGPT' set in OpenAI Sans 18px/600 with -0.27px letter-spacing. On the far right: a dark 'Log in' button (#0d0d0d background, white text, 10px radius, 8px/16px padding) and a 'Sign up for free' text link in #0d0d0d at 16px/400.

### Empty State Prompt
**Role:** Centered greeting that appears when no conversation is active

Single sentence 'Where should I begin?' at 24px/400 in #0d0d0d, centered horizontally in the main content area with 127px horizontal margins. Vertically positioned in the upper-middle of the available space. No icon, no illustration, no color — just the question.

### Prompt Input Field
**Role:** The primary interaction surface — where the user types their message

Full-width within the centered content area (with 60-64px horizontal padding internally). #ffffff background, 1px #ececec border, 10px border-radius. Left side: a '+' icon for attachments. Center: placeholder 'Ask anything' in #8f8f8f at 16px/400. Right side: a dark Voice button (10px radius, #0d0d0d, white 'Voice' label with waveform icon at 14px/500). The field is the most visually weighted element on the page by virtue of being the only object with a visible border.

### Log In Button (Filled)
**Role:** Primary account action in the header

#0d0d0d background, #ffffff text, 10px border-radius, 8px vertical / 16px horizontal padding, 16px/500. Not a chromatic brand button — it is a dark neutral inversion, which keeps the palette pure while still reading as a primary action through polarity.

### Sign Up Link
**Role:** Secondary account action, text-only

16px/400 in #0d0d0d, no underline by default, 8px gap to the left of the Log In button. Intentionally un-styled to subordinate it to the filled button.

### Voice Button (Pill)
**Role:** Input action for voice input, embedded in the right side of the prompt field

10px border-radius, #0d0d0d background, #ffffff text and icon. Contains a small waveform/sound icon followed by 'Voice' at 14px/500. Functions as a dark inverted micro-button within the white input field.

### Sidebar Footer Block
**Role:** User account info, settings, help, and promotional copy at the bottom of the sidebar

Pinned to the bottom of the sidebar with no visible divider. Contains a secondary 'Log in' button (outlined, #0d0d0d border, 10px radius), settings and help links at 14px/400, and muted promotional text ('Get responses tailored to you') in #8f8f8f at 14px/400 with helper copy in #5d5d5d.

### Hamburger/Collapse Icon
**Role:** Toggle to collapse or expand the sidebar

Simple line icon at the top-left of the sidebar, 16px size, #0d0d0d stroke, 1.5px weight. No button chrome — just the icon on the Paper background.

## Do's and Don'ts

### Do
- Use #0d0d0d as the single dark token for all text, icons, borders, and filled controls — do not introduce a second dark value
- Set all interactive element border-radius to 10px; use 28px only for large container shapes
- Use system-sans (ui-sans-serif) for all UI text; reserve OpenAI Sans 18px/600 exclusively for the wordmark in the header
- Set font-feature-settings to "liga" 0 on body text to prevent ligature rendering in a text-heavy interface
- Center main content with 60-127px horizontal margins to create the stage-like negative space that defines the layout
- Achieve separation between sidebar and main area through the Paper (#f9f9f9) to Snow (#ffffff) value shift — not borders or shadows
- Cap type weight at 600; the interface never uses bold display weights, keeping all text at conversational volume

### Don't
- Do not introduce any chromatic brand color, accent, or gradient — the 0% colorfulness is a signature, not a constraint to overcome
- Do not use shadows for elevation; the input field is the only bordered element and uses a 1px #ececec line, not a shadow
- Do not use pill shapes (9999px radius) — stay at 10px for all rounded elements including buttons and tags
- Do not use display weights (700-900) — weight 600 is the maximum across the entire system
- Do not add imagery, illustrations, or decorative graphics to the empty state — 'Where should I begin?' stands alone
- Do not use border accents, left-edge color bars, or fill tints to indicate active nav state — use the #ececec background fill only
- Do not add visible dividers between sidebar sections; rely on whitespace and the pinned footer layout to separate groups

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Sidebar Rail | `#f9f9f9` | Left navigation panel, always visible, slightly cooler than the main canvas to create separation without a border |
| 1 | Main Stage | `#ffffff` | Primary content area, the bright surface where the prompt input and responses appear |
| 2 | Input Field | `#ffffff` | Rounded prompt input — the focal object on the page, distinguished only by its 10px radius and 1px Fog border |
| 3 | Filled Control | `#0d0d0d` | Log in button, Voice button — dark filled surfaces that invert the page polarity to signal action |

## Elevation

No shadow-based elevation system. The design uses surface contrast and a single 1px Fog border to define the input field. The only shadow present is a near-imperceptible #5d5d5d at very low opacity, used sparingly. Separation is achieved through the Paper-to-Snow value shift between sidebar and main area, not through depth.

## Imagery

No imagery whatsoever. The interface is pure UI — text, icons, and the single bordered input field. Icons are line-style, 1.5px stroke weight, monochrome (#0d0d0d), and serve only as navigation labels. There are no illustrations, photographs, 3D renders, product screenshots, or decorative graphics on the page. The visual richness comes entirely from the breathing room around the prompt input.

## Layout

Two-column shell: a ~260px sidebar rail on the left (Paper #f9f9f9) and a main content area (Snow #ffffff) on the right. The sidebar is always visible and full-height, containing a top logo, a vertical list of nav items (New chat, Search chats, Images, Apps, Deep research, Health), and a pinned footer block with settings/help/login. The main content area is a wide stage with generous horizontal margins (127px auto-centering) that frames a single centered heading ('Where should I begin?') above the prompt input field. A minimal brand header (wordmark left, login/signup right) sits at the top of the main area. A cookie/terms line runs along the very bottom. The overall density is compact but with deliberate negative space around the prompt, creating a stage effect. No alternating sections, no card grids, no multi-column content layouts — the page is deliberately a single object on a blank field.

## Agent Prompt Guide

## Quick Color Reference
- text: #0d0d0d
- background: #f9f9f9 (sidebar) / #ffffff (main)
- border: #ececec
- muted: #8f8f8f
- secondary text: #5d5d5d
- primary action: no distinct CTA color

## Example Component Prompts

1. **Prompt Input Field** — "Create a centered prompt input: full width within 127px horizontal margins, 10px border-radius, #ffffff background, 1px #ececec border, 16px/24px internal padding. Left: '+' icon at 16px in #0d0d0d. Center: placeholder 'Ask anything' in #8f8f8f at 16px weight 400. Right: dark Voice button (10px radius, #0d0d0d background, white 'Voice' text + waveform icon at 14px weight 500)."

2. **Sidebar Nav Item** — "Create a sidebar link: 14px system sans weight 400 in #0d0d0d, 16px left padding, 6px top/bottom padding, 10px border-radius, 8px gap between line icon and label. Hover/active state fills with #ececec background. No color change, no border accent."

3. **Brand Header Row** — "Create a top bar: 'ChatGPT' wordmark left in OpenAI Sans 18px weight 600 with -0.27px letter-spacing in #0d0d0d. Far right: dark filled 'Log in' button (#0d0d0d, white text, 10px radius, 8px 16px padding) followed by 'Sign up for free' text link in #0d0d0d at 16px weight 400 with 8px gap."

4. **Empty State** — "Create a centered empty state: single line 'Where should I begin?' at 24px weight 400 in #0d0d0d, horizontally centered with 127px auto margins, positioned in the upper-middle of the main content area. No icon, no illustration, no supporting text."

5. **Log In Button (Dark Inverted)** — "Create a filled login button: #0d0d0d background, #ffffff text, 10px border-radius, 8px vertical and 16px horizontal padding, text at 16px weight 500. This is a dark neutral inversion, not a chromatic brand color — its prominence comes from polarity, not hue."

## Similar Brands

- **Claude (Anthropic)** — Same monastic chat interface philosophy — near-monochrome white canvas, single centered input, no decorative imagery, system-sans typography
- **Perplexity** — Same light-mode text-first layout with a prominent centered search/ask input and minimal sidebar navigation
- **Notion AI** — Same compact sidebar-plus-canvas shell, 10px corner radii, and monochrome discipline across UI controls
- **Google Gemini** — Same light-mode chat surface with a single rounded input field as the page hero and no chromatic brand color in the core UI

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink-black: #0d0d0d;
  --color-paper: #f9f9f9;
  --color-snow: #ffffff;
  --color-smoke: #5d5d5d;
  --color-ash: #8f8f8f;
  --color-fog: #ececec;

  /* Typography — Font Families */
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-openai-sans: 'OpenAI Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 20;
  --text-body: 16px;
  --leading-body: 24;
  --text-subheading: 18px;
  --leading-subheading: 28;
  --tracking-subheading: -0.27px;
  --text-heading: 24px;
  --leading-heading: 24;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-127: 127px;

  /* Layout */
  --section-gap: 60-64px;
  --element-gap: 6-8px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 28px;

  /* Named Radii */
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-navitems: 10px;
  --radius-largeelements: 28px;

  /* Surfaces */
  --surface-sidebar-rail: #f9f9f9;
  --surface-main-stage: #ffffff;
  --surface-input-field: #ffffff;
  --surface-filled-control: #0d0d0d;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink-black: #0d0d0d;
  --color-paper: #f9f9f9;
  --color-snow: #ffffff;
  --color-smoke: #5d5d5d;
  --color-ash: #8f8f8f;
  --color-fog: #ececec;

  /* Typography */
  --font-ui-sans-serif: 'ui-sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-openai-sans: 'OpenAI Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 20;
  --text-body: 16px;
  --leading-body: 24;
  --text-subheading: 18px;
  --leading-subheading: 28;
  --tracking-subheading: -0.27px;
  --text-heading: 24px;
  --leading-heading: 24;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-127: 127px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 28px;
}
```