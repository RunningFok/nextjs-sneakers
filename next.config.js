/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.stockx.com"],
  },
};

module.exports = nextConfig;
