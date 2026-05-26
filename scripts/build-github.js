const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    DEPLOY_TARGET: 'github',
    NEXT_PUBLIC_SITE_URL: 'https://harrison1990gmail-jpg.github.io/les-craft-beer'
  }
});

process.exit(result.status || 0);

