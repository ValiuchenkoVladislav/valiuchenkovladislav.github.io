import { defineConfig } from "vite";

import preactPreset from "@preact/preset-vite";


export default defineConfig({
  plugins: [
    preactPreset(), // preact integration
  ],

  root: "./src",
  envDir: "../", // path relative to project root

  resolve: { // tsconfig paths integration
    alias: [
      { find: "~/", replacement: "/" }
    ]
  },

  build: { // output options
    outDir: "../dist", // path relative to project root

    rollupOptions: {
      input: {
        app: "./src/index.html"
      }
    }
  }
});
