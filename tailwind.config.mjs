import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.indigo,
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
  plugins: [],
}
