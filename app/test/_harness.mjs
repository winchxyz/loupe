/* Loupe · test/_harness.mjs — AUDIT-2 F43. Shared drive helpers for the behavioral/paid probes so a build turn goes
   through the SAME path every user takes (send → runPrompt → chat:send), where runPrompt's `.finally` runs the imagery/
   HDRI fill and registers the streaming listener. The old probe called the raw `chat:send` IPC directly, which returns
   with NO fulfillImages/fulfillHDRIs — so its sites shipped unfilled <img data-gen> and its assertion was imagery-blind. */

// Submit a brief through the real user path (send → runPrompt → chat:send). Fire-and-forget; poll waitIdle after.
export async function submitBrief(page, brief) {
  await page.evaluate((b) => { if (window.__dzTestSubmitBrief) window.__dzTestSubmitBrief(String(b)); }, brief);
}

// Auto-answer the pre-flow / imagery ASK through the real ask IPC round-trip (persistent for the whole probe).
export async function installAskAutoAnswer(page, preferRe = /photograph/i) {
  await page.evaluate((reSrc) => {
    const re = new RegExp(reSrc, 'i');
    if (window.__dzAskAuto) return; window.__dzAskAuto = 1;
    window.dezign.onAskOpen(({ id, payload }) => {
      const opts = (payload && payload.options) || [];
      const pick = opts.find((o) => re.test(o.label || '')) || opts[0];
      window.dezign.askRespond(id, (pick && pick.label) || 'Real photography');
    });
  }, preferRe.source);
}

// Wait for the turn (+ its post-turn imagery/HDRI fill) to settle: isEngineBusy() false. Returns false on timeout.
export async function waitIdle(page, { timeoutMs = 600000, pollMs = 500, settleMs = 4000 } = {}) {
  const t0 = Date.now();
  // let the turn actually START before polling idle (submitBrief is async into React state)
  await page.waitForTimeout(600);
  while (Date.now() - t0 < timeoutMs) {
    const busy = await page.evaluate(() => !!(window.__dzIsEngineBusy && window.__dzIsEngineBusy()));
    if (!busy) { await page.waitForTimeout(settleMs); return true; } // settle: the imagery/HDRI fill runs in runPrompt's .finally
    await page.waitForTimeout(pollMs);
  }
  return false;
}

// Wait for the imagery/HDRI fill to be REFLECTED in the live preview. The fill runs async in runPrompt's `.finally`
// (write assets + rewrite HTML on DISK, then the webview reloads) — a single renderProbe right after waitIdle can RACE
// that reload and false-read the pre-fill state (observed live 2026-07-11: Solo built 7/7 real assets on disk but the
// webview had not yet reloaded, so the gate false-failed). Poll renderProbe, forcing a webview reload between tries,
// until every <img> is loaded + no data-gen is unresolved, or the deadline. Returns the last renderProbe result.
export async function waitImagery(page, { timeoutMs = 60000, pollMs = 2500 } = {}) {
  const t0 = Date.now();
  let rp = await renderProbe(page);
  while (Date.now() - t0 < timeoutMs) {
    if (!rp.err && rp.imgs >= 0 && rp.imgsLoaded === rp.imgs && rp.unresolvedGen === 0) return rp;
    try { await page.evaluate(() => { const wv = document.querySelector('.livehost webview'); if (wv && wv.reload) wv.reload(); }); } catch {}
    await page.waitForTimeout(pollMs);
    rp = await renderProbe(page);
  }
  return rp;
}

// Probe the live preview webview: every <img> loaded (naturalWidth>0) + no unresolved <img data-gen>/data-hdri left.
export async function renderProbe(page) {
  return page.evaluate(async () => {
    const wv = document.querySelector('.livehost webview');
    if (!wv || !wv.executeJavaScript) return { err: 'no webview' };
    try {
      return await wv.executeJavaScript(`(function(){
        var imgs=[].slice.call(document.images);
        var loaded=imgs.filter(function(i){return i.naturalWidth>0;}).length;
        var gens=[].slice.call(document.querySelectorAll('[data-gen],[data-gen-ai]'));
        var unresolved=gens.filter(function(e){var s=(e.getAttribute('src')||'')+' '+(e.style&&e.style.backgroundImage||'');return !/(https?:|data:|blob:|assets\\/|\\.(jpe?g|png|webp|avif|gif))/i.test(s);}).length;
        return {imgs:imgs.length,imgsLoaded:loaded,unresolvedGen:unresolved};
      })()`);
    } catch (e) { return { err: String((e && e.message) || e) }; }
  });
}
