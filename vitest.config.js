import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    alias: [
      {
        find: "@components",
        replacement: "components/",
      },
      {
        find: "@styles",
        replacement: "styles/",
      },
      {
        find: "@exports",
        replacement: "exports/",
      },
      {
        find: "@lib",
        replacement: "./lib/",
      },
    ],
  },
});
