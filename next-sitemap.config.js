/** @type {import('next-sitemap').IConfig} */

// Nota: de esta forma siempre se asegura una única fuente de verdad para los datos, en este caso los slugs.

const projectsSlugs = [
  "sica-system",
  "nasa-app",
  "react-magic-search-params",
  "hotel-management",
  "bazaar-management",
  "portfolio",
  "commerces-app",
];
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

  // Build each <url> entry
  transform: async (config, path) => {
    const { siteUrl, changefreq, priority, autoLastmod } = config;
    // URL “por defecto” (defaultLocale = 'es')
    const urlDefault = `${siteUrl}${path}`;
    // English → prefix /en
    const urlEn = `${siteUrl}/en${path}`;
    // Spanish explicit → prefix /es
    const urlEs = `${siteUrl}/es${path}`;

    return {
      loc: urlDefault,
      changefreq,
      priority: path === "/" ? 1.0 : priority,
      lastmod: autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: urlDefault, hreflang: "x-default" },
        { href: urlEn, hreflang: "en" },
        { href: urlEs, hreflang: "es" },
      ],
    };
  },
  // Solo los proyectos (Next.js genera "/" y "/projects" por ti)
  additionalPaths: async (config) => {
    const staticPaths = ["/", "/projects"]; // Rutas principales
    const projectPaths = projectsSlugs.map((slug) => `/projects/${slug}`);

    return Promise.all(
      [...staticPaths, ...projectPaths].map((path) =>
        config.transform(config, path)
      )
    );
  },
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
