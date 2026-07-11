---
technique: Rate limiting (algorithm choice, enforcement point, distributed limiter)
section: backend-architecture
source: system-design.space/chapter/rate-limiter-case
tags: [rate-limiting, token-bucket, redis, api-gateway, 429]
apply-when: protecting an API/daemon/expensive endpoint (or a metered upstream like an LLM/image API) from overload or abuse
---

# Rate limiting — applied build decisions

Reframe it: a rate limiter "seems like a counter problem but is really about **fair distribution of a constrained resource**." Pick the algorithm by traffic shape, enforce at a single front door, and decide fail-open vs fail-closed up front.

## Choose the algorithm by traffic shape
- **Token bucket** — refills tokens at a constant rate; each request spends one. Handles bursts well, memory-cheap (two numbers/user). Params: `bucket_size`, `refill_rate`. Default choice for bursty APIs; watch for race conditions in distributed setups.
- **Leaky bucket** — queue leaks at a fixed rate; smooths bursty traffic into a predictable flow.
- **Fixed window** — counter resets each interval; simplest but vulnerable to boundary spikes (requests cluster at the edges).
- **Sliding window log** — store timestamps in the window; most accurate, highest memory.
- **Sliding window counter** — weighted hybrid across overlapping windows; best accuracy/memory balance, the usual production pick for strict current-load tracking.

## Where to enforce
| Location | Pros | Cons |
|---|---|---|
| Client-side | reduces wasted load | trivially bypassed |
| **API gateway** | single front door, protects all backends | single point of failure |
| Inside service | per-endpoint granularity | duplicated logic |

Recommendation: **enforce at the single entry point (gateway) before app services**; add per-endpoint limits inside only where granularity demands.

## Distributed limiter (Redis)
- Use an **atomic Lua script** so the check-and-increment is race-free across instances (see snippet). Centralized Redis = accurate; local counters + periodic sync = lower latency but eventually consistent — "accuracy vs latency."
- **Decide the Redis-down behavior explicitly: fail-open (allow) or fail-closed (reject).** This is a required design decision, not a default.

## Response contract
- Success: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.
- Rejection: `429 Too Many Requests` + `Retry-After: <seconds>`.

## Layer the limits
Global (system-wide) > per-user > per-endpoint > per-IP (DDoS). Implement hierarchically rather than one flat limit.

## Build checklist
- [ ] Pick algorithm by shape (token bucket for bursts; sliding-window counter for strict tracking)
- [ ] Enforce at the gateway; add per-endpoint limits only where needed
- [ ] Use an atomic Redis Lua script for the distributed counter
- [ ] Decide fail-open vs fail-closed when the limiter store is down
- [ ] Return 429 + Retry-After and emit X-RateLimit-* headers
- [ ] Layer global / per-user / per-endpoint / per-IP limits; monitor saturation + retry storms
