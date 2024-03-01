/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/ssr",
        headers: [
          {
            key: "x-custom-header",
            value: "ASTeam",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=30",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=30",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
