# design-standards — precedence arbiter + override governance

Decides whose word wins when design inputs conflict, and exactly how user overrides are handled.
This is the top-level rule the whole pipeline answers to.

## Precedence (highest wins)

```
0. EXPLICIT USER OVERRIDE  ← always wins. Condition: ONLY after (i) a library-grounded
   warning IN CHAT and (ii) a logged entry in the site's DECISIONS.md. Never silent, never blocked.
1. The site's own DESIGN.md            (its chosen direction)
2. User standards                      (durable preferences the owner has set)
3. impeccable refs                     (post-generation lint gate)
4. ui-ux-pro-max data
5. taste-skill
```
**Basis at every level:** the Figma technique library (`baseline/library/`) is what the critique
**cites** — judgments are grounded in named library entries, never improvised taste.

## Protocol: Propose → Critique → User decides

**Trigger:** the owner dislikes the site / references / assets, OR is choosing references/assets/components.

1. **PROPOSE** — surface concrete sources from the registries
   ([inspiration-sources](../inspiration-sources.md) · [asset-sources](../asset-sources.md) ·
   [component-sources](../component-sources.md)) for the owner to browse and pick.
2. **CRITIQUE** — when he sends picks (or a direction), study them and give an honest verdict on **two axes**,
   each grounded in named library entries:
   - **(a) FIT** — does it cohere with THIS site's style/vibe (its DESIGN.md direction)?
   - **(b) QUALITY** — is it good design per the library (gestalt, visual-hierarchy, typography, color…)?
3. **USER DECIDES** — the owner's call is final. If he overrides a negative verdict → **build it anyway**, but
   FIRST: (i) state the warning in chat, (ii) log it in `DECISIONS.md`.

**Warning depth scales to stakes:** references/assets = a short note (cheap to swap); final/structural build =
a short written critique with library refs (expensive to undo).

## DECISIONS.md (per site) — the audit log

Every override (and any accepted-with-caveat call) gets an entry in the **site folder's `DECISIONS.md`**:
```
## <date> — <decision>
- Proposed:  <what / which sources>
- Verdict (library-grounded): <ok / risky / bad + which principles cited>
- User decision: <override / accepted / adjusted>
- Built: <what shipped>
```
The chat warning is the **visible** half; `DECISIONS.md` is the **audit** half — so later it's clear
"I warned, you chose this."

## How this composes with the KNOWLEDGE DISCIPLINE rule (CLAUDE.md)

This IS the deviation path of that rule: *consult library → if you'd deviate, tell the user first + get OK.*
A negative verdict is the telling; the owner's "build it anyway" is the explicit OK. The only addition this
standard makes: the override must also be **logged** in DECISIONS.md.
