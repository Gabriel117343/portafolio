"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@constants/projectsData";
import { Lens } from "@/components/magicui/lens";
import { ArrowRightSvg } from "@ui/svg/ArrowRightSvg";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-8 md:px-12 py-12"
    >
      <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white text-center mb-12">
        Proyectos Destacados
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const firstImage = project.images[0].src;
          const altText = project.images[0].label;

          const iconsToShow = project.techs.filter(
            (tech) => tech.showInOverview === true
          );
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                group/block 
                block 
                overflow-hidden 
                rounded-xl 
                bg-transparent
                border border-gray-600
                shadow-2xl
               
                mask-alpha  mask-b-from-100% 
                mask-b-to-transparent
                transition
             
                hover:mask-b-from-90%
                relative
              "
            >
              <div
                className="bg-gradient-to-bl
                from-[#181838]
                via-[#355b81]
                to-[#010128] absolute inset-0 opacity-35"
              />
              <div className="relative w-full h-48 overflow-hidden">
                <Lens ariaLabel="lente" lensSize={100} zoomFactor={1.5}>
                  <Image
                    src={firstImage}
                    alt={altText}
                    placeholder="blur"
                    className="object-cover transition-transform duration-500  ease-in-out group-hover/block:scale-105"
                  />
                </Lens>
              </div>
              <div className="p-4 relative">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <div className="absolute right-0 top-0 z-40 mt-5 mr-2 invisible group-hover/block:visible hover:translate-x-3 ">
                  <ArrowRightSvg className="text-gray-300" />
                </div>
                <div className="flex items-center justify-start gap-3 mb-2">
                  {iconsToShow.map(({ label, Icon }) => (
                    <Icon
                      key={label}
                      className="size-5 md:size-6 contrast-75  group-hover/block:contrast-100"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
