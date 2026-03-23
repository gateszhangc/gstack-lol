import { expect, test } from "@playwright/test";

import { siteContent } from "../lib/site-content";
import {
  expectedClarityProjectId,
  expectedGoogleAnalyticsId,
  expectedWebUrl,
} from "./test-env";

test("renders the conversion-focused hero and proof", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(siteContent.metadata.title);
  await expect(
    page.getByRole("heading", {
      name: /turn your coding agent into a software team with standards/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/18 specialists/i)).toBeVisible();
  await expect(page.getByText(/30-second install/i)).toBeVisible();
  await expect(
    page.getByText(/you move faster without trusting a blank prompt/i),
  ).toBeVisible();
});

test("primary deploy cta points to easyclaw with brand styling", async ({ page }) => {
  await page.goto("/");

  const heroDeployLink = page.getByRole("link", {
    name: /one-click deploy/i,
  });
  await expect(heroDeployLink).toBeVisible();
  await expect(heroDeployLink).toHaveAttribute(
    "href",
    "https://www.easyclaw.pro",
  );
  await expect(heroDeployLink).toHaveAttribute("target", "_blank");
  await expect(heroDeployLink).toHaveClass(/button-brand/);
  await expect(heroDeployLink).not.toHaveClass(/bg-stone-950/);
});

test("faq accordion expands the answer", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", {
    name: /what is gstack\?/i,
  });
  await trigger.click();

  await expect(
    page.getByText(
      /packages specialist commands and power tools into one software delivery system/i,
    ),
  ).toBeVisible();
});

test("quick start section keeps the setup path obvious", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /install once\. start with \/office-hours\. use it on every branch\./i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /see the full setup guide/i })).toBeVisible();
});

test("mobile navigation keeps install access visible", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only assertion");

  await page.goto("/");

  await expect(page.getByRole("link", { name: /install/i }).first()).toBeVisible();
  await expect(page.getByRole("img", { name: /gstack brand mark/i })).toBeVisible();
});

test("emits canonical and social metadata for the production url", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    siteContent.metadata.url,
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    siteContent.metadata.description,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    siteContent.metadata.url,
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    siteContent.metadata.title,
  );
});

test("injects analytics and clarity tags from env", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator('script[src*="googletagmanager.com/gtag/js?id="]'),
  ).toHaveAttribute(
    "src",
    `https://www.googletagmanager.com/gtag/js?id=${expectedGoogleAnalyticsId}`,
  );
  const clarityScript = page.locator("script#microsoft-clarity");
  await expect(clarityScript).toHaveAttribute("id", "microsoft-clarity");
  await expect
    .poll(async () => (await clarityScript.textContent()) ?? "")
    .toContain(expectedClarityProjectId);
  await expect(page.locator("script#google-analytics")).not.toContainText("G-STACKLOL01");
});

test("exposes crawl assets and manifest for search engines", async ({ page }) => {
  await page.goto("/robots.txt");
  await expect(page.locator("body")).toContainText("Sitemap:");
  await expect(page.locator("body")).toContainText("/sitemap.xml");

  await page.goto("/sitemap.xml");
  await expect(page.locator("body")).toContainText(expectedWebUrl);

  await page.goto("/manifest.webmanifest");
  await expect(page.locator("body")).toContainText(siteContent.metadata.url);
});
