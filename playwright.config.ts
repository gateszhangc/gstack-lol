import process from "node:process";

import { defineConfig, devices } from "@playwright/test";

import {
  expectedClarityProjectId,
  expectedGoogleAnalyticsId,
  expectedWebUrl,
} from "./tests/test-env";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: "http://127.0.0.1:3107",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "node .next/standalone/server.js",
    env: {
      ...process.env,
      HOSTNAME: "127.0.0.1",
      PORT: "3107",
      NEXT_PUBLIC_WEB_URL: expectedWebUrl,
      NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: expectedGoogleAnalyticsId,
      NEXT_PUBLIC_CLARITY_PROJECT_ID: expectedClarityProjectId,
    },
    url: "http://127.0.0.1:3107",
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 7"] },
    },
  ],
});
