/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/mat-extended',
  plugins: [angular()],
  resolve: {
    alias: {
      '@all-the.rest/mat-extended': path.resolve(__dirname, 'src/index.ts'),
    },
  },
  test: {
    name: 'mat-extended',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,cropper/src,file-upload/src,data-table/src,toast/src,dialog/src,menu/src}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    testTimeout: 2000,
    hookTimeout: 2000,
    teardownTimeout: 2000,
    coverage: {
      reportsDirectory: '../../coverage/packages/mat-extended',
      provider: 'v8' as const,
    },
  },
});
