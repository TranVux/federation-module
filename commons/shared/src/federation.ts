const federationShareDeps = {
  // Core
  react: { singleton: true},
  "react-dom": { singleton: true },
  "react-router": { singleton: true, },

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
};

export default federationShareDeps
