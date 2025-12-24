import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import { federation } from '@module-federation/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { federationShareDeps } from '@commons/shared'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    origin: 'http://localhost:3002',
  },
  preview: {
    port: 3002,
  },
  base: 'http://localhost:3002',
  plugins: [
    federation({
      name: 'local-module2',
      filename: 'remote_bundle.js',
      exposes: {
        './pages/local-page2': './src/pages/local-page2.tsx',
      },
      shared: federationShareDeps,
    }),
    react({ reactRefreshHost: 'http://localhost:3000' }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'static/app/[hash].js',
        chunkFileNames: 'static/chunks/[hash].js',
        assetFileNames: 'static/assets/[hash].[ext]',
      },
    },
  },
})
