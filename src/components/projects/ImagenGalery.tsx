import React from "react";
import { type Project } from "@constants/projectsData";
import Image from "next/image";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import "./styles.css";

interface ImagenGaleryProps {
  project: Project;
}
export const ImagenGalery = ({ project }: ImagenGaleryProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2   2xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6 2xl:gap-8 items-center">
        {project.images.map(({ src, label }) => (
          <RevealOnScroll
            as={"article"}
            triggerOnce={false}
            hiddenClass="opacity-100 translate-y-12 scale-10 blur-2xl"
            visibleClass="opacity-100 translate-y-0 scale-100 blur-none"
            key={label}
            className="flex flex-col items-center border border-indigo-400/20 hover:border-indigo-300/30 rounded-xl p-4 bg-gradient-to-br
  from-gray-900/70 via-blue-900/80 to-black/90
  shadow-[0_0_30px_#1e3a8a50] hover:shadow-[0_0_40px_#3b82f680]
  transition-all duration-300 ease-in-out relative hover:scale-105
  group/img-proyecto max-w-[450px] w-full mx-auto  "
          >
            <div className="relative w-full   min-h-52  max-h-52 hover:max-h-80 overflow-hidden hover:overflow-y-visible shadow-lg  transition-all duration-2000 ease-in-out group-hover/img-proyecto:scale-105 cursor-crosshair scrollbar-hidden ">
              <Image
                src={src}
                alt={label}
                loading="lazy"
                className="object-fill object-top hover:object-bottom  transition-all duration-2000 ease-in-out rounded-md h-full min-h-52  
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
