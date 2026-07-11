# Scroll-dwell sequence (pin without a library)

tags: pinned, sticky, scroll, sequence, steps, scrolltelling, dwell, reveal

**Use when:** a 3-5 beat story where each beat should HOLD the screen while the user scrolls —
product steps, before/after acts, a build timeline. Dependency-free version of a GSAP pin.

## Skeleton (CSS sticky dwell + JS lighting)

```css
.dwell { position: relative; }
.dwell__track { height: 320vh; }                    /* the virtual scroll distance */
.dwell__stage { position: sticky; top: 0; min-height: 100svh;
  display: grid; align-content: center; }
.beat { grid-area: 1 / 1; transform: translateY(18px) scale(.985); opacity: .28;
  transition: transform .5s cubic-bezier(.2,.7,.2,1), opacity .5s; }
.beat.on { transform: none; opacity: 1; }
```

```js
const beats = [...document.querySelectorAll('.beat')];
const track = document.querySelector('.dwell__track');
addEventListener('scroll', () => {
  const r = track.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
  const i = Math.min(beats.length - 1, Math.floor(p * beats.length));
  beats.forEach((b, k) => b.classList.toggle('on', k === i));
}, { passive: true });
```

Add a thin progress rail (scaleX = p) under the stage so the user feels the dwell's length.

## Rules

- 3-5 beats; the track height ≈ beats × 80-110vh. Longer feels like being trapped.
- Beats swap by class transitions (transform/opacity on the beat container is fine —
  the CONTENT of an inactive beat is still composed, so a captured frame always looks whole).
- ALWAYS ship the non-pinned fallback: below ~900px the track collapses (`height: auto`,
  stage `position: static`, beats stacked, each `.on` by IntersectionObserver).

## Variation axes

- Side rail with beat labels (mono, clickable); numbers counting up; a device frame whose
  screen swaps per beat while copy changes beside it.

## Don'ts

- One dwell per page. Don't nest it inside another sticky. Don't hijack wheel events —
  native scroll only.
