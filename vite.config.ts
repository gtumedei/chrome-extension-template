import deno from "@deno/vite-plugin"
import tailwind from "@tailwindcss/vite"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [deno(), solid(), tailwind()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  build: {
    rollupOptions: {
      input: {
        main: import.meta.resolve("./index.html"),
        worker: import.meta.resolve("./src/worker.ts"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Worker chunk goes in the main dist folder with no hash in its name
          if (chunkInfo.name == "worker") return "[name].js"
          // Other chunks are treated normally
          return "assets/[name]-[hash].js"
        },
      },
    },
  },
})
