module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
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
