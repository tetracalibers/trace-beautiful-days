// @ts-check

import { defineConfig } from "astro/config"
import { resolve } from "node:path"
import yaml from "@rollup/plugin-yaml"

const __dirname = new URL(".", import.meta.url).pathname

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    vite: {
      plugins: [yaml()],
      resolve: {
        alias: {
          "@": resolve(__dirname, "src"),
        },
      },
    },
  },
)
