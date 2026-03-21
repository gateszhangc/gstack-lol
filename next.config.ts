import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["localhost"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
