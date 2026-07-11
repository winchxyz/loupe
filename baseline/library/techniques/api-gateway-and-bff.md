---
technique: API gateway + Backend-for-Frontend (what to centralize, what to keep out)
section: backend-architecture
source: system-design.space/chapter/api-gateway-case
tags: [api-gateway, bff, routing, auth, rate-limiting]
apply-when: you have more than one backend service / client type and need a single, smart entry point
---

# API gateway and BFF — applied build decisions

The gateway is a **platform layer**, not a place for business logic. "The more business logic inside the gateway, the higher the risk of turning a convenient platform layer into a new bottleneck."

## Keep in the gateway (platform concerns only)
- **Routing** — path-based (`/users` → User Service), header-based (A/B), weighted (canary).
- **Auth/authz** — token validation, API keys, IP allow/deny, mTLS for service-to-service.
- **Rate limiting** — per-user / per-IP / per-endpoint, burst + quota handling (see rate-limiting technique).
- **Request/response transformation** — protocol translation (REST↔gRPC), schema validation, cross-service aggregation.
- **Observability hooks** — uniform request logging/tracing at the edge.

## Keep OUT of the gateway
Any domain-specific logic — that belongs in the services. A gateway thick with business rules becomes the bottleneck the architecture was trying to avoid.

## BFF (Backend-for-Frontend) pattern
Deploy a **separate gateway facade per client type** (web, mobile, admin). Each can be optimized for its client's needs and shields clients from internal service complexity without leaking architecture details.

## Resilience + scaling at the edge
- **Circuit-break downstream calls** so a degraded service fails fast instead of accumulating timeouts across the whole gateway.
- **Keep the gateway stateless for horizontal scale** — sessions, rate-limit counters, and shared data live in an external store (Redis), never in gateway memory.

## Non-functional targets to design toward
- Added latency < 10ms at p99.
- 100K+ req/s per instance.
- 99.99% availability.
- Horizontal scale with no local state.

## Build checklist
- [ ] Put routing, auth, rate limiting, transformation, and tracing in the gateway — nothing domain-specific
- [ ] Use a BFF facade per client type rather than one gateway for all clients
- [ ] Keep the gateway stateless; push counters/sessions to Redis
- [ ] Circuit-break each downstream; fail fast, don't pile up timeouts
- [ ] Hold edge overhead under ~10ms p99
