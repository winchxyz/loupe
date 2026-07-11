---
technique: Best fonts for websites (named recommendations + pairing)
section: typography
source: figma-resource-library/best-fonts-for-websites.md
tags: [typography, fonts, web-fonts, variable-fonts, pairing, readability]
apply-when: picking a typeface for a site/UI — choosing body vs display fonts, pairing them, and loading them performantly
---

# Best fonts for websites — applied font picks

Core idea: pick by ROLE first (body text vs display/heading), not by vibe. Default to free, open-source, screen-optimized Google Fonts available as VARIABLE fonts so one file covers every weight. Below: which named font to reach for, and when.

## Workhorse body / UI fonts (legible at 14–18px, neutral)
- **Inter** — the default UI/body sans. Built for screens; variable; OpenType tabular numbers + contextual alternates. Reach for it when you want a safe, modern, neutral interface font. (GitHub/Mozilla use it.)
- **Roboto** — neo-grotesque, web-safe, ultra-legible. Use when you want maximum device compatibility and a minimal, invisible-by-design body face.
- **Open Sans** / **Source Sans Pro** — humanist sans built for UI; choose when you want a friendly-but-professional body face with broad language support.
- **DM Sans** — designed for SMALL sizes; pick it specifically for dense body copy, captions, buttons.
- **Work Sans** — use REGULAR weights for on-screen text 14–48px, HEAVY weights for display. A whole-page workhorse.
- **Manrope** / **Lato** / **Nunito** — warmer, rounder humanist/geometric sans; choose for an approachable, inviting tone (Nunito's rounded terminals read softest).

## Display / heading sans (set large; more personality)
- **Montserrat** — geometric, large x-height, wide apertures; versatile for both headings and body. A calm, modern default headline.
- **Poppins** — geometric with consistent stroke weight; clean and contemporary; works heading→body. Devanagari + Latin support.
- **Josefin Sans** — 1920s-inspired, elegant/vintage; LARGE text only — luxury/sophistication brands.
- **Raleway** — elegant neo-grotesque with a distinctive criss-crossed W; thin/light weights shine at large sizes.
- **Rubik** / **Ranade** / **Object Sans** — bolder, higher-contrast geometric sans for memorable headers, logos, and CTAs.

## Serifs (trust, editorial, luxury)
- **Playfair Display** — transitional, high-contrast, 18th-century elegance; DISPLAY/luxury headings. Variable now covers body too.
- **Lora** — calligraphic modern serif that stays readable small; good when you need a serif that works for BOTH headings and body.
- **Libre Baskerville** — tall x-height, wide counters, tuned for on-screen BODY copy; evokes trust + timelessness.
- **Neuton** — compact Times-like serif; space-saving for headings/short text.
- **Soria** — Art Nouveau / Didot-flavored display serif; logos, banners, CTAs only.

## Slab serifs (bold, characterful headings)
- **Sreda** — bold modern slab; headlines, logos, large elements (legible small but built for big).
- **Arvo** — geometric monolinear slab; menus, CTAs, headings with a casual, playful edge.

## Pairing rules (do this)
1. Pick by contrast of ROLE: pair a display face (heading) with a quieter body face — e.g. Playfair Display heading + Inter/Lato body; Montserrat heading + Open Sans body.
2. Or stay in ONE family across roles for guaranteed harmony (use weight, not a second face, to separate heading/body/button). Inter, Work Sans, and Montserrat each span the whole page alone.
3. Avoid pairing two faces with similar role/contrast (two geometric sans, two high-contrast serifs) — they fight instead of contrast.

## Build checklist
- [ ] Chose body font by legibility at target px (14–18px); display font set only at large sizes?
- [ ] Picked variable-font versions where available (one file, all weights → fewer requests, faster page)?
- [ ] Heading + body either clearly contrast in role OR come from the same family (no muddy near-clashes)?
- [ ] Font supports every language/charset the content needs (e.g. Cyrillic → Raleway; Latin Extended → DM Sans)?
- [ ] Verified contrast/accessibility at the chosen weight (thin weights on screen can fail legibility)?
- [ ] Font choice matches brand tone (serif = professional/trust; rounded sans = friendly; script/display = playful)?

> Ties to our experience: TESQ/02b ships a serif-square "Q" logo and matte-glass UI where weight (not a second typeface) carries the heading-vs-body hierarchy — exactly the single-family discipline above; and our PAIN.md "checking the wrong CSS property" maps to verifying actual rendered weight/contrast rather than assuming the loaded font looks legible.
