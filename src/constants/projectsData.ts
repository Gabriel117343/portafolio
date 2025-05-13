// Sistema de Información criminal SICA
import sica_01 from "@public/images/projects/sica-system/sica-system-01.png";
import sica_02 from "@public/images/projects/sica-system/sica-system-02.png";
import sica_03 from "@public/images/projects/sica-system/sica-system-03.png";
import sica_04 from "@public/images/projects/sica-system/sica-system-04.png";
import sica_05 from "@public/images/projects/sica-system/sica-system-05.png";
import sica_06 from "@public/images/projects/sica-system/sica-system-06.png";
import sica_07 from "@public/images/projects/sica-system/sica-system-07.png";
import sica_08 from "@public/images/projects/sica-system/sica-system-08.png";
import sica_09 from "@public/images/projects/sica-system/sica-system-09.png";
import sica_10 from "@public/images/projects/sica-system/sica-system-10.png";
import sica_11 from "@public/images/projects/sica-system/sica-system-11.png";
import sica_12 from "@public/images/projects/sica-system/sica-system-12.png";
import sica_13 from "@public/images/projects/sica-system/sica-system-13.png";
import sica_14 from "@public/images/projects/sica-system/sica-system-14.png";

import SicaGeneralAchitecutre from "@public/images/projects/sica-system/achitecture-sica.png";

// Sistema de Gestión de Bazar
import bazar_01 from "@public/images/projects/bazaar-management/bazaar-01.png";
import bazar_02 from "@public/images/projects/bazaar-management/bazaar-02.png";
import bazar_03 from "@public/images/projects/bazaar-management/bazaar-03.png";
import bazar_04 from "@public/images/projects/bazaar-management/bazaar-04.png";
import bazar_05 from "@public/images/projects/bazaar-management/bazaar-05.png";
import bazar_06 from "@public/images/projects/bazaar-management/bazaar-06.png";
import bazar_07 from "@public/images/projects/bazaar-management/bazaar-07.png";
import bazar_08 from "@public/images/projects/bazaar-management/bazaar-08.png";
import bazar_09 from "@public/images/projects/bazaar-management/bazaar-09.png";
import bazar_10 from "@public/images/projects/bazaar-management/bazaar-10.png";

// Sistema de Gestión Hotelero
import hotel_01 from "@public/images/projects/hotel-management/hotel-01.png";
import hotel_02 from "@public/images/projects/hotel-management/hotel-02.png";
import hotel_03 from "@public/images/projects/hotel-management/hotel-03.png";
import hotel_04 from "@public/images/projects/hotel-management/hotel-04.png";

// Aplicación de la NASA
import nasa_ap_01 from "@public/images/projects/nasa-app/nasa-app-01.png";
import nasa_ap_02 from "@public/images/projects/nasa-app/nasa-app-02.png";

// Librería React Magic Search Params
import react_magic_search_params_01 from "@public/images/projects/react-magic-search-params/magic-params-01.jpg";
import react_magic_search_params_02 from "@public/images/projects/react-magic-search-params/magic-params-02.png";

// Mi portafolio

import portfolio_01 from "@public/images/projects/portfolio/portfolio-01.jpeg";
import portfolio_02 from "@public/images/projects/portfolio/portfolio-02.png";
import portfolio_03 from "@public/images/projects/portfolio/portfolio-03.jpeg";



import { GoogleMapsSvg } from "@ui/svg/GoogleMapsSvg";

import type { StaticImageData } from "next/image";
import {
  ReactSvg,
  TypeScriptSvg,
  TailwindSvg,
  PostgresSqlSvg,
  CssSvg,
  JavaScriptSvg,
  PythonSvg,
  ViteSvg,
  GitSvg,
  GitHubSvg,
  HtmlSvg,
  DjangoSvg,
  VisualStudioCodeSvg,
  JwtSvg,
  BootstrapSvg,
  SqlLiteSvg,
  NetlifySvg,
  VercelSvg,
  NextJsIcon,
} from "@ui/svg/Technologies";

export type Platforms = "web" | "mobile" | "desktop" | "all";

