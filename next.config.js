/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoBasePath = '/Photography-Portfolio';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? repoBasePath : undefined,
};

module.exports = nextConfig;
