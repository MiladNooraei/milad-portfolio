import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://miladnooraei.github.io",
  base: "/milad-portfolio",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
  output: "static",
});