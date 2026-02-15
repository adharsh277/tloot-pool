import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.formula1.com",
        pathname: "/**",
      },
    ],
  },

  // Ignore TypeScript errors (already added)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🚀 IMPORTANT — ignore hardhat project completely
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /big-bag-pool/,
      })
    );
    return config;
  },
};

export default nextConfig;
