# Slack — Style Reference
> Plum-warm digital hearth — a cream-white workspace where deep aubergine accents glow like embers in a quiet, collaborative room.

**Theme:** light

Slack's design language is a deep-aubergine workspace built on a cream-white canvas, where the brand's signature plum purple (#611f69) is reserved for moments of action and emphasis while nearly everything else stays achromatic and calm. The aesthetic is editorial-meets-product: oversized Salesforce-Avant-Garde display headlines whisper in weight 700 with tight negative tracking, product UI screenshots carry the actual color story (multicolored hash marks, channel pills, avatars), and the page breathes through generous vertical rhythm broken by full-bleed dark-purple storytelling bands. Playful radial gradient washes (pink, blue, green, yellow at 25% opacity) float behind sections like soft spotlights, echoing the lozenge brand mark without being loud. Components are lightweight and confident — 4px-radius buttons, 16px-radius cards, hairline lavender borders, and almost no elevation except a single soft shadow.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Aubergine Core | `#611f69` | `--color-aubergine-core` | Pink supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Midnight Plum | `#1d1c1d` | `--color-midnight-plum` | Primary text, dark section backgrounds, button text on light surfaces — the near-black that reads as warm rather than clinical |
| Eggplant Ink | `#2e0039` | `--color-eggplant-ink` | Display text on light lavender surfaces, deep purple headlines — the chromatic dark text that keeps the brand's purple identity in headings |
| Plum Shadow | `#3d0157` | `--color-plum-shadow` | Hover and pressed states on primary buttons, deeper purple accents — what Aubergine Core becomes when it presses down |
| Iris Mid | `#730394` | `--color-iris-mid` | Link text, secondary purple accents, icon strokes — the mid-tone purple that carries the brand's chromatic voice in running text |
| Lavender Wash | `#f9f0ff` | `--color-lavender-wash` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Lilac Veil | `#f2defe` | `--color-lilac-veil` | Subtle surface tints, hover backgrounds for navigation items — the palest brand-tinted surface for gentle differentiation from white |
| Iris Edge | `#eac8fe` | `--color-iris-edge` | Hairline borders, card outlines, decorative dividers — the lavender 1px line that separates content while staying within the brand family |
| Violet Glow | `#d17dfe` | `--color-violet-glow` | Decorative card accents, gradient midpoints, illustration highlights — the vivid lavender that appears in gradient washes and spotlight effects |
| Magenta Pulse | `#9602c7` | `--color-magenta-pulse` | Vivid brand accent in radial gradients and spotlight effects — the electric purple that powers the playful color washes behind sections |
| Plum Deep | `#481a54` | `--color-plum-deep` | Darkest brand surface for full-bleed storytelling sections, header bars — the near-black purple that creates the page's dramatic contrast moments |
| Cream Canvas | `#fefbff` | `--color-cream-canvas` | Page background, dominant canvas — the warm off-white with the faintest purple warmth that distinguishes it from clinical pure white |
| Pure White | `#ffffff` | `--color-pure-white` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Graphite | `#454245` | `--color-graphite` | Secondary body text, icon strokes, list items — the dark warm gray for supporting copy |
| Steel | `#696969` | `--color-steel` | Muted body text, helper text, secondary navigation — the mid-gray for de-emphasized content |
| Fog | `#8e8e8e` | `--color-fog` | Tertiary text, disabled states, placeholder content — the light gray for least-emphasis copy |
| Ash | `#edeaed` | `--color-ash` | Light dividers, subtle borders, input field backgrounds — the warm-tinted light gray for structural separation |
| Slate | `#808080` | `--color-slate` | Mid-neutral for cards, muted surfaces, icon backgrounds |
| Ember to Violet | `linear-gradient(104deg, #000000 9.56%, #ba01ff 102.66%)` | `--color-ember-to-violet` | Signature brand gradient — linear from black to vivid magenta, used for featured text and emphasis moments |
| Plum Haze | `linear-gradient(102deg, rgba(131, 56, 138, 0.8) 0%, rgba(211, 137, 231, 0.8) 100%)` | `--color-plum-haze` | Overlay gradient for dark sections, semi-transparent purple washes |

## Tokens — Typography

### Salesforce-Avant-Garde — Display and heading typeface. Used for hero headlines (76–96px, weight 700, tightly tracked at -0.008 to -0.012em), section headings (50–64px, weight 700), and subheadings (22–32px, weight 400–600). The geometric, wide-set letterforms give Slack's editorial product-marketing feel a distinctive voice — neither a tech-startup grotesque nor a humanist sans, but something closer to architectural signage. · `--font-salesforce-avant-garde`
- **Substitute:** Archivo, Space Grotesk, or General Sans
- **Weights:** 400, 600, 700
- **Sizes:** 18, 21, 22, 24, 32, 50, 58, 64, 76, 96
- **Line height:** 0.97–1.50 (varies by size; 1.08 for large display, 1.33 for medium, 1.50 for 18px)
- **Letter spacing:** -0.0120em at 96px, -0.0080em at 76px, -0.0040em at 58–64px, -0.0010em at 32–50px
- **Role:** Display and heading typeface. Used for hero headlines (76–96px, weight 700, tightly tracked at -0.008 to -0.012em), section headings (50–64px, weight 700), and subheadings (22–32px, weight 400–600). The geometric, wide-set letterforms give Slack's editorial product-marketing feel a distinctive voice — neither a tech-startup grotesque nor a humanist sans, but something closer to architectural signage.

### Salesforce-Sans — Body, UI, and micro-typeface. The workhorse for navigation (14–16px weight 400–600), body copy (16–18px weight 400, line-height 1.38–1.43), button labels (14–16px weight 600), and eyebrows/overlines (12px weight 600, tracked at +0.057em for wide caps presence). Weight 300 is reserved for occasional quiet supporting lines. · `--font-salesforce-sans`
- **Substitute:** Inter, IBM Plex Sans, or Manrope
- **Weights:** 300, 400, 600, 700
- **Sizes:** 12, 14, 15, 16, 18
- **Line height:** 1.20–1.56 (compact 1.20 for buttons, 1.38–1.43 for body, 1.56 for 14px body)
- **Letter spacing:** -0.0040em at 18px, 0.0070em at 16px, 0.0120em at 14px, 0.0570em at 12px (eyebrow/label tracking)
- **Role:** Body, UI, and micro-typeface. The workhorse for navigation (14–16px weight 400–600), body copy (16–18px weight 400, line-height 1.38–1.43), button labels (14–16px weight 600), and eyebrows/overlines (12px weight 600, tracked at +0.057em for wide caps presence). Weight 300 is reserved for occasional quiet supporting lines.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.2 | 0.68px | `--text-caption` |
| body-sm | 14px | 1.56 | 0.17px | `--text-body-sm` |
| body | 16px | 1.38 | 0.11px | `--text-body` |
| subheading | 18px | 1.4 | -0.07px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.01px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.03px | `--text-heading` |
| heading-lg | 50px | 1.2 | -0.05px | `--text-heading-lg` |
| display | 76px | 1.08 | -0.61px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 98 | 98px | `--spacing-98` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 48px |
| cards | 16px |
| pills | 90px |
| inputs | 4px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.1) 0px 0px 32px 0px` | `--shadow-xl` |
| subtle | `rgb(97, 31, 105) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| lg | `rgba(0, 0, 0, 0.1) 0px 5px 20px 0px` | `--shadow-lg` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96px
- **Card padding:** 32px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** Filled action button for the page's most important next step

