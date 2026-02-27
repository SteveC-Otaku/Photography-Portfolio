const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/Photography-Portfolio' : undefined,
  assetPrefix: isProd ? '/Photography-Portfolio' : undefined,
};

module.exports = nextConfig;
