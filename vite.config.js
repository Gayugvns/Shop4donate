import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 👈 import path for resolving
import { fileURLToPath } from "url"; // 👈 import fileURLToPath for ES modules

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // 👈 define __dirname manually

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 this sets @ to your src folder
    },
  },
});
