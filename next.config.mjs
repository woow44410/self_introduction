// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   logging: {
//     fetches: {
//       fullUrl: true,
//     },
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/self_introduction',
  images: {
      unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
