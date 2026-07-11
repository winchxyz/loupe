---
technique: Per-character text reveal on scroll (opacity scrub)
section: scroll
source: Olivier Larose — text-gradient-opacity-on-scroll (github.com/olivierlarose/text-gradient-opacity-on-scroll)
tags: [scroll, text, gsap, scrolltrigger, reveal, typography]
apply-when: a paragraph or statement should "light up" word-by-word / letter-by-letter as the reader scrolls it into view
---

# Per-character text reveal on scroll — applied build decisions

A block of text starts faded (low opacity) and each character animates to full opacity with a stagger
as the block scrubs through the viewport. Reads as the sentence lighting up left-to-right as you scroll.

Snippet: `snippets/olivierlarose/text-opacity-reveal.jsx`.

## Decisions
1. **Split to `<span>` per letter, collect refs in an array**, then animate the whole array with one GSAP `gsap.to(refs.current, {...})`. Splitting per-word-then-per-letter (nested) keeps words from breaking across lines mid-word.
2. **Resting state lives in CSS** (`span { opacity: 0.2 }`), GSAP animates UP to `opacity: 1`. Don't `from` 0 in JS — the CSS resting value avoids a flash of fully-visible text before JS runs.
3. **`scrub: true`** ties progress to scroll position, so scrolling back UP un-reveals the text. Use `scrub: 1` (number) instead if you want a slight lag/smoothing on the scrub.
4. **`stagger: 0.1` + `ease: 'none'`** gives the even left-to-right wipe. Larger stagger = slower, more deliberate reveal.
5. **`end: '+=${innerHeight / 1.5}'`** — reveal completes over ~0.66 viewport-heights of scroll. Tune this number to taste; bigger = the text takes more scroll to fully light up.
6. **Re-insert word spacing in CSS** (`p { margin-right: ... }`) because splitting on `" "` strips the spaces.
7. **Reduced-motion:** when `prefers-reduced-motion`, skip the scrub and just render the text at full opacity.

> Ties to our experience: an elegant, cheap statement-reveal beat between heavier WebGL sections — gives the eye a rest while keeping the scroll-journey momentum. Pure DOM/GSAP, no canvas cost.

## Build checklist
- [ ] Text split into per-letter `<span>`s with refs collected in an array
- [ ] Resting `opacity: 0.2` in CSS; GSAP animates to 1 (not a JS `from: 0`)
- [ ] ScrollTrigger `scrub: true`, `stagger ~0.1`, `ease: 'none'`
- [ ] `end` tuned (`+= innerHeight/1.5` baseline); word spacing restored in CSS
- [ ] Reduced-motion renders text fully visible
