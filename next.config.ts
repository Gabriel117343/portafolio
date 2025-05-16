import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
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

module.exports = withNextIntl(nextConfig);
