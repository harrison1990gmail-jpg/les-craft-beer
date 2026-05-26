const isGithubPages = process.env.DEPLOY_TARGET === 'github';
const basePath = isGithubPages ? '/les-craft-beer' : '';
const siteUrl = isGithubPages
  ? 'https://harrison1990gmail-jpg.github.io/les-craft-beer'
  : process.env.NEXT_PUBLIC_SITE_URL || '';

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
