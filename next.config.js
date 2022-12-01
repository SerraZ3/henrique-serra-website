/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/Home" },
      "/contato": { page: "/Contato" },
      "/sobre": { page: "/Sobre" },
    };
  },
};

module.exports = nextConfig;
