import Autoprefixer from "autoprefixer"
import TailwindCSS from "tailwindcss"
import Nesting from "tailwindcss/nesting"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [solid()],
  css: {
    postcss: {
      plugins: [Nesting(), TailwindCSS(), Autoprefixer()],
    },
  },
})
