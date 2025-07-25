/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    domains: ["storage.googleapis.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
