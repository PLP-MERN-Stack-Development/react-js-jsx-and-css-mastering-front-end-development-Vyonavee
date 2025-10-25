import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-js-jsx-and-css-mastering-front-end-development-Vyonavee/", // important for GitHub Pages
  build: {
    outDir: "dist",
  },
});
