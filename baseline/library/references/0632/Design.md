# Seline Analytics — Style Reference
> Sunlit data observatory on warm paper — a cream canvas where one blue signal is the only color allowed to speak.

**Theme:** light

Seline uses a sunlit data-workspace language: a warm cream canvas (#fafaf9) carries a single vivid blue signal against an otherwise completely neutral interface, creating a calm observatory where one color always means "live data, click here, something happened." The palette is intentionally 96% grayscale warm-stone — the only chromatic voice is a sky blue (#3ba6f1) that serves as chart bar, CTA fill, icon stroke, link, and inline highlight, all of the same hue. Typography pairs Inter (body and UI) with Roobert (display and large headings) — both geometric humanists, with display weights pulled tight to negative tracking so headlines read as compact confident statements rather than soft SaaS copy. Components are featherlight: pill buttons at 9999px radius, thin 1px stone borders, and shadows used only on the product-preview card and nothing else — the page sits on its surface like printed material on paper, not a glassmorphic dashboard. Handwritten annotations and a recurring photo cutout give the system a self-aware, "we built this for ourselves" texture, but the core grammar stays disciplined: warm grays, one blue, one white card, one shadow recipe.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Signal Blue | `#3ba6f1` | `--color-signal-blue` | Blue action color for filled buttons, selected navigation states, and focused conversion moments. |
| Highlight Wash | `#c1e1f7` | `--color-highlight-wash` | Gray wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Canvas Cream | `#fafaf9` | `--color-canvas-cream` | Page background, body of the document — warm off-white stone-50 that keeps the system from feeling clinical |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces, elevated panels, button text on dark, dashboard preview background |
| Stone Ink | `#0c0a09` | `--color-stone-ink` | Primary headings and body text — near-black with a warm undertone, never pure #000 |
| Stone Charcoal | `#1c1917` | `--color-stone-charcoal` | Secondary button fill, dark accent surfaces — one step warmer/lighter than Stone Ink for dark UI moments |
| Warm Slate | `#78716c` | `--color-warm-slate` | Secondary body text, helper text, subtle labels — the working gray of the system |
| Soft Slate | `#a8a29e` | `--color-soft-slate` | Tertiary text, muted captions, low-emphasis labels |
| Mist Gray | `#afafae` | `--color-mist-gray` | Decorative icon fills, placeholder strokes, low-emphasis graphic elements |
| Pearl Border | `#e5e7eb` | `--color-pearl-border` | Primary 1px hairlines — card borders, dividers, input borders, button outlines; the dominant border color by frequency |
| Warm Border | `#d6d3d1` | `--color-warm-border` | Secondary borders — input fields, section dividers, subtly warmer hairlines for contained UI |
| Fog Border | `#e1dfdd` | `--color-fog-border` | Navigation borders, subtle dividers between header items — the lightest structural line |
| Heading Mute | `#c9c5c2` | `--color-heading-mute` | Placeholder headlines, disabled heading text — the only gray that can substitute for Stone Ink at display sizes |

## Tokens — Typography

### Inter — Body text, UI controls, navigation, buttons, form labels, footer — the workhorse family; weight 400 for paragraphs, 500 for buttons and emphasized labels, 600 for strong inline emphasis · `--font-inter`
- **Substitute:** Inter (Google Fonts) — already on Google Fonts so no substitution needed
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px
- **Line height:** 1.43–1.92
- **Letter spacing:** 0.0030em to 0.0250em; body at 16px uses ~0.003em (subtle positive tracking), captions at 12px widen to 0.025em
- **OpenType features:** `"cv11", "ss01" on for the standard Seline UI numerals and alternates`
- **Role:** Body text, UI controls, navigation, buttons, form labels, footer — the workhorse family; weight 400 for paragraphs, 500 for buttons and emphasized labels, 600 for strong inline emphasis

### Roobert — Display and large headings — the 52px hero, 32px subheadings, and 20px lead paragraphs; tighter tracking at size creates compact confident statements · `--font-roobert`
- **Substitute:** Roobert (custom, by Displaay) — substitute with "Geist" or "General Sans" from Fontshare; both share the same geometric humanist proportions with tight display tracking
- **Weights:** 400, 500
- **Sizes:** 16px, 18px, 20px, 32px, 52px
- **Line height:** 1.12–1.25
- **Letter spacing:** −0.025em at 52px (= −1.3px), −0.021em at 32px (= −0.67px), −0.017em at 20px (= −0.34px), −0.005em at 18px (= −0.09px), 0.003em at 16px
- **OpenType features:** `"ss01" on for the rounded geometric alternates that give Roobert its distinctive warmth`
- **Role:** Display and large headings — the 52px hero, 32px subheadings, and 20px lead paragraphs; tighter tracking at size creates compact confident statements

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | 0.3px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.06px | `--text-body-sm` |
| body | 16px | 1.54 | 0.05px | `--text-body` |
| body-lg | 18px | 1.56 | -0.09px | `--text-body-lg` |
| subheading | 20px | 1.5 | -0.34px | `--text-subheading` |
| heading-sm | 32px | 1.2 | -0.67px | `--text-heading-sm` |
| heading | 52px | 1.12 | -1.3px | `--text-heading` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 10px |
| inputs | 4px |
| buttons | 9999px (pill) or 10px (rectangular) |
| navItems | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.05) 0px 4px 16px 0px` | `--shadow-md` |
| sm | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0...` | `--shadow-sm` |
| subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |
| xl | `rgba(17, 12, 46, 0.12) 0px 12px 45px 0px` | `--shadow-xl` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96-128px
- **Card padding:** 24-32px
- **Element gap:** 8-16px

