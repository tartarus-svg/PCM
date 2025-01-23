/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable features that require native addons
  swcMinify: false,
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Disable experimental features
  experimental: {
    swcMinify: false
  }
};

module.exports = nextConfig;