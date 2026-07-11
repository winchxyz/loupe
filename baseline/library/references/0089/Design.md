# Factory.ai — Style Reference
> Engineer's spec sheet on warm vellum. Off-white canvas, 4px corners, 1px hairlines, monospace labels, and one orange dot that signals but never shouts.

**Theme:** light

Factory.ai reads as a technical spec sheet on warm vellum: an off-white canvas, a tightly tracked geometric sans for headlines, and one vivid orange dot that punctuates a nearly monochrome interface. The visual language borrows from terminal windows and code editors — monospace type is everywhere, borders are 1px hairlines, corners are sharp at 4px, and product mockups (IDE panels, CLI boxes, terminal windows) carry the visual weight that photography would in a consumer brand. Elevation is communicated through surface tone shifts and dotted borders, never drop shadows. The orange accent never fills large shapes; it appears only as a 8px signal dot beside labels like "VERSION" — the color is a status indicator, not a brand wall. Every screen should feel like a developer's working document: high information density, minimal decoration, monospace for anything categorical, and prose reserved for primary messaging.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#fafafa` | `--color-paper-white` | Page canvas, page background |
| Frost Surface | `#eeeeee` | `--color-frost-surface` | Card surface, elevated panels, muted backgrounds |
| Ash Hairline | `#d6d3d2` | `--color-ash-hairline` | Subtle dividers, dotted borders, faint structural lines |
| Pewter Rule | `#b8b3b0` | `--color-pewter-rule` | Most-used border color, hairline rules, input outlines, card borders |
| Stone Mid | `#a49d9a` | `--color-stone-mid` | Mid-tone dividers, placeholder text, inactive UI elements |
| Granite Mute | `#8a8380` | `--color-granite-mute` | Muted helper text, secondary metadata, inactive nav links |
| Iron Caption | `#5c5855` | `--color-iron-caption` | Body text alt, card descriptions, secondary copy |
| Graphite Body | `#3d3a39` | `--color-graphite-body` | Body text, icon strokes, secondary headings |
| Obsidian | `#1f1d1c` | `--color-obsidian` | Deep surface, inverse backgrounds for hero panels |
| Carbon | `#101010` | `--color-carbon` | Inverse surface, dark panels, dark badges |
| Ink | `#020202` | `--color-ink` | Dark supporting neutral for text, icons, and strong contrast. Do not promote it to the primary CTA color |
| Signal Orange | `#ef6f2e` | `--color-signal-orange` | Orange supporting accent for decorative details and low-frequency emphasis |
| Ember Edge | `#d15010` | `--color-ember-edge` | Deep orange for borders on orange-tagged elements, outlined accents |

## Tokens — Typography

### Geist — Primary UI and display typeface. All weights are 400 — the design relies on tight letter-spacing and size, not weight, to create hierarchy. At 60px display uses -0.048em tracking (≈-2.88px), aggressive condensation that makes headlines feel like compressed technical glyphs rather than editorial type. · `--font-geist`
- **Substitute:** Inter, system-ui
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px, 48px, 60px
- **Line height:** 1.0–1.5
- **Letter spacing:** -0.048em at 60px, -0.048em at 48px, -0.030em at 24px, -0.030em at 18px, -0.030em at 16px, -0.030em at 14px
- **Role:** Primary UI and display typeface. All weights are 400 — the design relies on tight letter-spacing and size, not weight, to create hierarchy. At 60px display uses -0.048em tracking (≈-2.88px), aggressive condensation that makes headlines feel like compressed technical glyphs rather than editorial type.

### Geist Mono — Monospace for nav links, category badges (ENGINEERING, PRODUCT), terminal commands, metadata, and any categorical or code-adjacent label. Appears in headlines-adjacent positions (badges, version tags) — not just inside code blocks. Letter-spacing -0.020em is tighter than typical monospace, keeping mono labels compact next to proportional headlines. · `--font-geist-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px, 18px
- **Line height:** 1.0–1.5
- **Letter spacing:** -0.020em at all sizes
- **Role:** Monospace for nav links, category badges (ENGINEERING, PRODUCT), terminal commands, metadata, and any categorical or code-adjacent label. Appears in headlines-adjacent positions (badges, version tags) — not just inside code blocks. Letter-spacing -0.020em is tighter than typical monospace, keeping mono labels compact next to proportional headlines.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.42px | `--text-body-sm` |
| body | 16px | 1.5 | -0.48px | `--text-body` |
| subheading | 18px | 1.5 | -0.54px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.72px | `--text-heading-sm` |
| heading | 48px | 1.2 | -2.3px | `--text-heading` |
| display | 60px | 1 | -2.88px | `--text-display` |

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
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 4px |
| cards | 4px |
| badges | 4px |
| inputs | 4px |
| panels | 4px |
| buttons | 4px |
| special | 8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 24px

