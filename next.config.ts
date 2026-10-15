import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-inara',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
