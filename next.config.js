const basePath = '/les-craft-beer';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: 'https://harrison1990gmail-jpg.github.io/les-craft-beer'
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
