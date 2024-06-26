/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cmsbetconstruct.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
