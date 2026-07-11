# Relate — Style Reference
> Blueprint on frosted linen — Inter headlines with tight negative tracking over a pale blue-white canvas, product UI surfacing as quiet white cards, the single vivid blue accent used like a highlighter pen rather than paint.

**Theme:** light

Relate uses a light, airy canvas with a near-white #fcfcfc base that gives the product a paper-like stillness. The hero section features a soft blue-lavender radial wash that bleeds into white, making the product feel approachable without relying on heavy gradients. Typography is Inter-first with aggressive negative tracking at display sizes — headlines tighten toward -2px at 80px, conveying focus and density without visual noise. The accent blue #145aff appears as inline text color and focused-element emphasis rather than filled button backgrounds, so the interface stays quiet and the brand color reads as a signal, not decoration. Product screenshots embedded in rounded cards with 8px radius and feather-light shadows (rgba(0,0,0,0.1)) create the impression of a real app hovering just above the page surface.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Linen Canvas | `#fcfcfc` | `--color-linen-canvas` | Primary page background and default card surface — the near-white that reads as paper rather than pure white, reducing harshness on body-length reading |
| Sky Wash | `#f0f4fe` | `--color-sky-wash` | Subtle blue-tinted section backgrounds, secondary card fills, and hero gradient endpoint — the one step between canvas and pure white that creates soft depth |
| Midnight Ink | `#020520` | `--color-midnight-ink` | Primary hero and display headline color — the deepest text tone on light backgrounds, with a slight violet shift that prevents flat-black harshness |
| Graphite | `#14141e` | `--color-graphite` | Secondary headline and body text at high prominence — slightly lighter than Midnight Ink, used for section headings and strong body content |
| Slate | `#374151` | `--color-slate` | Product UI labels, sidebar navigation text, and medium-emphasis body content inside app screenshots |
| Ash | `#696a72` | `--color-ash` | Secondary body text, subheadings, and caption-level content that needs to recede behind primary text |
| Fog | `#95959b` | `--color-fog` | Placeholder text, disabled states, timestamp labels, and tertiary metadata |
| Steel | `#6b7280` | `--color-steel` | Muted helper text inside product cards and customer company descriptions |
| Signal Blue | `#145aff` | `--color-signal-blue` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Periwinkle Glow | `radial-gradient(97.8% 181.6% at 53.7% 50%, rgb(20, 20, 30) 0%, rgba(88, 107, 141, 0.8) 100%)` | `--color-periwinkle-glow` | Hero background wash and decorative shadow bloom — the diffused halo that gives the hero section its soft blue atmosphere |
| Hero Blue Fade | `linear-gradient(rgb(59, 130, 246) 0%, rgb(20, 90, 255) 100%)` | `--color-hero-blue-fade` | Blue outline accent for tags, dividers, and focused UI edges |
| Emerald Status | `#16ca2e` | `--color-emerald-status` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Coral Alert | `#f26052` | `--color-coral-alert` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Azure Info | `#0099ff` | `--color-azure-info` | Blue supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |
| Amber Tag | `#ffa64d` | `--color-amber-tag` | Orange outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Primary Action Accent | `#0f1f3d` | `--color-primary-action-accent` | Violet accent for outlined action borders, linked labels, and lightweight interactive emphasis. Use as the primary outlined action border and text |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Inter — Primary typeface for all headings, body, navigation, and buttons. The signature move is aggressive negative letter-spacing at display sizes: -2.96px at 80px, -1.51px at 56px, -0.76px at 40px — headlines compress toward the left edge while body text runs at normal or slightly positive tracking. This creates two distinct visual registers: dense display and airy body. · `--font-inter`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 15px, 16px, 18px, 20px, 22px, 40px, 56px, 80px
- **Line height:** 1.00–1.50 (tighter at display, looser at body)
- **Letter spacing:** -2.96px at 80px, -1.51px at 56px, -0.76px at 40px; slightly positive (+0.09–0.21px) at 10–14px caption/label sizes
- **OpenType features:** `normal`
- **Role:** Primary typeface for all headings, body, navigation, and buttons. The signature move is aggressive negative letter-spacing at display sizes: -2.96px at 80px, -1.51px at 56px, -0.76px at 40px — headlines compress toward the left edge while body text runs at normal or slightly positive tracking. This creates two distinct visual registers: dense display and airy body.

