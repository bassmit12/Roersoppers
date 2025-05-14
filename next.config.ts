import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "roersoppers.nl",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "images.unsplash.com",
      "picsum.photos",
    ],
  },
  // This enables the Next.js webpack to process image files with very long filenames
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
