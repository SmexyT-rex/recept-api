import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // You might need to install 'path' or use 'import path from "node:path"'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Keep your proxy settings here too!
});