### Pretendard — Korean-language body and UI text used in the product screenshots and localized content. Slightly positive tracking (0.019–0.03em) to compensate for CJK glyph density. Present in the product UI cards, not the marketing copy. · `--font-pretendard`
- **Substitute:** Noto Sans KR, SUIT
- **Weights:** 400 (Regular, Medium, Bold variants)
- **Sizes:** 12px, 14px, 15px, 16px, 18px
- **Line height:** 1.00–1.71
- **Letter spacing:** +0.23–0.43px across all sizes
- **Role:** Korean-language body and UI text used in the product screenshots and localized content. Slightly positive tracking (0.019–0.03em) to compensate for CJK glyph density. Present in the product UI cards, not the marketing copy.

### Roboto Mono — Monospaced accent font for deal values, pipeline counts, and data labels — the tight -0.054em tracking at 22px keeps numeric displays compact. · `--font-roboto-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 500, 700
- **Sizes:** 12px, 22px
- **Line height:** 1.00–1.27
- **Letter spacing:** -0.99px at 22px, -0.54px at 12px
- **Role:** Monospaced accent font for deal values, pipeline counts, and data labels — the tight -0.054em tracking at 22px keeps numeric displays compact.

### Font Awesome 6 Pro — Icon system used throughout product UI and navigation. Light variant at 8–12px for dense UI rows, Solid variant for emphasis. Monochromatic, matching surrounding text color. · `--font-font-awesome-6-pro`
- **Substitute:** Heroicons, Lucide Icons
- **Weights:** 400 (Light, Regular, Solid variants)
- **Sizes:** 8px–18px
- **Line height:** 1.00–2.50
- **Role:** Icon system used throughout product UI and navigation. Light variant at 8–12px for dense UI rows, Solid variant for emphasis. Monochromatic, matching surrounding text color.

### Font Awesome 6 Pro Solid — Font Awesome 6 Pro Solid — detected in extracted data but not described by AI · `--font-font-awesome-6-pro-solid`
- **Weights:** 400, 900
- **Sizes:** 8px, 10px, 11px
- **Line height:** 1, 1.09, 1.25
- **Role:** Font Awesome 6 Pro Solid — detected in extracted data but not described by AI

### Font Awesome 6 Pro Regular — Font Awesome 6 Pro Regular — detected in extracted data but not described by AI · `--font-font-awesome-6-pro-regular`
- **Weights:** 400
- **Sizes:** 11px, 12px, 14px, 18px
- **Line height:** 1, 1.09, 1.2
- **Letter spacing:** 0.011
- **Role:** Font Awesome 6 Pro Regular — detected in extracted data but not described by AI

### Font Awesome 6 Brands Regular — Font Awesome 6 Brands Regular — detected in extracted data but not described by AI · `--font-font-awesome-6-brands-regular`
- **Weights:** 400
- **Sizes:** 18px
- **Line height:** 1
- **Role:** Font Awesome 6 Brands Regular — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | 0.13px | `--text-caption` |
| body | 14px | 1.43 | 0.06px | `--text-body` |
| heading-sm | 18px | 1.4 | -0.16px | `--text-heading-sm` |
| heading | 22px | 1.25 | -0.22px | `--text-heading` |
| heading-lg | 40px | 1.08 | -0.76px | `--text-heading-lg` |
| display | 56px | 1.05 | -1.51px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 52 | 52px | `--spacing-52` |
| 72 | 72px | `--spacing-72` |

### Border Radius

