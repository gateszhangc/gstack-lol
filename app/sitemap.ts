import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL?.trim() || "https://gstack.lol";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
