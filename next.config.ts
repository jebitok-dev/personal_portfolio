import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: works on GitHub Pages, Netlify or Vercel.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
