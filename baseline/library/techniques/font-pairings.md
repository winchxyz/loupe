---
technique: Font pairing (headline + body type selection)
section: typography
source: figma-resource-library/font-pairings.md
tags: [typography, font-pairing, hierarchy, readability, branding]
apply-when: choosing the two (or one) typefaces for any site/UI — display for headlines, a workhorse for body
---

# Font pairing — applied build decisions

Core idea: pick ONE expressive display/headline face for impact and ONE neutral, screen-legible workhorse for body. The pairing is built on *contrast with a shared logic* — the display carries personality, the body disappears into readability. Never let two attention-seeking faces compete. Below are the reusable archetypes (extract the pattern, not the brand name), then the mechanical rules.

## Pairing archetypes (pick the one that matches the brief)
Each = a relationship to reach for, with proven named options from the source.

1. **High-contrast serif display + neutral grotesque body** — the editorial/luxury default. Striking modulated-serif headline, invisible sans body. Use for editorial, luxury, refined brands. Examples: Playfair Display + Lato, Abril Fatface + Lato, Rufina + Average Sans, Poiret One + Montserrat.
2. **Sans display + warm serif body** — modern headline, humane long-form reading. Use for blogs, professional sites, healthcare/education where body text is read at length. Examples: Roboto + Lora, Nunito + Lora, Raleway + Merriweather, Source Sans Pro + Alegreya, Rethink Sans + Spectral.
3. **Bold/condensed sans display + serif body** — strong navigation/header presence over readable serif copy. Use for responsive sites needing punchy headers + authoritative body. Examples: Oswald + Source Serif 4, Unica One + Crimson Text, Fjalla One + Cantarell.
4. **Slab-serif display + humanist sans body** — confident + approachable; "strength with accessibility." Use for technical docs, corporate, modern marketing. Examples: Arvo + Lato, Ultra + Slabo, Ubuntu + Rokkitt (slab as the *body* anchor), Crimson Serif + DM Sans.
5. **Script / decorative display + clean sans-or-serif body** — personality headline grounded by a quiet body. Use SPARINGLY: weddings, lifestyle, restaurants, retro/nostalgic brands. Examples: Grand Hotel + Lato, Sacramento + Alice, Yellowtail + Rethink Sans, Bubblegum Sans + Open Sans.
6. **Retro-tech / mono accent + friendly sans body** — innovation signal without sacrificing readability. Use for dev tools, coding/tech platforms, portfolios. Examples: Space Mono + Plus Jakarta Sans, DotGothic16 + Space Mono, Inter + Krub.
7. **Single-family, two weights** — one typeface, contrast by weight only. The safest, most cohesive choice when you want zero risk. Use for playful/youthful or strict-minimal systems. Example: Quicksand Bold + Quicksand Regular.
8. **Two sans, subtle differentiation** — minimal cohesion play; near-identical sans faces, hierarchy from small letterform differences. Use for clean tech/product UIs and digital interfaces. Examples: Instrument Sans + Geist, Syne + Inter, Montserrat + Karla.

Safe-default note: a handful of neutral sans bodies (Lato, Inter, Montserrat, Mulish) pair with almost any display — when unsure, reach for one of these as the body face and let the headline do the talking.

## Mechanical rules (the five tips as do/avoid)
1. Create contrast through **weight + x-height**, not just family — make the headline clearly heavier/larger so hierarchy reads instantly; if the two faces look too similar at a glance, push the weight gap.
2. Tune **kerning (letter spacing) and leading (line height)** deliberately — display faces often need tighter tracking; body needs generous leading. Don't ship default metrics on large headlines.
3. **Leverage one family's weights/styles** (light/regular/bold, italic, condensed) for variation before adding a third typeface — more faces = more risk, less cohesion.
4. **Prioritize readability** of the body face: clean letterforms, adequate x-height, legible at small sizes and on screens. Even a decorative headline must stay legible.
5. **Test across contexts** — preview the pair at real sizes on different screens/resolutions and over the actual backgrounds (including dark/over-image) before locking it.

## Build checklist
- [ ] Exactly ONE expressive face + ONE neutral workhorse (or a single-family/two-sans play) — no two display faces fighting?
- [ ] Chosen archetype actually matches the brief's mood (luxury vs tech vs playful)?
- [ ] Clear weight/x-height contrast so the hierarchy reads at a glance?
- [ ] Body face verified legible at the smallest real size used?
- [ ] Headline kerning + body leading tuned, not left at defaults?
- [ ] Pair checked over its real backgrounds (light, dark, over-image) and at mobile sizes?
- [ ] Third typeface avoided — extra variation pulled from one family's weights/styles first?

> Ties to our experience: 02b/TESQ deliberately runs a single typographic system (TESQ wordmark in one Inter Tight weight with a square filled Q) over matte glassmorphism UI — archetype 7/8 territory (cohesion via one family, contrast via weight), and the over-image/dark-background test (rule 5) is exactly the legibility risk for a cinematic scroll-journey where type sits over water/space/sun frames.