Aubergine Core (#611f69) background, white text, 4px border-radius, padding 18px 24px. Label in Salesforce-Sans 14–16px weight 600 with 0.012em tracking. On hover, shifts to Plum Shadow (#3d0157). This is the only filled button style — it must be used sparingly to maintain its impact.

### Ghost CTA Button
**Role:** Secondary action button, paired with the primary CTA

White background, Iris Mid (#730394) text, 1px Iris Mid border, 4px border-radius, padding 18px 24px. Same font and tracking as the primary button. The border treatment (not background) carries the brand color, letting the filled button win visual priority.

### Pill Tag Button
**Role:** Floating feature tag or category label that overlays content

Lavender Wash (#f9f0ff) background, Midnight Plum (#1d1c1d) text, 48px border-radius for a fully rounded pill shape. Padding 6px 16px. Used for the floating labels like 'Knowledge', 'People', 'Process' that sit in front of headlines.

### Dark Section CTA
**Role:** Primary action button on Plum Deep (#481a54) backgrounds

Inverted version of the primary CTA: white background, Midnight Plum text, 4px radius, same 18px 24px padding. A 1px white inset border can be added via rgba(255,255,255,0.2) for a ghost variant on dark.

### Product Screenshot Card
**Role:** The product UI mockup that serves as the visual hero of most sections

Pure white (#ffffff) background with a 16px border-radius. Contains a realistic Slack app interface with the signature multicolored sidebar (green, blue, purple, yellow channel pills). The card itself is borderless but floats on the cream canvas, often paired with a subtle rgba(0,0,0,0.1) 0px 0px 32px shadow.

### Logo Cloud Strip
**Role:** Social proof row of trusted-by logos

Single horizontal row centered on the page. Logos rendered in Graphite (#454245) or Steel (#696969), 24–32px height, with even spacing. The 'Trusted by top teams' eyebrow sits above in 12px weight 600, tracked at +0.057em, in Fog (#8e8e8e).

### Feature Highlight Card
**Role:** Content card pairing a heading with a supporting visual

White or transparent background, 16px border-radius, 32px padding. Heading in Salesforce-Avant-Garde 24–32px weight 700. Body in Salesforce-Sans 16px weight 400, Graphite color. Optional 1px Iris Edge (#eac8fe) border for the lavender outline treatment.

### Stat Callout Block
**Role:** Large numerical proof point (e.g., '97 min')

Oversized Salesforce-Avant-Garde number at 76–96px weight 700, Midnight Plum (#1d1c1d) or Plum Deep (#481a54) color. Supporting label below in Salesforce-Sans 16px weight 400, Steel (#696969). No card chrome — the number IS the visual.

### Announcement Banner
**Role:** Top-of-page notification bar for product updates

Lilac Veil (#f2defe) or Lavender Wash (#f9f0ff) background, full-width, 4–6px vertical padding. Text centered in Salesforce-Sans 14px weight 400, Iris Mid (#730394) for links, Midnight Plum for body. Close button (×) at the far right.

### Top Navigation Bar
**Role:** Primary site navigation

Transparent or white background, 64px height, full-width. Left: Slack logo (multicolored hash) + 'from Salesforce' subtext. Center: nav links (Features, Solutions, Enterprise, Resources, Pricing) in Salesforce-Sans 15px weight 400, Midnight Plum, with 16px horizontal spacing. Right: search icon, 'Sign in' text link, Ghost CTA (REQUEST A DEMO), then Primary CTA (GET STARTED). No visible border or background on the bar itself — it floats on the cream canvas.

### Dark Storytelling Section
**Role:** Full-bleed brand-color section that breaks up the light content rhythm

Plum Deep (#481a54) background, full viewport width, 96px+ vertical padding. Headline in Salesforce-Avant-Garde 58–64px weight 700, white text, centered. Body in Salesforce-Sans 18px weight 400, white at 80% opacity. Decorative sparkle/star elements (small white dots) float to the left. This is where the brand gets to be loud.

### Radial Gradient Wash
**Role:** Playful colored spotlight behind text or sections

Four 20vw radial gradients at 10%, 30%, 65%, and 90% horizontal positions, each at 70% vertical — pink (rgba(255,100,150,0.25)), blue (rgba(100,150,255,0.25)), green (rgba(100,255,150,0.25)), yellow (rgba(255,255,100,0.25)). These are the signature visual element that references Slack's multicolored brand identity without using solid color blocks.

### List Item with Icon
**Role:** Feature bullet or action list entry

Horizontal flex with 12px gap. Icon in 20–24px, Iris Mid (#730394) stroke or fill. Text in Salesforce-Sans 16–18px weight 400, Midnight Plum. No bullet points — icons are the visual markers.

## Do's and Don'ts

### Do
- Use Salesforce-Avant-Garde at 76–96px weight 700 for hero headlines, with letter-spacing -0.008em to -0.012em — the tight tracking is what makes the display type feel architectural rather than corporate
- Reserve the filled Aubergine Core (#611f69) button for exactly ONE primary action per section; pair it with the Ghost CTA (white fill, Iris Mid border) as the secondary
- Apply the four-color radial gradient wash (pink, blue, green, yellow at 25% opacity) behind feature sections to reference the Slack brand's multicolored DNA without painting solid color blocks
- Use Lavender Wash (#f9f0ff) for pill tags and Lilac Veil (#f2defe) for hover states — the brand-tinted surfaces must always stay lighter than white card surfaces
- Set section gaps to 96px to create the editorial breathing room that makes product screenshots feel like editorial photography rather than UI dumps
- Use the Plum Deep (#481a54) full-bleed section for at most 1–2 moments per page — the contrast jump is the point, and overuse flattens the impact
- Render product UI screenshots at 16px border-radius with a single rgba(0,0,0,0.1) 0px 0px 32px shadow — the soft, large-blur shadow is more atmospheric than structural

### Don't
- Don't use a radius larger than 4px on action buttons — the slight rounding reads as confident and professional, not playful; pills (90px) are a separate component for tags, not CTAs
- Don't put solid color blocks (pink, blue, green, yellow) behind sections — the brand's multicolor story must always be expressed through radial gradient washes, not flat fills
- Don't use letter-spacing wider than -0.001em on body text — the default tracking is already slightly positive (0.007–0.012em), and widening it will make copy feel clinical and government-form-like
- Don't use #1264a3 (the blue) as a brand or CTA color — it is the Slackbot/link blue, not a primary brand color; all purple-brand treatments should come from the plum/aubergine/lavender family
- Don't stack more than two border-radius sizes in a single visual composition — mixing 4px buttons, 16px cards, and 48px pills in the same frame creates visual noise; pick one rounding scale per section
- Don't apply shadows to text, headings, or inline elements — shadows are exclusively for product screenshot cards and the rare elevated panel; the system is fundamentally flat
- Don't use #000000 for dark sections — always use Plum Deep (#481a54) or Midnight Plum (#1d1c1d) so the dark moments stay within the brand's warm purple atmosphere

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream Canvas | `#fefbff` | Page background — warm off-white that the entire UI sits on |
| 1 | Pure White | `#ffffff` | Card surfaces, product screenshot backgrounds, elevated panels |
| 2 | Lavender Wash | `#f9f0ff` | Soft brand-tinted surfaces for pill buttons, highlighted callouts, floating tags |
| 3 | Plum Deep | `#481a54` | Full-bleed dark storytelling sections — the dramatic brand-color band |
| 4 | Plum Shadow Overlay | `#3d0157` | Overlays and deeper purple moments within dark sections |

## Elevation

- **Product Screenshot Card:** `rgba(0, 0, 0, 0.1) 0px 0px 32px 0px`
- **Primary CTA Button (focus state):** `rgb(97, 31, 105) 0px 0px 0px 1px inset`
- **Elevated Button (hover/active):** `rgba(0, 0, 0, 0.1) 0px 5px 20px 0px`

## Imagery

Product UI screenshots dominate the visual language — the actual Slack application interface is the primary 'imagery', rendered as realistic browser-frame mockups with traffic-light controls, search bars, and full channel/message layouts. The sidebar's multicolored channel pills (green #2bac76, blue #1264a3, purple #611f69, yellow #ecb22e) carry the brand's chromatic DNA. The only other visual elements are small decorative sparkle/star motifs (white dots with cross-shine) on dark sections and the floating lavender pill tags that overlay text. No photography, no illustration, no stock imagery — the product IS the visual content. The four-color radial gradient washes (pink, blue, green, yellow at 25% opacity) serve as atmospheric backgrounds, never as focal points. Icons are minimal: 20–24px stroke-based glyphs in Iris Mid (#730394) or Midnight Plum (#1d1c1d).

## Layout

Max-width 1200px centered content container, but sections alternate between contained and full-bleed. The hero is a centered stack: announcement banner at top, navigation bar, then a large two-line headline (Salesforce-Avant-Garde 76–96px) with a one-line subhead, dual CTAs (filled + ghost), and a logo cloud strip — all vertically centered with generous whitespace. Below the hero, a full-width product screenshot card breaks the vertical rhythm. The mid-page introduces a full-bleed Plum Deep section with centered headline, followed by a 2-column alternating layout: text-left/image-right then text-right/image-left, each separated by 96px section gaps. The footer and secondary sections maintain the 1200px max-width container. Navigation is a transparent top bar that becomes contextual — no sticky behavior, no mega-menus visible. The overall page rhythm is: light hero → product visual → light features → dark brand section → light features → product visual, creating a heartbeat between cream content and aubergine emphasis.

## Agent Prompt Guide

primary action: no distinct CTA color
**Quick Color Reference:**
- Text: #1d1c1d (primary), #696969 (secondary), #8e8e8e (tertiary)
- Background: #fefbff (canvas), #ffffff (card), #f9f0ff (brand-tinted surface)
- Border: #eac8fe (lavender hairline), #1d1c1d (structural)
- Accent: #611f69 (Aubergine Core — primary action), #730394 (Iris Mid — links and secondary)
- Dark surface: #481a54 (Plum Deep — full-bleed sections)

**3-5 Example Component Prompts:**

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

2. **Floating Feature Tag**: Lavender Wash (#f9f0ff) background, 48px border-radius (full pill), 6px 16px padding. Text in Salesforce-Sans 14px weight 600, #1d1c1d. This pill sits overlaid on a headline, slightly overlapping the text — it's a navigation anchor, not a button.

3. **Product Screenshot Card**: White (#ffffff) background, 16px border-radius. Inside: a realistic Slack app UI with a dark sidebar (channel list with green/blue/purple/yellow colored channel name pills), a main message area with avatar circles, and a right-side panel. Subtle shadow: rgba(0,0,0,0.1) 0px 0px 32px 0px. The card is borderless and sits directly on the cream canvas with 96px vertical breathing room above and below.


5. **Stat Callout**: Oversized '97 min' in Salesforce-Avant-Garde 96px weight 700, #1d1c1d or #481a54. Supporting label 'average time users can save' in Salesforce-Sans 16px weight 400, #696969, directly below. No card chrome, no border — the number stands alone on the cream canvas.

## Similar Brands

- **Linear** — Same editorial-product aesthetic: oversized display headlines in a geometric sans, dark storytelling sections breaking up light content, generous vertical rhythm, and a single brand-color anchor (Linear's purple vs Slack's aubergine) used sparingly for emphasis
- **Notion** — Shared product-screenshot-as-hero approach where the actual application UI serves as the primary visual content, with minimal photography and a restrained color palette that lets the product's intrinsic colorfulness do the work
- **Vercel** — Same typographic confidence with tight tracking on display headlines, centered hero stacks, and the technique of breaking light content with full-bleed dark sections at deliberate rhythmic intervals
- **Stripe** — Similar gradient-as-atmosphere technique where subtle colored washes (Stripe's aurora gradients, Slack's radial spotlights) create visual interest without solid color blocks, paired with the same editorial spacing generosity

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-aubergine-core: #611f69;
  --color-midnight-plum: #1d1c1d;
  --color-eggplant-ink: #2e0039;
  --color-plum-shadow: #3d0157;
  --color-iris-mid: #730394;
  --color-lavender-wash: #f9f0ff;
  --color-lilac-veil: #f2defe;
  --color-iris-edge: #eac8fe;
  --color-violet-glow: #d17dfe;
  --color-magenta-pulse: #9602c7;
  --color-plum-deep: #481a54;
  --color-cream-canvas: #fefbff;
  --color-pure-white: #ffffff;
  --color-graphite: #454245;
  --color-steel: #696969;
  --color-fog: #8e8e8e;
  --color-ash: #edeaed;
  --color-slate: #808080;
  --color-ember-to-violet: #ba01ff;
  --gradient-ember-to-violet: linear-gradient(104deg, #000000 9.56%, #ba01ff 102.66%);
  --color-plum-haze: #83388a;
  --gradient-plum-haze: linear-gradient(102deg, rgba(131, 56, 138, 0.8) 0%, rgba(211, 137, 231, 0.8) 100%);

  /* Typography — Font Families */
  --font-salesforce-avant-garde: 'Salesforce-Avant-Garde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-salesforce-sans: 'Salesforce-Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.68px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: 0.17px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.11px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.07px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.01px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.03px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.05px;
  --text-display: 76px;
  --leading-display: 1.08;
  --tracking-display: -0.61px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-98: 98px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 96px;
  --card-padding: 32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 48px;
  --radius-full-2: 60px;
  --radius-full-3: 90px;

  /* Named Radii */
  --radius-tags: 48px;
  --radius-cards: 16px;
  --radius-pills: 90px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 32px 0px;
  --shadow-subtle: rgb(97, 31, 105) 0px 0px 0px 1px inset;
  --shadow-lg: rgba(0, 0, 0, 0.1) 0px 5px 20px 0px;

  /* Surfaces */
  --surface-cream-canvas: #fefbff;
  --surface-pure-white: #ffffff;
  --surface-lavender-wash: #f9f0ff;
  --surface-plum-deep: #481a54;
  --surface-plum-shadow-overlay: #3d0157;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-aubergine-core: #611f69;
  --color-midnight-plum: #1d1c1d;
  --color-eggplant-ink: #2e0039;
  --color-plum-shadow: #3d0157;
  --color-iris-mid: #730394;
  --color-lavender-wash: #f9f0ff;
  --color-lilac-veil: #f2defe;
  --color-iris-edge: #eac8fe;
  --color-violet-glow: #d17dfe;
  --color-magenta-pulse: #9602c7;
  --color-plum-deep: #481a54;
  --color-cream-canvas: #fefbff;
  --color-pure-white: #ffffff;
  --color-graphite: #454245;
  --color-steel: #696969;
  --color-fog: #8e8e8e;
  --color-ash: #edeaed;
  --color-slate: #808080;
  --color-ember-to-violet: #ba01ff;
  --color-plum-haze: #83388a;

  /* Typography */
  --font-salesforce-avant-garde: 'Salesforce-Avant-Garde', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-salesforce-sans: 'Salesforce-Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.68px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: 0.17px;
  --text-body: 16px;
  --leading-body: 1.38;
  --tracking-body: 0.11px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.07px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.01px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.03px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.05px;
  --text-display: 76px;
  --leading-display: 1.08;
  --tracking-display: -0.61px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-98: 98px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 48px;
  --radius-full-2: 60px;
  --radius-full-3: 90px;

  /* Shadows */
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 32px 0px;
  --shadow-subtle: rgb(97, 31, 105) 0px 0px 0px 1px inset;
  --shadow-lg: rgba(0, 0, 0, 0.1) 0px 5px 20px 0px;
}
```