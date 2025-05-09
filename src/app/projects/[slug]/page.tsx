import React from "react";

import { projects, type Slugs } from "@constants/projectsData";

import { LineAbout } from "@components/views/lineAbout";
import { Description } from "@components/projects/Description";
import { ImagenGalery } from "@components/projects/ImagenGalery";
import { Architecture } from "@components/projects/Architecture";
import { Links } from "@components/projects/Links";
import { VideoProject } from "@components/projects/VideoProject";

interface Props {
  params: Promise<{ slug: Slugs }>;
}

const ProjectDetail = async ({ params }: Props) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return <p className="text-center py-12">Proyecto no encontrado</p>;

  return (
    <>
      {/* Título y breve descripción */}

      <article className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        <Description project={project} />
      </article>

      {/* Tecnologías */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Tecnologías</h2>
        <div className="flex flex-wrap gap-4">
          {project.techs.map((t) => (
            <article
              key={t.label}
              className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full"
            >
              <t.Icon className="w-5 h-5" />
              <span className="text-sm text-gray-200">{t.label}</span>
            </article>
          ))}
        </div>
      </section>
      <LineAbout />
      <section className="px-6 py-5 max-w-10/12 mx-auto space-y-12 group/project-galery">
        <h2 className="text-2xl font-semibold text-white text-center">
          Galería
        </h2>
        <ImagenGalery project={project} />
      </section>

      {/* Arquitectura (opcional) */}
      {project.architecture && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold text-white">Arquitectura</h2>
          <Architecture project={project} />
        </section>
      )}

      {/* Enlaces al código y demo */}

      <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-semibold text-white">Enlaces</h2>
        <Links liveDemo={project.liveDemo} sourceCode={project.sourceCode} />
      </section>

      {/* Vídeo (opcional) */}
      {project.videoDemostration && (
        <section  className="px-6 py-12 max-w-4xl mx-auto space-y-12">
          <LineAbout />
          <VideoProject
            src={project.videoDemostration.src}
            thumbnail={project.videoDemostration.thumbnail}
            description={project.videoDemostration.description}
          />
        </section>
      )}
    </>
  );
};

export default ProjectDetail;
