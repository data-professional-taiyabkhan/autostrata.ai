/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
export default nextConfig;
