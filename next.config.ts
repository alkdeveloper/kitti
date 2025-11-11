import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production için server mode (API çağrıları için gerekli)
  // Static export için 'output: export' kullanılabilir ama API çağrıları çalışmaz
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
