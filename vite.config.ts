import { defineConfig } from "vite";

import preactPreset from "@preact/preset-vite";
import svgrPlugin from "vite-plugin-svgr";
import { viteSingleFile } from "vite-plugin-singlefile";


export default defineConfig({
  plugins: [
    preactPreset(), // preact integration
    svgrPlugin(), // svg support
    viteSingleFile() // bundle optimization
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
