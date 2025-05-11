import React from "react";

import { projects, type Slugs } from "@constants/projectsData";

import { LineAbout } from "@components/views/lineAbout";
import { Description } from "@components/projects/Description";
import { ImagenGalery } from "@components/projects/ImagenGalery";
import { Architecture } from "@components/projects/Architecture";
import { Links } from "@components/projects/Links";
import { VideoProject } from "@components/projects/VideoProject";
import { DevinAiSvg } from "@ui/svg/DevinAiSvg";
import Link from "next/link";
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
      <section className="px-6 py-5 max-w-11/12 md:max-w-10/12 mx-auto space-y-12 group/project-galery">
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
      {project.deepWikiURL && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-white flex flex-row items-center  gap-2">
            <DevinAiSvg /> Documentación
            <small className="text-xs text-gray-500/80"> (DeepWiki AI)</small>
          </h2>

          <details className="mt-">
            <summary className="text-gray-200 cursor-pointer hover:text-cyan-400">
              <span className="text-cyan-400 cursor-pointer hover:text-cyan-400">
                ¿Qué es DeepWiki AI?
              </span>
            </summary>

            <p className="text-gray-200/90 hover:text-gray-200/100 mt-2 font-open-sans text-sm">
              Puedes ver la documentación del proyecto en <strong>DeepWiki AI</strong>, una
              herramienta de IA que genera documentación técnica de manera
              automática. Esta herramienta utiliza un modelo de lenguaje llamado <strong>Devin AI</strong> para analizar el código y generar documentación clara y
              concisa.
            </p>
          </details>

          <Link
            href={project.deepWikiURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Ver Documentación
          </Link>
        </section>
      )}

      {/* Enlaces al código y demo */}

      <section className="px-6 py-5 max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-semibold text-white">Enlaces</h2>
        <Links liveDemo={project.liveDemo} sourceCode={project.sourceCode} />
      </section>

      {/* Vídeo (opcional) */}
      {project.videoDemostration && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
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
