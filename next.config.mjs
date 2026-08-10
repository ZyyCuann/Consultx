/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages supplies this at build time for project sites.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
};

export default nextConfig;
