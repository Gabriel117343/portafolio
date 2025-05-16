import React from "react";

import { PROJECTS, type Slugs } from "@constants/projectsData";
import { Metadata } from "next";
import { LineAbout } from "@components/views/lineAbout";
import { Description } from "@components/projects/Description";
import { ImagenGalery } from "@components/projects/ImagenGalery";
import { Architecture } from "@components/projects/Architecture";
import { Links } from "@components/projects/Links";
import { VideoProject } from "@components/projects/VideoProject";
import { DevinAiSvg } from "@ui/svg/DevinAiSvg";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import { ArrowDoubleSvg } from "@ui/svg/ArrowDoubleSvg";
import Link from "next/link";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { type Project } from "@constants/projectsData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: Slugs; locale: Locale }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  // Nota: Dará error de ts (No overload) porque espera que en es.json y en.json existan las traducciones de cada proyecto de @PROJECTS
  // pero en realidad no siempre tiene que existir, ya que se generan dinámicamente a medida que se van traduciendo los proyectos
  const t = await getTranslations({
    locale,
    namespace: `projects.${slug}`,
  });
  return {
    title: t(`title`),
    description: t(`shortDescription`),
  };
}

async function getLocalizedProject(
  locale: Locale,
  project: Project
): Promise<Project> {
  const t = await getTranslations({ locale, namespace: "projects" });

  // Nota: con la técnica de propagación condiconal se asegura de que, si no existe la traducción, se deja el valor original
  const responsabilidadesToArray = () => {
    const arr: Array<string> = [];
    if (!t.has(`${project.slug}.details.responsibilities`))
      return project.details.responsibilities;
    // si no es un array, se convierte
    project.details.responsibilities.map((_, index) => {
      arr.push(t(`${project.slug}.details.responsibilities.${index}`));
    });
    return arr;
  };
  return {
    ...project,
    ...(t.has(`${project.slug}.title`) && {
      title: t(`${project.slug}.title`),
    }),
    ...(t.has(`${project.slug}.shortDescription`) && {
      shortDescription: t(`${project.slug}.shortDescription`),
    }),
    details: {
      ...project.details,
      // en caso haya una traducción disponible se usa, sino se deja el original
      ...(t.has(`${project.slug}.details.overview`) && {
        overview: t(`${project.slug}.details.overview`),
      }),
      ...(t.has(`${project.slug}.details.duration`) && {
        duration: t(`${project.slug}.details.duration`),
      }),
      ...(t.has(`${project.slug}.details.role`) && {
        role: t(`${project.slug}.details.role`),
      }),

      responsibilities: responsabilidadesToArray(),
    },
    images: project.images.map((img, i) => ({
      ...img,
      label: t(`${project.slug}.images.${i}.label`),
    })),
    architecture: project.architecture
      ? {
          ...project.architecture,
          generalImage: project.architecture.generalImage && {
            ...project.architecture.generalImage,
            ...(t.has(`${project.slug}.architecture.generalImage.label`) && {
              label: t(`${project.slug}.architecture.generalImage.label`),
            }),
            ...(t.has(`sica-system.architecture.generalImage.description`) && {
              description: t(
                `${project.slug}.architecture.generalImage.description`
              ),
            }),
          },
        }
      : undefined,
    videoDemostration: project.videoDemostration && {
      ...project.videoDemostration,
      ...(t.has(`${project.slug}.videoDemostration.description`) && {
        description: t(`${project.slug}.videoDemostration.description`),
      }),
    },
  };
}

interface Props {
  params: Promise<{ slug: Slugs; locale: Locale }>;
}
const ProjectDetail = async ({ params }: Props) => {
  const { slug, locale } = await params;

  // 2) Encuentro el proyecto “neutro”
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound(); // Si no existe el proyecto, devuelvo 404

  // 3) Inyecto los campos traducidos (merge con el neutro)
  //    y devuelvo el proyecto traducido

  const dataTranslated = await getLocalizedProject(locale, project);
  // Nota: de esta forma ambas traducciones se cargan al mismo tiempo en lugar de una tras otra que, no se bloquea el hilo.
  const staticData = await getTranslations({
    locale,
    namespace: "projects.staticData",
  });

  return (
    <>
      {/* Título y breve descripción */}

      <article className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        <Description project={dataTranslated} />
      </article>

      {/* Tecnologías */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {staticData("technologiesSection.title")}
        </h2>
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
          {staticData("galerySection.title")}
        </h2>
        <ImagenGalery
          project={dataTranslated}
          infoText={staticData("galerySection.info")}
        />
      </section>

      {/* Arquitectura (opcional) */}
      {project.architecture && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-white">
            {staticData("architectureSection.title")}
          </h2>
          <Architecture project={project} />
        </section>
      )}
      {project.deepWikiURL && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-white flex flex-row items-center  gap-2">
            <DevinAiSvg />
            {staticData("documentationSection.title")}
            <small className="text-xs text-gray-500/80">
              {" "}
              {staticData("documentationSection.smallInfo")}
            </small>
          </h2>

          <details className="mt-">
            <summary className="text-gray-200 cursor-pointer hover:text-cyan-400">
              <span className="text-cyan-400 cursor-pointer hover:text-cyan-400">
                {staticData("documentationSection.question")}
              </span>
            </summary>

            <p className="text-gray-200/90 hover:text-gray-200/100 mt-2 font-open-sans text-sm">
              {staticData.rich("documentationSection.showDescription", {
                strong: (chunk): React.ReactElement => <strong>{chunk}</strong>,
              })}
            </p>
          </details>

          <Link
            href={project.deepWikiURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline group/doc"
          >
            {staticData("documentationSection.linkText")}
            <ArrowDoubleSvg className="w-4 h-4 inline-block ml-1 rotate-180 group-hover/doc:scale-140 group-hover/doc:contrast-125 transition-all duration-300 ease-in" />
          </Link>
        </section>
      )}

      {/* Enlaces al código y demo */}

      <section className="px-6 py-5 max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-semibold text-white">
          {staticData("linksSection.title")}
        </h2>
        <Links
          liveDemo={project.liveDemo}
          sourceCode={project.sourceCode}
          codeUpText={staticData("linksSection.gitHubStatus.public")}
          codeDownText={staticData("linksSection.gitHubStatus.private")}
          codeDownInfo={staticData("linksSection.gitHubStatus.privateInfo")}
          liveDemoUpText={staticData("linksSection.liveDemoStatus.success")}
          liveDemoDownText={staticData("linksSection.liveDemoStatus.failiture")}
        />
      </section>

      {/* Vídeo (opcional) */}
      {project.videoDemostration && (
        <section className="px-6 py-12 max-w-4xl mx-auto space-y-12">
          <LineAbout />
          <VideoProject
            title={staticData("videoSection.title")}
            src={project.videoDemostration.src}
            thumbnail={project.videoDemostration.thumbnail}
            description={dataTranslated?.videoDemostration?.description}
          />
        </section>
      )}
      <br />
      <br />
      <RevealOnScroll
        as={"div"}
        triggerOnce={false}
        className=" duration-700 ease-in-out transition-all  mx-auto w-full"
        hiddenClass="opacity-50 translate-y-12 scale-10 blur-2xl text-white max-w-[100px] "
        visibleClass="opacity-100 translate-y-0 scale-100 blur-none text-cyan-400/80 max-w-10/12"
      >
        <hr />
      </RevealOnScroll>

      <br />
      <br />
    </>
  );
};

export default ProjectDetail;
