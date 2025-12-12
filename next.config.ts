import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/money-converter',
  assetPrefix: '/money-converter',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
