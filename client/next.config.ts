import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true, // Cho phép tải SVG từ các nguồn bên ngoài
  },
};

export default nextConfig;

