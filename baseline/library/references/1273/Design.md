# Contractbook — Style Reference
> "Warm cream atelier with electric violet punctuation and a single yellow spark" — a designer-friendly contract workspace that feels like a Scandinavian studio more than a law firm.

**Theme:** light

Contractbook operates as an editorial SaaS canvas: a warm linen-cream base (#f0f0ec) flooded with off-white surface cards, anchored by a single electric violet (#1009f6) that powers primary action and geometric hero atmosphere. A solar yellow (#ffba09) acts as a warm secondary accent for the most desirable 'Request a demo' entry point, creating a two-button hierarchy where yellow owns intimacy and violet owns enterprise. The system pairs confident 700-weight display type at 40-48px with airy 400-weight body, using a custom geometric sans (Abcwhyte) that gives the interface a designer-publication feel rather than a typical dashboard. Playful hand-drawn illustrations (eye, dartboard, scribbles) in the brand palette inject humanity between functional blocks. Components favor generous 24-40px radii, pill-shaped controls (999px), and minimal elevation — the cream surface itself does the work that shadows do elsewhere.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Violet | `#1009f6` | `--color-electric-violet` | Primary brand color — hero backgrounds, geometric panels, primary action buttons, active nav — vivid blue-violet that reads as both trustworthy and unconventional against the warm cream canvas |
| Solar Yellow | `#ffba09` | `--color-solar-yellow` | Yellow action color for filled buttons, selected navigation states, and focused conversion moments. |
| Ink Black | `#1a1a1a` | `--color-ink-black` | Primary text, icon strokes, dark buttons, default borders — near-black with a whisper of warmth to harmonize with the cream surface |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, input fills, button text on dark fills — the elevated layer floating above the cream base |
| Linen Cream | `#f0f0ec` | `--color-linen-cream` | Page canvas, section backgrounds, card rests, muted surfaces — the warm off-white that defines the entire system's atmosphere |
| Charcoal | `#222222` | `--color-charcoal` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Stone Gray | `#d4d4d0` | `--color-stone-gray` | Hairline dividers, subtle borders, inactive controls — quiet structural lines |
| Silver Gray | `#b3b3b3` | `--color-silver-gray` | Input field borders in resting state, placeholder-adjacent neutrals |
| Pure Black | `#000000` | `--color-pure-black` | Maximum contrast text on light surfaces, sharp divider accents |
| Sky Mist | `#add3e5` | `--color-sky-mist` | Decorative card washes, illustration fills, soft section tints — cool pastel that balances the yellow accent |
| Blossom Pink | `#e3c7de` | `--color-blossom-pink` | Decorative illustration fills, soft section tints, playful highlights — warm pastel paired with the yellow to create a friendly duo |
| Forest Dark | `#304801` | `--color-forest-dark` | Rare decorative deep accent in illustrations only — use sparingly, never as text or background fill |

## Tokens — Typography

### Abcwhyte — Single typeface system — custom geometric sans with humanist warmth. Weight 700 for headlines (40-48px) carries the editorial confidence; weight 400 for body (16px) and UI (14px) keeps blocks readable without shouting. Substitutes: Inter, Söhne, or General Sans — avoid SF Pro and system defaults which lack the geometric personality. · `--font-abcwhyte`
- **Substitute:** Inter or General Sans
- **Weights:** 400, 700
- **Sizes:** 11px, 12px, 14px, 16px, 25px, 28px, 32px, 40px, 48px
- **Line height:** 1.00-1.87
- **Letter spacing:** normal
- **Role:** Single typeface system — custom geometric sans with humanist warmth. Weight 700 for headlines (40-48px) carries the editorial confidence; weight 400 for body (16px) and UI (14px) keeps blocks readable without shouting. Substitutes: Inter, Söhne, or General Sans — avoid SF Pro and system defaults which lack the geometric personality.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 11px | 1.4 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| body-lg | 16px | 1.6 | — | `--text-body-lg` |
| subheading | 25px | 1.25 | — | `--text-subheading` |
| heading-sm | 28px | 1.3 | — | `--text-heading-sm` |
| heading | 32px | 1.24 | — | `--text-heading` |
| heading-lg | 40px | 1.2 | — | `--text-heading-lg` |
| display | 48px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 9 | 9px | `--spacing-9` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 21 | 21px | `--spacing-21` |
| 22 | 22px | `--spacing-22` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| pills | 999px |
| small | 10-16px |
| images | 40px |
| inputs | 4px |
| buttons | 24px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 24px
- **Element gap:** 14px

## Components

### Solar Yellow CTA Button
**Role:** Primary warm call-to-action — the 'Request a demo' entry point

Filled with #ffba09, Ink Black (#1a1a1a) text at 14px weight 700, padding 11px 24px, radius 24px or full pill 999px, no shadow. Sits on the cream canvas where the yellow-on-cream contrast creates an inviting, low-pressure action. The warm yellow differentiates this from enterprise-primary actions.

### Violet Primary Action Button
**Role:** Enterprise-grade primary action — form submissions, account actions

Filled with #1009f6, white text at 14px weight 700, padding 11px 24px, radius 24px. Appears inside forms and critical conversion moments. Full-bleed width when inside multi-field forms.

### Outlined Dark Button
**Role:** Secondary action — 'Start free trial', low-commitment alternative

Transparent fill, 1px Ink Black (#1a1a1a) border, Ink Black text at 14px weight 700, padding 11px 24px, radius 24px. Pairs directly beside the yellow CTA to create a two-step commitment ladder.

### Ghost Pill Button
**Role:** Tertiary navigation actions — 'Book demo', 'Login'

Transparent fill, 1px Ink Black border at 999px radius, Ink Black text at 14px weight 400, padding 7px 18px. The full pill radius signals lightweight navigation, not commitment.

### Navigation Bar
**Role:** Top-level site navigation

Cream (#f0f0ec) background, logo + 5-6 nav links in Ink Black 14px weight 400, with a pill 'Book demo' button on the far right. Subtle bottom border in Stone Gray (#d4d4d0) or none — floats cleanly on the warm canvas.

### Text Input Field
**Role:** Standard form input — names, email, company

White (#ffffff) background, 1px Silver Gray (#b3b3b3) border, radius 4px, padding 9-11px vertical, 14px Ink Black text weight 400. Placeholder text in muted gray. Focus state should darken the border to Ink Black — no glow rings.

### Select Input with Flag
**Role:** Country/phone selector with country flag prefix

White background with embedded flag emoji + country code (e.g. 🇪🇸 +34) in a left-aligned zone, Silver Gray border, 4px radius, 14px text. Country name as placeholder.

### Textarea
**Role:** Multi-line message input

Same input styling as Text Input Field — white background, 1px Silver Gray border, 4px radius, 14px text. Generous min-height (100-120px) to invite full sentences.

### Feature Highlight Card
**Role:** Content card with illustration and copy

White surface on cream canvas, 24px radius, 24-40px internal padding, optional illustration on top. Headline at 25-32px weight 700 Ink Black, body at 16px weight 400. No drop shadows — the white-on-cream contrast defines the card.

### Decorative Accent Card
**Role:** Editorial section break with colored fill and illustration

Solid fill in Sky Mist (#add3e5), Blossom Pink (#e3c7de), or Solar Yellow (#ffba09), 40px radius, contains a hand-drawn illustration + short copy. Used to break up text-heavy sections and add visual rhythm.

### Video Preview Card
**Role:** Hero video or product demo container

Large rounded container at 40px radius, contains a video thumbnail with a circular dark play button overlay (play triangle in white). Often splits two colors — e.g. one half photographic, one half a brand-color panel with text.

### Rating Trust Badge
**Role:** Third-party social proof — G2, Capterra

Compact pill or rectangle with the rating platform's brand color dot/icon, 'X.X rating' text at 12-14px Ink Black, and a small star row. No background fill, sits inline with other hero elements.

### Checkmark List Item
**Role:** Feature bulleting in form/sales pages

Violet (#1009f6) checkmark icon (or simple tick stroke) at 16px, followed by 14-16px Ink Black body text at 1.5-1.6 line height. No bullet dots — the violet tick is the entire marker.

### Hero Geometric Panel
**Role:** Full-bleed brand background for hero sections

Electric Violet (#1009f6) fill spanning the full viewport, overlaid with angled geometric shapes in lighter and darker violet/blue tones creating a faceted, architectural atmosphere. White card with 24px radius sits centered or left-aligned, holding the headline and CTAs.

### Section Header Block
**Role:** Centered editorial section title

Centered on cream canvas, small centered illustration (40-60px) on top, headline at 32-40px weight 700 Ink Black with 1.24-1.3 line height, body copy at 16px weight 400 in Charcoal (#222222) below, max-width ~600px.

## Do's and Don'ts

### Do
- Use Linen Cream (#f0f0ec) as the default page background — never pure white at the page level, only on elevated cards and inputs
- Pair Solar Yellow (#ffba09) for warm/intimate CTAs and Electric Violet (#1009f6) for enterprise/form submissions — they are not interchangeable
- Set headline type at 40-48px weight 700 in Abcwhyte — the bold geometric form is the brand's editorial voice
- Use 24px radius for cards and standard buttons, 999px for pill-shaped nav/login actions, 4px for form inputs — radius carries meaning
- Maintain two-button CTA pairs: filled yellow 'Request a demo' + outlined 'Start free trial' on hero sections, filled violet on form submissions
- Place hand-drawn brand-color illustrations (Sky Mist, Blossom Pink, Solar Yellow) between text sections to create visual rhythm and humanize the page
- Keep section gaps at 64-80px vertical — the cream canvas needs breathing room to feel editorial, not dashboard-dense

### Don't
- Do not use Electric Violet (#1009f6) as a text color on the cream canvas — reserve it for backgrounds, buttons, and checkmark icons
- Do not use Solar Yellow (#ffba09) for body text or large fills — it is an accent only, never a page background
- Do not add drop shadows to cards — the white-on-cream contrast is the entire elevation system, shadows would break the editorial feel
- Do not use the 4px input radius for cards or buttons — mixing small radii on large components looks like a form, not a product page
- Do not use Forest Dark (#304801) outside of decorative illustrations — it is an artwork color, not a UI token
- Do not use the 999px pill radius for primary CTAs — pills are for navigation (Login, Book demo), 24px is for commitments
- Do not use Blossom Pink or Sky Mist as button fills — these are decorative washes for illustration zones, not interactive surfaces

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Linen Canvas | `#f0f0ec` | Page background — the warm off-white that sets the entire tone |
| 2 | Pure Card | `#ffffff` | Cards, input fields, elevated content blocks sitting on the cream canvas |
| 3 | Stone Surface | `#d4d4d0` | Muted sections, inactive states, secondary surfaces |

## Imagery

Hand-drawn editorial illustrations dominate the visual language: loose line-art icons (eye, dartboard/target, abstract squiggles) rendered in Sky Mist (#add3e5), Blossom Pink (#e3c7de), and Solar Yellow (#ffba09) on white or cream surfaces. A photographic product shot of a person (founder/CEO type) appears once in a video card, tightly cropped and treated as a real-world anchor against the otherwise illustrated world. No stock photography lifestyle imagery, no 3D renders — the brand stays in the flat-illustration + editorial-photography world. Illustrations sit small and centered as section markers (40-80px) or large as decorative fills behind text blocks. The hero uses a bold geometric violet panel with faceted angular shapes rather than an image — architecture over photography.

## Layout

Max-width 1200px centered container with generous outer padding. Hero is full-bleed Electric Violet with a white floating card (max-width ~900px, 24px radius) holding the headline stack left-aligned and a small illustration on the right. Below the hero, content flows in a single centered column rhythm: centered text blocks (max-width ~600px) alternating with wide illustration zones, then a 2-column form section where copy/checklist sits left at 40% width and a white form card sits right at 55% width. Section vertical gaps are 64-80px. Navigation is a simple top bar with logo + 5 links left-aligned and a pill 'Book demo' button right-aligned, floating on the cream background without a heavy border.

## Agent Prompt Guide

**Quick Color Reference**
- text: #1a1a1a (primary), #222222 (secondary)
- background: #f0f0ec (page), #ffffff (cards/inputs)
- border: #d4d4d0 (dividers), #b3b3b3 (input borders)
- accent: #ffba09 (solar yellow)
- primary action: #ffba09 (filled action)

**Example Component Prompts**

1. **Hero Section**: Full-bleed #1009f6 background with faceted geometric shapes in lighter/darker violet. Floating white card (900px max-width, 24px radius, 48px padding) centered, containing a 48px Abcwhyte weight 700 headline in #1a1a1a, 16px body in #222222, and two buttons side by side: a #ffba09 filled pill (14px weight 700, 11px 24px padding, 24px radius) reading 'Request a demo' in #1a1a1a, and an outlined button (1px #1a1a1a border, 24px radius, same padding) reading 'Start free trial'.

2. **Editorial Section Break**: Centered on #f0f0ec canvas. A 60px hand-drawn target illustration in #add3e5 and #e3c7de sits at the top. Below it, a 32px Abcwhyte weight 700 headline in #1a1a1a at 1.24 line height, max-width 600px. Then a 16px Abcwhyte weight 400 body paragraph in #222222 at 1.6 line height, max-width 580px centered. No card, no shadow — type floats on cream.

3. **Demo Request Form**: 2-column layout, left column holds a 32px weight 700 headline in #1a1a1a, a body paragraph at 16px weight 400 in #222222, and a checkmark list using #1009f6 tick icons with 14px text. Right column is a white card (24px radius, 32px padding) containing form fields: two side-by-side inputs for First/Last name, full-width Email, phone input with 🇪🇸 +34 prefix, Company name + Number of employees select side by side, Country select, full-width Message textarea. Submit button is a full-width #1009f6 filled button (white text, 14px weight 700, 24px radius, 11px 24px padding).

4. **Feature Highlight Card**: White surface (#ffffff) on cream (#f0f0ec) background, 24px radius, 32px padding. A 48px Sky Mist (#add3e5) illustration sits at the top. Below: a 25px Abcwhyte weight 700 headline in #1a1a1a, then a 16px body paragraph in #222222 at 1.5 line height. No shadow.

5. **Navigation Bar**: #f0f0ec background, logo + 'Contractbook' wordmark on the left in #1a1a1a, 5 nav links (Product, Templates, Packages, Customers, Learn) in 14px Abcwhyte weight 400 #1a1a1a with 7px gaps. On the far right: 'Login' as plain text and 'Book demo' as a pill button (1px #1a1a1a border, 999px radius, 7px 18px padding, 14px weight 400). No heavy bottom border.

## Elevation Philosophy

The system intentionally avoids drop shadows as an elevation mechanism. The cream Linen (#f0f0ec) base layer and white (#ffffff) card layer create depth through color contrast alone — cards appear to lift off the canvas by being lighter, not by casting shadow. The only shadow-like effects used are hairline borders in Stone Gray (#d4d4d0) or Silver Gray (#b3b3b3) for form fields and dividers. This editorial approach keeps the interface feeling like a magazine layout rather than a typical SaaS dashboard, and prevents the visual noise that stack-of-cards interfaces accumulate.

## Similar Brands

- **Linear** — Same single-vivid-accent-on-warm-neutral philosophy — Linear's purple-on-near-white operates with the same confidence restraint, one bold hue doing all the chromatic work
- **Framer** — Editorially-driven marketing site with a custom geometric sans, pill-shaped CTAs, and warm off-white canvas — the typographic attitude and component restraint match closely
- **Notion** — Comfortable cream-toned canvas with quiet neutrals and a single brand accent that appears as functional punctuation rather than decoration
- **Maze** — Playful hand-drawn illustrations paired with serious product UI — the eye/dartboard style illustrations bridge human warmth and functional clarity in the same way

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-electric-violet: #1009f6;
  --color-solar-yellow: #ffba09;
  --color-ink-black: #1a1a1a;
  --color-pure-white: #ffffff;
  --color-linen-cream: #f0f0ec;
  --color-charcoal: #222222;
  --color-stone-gray: #d4d4d0;
  --color-silver-gray: #b3b3b3;
  --color-pure-black: #000000;
  --color-sky-mist: #add3e5;
  --color-blossom-pink: #e3c7de;
  --color-forest-dark: #304801;

  /* Typography — Font Families */
  --font-abcwhyte: 'Abcwhyte', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.4;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 25px;
  --leading-subheading: 1.25;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.24;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.2;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 24px;
  --element-gap: 14px;

  /* Border Radius */
  --radius-md: 4.375px;
  --radius-lg: 10.5px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;
  --radius-full: 96px;
  --radius-full-2: 99px;
  --radius-full-3: 999px;
  --radius-full-4: 9999px;

  /* Named Radii */
  --radius-cards: 24px;
  --radius-pills: 999px;
  --radius-small: 10-16px;
  --radius-images: 40px;
  --radius-inputs: 4px;
  --radius-buttons: 24px;

  /* Surfaces */
  --surface-linen-canvas: #f0f0ec;
  --surface-pure-card: #ffffff;
  --surface-stone-surface: #d4d4d0;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-electric-violet: #1009f6;
  --color-solar-yellow: #ffba09;
  --color-ink-black: #1a1a1a;
  --color-pure-white: #ffffff;
  --color-linen-cream: #f0f0ec;
  --color-charcoal: #222222;
  --color-stone-gray: #d4d4d0;
  --color-silver-gray: #b3b3b3;
  --color-pure-black: #000000;
  --color-sky-mist: #add3e5;
  --color-blossom-pink: #e3c7de;
  --color-forest-dark: #304801;

  /* Typography */
  --font-abcwhyte: 'Abcwhyte', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.4;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 25px;
  --leading-subheading: 1.25;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --text-heading: 32px;
  --leading-heading: 1.24;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.2;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;

  /* Border Radius */
  --radius-md: 4.375px;
  --radius-lg: 10.5px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-3xl-3: 40px;
  --radius-full: 96px;
  --radius-full-2: 99px;
  --radius-full-3: 999px;
  --radius-full-4: 9999px;
}
```