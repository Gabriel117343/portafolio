[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Gabriel117343/portafolio)

# Portafolio Profesional
Este es mi portafolio personal, en constante desarrollo, donde muestro mis proyectos y habilidades.

## 🛠️ Tecnologías

- **Next.js 15**
- **Tailwind CSS** (última versión, v4)
- **TypeScript** (última versión)

## 🚀 Instalación y ejecución

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd portafolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📊 Estado del proyecto

🚧 **En progreso** – nuevas secciones y mejoras de estilo en camino.

<img src="https://github.com/user-attachments/assets/3ef82996-b5a9-496d-9802-075ea195cb22" alt="Screenshot Portafolio" width="800px" />

## 📝 Próximas acciones

1. Desplegar el sitio en Vercel para producción.
2. Implementar modo oscuro (dark mode) y toggle de tema.
3. Mejorar el diseño responsive aprovechando los Container Query Ranges de Tailwind CSS v4.
4. Crear y agregar la sección de proyectos al portafolio, con enlace y descripción de cada uno.

## 🔍 Integración de `next-sitemap`

Mejora del SEO (para la indexación en google) del Portafolio con next-sitemap

### ⚙️ Archivos clave

- **`next-sitemap.config.js`**  
  Archivo de configuración en la raíz del proyecto que define:

  - `siteUrl`, `changefreq`, `priority`, `sitemapSize`
  - Rutas a excluir (`exclude`)
  - Versiones multilenguaje (`alternateRefs`)
  - Rutas adicionales (`additionalPaths`)
  - Políticas de `robots.txt` (`robotsTxtOptions`)

- **`package.json`**  
  Añade un script para generar sitemaps automáticamente tras el build:
  ```json
  {
    "scripts": {
      "postbuild": "next-sitemap"
    }
  }
  ```

### Comandos de ejecución

> [!NOTE]
> Personalmente recomiendo detener el servidor de desarrollo para evitar posibles errores en el build.

#### Build + Sitemap

```bash
npm run build
npm run postbuild
```

Este proceso:

1. Genera tu aplicación (`next build`)
2. Ejecuta `next-sitemap` para producir en `/public/`:
   - `sitemap.xml`
   - Sub-sitemaps (si superas el límite)
   - `robots.txt`

#### Dev (sin sitemap)

```bash
npm run dev
```

### ¿Qué ocurre internamente?

1. Next.js compila tu sitio.
2. `next-sitemap` lee tu configuración y recorre cada ruta pública.
3. Crea uno o varios archivos de sitemap según `sitemapSize`.
4. Genera un `robots.txt` con políticas de acceso y referencias a tus sitemaps.

### 🏆 Beneficios principales

- **Automatización Total**: olvídate de mantener manualmente `sitemap.xml` o `robots.txt`.
- **SEO Mejorado**: Google indexa todas tus páginas y detecta actualizaciones periódicas.
- **Escalabilidad**: divide automáticamente en varios sitemaps cuando tienes muchas rutas.
- **Control Preciso**: excluye rutas privadas, añade idiomas, ajusta prioridad y frecuencia de rastreo.
- **Integración con Google News/Imágenes/Videos**: personaliza cada entrada en la configuración.

> Fuente: [next-sitemap en GitHub](https://github.com/iamvishnusankar/next-sitemap)
