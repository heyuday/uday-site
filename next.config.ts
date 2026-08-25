import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no backend, no CMS. `next build` emits ./out
  output: "export",
  // Required for `output: "export"`: Vercel's image optimizer isn't available.
  // Source images are pre-sized and encoded as WebP in /public/images.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
