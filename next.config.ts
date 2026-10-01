import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: resolve(__dirname),
};

export default nextConfig;
