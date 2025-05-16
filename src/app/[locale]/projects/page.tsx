import React from "react";
import { Projects } from "@components/home/Projects";

const PageProjects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-8 md:px-12 py-12  "
    >
      <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white texts-center mb-12 text-center">
        Proyectos Destacados
      </h2>
      <Projects />
    </section>
  );
};

export default PageProjects;
