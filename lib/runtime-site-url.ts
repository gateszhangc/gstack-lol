export function getRuntimeSiteUrl(fallback: string) {
  const configured = process.env.NEXT_PUBLIC_WEB_URL?.trim();

  if (configured) {
    return configured;
  }

  const hostname = process.env.HOSTNAME?.trim();
  const port = process.env.PORT?.trim();

  if (hostname && port) {
    return `http://${hostname}:${port}`;
  }

  return fallback;
}
