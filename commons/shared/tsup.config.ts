import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],          // ESM output
  target: 'es2022',
  sourcemap: true,
  dts: true,                // generate .d.ts
  clean: true,
  outDir: 'dist',
  treeshake: true,
  splitting: false          // better for shared libs
});
