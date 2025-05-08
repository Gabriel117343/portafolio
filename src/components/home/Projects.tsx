import React from "react";

import { projects } from "@constants/projectsData";
import { ProjectCard } from "@components/views/ProjectCard";

export const Projects: React.FC = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const firstImage = project.images[0].src;
        const altText = project.images[0].label;
        // Nota: no es posible pasar componentes directamente de - server - a - client - por lo que los iconos o se convierten a string o se buscan internamente en el cliente
        return (
          <ProjectCard
            description={project.shortDescription}
            label={altText}
            slug={project.slug}
            thumbnail={firstImage}
            title={project.title}
            key={project.slug}
          />
        );
      })}
    </div>
  );
};