export type Slugs =
  | "sica-system"
  | "nasa-app"
  | "react-magic-search-params"
  | "hotel-management"
  | "bazaar-management"
  | "portfolio";

type Date = `${number}${number}-${number}${number}-${number}${number}`;

type DeepWikiURL = `https://deepwiki.com/${string}/${string}`;

// Ya sea que la arquitectura sea FrontEnd y BackEnd o una sola imagen general, se puede usar el mismo tipo de dato para ambos casos.

type SourceCode = `https://github.com/${string}` | "";

export interface Architecture {
  frontEndImage?: { label: string; description?: string; src: StaticImageData };
  backEndImage?: { label: string; description?: string; src: StaticImageData };
  generalImage?: { label: string; description?: string; src: StaticImageData };
}
export type LabelTech =
  | "HTML"
  | "Next.js 15"
  | "CSS"
  | "GitHub"
  | "JavaScript"
  | "React 19"
  | "React 18"
  | "TypeScript"
  | "Bootstrap"
  | "TailwindCSS 4"
  | "Git"
  | "Linux"
  | "PostgresSQL"
  | "SQLite"
  | "Python"
  | "Django"
  | "SQL"
  | "Vite"
  | "JWT Auth"
  | "Netlify"
  | "Vercel"
  | "Visual Studio Code"
  | "Google Maps API"
  | "Django Rest Framework"
  | "React Native";

export type VideoDemostration = {
  src: string;
  thumbnail: string;
  description?: string;
};

export interface Project {
  slug: Slugs;
  title: string;
  shortDescription: string;
  // aspect radio recomendado: 4:3 1920 x 1440
  images: Array<{ label: string; platform: Platforms; src: StaticImageData }>;
  techs: {
    label: LabelTech;
    Icon: React.FC<{ className?: string }>;
    showInOverview: boolean;
  }[];
  // Si se añade un video mostrativo y es un video de youtube usar la página https://youtube-thumbnail-grabber.com/ para extraer el tumbnails del video o miniature.
  videoDemostration?: VideoDemostration;
  dateFrom?: Date;
  dateTo?: Date;
  details: {
    overview: string;
    duration: string;
    role: string;
    responsibilities: string[];
  };
  architecture?: Architecture;
  deepWikiURL?: DeepWikiURL;

  sourceCode?: SourceCode;
  liveDemo?: string;
 
}

// Nota: Siempre la primera imagen del array será la que se mostrará en el slider de la vista general de proyectos
// y la que se mostrará en la vista de detalle del proyecto. El resto de imágenes son opcionales y se mostrarán en el slider de la vista de detalle del proyecto.

