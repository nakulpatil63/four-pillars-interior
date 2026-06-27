/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Crucial for static builds on platforms like Cloudflare Pages / Git-based hosting without image servers
  },
}

module.exports = nextConfig
