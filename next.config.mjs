/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification
  experimental: {
    // Configure SWC properly
    swcTraceProfiling: false,
    forceSwcTransforms: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Use transpilePackages to ensure compatibility
  transpilePackages: [
    "lucide-react",
    "react-day-picker"
  ]
}

export default nextConfig
