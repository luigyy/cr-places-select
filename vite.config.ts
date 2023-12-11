import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "cr-location-select",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
