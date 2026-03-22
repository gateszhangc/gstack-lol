import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

async function resolveSiteUrl() {
  const headerStore = await headers();
  const forwardedHost = headerStore.get("x-forwarded-host");
  const host = forwardedHost || headerStore.get("host");
  const isLocalHost = host?.includes("127.0.0.1") || host?.includes("localhost");
  const protocol =
    headerStore.get("x-forwarded-proto") || (isLocalHost ? "http" : "https");

  if (host) {
    return `${protocol}://${host}`;
  }

  const configured = process.env.NEXT_PUBLIC_WEB_URL?.trim();

  if (configured) {
    return configured;
  }

  return "https://gstack.lol";
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl = await resolveSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
