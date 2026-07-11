---
technique: Event-driven architecture (events as facts, idempotency, DLQ, versioning)
section: backend-architecture
source: system-design.space/chapter/event-driven-architecture
tags: [event-driven, idempotency, cqrs, saga, dead-letter-queue]
apply-when: decoupling producers/consumers with a queue/bus, or wiring tool-events / async work into a streaming pipeline
---

# Event-driven architecture — applied build decisions

Adopt the **operational discipline first, then expand gradually**: fixed event contracts + versioning, idempotent producers and consumers, DLQ + retry policy — *then* add patterns for one or two critical flows. Don't adopt Event Sourcing + CQRS + Saga at once "without specific problems to solve."

## Core principles
- **Events are facts** — they document what already happened and don't change retroactively. The event contract is the stable interface; producers and consumers evolve independently as long as it holds.
- **Asynchrony breaks coupling** — at the cost of eventual consistency, processing lag, and schema-evolution complexity. Accept those costs deliberately.

## Delivery + reliability (the part that bites)
- **At-least-once is the default reality** → you need **idempotent consumers** (handle duplicate messages safely) and **idempotent producers** (avoid duplicate publication). Skipping idempotency in an at-least-once system is a top anti-pattern.
- **Dead-letter queue (DLQ)** — after retries are exhausted, isolate the message preserving message ID, attempt count, error, source, timestamp. "Don't hide failures — safely isolate and investigate," then replay controllably. Monitor DLQ growth.
- **Track consumer lag, replay speed, saga completion time** — these reveal schema bottlenecks and degradation.

## Schema evolution + versioning
- Publish **domain facts, not implementation details / technical noise.**
- Backward-compat policy: add optional fields freely; **never remove or rename existing fields**; version events explicitly.

## Pick a pattern only for a real problem
| Problem | Pattern | Why |
|---|---|---|
| Full audit trail needed | Event Sourcing | history becomes the primary data (schema migration is the cost) |
| Read load ≠ write load | CQRS | optimize paths independently (read-model lag is the cost) |
| Multi-service transaction | Saga (orchestration or choreography) | controlled partial completion + compensations instead of 2PC |
| Simple CRUD | none | EDA adds complexity for no benefit |

Saga styles: **orchestration** = central coordinator (easy to trace, concentrated complexity); **choreography** = services react to events (loose coupling, harder to debug).

## Build checklist
- [ ] Define event contracts as domain facts + an explicit versioning policy (add-only, never rename/remove)
- [ ] Make producers and consumers idempotent before wiring any retry
- [ ] Configure a DLQ with full failure metadata + a replay path; alert on DLQ growth
- [ ] Monitor consumer lag and processing time
- [ ] Adopt Event Sourcing / CQRS / Saga only when a named problem demands it — start with 1–2 critical flows
