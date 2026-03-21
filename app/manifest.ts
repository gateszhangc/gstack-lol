import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL?.trim() || "https://gstack.lol";
const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "gstack";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: projectName,
    short_name: "gstack",
    description:
      "Explore gstack, Garry Tan's open source AI software factory for founders and technical teams.",
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
