/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Permanent (308) redirect: non-www apex -> www, for every path.
  // Ensures search engines index a single canonical host (https://www.evselect.in).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "evselect.in" }],
        destination: "https://www.evselect.in/:path*",
        permanent: true,
      },
      // Renamed routes -> EV-keyword URLs (308 permanent, query preserved).
      { source: "/compare", destination: "/compare-electric-vehicles", permanent: true },
      { source: "/hi/compare", destination: "/hi/compare-electric-vehicles", permanent: true },
      { source: "/tools", destination: "/ev-calculators", permanent: true },
      { source: "/tools/:path*", destination: "/ev-calculators/:path*", permanent: true },
      { source: "/hi/tools", destination: "/hi/ev-calculators", permanent: true },
      { source: "/hi/tools/:path*", destination: "/hi/ev-calculators/:path*", permanent: true },
      { source: "/learn", destination: "/ev-guides", permanent: true },
      { source: "/hi/learn", destination: "/hi/ev-guides", permanent: true },
      { source: "/news", destination: "/ev-news", permanent: true },
      { source: "/hi/news", destination: "/hi/ev-news", permanent: true },
      // Consolidated catalog: /catalog/all merged into /catalog (308).
      { source: "/catalog/all", destination: "/catalog", permanent: true },
      { source: "/hi/catalog/all", destination: "/hi/catalog", permanent: true },
      // Old category query URLs -> dedicated category pages (308).
      { source: "/catalog", has: [{ type: "query", key: "type", value: "car" }], destination: "/catalog/electric-cars", permanent: true },
      { source: "/catalog", has: [{ type: "query", key: "type", value: "scooter" }], destination: "/catalog/electric-scooters", permanent: true },
      { source: "/catalog", has: [{ type: "query", key: "type", value: "motorcycle" }], destination: "/catalog/electric-bikes", permanent: true },
      { source: "/hi/catalog", has: [{ type: "query", key: "type", value: "car" }], destination: "/hi/catalog/electric-cars", permanent: true },
      { source: "/hi/catalog", has: [{ type: "query", key: "type", value: "scooter" }], destination: "/hi/catalog/electric-scooters", permanent: true },
      { source: "/hi/catalog", has: [{ type: "query", key: "type", value: "motorcycle" }], destination: "/hi/catalog/electric-bikes", permanent: true },
    ];
  },
};

export default nextConfig;