## Components

### Signal Blue Filled Button (Primary)
**Role:** Main call-to-action — "Add to your website", "Start free trial", "Get a demo"

Pill shape at 9999px radius, background #3ba6f1, text #ffffff at Inter 500 14-16px, horizontal padding 12-16px, vertical padding 8-11px, no border, no shadow. Sometimes includes a small inline icon (arrow) in white at 16px.

### Ghost Outlined Button (Secondary)
**Role:** Companion action to primary — "View live demo", "Get a demo"

Pill at 9999px radius, background transparent or #ffffff, 1px border #e5e7eb, text Stone Ink (#0c0a09) at Inter 500 14-16px, padding 12-16px horizontal, 8-11px vertical. Sometimes pairs an icon in Signal Blue at 16px next to the label.

### Dark Charcoal Button (Tertiary)
**Role:** Rare dark accent button for emphasis variation

Pill at 9999px radius, background #1c1917, text #ffffff at Inter 500 14-16px, padding matching the Signal Blue button so they align visually when placed side by side.

### Dashboard Preview Card (Hero Asset)
**Role:** The large product screenshot floating in the hero section

Container with 10px radius, 1px border #e5e7eb, subtle shadow rgba(0,0,0,0.05) 0px 4px 16px, with a deeper accent shadow rgba(17,12,46,0.12) 0px 12px 45px beneath for the floating-card effect. Internal content is the full dashboard mockup on #ffffff background.

### Feature Stat Card (In-Dashboard)
**Role:** Metric tiles inside the product preview — Total Visits, Views per Visit, Visit Duration, Bounce Rate, Revenue

Flat card on the dashboard surface, 4px radius, no border, no shadow, internal padding 8-12px. Label at Inter 500 12px in #78716c, value at Roobert 400 20-24px in #0c0a09, trend indicator (e.g. "+21%") in Signal Blue at Inter 500 12px.

### Bar Chart Element
**Role:** Inline data visualization inside the dashboard preview

