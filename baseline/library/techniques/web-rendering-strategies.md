---
technique: Web rendering strategy selection (CSR/SSR/SSG/ISR/streaming/islands)
section: frontend-architecture
source: system-design.space/chapter/web-rendering-strategies
tags: [frontend, rendering, ssr, ssg, performance, seo]
apply-when: deciding how a page/route is rendered and hydrated — and whether you need a build/server/CDN tier at all
---

# Web rendering strategies — applied build decisions

The core rule that overrides everything else: **choose the rendering model per route class, not for the whole product.** A landing page, a search page, a checkout flow, and an authenticated dashboard have different SEO/TTFB/interactivity constraints — give each the model it needs. "Single rendering mode for the entire product" is the #1 anti-pattern here.

## Pick the model by route class
1. **CSR / SPA** — internal tools, post-login dashboards, heavy interactivity where indexable HTML doesn't matter. Cheapest server infra; but first paint waits on bundle + API latency, and SEO needs workarounds. LCP is dominated by JS execution on the client.
2. **SSR** — public pages that need SEO and good link previews (marketplaces, media). Meaningful HTML in the first response. Cost: server complexity, hydration mismatches, and **personalization breaks cheap HTML caching**. TTFB can never beat server processing time.
3. **SSG / ISR** — docs, knowledge bases, marketing pages, anything with predictable update cadence. Excellent CDN cache efficiency; but you must write explicit freshness/personalization policies. ISR adds on-demand regeneration so you don't rebuild the world per change.
4. **Streaming SSR** — send HTML progressively instead of waiting to assemble the whole response; improves *perceived* performance for SSR pages with slow data.
5. **Islands / partial hydration** — content/landing pages with a few isolated interactive zones. Minimal JS shipped; requires stable widget boundaries.

## Decision rules to bake in
- **Personalization kills cacheability.** Ship a common HTML shell that caches, then inject user-specific blocks *after* first paint — don't personalize before the cache layer.
- **Data loading sets the real boundary**, not the framework. Ask: can I show partial results? can I tolerate briefly stale data? The answers pick the model more than SEO does.
- **Treat hydration as an operational risk, not a free step.** Hydration mismatches (timezone, locale, feature flags, A/B variants, late data) only surface in production — budget monitoring for them separately. Fast HTML is worthless if JS blocks interaction.
- **Design the CDN cache strategy *simultaneously* with the rendering choice**, not after. Designing cache after framework selection is an anti-pattern.
- Mature products are **hybrid**: public routes = SEO + edge cache, content = SSG/Islands, heavy authenticated flows = client-side + route preloading.

| Axis | CSR | SSR | SSG/ISR | Islands |
|---|---|---|---|---|
| SEO | workarounds | native | native | native (static) |
| TTFB | low | higher (server work) | very low (cached) | very low |
| LCP | JS-bound | better | best | best |
| Cacheability | limited | breaks w/ personalization | excellent | excellent |
| Server cost | minimal | high | build-time only | build-time only |

## Build checklist
- [ ] Classify every route (public-SEO / content / authenticated-app) and assign a rendering model per class, not globally
- [ ] For each key route, set targets: TTFB, LCP, bundle size, TTI
- [ ] Document cache keys, HTML TTL, and stale-while-revalidate rules alongside the rendering choice
- [ ] Move personalization to post-first-paint blocks so the shell stays cacheable
- [ ] Turn on hydration-error monitoring (locale, feature flags, late data)
- [ ] For slow blocks: skeletons + stale-while-revalidate + partial responses
