import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// renderer (the chat + preview UI) — loaded by Electron in dev from the Vite dev server
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
  build: { outDir: 'dist-renderer' },
});
