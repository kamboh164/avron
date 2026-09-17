import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers (ESNext) to eliminate legacy Babel polyfills & transforms
    target: "esnext",
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui") || id.includes("@emotion")) {
              return "vendor-mui";
            }
            if (id.includes("react") || id.includes("scheduler")) {
              return "vendor-react";
            }
            return "vendor-core";
          }
        },
      },
    },
  },
});