import React from "react";
import { GitHubSvg } from "@ui/svg/Technologies";
import { LiveWebSvg } from "@ui/svg/LiveWebSvg";

interface LinksProps {
  sourceCode?: string;
  liveDemo?: string;
}

export const Links = ({ sourceCode, liveDemo }: LinksProps) => {
  return (
    <div className="flex flex-wrap gap-6 md:gap-12 lg:gap-16">
      {/* Enlace al código fuente */}
      {sourceCode ? (
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
        >
          <GitHubSvg className="size-6 md:size-7" />
          <span>Código en GitHub</span>
        </a>
      ) : (
        <div className="flex items-center gap-2 text-gray-500 relative">
          <GitHubSvg className="size-6 md:size-7 opacity-50" />
          <span>Repositorio privado </span>
          <small className="absolute text-nowrap translate-y-6 italic text-gray-400/90 text-xs">
            puedes pedirme una vista previa contactandome
          </small>
        </div>
      )}

      {/* Enlace a live demo */}
      {liveDemo ? (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
        >
          <LiveWebSvg className="w-6 h-6" />

          <span className=" relative">
            Ver Live Demo
            <div className=" absolute size-3 right-0 top-0 bottom-0 rounded-full animate-pulse bg-green-700 my-auto -mr-4 opacity-80 border border-gray-300 " />
          </span>
        </a>
      ) : (
        <div className="flex items-center gap-2 text-gray-500">
          <LiveWebSvg className="w-6 h-6 opacity-50" />
          <span className="relative">
            Live demo no disponible{" "}
            <div className=" absolute size-3 right-0 top-0 bottom-0 rounded-full animate-pulse bg-red-700 my-auto -mr-4 opacity-60 border border-gray-300 " />
          </span>
        </div>
      )}
    </div>
  );
};
