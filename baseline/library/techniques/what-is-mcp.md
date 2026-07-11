---
technique: Model Context Protocol (MCP) — wiring AI tools to apps
section: web-design
source: figma-resource-library/what-is-mcp.md
tags: [mcp, ai-integration, agents, architecture, tooling, automation]
apply-when: deciding how a build's AI tooling should reach external apps/data, or exposing your own site/app as an AI-callable surface
---

# Model Context Protocol (MCP) — applied build decisions

Core idea: MCP is a "write once, use anywhere" standard for connecting AI systems to apps. Instead of bespoke per-app glue, an app exposes ONE MCP server and any MCP-enabled AI tool can call it; an AI tool implements ONE MCP client and can reach any server. Use it to stop re-writing integration boilerplate and to let agents act across many tools.

## The rules (each = a build decision)
1. Reach for MCP over a bespoke API wrapper when an AI tool/agent needs context or actions from an external app. Custom API code means hand-rolling requests, responses, and retries per app; MCP lets the AI use one command set across all of them. Choose MCP to skip that boilerplate.
2. Keep the three roles distinct — host, client, server. The host (the product/platform, e.g. Claude Desktop or the OS) owns discovery, permissions, and launching; the client maintains one connection per server and ferries messages; the server plugs into the external system. Don't collapse them; muddling host vs. client responsibilities breaks the permission model.
3. When you build a server, expose exactly three feature types and label them right: Resources (data/content the LLM can read — files, records, screenshots, code blocks), Tools (functions that DO something — run a query, call an API), Prompts (pre-baked templates/workflows tuned to your resources and tools). Misclassifying a side-effecting action as a "resource" is a design bug.
4. One client per server — model connections that way, not a shared pooled client. Switching one server out should not disturb others.
5. Make your server self-describing: implement tool discovery so an AI can list available tools and see what it can do. Don't assume the caller has prior knowledge of your surface.
6. Normalize everything to the expected wire format (JSON-RPC 2.0). Whatever the app returns — JSON blobs, SQL rows, raw images — the server converts it to the standard format clients expect. Don't leak app-native formats to the LLM.
7. Return structured errors, not silent failures. Use standard error codes and send the error back so the LLM can retry or ask the user. A swallowed error strands the agent.
8. Choose MCP for LLM-friendliness, not just convenience: a good server makes every accessible thing well-defined and well-documented in a structured way. Ad-hoc API definitions miss descriptions and get misinterpreted — write descriptions an AI can't misread.
9. Pick the right protocol for the job: MCP = an AI learning about and acting on the world (tools + data). A2A (Agent2Agent) = agents talking TO EACH OTHER to delegate/negotiate/supervise. They complement, not compete — don't force one to do the other's job.
10. Design for an agent's breadth: an agent gets more useful the more tools it can reach. If you're shipping a data-rich app, exposing an MCP server buys instant compatibility with every MCP-enabled AI platform — treat the server as a distribution surface, not an afterthought.
11. Plan for security explicitly. The server author controls what the LLM can access; lean on the protocol's permission/security guidelines and expect authentication, authorization, and data-filtering to matter (especially for sensitive domains). Don't expose more than the task needs.

## Build checklist (use when wiring AI into a build)
- [ ] Is there an existing MCP server for this app? If so, connect a client instead of writing a custom API wrapper.
- [ ] If exposing our own surface: are Resources / Tools / Prompts split correctly (reads vs. actions vs. templates)?
- [ ] Does the server implement tool discovery so callers can enumerate capabilities?
- [ ] Are all responses normalized to JSON-RPC 2.0, with no app-native formats leaking through?
- [ ] Are errors returned as standard codes the LLM can act on (retry / ask user), not swallowed?
- [ ] Are permissions scoped to the minimum the task needs (auth/authz, sensitive-data filtering)?
- [ ] Is MCP (act on the world) vs. A2A (agents coordinate) chosen for the actual problem?
