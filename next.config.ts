import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'newel-website-stotage.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  turbopack: {
    root: '.',
  },
  async redirects() {
    // If S3 base is set to 'local', disable redirects and serve assets from public/ folder locally
    if (process.env.NEXT_PUBLIC_S3_BASE_URL === 'local') {
      return [];
    }

    const s3Url = process.env.NEXT_PUBLIC_S3_BASE_URL || "https://newel-website-stotage.s3.ap-south-1.amazonaws.com/public";

    return [
      {
        source: '/:path*.mp4',
        destination: `${s3Url}/:path*.mp4`,
        permanent: false,
      },
      {
        source: '/:path*.mov',
        destination: `${s3Url}/:path*.mov`,
        permanent: false,
      },
      {
        source: '/:path*.png',
        destination: `${s3Url}/:path*.png`,
        permanent: false,
      },
      {
        source: '/:path*.jpg',
        destination: `${s3Url}/:path*.jpg`,
        permanent: false,
      },
      {
        source: '/:path*.jpeg',
        destination: `${s3Url}/:path*.jpeg`,
        permanent: false,
      },
      {
        source: '/:path*.webp',
        destination: `${s3Url}/:path*.webp`,
        permanent: false,
      },
      {
        source: '/:path*.avif',
        destination: `${s3Url}/:path*.avif`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;