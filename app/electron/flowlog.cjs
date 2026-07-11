// ── SWARM BUILD LOG (owner ask 2026-07-03: read what the agents write, how they talk, and what they record to
// files, LINE BY LINE) — every agent's narration, every tool call, and every file write LINE-BY-LINE, appended live to
// `.dezign-flow-log.md` in the project folder. Parallel lanes interleave; every entry is stamped with its lane, so
// the interleaving IS the picture of how the swarm communicates. Read in-app via the Build log viewer (flow:log).
const fs = require('fs');
const path = require('path');

const LOG_FILE = '.dezign-flow-log.md';
const WRITE_LINE_CAP = 300; // full file writes shown line-by-line up to this many lines
const EDIT_LINE_CAP = 80;   // old/new blocks of an Edit, each

function logPath(dir) { return path.join(dir, LOG_FILE); }
function read(dir) { try { return fs.readFileSync(logPath(dir), 'utf8'); } catch { return ''; } }
function append(dir, text) { try { fs.appendFileSync(logPath(dir), text); } catch {} }
function ts() { const d = new Date(); return d.toTimeString().slice(0, 8); }

// P8: every run is preserved — before resetting the live log, ARCHIVE the previous one to .dezign-logs/
// (a new /flow used to wipe the prior run's log; only pre-flow snapshots kept a copy).
const LOGS_DIR = '.dezign-logs';
function archiveCurrent(dir) {
  try {
    const cur = logPath(dir);
    if (!fs.existsSync(cur) || !fs.readFileSync(cur, 'utf8').trim()) return null;
    const ad = path.join(dir, LOGS_DIR);
    fs.mkdirSync(ad, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
    let rel = LOGS_DIR + '/' + stamp + '-build.md';
    let n = 2; while (fs.existsSync(path.join(dir, rel))) rel = LOGS_DIR + '/' + stamp + '-build-' + (n++) + '.md';
    fs.copyFileSync(cur, path.join(dir, rel));
    return rel;
  } catch { return null; }
}
function listRuns(dir) {
  try { return fs.readdirSync(path.join(dir, LOGS_DIR)).filter((f) => f.endsWith('.md')).sort().reverse(); } catch { return []; }
}
function readRun(dir, name) {
  try { if (!/^[\w.-]+\.md$/.test(String(name))) return ''; return fs.readFileSync(path.join(dir, LOGS_DIR, name), 'utf8'); } catch { return ''; }
}

function start(dir, meta = {}) {
  archiveCurrent(dir); // P8: never lose the previous run
  const head = [
    '# Loupe swarm build log',
    '',
    'Started: ' + new Date().toISOString() + (meta.engine ? ' · Engine: ' + meta.engine : '') + (meta.parallel ? ' · Parallel: ×' + meta.parallel : ''),
    meta.brief ? 'Brief: ' + String(meta.brief).replace(/\s+/g, ' ').slice(0, 500) : '',
    '',
  ].filter((l) => l !== null).join('\n');
  try { fs.writeFileSync(logPath(dir), head + '\n'); } catch {}
}

function section(dir, title, body) {
  append(dir, '\n## ' + title + '\n\n' + (body ? String(body).trim().slice(0, 6000) + '\n' : ''));
}

const numbered = (text, cap) => {
  const lines = String(text || '').split('\n');
  const shown = lines.slice(0, cap).map((l, i) => String(i + 1).padStart(4) + '| ' + l);
  if (lines.length > cap) shown.push('     … (+' + (lines.length - cap) + ' more lines)');
  return shown.join('\n');
};
const signed = (text, sign, cap) => {
  const lines = String(text || '').split('\n');
  const shown = lines.slice(0, cap).map((l) => '  ' + sign + ' ' + l);
  if (lines.length > cap) shown.push('  … (+' + (lines.length - cap) + ' more lines)');
  return shown.join('\n');
};

// one tool call → a log entry; file WRITES are the whole point, so they get line-by-line bodies
function fmtTool(dir, ev) {
  const name = (ev && ev.name) || 'tool';
  const input = (ev && ev.input) || {};
  // show a RELATIVE tool path verbatim (path.relative would resolve it against the MAIN process cwd and lie —
  // the PSY1 post-mortem display bug); absolute paths are shown relative to the project when inside it.
  const fp = input.file_path ? String(input.file_path) : '';
  const rel = fp ? (path.isAbsolute(fp) ? path.relative(dir, fp) : fp) : '';
  if (/^write$/i.test(name) && input.content != null) {
    const n = String(input.content).split('\n').length;
    return '✎ Write ' + (rel || '?') + ' (' + n + ' lines)\n\n```\n' + numbered(input.content, WRITE_LINE_CAP) + '\n```';
  }
  if (/^(edit|multiedit)$/i.test(name) && (input.old_string != null || input.new_string != null)) {
    return '✎ Edit ' + (rel || '?') + '\n\n```\n' + signed(input.old_string, '-', EDIT_LINE_CAP) + '\n' + signed(input.new_string, '+', EDIT_LINE_CAP) + '\n```';
  }
  let brief = '';
  try { brief = JSON.stringify(input).slice(0, 200); } catch {}
  return '⌁ ' + name + (rel ? ' ' + rel : '') + (brief && brief !== '{}' ? ' — ' + brief : '');
}

// a LANE = one page's builder. say() buffers narration; any tool call / lane end flushes the buffer first,
// so the log reads as alternating "agent says → agent writes" in real order.
function lane(dir, file, meta = {}) {
  let buf = '';
  const t0 = Date.now();
  const dur = () => ((Date.now() - t0) / 1000).toFixed(0) + 's';
  const eng = meta.engine ? ' · ' + meta.engine : '';
  const stamp = () => '**[' + ts() + ' · ' + file + ']** ';
  const flush = () => {
    const t = buf.trim(); buf = '';
    if (!t) return;
    append(dir, stamp() + 'says:\n\n' + t.split('\n').map((l) => '> ' + l).join('\n') + '\n\n');
  };
  return {
    say(text) { buf += String(text || ''); if (buf.length > 4000) flush(); },
    tool(ev) { flush(); append(dir, stamp() + fmtTool(dir, ev) + '\n\n'); },
    progress(text) { flush(); append(dir, stamp() + String(text || '') + '\n\n'); }, // real-time one-liner (e.g. a bridge file poller — CLI bridges emit no incremental tool events)
    begin(note) { append(dir, '\n## ⬡ ' + file + (note ? ' — ' + note : '') + eng + '\n\n'); },
    done(note) { flush(); append(dir, stamp() + '✓ done' + eng + ' · ' + dur() + (note ? ' — ' + note : '') + '\n'); },
    fail(note) { flush(); append(dir, stamp() + '✕ failed' + eng + ' · ' + dur() + (note ? ' — ' + String(note).slice(0, 300) : '') + '\n'); },
  };
}

module.exports = { logPath, read, start, section, lane, fmtTool, archiveCurrent, listRuns, readRun, LOG_FILE, LOGS_DIR };
