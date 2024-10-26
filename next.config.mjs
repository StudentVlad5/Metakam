/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.staff-clothes.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
