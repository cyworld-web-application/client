/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    domains: ["cyworld-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
