---
technique: Resilience patterns (timeout/retry/circuit-breaker/bulkhead/degradation)
section: backend-architecture
source: system-design.space/chapter/resilience-patterns
tags: [resilience, reliability, retries, circuit-breaker, idempotency]
apply-when: any call to a dependency that can be slow/fail (DB, external API, model/LLM call, image service)
---

# Resilience patterns — applied build decisions

Every outbound call needs a failure plan. The patterns below compose; apply them in this order of thinking: **idempotency first → timeout → bounded retry → circuit breaker → bulkhead → graceful degradation.**

## The patterns
1. **Idempotency (decide this BEFORE retries).** Retries are safe *only* for idempotent operations — otherwise they create duplicates and side effects. For non-idempotent work, use an idempotency key. "Recovery worse than the original failure" comes from retrying side-effecting calls.
2. **Timeout.** Bound every call. An unbounded call turns a slow dependency into your own outage.
3. **Retry with exponential backoff + jitter.** Retry **only transient errors** — for predictable failures a new call just makes it worse. Use exponential pauses, add random jitter to desynchronize retry waves, and cap a retry budget aligned with the request timeout. Prevents retry storms / synchronized thundering herd.
4. **Circuit breaker.** Three states — Closed (normal), Open (reject fast), Half-Open (probe recovery). Cuts the circuit *before* a local problem becomes system-wide overload; prevents queue explosion and resource exhaustion spreading to neighbors.
5. **Bulkhead isolation.** Partition thread/connection pools and queues per dependency or function so one noisy stream can't monopolize shared resources. Keep control and data planes separate so ops stays reachable during a partial outage.
6. **Graceful degradation / fallback.** When a dependency is down but core actions must continue: disable non-critical features (recommendations, enrichment), serve last-known-good cached data with a staleness indicator, queue critical work for post-recovery, and return a safe default for secondary paths. A safe default beats a hard failure.
7. **Tie it to an error budget / SLO.** Link each pattern to a target service level so reliability is measurable, not declarative.

## The headline anti-pattern
> Aggressively retrying without a concurrency limit and without random jitter on the pauses. That is how you turn one slow dependency into a self-inflicted outage.

## Build checklist
- [ ] Mark every operation idempotent or not; add idempotency keys where retries are needed on side-effecting calls
- [ ] Put a timeout on every outbound call
- [ ] Retry transient errors only, with exponential backoff + jitter + a capped budget
- [ ] Add a circuit breaker around each flaky dependency
- [ ] Isolate pools/queues per dependency (bulkheads); separate control vs data plane
- [ ] Define a degradation path: stale cache, disabled extras, queued critical work
- [ ] Bind each pattern to an SLO / error budget
