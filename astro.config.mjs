import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://miladnooraei.github.io/milad-portfolio",
  base: "/milad-portfolio/",
  output: "static",

  integrations: [
    mdx(),
    sitemap(),
    icon()
  ],

  vite: {
    plugins: [tailwind()],
  },
});