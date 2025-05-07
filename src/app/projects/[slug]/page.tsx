import React from "react";
import Image from "next/image";
import { projects, type Slugs } from "@constants/projectsData";
import { TypingAnimation } from "@components/magicui/typing-animation";
import { ZoomableImage } from "@/components/projects/ZoomableImage";
import { ZoomSvg } from "@ui/svg/ZoomSvg";
import { GitHubSvg } from "@ui/svg/Technologies";
import { LiveWebSvg } from "@ui/svg/LiveWebSvg";

import HeroVideoDialog from "@components/magicui/hero-video-dialog";
import { Lens } from "@components/magicui/lens";
import { MouseMoveSvg } from "@ui/svg/MouseMoveSvg";

import { LineAbout } from "@components/views/lineAbout";

interface Props {
  params: Promise<{ slug: Slugs }>;
}

const ProjectDetail = async ({ params }: Props) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return <p className="text-center py-12">Proyecto no encontrado</p>;

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
      {/* Título y breve descripción */}
      <header className="space-y-2">
        <h1 className="text-4xl font-montserrat font-bold text-white">
          {project.title}
        </h1>

        <div className="min-h-10">
          <TypingAnimation duration={20} className="text-gray-300 text-lg">
            {project.shortDescription}
          </TypingAnimation>
        </div>
      </header>

      {/* Detalles del proyecto */}
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-200">
        <div>
          <dt className="font-bold">Responsabilidades:</dt>
          <dd className="mt-1 list-disc list-inside space-y-1 font-inter ">
            {project.details.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </dd>
        </div>
        <div>
          <dt className="font-bold t">Descripción:</dt>
          <dd className="mt-1 font-inter">{project.details.overview}</dd>
        </div>

        <div>
          <dt className="font-bold">Duración:</dt>
          <dd className="mt-1  font-inter">{project.details.duration}</dd>
        </div>
        <div>
          <dt className="font-bold">Rol:</dt>
          <dd className="mt-1  font-inter">{project.details.role}</dd>
        </div>
      </dl>

      {/* Galería de imágenes */}
      <h2 className="text-2xl font-semibold text-white">Galería</h2>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.images.map(({ src, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  border-b-1 border-t-2  border-t-gray-300/60 border-b-gray-200/60 rounded-lg p-4  bg-gradient-to-br
          from-gray-800/70 via-blue-950/110 to-gray-900/80
          shadow-lg hover:contrast-[1.1] transition-all hover:border-b-gray-200/80 hover:border-t-gray-300/70 duration-300 ease-in-out relative hover:scale-105 group/img-proyecto"
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
          </div>
        ))}
      </article>

      {/* Tecnologías */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Tecnologías</h2>
        <div className="flex flex-wrap gap-4">
          {project.techs.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full"
            >
              <t.Icon className="w-5 h-5" />
              <span className="text-sm text-gray-200">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arquitectura (opcional) */}
      {project.architecture && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Arquitectura</h2>
          <p className="text-gray-300">
            {project.architecture.generalImage?.description}
          </p>

          {project.architecture.generalImage ? (
            <div className="flex flex-col items-center relative group/architecture">
              <div className="absolute left-0 top-0 z-40 ms-5 mt-5 opacity-60 group-hover/architecture:opacity-90 group-hover/architecture:scale-105 transition-opacity duration-300 ease-in-out">
                <ZoomSvg className="w-8 h-8 text-gray-300" />
              </div>
              <div className="absolute left-0 bottom-0 z-40 ms-5 mt-5 opacity-60 group-hover/architecture:opacity-90 group-hover/architecture:scale-105 transition-opacity duration-300 ease-in-out -translate-y-14">
                <MouseMoveSvg className="w-10 h-10 text-gray-300 animate-bounce" />
              </div>
              <Lens
                lensColor="por algun motivo el agregar texto aquí causa un lensSize del 100%"
                ariaLabel="lente"
                lensSize={600}
                zoomFactor={1.5}
              >
                <ZoomableImage
                  src={project.architecture.generalImage.src}
                  alt={project.architecture.generalImage.label}
                  classNameContainer="relative w-full min-h-[500px] rounded-lg overflow-auto shadow-lg"
                />
              </Lens>

              <span className="mt-2 text-gray-400">
                {project.architecture.generalImage.label}
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
              {project.architecture.frontEndImage && (
                <div className="flex flex-col items-center">
                  <div className="relative w-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.architecture.frontEndImage.src}
                      alt={project.architecture.frontEndImage.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="mt-2 text-gray-400">
                    {project.architecture.frontEndImage.label}
                  </span>
                </div>
              )}
              {project.architecture.backEndImage && (
                <div className="flex flex-col items-center">
                  <div className="relative w-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.architecture.backEndImage.src}
                      alt={project.architecture.backEndImage.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="mt-2 text-gray-400">
                    {project.architecture.backEndImage.label}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Enlaces al código y demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Enlaces</h2>
        <div className="flex flex-wrap gap-6 md:gap-12 lg:gap-16">
          {/* Enlace al código fuente */}
          {project.sourceCode ? (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <GitHubSvg className="size-6 md:size-7" />
              <span>Código en GitHub</span>
            </a>
          ) : (
            <div className="flex items-center gap-2 text-gray-500 relative">
              <GitHubSvg className="size-6 md:size-7 opacity-50" />
              <span>Repositorio privado </span>
              <small className="absolute text-nowrap translate-y-6 italic text-gray-400/90 text-xs">
                puedes pedirme una vista previa contactandome
              </small>
            </div>
          )}

          {/* Enlace a live demo */}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <LiveWebSvg className="w-6 h-6" />

              <span className=" relative">
                Ver Live Demo
                <div className=" absolute size-3 right-0 top-0 bottom-0 rounded-full animate-pulse bg-green-700 my-auto -mr-4 opacity-80 border border-gray-300 " />
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-2 text-gray-500">
              <LiveWebSvg className="w-6 h-6 opacity-50" />
              <span className="relative">
                Live demo no disponible{" "}
                <div className=" absolute size-3 right-0 top-0 bottom-0 rounded-full animate-pulse bg-red-700 my-auto -mr-4 opacity-60 border border-gray-300 " />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Vídeo (opcional) */}
      {project.videoDemostration && (
        <>
          <LineAbout />
          <article className="w-full flex flex-col items-center gap-4 mt-8">
            <h3 className="text-2xl font-semibold text-white">
              Demostración del proyecto
            </h3>
            <p className="font-inter text-gray-200">
              {project.videoDemostration?.description}
            </p>
            <HeroVideoDialog
              className="dark:block w-full"
              animationStyle="top-in-bottom-out"
              videoSrc={project.videoDemostration.src}
              thumbnailSrc={project.videoDemostration.thumbnail}
              thumbnailAlt={
                project.videoDemostration?.description ??
                "Video de demostración del proyecto"
              }
            />
          </article>
        </>
      )}
    </section>
  );
};

export default ProjectDetail;
