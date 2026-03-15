import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

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
  test: {
    environment: 'jsdom',
    setupFiles: ['./app/test/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      include: ['app/**/*.{ts,tsx}'],
    },
  },
});
