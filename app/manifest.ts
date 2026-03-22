import type { MetadataRoute } from "next";

import { getRuntimeSiteUrl } from "@/lib/runtime-site-url";
import { siteContent } from "@/lib/site-content";

const siteUrl = getRuntimeSiteUrl(siteContent.metadata.url);
const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "gstack";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: projectName,
    short_name: "gstack",
    description: siteContent.metadata.description,
    start_url: siteUrl,
    display: "standalone",
    background_color: "#fbf8f2",
    theme_color: "#d3542a",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
