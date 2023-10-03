import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    ,
    sitemap({
      i18n: {
        defaultLocale: "uk",
        locales: {
          en: "en",
          uk: "uk",
        },
      },
    }),
    prefetch(),
  ],
  adapter: vercel(),
  output: "hybrid",
  site: "https://flurium.com",
})
