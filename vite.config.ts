import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Base matches the GitHub Pages project URL:
// https://arshadkhan001-zip.github.io/dav/
// For root-domain deploys (custom domain, Vercel), change to "/".
// Keep in sync with the router basename in src/App.tsx.
const BASE_PATH = "/dav/";
export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    target: "es2020",
    sourcemap: false,
    chunkSizeWarningLimit: 400,
  },
});
