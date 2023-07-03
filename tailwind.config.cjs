const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: colors.violet[300],
          400: colors.violet[400],
          500: colors.violet[300],
        },
      },
    },
  },
  plugins: [],
}
