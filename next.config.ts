import type { NextConfig } from 'next';

// GitHub Pages hosts this repository below /portfolio-inara/.
// Vercel hosts the same app at the domain root, so it must not inherit that prefix.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isGitHubPages
    ? { basePath: '/portfolio-inara', assetPrefix: '/portfolio-inara/' }
    : {}),
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
