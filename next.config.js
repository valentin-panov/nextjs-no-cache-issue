/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TEST_ENV: "my-value",
  },
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
