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
} from "@ui/svg/Technologies";

export type Platforms = "web" | "mobile" | "desktop" | "all";

export type Slugs =
  | "sica-system"
  | "nasa-app"
  | "library-react-params"
  | "hotel-management"
  | "bazaar-management";

type Date = `${number}${number}-${number}${number}-${number}${number}`;

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
  | "Django Rest Framework";


export type VideoDemostration = {
  src: string;
  thumbnail: string;
  description?: string;
}

export interface Project {
  slug: Slugs;
  title: string;
  shortDescription: string;

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

  sourceCode?: SourceCode;
  liveDemo?: string;
}

// Nota: Siempre la primera imagen del array será la que se mostrará en el slider de la vista general de proyectos
// y la que se mostrará en la vista de detalle del proyecto. El resto de imágenes son opcionales y se mostrarán en el slider de la vista de detalle del proyecto.

export const projects: Project[] = [
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
  // …más proyectos…
];
