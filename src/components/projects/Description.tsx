import React from "react";
import { TypingAnimation } from "@components/magicui/typing-animation";
import { type Project } from "@constants/projectsData";
interface Props {
  project: Project;
}

export const Description = ({ project }: Props) => {

  const regLineBreak = /\n/g;
  
  const overviewWithLineBreak = project.details.overview.split("\n").map((line, index) => (
    <p key={index} className="font-inter">
      {line}
      {index !== project.details.overview.split(regLineBreak).length - 1 && <br />}
    </p>
  ))
  return (
    <>
      {/* Título y breve descripción */}
      <header className="space-y-2">
        <div className="flex flex-col items-start gap-2  3xl:flex-row 3xl:items-center 3xl:justify-between ">
           <h1 className="text-4xl font-montserrat font-bold text-white">
          {project.title}
           </h1>
          <div className=" min-w-44 justify-start  3xl:justify-end">
            {project.dateFrom && project.dateTo && (
              <span className="text-gray-400 text-sm font-normal inline">
                {" "}
                {project.dateFrom} - {project.dateTo}
              </span>
            )}
          </div>
       
        </div>
       

        <div className="min-h-10  mt-5">
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
          <dt className="font-bold">Descripción:</dt>
          <dd className="mt-1 font-inter">
            {overviewWithLineBreak}
          </dd>
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
