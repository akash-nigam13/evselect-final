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
    ];
  },
};

export default nextConfig;
