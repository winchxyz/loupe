---
technique: Caching strategy selection (cache-aside / write-through / write-back)
section: backend-architecture
source: system-design.space/chapter/caching-strategies
tags: [caching, performance, invalidation, redis, consistency]
apply-when: adding a cache in front of a DB/API/expensive computation, or debugging stale data and stampedes
---

# Caching strategies — applied build decisions

The one-line selector: **predictability → start cache-aside; read-after-write critical → write-through; writes are the bottleneck and eventual consistency is OK → write-back with a durable flush.**

## Choose the write/read pattern
- **Cache-aside (lazy loading)** — app reads cache, on miss fetches DB and populates; writes bypass the cache and explicitly delete/update the entry. Default for read-heavy workloads. Risk: stale data if you forget to invalidate.
- **Read-through** — the cache layer loads on miss (not the app). Use for a shared infra caching layer; stable read latency, medium complexity.
- **Write-through** — writes hit cache + DB synchronously. Use when read-after-write must be correct. Cost: higher write latency for strong post-write consistency.
- **Write-back (write-behind)** — write to cache only, async/batch flush to DB. Use for intensive write streams. **Requires a reliable buffer + idempotent writes**; data loss if cache dies before flush. Never use for critical financial data without a durable queue.

## Eviction + invalidation
- **TTL with jitter** — always add a small random spread to TTLs so entries don't expire in lockstep (which triggers a stampede).
- **Invalidation approaches**: synchronous-on-write, event-driven cleanup, TTL expiry, or a versioning hybrid. Pick one explicitly — "caching without an explicit invalidation strategy" is the top anti-pattern.
- **Cache-stampede / thundering-herd mitigation**: dedupe concurrent reads (single-flight), background-refresh hot keys, rate-limit requests to the source on miss.

## Decision rules
- **Cache the expensive reads and hot keys — not everything.** Caching everything is an anti-pattern.
- **Baseline before caching**: measure P95/P99 latency and current hit rate, define where the source of truth lives, namespace + version your keys, and plan a degradation path for when the cache is unavailable.
- Monitor hit rate, latency percentiles, and stale-data frequency continuously — no monitoring = silent rot.

| Strategy | Read latency | Write latency | Consistency | Best for |
|---|---|---|---|---|
| Cache-aside | low hit / high miss | low | depends on invalidation speed | read-heavy |
| Write-through | low | high | strong after write | read-after-write critical |
| Write-back | low | very low | eventual | write-heavy |

## Build checklist
- [ ] Pick a pattern from the one-line selector and write down why
- [ ] Choose one invalidation approach and implement it on the write path
- [ ] Add TTL jitter and a stampede guard (single-flight or background refresh) on hot keys
- [ ] Namespace + version cache keys; define a cache-down fallback
- [ ] Cache only expensive reads / hot keys, not the whole dataset
- [ ] Monitor hit rate + P95/P99 + stale-data frequency
