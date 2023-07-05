import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import image from "@astrojs/image"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    image(),
    sitemap({
      i18n: {
        defaultLocale: "uk",
        locales: {
          en: "en",
          uk: "uk",
        },
      },
    }),
  ],
  adapter: vercel(),
  output: "hybrid",
  site: "https://flurium.com",
})
