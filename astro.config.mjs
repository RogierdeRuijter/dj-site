// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "./src/functions/image-service",
    },
  },
});
