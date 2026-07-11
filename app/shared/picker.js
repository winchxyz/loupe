/* deZign-pro · Pilot B capture spike — element picker ENGINE + overlay.
   Same file powers (a) the live DevTools-style overlay the owner clicks, and
   (b) the headless verification harness (verify.js calls window.__pick.*).
   Spike-grade: prove the closed loop is feasible and find where it lies. */
(function () {
  'use strict';
  if (window.__pick) return;

  /* ---------- robust unique selector ---------- */
  function nthOfType(el) {
    let i = 1, sib = el;
    while ((sib = sib.previousElementSibling)) if (sib.tagName === el.tagName) i++;
    return i;
  }
  function isUnique(sel, root) {
    try { return (root || document).querySelectorAll(sel).length === 1; } catch { return false; }
  }
  // prefer: #id  >  [data-asset]/[data-*] convention  >  tag.nth path
  function selectorFor(el) {
    if (!el || el.nodeType !== 1) return null;
    if (el.tagName === 'HTML') return 'html';
    const root = el.getRootNode(); // document OR shadowRoot OR frame document — scope uniqueness here
    if (el.id && isUnique('#' + CSS.escape(el.id), root)) return '#' + CSS.escape(el.id);
    // generation-skill convention: composite layers carry data-asset
    for (const attr of ['data-asset', 'data-testid', 'data-id']) {
      const v = el.getAttribute && el.getAttribute(attr);
      if (v) {
        const s = `${el.tagName.toLowerCase()}[${attr}="${CSS.escape(v)}"]`;
        if (isUnique(s, root)) return s;
      }
    }
    const path = [];
    let node = el;
    while (node && node.nodeType === 1 && node.tagName !== 'HTML') {
      let part = node.tagName.toLowerCase();
      if (node.id && isUnique('#' + CSS.escape(node.id), root)) { path.unshift('#' + CSS.escape(node.id)); break; }
      const n = nthOfType(node);
      part += `:nth-of-type(${n})`;
      path.unshift(part);
      node = node.parentElement;
    }
    return path.join(' > ');
  }

  /* ---------- breadcrumb (selector for each ancestor) ---------- */
  function breadcrumb(el) {
    const out = [];
    let node = el;
    while (node && node.nodeType === 1 && node.tagName !== 'HTML') {
      out.unshift({
        tag: node.tagName.toLowerCase(),
        selector: selectorFor(node),
        label: node.id ? '#' + node.id : (node.classList[0] ? '.' + node.classList[0] : node.tagName.toLowerCase()),
      });
      node = node.parentElement;
    }
    return out;
  }

  /* ---------- selector -> defining CSS rule(s)/source ("which file") ---------- */
  function definingRules(el) {
    const hits = [];
    const root = el.getRootNode();            // document OR shadowRoot OR frame document
    const sheets = [];
    try { for (const s of (root.styleSheets || [])) sheets.push(s); } catch (e) {}
    try { for (const s of (root.adoptedStyleSheets || [])) sheets.push(s); } catch (e) {} // shadow/constructed sheets
    for (const sheet of sheets) {
      let rules;
      try { rules = sheet.cssRules; } catch (e) { continue; } // cross-origin sheet — skip
      if (!rules) continue;
      const src = sheet.href || (root.host ? 'shadow <style>' : 'inline <style>');
      for (const rule of Array.from(rules)) {
        if (rule.type !== 1) continue; // CSSStyleRule only
        let matches = false;
        try { matches = el.matches(rule.selectorText); } catch (e) { matches = false; }
        if (matches) hits.push({ selectorText: rule.selectorText, source: src });
      }
    }
    // also the inline style attribute, if any
    if (el.getAttribute && el.getAttribute('style')) hits.push({ selectorText: '[style attr]', source: 'inline style attribute' });
    return hits;
  }

  /* ---------- hit-test: full layered stack under a point ---------- */
  function describe(el) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      selector: selectorFor(el),
      zIndex: cs.zIndex,
      opacity: cs.opacity,
      position: cs.position,
      isCanvas: el.tagName === 'CANVAS',
      mixBlend: cs.mixBlendMode,
      pointerEvents: cs.pointerEvents,
      rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      defining: definingRules(el).slice(0, 4),
    };
  }
  /* elementsFromPoint silently SKIPS pointer-events:none elements, so a fixed blend nav
     (mix-blend-mode:difference; pointer-events:none) — a very common real-site pattern —
     is absent from the stack and a live click lands on the section underneath. Supplement
     the browser pass with a GEOMETRIC pass over positioned / pe:none overlays. */
  function rankOf(el) { const z = getComputedStyle(el).zIndex; return z === 'auto' ? 0 : (parseInt(z, 10) || 0); }
  function visible(cs) { return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity !== 0; }
  let _overlayCands = [];
  function refreshOverlayCands() {
    _overlayCands = [];
    for (const el of document.querySelectorAll('body *')) {
      if (el.hasAttribute && el.hasAttribute('data-pick-ui')) continue; // never report our own overlay UI
      const cs = getComputedStyle(el);
      if (!visible(cs)) continue;
      const positioned = cs.position === 'fixed' || cs.position === 'absolute' || cs.position === 'sticky';
      if (cs.pointerEvents === 'none' || positioned) _overlayCands.push(el);
    }
  }
  function overlaysAt(x, y, skip) {
    if (!_overlayCands.length) refreshOverlayCands();
    const hits = [];
    for (const el of _overlayCands) {
      if (!el.isConnected || (skip && skip.has(el))) continue;
      const cs = getComputedStyle(el);
      if (!visible(cs)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1 || x < r.left || x > r.right || y < r.top || y > r.bottom) continue;
      hits.push(el);
    }
    return hits.sort((a, b) => rankOf(b) - rankOf(a)); // highest stacking first
  }
  function hitTest(x, y) {
    const api = document.elementsFromPoint(x, y).filter((e) => e.nodeType === 1);
    const apiSet = new Set(api);
    const result = api.slice();
    for (const el of overlaysAt(x, y, apiSet)) {
      const z = rankOf(el);
      const idx = result.findIndex((e) => rankOf(e) < z); // insert above the first lower-z layer
      if (idx < 0) result.push(el); else result.splice(idx, 0, el);
    }
    // (z:auto positioned overlays land at the bottom — present but not perfectly ordered; full
    //  stacking-context resolution is deferred to the real app. Recovered layers are tagged.)
    return result.map((el) => { const d = describe(el); if (!apiSet.has(el)) d.recovered = true; return d; });
  }
  // overlay-aware top element at a point (pre-boundary-pierce)
  function basePick(x, y) {
    const base = document.elementFromPoint(x, y);
    const ov = overlaysAt(x, y, base ? new Set([base]) : null);
    if (!ov.length) return base;
    if (!base) return ov[0];
    const top = ov[0];
    // "respect pointer-events" mode (default ON; toggleable via window.__dzRespect): a pointer-events:none
    // overlay is transparent to the pointer by the author's OWN signal — the browser routes clicks THROUGH
    // it, so the picker should too. Don't let a decorative full-bleed layer (grain/vignette/scanlines) win
    // over the real content beneath. Turn the flag false to recover overlays (legacy behaviour).
    if (window.__dzRespect !== false) { try { if (getComputedStyle(top).pointerEvents === 'none') return base; } catch (e) {} }
    return rankOf(top) >= rankOf(base) ? top : base; // overlay wins only if it stacks at/above base
  }
  /* GUARD 1 — never silently present a shadow HOST / iframe WRAPPER as the picked element.
     Pierce open shadow roots and same-origin iframes to the true inner element; flag-degrade cross-origin. */
  function descriptorFor(crossed, innerSel) {
    const parts = crossed.map((c) => c.kind === 'shadow' ? `${c.host} »shadow»` : `${c.frame} »frame»`);
    parts.push(innerSel);
    return parts.join(' ');
  }
  function resolveDeep(el, x, y) {
    const crossed = []; let cur = el, depth = 0;
    while (cur && depth++ < 24) {
      if (cur.shadowRoot) {                                   // OPEN shadow host -> pierce to real inner
        const inner = cur.shadowRoot.elementFromPoint(x, y);
        if (inner && inner !== cur) { crossed.push({ kind: 'shadow', host: selectorFor(cur) }); cur = inner; continue; }
        break;                                                // point lies on the host's own box
      }
      if (cur.tagName === 'IFRAME') {                         // iframe -> pierce same-origin, degrade cross-origin
        let doc = null; try { doc = cur.contentDocument; } catch (e) { doc = null; }
        if (!doc) return { element: cur, crossed, boundary: 'iframe', degrade: true, reason: 'cross-origin iframe — cannot pierce; degrade to screenshot+text' };
        const r = cur.getBoundingClientRect();
        const lx = x - r.left, ly = y - r.top;
        const inner = doc.elementFromPoint(lx, ly);
        if (!inner) return { element: cur, crossed, boundary: 'iframe', degrade: true, reason: 'iframe inner element not found at point' };
        crossed.push({ kind: 'iframe', frame: selectorFor(cur), local: [Math.round(lx), Math.round(ly)] });
        cur = inner; x = lx; y = ly; continue;                // keep resolving inside the frame (nested shadow ok)
      }
      break;
    }
    const customClosed = !!(cur && cur.tagName && cur.tagName.includes('-') && !cur.shadowRoot && cur === el);
    return {
      element: cur, crossed,
      boundary: crossed.length ? crossed[crossed.length - 1].kind : null,
      degrade: false, customElement: customClosed,
      reason: customClosed ? 'custom element; if it uses a closed shadow root, inner content is not addressable — rely on the post-edit diff' : '',
    };
  }
  function resolvePick(x, y) {
    const top = basePick(x, y);
    if (!top) return { element: null, crossed: [], boundary: null, degrade: false, reason: 'no element at point' };
    return resolveDeep(top, x, y);
  }
  function topPick(x, y) { return resolvePick(x, y).element; } // element to highlight/select

  /* ---------- GUARD 2 — element identity (re-find token); survives selector drift / HMR ---------- */
  let _idSeq = 0;
  function markIdentity(el) {
    if (!el || el.nodeType !== 1) return null;
    let id = el.getAttribute && el.getAttribute('data-pick-id');
    if (!id) { id = 'pk' + Date.now().toString(36) + '_' + (++_idSeq); try { el.setAttribute('data-pick-id', id); } catch (e) { return null; } }
    return id;
  }
  function resolveIdentity(id, root) {
    const r = (root || document).querySelectorAll(`[data-pick-id="${id}"]`);
    return r.length === 1 ? r[0] : null; // 0 or duplicate => identity lost/ambiguous
  }
  // after an edit/HMR: does the recorded selector STILL land on the same node we picked? (catches nth-of-type drift)
  function identityHolds(selector, id) {
    const byId = resolveIdentity(id);
    if (!byId) return { ok: false, reason: 'identity marker missing or duplicated (drift / HMR replaced the node)' };
    let bySel = null; try { bySel = document.querySelector(selector); } catch (e) {}
    if (bySel !== byId) return { ok: false, reason: 'selector now resolves to a DIFFERENT node than the picked one' };
    return { ok: true, reason: '' };
  }

  /* ---------- pick at a coordinate (headless entry) ---------- */
  function pickAt(x, y) {
    const r = resolvePick(x, y);
    if (!r.element) return null;
    const el = r.element;
    const innerSel = selectorFor(el);
    const crossed = r.crossed || [];
    return {
      selector: crossed.length ? descriptorFor(crossed, innerSel) : innerSel,
      innerSelector: innerSel,        // valid WITHIN the element's own root (shadow / frame / document)
      crossed,                        // structured boundary path — use THIS, not the string, to re-select across a boundary
      boundary: r.boundary || null,
      degrade: !!r.degrade,
      customElement: !!r.customElement,
      reason: r.reason || '',
      pickId: markIdentity(el),       // GUARD 2 — stable identity to re-resolve after edits/HMR
      breadcrumb: breadcrumb(el),
      hitTest: hitTest(x, y),         // top-document stack (shadow/iframe internals enumerated only via the pierce path)
      defining: definingRules(el),
    };
  }
  /* ---------- pick a SPECIFIC element (not a coordinate) — for shallow-first select: same shape as pickAt,
       same-root only (no boundary crossing; the caller climbs within one document/shadow root) ---------- */
  function pickElement(el) {
    if (!el || el.nodeType !== 1) return null;
    const innerSel = selectorFor(el);
    if (!innerSel) return null;
    return {
      selector: innerSel,
      innerSelector: innerSel,
      crossed: [],
      boundary: null,
      degrade: false,
      customElement: false,
      reason: '',
      pickId: markIdentity(el),
      breadcrumb: breadcrumb(el),
      hitTest: [],
      defining: definingRules(el),
    };
  }

  /* ---------- ASSET pick: resolve an element to its underlying real asset (URL) or degrade ----------
     For the external "take this asset" mode. DOM-extractable: <img>/srcset, background-image, inline SVG,
     <use href>, <video>/<source>, mask-image. NOT extractable: canvas/WebGL textures, 3D models, font
     glyphs, CSS gradients — those degrade to "screenshot + where to look". */
  function abs(u) { try { return new URL(u, location.href).href; } catch (e) { return u; } }
  function cssUrls(val) {
    const out = []; if (!val || val === 'none') return out;
    const re = /url\((['"]?)(.*?)\1\)/g; let m;
    while ((m = re.exec(val))) if (m[2]) out.push(m[2]);
    return out;
  }
  function resolveAsset(el) {
    if (!el || el.nodeType !== 1) return { kind: 'none', url: null, degrade: true, reason: 'no element' };
    const tag = el.tagName;
    if (tag === 'IMG') return { kind: 'image', url: abs(el.currentSrc || el.src), alt: el.alt || '', degrade: false, reason: '' };
    if (tag === 'VIDEO' || tag === 'AUDIO') {
      const s = el.currentSrc || el.src || (el.querySelector('source') && el.querySelector('source').src);
      return { kind: tag.toLowerCase(), url: s ? abs(s) : null, degrade: !s, reason: s ? '' : 'no source resolved' };
    }
    if (tag === 'SOURCE') {
      const pic = el.closest('picture'); const img = pic && pic.querySelector('img');
      const s = (img && (img.currentSrc || img.src)) || el.srcset || el.src;
      return { kind: 'image', url: s ? abs(s) : null, degrade: !s, reason: '' };
    }
    if (tag === 'use' || tag === 'USE') {
      const href = el.getAttribute('href') || el.getAttribute('xlink:href');
      if (href && !href.startsWith('#')) return { kind: 'svg-use', url: abs(href.split('#')[0]), symbol: href, degrade: false, reason: 'external SVG sprite' };
    }
    if (tag === 'svg' || el.namespaceURI === 'http://www.w3.org/2000/svg') {
      const svg = tag === 'svg' ? el : (el.closest && el.closest('svg')) || el.ownerSVGElement;
      const use = svg && svg.querySelector('use');
      const href = use && (use.getAttribute('href') || use.getAttribute('xlink:href'));
      if (href && !href.startsWith('#')) return { kind: 'svg-use', url: abs(href.split('#')[0]), symbol: href, degrade: false, reason: '' };
      if (svg) return { kind: 'svg-inline', url: null, inline: new XMLSerializer().serializeToString(svg), degrade: false, reason: 'inline SVG — markup captured (no external file)' };
    }
    if (tag === 'A' && el.href && /\.(png|jpe?g|webp|avif|gif|svg|glb|gltf|mp4|webm|hdr|exr)(\?|#|$)/i.test(el.href))
      return { kind: 'link-asset', url: abs(el.href), degrade: false, reason: '' };
    if (tag === 'CANVAS') return { kind: 'canvas', url: null, degrade: true, reason: 'canvas/WebGL — pixels are not a source asset; the 3D model/texture lives in JS/network, not the DOM → degrade to screenshot + note' };
    // background-image / mask-image on the element, then a few ancestors (hero-bg pattern)
    let node = el, hops = 0;
    while (node && node.nodeType === 1 && hops++ < 4) {
      const cs = getComputedStyle(node);
      const bg = cssUrls(cs.backgroundImage), mask = cssUrls(cs.maskImage || cs.webkitMaskImage || '');
      if (bg.length) return { kind: 'background', url: abs(bg[0]), urls: bg.map(abs), degrade: false, reason: hops > 1 ? `background on ancestor (${hops - 1} up)` : '' };
      if (mask.length) return { kind: 'mask', url: abs(mask[0]), urls: mask.map(abs), degrade: false, reason: '' };
      node = node.parentElement;
    }
    return { kind: 'none', url: null, degrade: true, reason: 'no DOM-extractable asset here (CSS gradient, font glyph, or JS/canvas-rendered visual)' };
  }

  /* ---------- live overlay (DevTools-style) for the owner ---------- */
  let box, label, panel, selected = new Set(), enabled = false;
  function ensureUI() {
    if (box) return;
    box = document.createElement('div');
    box.style.cssText = 'position:fixed;z-index:2147483646;pointer-events:none;border:2px solid #b880ff;background:rgba(184,128,255,0.14);border-radius:3px;transition:all .04s linear;display:none';
    label = document.createElement('div');
    label.style.cssText = 'position:fixed;z-index:2147483647;pointer-events:none;background:#b880ff;color:#0a0a0a;font:11px/1.4 ui-monospace,monospace;padding:3px 7px;border-radius:4px;display:none;max-width:60vw;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
    panel = document.createElement('div');
    panel.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:2147483647;background:#101014ee;color:#eee;font:11px/1.5 ui-monospace,monospace;padding:10px 12px;border-radius:8px;max-width:46vw;max-height:42vh;overflow:auto;display:none;border:1px solid #ffffff22;backdrop-filter:blur(6px)';
    [box, label, panel].forEach((n) => n.setAttribute('data-pick-ui', '1'));
    document.body.append(box, label, panel);
  }
  function highlight(el) {
    const r = el.getBoundingClientRect();
    box.style.display = 'block';
    box.style.left = r.left + 'px'; box.style.top = r.top + 'px';
    box.style.width = r.width + 'px'; box.style.height = r.height + 'px';
    label.style.display = 'block';
    label.textContent = selectorFor(el);
    label.style.left = r.left + 'px';
    label.style.top = Math.max(2, r.top - 22) + 'px';
  }
  function showPanel(el, x, y) {
    const p = pickAt(x, y);
    const crumbs = p.breadcrumb.map((c) => c.label).join('  ›  ');
    const layers = p.hitTest.map((h, i) => `  ${i}. <${h.tag}> z:${h.zIndex} op:${h.opacity}${h.isCanvas ? ' ⚠CANVAS' : ''}`).join('\n');
    const files = (p.defining[0] ? p.defining.map((d) => '  ' + d.selectorText + '  ←  ' + d.source).slice(0, 5).join('\n') : '  (no CSS rule matched)');
    const status = p.degrade ? `⚠ DEGRADE — ${p.reason}`
      : (p.boundary ? `crossed ${p.boundary} boundary → pierced to real element`
      : (p.customElement ? '⚠ custom element — verify the edit landed' : 'ok'));
    panel.style.display = 'block';
    panel.textContent =
      `SELECTOR  ${p.selector}\n\nSTATUS  ${status}\n\nBREADCRUMB  ${crumbs}\n\nHIT-TEST STACK\n${layers}\n\nDEFINING RULES\n${files}\n\nSELECTED (${selected.size}): ${[...selected].join(', ') || '—'}`;
  }
  function onMove(e) { if (!enabled) return; const el = topPick(e.clientX, e.clientY); if (el && el !== box && el !== label && el !== panel) highlight(el); }
  function onClick(e) {
    if (!enabled) return;
    e.preventDefault(); e.stopPropagation();
    const el = topPick(e.clientX, e.clientY);
    if (!el) return;
    const sel = selectorFor(el);
    if (e.altKey || e.metaKey || e.ctrlKey) { selected.has(sel) ? selected.delete(sel) : selected.add(sel); }
    else { selected.clear(); selected.add(sel); }
    showPanel(el, e.clientX, e.clientY);
  }
  function enable() {
    ensureUI(); refreshOverlayCands(); enabled = true;
    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('click', onClick, true);
    window.addEventListener('scroll', refreshOverlayCands, { passive: true, capture: true });
    window.addEventListener('resize', refreshOverlayCands, { passive: true });
  }
  function disable() { enabled = false; if (box) box.style.display = label.style.display = 'none'; }

  window.__pick = { selectorFor, breadcrumb, definingRules, hitTest, pickAt, pickElement, resolvePick, topPick, resolveAsset, markIdentity, resolveIdentity, identityHolds, enable, disable, get selected() { return [...selected]; } };

  // auto-enable for the live demo if asked
  if (/[?&]pick=1/.test(location.search)) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enable); else enable();
  }
})();
