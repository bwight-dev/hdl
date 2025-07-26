import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'effortless-advice-3210b87c9d.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
