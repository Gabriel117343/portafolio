"use client";
import React from "react";

import { projects } from "@constants/projectsData";
import { ProjectCard } from "@components/views/ProjectCard";

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
            <ProjectCard
              description={project.shortDescription}
              iconsToShow={project.techs}
              label={altText}
              slug={project.slug}
              thumbnail={firstImage}
              title={project.title}
              key={project.slug}
            />
          );
        })}
      </div>
    </section>
  );
};
