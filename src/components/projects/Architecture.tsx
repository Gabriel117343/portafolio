import React from "react";
import { ZoomableImage } from "@/components/views/ZoomableImage";
import { ZoomSvg } from "@ui/svg/ZoomSvg";
import { Lens } from "@components/magicui/lens";
import { MouseMoveSvg } from "@ui/svg/MouseMoveSvg";
import { type Project } from "@constants/projectsData";
import Image from "next/image";
interface TechsProps {
  project: Project;
}

export const Architecture = ({ project }: TechsProps) => {
  return (
    <article className="space-y-4">
      <p className="text-gray-300">
        {project.architecture?.generalImage?.description}
      </p>

      {project.architecture?.generalImage ? (
        <div className="flex flex-col items-center relative group/architecture">
          <div className="absolute left-0 top-0 z-40 ms-5 mt-5 opacity-60 group-hover/architecture:opacity-90 group-hover/architecture:scale-105 transition-opacity duration-300 ease-in-out">
            <ZoomSvg className="w-8 h-8 text-gray-300" />
          </div>
          <div className="absolute left-0 bottom-0 z-40 ms-5 mt-5 opacity-60 group-hover/architecture:opacity-90 group-hover/architecture:scale-105 transition-opacity duration-300 ease-in-out -translate-y-14">
            <MouseMoveSvg className="w-10 h-10 text-gray-300 animate-bounce" />
          </div>
          <Lens
            lensColor="por algun motivo el agregar texto aquí causa un lensSize del 100%"
            ariaLabel="lente"
            lensSize={600}
            zoomFactor={1.5}
          >
            <ZoomableImage
              src={project.architecture.generalImage.src}
              alt={project.architecture.generalImage.label}
              classNameContainer="relative w-full min-h-[500px] rounded-lg overflow-auto shadow-lg"
            />
          </Lens>

          <span className="mt-2 text-gray-400">
            {project.architecture.generalImage.label}
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
          {project.architecture?.frontEndImage && (
            <div className="flex flex-col items-center">
              <div className="relative w-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.architecture?.frontEndImage?.src}
                  alt={project.architecture?.frontEndImage?.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-2 text-gray-400">
                {project.architecture.frontEndImage.label}
              </span>
            </div>
          )}
          {project.architecture?.backEndImage && (
            <div className="flex flex-col items-center">
              <div className="relative w-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.architecture?.backEndImage?.src}
                  alt={project.architecture?.backEndImage?.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-2 text-gray-400">
                {project.architecture?.backEndImage.label}
              </span>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
