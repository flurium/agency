const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.zinc,
      },
    },
  },
  plugins: [],
}
