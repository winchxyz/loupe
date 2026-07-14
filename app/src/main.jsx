import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fontsource-variable/inter'; // self-hosted UI sans (incl. Cyrillic) — chosen app type; also the Loupe wordmark
import '@fontsource-variable/jetbrains-mono'; // self-hosted HUD/mono voice
import './styles.css';

createRoot(document.getElementById('root')).render(<App />);

// fade out the boot splash (index.html) once React has painted a frame — no white flash on launch
requestAnimationFrame(() => requestAnimationFrame(() => {
  const s = document.getElementById('dz-splash');
  if (s) { s.classList.add('dz-hide'); setTimeout(() => { try { s.remove(); } catch {} }, 450); }
}));
