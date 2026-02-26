import { defineConfig } from "@playwright/test"

const baseURL = process.env.BASE_URL || "http://localhost:4321"

export default defineConfig({
  testDir: "./playwright",
  ...(process.env.BASE_URL
    ? {}
    : {
        webServer: {
          command: "npm run preview",
          port: 4321,
          reuseExistingServer: true,
        },
      }),
  use: {
    baseURL,
  },
})
