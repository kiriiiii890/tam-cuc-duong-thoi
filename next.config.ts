import type { NextConfig } from "next";

// Set only by the GitHub Pages deploy workflow — keeps local dev/build
// serving from the site root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
