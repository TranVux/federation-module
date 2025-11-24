import path from "path";
import tailwindcss from "@tailwindcss/vite";

import { federation } from "@module-federation/vite";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  base: "http://localhost:3001/",
  plugins: [
    federation({
      name: "remote-module1",
      filename: "remote_bundle.js",
      exposes: {
        "./pages/remote-page1": "./src/pages/remote-page1.tsx",
      },
      shared: {
        // Core
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router": { singleton: true },

        // Utils
        clsx: { singleton: true },
        zod: { singleton: true },
        "tailwind-merge": { singleton: true },
        "class-variance-authority": { singleton: true },

        // Radix UI — share tất cả component
        "@radix-ui/react-avatar": { singleton: true },
        "@radix-ui/react-checkbox": { singleton: true },
        "@radix-ui/react-collapsible": { singleton: true },
        "@radix-ui/react-dialog": { singleton: true },
        "@radix-ui/react-dropdown-menu": { singleton: true },
        "@radix-ui/react-label": { singleton: true },
        "@radix-ui/react-select": { singleton: true },
        "@radix-ui/react-separator": { singleton: true },
        "@radix-ui/react-slot": { singleton: true },
        "@radix-ui/react-tabs": { singleton: true },
        "@radix-ui/react-toggle": { singleton: true },
        "@radix-ui/react-toggle-group": { singleton: true },
        "@radix-ui/react-tooltip": { singleton: true },

        // Icons
        // "lucide-react": { singleton: true },
        // "@tabler/icons-react": { singleton: true },

        // Other UI libs
        vaul: { singleton: true },
        sonner: { singleton: true },

        // Drag & Drop libs
        "@dnd-kit/core": { singleton: true },
        "@dnd-kit/modifiers": { singleton: true },
        "@dnd-kit/sortable": { singleton: true },
        "@dnd-kit/utilities": { singleton: true },

        // Table
        "@tanstack/react-table": { singleton: true },

        // Charts
        recharts: { singleton: true },
      },
    }),
    react({ reactRefreshHost: "http://localhost:3000" }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "static/app/[hash].js",
        chunkFileNames: "static/chunks/[hash].js",
        assetFileNames: "static/assets/[hash].[ext]",
      },
    },
  },
});
