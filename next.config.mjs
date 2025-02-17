// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   logging: {
//     fetches: {
//       fullUrl: true,
//     },
//   },
// };

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/self_introduction' : '',  // **這裡要與 GitHub Pages 網址匹配**
  assetPrefix: isProd ? '/self_introduction/' : '',  // **確保靜態資源載入正確**
  images: {
      unoptimized: true,
  },
};

export default nextConfig;
