/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.stockx.com", "stockx-assets.imgix.net"],
  },
};

module.exports = nextConfig;
