# dope.security — Style Reference
> Dusk terminal at the edge of orbit

**Theme:** dark

Dope Security operates as a dark, cinematic interface — a near-black canvas (#090909) punctuated by vivid violet (#af50ff) and atmospheric photography of violet-pink cosmic skies. Typography carries the brand's rebellious confidence: a geometric sans (Whyte Inktrap) at extreme sizes pairs with an editorial italic serif (GrandSlang) for emotional moments like 'Your new', while a monospaced display variant creates stenciled, airport-board aesthetics for feature lists. Surfaces are nearly flat with hairline borders; the only elevation comes from glassmorphic panels and vivid gradient cards. Color appears sparingly but decisively — one violet accent for interactive moments, gradient washes for comparison blocks, and the rest is pure contrast. The visual rhythm alternates between vast negative space and dense, oversized type.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#090909` | `--color-void` | Page canvas, section backgrounds — the base dark that makes all color vibrate |
| Bone White | `#f7f9fa` | `--color-bone-white` | Primary text, icon fills, hairline borders — used at scale across headings, cards, and nav |
| Ash | `#f0f0f0` | `--color-ash` | Heading text and decorative type outlines, large-scale display borders |
| Slate | `#6b6b6b` | `--color-slate` | Muted borders, secondary icon strokes, subdued structural lines |
| Graphite | `#454545` | `--color-graphite` | Card borders, recessed surface edges — sits between canvas and text |
| Smoke | `#828384` | `--color-smoke` | Mid-tone borders and heading accents, button outlines on dark surfaces |
| Iron | `#333333` | `--color-iron` | Link underlines, image borders, subtle dividers |
| Cinder | `#423738` | `--color-cinder` | Warm-tinted surface variant, secondary button borders |
| Iris | `#af50ff` | `--color-iris` | Primary action glow, accent borders, button shadows, focus halos — the brand's single chromatic note, vivid violet against void creates electric contrast |
| Plum | `#7f56d9` | `--color-plum` | Active nav indicator, secondary accent — slightly cooler violet for structural highlights |
| Aubergine | `#271635` | `--color-aubergine` | Deep accent backgrounds, filled button border on dark — tonal violet anchor |
| Storm Gray | `#475467` | `--color-storm-gray` | Ghost button borders, nav text on glass surfaces — outlined action border |
| Lavender Wash | `#e1bdff` | `--color-lavender-wash` | Gradient highlight endpoint, soft violet glow surfaces |
| Orchid Radial | `radial-gradient(circle closest-corner at 10% 50%, rgb(108, 75, 214), rgba(0, 0, 0, 0) 55%)` | `--color-orchid-radial` | Ambient radial glow — softens the void with violet atmosphere |
| Amethyst Band | `linear-gradient(90deg, rgb(64, 24, 96), rgb(72, 35, 180) 50%, rgb(99, 78, 120))` | `--color-amethyst-band` | Section gradient band — deep violet sweep across comparison cards |

## Tokens — Typography

### Whyte Inktrap — Primary interface typeface — geometric grotesque with inktrap terminals, used for nav, body, buttons, cards, and large display headlines. Weight 300 for hero serif replacement; 400 for body; 500 for subheads; 700 for emphasis. The inktraps are signature: they create breathing room at large sizes while maintaining clarity at small. · `--font-whyte-inktrap`
- **Substitute:** Inter, Satoshi, General Sans
- **Weights:** 300, 400, 500, 700
- **Sizes:** 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64, 80, 88
- **Line height:** 0.80–1.60
- **Letter spacing:** 0.07em at 10px, -0.009em at 14–18px, -0.01em at 20–24px, -0.03em at 32px, -0.04em at 48–64px, -0.07em at 80–88px
- **OpenType features:** `"ss01" on, "ss02" on`
- **Role:** Primary interface typeface — geometric grotesque with inktrap terminals, used for nav, body, buttons, cards, and large display headlines. Weight 300 for hero serif replacement; 400 for body; 500 for subheads; 700 for emphasis. The inktraps are signature: they create breathing room at large sizes while maintaining clarity at small.

### Whyte Inktrap Mono — Monospaced display variant — used at 74px as the stenciled feature-list treatment (airport departure-board aesthetic). The 0.20em letter-spacing creates deliberate gaps between glyphs, making the monospace outlines feel architectural rather than utilitarian. Also at 14px for code/data labels. · `--font-whyte-inktrap-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14, 74
- **Line height:** 0.90–1.50
- **Letter spacing:** 0.20em at all sizes
- **OpenType features:** `"tnum" on`
- **Role:** Monospaced display variant — used at 74px as the stenciled feature-list treatment (airport departure-board aesthetic). The 0.20em letter-spacing creates deliberate gaps between glyphs, making the monospace outlines feel architectural rather than utilitarian. Also at 14px for code/data labels.

### GrandSlang — Editorial display serif (italic-leaning) — used for the hero phrase 'Your new' at 146px. This is the only serif in the system and its presence is the key brand-moment: it introduces a fashion/luxury quality against the industrial sans, making the product feel curated rather than utilitarian. Weight 300 at display sizes is anti-conventional restraint. · `--font-grandslang`
- **Substitute:** Playfair Display Italic, Cormorant Garamond, GT Sectra
- **Weights:** 300, 400
- **Sizes:** 32, 50, 64, 88, 146
- **Line height:** 0.80–1.50
- **Letter spacing:** -0.03em at display sizes
- **Role:** Editorial display serif (italic-leaning) — used for the hero phrase 'Your new' at 146px. This is the only serif in the system and its presence is the key brand-moment: it introduces a fashion/luxury quality against the industrial sans, making the product feel curated rather than utilitarian. Weight 300 at display sizes is anti-conventional restraint.

### System UI / Karla — Fallback for button labels and tertiary nav — present at very low frequency, acts as a safety net for the custom typefaces. · `--font-system-ui-karla`
- **Substitute:** Karla, system-ui
- **Weights:** 600, 700
- **Sizes:** 16
- **Line height:** 1.00–1.50
- **Role:** Fallback for button labels and tertiary nav — present at very low frequency, acts as a safety net for the custom typefaces.

### Karla — Karla — detected in extracted data but not described by AI · `--font-karla`
- **Weights:** 700
- **Sizes:** 16px
- **Line height:** 1, 1.2
- **Role:** Karla — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.5 | 0.7px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.13px | `--text-body-sm` |
| body | 16px | 1.5 | -0.14px | `--text-body` |
| subheading | 20px | 1.25 | -0.2px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.96px | `--text-heading` |
| heading-lg | 48px | 1.11 | -1.92px | `--text-heading-lg` |
| display | 88px | 0.9 | -6.16px | `--text-display` |

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
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 136 | 136px | `--spacing-136` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 19.2px |
| badges | 8px |
| inputs | 8px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Boarding Pass Glass Panel
**Role:** Hero card — floating product UI over atmospheric photography

Frosted glass panel: rgba(255,255,255,0.06) background with backdrop-blur(20px), 19.2px radius, 1px hairline border in rgba(255,255,255,0.12). Contains a 3-column ticket layout: 'Boarding Pass' header in Whyte Inktrap 12px weight 400 uppercase, origin/destination codes in Whyte Inktrap Mono 14px, and large CTA buttons inside. 24px internal padding.

### Outlined Feature Row
**Role:** Feature list item with airport-board typography

Full-width row with 1px border in #f0f0f0, 19.2px radius, 16–24px vertical padding. Text uses Whyte Inktrap Mono 74px with 0.20em letter-spacing in #f0f0f0, rendered as outlined/stenciled type (text-stroke or text-shadow technique). Trailing arrow icon in #f0f0f0 at 24px. Dark void background.

### Gradient Comparison Card
**Role:** Competitor comparison block in product comparison section

Card with full background gradient (varies per card: teal→purple, violet→magenta, pink→magenta), 19.2px radius, 1px border in rgba(255,255,255,0.1). Contains a large outlined number (01–04) at 88px GrandSlang weight 300 in rgba(255,255,255,0.2), small uppercase descriptor at 12px in #f7f9fa, and 'vs. [Competitor] →' link at 24px Whyte Inktrap weight 700 in #f7f9fa. 24px padding.

### Ghost Button
**Role:** Outlined action — primary interactive element on dark

Pill shape (10000px radius), 1px border in #475467 or #f7f9fa, transparent background, 12px 24px padding. Label in Whyte Inktrap 16px weight 500 in #f7f9fa. On hover, border shifts to #af50ff and receives box-shadow: 0 0 12px rgba(175, 80, 255, 0.4).

### Filled Pill Button
**Role:** High-emphasis action — login, book demo

Pill shape (10000px radius), background #090909, 1px border in #f7f9fa, 8px 18px padding. Label in system-ui or Whyte Inktrap 16px weight 600 in #f7f9fa. Subtle shadow on hover.

### Top Navigation Bar
**Role:** Global site navigation

Full-width, 8px vertical padding, horizontal layout: left logo (DOPE.SECURITY wordmark), center links (PRODUCTS, PRICING, RESOURCES, MANAGE AI, ABOUT, CUSTOMERS) in Whyte Inktrap 14px weight 400, right-side ghost buttons (BOOK A DEMO, LOG IN). Active nav item receives 1px underline in #7f56d9. Background transparent over hero, solid #090909 on scroll.

### Hero Headline Block
**Role:** Primary above-the-fold message

Two-tone typographic stack: 'Your new' in GrandSlang 64–88px weight 300 italic in #f7f9fa, followed by 'Secure Web Gateway' in Whyte Inktrap 88px weight 700 in #f7f9fa with -0.07em letter-spacing. Subheadline in Whyte Inktrap 18px weight 400 in #f7f9fa at 80% opacity. Paired with play button (56px circle, 1px border) for video CTA.

### Coordinate Footer
**Role:** Persistent bottom-bar status indicator

Ultra-thin footer pinned to viewport bottom, 1px top border. Left: '+ Fly Direct Secure Web Gateway' in Whyte Inktrap 12px weight 400 in #6b6b6b. Right: GPS coordinates (e.g., '37.3861° N, 122.0839° W') plus heart icon in same style. Fits the aviation metaphor system-wide.

### Ghost Icon Button
**Role:** Icon-only action — close, expand, navigation arrows

Square or circular container with 8px radius, 1px border in #475467, 8px padding. Icon stroke 1.5px in #f7f9fa at 16–20px size.

### Serif Accent Phrase
**Role:** Editorial moment — 'Your new', brand taglines

Standalone GrandSlang italic at 64–146px, weight 300, -0.03em letter-spacing, in #f7f9fa or #f0f0f0. Used sparingly — one per hero section maximum. This is the luxury moment that distinguishes the brand from typical security SaaS.

### Outlined Display Number
**Role:** Section numbering in comparison cards

GrandSlang 88px weight 300 in rgba(255,255,255,0.2) with -0.03em letter-spacing, rendered with text-stroke for hollow effect. Functions as decorative counter — 01, 02, 03, 04.

### Provider Login Button
**Role:** SSO/authentication entry — 'Try now with Google'

Pill shape, 1px border in #f7f9fa at 0.6 opacity, transparent background, 12px 20px padding. Contains provider icon (Google 'G' or Microsoft 4-square) at 16px plus label in Whyte Inktrap 14px weight 400 in #f7f9fa. Full width within parent container.

## Do's and Don'ts

### Do
- Use Whyte Inktrap for all interface type — nav, body, buttons, cards. Reserve GrandSlang italic for one editorial moment per hero section.
- Set display headlines to 88px or larger with letter-spacing at -0.07em. The tight tracking at scale is the brand's voice.
- Use 19.2px radius for all cards and panels. This is the signature curve — more generous than typical 8–12px, less soft than 24px+.
- Use pill shape (10000px) for all buttons and tags. Never square or sharp-cornered interactive elements.
- Default to #090909 canvas. Color appears as a single violet accent (#af50ff) or gradient wash — never multiple competing chroma.
- Apply 0.20em letter-spacing when using Whyte Inktrap Mono at display sizes (74px). The expanded tracking is what makes it read as airport-departure-board, not code.
- Include the coordinate footer on every screen. The aviation metaphor is load-bearing for brand identity.

### Don't
- Don't use Whyte Inktrap Mono at body sizes. It's a display treatment only — at 14px it reads as code, not content.
- Don't add box-shadows to cards. The system is deliberately flat; elevation comes from glassmorphism and gradient washes, not drop shadows.
- Don't use #af50ff as a large background fill. It's an accent — a glow, a border, a focus halo. Large violet fields belong to the comparison-card gradient system.
- Don't mix multiple serif faces. GrandSlang is the only serif; introducing a second (Playfair, Cormorant) dilutes the editorial moment.
- Don't use white (#ffffff). The system uses #f7f9fa (Bone White) and #f0f0f0 (Ash) — pure white is too cold against the violet-warmed darks.
- Don't center-align body text. Headlines and display moments can center, but paragraphs and lists are always left-aligned.
- Don't add a light theme variant. The dark void is the brand — a white mode would feel like a different product.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Void | `#090909` | Base page canvas — the infinite dark |
| 2 | Cinder | `#423738` | Warm-tinted surface variant for secondary sections |
| 3 | Graphite | `#454545` | Card surfaces with hairline borders |
| 4 | Iris Glow | `#af50ff` | Accent surface — appears as button glow, card edge highlight |

## Elevation

- **Navigation bar:** `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px`

## Imagery

Atmospheric photography dominates the hero — a cosmic dusk sky in violet-pink-indigo with dense cloud formations, photographed from above. The sky functions as an emotional canvas, not a literal product context. The 'boarding pass' glassmorphic card floats over this sky, reinforcing the aviation metaphor. No product screenshots appear in the hero. The comparison section uses abstract gradient cards (teal→violet, violet→magenta, pink→purple) as decorative backdrops for text — no stock photography. Iconography is minimal and stroke-based (1.5px), white or violet on dark. The visual language is editorial-cinematic: fashion-magazine atmosphere meets airport-terminal typography.

## Layout

Max-width 1280px centered with full-bleed atmospheric hero. Hero is split: left side carries the 2-line headline stack (serif italic + bold sans) with video CTA below; right side holds the glassmorphic 'Boarding Pass' card. Below the hero, the page transitions to a feature-list section with full-width rows of outlined monospace type, each row a bordered card with generous vertical padding (16–24px). The comparison section uses a horizontal card row (4 cards) with gradient backgrounds. A persistent coordinate footer anchors the viewport bottom on all screens. Navigation is a minimal top bar: logo left, center links, ghost buttons right. Section rhythm alternates between vast negative space (hero, feature list) and dense visual blocks (comparison cards). The page breathes — no information-dense sections.

## Agent Prompt Guide

**Quick Color Reference**
- Text: #f7f9fa
- Background: #090909
- Border: #f0f0f0 (decorative) / #475467 (structural)
- Accent: #af50ff
- primary action: #af50ff (filled action)
- Gradient surface: #6c4bd6 → transparent (radial) or #401860 → #4823b4 → #634e78 (linear)

**3 Example Component Prompts**

1. **Hero Headline**: Create a hero section on #090909. Display headline: 'Your new' in GrandSlang italic 88px weight 300, #f7f9fa, letter-spacing -2.64px. Below: 'Secure Web Gateway' in Whyte Inktrap 88px weight 700, #f7f9fa, letter-spacing -6.16px. Subtext: 'Never re-route the Internet again.' in Whyte Inktrap 18px weight 400, #f7f9fa at 80% opacity. Play button: 56px circle, 1px border #f7f9fa, centered triangle icon in #f7f9fa.

2. **Outlined Feature Row**: Full-width row, 1px border #f0f0f0, 19.2px radius, 24px vertical padding, background #090909. Text: 'DETECT SHADOW IT/AI' in Whyte Inktrap Mono 74px weight 400, #f0f0f0, letter-spacing 14.8px, rendered as outlined/stenciled type. Trailing right-arrow icon in #f0f0f0 at 24px.

3. **Gradient Comparison Card**: Card with linear-gradient(135deg, #4a1a60, #c4408f) background, 19.2px radius, 1px border rgba(255,255,255,0.1), 24px padding. Large number '03' in GrandSlang 88px weight 300, rgba(255,255,255,0.2), hollow/stroked. Descriptor: 'BLOCKING AT THE DNS LEVEL' in Whyte Inktrap 12px weight 500 uppercase, #f7f9fa. Bottom: 'vs. Cisco Umbrella →' in Whyte Inktrap 24px weight 700, #f7f9fa.

## Aviation Metaphor System

The site operates under a persistent aviation metaphor that must carry through all new screens:
- **Boarding Pass** = product feature card or auth panel (glassmorphic, ticket-layout)
- **Fly Direct** = CTA phrase for primary conversion (appears in footer)
- **GPS coordinates** = persistent footer element, changes per section to imply 'current location'
- **Airport departure board** = monospaced outlined type treatment for feature lists and status displays
- **Departure/arrival codes** = section identifiers in mono caps (e.g., 'LEGACY → DS')
- The hero's flight imagery (plane in cosmic sky) sets the spatial metaphor: the product is a direct flight, not a layover.

## Type Pairing Logic

Three custom typefaces create a deliberate voice hierarchy:
1. **GrandSlang** (serif italic) = emotion, luxury, brand poetry. Maximum one instance per screen, always in a hero moment. Weight 300 at scale is anti-conventional — it whispers where competitors shout.
2. **Whyte Inktrap** (geometric sans) = the workhorse. Nav, body, buttons, labels, subheads. The inktrap terminals are the signature: they create generous counters at display sizes and crisp legibility at body sizes.
3. **Whyte Inktrap Mono** (monospaced display) = system voice, technical authority, airport-board energy. Used at 74px with 0.20em tracking for feature names. At 14px for data/code labels. Never used for body paragraphs.

## Similar Brands

- **Linear** — Same dark-canvas + single vivid accent + oversized confident type approach
- **Arc Browser** — Same editorial-type-meets-tech-product tension, violet-tinged darks, atmospheric hero photography
- **Vercel** — Same near-black canvas, hairline borders, pill buttons, gradient accent washes on dark
- **Raycast** — Same custom geometric sans + monospaced display pairing, dark mode native, violet accent system
- **Pitch** — Same fashion-magazine-meets-software sensibility, editorial italic moments against bold sans, dark atmospheric hero

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #090909;
  --color-bone-white: #f7f9fa;
  --color-ash: #f0f0f0;
  --color-slate: #6b6b6b;
  --color-graphite: #454545;
  --color-smoke: #828384;
  --color-iron: #333333;
  --color-cinder: #423738;
  --color-iris: #af50ff;
  --color-plum: #7f56d9;
  --color-aubergine: #271635;
  --color-storm-gray: #475467;
  --color-lavender-wash: #e1bdff;
  --color-orchid-radial: #6c4bd6;
  --gradient-orchid-radial: radial-gradient(circle closest-corner at 10% 50%, rgb(108, 75, 214), rgba(0, 0, 0, 0) 55%);
  --color-amethyst-band: #4823b4;
  --gradient-amethyst-band: linear-gradient(90deg, rgb(64, 24, 96), rgb(72, 35, 180) 50%, rgb(99, 78, 120));

  /* Typography — Font Families */
  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte-inktrap-mono: 'Whyte Inktrap Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-grandslang: 'GrandSlang', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui-karla: 'System UI / Karla', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-karla: 'Karla', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.13px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.14px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.96px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -1.92px;
  --text-display: 88px;
  --leading-display: 0.9;
  --tracking-display: -6.16px;

  /* Typography — Weights */
  --font-weight-light: 300;
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
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-lg-2: 10.8px;
  --radius-2xl: 19.2px;
  --radius-full: 99px;
  --radius-full-2: 1584px;
  --radius-full-3: 10000px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 19.2px;
  --radius-badges: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-void: #090909;
  --surface-cinder: #423738;
  --surface-graphite: #454545;
  --surface-iris-glow: #af50ff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #090909;
  --color-bone-white: #f7f9fa;
  --color-ash: #f0f0f0;
  --color-slate: #6b6b6b;
  --color-graphite: #454545;
  --color-smoke: #828384;
  --color-iron: #333333;
  --color-cinder: #423738;
  --color-iris: #af50ff;
  --color-plum: #7f56d9;
  --color-aubergine: #271635;
  --color-storm-gray: #475467;
  --color-lavender-wash: #e1bdff;
  --color-orchid-radial: #6c4bd6;
  --color-amethyst-band: #4823b4;

  /* Typography */
  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-whyte-inktrap-mono: 'Whyte Inktrap Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-grandslang: 'GrandSlang', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui-karla: 'System UI / Karla', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-karla: 'Karla', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.13px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.14px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.96px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -1.92px;
  --text-display: 88px;
  --leading-display: 0.9;
  --tracking-display: -6.16px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-lg-2: 10.8px;
  --radius-2xl: 19.2px;
  --radius-full: 99px;
  --radius-full-2: 1584px;
  --radius-full-3: 10000px;

  /* Shadows */
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
}
```