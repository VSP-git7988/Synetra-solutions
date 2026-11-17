/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emits /about/index.html etc. so any plain web server can serve the routes without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
