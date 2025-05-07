"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@constants/projectsData";

import { GitHubSvg } from "@ui/svg/Technologies";
import { LiveWebSvg } from "@ui/svg/LiveWebSvg";


export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white text-center mb-8">
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
                bg-gray-800 
                hover:bg-gray-700 
                transition
                shadow-lg
              "
            >
              <div className="relative w-full h-48">
                <Image
                  src={firstImage}
                  alt={altText}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover/block:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center justify-start gap-3 mb-2">
                  {iconsToShow.map(({ label, Icon }) => (
                    <Icon key={label} className="size-5 md:size-6 contrast-75  group-hover/block:contrast-100"/>
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
