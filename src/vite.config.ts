import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const developmentPort = 4327;

function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        const raw = readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(raw)};`, map: null };
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [react(), markdownPlugin()],
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: developmentPort,
  },
  preview: {
    host: '0.0.0.0',
    port: developmentPort,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        faq: 'faq/index.html',
        terms: 'terms/index.html',
        privacy: 'privacy/index.html',
      },
    },
  },
});
