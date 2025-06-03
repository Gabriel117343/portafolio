import React from "react";
import { type Project } from "@constants/projectsData";

import { RevealOnScroll } from "@ui/RevealOnScroll";
import { ZoomableImage } from "@/components/views/ZoomableImage";
import { Lens } from "@components/magicui/lens";
import { InfoSvg } from "@ui/svg/InfoSvg";
import "./styles.css";
import { CustomModal } from "@ui/CustomModal";

interface ImagenGaleryProps {
  project: Project;
  infoText?: string;
}
export const ImagenGalery = ({ project, infoText }: ImagenGaleryProps) => {
  return (
    <>
      {infoText && (
        <div className="w-full text-left my-4 text-xs sm:text-sm text-cyan-300/60 italic sm:flex items-center justify-center gap-2 hover:text-cyan-400/80 transition-colors duration-200 ease-in-outmy-0 hidden">
          <InfoSvg className="size-4 text-cyan-300/80 " />
          {infoText}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2   2xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6 2xl:gap-8 items-center">
        {project.images.map(({ src, label, id }) => (
          <RevealOnScroll
            as={"article"}
            triggerOnce={false}
            hiddenClass="opacity-100 translate-y-12 scale-10 blur-2xl"
            visibleClass="opacity-100 translate-y-0 scale-100 blur-none"
            key={id.toString()}
            className="flex flex-col items-center border border-indigo-400/20 hover:border-indigo-300/30 rounded-xl p-4 bg-gradient-to-br
  from-gray-900/70 via-blue-900/80 to-black/90
  shadow-[0_0_30px_#1e3a8a50] hover:shadow-[0_0_40px_#3b82f680]
  transition-all duration-300 ease-in-out relative hover:scale-105
  group/img-proyecto max-w-[450px] w-full mx-auto"
          >
            <div className="relative w-full   min-h-52  max-h-52 hover:max-h-80 overflow-hidden hover:overflow-y-visible shadow-lg  transition-all duration-2000 ease-in-out group-hover/img-proyecto:scale-105  scrollbar-hidden ">
              <CustomModal className="absolute inset-0  w-[85vw] ">
                <Lens
                  lensColor="por algun motivo el agregar texto aquí causa un lensSize del 100%"
                  ariaLabel="lente"
                  lensSize={600}
                  zoomFactor={1.1}
                >
                  <ZoomableImage
                    src={src}
                    alt={label}
                    className="object-fill object-top hover:object-bottom  transition-all duration-2000 ease-in-out rounded-md h-full cursor-zoom-in
            "
                  />
                </Lens>
              </CustomModal>
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
