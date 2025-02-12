/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteJest from "vite-plugin-jest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteJest(), // Add vite-plugin-jest to the plugins array
  ],
});
