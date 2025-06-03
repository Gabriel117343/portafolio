import React from "react";
import { PROJECTS } from "@constants/projectsData";
import { ProjectCard } from "@components/views/ProjectCard";
import { useTranslations } from "next-intl";

export const Projects: React.FC = () => {
  const t = useTranslations(`projects`);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => {
        const firstImage = project.images[0].src;
        // De esta forma solo si esta disponible la traducción se usa, si no se usa el valor por defecto
        // Si no se tienen las traduccones Ts avisará de que ese proyecto no tiene traducción (es.json, en.json).
        const title = t.has(`${project.slug}.title`)
          ? t(`${project.slug}.title`)
          : project.title;
        const description = t.has(`${project.slug}.shortDescription`)
          ? t(`${project.slug}.shortDescription`)
          : project.shortDescription;
        const label = t.has(`${project.slug}.images.0.label`)
          ? t(`${project.slug}.images.0.label`)
          : project.images[0].label;

        // Nota: no es posible pasar componentes directamente de - server - a - client - por lo que los iconos o se convierten a string o se buscan internamente en el cliente
        return (
          <ProjectCard
            description={description}
            label={label}
            slug={project.slug}
            thumbnail={firstImage}
            title={title}
            liveDemo={project.liveDemo}
            key={project.slug}
          />
        );
      })}
    </div>
  );
};
