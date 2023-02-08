/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    newNextLinkBehavior: true,
    fallbackNodePolyfills: false,
    nextScriptWorkers: true, // see: https://nextjs.org/docs/basic-features/script#off-loading-scripts-to-a-web-worker-experimental
  },
  swcMinify: true,
  reactStrictMode: false,
};

module.exports = nextConfig;
