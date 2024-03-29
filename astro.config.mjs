import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://flurium.com",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), sitemap(), icon()],
  adapter: vercel({}),
})
