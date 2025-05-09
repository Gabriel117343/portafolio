import React from "react";
import { TypingAnimation } from "@components/magicui/typing-animation";
import { type Project } from "@constants/projectsData";
interface Props {
  project: Project;
}

export const Description = ({ project }: Props) => {
  return (
    <>
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
    </>
  );
};
