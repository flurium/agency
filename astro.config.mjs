import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/edge"

import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), image()],
  output: "hybrid",
  adapter: vercel(),
})
