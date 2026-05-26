const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path = '') {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(path)) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

