import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: resolve(__dirname),
};

export default nextConfig;
