import { expect, test } from "@playwright/test";

test("renders the editorial hero and metadata", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/gstack/i);
  await expect(
    page.getByRole("heading", {
      name: /gstack is the ai software factory that lets one builder ship like a team of twenty/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/15 specialists/i)).toBeVisible();
  await expect(page.getByText(/free & mit licensed/i)).toBeVisible();
});

test("primary github cta points to the repo", async ({ page }) => {
  await page.goto("/");

  const heroGithubLink = page.getByRole("link", { name: /view on github/i });
  await expect(heroGithubLink).toBeVisible();
  await expect(heroGithubLink).toHaveAttribute(
    "href",
    "https://github.com/garrytan/gstack",
  );
});

test("faq accordion expands the answer", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", {
    name: /what is gstack\?/i,
  });
  await trigger.click();

  await expect(
    page.getByText(/garry tan's open source ai software factory/i),
  ).toBeVisible();
});

test("mobile navigation keeps install access visible", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only assertion");

  await page.goto("/");

  await expect(page.getByRole("link", { name: /install/i }).first()).toBeVisible();
  await expect(page.getByRole("img", { name: /gstack brand mark/i })).toBeVisible();
});

test("injects analytics and clarity tags from env", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator('script[src*="googletagmanager.com/gtag/js?id="]'),
  ).toHaveAttribute("src", /G-/);
  const clarityScript = page.locator("script#microsoft-clarity");
  await expect(clarityScript).toHaveAttribute("id", "microsoft-clarity");
  await expect
    .poll(async () => (await clarityScript.textContent()) ?? "")
    .toContain("vz9t2p8hn3");
});

test("exposes crawl assets for search engines", async ({ page }) => {
  await page.goto("/robots.txt");
  await expect(page.locator("body")).toContainText("Sitemap:");
  await expect(page.locator("body")).toContainText("/sitemap.xml");

  await page.goto("/sitemap.xml");
  await expect(page.locator("body")).toContainText("http://127.0.0.1:3107");
});
