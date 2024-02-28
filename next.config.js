/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/ssr",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=30, stale-while-revalidate=59",
          },
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=60",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=3600",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
