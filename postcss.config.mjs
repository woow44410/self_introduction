// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

const nextConfig = {
  output: 'export',  // 添加這行
  basePath: '/self_introduction', // 添加這行，使用您的倉庫名稱
  images: {
      unoptimized: true, // 如果使用了 Next.js 的 Image 組件，需要添加這行
  },
};

export default nextConfig;