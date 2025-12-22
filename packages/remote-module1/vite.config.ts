import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import { federation } from '@module-federation/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { federationShareDeps } from '@commons/shared'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    origin: 'http://localhost:3001',
  },
  preview: {
    port: 3001,
  },
  base: 'http://localhost:3001/',
  plugins: [
    federation({
      name: 'remote-module1',
      filename: 'remote_bundle.js',
      exposes: {
        './pages/remote-page1': './src/pages/remote-page1.tsx',
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
