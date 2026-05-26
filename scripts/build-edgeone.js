const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    DEPLOY_TARGET: 'edgeone',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || ''
  }
});

process.exit(result.status || 0);

