import React from "react";
import { type Project } from "@constants/projectsData";
import Image from "next/image";
import { RevealOnScroll } from "@ui/RevealOnScroll";

interface ImagenGaleryProps {
  project: Project;
}
export const ImagenGalery = ({ project }: ImagenGaleryProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2   2xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6 2xl:gap-8 ">
        {project.images.map(({ src, label }) => (
          <RevealOnScroll
            as={"article"}
            triggerOnce={false}
   
  
            hiddenClass="opacity-100 translate-y-12 scale-10 blur-2xl"
            visibleClass="opacity-100 translate-y-0 scale-100 blur-none"
            key={label}
            className="flex flex-col items-center  border-b-1 border-t-2  border-t-gray-300/60 border-b-gray-200/60 rounded-lg p-4  bg-gradient-to-br
          from-gray-800/70 via-blue-950/110 to-gray-900/80
          shadow-lg hover:contrast-[1.1] transition-all hover:border-b-gray-200/80 hover:border-t-gray-300/70 duration-300 ease-in-out relative hover:scale-105 group/img-proyecto max-w-[450px] w-full mx-auto"
          >
            <div className="relative w-full h-52 overflow-hidden shadow-lg ">
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover object-top  transition-all duration-2000 ease-in-out rounded-md   hover:object-center
            "
              />
            </div>
            <span className="mt-2 text-sm text-gray-400 group-hover/img-proyecto:font-semibold">
              {label}
            </span>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
};
