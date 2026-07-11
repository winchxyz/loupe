---
recipe: TESQ — daily AI-media inside a cosmic journey
source: deZign-pro own build · site 02b "Сигнал"/TESQ AI hub · variant 02b-cube-B2-slipstream/v-c.html (design C, glass) · art-direction book 2026-06-16
reference: hubtown.co.in (Hubtown real estate, by Unseen Studio) — the harvested seed recipe; TESQ adapts its night/ice duotone + central glowing object to an AI digest
palette: midnight-space duotone (#06070d ink-black + #f4f6fc ice) with a 5-stop journey ramp (Earth→Moon)
mood: cinematic editorial · dark-WebGL · light-as-material · "content razor-sharp, glow never crosses a body-text line"
stack: HTML/CSS + GSAP/ScrollTrigger + WebGL background (locked); Inter Tight / Inter / JetBrains Mono
tags: [dark-mode, editorial, glassmorphism, webgl, scrollytelling, journey, duotone, ai-hub, cinematic, 70-20-10]
---

# TESQ — daily AI-media inside a cosmic journey

Our build of site #2 ("Сигнал" → TESQ): a daily AI digest dressed as a cinematic flight
**from Earth water up through space to a sun/moon landing**. The WebGL cube/scene is the locked hero;
this recipe is the **content + chrome layer** that rides it. North star (owner's art-direction book):
*not "a cosmic site about AI" but a daily AI-media with its own cinematic world — recognizable WITHOUT
the logo.* Seeded from the harvested **hubtown.co.in** recipe (night/ice duotone + one luminous central
object); re-dressed from real estate to an AI edition.

The governing law, repeated everywhere in the source docs: **content is razor-sharp; NO glow ever
crosses a line of body text.** Glass is an accent, not a universal wrapper.

## Palette — midnight-space duotone + a 5-stop journey ramp

Two anchors do 99% of the work (the hubtown "night ocean" logic):
- **Space black `#06070d`** — THE background ink (`--bg`).
- **Ice `#f4f6fc`** — THE foreground: text, lines, UI (`--ink`), stepped to `0.70` (`--ink-2`, body) and `0.46` (`--ink-3`, meta).

Light is the material — read the palette as emission (glow, fog, reflection), not flat fills.

Then a **journey ramp**: each section re-points one `--accent` token so the colour *is* the beat
(the journey is the structure, not a skin — see below). Art-direction book exact values:

| Beat | Section | Journey colour | Token in build |
|---|---|---|---|
| Earth (morning ocean) | News | **Earth Blue `#6CA8FF`** | `.news{--accent:var(--earth)}` |
| Atmosphere (ascent) | Articles | **Atmosphere `#A7C9FF`** | feed subheader colour `#A7C9FF` |
| Orbit (dark blue / stars) | Guides + Prompts | **Orbit Indigo `#101827`** (panels) / `#9fb6ff` accent | `.guides{--accent:#9fb6ff}` |
| Deep Space (black / signals) | Repositories | back to **Signal Cyan** `#9fd0ff`/`#B8F3FF` | `.repos{--accent:var(--accent)}` |
| Moon (white / arrival) | Subscribe + Course | **Moon Sand `#EDE5CA`** | `.subscribe{--accent:var(--moon)}` |

- **Signal Cyan `#9fd0ff`** (book: `#B8F3FF` / `oklch(0.80 0.12 210)`) is the default accent + HUD/active-state colour, reserved strictly for interactive/active state — body text stays pure ice.
- **Contrast rule (load-bearing):** day/bright sections DARKEN the bg under text; night sections use near-white text + muted meta. Colour must help READING, not only mood. The spec's intended mechanism is one continuous `--bg-lum` signal emitted from `scene.js` driving every token — *see "Gap" note below; the shipped v-c.html variant uses fixed tokens + per-section overrides instead.*

## Type — deliberate premium grotesk, three families

Owner explicitly rejected Manrope; English site → a deliberate grotesk. Stack (from `:root`):
- **Display:** `"Inter Tight"` → `weight 800`, headlines/section heads/subscribe. Tight tracking `letter-spacing:-0.03em` on `.disp` (a display value, NOT the small-caps `+0.02em` the spec warned against).
- **Body:** `"Inter"`, base `font-size:20px`, `line-height:1.5`.
- **Meta / HUD / kickers:** `"JetBrains Mono"` — uppercase, wide tracking (`0.1em–0.22em`), 11–13px. This is the "observatory/HUD" voice.

Scale (art-direction book + measured in build):
- **Display 72–96px** → hero `clamp(2.7rem,6.4vw,5.3rem)`, loader word `clamp(48px,11vw,150px)`.
- **H1 48–64px** → lead story `clamp(1.7rem,2.9vw,2.5rem)`, terminus `clamp(2rem,3.6vw,3rem)`.
- **Body 20–22px**; card body ~0.95–1.06rem.
- **Meta 11–14px**, mono, uppercase, contrast ≥ 70%.
- `font-variant-numeric:tabular-nums` on repo stars/deltas — a near-free editorial tell.

Logo = a real wordmark (TESQ with a square filled Q in the same Inter Tight 800 weight), never letter-spaced text.

## Grid + composition — 70 / 20 / 10, one luminous central object

The owner's **mix target: 70% content/editorial · 20% observatory/HUD · 10% glass/luxury accents.**
- **Main info blocks = dense panels** (`--glass` at 0.90 opacity, `border:1px solid rgba(255,255,255,0.16)`, `blur 12px`, soft wide shadow `0 28px 70px -38px`). NOT glass-first — focus is text.
- **Nav + system controls = thin glass** (`--chrome` 0.66): a floating command-bar nav, EN/RU lang switch, master volume, a background-only ("zen") toggle — corner-anchored chrome over the scene.
- **Meta layer = mission/HUD**: mono timecodes, section numbers (`01–04`), and a per-section `.eyebrow` carrying the journey label (`Earth · dispatch`, `Orbit · exploration`, `Deep Space · signals`, `Landing · arrival`).
- One luminous central OBJECT (the WebGL cube/tesseract) carries the brand; headline + denser, higher-contrast CTA sit over the scene. `--maxw:1140px`, centered.
- Radii small-to-medium: 12–18px panels, 999px pills, 14px chrome.
- Component roles are explicit: **primary content panel** (news/repos), **secondary glass control** (pills, switcher, date tag), **HUD meta**, **news list** (strict time/title/category/status rhythm, highlights ONLY on hover), **repo table** (dark table, tabular-nums, glass only as outer shell).

## The journey IS the structure (not a CSS skin)

The defining move. The user doesn't just scroll — they **pass through layers of knowledge**:
`Earth/News → Atmosphere/Articles → Orbit/Guides → Deep Space/Repos → Moon/Subscribe`.
Each beat = a different camera position, a different sky luminance, a different accent colour, and a
different content density. The spec binds 7 sections to 5 camera beats with **unequal scroll weights**
(measured section heights in the build: `#hero 100vh · #news 165vh · #guides 150vh · #repos 205vh · #letter 205vh`)
so the densest reading lands on the calmest, most luminance-stable dark beat (deep space) and the sparse
emotional sections (hero, subscribe) sit on the volatile bright endpoints (water, arrival).
*Style here means STRUCTURE/composition, not a re-skin* — this matches the owner's directive that a visual
style = a different layout, legibility-first.

## Motion

- **Scroll narrative:** smooth day→night→day transitions, never nauseating; main content appears SHARPER than the bg. One shared `beats[]` array drives BOTH the scene camera waypoints AND the ScrollTrigger section triggers (or text drifts off its beat). Pin ONLY hero + course (the two centered scenes); free-scrub the list/card sections.
- **Per-beat easing:** climb `power2.in` (accelerate), space `none` (suspended over the longest window), land `power3.out` (weight of touchdown) — while section content stays `scrub:0.5 ease:'none'` so reading never accelerates.
- **Hover:** A = quiet contrast lift; B = mission highlight / 1–2px scanline; C = controlled glass shine. No big highlights over text.
- **The single ease token:** `cubic-bezier(0.22,1,0.36,1)` on every transition.
- **Loader:** full-screen TRUE matte glass — two STACKED backdrop-blur passes (`blur(66px)`) dissolve the live scene to soft silhouettes, with a DECODE/percentage counter, then slides up via `translateY(-100%)`. (Chrome caps a single backdrop blur, hence the stack.)
- **Anti-dead-air:** reveal→hold→exit inner timeline overlapping neighbours ~18%; inter-beat seams become JetBrains-Mono altitude readouts (`ВОДА·0 КМ → ПОДЪЁМ → ОРБИТА → ПОДХОД → ПОВЕРХНОСТЬ`).
- **Performance:** bg may be heavy but text blocks keep 60fps; dose `backdrop-filter`, especially on mobile; degrade to a static poster frame if WebGL fails.

## Mood — glassmorphism, controlled

The glass is **Neo Luxury Glass (Raycast / Resend / Framer)** dosed to ~10%: command-palette panels, soft
glass accents, dark-luxury contrast, tactile buttons, tidy glows — `backdrop-filter:blur(10–14px)`,
`background opacity .66–.90`, `border:rgba(255,255,255,0.16)`, an inset top highlight for glass thickness,
text contrast ≥ 7:1. **Don't take:** pastel stock-glass, too-high transparency, heavy blur, "milky" cards
over a saturated bg. The three diagnosed failures of the earlier build — glass everywhere (no hierarchy),
background louder than content, mush from too much blur/bloom — are exactly what this recipe corrects:
denser panels, higher contrast, less blur, a strict grid with clear element roles.

## When to use

Reach for TESQ when a project is:
- **Content-dense but wants to feel cinematic** — an editorial digest, news/media hub, knowledge index, or curated directory that must read as *edited*, not aggregated, while sitting on an atmospheric living background.
- **A scroll with a NARRATIVE arc** — there's a natural beginning→end (intro → deepening → arrival) you can map to a journey (day→space→landing). If the content has no arc, you lose the recipe's spine; use a flat editorial system instead.
- **Dark-mode + a single luminous hero object** (WebGL scene, 3D object, or even a 2D canvas glow) where content must never float raw over it.
- **Bilingual / length-variable copy** — the type ramp + grid tolerate RU/EN variance (RU ~15–20% longer); don't pixel-lock columns to one language.

Avoid when: the product is a utilitarian dashboard/SaaS tool (the journey reads as theatre), when there's no GPU budget for a living background (the whole light-as-material premise collapses to "a tasteful dark site"), or when content has no narrative order to map onto the flight.

> Ties to our experience: this is the project's first own-build recipe and it inverts the usual glass instinct — the hard-won lesson across the 02b memory log (glass everywhere kills hierarchy; the owner rejected CSS-skin "styles"; style = STRUCTURE) is baked into the 70/20/10 split and the "glow never crosses body text" law. The reference seed (hubtown) gave the duotone + central-object move; TESQ's contribution is making the *journey itself the IA*.
