import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import { federation } from '@module-federation/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { federationShareDeps } from '@commons/shared'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000,
    origin: 'http://localhost:3000',
  },
  preview: {
    port: 3000,
  },
  base: 'http://localhost:3000',
  plugins: [
    federation({
      name: 'shell',
      filename: 'remote_bundle.js',
      remotes: {
        'remote-module1': {
          type: 'module',
          name: 'remote-module1',
          shareScope: 'default',
          entryGlobalName: 'remote-module1',
          entry: 'http://localhost:3001/remote_bundle.js',
        },
        'remote-module2': {
          type: 'module',
          shareScope: 'default',
          name: 'remote-module2',
          entryGlobalName: 'remote-module2',
          entry: 'http://localhost:3002/remote_bundle.js',
        },
      },
      shared: federationShareDeps,
    }),
    react(),
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
