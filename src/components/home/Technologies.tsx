import React, { FC } from "react";
import Link from "next/link";

import { IconCloud } from "@components/magicui/icon-cloud";
import { type Tsvgprops } from "@ui/svg/types";
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
  VisualStudioCodeSvg,
} from "@ui/svg/Technologies";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RevealOnScroll } from "@ui/RevealOnScroll";

interface Tech {
  label: string;
  Icon: FC<Tsvgprops>;
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

// pre-generate cloud icons for background
const cloudIcons = TECHS.map((tech, i) => (
  <tech.Icon key={i} width={60} height={60} />
));

export const Technologies: React.FC = () => {
  // este texto sale en el SSR, pero en el cliente se anima
  const text = "¡Siempre estoy aprendiendo y mejorando mis habilidades!";
  const visibleClassName = "opacity-100 translate-y-0 ";

  const hiddenClassName = "opacity-0 translate-y-12";
  return (
    <RevealOnScroll
      hiddenClass={hiddenClassName}
      visibleClass={visibleClassName}
      className=" transition-all duration-900 ease-out group/technologies"
      triggerOnce={false}
      threshold={0.2}
    >
      <div className="flex justify-center  mb-6 ">
        <Link href="#technologies">
          <SparklesText
            sparklesCount={3}
            colors={{ first: "#2E86AB", second: "#A5F3FC" }}
            className="inline text-[19px]  @3xs/technologies:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-centeropacity-85 group-hover/technologies:opacity-95 transition-all duration-500 ease-in-out text-pretty translate-y"
          >
            Tecnologías y Herramientas
          </SparklesText>
        </Link>
      </div>
      <p className="text-gray-300 text-center mb-4 text-xs sm:text-sm md:text-base lg:text-lg font-open-sans">
        Estas son algunas de las tecnologías que manejo y utilizo en mis
        proyectos.
      </p>
      <RevealOnScroll
        hiddenClass="opacity-0 translate-y-12 "
        visibleClass="opacity-100 translate-y-0"
        triggerOnce={true}
        threshold={0.4}
        className="mb-4"
      >
        <TypingAnimation
          className="text-gray-300 text-center text-xs sm:text-sm md:text-base lg:text-lg font-montserrat font-normal"
          duration={50}
        >
          {text}
        </TypingAnimation>
      </RevealOnScroll>

      <div className="relative w-full py-5 rounded-2xl border border-cyan-600 bg-gradient-to-br from-gray-700 via-gray-800 to-black shadow-xl overflow-hidden transform transition-transform duration-500 ease-out hover:scale-x-105 hover:shadow-2xl">
        {/* fondo radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_70%)] opacity-20 pointer-events-none" />

        {/* nube flotante */}
        <div className="absolute inset-0 opacity-30 pointer-events-none translate-x-2/5">
          <IconCloud icons={cloudIcons} />
        </div>
        <article className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 lg:gap-4 items-center justify-items-center ">
          {TECHS.map(({ label, Icon }, idx) => {
            const rotateClass =
              Math.random() > 0.5
                ? "group-hover/tech:rotate-6"
                : "group-hover/tech:-rotate-6";
            return (
              <div
                key={idx}
                className="flex flex-col items-center space-y-1 group/tech"
              >
                <Icon
                  className={`
                        size-8 md:size-10 lg:size-11 xl:size-12
                        transition-transform duration-200
                        group-hover/tech:contrast-125
                        group-hover/tech:scale-110
                        ${rotateClass}
                        cursor-crosshair
                      `}
                />
                <span className="text-xs text-gray-200 group-hover/tech:font-semibold transition-all duration-200 text-center">
                  {label}
                </span>
              </div>
            );
          })}
        </article>
      </div>
    </RevealOnScroll>
  );
};
