import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  distDir: "build",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'img.youtube.com',
        port: "",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**",
      },

    ],
    // forma deprecada
    // domains: [
    //   "img.youtube.com", // para thumbnails de YouTube
    //   "i.ytimg.com",
    // ],
  },
};

export default nextConfig;
