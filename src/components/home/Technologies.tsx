// src/components/Technologies.tsx
"use client";

import React from "react";
import { IconCloud } from "@components/magicui/icon-cloud";
import Link from "next/link";
import {
  HtmlSvg,
  CssSvg,
  JavaScriptSvg,
  ReactSvg,
  TypeScriptSvg,
  BootstrapSvg,
  TailwindSvg,
  GitSvg,
  GitHubSvg,
  LinuxSvg,
  PostgresSqlSvg,
  SqlLiteSvg,
  PythonSvg,
  NextJsIcon,
  DjangoSvg,
  SqlSvg, 
  ViteSvg,
  JwtSvg,
   NetlifySvg,
   VercelSvg,
   VisualStudioCodeSvg
} from "@ui/svg/Technologies";

interface Tech {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const TECHS: Tech[] = [
  { label: "HTML", Icon: HtmlSvg },
  { label: "Next.js 15", Icon: NextJsIcon },
  { label: "CSS", Icon: CssSvg },
  { label: "GitHub", Icon: GitHubSvg },
  { label: "JavaScript", Icon: JavaScriptSvg },

  { label: "React 19", Icon: ReactSvg },
  { label: "TypeScript", Icon: TypeScriptSvg },
  { label: "Bootstrap", Icon: BootstrapSvg },
  { label: "TailwindCSS 4", Icon: TailwindSvg },
  { label: "Git", Icon: GitSvg },
  { label: "Linux", Icon: LinuxSvg },
  { label: "PostgresSQL", Icon: PostgresSqlSvg },
  { label: "SQLite", Icon: SqlLiteSvg },
  { label: "Python", Icon: PythonSvg },
  { label: "Django", Icon: DjangoSvg },
  { label: "SQL", Icon: SqlSvg },
  { label: "Vite", Icon: ViteSvg },
  { label: "JWT Auth", Icon: JwtSvg },
  { label: "Netlify", Icon: NetlifySvg },
  { label: "Vercel", Icon: VercelSvg },
  { label: "Visual Studio Code", Icon: VisualStudioCodeSvg },
  
];

export const Technologies: React.FC = () => {
  // Prepara los iconos para la nube
  const cloudIcons = TECHS.map((tech, i) => (
    <tech.Icon key={i} width={60} height={60} className="text-cyan-400" />
  ));

  return (
    <section
      id="technologies"
      className="w-full max-w-4xl mx-auto px-4 py-8 relative z-30 @container/technologies"
    >
      <Link href="#technologies" className=" ">
        <h3 className="text-base @md/technologies:text-2xl @lg/technologies:text-3xl font-bold text-white text-center mb-6 opacity-90">
          Tecnologías y Herramientas
        </h3>
      </Link>

      <p className="text-gray-300 text-center mb-4 text-xs @sm/technologies:text-sm @md/technologies:text-base @lg/technologies:text-lg font-open-sans">
        Estas son algunas de las tecnologías que manejo y utilizo en mis proyectos.
      </p>
      <p className="text-gray-300 text-center mb-4 text-xs @sm/technologies:text-sm @md/technologies:text-base @lg/technologies:text-lg font-montserrat">
        ¡Siempre estoy aprendiendo y mejorando mis habilidades!
      </p>
      <div
        className="
          relative 
          w-full 
          py-5
          rounded-2xl border border-cyan-600 
          bg-gradient-to-br from-gray-700 via-gray-800 to-black 
          shadow-xl overflow-hidden
             starting:scale-x-0 starting:opacity-0
        transform transition-transform duration-500 ease-out
        hover:scale-x-105 contrast-125
        hover:shadow-2xl
        "
      >
        {/* Fondo estrellado sutil */}
        <div
          className="
            absolute inset-0 
            bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_70%)] 
            opacity-20 pointer-events-none
          "
        />

        {/* NUBE FLOTANTE */}
        <div className="absolute inset-0 opacity-30 pointer-events-none translate-x-2/5">
          <IconCloud icons={cloudIcons} />
        </div>

        {/* GRID DE ICONOS CON LABELS */}
        <article
          className="
            relative z-10 
            grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 
            gap-4 items-center justify-items-center 
            h-full @container
          "
        >
          {TECHS.map(({ label, Icon }, idx) => {
            const rotateIzqOrDer =
              Math.random() > 0.5
                ? "group-hover/technologi:rotate-6"
                : "group-hover/technologi:-rotate-6";
            return (
              <div
                key={idx}
                className="flex flex-col items-center space-y-1  group/technologi"
              >
                <Icon
                  className={`size-8 @md:size-10 @lg:size-11 @xl:size-12 transition-transform duration-200 group-hover/technologi:contrast-125  group-hover/technologi:scale-110 ${rotateIzqOrDer}
     
                cursor-crosshair
                `}
                />
                <span className="text-xs text-gray-200 group-hover/technologi:font-semibold duration-200   transition-all ">
                  {label}
                </span>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