| Element | Value |
|---------|-------|
| pill | 100px |
| cards | 8px |
| badges | 4px |
| images | 16px |
| inputs | 12px |
| modals | 32px |
| buttons | 12px |
| cardLarge | 40px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.1) 0px 0px 4px -2px` | `--shadow-sm` |
| sm-2 | `rgba(0, 0, 0, 0.25) 0px 0px 4px -2px` | `--shadow-sm-2` |
| xl | `rgba(20, 90, 255, 0.1) 0px 0px 100px -28px` | `--shadow-xl` |
| sm-3 | `rgba(20, 90, 255, 0.3) 0px 0px 4px -2px` | `--shadow-sm-3` |
| xl-2 | `rgba(20, 90, 255, 0.1) 0px 0px 50px -28px, rgba(0, 0, 0, ...` | `--shadow-xl-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Element gap:** 8-12px

## Components

### Primary Outlined Button
**Role:** Main call-to-action navigation button (Book a demo, Get started free outline variant)

Background rgba(255,255,255,0.8), text #0f1f3d, border 1px solid #0f1f3d, border-radius 12px, padding 15px. Inter 500 at 14–16px. The outlined style makes this the de-facto CTA without using a filled colored background — authority comes from the sharp dark border against the light surface.

### Primary Filled Button
**Role:** High-emphasis action (Get started free, filled navbar variant)

Background linear-gradient(rgb(59,130,246) 0%, rgb(20,90,255) 100%), text #ffffff, border-radius 12px, padding 15px 20px. Inter 600 at 14px. The blue gradient fill is the only filled button on the page, reserved for the single top-priority action.

### Hero Ghost Button
**Role:** Secondary CTA inside the hero gradient zone

Background #fcfcfc, text #145aff (note: this is the browser-artifact-adjacent value — use #0f1f3d for non-link text), border 1px solid with blue tint, border-radius 50px pill shape, padding 14px 32px. Appears as a pill over the soft blue hero wash. Inter 500 at 16px.

### Compact Product Card
**Role:** CRM pipeline deal rows, contact list items, and inbox entries

Background #ffffff, border-radius 8px, box-shadow rgba(0,0,0,0.1) 0px 0px 4px -2px, padding 12px top/bottom and 16px left. Contains company logo (20px circle), company name in Inter 500 14px #14141, deal value in Roboto Mono 500 12px, and last-activity note in Inter 400 12px #6b7280.

### Large Feature Section Card
**Role:** Marketing page feature showcase blocks with embedded product screenshot

Background #fcfcfc, border-radius 40px, multi-layer shadow (0.082 → 0.07 → 0.016 opacity cascade for a floating feel), padding 52px top/bottom and 72px left/right. Houses product screenshot images with 16px radius inside the card.

### Glass Overlay Card
**Role:** Floating UI elements layered over hero gradient or colored backgrounds

Background rgba(252,252,252,0.2), border-radius 28px (standard) or 48px (larger variant), no box-shadow, backdrop-filter blur(5–15px). Text inherits from container. Used for frosted-glass UI previews in hero and feature sections.

### Navigation Bar
**Role:** Top-level site navigation

Background #fcfcfc with backdrop-filter blur(2px), full-width, 0–90px height zone. Logo left, nav links center (Inter 400–500 14px #374151), auth actions right. Nav links use 100px pill radius on hover states. 'Book a demo' = outlined 12px-radius button, 'Get started free' = filled gradient button.

### Sidebar Navigation Item
**Role:** Product UI left-rail navigation (People, Pipelines, Views)

Inter 400 14px, text #374151 default, active state uses #14141 weight 500 with a 100px pill background at #f0f4fe. Icons via Font Awesome 6 Pro Light at 12px. Row height 32px, gap 2–4px between items.

### Status Badge
**Role:** Deal stage, contact status, and pipeline state indicators

Background tint of semantic color (Emerald #16ca2 at 10% opacity, Coral #f26052 at 10% opacity, Azure #3b82f6 at 10% opacity), text at full semantic color, border-radius 4px, padding 2px 6px. Inter 500 12px. Compact single-word labels: 'Lost', 'Prospecting', 'Active'.

### Text Input
**Role:** Form fields and search inputs

Background rgba(255,255,255,0.08) on dark contexts or #ffffff on light, border 1px solid #cfcfcf default / #0099ff focus ring (box-shadow rgba(0,153,255,1) 0px 0px 0px 3px), border-radius 12px, padding 15px. Inter 400 14px #14141e. Placeholder in #95959b.

### Y Combinator Trust Badge
**Role:** Social proof label above hero headline

Small inline pill: YC orange square icon + 'Backed by Y Combinator' text in Inter 500 12px #374151. Background transparent or very light, no border, acts as a micro-social-proof element that anchors before the headline lands.

### Customer Logo Strip
**Role:** Social proof logo grid in grayscale

Customer/partner logos rendered in #696a72 or near-black at reduced opacity (grayscale filter). Arranged in 4–5 column grid. No borders, no cards — logos float on the canvas. Spacing 32–48px between logos.

## Do's and Don'ts

### Do
- Use Inter with letter-spacing -1.51px at 56px and -2.96px at 80px for all display headlines — the tight tracking is the signature.
- Apply #145aff exclusively as a text accent or focus-ring color, never as a filled button background; the brand blue is a highlighter, not paint.
- Use border-radius 8px for compact product UI cards and 40px for large marketing feature cards — never mix these within the same section.
- Render the hero section background as a soft blue radial wash using #b6cbfd and #f0f4fe, not a solid color or photograph.
- Keep card shadows at rgba(0,0,0,0.1) 0px 0px 4px -2px — the near-invisible shadow creates lift without drama.
- Use #fcfcfc (not pure #ffffff) as the default page canvas and card background — the slight off-white maintains paper warmth.
- Apply Roboto Mono 500 at 12px with -0.54px letter-spacing for all numeric deal values and pipeline counts inside product UI.

### Don't
- Don't fill any button with a solid #145aff background — that color exists only as text, borders, and focus rings in this system.
- Don't use border-radius values between 8px and 40px for cards — the jump from compact (8px) to large-feature (40px) is intentional; values like 16–24px for cards break the rhythm.
- Don't use font-weight 700 or 800 for headlines — Inter at 600 is the maximum weight; heavier weights fight the negative-tracking elegance.
- Don't use pure #000000 or pure #ffffff for primary text and backgrounds respectively — use #020520/#14141 for text and #fcfcfc for backgrounds.
- Don't add colorful decorative gradients to section backgrounds — only the hero section carries the blue wash; all other sections use flat #fcfcfc or #f0f4fe.
- Don't apply box shadows to navigation items or sidebar elements — elevation lives only on cards and product UI surfaces.
- Don't use semantic colors (#16ca2, #f26052, #ffa64d) outside of status badges and deal-stage labels — they are data-state indicators, not decorative accents.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fcfcfc` | Page background — the base layer everything sits on |
| 1 | Tinted Wash | `#f0f4fe` | Alternate section backgrounds and hero gradient zone — one step above canvas with a blue tint |
| 2 | Card Surface | `#ffffff` | Product UI cards, feature cards, and elevated content containers with subtle shadow |
| 3 | Overlay | `#fcfcfc` | Large feature cards with 40px radius (rgba(252,252,252,0.2) for glassmorphic hero overlays) |

## Elevation

- **Standard Product Card:** `rgba(0, 0, 0, 0.1) 0px 0px 4px -2px`
- **Elevated UI Element:** `rgba(0, 0, 0, 0.25) 0px 0px 4px -2px`
- **Feature Section Card:** `rgba(0, 0, 0, 0.082) 0px 0.36px 1.81px -1.42px, rgba(0, 0, 0, 0.07) 0px 1.37px 6.87px -2.83px, rgba(0, 0, 0, 0.016) 0px 6px 30px -4.25px`
- **Blue-Accented Focus Element:** `rgba(20, 90, 255, 0.1) 0px 0px 50px -28px, rgba(0, 0, 0, 0.18) 0px 0px 3px -1px`
- **Hero Ambient Glow:** `rgba(20, 90, 255, 0.1) 0px 0px 100px -28px`

## Imagery

Relate's visual language centers entirely on product screenshots — no photography, no abstract illustration, no lifestyle imagery. The product UI is the hero visual: CRM pipeline kanban columns, inbox message threads, and contact detail panels are captured at high resolution and embedded inside large rounded cards (40px radius) with feather-light shadows. Screenshots are contained within the card boundaries with 16px inner radius, never full-bleed. The product captures use realistic data (company names like Figma, Framer, Stripe, Deel) to read as authentic product usage rather than designed mockups. Icons throughout the UI use Font Awesome 6 Pro Light — thin-stroked, monochrome, matched to surrounding text color. The overall visual weight is text-dominant with imagery serving as product demonstration rather than decoration; a single screenshot per section carries the entire visual load.

## Layout

Max-width ~1200px centered on the viewport with generous side padding. The hero is a centered-stack pattern: YC badge → large display headline (two lines, centered) → subtext paragraph → CTA button, all vertically stacked over the blue radial background wash. The hero CTA floats above a partially visible product screenshot that bleeds into the next section, creating a scroll incentive. Sections below alternate between full-white bands and pale blue (#f0f4fe) tinted bands. Feature sections use a centered headline + subtext above a single large card (40px radius, 52/72px padding) containing a full-width product screenshot — no two-column text+image splits. The customer logo strip is a flat two-row grid of grayscale logos. The pipeline demo section uses a 3–4 column product kanban visible through a cropped viewport card. Navigation is a sticky top bar with blur backdrop, logo-left, links-center, actions-right layout. Density alternates: the nav and product cards are compact (8–12px gaps), while marketing sections breathe at 80px vertical gaps between them.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary): #020520
- text (secondary): #696a72
- background: #fcfcfc
- border / hairline: #cfcfcf
- accent (inline / focus): #145aff
- primary action: #0f1f3d (outlined action border)

**Example Component Prompts**

1. Create an Outlined Primary Action: Transparent background, #0f1f3d border and text, 9999px radius, compact pill padding. Use it for the main CTA instead of a filled button.

2. **Compact CRM Deal Card**: White (#ffffff) background, border-radius 8px, box-shadow rgba(0,0,0,0.1) 0px 0px 4px -2px, padding 12px 12px 12px 16px. Row: 20px company logo circle, company name Inter 500 14px #14141e, deal value Roboto Mono 500 12px -0.54px tracking #374151, last-activity note Inter 400 12px #6b7280, timestamp Inter 400 10px #95959b right-aligned.

3. **Feature Section Card**: Background #fcfcfc, border-radius 40px, box-shadow 3-layer soft (0.082 → 0.07 → 0.016 opacity), padding 52px top/bottom 72px left/right. Section headline above card: Inter 600 40px #14141e letter-spacing -0.76px centered. Inside card: product screenshot with 16px inner radius, full width.

4. **Outlined Navigation Button (Book a demo)**: Background rgba(255,255,255,0.8), border 1px solid #0f1f3d, border-radius 12px, padding 15px 20px, Inter 500 14px #0f1f3d. No shadow. Sits left of the filled gradient button in the navbar.

5. **Status Badge**: Background color at 10% opacity of semantic color (e.g. rgba(22,202,46,0.1) for active, rgba(242,96,82,0.1) for lost), text at full semantic color, border-radius 4px, padding 2px 6px, Inter 500 12px. Examples: 'Active' in #16ca2e, 'Lost' in #f26052, 'Prospecting' in #3b82f6.

## Gradient System

Three gradient contexts exist in this design system:
1. **Hero Background Wash**: Soft radial bloom using #b6cbfd and #f0f4fe, applied as a background-image behind the hero headline. Stays within the hero zone and fades to #fcfcfc at page edges.
2. **Primary Filled Button**: linear-gradient(rgb(59,130,246) 0%, rgb(20,90,255) 100%) — the blue shift from lighter to deeper blue on the single filled CTA.
3. **Dark Mode Section Gradient** (used sparingly for demo/feature overlays): radial-gradient from #0f1f3d to rgba(0,0,0,0.87) or from #000714 to #0f1f3d — deep navy backgrounds for high-contrast product demo contexts. Never apply to more than one section per page.

## Similar Brands

- **Linear** — Same Inter-heavy type system with aggressive negative tracking at display sizes, near-white canvas, and product screenshot as primary hero visual
- **Attio** — CRM SaaS using a light canvas, single-blue accent for interactive states, and compact pipeline card UI with feather-light shadows
- **Notion** — Near-white #fcfcfc page background, Inter 400–600 with tight heading tracking, and flat product UI screenshots as marketing imagery rather than lifestyle photography
- **Loom** — Outlined dark-border CTA buttons alongside a filled blue gradient button — two-button CTA pattern with identical construction
- **Height** — Compact list-based product UI cards at 8px radius with rgba(0,0,0,0.1) shadows, single blue accent, and Inter-based type scale with negative heading tracking

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-linen-canvas: #fcfcfc;
  --color-sky-wash: #f0f4fe;
  --color-midnight-ink: #020520;
  --color-graphite: #14141e;
  --color-slate: #374151;
  --color-ash: #696a72;
  --color-fog: #95959b;
  --color-steel: #6b7280;
  --color-signal-blue: #145aff;
  --color-periwinkle-glow: #b6cbfd;
  --gradient-periwinkle-glow: radial-gradient(97.8% 181.6% at 53.7% 50%, rgb(20, 20, 30) 0%, rgba(88, 107, 141, 0.8) 100%);
  --color-hero-blue-fade: #3b82f6;
  --gradient-hero-blue-fade: linear-gradient(rgb(59, 130, 246) 0%, rgb(20, 90, 255) 100%);
  --color-emerald-status: #16ca2e;
  --color-coral-alert: #f26052;
  --color-azure-info: #0099ff;
  --color-amber-tag: #ffa64d;
  --color-primary-action-accent: #0f1f3d;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pretendard: 'Pretendard', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-font-awesome-6-pro: 'Font Awesome 6 Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-pro-solid: 'Font Awesome 6 Pro Solid', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-pro-regular: 'Font Awesome 6 Pro Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-brands-regular: 'Font Awesome 6 Brands Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.13px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.06px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.16px;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --tracking-heading: -0.22px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.76px;
  --text-display: 56px;
  --leading-display: 1.05;
  --tracking-display: -1.51px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-72: 72px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --element-gap: 8-12px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 40px;
  --radius-3xl-5: 44px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 300px;
  --radius-full-4: 500px;

  /* Named Radii */
  --radius-pill: 100px;
  --radius-cards: 8px;
  --radius-badges: 4px;
  --radius-images: 16px;
  --radius-inputs: 12px;
  --radius-modals: 32px;
  --radius-buttons: 12px;
  --radius-cardlarge: 40px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 0px 4px -2px;
  --shadow-sm-2: rgba(0, 0, 0, 0.25) 0px 0px 4px -2px;
  --shadow-xl: rgba(20, 90, 255, 0.1) 0px 0px 100px -28px;
  --shadow-sm-3: rgba(20, 90, 255, 0.3) 0px 0px 4px -2px;
  --shadow-xl-2: rgba(20, 90, 255, 0.1) 0px 0px 50px -28px, rgba(0, 0, 0, 0.18) 0px 0px 3px -1px;

  /* Surfaces */
  --surface-canvas: #fcfcfc;
  --surface-tinted-wash: #f0f4fe;
  --surface-card-surface: #ffffff;
  --surface-overlay: #fcfcfc;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-linen-canvas: #fcfcfc;
  --color-sky-wash: #f0f4fe;
  --color-midnight-ink: #020520;
  --color-graphite: #14141e;
  --color-slate: #374151;
  --color-ash: #696a72;
  --color-fog: #95959b;
  --color-steel: #6b7280;
  --color-signal-blue: #145aff;
  --color-periwinkle-glow: #b6cbfd;
  --color-hero-blue-fade: #3b82f6;
  --color-emerald-status: #16ca2e;
  --color-coral-alert: #f26052;
  --color-azure-info: #0099ff;
  --color-amber-tag: #ffa64d;
  --color-primary-action-accent: #0f1f3d;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-pretendard: 'Pretendard', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roboto-mono: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-font-awesome-6-pro: 'Font Awesome 6 Pro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-pro-solid: 'Font Awesome 6 Pro Solid', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-pro-regular: 'Font Awesome 6 Pro Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-font-awesome-6-brands-regular: 'Font Awesome 6 Brands Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.13px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.06px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.16px;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --tracking-heading: -0.22px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.76px;
  --text-display: 56px;
  --leading-display: 1.05;
  --tracking-display: -1.51px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-72: 72px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 32px;
  --radius-3xl-4: 40px;
  --radius-3xl-5: 44px;
  --radius-full: 50px;
  --radius-full-2: 100px;
  --radius-full-3: 300px;
  --radius-full-4: 500px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 0px 4px -2px;
  --shadow-sm-2: rgba(0, 0, 0, 0.25) 0px 0px 4px -2px;
  --shadow-xl: rgba(20, 90, 255, 0.1) 0px 0px 100px -28px;
  --shadow-sm-3: rgba(20, 90, 255, 0.3) 0px 0px 4px -2px;
  --shadow-xl-2: rgba(20, 90, 255, 0.1) 0px 0px 50px -28px, rgba(0, 0, 0, 0.18) 0px 0px 3px -1px;
}
```