## Components

### Terminal Window
**Role:** Hero and product feature visual

Faux-terminal panel with 3-dot traffic light row, light gray (#eeeeee) header bar, monospace filename caption (e.g. 'sophie@factory: ~ — uvx factory create-app'), and a code body on white (#fafafa). 1px Pewter Rule (#b8b3b0) border, 4px radius, no shadow. Carries syntax-color tokens inside the code body using soft oranges and grays.

### IDE Panel Frame
**Role:** Product feature visual for code editor integration

IDE screenshot enclosed in a dotted 1px Ash Hairline (#d6d3d2) border with 4px radius. Includes a corner caption (e.g. '01 — TERMINAL / IDE') in Geist Mono 14px tracking -0.020em, #5c5855. No fill, no shadow — the dotted border is the only container.

### CLI Install Box
**Role:** Primary install/CTA container

White (#fafafa) panel with 1px Pewter Rule border, 4px radius, 16px padding. Contains a tab row (MACOS / LINUX, WINDOWS) in Geist Mono 14px uppercase, then a command row: orange #ef6f2 prompt chevron '>', monospace command 'curl -fsSL https://app.factory.ai/cli | sh', #020202 text, and a small copy icon on the right. The orange chevron is the only chromatic element — a signal that this is a runnable command.

### Category Badge
**Role:** Content taxonomy tag

Dark filled badge with #020202 or #101010 background, 4px radius, 4–6px vertical and 8–10px horizontal padding. Text in Geist Mono 12px uppercase, #fafafa, letter-spacing -0.020em. Used for tags like ENGINEERING, PRODUCT, NEW. The 'NEW' variant may use a bordered dark style instead of filled.

### Version Dot Indicator
**Role:** Section/state label

8px solid #ef6f2 circle followed by a Geist Mono uppercase label (e.g. 'VERSION', 'PRODUCT', 'TRUSTED BY TEAMS AT') in #020202, 12–14px, -0.020em. The orange dot is the only color; the label is always black or dark gray. Functions as a quiet section opener.

### Primary Action Button
**Role:** Primary call-to-action (LOG IN, CONTACT SALES, LEARN MORE)

Filled #020202 background, #fafafa text, 4px radius, 8px vertical / 14px horizontal padding, Geist Mono 12–14px uppercase with -0.020em tracking. For CONTACT SALES a outlined variant uses 1px #020202 border on white fill. LEARN MORE uses text + right arrow '→' in Geist, no background, 4px on a 2px underline-on-hover only.

### Navigation Bar
**Role:** Top-level site navigation

White #fafafa background, 1px bottom border in #b8b3b0 (or transparent until scroll). Left: Factory logo with gear-mark + 'FACTORY' wordmark in Geist 16px #020202. Right: nav links (PRODUCT, ENTERPRISE, PRICING, NEWS, COMPANY, CAREERS, DOCS) in Geist 14px #1f1d1c with dropdown chevrons, 24px gap. LOG IN as dark filled primary button, CONTACT SALES as outlined button, both 4px radius.

### Hero Section
**Role:** Page-opening composition

Two-column split. Left: Version Dot Indicator (● VISION), then display headline at 60px Geist weight 400, -2.88px tracking, #020202, 2-line max. Subtext in body 16px #5c5855. Below: CLI Install Box. Right: floating Terminal Window or abstract dot-grid (small 4px #ef6f2 and #b8b3b0 dots in a loose 4×4 constellation). Section padding 80px vertical, max-width 1200px centered.

### News Card
**Role:** Editorial/updates entry

Two cards per row, 4px radius, no border or 1px Pewter Rule. Top: Category Badge (ENGINEERING/NEW). Heading at 24px Geist #020202, -0.72px tracking, single line. Body in 16px #5c5855, 2–3 lines truncated. 'LEARN MORE →' as ghost text link. Vertical timeline (●──●──●──●) on far right with 4px dots in #ef6f2 and #b8b3b0, connected by 1px dashed lines.

### Feature Section
**Role:** Product capability block

Two-column alternating: text-left/visual-right then text-right/visual-left. Left column max ~480px: Version Dot Indicator, heading at 48px Geist #020202 -2.3px tracking, body 16px #5c5855, LEARN MORE → link. Right column: IDE Panel Frame or Terminal Window. Vertical gap 80px between sections.

### Trust Logo Bar
**Role:** Social proof band

Horizontal row of customer logos (Parafin, Adobe, MongoDB, etc.) in grayscale, single-color #8a8380 or #a49d9a, no color treatment. Preceded by Version Dot Indicator '● TRUSTED BY TEAMS AT' in Geist Mono 12px #5c5855. Logos sit on #fafafa, no dividers, 48–64px gap between marks, 80px section padding vertical.

### Tab Control
**Role:** Platform selector (MACOS / LINUX, WINDOWS)

Two pill-less tabs in a bordered container (1px Pewter Rule, 4px radius). Active tab: white #fafafa fill with 1px #020202 border inside, Geist Mono 14px uppercase #020202. Inactive: transparent, #5c5855 text. 12px horizontal padding, 6px vertical, no gap between tabs.

## Do's and Don'ts

### Do
- Use #020202 for all primary text, primary action buttons (LOG IN, CONTACT SALES filled), and the logo wordmark — black is the dominant brand color, not orange
- Use Signal Orange #ef6f2 only as an 8px status dot beside section labels (● VERSION, ● PRODUCT) or as a single accent in the dot constellation — never as a fill on large shapes
- Use Geist Mono for every categorical or metadata label: nav links, category badges, tab controls, section openers, timestamps, and terminal content
- Use Geist (proportional) only for headlines, body paragraphs, and prose — reserve mono for code-adjacent and categorical text
- Keep letter-spacing tight: -0.048em on 48–60px display, -0.030em on 14–24px text, -0.020em on all monospace — the compressed tracking is what makes the type feel technical
- Communicate elevation with 1px Pewter Rule (#b8b3b0) borders and surface tone shifts to #eeeeee — never use box-shadow
- Use 4px radius for all cards, buttons, badges, inputs, and panels — 8px is reserved for one or two hero-level elements only; do not round further

### Don't
- Do not use #ef6f2 or #d15010 as a CTA background — the primary action is always #020202 filled; orange is a signal, not an action color
- Do not use drop shadows anywhere in the interface — elevation is flat, bordered, and surface-based
- Do not introduce rounded radii above 8px on any control, card, or button — the sharp 4px corners are core to the technical aesthetic
- Do not use weight variation (bold/semibold) for hierarchy — Geist ships only at 400; use size and tracking instead
- Do not use photography, lifestyle imagery, or human figures — all visuals must be product mockups, terminal windows, IDE panels, or the dot constellation
- Do not place customer logos in their original brand colors — strip them to single-color #8a8380 or #a49d9a grayscale in the trust bar
- Do not use system sans-serif defaults for headlines — if Geist is unavailable, substitute Inter, but preserve the -0.048em tracking at 48–60px

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#fafafa` | Base page background — the warm off-white that defines the entire system |
| 1 | Frost Card | `#eeeeee` | Subtle elevated surface for cards, terminal headers, grouped panels |
| 2 | Dotted Frame | `#d6d3d2` | Container stroke for IDE/terminal mockups, hairline structural lines |
| 3 | Inverse Panel | `#020202` | Dark inverse surface for badges, primary buttons, occasional dark hero panels |

## Elevation

The system deliberately avoids drop shadows. Elevation is communicated through three techniques only: (1) 1px Pewter Rule (#b8b3b0) borders for grouping, (2) surface tone shifts from #fafafa to #eeeeee for card lift, and (3) dotted 1px Ash Hairline (#d6d3d2) borders for product mockup frames. The result reads as a flat technical document — closer to a printed spec sheet or terminal output than a skeuomorphic web UI. Adding a box-shadow would break the visual contract.

## Imagery

Imagery is product-led, not lifestyle. Every visual is a real or faux interface: terminal windows with traffic-light headers, IDE panels with file trees, CLI install boxes with copy buttons. No photography, no human figures, no abstract gradients. Decorative moments come from a 4×4 dot constellation of 4px circles in #ef6f2 and #b8b3b0 — a subtle 'droid swarm' motif that appears once per screen as visual breathing room. Customer logos in the trust bar are stripped to single-color grayscale, never original color. Icons are 1.5px-stroke monoline, #3d3a39 or current-color, no filled icons.

## Layout

Centered max-width 1200px container with 24–48px horizontal page padding. Hero is a two-column split: headline + CLI install box on the left (≈55%), floating terminal or dot constellation on the right (≈45%). Body sections alternate two-column text+visual in a Z-pattern, each separated by 80px vertical breathing room. News/updates section is a two-column card grid with a vertical dot-timeline anchored on the right edge. Trust logo bar is a single horizontal row, centered. Navigation is a flat top bar — no sticky behavior, no sidebar, no mega-menu. The overall density is comfortable but information-rich: cards are compact (24px padding, 4px radius), but each section carries 3–4 distinct content layers (label, heading, body, action).

## Agent Prompt Guide

**Quick Color Reference**
- text: #020202 (primary), #5c5855 (body), #8a8380 (muted)
- background: #fafafa (canvas), #eeeeee (card)
- border: #b8b3b0 (hairline), #d6d3d2 (dotted frame)
- accent: #ef6f2e (8px status dot only)
- primary action: no distinct CTA color

**5 Example Component Prompts**

1. Build a hero section: #fafafa background, max-width 1200px centered. Left column: an 8px #ef6f2e dot followed by Geist Mono 12px uppercase 'VISION' in #020202. Below it, a display headline at 60px Geist weight 400, #020202, letter-spacing -2.88px: 'Agent-Native Software Development'. Subtext at 16px Geist, #5c5855. Then a CLI Install Box: white #fafafa panel, 1px #b8b3b0 border, 4px radius, 16px padding. Inside: two tabs in Geist Mono 14px uppercase (MACOS / LINUX active with 1px #020202 border, WINDOWS inactive #5c5855), then a command row with orange #ef6f2e '>' chevron, monospace 'curl -fsSL https://app.factory.ai/cli | sh' in #020202, and a small copy icon on the right. Right column: a Terminal Window — 3 traffic-light dots in #d6d3d2, #ef6f2e, #b8b3b0 on a #eeeeee header bar 32px tall, monospace caption 'sophie@factory: ~ — uvx factory create-app' in #5c5855, body on #fafafa with syntax-tinted code lines.

2. Build a Category Badge: 4px radius, 6px vertical / 10px horizontal padding, #020202 background, text in Geist Mono 12px uppercase #fafafa with letter-spacing -0.24px. Label 'NEW' or 'ENGINEERING'. No border, no shadow.

3. Build a News Card: no background fill or 1px #b8b3b0 border, 4px radius, 24px padding. Top: Category Badge. Heading at 24px Geist weight 400 #020202, letter-spacing -0.72px, single line. Body at 16px Geist #5c5855, 2 lines, truncated. Bottom: a ghost text link 'LEARN MORE →' in Geist 14px #020202, no underline at rest.

4. Build a Version Dot Indicator: an 8px #ef6f2e circle, 8px gap, then Geist Mono 12px uppercase #020202 with -0.24px tracking, label 'TRUSTED BY TEAMS AT'. No other color.

No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

## Signature Composition

The hero uses an asymmetric 55/45 split: dense text column on the left carrying the full headline hierarchy plus a CLI install box, and a breathing visual column on the right that never carries text. The right-column visual is always either a Terminal Window (for the main hero), an IDE Panel Frame (for product features), or the dot constellation (for abstract sections). This three-way rotation prevents visual monotony across a long scroll. Never place two text columns adjacent — every other section is text + visual.

## Similar Brands

- **Vercel** — Same monochrome devtools aesthetic with Geist-family type, tight letter-spacing on display, and product mockups (terminals, dashboards) as primary visuals
- **Linear** — Similar sharp 4–6px corner radii, flat bordered cards with no shadows, and a single-color interface where accent color is reserved for status, not decoration
- **Cursor** — Identical developer-product posture: terminal and IDE mockups dominate, monospace for metadata, CLI install box as the primary conversion surface
- **Anthropic** — Same off-white canvas, warm-neutral palette, and prose-led product pages that rely on typography hierarchy and one quiet accent rather than colorful illustration
- **Replicate** — Same light, dense, spec-sheet layout with split text+code sections, small categorical badges, and 1px hairlines instead of shadows

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #fafafa;
  --color-frost-surface: #eeeeee;
  --color-ash-hairline: #d6d3d2;
  --color-pewter-rule: #b8b3b0;
  --color-stone-mid: #a49d9a;
  --color-granite-mute: #8a8380;
  --color-iron-caption: #5c5855;
  --color-graphite-body: #3d3a39;
  --color-obsidian: #1f1d1c;
  --color-carbon: #101010;
  --color-ink: #020202;
  --color-signal-orange: #ef6f2e;
  --color-ember-edge: #d15010;

  /* Typography — Font Families */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.48px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.54px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -2.3px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -2.88px;

  /* Typography — Weights */
  --font-weight-regular: 400;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 24px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-nav: 4px;
  --radius-cards: 4px;
  --radius-badges: 4px;
  --radius-inputs: 4px;
  --radius-panels: 4px;
  --radius-buttons: 4px;
  --radius-special: 8px;

  /* Surfaces */
  --surface-paper-canvas: #fafafa;
  --surface-frost-card: #eeeeee;
  --surface-dotted-frame: #d6d3d2;
  --surface-inverse-panel: #020202;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #fafafa;
  --color-frost-surface: #eeeeee;
  --color-ash-hairline: #d6d3d2;
  --color-pewter-rule: #b8b3b0;
  --color-stone-mid: #a49d9a;
  --color-granite-mute: #8a8380;
  --color-iron-caption: #5c5855;
  --color-graphite-body: #3d3a39;
  --color-obsidian: #1f1d1c;
  --color-carbon: #101010;
  --color-ink: #020202;
  --color-signal-orange: #ef6f2e;
  --color-ember-edge: #d15010;

  /* Typography */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.48px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.54px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -2.3px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -2.88px;

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
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
}
```