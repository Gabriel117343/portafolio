/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // URL de tu web
  siteUrl: "https://www.gabrielsoliz.dev",
  // Frecuencia por defecto
  changefreq: "weekly",
  // Prioridad por defecto
  priority: 0.7,
  // Máximo de URLs por archivo sitemap
  sitemapSize: 5000,
  // Generar robots.txt junto al sitemap
  generateRobotsTxt: true,
  // Excluir rutas que no quieras indexar
  exclude: ["/drafts/*", "/admin", "/secret-page"],
  // Alternates (p.ej. si en el futuro tienes /es, /fr)
  alternateRefs: [
    { href: "https://www.gabrielsoliz.dev", hreflang: "en" },
    { href: "https://www.gabrielsoliz.dev/es", hreflang: "es" },
  ],
  // Transformación global de cada ruta
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path === "/" ? 1.0 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),
  // Añadir rutas manuales (si tienes secciones estáticas fuera de pages/app)
  additionalPaths: async (config) => [
    await config.transform(config, "/projects"),
    await config.transform(config, "/certifications"),
  ],
  // Opciones extra para robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/drafts"] },
    ],
    additionalSitemaps: [
      "https://www.gabrielsoliz.dev/server-sitemap-index.xml",
    ],
  },
};
