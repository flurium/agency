import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          500: "#0A1E25",
          600: "#051014",
        },
        secondary: {
          25: "#FDFDFC",
          50: colors.stone[50],
          100: colors.stone[100],
          200: colors.stone[200],
          300: colors.stone[300],
          400: colors.stone[400],
          500: colors.stone[500],
          600: colors.stone[600],
          700: colors.stone[700],
          800: colors.stone[800],
          900: colors.stone[900],
          950: colors.stone[950],
        },
      },
      borderRadius: {
        input: "0.5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".text-wrap-balance": {
          textWrap: "balance",
        },
      })
    }),
  ],
}
