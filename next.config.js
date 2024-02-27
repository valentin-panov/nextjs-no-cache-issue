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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