export const PROJECTS: Project[] = [
  {
    slug: "sica-system",
    title: "Sistema de Información Criminal SICA",
    // Short description: enfoque en la funcionalidad principal
    shortDescription:
      "Aplicación web full-stack para el registro, gestión y análisis en tiempo real de datos criminales.",
    // Description ampliada con aprendizajes, roles y logros

    details: {
      overview:
        "Fue mi proyecto de tesis y uno de los más grandes que he realizado. Desarrolle una Aplicación web full-stack junto a otro desarrollador, para el registro, gestión y análisis de datos criminales en tiempo real. Implementada con React + TypeScript en el FrontEnd y Django REST Framework + PostgreSQL en el BackEnd. ",
      duration: "8+ meses",
      role: "Desarrollador Front-End (con contribuciones al Back-End)",
      responsibilities: [
        "Migración de Tailwind CSS v3 → v4 para aprovechar nuevas utilidades y mejorar rendimiento",
        "Migración de JavaScript → TypeScript, añadiendo tipado a APIs y mejorando mantenibilidad",
        "Actualización de React 18.3 → React 19",
        "Creación de hooks y utilidades para manejo de query-params",
        "Integración de React DevTools y configuración de ESLint/Prettier",
        "Implementación de mapas de calor con Google Maps API para visualización de delitos",
        "Autenticación JWT con Django (login, refresh token) y consumo de APIs REST con paginación y serialización",
        "Optimización de rendimiento: lazy-loading con React.lazy/Suspense y auditorías con Lighthouse",
        "Gestionar los parámetros de consulta a través de mi propia librería @react-magic-search-params",
        "Coordinación con equipo Back-End vía Git/GitHub, definición de +70 requisitos y liderazgo de proyecto",
      ],
    },
    dateFrom: "2024-08-01",
    dateTo: "2025-04-18",
    images: [
      {
        label: "Login y Dashboard del Sistema SICA",
        platform: "mobile",
        src: sica_01,
      },
      {
        label: "Detalle de Investgación",
        platform: "web",
        src: sica_02,
      },
      {
        label: "Configuración del Sistema SICA",
        platform: "web",
        src: sica_03,
      },
      {
        label: "Detalle de Evidencia",
        platform: "web",
        src: sica_04,
      },
      {
        label: "Registro de Evidencia",
        platform: "web",
        src: sica_05,
      },
      {
        label: "Tablero de Investigación",
        platform: "web",
        src: sica_06,
      },
      {
        label: "Registro de Investigación",
        platform: "web",
        src: sica_07,
      },
      {
        label: "Lista de Investigaciones",
        platform: "web",
        src: sica_08,
      },
      {
        label: "Lista de Delitos",
        platform: "web",
        src: sica_09,
      },
      {
        label: "Google Maps - delitos registrados",
        platform: "web",
        src: sica_10,
      },
      {
        label: "Google Maps - Mapa de calor",
        platform: "web",
        src: sica_11,
      },
      {
        label: "Google Maps - Registro de Delitos",
        platform: "web",
        src: sica_12,
      },
      {
        label: "Google Maps - Detalle de Delito",
        platform: "web",
        src: sica_13,
      },
      {
        label: "Lista de Usuarios del Sistema SICA",
        platform: "web",
        src: sica_14,
      },
    ],
    techs: [
      { label: "React 19", Icon: ReactSvg, showInOverview: true },
      { label: "TypeScript", Icon: TypeScriptSvg, showInOverview: true },
      { label: "TailwindCSS 4", Icon: TailwindSvg, showInOverview: true },
      { label: "Google Maps API", Icon: GoogleMapsSvg, showInOverview: true },
      { label: "PostgresSQL", Icon: PostgresSqlSvg, showInOverview: true },
      { label: "Django Rest Framework", Icon: DjangoSvg, showInOverview: true },
      { label: "Python", Icon: PythonSvg, showInOverview: false },
      { label: "Vite", Icon: ViteSvg, showInOverview: false },
      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "GitHub", Icon: GitHubSvg, showInOverview: false },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: false },
      { label: "JavaScript", Icon: JavaScriptSvg, showInOverview: false },
      { label: "JWT Auth", Icon: JwtSvg, showInOverview: true },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
    ],

    videoDemostration: {
      src: "https://www.youtube.com/watch?v=foL1yFlUQRc",
      thumbnail: "https://img.youtube.com/vi/foL1yFlUQRc/maxresdefault.jpg",
      description:
        "Video experimental, no tiene  nada que ver con el proyecto, pero es un video de prueba para mostrar como se vería un video en la vista de detalle del proyecto.",
    },
    architecture: {
      generalImage: {
        label: "Arquitectura del Sistema SICA",
        description:
          "Una vista general de los modulos del sistema, en donde se puede ver la Arquitectura del sistema y como se comunican entre si.",
        src: SicaGeneralAchitecutre,
      },
    },
    sourceCode: "",
    liveDemo: "",
  },
  {
    title: "Sistema de Gestión de Bazar",
    shortDescription:
      "Aplicación web completa para la gestión empleados, ventas y productos para un bazar",
    slug: "bazaar-management",
    details: {
      overview:
        "Es un sistema que desarrollado como proyecto de integración haya por el 2023 en mi carrera de ingeniería en Informática. Aprendí a implementar formularios, paginar datos y autenticar usuarios con JWT. También optimicé el rendimiento del sistema utilizando lazy-loading y auditorías de rendimiento con Lighthouse. \n\nRetomé este proyecto en 2024 para refactorizar todo el FrontEnd, lo que sento las bases para poder luego ese mismo año desarrollar el Sistema de Información Criminal SICA.",
      duration: "4+ meses",
      role: "Desarrollador Full Stack",
      responsibilities: [
        "Implementación de formularios y validaciones",
        "Integración de APIs REST con paginación y serialización",
        "Autenticación JWT con Django (login, refresh token)",
        "Optimización de rendimiento: lazy-loading con React.lazy/Suspense",
        "Auditorías de rendimiento con Lighthouse",
        "Gestionar el proyecto en GitHub",
        "Definición de requisitos y liderazgo del proyecto",
        "Refactorizar completamente el FrontEnd del sistema con mejoras en la UI/UX, rendimiento y código limpio.",
      ],
    },
    techs: [
      { label: "React 18", Icon: ReactSvg, showInOverview: true },
      { label: "Bootstrap", Icon: BootstrapSvg, showInOverview: true },
      { label: "SQLite", Icon: SqlLiteSvg, showInOverview: true },
      { label: "JavaScript", Icon: JavaScriptSvg, showInOverview: true },
      { label: "Python", Icon: PythonSvg, showInOverview: false },
      { label: "Django Rest Framework", Icon: DjangoSvg, showInOverview: true },
      { label: "JWT Auth", Icon: JwtSvg, showInOverview: true },
      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: false },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
      {
        label: "GitHub",
        Icon: GitHubSvg,
        showInOverview: false,
      },
      { label: "Netlify", Icon: NetlifySvg, showInOverview: false },
    ],
    dateFrom: "2023-08-01",
    dateTo: "2023-12-29",
    images: [
      {
        label: "Punto de Venta del Sistema",
        platform: "web",
        src: bazar_01,
      },
      {
        label: "Dashboard de los KPIs del Sistema",
        platform: "web",
        src: bazar_02,
      },
      {
        label: "Control de Stock en Tienda",
        platform: "web",
        src: bazar_03,
      },
      {
        label: "Registro de Ventas Realizadas",
        platform: "web",
        src: bazar_04,
      },
      {
        label: "Registro de Productos",
        platform: "web",
        src: bazar_05,
      },
      {
        label: "Registro de Productos",
        platform: "web",
        src: bazar_06,
      },
      {
        label: "Gestión de Empleados",
        platform: "web",
        src: bazar_07,
      },
      {
        label: "Registro de secciones en Tienda",
        platform: "web",
        src: bazar_08,
      },
      {
        label: "Crear orden de compra",
        platform: "web",
        src: bazar_09,
      },
      {
        label: "Punto de venta del Sistema",
        platform: "web",
        src: bazar_10,
      },
    ],
    deepWikiURL:
      "https://deepwiki.com/Gabriel117343/SistemaGestionBazar-Moderno2024",
    sourceCode:
      "https://github.com/Gabriel117343/SistemaGestionBazar-Moderno2024",
  },
  {
    title: "Sistema de Gestión Hotelero",
    shortDescription:
      "Aplicación web para la gestión de reservas, clientes y habitaciones para la gestión de un Hotel",
    slug: "hotel-management",
    details: {
      overview:
        "Es un Sistema de gestión hotelero que desarrolle en mi carrera de ingeniería en informática. Aprendí a implementar formularios, autenticar usuarios, crear interfaces de usuario y gestionar el proyecto en GitHub. \n\nEste proyecto fue un gran aprendizaje para mí, por ser el primer proyecto que desarrolle. ",
      duration: "4+ meses",
      role: "Desarrollador Full Stack",
      responsibilities: [
        "Implementación de formularios y validaciones",
        "Integración de APIs REST con serialización",
        "Autenticación basada en tokens",
        "construir las interfaces de usuario",
        "Refactorizar el código",
        "Gestionar el proyecto en GitHub",
        "Definición de requisitos y liderazgo del proyecto",
        "Consumir endpoints de APIs REST",
        "Construir las vistas del backend",
        "Crear el diseño de la base de datos",
      ],
    },
    images: [
      {
        label: "Página principal del Sistema",
        platform: "web",
        src: hotel_01,
      },
      {
        label: "Proceso de CheckIn de clientes",
        platform: "web",
        src: hotel_02,
      },
      {
        label: "Modulo de Recepción",
        platform: "web",
        src: hotel_03,
      },
      {
        label: "Dashboard de los KPIs del Sistema",
        platform: "web",
        src: hotel_04,
      },
    ],
    techs: [
      { label: "React 18", Icon: ReactSvg, showInOverview: true },
      { label: "Bootstrap", Icon: BootstrapSvg, showInOverview: true },
      { label: "SQLite", Icon: SqlLiteSvg, showInOverview: true },
      { label: "JavaScript", Icon: JavaScriptSvg, showInOverview: true },
      { label: "Python", Icon: PythonSvg, showInOverview: false },
      { label: "Django Rest Framework", Icon: DjangoSvg, showInOverview: true },

      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: false },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
      {
        label: "GitHub",
        Icon: GitHubSvg,
        showInOverview: false,
      },
    ],
    deepWikiURL:
      "https://deepwiki.com/Gabriel117343/SistemaGestionHotelAricaProyecto",
    sourceCode:
      "https://github.com/Gabriel117343/SistemaGestionHotelAricaProyecto",
    dateFrom: "2023-08-01",
    dateTo: "2023-12-29",
  },
  {
    title: "Aplicación de la NASA",
    shortDescription:
      "Aplicación Movil que utiza la API de la NASA para obtener datos astrónomicos diarios, incluyendo imágenes y videos, que se presentan a los usuarios de manera atractiva.",
    details: {
      overview:
        "Esta aplicación aplicación permite a los usuarios ver las imagenes y videos del día gracias a la API de la NASA. \n\n Desarrollar proyecto me ayudó a mejorar mis habilidades en el desarrollo de aplicaciones móviles y en la integración de APIs",
      duration: "1+ meses",
      responsibilities: [
        "Estructurar el proyecto con React Native",
        "Integrar la API de la NASA para obtener datos astronómicos diarios",
        "Implementar la navegación entre pantallas utilizando React Navigation",
        "Crear una interfaz de usuario atractiva y fácil de usar utilizando componentes de React Native",
        "Implementar la lógica para mostrar imágenes y videos de la NASA en la aplicación",
        "Implementar la funcionalidad de blurr para las imágenes y videos",
        "Crear mi propia librería para manejar las notificaciones Toast @react-native-toast-lite",
      ],
      role: "Desarrollador Front-End",
    },
    images: [
      {
        label: "Vistas generales de la Aplicación",
        platform: "mobile",
        src: nasa_ap_01,
      },
      {
        label: "Menú de la Aplicación",
        platform: "mobile",
        src: nasa_ap_02,
      },
    ],
    slug: "nasa-app",
    techs: [
      { label: "React Native", Icon: ReactSvg, showInOverview: true },
      { label: "JavaScript", Icon: JavaScriptSvg, showInOverview: true },
      { label: "TypeScript", Icon: TypeScriptSvg, showInOverview: true },
      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: true },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
      {
        label: "GitHub",
        Icon: GitHubSvg,
        showInOverview: false,
      },
    ],
    dateFrom: "20234-06-01",
    dateTo: "2023-07-01",
    sourceCode: "https://github.com/Gabriel117343/Aplicacion-de-la-Nasa",
    deepWikiURL: "https://deepwiki.com/Gabriel117343/Aplicacion-de-la-Nasa",
  },
  {
    title: "React Magic Search Params",
    shortDescription:
      "Librería de React para manejar los query params de la URL de forma sencilla y gracias al autocompletado de TypeScript.",
    slug: "react-magic-search-params",
    details: {
      duration: "1+ semanas",
      overview:
        "Desarrolle esta librería para facilitar el manejo de los query params en las URLs de mis proyectos con React. \n\nLa librería permite manejar los query params de forma sencilla y gracias al autocompletado de TypeScript, es fácil de usar. \n\nEstá publicada en npm y tiene una buena documentación.",
      role: "Desarrollador Front-End",
      responsibilities: [
        "Investigar el gestor de paquetes npm y como publicar una librería",
        "Crear un Hook para manejar los query params de la URL",
        "Crear una página interactiva para mostra el funcionamiento de la librería",
        "Crear la documentación detallada de la librería",
        "Desplegar la página interactiva en Netlify",
        "Crear un video demostrativo de la librería",
      ],
    },
    images: [
      {
        label: "Librería en NPM",
        platform: "web",
        src: react_magic_search_params_01,
      },
      {
        label: "Ejemplo de Código de la librería",
        platform: "web",
        src: react_magic_search_params_02,
      },
    ],
    techs: [
      { label: "React 18", Icon: ReactSvg, showInOverview: true },
      { label: "TypeScript", Icon: TypeScriptSvg, showInOverview: true },
      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: false },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
      {
        label: "GitHub",
        Icon: GitHubSvg,
        showInOverview: true,
      },
      {
        label: "Netlify",
        Icon: NetlifySvg,
        showInOverview: true,
      },
    ],
    dateFrom: "2024-09-01",
    dateTo: "2024-09-15",
    sourceCode: "https://github.com/Gabriel117343/react-magic-search-params",
    deepWikiURL: "https://deepwiki.com/Gabriel117343/react-magic-search-params",
    liveDemo: "https://react-magic-search-params.netlify.app/",
  },
  {
    title: "Mi Portafolio",
    slug: "portfolio",
    shortDescription:
      "Portafolio personal desarrollado con Next.js 15, TypeScript y Tailwind CSS 4.",
    details: {
      duration: "1+ meses",
      overview:
        "Cree mi propio portafolio desde 0,  utilizando Next.js 15, TypeScript y Tailwind CSS 4. \n\nEl portafolio es completamente responsivo y tiene un diseño atractivo y moderno. \n\nAdemás, he implementado una sección de proyectos donde muestro mis trabajos más destacados y una sección de contacto donde los usuarios pueden enviarme un mensaje.",
      role: "Desarrollador Front-End",
      responsibilities: [
        "Crear el diseño del portafolio",
        "Implementar el diseño en Next.js 15",
        "Crear la sección de proyectos y contacto",
        "Implementar la navegación entre secciones",
        "Crear la sección de habilidades y tecnologías",
        "Crear la sección de experiencia y educación",
        "Cree la sección de autodocumentación",
        "Crear la sección de habilidades y tecnologías",
        "Desplegar el portafolio en Vercel",
        "Trabaje en los detalles de la UI/UX",
        "Cree componentes altamente reutilizables",
        "Agregar animacioes y efectos visuales sin afectar el rendimiento y SEO",
        "Asegure el correcto funcionamiento para lectores de pantalla",
      ],
    },
    images: [
      {
        label: "Vista de inicio del portafolio",
        platform: "web",
        src: portfolio_01,
      },
      {
        label: "Vista de Tecnologías del portafolio",
        platform: "web",
        src: portfolio_02,
      },
      {
        label: "Vista de contacto y proyectos",
        platform: "mobile",
        src: portfolio_03,
      },
    ],
    techs: [
      { label: "Next.js 15", Icon: NextJsIcon, showInOverview: true },
      { label: "Vercel", Icon: VercelSvg, showInOverview: true },
      { label: "TypeScript", Icon: TypeScriptSvg, showInOverview: true },
      { label: "TailwindCSS 4", Icon: TailwindSvg, showInOverview: true },
      { label: "Git", Icon: GitSvg, showInOverview: false },
      { label: "GitHub", Icon: GitHubSvg, showInOverview: false },
      { label: "CSS", Icon: CssSvg, showInOverview: false },
      { label: "HTML", Icon: HtmlSvg, showInOverview: false },
      {
        label: "Visual Studio Code",
        Icon: VisualStudioCodeSvg,
        showInOverview: false,
      },
    ],
    dateFrom: "2025-05-01",
    dateTo: "2025-05-28",
    sourceCode: "https://github.com/Gabriel117343/portafolio",
    liveDemo: "gabrielsoliz.dev",
    deepWikiURL: "https://deepwiki.com/Gabriel117343/portafolio",
  },
  
  // …más proyectos…
];
