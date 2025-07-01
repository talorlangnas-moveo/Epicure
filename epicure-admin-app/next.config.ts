import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: process.env.NEXT_PUBLIC_API_BASE_URL?.startsWith('https') ? 'https' : 'http',
        protocol: 'http',
        // hostname: process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/^https?:\/\//, '').split('/')[0] || 'localhost',
        hostname: 'localhost',
        port: '3000',
        pathname: '/static/**',
      },
    ],
  },
};

export default nextConfig;
