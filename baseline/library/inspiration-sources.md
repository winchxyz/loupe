# Inspiration sources (galleries) — discovery tools, NOT techniques

These are **galleries of other people's sites** — used to FIND inspiration, then pick specific
sites to distill into `recipes/`. The gallery page itself is not a technique and is not harvested
raw: most are bot-blocked or fully JS-rendered (verified 2026-06-18), so an automated crawl returns
little. Use the **protocol** below.

| Gallery | URL | Best for | Auto-access (curl probe 2026-06-18) |
|---------|-----|----------|--------------------------------------|
| Awwwards | https://www.awwwards.com/ | Award-level, animation/WebGL-heavy, experimental sites (SOTD/Honors). The benchmark for top-tier interaction. | ❌ bot-blocked (Cloudflare) + JS |
| FWA | https://thefwa.com/ | Cutting-edge experimental / immersive / creative-tech & WebGL. Avant-garde interaction. | ❌ full JS SPA (no server text) |
| GSAP Showcase | https://gsap.com/showcase/ | Sites built with GSAP — scroll & animation choreography (directly our stack). | ❌ JS (thin server text) |
| Site Inspire | https://www.siteinspire.com/ | Minimal/editorial/refined web design — tasteful restraint, typography, layout. | ❌ rate-limited (429) |
| Godly | https://godly.website/ | Curated modern, tasteful marketing & portfolio sites; current trends. | ❌ JS (thin) |
| Land Book | https://land-book.com/ | Huge curated **landing-page** gallery; filter by industry/style/color. Layout patterns. | 🟡 partial text via curl |
| Lapa Ninja | https://www.lapa.ninja/ | Landing pages + free design resources, categorized. | 🟡 partial text via curl |

## Protocol (how these feed the library)

1. **Owner browses** a gallery (he can see the JS-rendered content; the AI mostly can't) and **sends
   specific site URLs** he likes.
2. For each sent URL, the AI runs the **recipe harvest** (full-page distill: palette, type, grid,
   motion, composition + when-to-use) into `recipes/<name>.md`, with raw capture in `sources/<name>/`.
3. Owner-confirmed: **treat all of the above purely as inspiration.** (2026-06-18)

> Future automation: a **reference-discovery mode** (AI proposes category references → owner
> approves/rejects → approved auto-harvest into recipes). Logged in `/BACKLOG.md`. It must work
> AROUND the bot-block above (WebSearch + the two fetchable galleries + optional browser-rendering),
> since the marquee galleries can't be scraped directly.