Vertical bars at 8px width, 2-4px column gap, filled with Signal Blue (#3ba6f1) by default and #c1e1f7 for secondary/previous-period bars, sitting on a transparent baseline; no axes visible, minimalist.

### Stat Block (Feature Section)
**Role:** Large metric callout with label + value + sublabel

Label in Inter 500 12-14px uppercase or Sentence case in #78716c, value in Roobert 400 32-52px in #0c0a09, sublabel in Inter 400 14px in #78716c. No card chrome — sits directly on the canvas.

### Testimonial Card (Inline)
**Role:** Two-column customer quote block

No card border or background — sits on canvas. Five yellow stars (#facc15 or similar) at 12-14px, quote in Inter 400 16-18px in #0c0a09 with bolded blue inline emphasis for quoted phrases, author name in Inter 500 14-16px, role in #78716c. Avatar at 32-40px circular, positioned to the left of the name.

### Star Rating (Five-Star)
**Role:** Social proof element above testimonials

Five small filled stars in Signal Blue or warm yellow (#fbbf24), 12-14px each, tight 1-2px gap, no background container.

### Navigation Bar (Top Header)
**Role:** Sticky header with logo, nav links, auth actions

Background transparent or #fafaf9, height ~56-64px, horizontal padding 24-40px, logo at left, nav links centered or left-aligned in Inter 500 14-15px in #0c0a09, "Sign in" as ghost text link, primary CTA pill button on the far right. Avatar stack of three overlapping 24px circles for social proof in the middle.

### Avatar Stack (Social Proof Inline)
**Role:** Three overlapping user photos in the nav, showing "trusted by X people"

Three 24-28px circular images overlapping by ~8px, thin 2px border in #fafaf9 to separate them, no background container.

### Highlighted Text Run (Inline Emphasis)
**Role:** Words or short phrases with a blue tint background to draw the eye — used in headlines and body for emphasis

Background fill #c1e1f7, text color #0c0a09, no border, no radius (sits inline with the text), padding 0 4px, slightly larger size (one step up from the surrounding text) to create a "callout" effect within the line.

### Input Field (Form)
**Role:** Email or text capture in any form context

Height 40-44px, 1px border #d6d3d1, 4px radius, background #ffffff, placeholder text in #a8a29 at Inter 400 14-16px, focus state shifts border to Signal Blue (#3ba6f1) at 1-2px width.

### Tab Strip (Dashboard UI)
**Role:** Tab navigation inside the product preview — Dashboard / Visitors / Journeys / Funnels

Inline horizontal row, no background, active tab in Inter 500 14-15px in #0c0a09 with 2px underline in Signal Blue, inactive tabs in #78716c, 24px horizontal padding per tab, 32-40px row height.

### Hover Annotation (Handwritten Note)
**Role:** Decorative handwritten-style callouts pointing at product features

Rotated 0-3°, irregular hand-drawn text in Inter italic or a handwriting-style font, dark ink color #0c0a09, with a thin curved line connecting to the dashboard feature. Adds personality without affecting layout.

### Logo / Brand Mark
**Role:** Seline "S" or wordmark in the nav and footer

Dark Stone Ink (#0c0a09) or Signal Blue (#3ba6f1) for the icon mark, wordmark in Roobert 500 18-20px; clean geometric construction with a slight angular cut.

## Do's and Don'ts

### Do
- Use Signal Blue (#3ba6f1) for exactly one purpose at a time on any given surface — never let a CTA, an icon, a chart bar, and a link all share the same screen-weight; let one of them dominate and the rest recede
- Pair Inter for body and UI with Roobert (or Geist/General Sans as substitute) for any text 20px or larger — the two-family system is what gives headlines their distinctive compactness
- Set display text tracking to −0.025em at 52px and progressively widen toward 0 as size decreases; the tight display tracking is a signature, not an accident
- Build buttons and tags at 9999px radius (full pill) and inputs/inner cards at 4px — the radius contrast between pill controls and rectangular data surfaces is the system's structural grammar
- Use #c1e1f7 (Highlight Wash) only as a text-background highlight inline with copy, never as a button fill or large surface — it is emphasis, not color
- Anchor every surface card to Canvas Cream (#fafaf9) and let only the dashboard preview or elevated feature cards use Pure White (#ffffff) — the cream canvas is the base, white is elevation
- Use Inter weight 500 for every button label and tab — weight 400 reads as paragraph text, weight 600 reads as shouting; 500 is the only correct choice for action labels

### Don't
- Do not introduce a second chromatic color — success green, error red, warning amber — into the design system; this is a one-blue-show, and semantic states should be communicated through shape, text, or Signal Blue itself
- Do not use shadows on buttons, inputs, nav items, or tags; reserve elevation exclusively for the dashboard preview card and the occasional stat card
- Do not use Pure White (#ffffff) as the page background — Canvas Cream (#fafaf9) is the deliberate choice that makes the system feel warm rather than clinical
- Do not use Stone Ink (#0c0a09) at body sizes below 14px without bumping the weight to 500; weight 400 at 12px in near-black crushes at low contrast and fights the warm palette
- Do not use letter-spacing tighter than −0.025em on the 52px display; do not use positive letter-spacing above 0.05em anywhere except all-caps micro-labels
- Do not use the 4px radius on cards, hero assets, or feature blocks; reserve 4px exclusively for inputs and inline data elements where sharp corners aid scannability
- Do not use Signal Blue text on a Signal Blue background, or on Highlight Wash without a contrast check; Signal Blue text is for emphasis on cream/white surfaces only
- Do not add gradients, glows, or colored shadows — the system uses exactly one shadow recipe (rgba(0,0,0,0.05) 0px 4px 16px) plus one accent shadow for the floating hero card; that is the entire elevation vocabulary

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas Cream | `#fafaf9` | Page background, document body |
| 1 | Pure White | `#ffffff` | Card surfaces, dashboard preview, input fields, button text contrast |
| 2 | Floating Card | `#ffffff` | Dashboard hero asset, elevated stat cards with subtle 16px blur shadow |
| 3 | Dark Accent | `#1c1917` | Rare dark button fill or footer accent — never more than 5% of any page |

## Elevation

- **Dashboard Preview Card (Hero):** `rgba(0, 0, 0, 0.05) 0px 4px 16px 0px`
- **Dashboard Preview Card (Accent):** `rgba(17, 12, 46, 0.12) 0px 12px 45px 0px`
- **Floating Icon / Avatar Cluster:** `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **Sticky Nav:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Imagery

Photography appears in three roles: (1) small circular avatars (24-40px) for social proof and testimonial authorship — neutral, candid, slightly desaturated; (2) a hand-drawn annotation overlay system using thin curved lines and handwritten-style callouts pointing at dashboard features, giving the page a "sketched by the team that built it" texture; and (3) a single lifestyle cutout of a person in a dark sweatshirt leaning casually, used as a decorative human element beside the hero CTA. Product imagery is dominated by the dashboard screenshot itself, rendered as a high-fidelity UI mockup with Signal Blue chart bars — the product is the visual hero, not photography. No full-bleed hero images, no background video, no illustration system; graphics are strictly the dashboard preview plus annotation lines. Icon style throughout is monochromatic stroke (1.5-2px) in Signal Blue or Stone Ink, never filled multicolor.

## Layout

Page model: max-width 1200px centered, full-bleed canvas. The hero is a classic two-row composition: top row is a left-aligned headline stack (52px display + 18px subhead + dual-button row + logo social proof strip + a 5-star Google review line), with the dashboard preview card positioned to the right and slightly below, creating a diagonal flow into the section. Navigation is a centered top bar with logo left, links + avatar stack in the middle cluster, and Sign in + primary CTA pill on the right. Below the hero, the layout switches to a centered single-column with a max-width ~800px reading column: alternating headline + subhead + CTA patterns, with a two-column testimonial grid (50/50 split, 24-40px gap). Sections are separated by 96-128px vertical breathing room on the cream canvas — no dividers, no background color changes between sections, the rhythm comes from spacing alone. Card grids (when present) are 2-3 columns at 24-32px gaps. The overall density is compact but never cramped: the cream canvas does the work of separating content without needing borders or tinted sections.

## Agent Prompt Guide

**Quick Color Reference**
- Canvas/page background: #fafaf9
- Card/surface: #ffffff
- Text primary: #0c0a09
- Text secondary: #78716c
- Border: #e5e7eb (primary), #d6d3d1 (secondary)
- Accent / primary action: #3ba6f1 (filled action)
- Highlight wash: #c1e1f7

**3-5 Example Component Prompts**

1. Create a Primary Action Button: #3ba6f1 background, #0c0a09 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.



4. **Stat block (large metric)**: No card chrome, sits on canvas. Label at Inter 500 13px uppercase in #78716c, value at Roobert 400 48px in #0c0a09 with −0.96px tracking, sublabel at Inter 400 14px in #78716c. 16px vertical gap between label and value, 8px between value and sublabel.

5. **Testimonial block (two-column)**: Two equal-width columns, 40px gap. Each column has: row of five 14px filled stars in #facc15, 16px gap below to the quote at Inter 400 18px in #0c0a09 (with one emphasized phrase in Inter 500 + Signal Blue color), 24px gap below to the author row: 36px circular avatar + name in Inter 500 14px #0c0a09 + role in Inter 400 14px #78716c stacked vertically.

## Signature Element — The Blue Highlight Run

The single most distinctive typographic device in this system is the inline highlighted phrase: a run of words with #c1e1f7 background fill sitting inline with surrounding text, color unchanged at #0c0a09. It is NOT a button, NOT a link, NOT a chip — it is pure emphasis through background wash. Padding is 0 4-6px, no border, no radius, the text remains at the same size or one step larger than its surrounding line. This is how the system draws the eye to the most important phrase in a headline ("simple & actionable") without ever leaving the editorial rhythm. Use it sparingly: no more than one per headline, never more than two per page section.

## One-Blue Rule

Signal Blue (#3ba6f1) is the only chromatic color in the entire system. It serves five distinct roles: CTA fill, icon stroke, chart bar, link text, and inline highlight (via its #c1e1f7 dilution). On any given screen, decide which of these five is the primary voice for that view — usually the CTA — and let the others recede by using slightly smaller sizes, lower opacity, or by reducing their count. Never let a page have more than three distinct Signal Blue elements at full saturation above the fold. This is what keeps the system feeling like one product rather than a rainbow.

## Similar Brands

- **Plausible Analytics** — Same single-color (green) accent against cream/white canvas, same compact Inter-style typography, same product-first hero with dashboard preview as the visual anchor
- **Fathom Analytics** — Privacy-first analytics with an almost identical minimal-grammar approach — one accent color, one shadow recipe, warm cream background, pill buttons, Inter for UI
- **Vercel** — Cream/off-white canvas, single chromatic accent, tight-tracked display type, pill buttons, and a floating product-card hero with subtle dual-layer shadow — same "one signal color, everything else neutral" discipline
- **Linear** — Geometric humanist type, pill UI controls, subtle warm-gray neutrals, product-screenshot-first hero, and the same restraint around elevation and color (though Linear is dark-first, the structural decisions mirror Seline's)
- **Cal.com** — Warm cream canvas with a single chromatic accent (their blue), Inter-family body type, pill buttons, and the same "simple alternative to a giant" positioning voice

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-signal-blue: #3ba6f1;
  --color-highlight-wash: #c1e1f7;
  --color-canvas-cream: #fafaf9;
  --color-pure-white: #ffffff;
  --color-stone-ink: #0c0a09;
  --color-stone-charcoal: #1c1917;
  --color-warm-slate: #78716c;
  --color-soft-slate: #a8a29e;
  --color-mist-gray: #afafae;
  --color-pearl-border: #e5e7eb;
  --color-warm-border: #d6d3d1;
  --color-fog-border: #e1dfdd;
  --color-heading-mute: #c9c5c2;

  /* Typography — Font Families */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.06px;
  --text-body: 16px;
  --leading-body: 1.54;
  --tracking-body: 0.05px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.56;
  --tracking-body-lg: -0.09px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.67px;
  --text-heading: 52px;
  --leading-heading: 1.12;
  --tracking-heading: -1.3px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 96-128px;
  --card-padding: 24-32px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 10px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px (pill) or 10px (rectangular);
  --radius-navitems: 9999px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-xl: rgba(17, 12, 46, 0.12) 0px 12px 45px 0px;

  /* Surfaces */
  --surface-canvas-cream: #fafaf9;
  --surface-pure-white: #ffffff;
  --surface-floating-card: #ffffff;
  --surface-dark-accent: #1c1917;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-signal-blue: #3ba6f1;
  --color-highlight-wash: #c1e1f7;
  --color-canvas-cream: #fafaf9;
  --color-pure-white: #ffffff;
  --color-stone-ink: #0c0a09;
  --color-stone-charcoal: #1c1917;
  --color-warm-slate: #78716c;
  --color-soft-slate: #a8a29e;
  --color-mist-gray: #afafae;
  --color-pearl-border: #e5e7eb;
  --color-warm-border: #d6d3d1;
  --color-fog-border: #e1dfdd;
  --color-heading-mute: #c9c5c2;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.3px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.06px;
  --text-body: 16px;
  --leading-body: 1.54;
  --tracking-body: 0.05px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.56;
  --tracking-body-lg: -0.09px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.67px;
  --text-heading: 52px;
  --leading-heading: 1.12;
  --tracking-heading: -1.3px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-md: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-xl: rgba(17, 12, 46, 0.12) 0px 12px 45px 0px;
}
```