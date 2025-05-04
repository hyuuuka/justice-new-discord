/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minification
  // Explicitly disable experimental features that might be causing issues
  experimental: {
    // Disable any experimental features that might be enabled by default
    forceSwcTransforms: false // Disable forced SWC transforms
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
  webpack: (config, { isServer }) => {
    // Add any webpack customizations here if needed
    return config;
  }
}

export default nextConfig
