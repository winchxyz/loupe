/* deZign-pro · preload — safe bridge between the renderer (UI) and main/agent/project.
   Increment 3: chat edits the open project; project tree + live reload. */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('dezign', {
  // R2 (F13): removed the stale hardcoded version + stage metadata keys — nothing read them and the stage string
  // was factually wrong; their only consumer (a header label) was removed in the R2 declutter. package.json is the
  // single source of the version.

  // the picker engine source, to inject into the preview webview
  pickerSource: () => ipcRenderer.invoke('pick:source'),

  // diagnostics: forward a line to the main process so it prints in the terminal (PowerShell)
  logLine: (s) => { try { ipcRenderer.send('log:line', String(s)); } catch {} },

  // P5 (audit 2026-07-09): knowledge-layer health — is baseline/library present? Renderer shows a one-time
  // "bare mode" banner when it's missing so the degradation is never silent.
  health: () => ipcRenderer.invoke('app:health'),

  // start a fresh conversation (reset the agent context)
  newChat: () => ipcRenderer.invoke('chat:reset'),
  // switch the agent to an existing conversation by its stored sessionId (null => fresh)
  setSession: (id) => ipcRenderer.invoke('chat:setSession', id),

  // export the active page to a file (PNG data-URL / PDF bytes) via a save dialog
  exportSave: (kind, data, name) => ipcRenderer.invoke('export:save', kind, data, name),

  // import an image/svg into the project's assets/ folder; returns { rel } relative path
  importAsset: (kind) => ipcRenderer.invoke('asset:import', kind),
  // attach files to the chat → copied into the project's assets/; returns [{ rel, name, kind }].
  // paths = absolute OS paths (from a drag-drop); omit to open a file dialog.
  importAssets: (paths) => ipcRenderer.invoke('assets:import', paths),
  // drag-drop attach: items = [{ name, data(base64) }] read in the renderer; returns [{ rel, name, kind }].
  importAssetsData: (items) => ipcRenderer.invoke('assets:importData', items),
  // HARVEST (step 8): download external asset URLs into assets/ from the main process (no CORS). items=[{url,kind,name,inline}] → {ok,results}.
  harvestDownload: (items) => ipcRenderer.invoke('harvest:download', items),

  // manual-edits layer (AI-free, instant): replace with a full map / read current map
  applyEdits: (map) => ipcRenderer.invoke('edits:apply', map),
  getEdits: () => ipcRenderer.invoke('edits:get'),
  saveVerifyFrame: (b64, name) => ipcRenderer.invoke('verify:saveFrame', b64, name),
  criticJudge: (goal, frames, measures, ctx) => ipcRenderer.invoke('critic:judge', goal, frames, measures, ctx), // loop-mode: judge frames + measured facts vs the rubric (fresh isolated query). ctx = { prior:[blocking_issues from last round], hover:bool, motion:manifest } → anti-flip-flop + don't-penalize-invisible-hover + motion perception
  reviewerRun: (context) => ipcRenderer.invoke('reviewer:run', context), // STUDIO Inc 4: a read-only second-lens QA pass over the built site → returns { ok, text }
  loopPersist: (payload) => ipcRenderer.invoke('loop:persist', payload), // loop-mode run-log: write .dezign-loop.json + append run-log.md + save iter-N.png (payload = {state, logLine, frame, iter})

  // settings store (BYOK image keys etc.) in userData
  settings: {
    get: () => ipcRenderer.invoke('settings:get'),
    set: (patch) => ipcRenderer.invoke('settings:set', patch),
    testKey: (kind, key) => ipcRenderer.invoke('settings:testKey', kind, key), // SETTINGS HUB: validate a provider key with a minimal real call
    listModels: (provider) => ipcRenderer.invoke('settings:listModels', provider), // BYOK: dynamic model list from a provider's real endpoint (saved key)
    bridgeProbe: (name) => ipcRenderer.invoke('bridge:probe', name), // CLI-bridge status: installed + signed-in? (Codex etc.)
    bridgeModels: (name) => ipcRenderer.invoke('bridge:models', name), // DYNAMIC per-user model list (live CLI list command)
    bridgeLogin: (name) => ipcRenderer.invoke('bridge:login', name), // M3 3b: launch the vendor login (browser OAuth), then re-probe
    bridgeInstall: (name) => ipcRenderer.invoke('bridge:install', name), // M3 3c (experimental): run the exact install command, streaming output
    claudeProbe: () => ipcRenderer.invoke('claude:probe'), // A1 (audit 2026-07-09): Claude Code install + sign-in status (`claude auth status`)
    claudeLogin: () => ipcRenderer.invoke('claude:login'), // A1: sign in to Anthropic via `claude auth login` (browser OAuth), then re-probe
    onBridgeInstallChunk: (cb) => { const h = (_e, d) => cb(d); ipcRenderer.on('bridge:install:chunk', h); return () => ipcRenderer.removeListener('bridge:install:chunk', h); },
  },
  // AGENT SWARM `/flow` (step 21): plan → foundation → parallel per-page builders; events stream back
  flow: {
    start: (brief, opts) => ipcRenderer.invoke('flow:start', brief, opts),
    stop: () => ipcRenderer.invoke('flow:stop'),
    sessionBegin: () => ipcRenderer.invoke('flow:sessionBegin'), // F31: arm the main-side chat belt for the whole renderer session (build→imagery→prefetch→review)
    sessionEnd: () => ipcRenderer.invoke('flow:sessionEnd'), // F31: disarm it (endFlowSession / Stop / watchdog)
    log: (which) => ipcRenderer.invoke('flow:log', which), // BUILD LOG viewer: current run or an archived one from .dezign-logs/ (P8)
    review: (payload) => ipcRenderer.invoke('flow:review', payload), // FLOW REVIEWER: per-page frames → judge (striking bar) → parallel fix round
    imageryProbe: (brief) => ipcRenderer.invoke('imagery:probe', brief), // pre-flow imagery ask gate: is the medium stated in the brief?
    guide: () => ipcRenderer.invoke('promptlang:guide'), // the prompt-vocabulary cheatsheet (/guide)
    onEvent: (cb) => { const h = (_e, d) => cb(d); ipcRenderer.on('flow:event', h); return () => ipcRenderer.removeListener('flow:event', h); },
    assignAnswer: (id, map) => ipcRenderer.invoke('flow:assignAnswer', id, map), // Q9 manual mode: return the user's page→engine picks
    onAssign: (cb) => { const h = (_e, d) => cb(d); ipcRenderer.on('flow:assign', h); return () => ipcRenderer.removeListener('flow:assign', h); }, // Q9: main asks the renderer to pin engines per page
  },
  // SMART IMAGERY: fulfil <img data-gen="subject"> placeholders in the open project with relevant photos (host-side); reloads the preview
  fulfillImages: (cwd) => ipcRenderer.invoke('images:fulfill', cwd),
  // #5: persist the imagery medium ('illustration' => the post-turn fill STRIPS leaked <img data-gen>; else clears → fill normally)
  setImageryMedium: (medium) => ipcRenderer.invoke('imagery:setMedium', medium),
  // 3D ASSETS: fill <div data-hdri="sky subject" id=…> anchors with a real CC0 Poly Haven HDRI (assets/hdri/<id>.hdr) for WebGL IBL
  fulfillHDRIs: (cwd) => ipcRenderer.invoke('hdri:fulfill', cwd),
  // PALETTE BOARD: (re)generate palette.html from the project's styles.css :root tokens (host-side).
  // TEST-ONLY exposure (smoke drives it directly); the board is regenerated internally after builds — no live UI caller.
  generatePalette: (cwd) => ipcRenderer.invoke('palette:generate', cwd),

  // AI edit history — undo/redo the agent's file rewrites; onAiHist streams {canUndo,canRedo}
  aiUndo: () => ipcRenderer.invoke('ai:undo'),
  aiRedo: () => ipcRenderer.invoke('ai:redo'),
  aiState: () => ipcRenderer.invoke('ai:state'),
  onAiHist: (cb) => { const h = (_e, s) => cb(s); ipcRenderer.on('ai:hist', h); return () => ipcRenderer.removeListener('ai:hist', h); },

  // chat → Agent SDK (edits the open project). Stream arrives via onChunk.
  // resumeId = the conversation's sessionId to resume for THIS turn (null => fresh). Passed per-turn so a
  // convo/project switch can't make the agent resume the wrong thread via the shared session.
  chat: (prompt, resumeId, images) => ipcRenderer.invoke('chat:send', prompt, resumeId, images),
  chatStop: () => ipcRenderer.invoke('chat:stop'), // interrupt the running turn
  openExternal: (url) => ipcRenderer.invoke('shell:open', url), // open a chat link in the OS browser
  popoutPreview: (url) => ipcRenderer.invoke('preview:popout', url), // open the site in its own clean window
  win: { // frameless custom-titlebar window controls
    minimize: () => ipcRenderer.invoke('win:minimize'),
    maxToggle: () => ipcRenderer.invoke('win:maxtoggle'),
    close: () => ipcRenderer.invoke('win:close'),
    isMax: () => ipcRenderer.invoke('win:ismax'),
    onMaxChange: (cb) => { const h = (_e, v) => cb(v); ipcRenderer.on('win:maxchange', h); return () => ipcRenderer.removeListener('win:maxchange', h); },
  },
  onChunk: (cb) => {
    const h = (_e, t) => cb(t);
    ipcRenderer.on('chat:chunk', h);
    return () => ipcRenderer.removeListener('chat:chunk', h);
  },
  onTool: (cb) => {
    const h = (_e, ev) => cb(ev);
    ipcRenderer.on('chat:tool', h);
    return () => ipcRenderer.removeListener('chat:tool', h);
  },
  // QA-ASK v2 — the Director's ask_user tool paused mid-turn: main sends `ask:open` {id, payload}; the renderer shows
  // the picker and calls askRespond(id, answer) → main resolves the tool handler → the Director (and the build) resume.
  onAskOpen: (cb) => { const h = (_e, d) => cb(d); ipcRenderer.on('ask:open', h); return () => ipcRenderer.removeListener('ask:open', h); },
  askRespond: (id, answer) => ipcRenderer.invoke('ask:answer', id, answer),
  fireTestAsk: (p) => ipcRenderer.invoke('test:fireAsk', p), // TEST-ONLY (smoke): drive the real ask round-trip → resolves with the user's pick
  fireTestPreflight: (fakeSettings, sim) => ipcRenderer.invoke('test:authPreflight', fakeSettings, sim), // TEST-ONLY (smoke): run the A1 auth preflight WITHOUT a paid dispatch; sim={noEnv,noCreds} fakes a stranger's machine
  testSetSdkStub: (text) => ipcRenderer.invoke('test:setSdkStub', text), // TEST-ONLY (F44b, DZ_SMOKE-gated in main): install a no-model stub SDK so an offline turn exercises the real chat:send AD gate
  testClearSdkStub: () => ipcRenderer.invoke('test:clearSdkStub'),
  testNewSite: (dir) => ipcRenderer.invoke('test:newSite', dir), // TEST-ONLY (F44d, DZ_SMOKE-gated in main): run the SHIPPED New-site scaffold without a dialog

  // project: open folder, served URL + file tree, and live-reload on file change
  project: {
    get: () => ipcRenderer.invoke('project:get'),
    reopen: (dir) => ipcRenderer.invoke('project:reopen', dir), // auto-reopen last project on startup
    open: () => ipcRenderer.invoke('project:open'),
    create: () => ipcRenderer.invoke('project:new'),
    onReload: (cb) => {
      const h = () => cb();
      ipcRenderer.on('project:reload', h);
      return () => ipcRenderer.removeListener('project:reload', h);
    },
    onTree: (cb) => {
      const h = (_e, t) => cb(t);
      ipcRenderer.on('project:tree', h);
      return () => ipcRenderer.removeListener('project:tree', h);
    },
  },
});
