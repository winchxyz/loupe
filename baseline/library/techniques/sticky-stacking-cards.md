---
technique: Sticky stacking cards (cards pile up on scroll with depth)
section: scroll
source: Olivier Larose — cards-parallax (github.com/olivierlarose/cards-parallax)
tags: [scroll, sticky, framer-motion, cards, lenis]
apply-when: presenting a sequence of projects/features as full-viewport cards that stack on top of each other as you scroll, with the underlying card shrinking for depth
---

# Sticky stacking cards — applied build decisions

Each card sticks at the top with a small per-index offset; the next card slides up and rests ON TOP,
while the card beneath scales down slightly so the growing stack reads as depth. A staple of modern
project/feature showcases.

Snippet: `snippets/olivierlarose/stacking-cards.jsx`.

## Decisions
1. **Two scroll listeners per card, on purpose.** A PAGE-level `useScroll` (container `['start start','end end']`) drives card SHRINK; a per-CARD `useScroll` (`['start end','start start']`) drives the inner IMAGE zoom (2 → 1) as that card enters. Don't try to do both from one progress value.
2. **`targetScale = 1 - (count - i) * 0.05`** — cards deeper in the final stack shrink more, so when fully stacked they form a visible tiered deck, not a flat pile.
3. **`range={[i * 0.25, 1]}`** — each card does its shrink over its own slice of the page, so they don't all animate at once.
4. **Stagger the rest position with `top: calc(-5vh + ${i * 25}px)`** on each sticky card. This 25px-per-card fan is what makes each settled card peek out below the one above — without it the cards land exactly on top of each other and the stack disappears.
5. **`transform-origin: top`** on the card so it scales toward its sticky anchor, not its center.
6. **Card container = `height: 100vh`, sticky, flex-centered.** One card per viewport-height of scroll.
7. **Lenis underneath** (this tutorial ships it) — the scale interpolation looks stepped on raw scroll.
8. **`will-change: transform`** on the card; you're animating scale on large elements every frame.

> Ties to our experience: clean pattern for our project/section showcase beats. The "page progress drives one thing, local progress drives another" split is reusable across our pinned cinematic sections.

## Build checklist
- [ ] Page-level `useScroll` for card scale + per-card `useScroll` for image zoom
- [ ] `targetScale = 1 - (count - i)*0.05`; `range = [i*0.25, 1]`
- [ ] Sticky cards with `top: calc(-5vh + i*25px)` stagger + `transform-origin: top`
- [ ] Card container `100vh`, sticky, flex-centered; `will-change: transform`
- [ ] Lenis smooth scroll active
