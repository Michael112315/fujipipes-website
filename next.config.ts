import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fujipipes.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;