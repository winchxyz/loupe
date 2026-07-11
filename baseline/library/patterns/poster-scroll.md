# Poster-scroll (full-bleed typographic sections)

tags: poster, fullbleed, editorial, dark, festival, fashion, bold, scale

**Use when:** the subject is loud (festival, fashion, food, campaign, portfolio) and the page
can be a SEQUENCE OF POSTERS instead of a document: each section = one full-viewport statement.

## Skeleton

```css
.poster { min-height: 92svh; display: grid; align-content: center; padding: 8svh clamp(20px, 5vw, 72px);
  border-top: 1px solid var(--line); position: relative; overflow: hidden; }
.poster h2 { font: 800 clamp(3.4rem, 11vw, 9.5rem)/0.92 var(--display); letter-spacing: -.04em;
  text-transform: uppercase; max-width: 12ch; }
.poster .meta { font: 500 11px var(--mono); letter-spacing: .14em; text-transform: uppercase; }
.poster--invert { background: var(--ink); color: var(--bg); }   /* at least one inverted slab */
```

Compose each poster differently: headline top-left + meta bottom-right; headline bottom
+ giant index number top; split headline around a full-bleed image band. The METRONOME is
the full-viewport rhythm; the VARIETY is where things sit inside it.

## The three tools of a poster

1. SCALE — one element at 9-12vw (headline, numeral, or a single word).
2. INVERSION — flip ink/bg on one or two slabs to create chapters.
3. EDGE TENSION — let ONE element bleed off-canvas (a word cut by the viewport edge,
   an image running past the frame). Deliberate, once or twice per page.

## Variation axes

- svh per poster (82-100); hairline vs no separators; sticky chapter labels in a corner.
- Mixed media posters: one is pure type, one is image-dominant, one is a data table set huge.
- Motion: per-poster entrance (clip-path or translateY on the headline), parallax on image bands.

## Don'ts

- Body text stays 16-18px INSIDE a measure (45-65ch) even here — posters shout, paragraphs don't.
- Don't invert every slab (inversion is punctuation); don't center everything (corners exist).
- Keep nav readable over both polarities (mix-blend-mode: difference, or a solid nav bar).
