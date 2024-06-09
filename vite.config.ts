// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(),],
  build: {
    outDir: 'build',
  },
  server: {
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  worker: {
    format: 'es',
  },
})
