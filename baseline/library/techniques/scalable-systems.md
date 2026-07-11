---
technique: Scaling a system by following the moving bottleneck
section: backend-architecture
source: system-design.space/chapter/scalable-systems
tags: [scalability, stateless, sharding, replication, bottleneck]
apply-when: load is growing and you're deciding what to scale next (or whether to scale at all yet)
---

# Scalable systems — applied build decisions

Scalability is **not one trick.** As load grows the constraint migrates through four stages — find your *actual current* bottleneck and apply the lever for that stage. Most systems need a replaceable compute layer early and do **not** need sharding yet.

## The bottleneck progression (apply the lever for your stage)
1. **Compute** → clone stateless services behind a load balancer; optimize per-request work. The stateless compute layer is almost always the first growth lever.
2. **Data** → caching, replication, sharding, separate read models (CQRS).
3. **Coordination** → decouple via queues/events, idempotency, explicit consistency boundaries.
4. **Resilience** → limit failure radius: degradation, retries, backpressure, manual controls.

## Statelessness is the foundation
- Stateless services enable autoscaling, safe rolling updates, and fast recovery. Correctness must live in **external** stateful layers (DB, cache, queue).
- Statelessness doesn't ban in-memory caches — it bans system correctness depending on a specific process's memory.

## Scale reads vs writes differently
- **Reads** → replication, caching, CDN, CQRS read models. Cost: replication lag.
- **Writes** → sharding (range / hash / lookup-table), multi-leader replication, async processing. Cost: cross-shard queries and rebalancing "almost always cost more than initially expected."

| Sharding strategy | Benefit | Cost |
|---|---|---|
| Range-based | ordered queries | hot partitions |
| Hash-based | even distribution | no range queries |
| Lookup table | flexible rebalancing | extra routing layer |

## Decision rules
- **Find the real bottleneck first.** Don't shard preemptively; add replaceable compute early.
- **At high utilization latency grows non-linearly** — degrade gracefully before collapse: backpressure, bounded queues, 429 responses.
- **Async removes work from the critical path but adds responsibility** for duplicates, delays, and idempotency.
- Name CAP/PACELC trade-offs only when you can state the product consequence.

## Build checklist
- [ ] Make the compute layer stateless; push all state to DB/cache/queue
- [ ] Identify the current bottleneck stage before choosing a lever
- [ ] Scale reads with replication/cache/CDN; only shard writes when writes are the proven limit
- [ ] Add backpressure + bounded queues + 429s so the system degrades, not collapses
- [ ] When introducing async, add idempotent consumers and handle duplicates/delays
