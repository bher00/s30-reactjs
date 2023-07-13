import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__tests/config.ts', './src/setup-test.ts'],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: vitestConfig.test,
});
