module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/Home" },
    };
  },
};
