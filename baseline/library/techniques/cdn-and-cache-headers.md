---
technique: CDN + HTTP cache-header strategy for static assets and media
section: frontend-architecture
source: system-design.space/chapter/cdn-case
tags: [cdn, caching, cache-control, etag, static-assets]
apply-when: serving JS/CSS/images/fonts/video to real users, or fixing a low cache-hit ratio / origin overload
---

# CDN and cache headers — applied build decisions

The backbone rule: **immutable, content-hashed filenames + a 1-year `Cache-Control` for assets; short TTLs (or no caching) for HTML.** Versioning makes aggressive caching safe because a code change produces a new URL.

## Cache-header strategy
- **Immutable assets** (`app.a1b2c3d4.js`, hashed CSS/fonts): `Cache-Control: public, max-age=31536000, immutable`. The hash *is* your invalidation.
- **`stale-while-revalidate`**: serve cached content instantly while refreshing in the background — use where a short window of staleness is acceptable.
- **`ETag`** for revalidation of non-versioned resources.
- **`Vary`**: declare which request characteristics create distinct cache entries (Accept-Encoding, Accept-Language) — bad cache keys destroy hit rate.

## TTL strategy (pull CDN)
| Content | TTL |
|---|---|
| Hashed static assets | 1 year (rely on versioning) |
| Images | 1 month – 1 year |
| HTML pages | 5 min – 1 hour |
| Public API responses | 1 – 60 min |

Rule: refresh-infrequent + accuracy-can-wait → TTL is enough; critical updates → explicit purge.

## Edge architecture
- **Tiered cache**: L1 edge (10–50ms) → L2 origin-shield (50–150ms) → L3 origin (200–500ms+). The shield consolidates misses so the origin never gets an avalanche of identical requests.
- **Origin shielding + request coalescing** kill cache stampede: one origin request serves dozens of edge requests. Firewall the origin to accept shield IPs only.

## Invalidation — combine methods
| Method | Speed | Use for |
|---|---|---|
| Versioned URLs | immediate | immutable assets (default) |
| Purge API | immediate | urgent corrections |
| TTL expiry | delayed | non-critical content |
| stale-while-revalidate | background | tolerable short staleness |

## Push vs pull + hit rate
- **Pull** (lazy): scales to demand, cold-start on first hit — for UGC / unpredictable assets.
- **Push** (pre-warm): predictable, no cold start — for critical frontend bundles. Rule of thumb: **pre-warm the top 20% of assets serving 80% of traffic; let the rest load on demand.**
- **Target >95% cache hit ratio.** Below 90% → investigate TTLs too short, bad cache keys, or missing pre-warm.

## Build checklist
- [ ] Content-hash asset filenames; serve them `max-age=31536000, immutable`
- [ ] Keep HTML on short TTLs (5–60 min) or no-cache for personalized pages
- [ ] Set `Vary` on Accept-Encoding/Language; verify cache keys aren't fragmenting
- [ ] Enable origin shield + request coalescing to protect the origin
- [ ] Pre-warm the top ~20% critical bundles; pull the rest
- [ ] Monitor hit ratio; alert below 90%
