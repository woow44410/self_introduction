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
  basePath: isProd ? '/self_introduction':'',
  images: {
      unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? '/self_introduction':'',
};

export default nextConfig;
