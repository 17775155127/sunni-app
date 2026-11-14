import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 核心：强制 Next.js 进行静态导出
  images: {
    unoptimized: true, // 静态导出时必须禁用图片优化
  },
  trailingSlash: true, // 增加兼容性
};

export default nextConfig;