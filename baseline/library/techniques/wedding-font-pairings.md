---
technique: Wedding / romantic-elegant font pairings (script + grounding text face)
section: typography
source: figma-resource-library/wedding-font-pairings.md
tags: [typography, font-pairing, google-fonts, script-fonts, editorial, invitations]
apply-when: building elegant, romantic, ceremonial, or luxury-editorial UIs (event/invite/save-the-date pages, wedding & lifestyle sites, hero wordmarks) that need an expressive display face anchored by a readable body face
---

# Wedding font pairings — applied build decisions

Core pattern behind all 23 pairings: **one expressive HEADLINE face (script / decorative / high-contrast display) + one calm, legible BODY face (sans or serif).** The display face carries mood and goes ONLY in large sizes (couple names, hero, welcome sign, section titles); the body face carries everything small (paragraphs, fine print, labels, table cells). Never set body copy in the script. All names below are free Google Fonts, so they drop straight into a `<link>` or `@font-face` with no licensing friction.

## Pick the pairing by mood (each = a ready-to-use combo)

Choose the row whose mood matches the brief, then assign HEADLINE → display, BODY → text.

1. **Timeless / classically elegant** → `EB Garamond` (headline-or-body) + `Source Sans Pro` (body), or `Playfair Display SC` + `Libre Baskerville`. Use for upscale, formal, editorial work that should read refined without a literal script.
2. **Romantic / handwritten warmth** → `Tangerine`, `Great Vibes`, `Parisienne`, `Pinyon Script`, or `MonteCarlo` (headline) + a quiet serif `Spectral` / `Lora` / `Roboto Serif` OR clean sans `Noto Sans` (body). Use when names/hero must feel personal and hand-inked. Spectral is the workhorse body serif here (it backs 3 separate pairings).
3. **Modern chic / city** → `Playfair Display` (headline serif) + `Montserrat` (body sans), or `Vidaloka` / `Yesteryear` + `Raleway`. Use for contemporary-but-classic; the geometric sans keeps it crisp.
4. **Luxury / regal / grand** → `Luxurious Script` + `Baskervville`, `Cinzel Decorative` + `Libre Bodoni`, or `Imperial Script` + `Montserrat`. Use for high-end, ceremonial, "expensive" presence; expect dramatic stroke contrast.
5. **Casual / beach / rustic** → `Pacifico` + `Lato`, `Homemade Apple` + `Rethink Sans`, `Style Script`/`Dancing Script` + `Oswald`. Use for relaxed, friendly, outdoor energy — still styled, not sloppy.
6. **Avant-garde / editorial tension** → `Ojuju` + `IBM Plex Mono`, or `Srisakdi` + `Reem Kufi`. Use when you want deliberate human-vs-machine or whimsical-vs-geometric contrast for a design-forward look. Reserve for art-directed pages, not utilitarian UI.

## Rules for applying any pairing
- **Two roles, two faces — no more.** One display + one text face per layout. A third family almost always reads as noise.
- **Display = big only.** Script and decorative faces (Great Vibes, Cinzel Decorative, Tangerine) lose legibility fast; cap them at headline/hero scale. The moment text wraps to multiple dense lines, switch to the body face.
- **Maximize contrast between the two.** Pair bold against delicate, modern against vintage, script against geometric. Similar-weight, similar-era faces look like a mistake; strong contrast reads as intentional hierarchy.
- **Body face does the heavy lifting.** Choose the text face for x-height and readability at small sizes (Spectral, Lora, Source Sans Pro, Montserrat, Noto Sans). It runs paragraphs, captions, form labels, table cells.
- **Slab/serif body adds structure under a flowing script** (e.g. Bilbo + Arvo, Great Vibes + Lora): the sturdy text face grounds a swirly headline so the page doesn't float.
- **Mono or Kufic body = edgy on purpose** (IBM Plex Mono, Reem Kufi): only reach for these when the brief wants a modern/industrial or distinctly non-traditional tone.
- **Verify on the real target, not the mockup.** A display face that sings in a large hero can render cramped or illegible in a printed invite, a dense table, or a small-screen viewport. Test at the actual deployed size before locking it.

## Build checklist
- [ ] Exactly one display/script face and one body face chosen (not three).
- [ ] Display face confined to large headline/hero sizes; never set body copy in it.
- [ ] Body face proven readable at smallest real size (caption / fine print / label).
- [ ] Pairing carries clear contrast (weight/era/style) so hierarchy reads as intentional.
- [ ] Combo matches the brief's mood row (timeless / romantic / chic / luxe / casual / avant-garde).
- [ ] Fonts loaded efficiently (only the weights/styles used) and checked at the actual deployed size, not just the design canvas.

> Ties to our experience: matches our TESQ/02b wordmark instinct — an expressive display lockup over a quiet, legible support face — and our PAIN.md "checking the wrong thing / a clipped screenshot" theme: a script headline must be verified at the real rendered size and viewport, not trusted from the design canvas where it looks fine.
