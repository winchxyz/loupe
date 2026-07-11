---
technique: Sans-serif font selection (named picks by job)
section: typography
source: figma-resource-library/best-sans-serif-fonts.md
tags: [typography, fonts, sans-serif, ui, readability, pairing]
apply-when: choosing a sans-serif for UI body, headings, dashboards, or long-form on a site you're building
---

# Sans-serif fonts — pick by job, not by vibe

Core idea: a sans-serif has no serifs (the little projecting strokes), so it reads clean and modern across screen and print. Don't default to Helvetica/Arial — pick the screen-tuned face whose proportions match the JOB (dense UI vs. statement heading vs. long read). All names below are free Google Fonts unless noted, so they self-host cleanly.

## Pick by job (each = a build decision)

1. **UI body / interface text → Inter.** Built for screens; tall x-height + open apertures keep dense layouts legible at small sizes. Default body face when in doubt. Roboto is the equally-safe alternative (Android system font, mechanical-geometric with friendly curves). Choose Inter for the cleaner/neutral feel, Roboto when you want a touch more warmth.
2. **Dashboards / data-heavy / technical → Encode Sans** (organized, slightly technical, many weights) or **Source Sans 3** (orderly, wide weight+width range to separate heading/subhead/body). Reach here when columns of numbers and labels must scan without feeling cold.
3. **Geometric display / headlines → Montserrat** (Buenos-Aires signage energy, confident not stiff) or **Poppins** (bold round geometry, also strong for logos; Latin + Devanagari). Use for hero/section headings that need presence.
4. **Calm neutral body that disappears → DM Sans, Public Sans, or Open Sans.** Choose when the content should lead and type should stay invisible: marketing pages, gov/corporate, accessible interfaces. Open Sans = widest letterforms / most generous spacing for accessibility.
5. **Long-form reading (articles, e-books, tutorials) → Sen** (smooth reading rhythm) or **Merriweather Sans** (low-contrast strokes legible even tiny; pairs natively with its Merriweather serif sibling). Reach here for multi-paragraph passages on any screen size.
6. **Elegant / editorial / fashion headings → Raleway** (light, airy, sophisticated) or **Tenor Sans** (extended, calm). Use for refined headlines, not for body — their airiness tires the eye over long runs.
7. **Condensed / space-tight headings → Abel, Biryani, or Yaldevi.** Narrow letterforms fit more per line and add presence to banners/titles without going heavy. Use for headings/short-form only, never body.
8. **Warm / friendly / approachable brand → Cabin, Ubuntu, or Capriola.** Humanist curves soften the tone for onboarding, tutorials, friendly product UI.
9. **Multilingual / non-Latin coverage → Be Vietnam Pro** (Vietnamese + extended Latin), **Poppins** (Devanagari), **Alef** (Hebrew). Verify glyph coverage before committing on a multilingual build.

## Pairing guidance
- One geometric/condensed display face (Montserrat, Poppins, Biryani, Abel) for headings + one neutral screen face (Inter, DM Sans, Source Sans 3) for body is the safe two-font system. Don't pair two neutrals — no contrast.
- Pair an expressive/condensed heading with simpler body text (article calls Abel/Biryani out for exactly this).
- Merriweather Sans + Merriweather (serif) is a ready-made same-family sans/serif duo when you want a serif body.

## Build checklist
- [ ] Body face is screen-tuned (Inter / Roboto / DM Sans / Source Sans 3), not Arial/Helvetica-by-default?
- [ ] Heading vs. body have real contrast (geometric/condensed vs. neutral) — not two near-identical sans?
- [ ] Long-running text uses a high-legibility, open-spaced face (Open Sans / Sen / Merriweather Sans), not a condensed display face?
- [ ] Condensed/elegant faces (Abel, Raleway, Yaldevi) restricted to headings/short-form, never paragraphs?
- [ ] For multilingual content, picked face actually covers the required scripts (Be Vietnam Pro, Poppins, Alef)?
- [ ] Enough weights shipped to build hierarchy (heading/subhead/body) without faux-bold?

> Ties to our experience: 02b's matte glassmorphism UI runs on Inter Tight for exactly the screen-legibility reason above (tall x-height, open apertures over blurred glass) — and the TESQ wordmark's square filled Q deliberately keeps the same weight as TES, which is this checklist's "real contrast vs. cohesion" call made by hand.
