// src/components/About.tsx
import React from "react";

export const About: React.FC = () => (
  <section
    id="about"
    className="
      relative
      overflow-hidden
      py-16 px-6 md:px-12 lg:px-24
      bg-gradient-to-br from-blue-900 via-blue-800 to-black
    "
  >
    {/* Estrellas de fondo */}
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_70%)]
        opacity-30
        pointer-events-none
      "
    />

    <h2 className="relative text-4xl font-bold text-cyan-200 mb-6 text-center">
      Sobre mí
    </h2>

    <div className="relative max-w-3xl mx-auto space-y-6 text-gray-200">
      <p>
        Soy <strong>Ingeniero en Informática</strong> con más de 6 meses de
        experiencia dedicados al desarrollo Front-End profesional. Combino mis
        conocimientos en <em>hardware y software</em> con un enfoque en{" "}
        <strong>código limpio</strong> y buenas prácticas (SOLID, patrones de
        diseño). Mi stack incluye <strong>React 19</strong>,{" "}
        <strong>TypeScript</strong>, <strong>Tailwind CSS 4</strong> y consumo
        de APIs con <strong>Axios</strong>, todo asegurado bajo flujos de
        autenticación <strong>JWT</strong>.
      </p>
      <p>
        Me considero una persona <strong>proactiva</strong> y comprometida con la
        mejora continua. Creo firmemente que la verdadera transformación
        profesional exige <strong>ciertos sacrificios</strong> y trabajo en equipo
        para alcanzar metas de alto impacto. Disfruto colaborar en entornos
        ágiles, resolver retos complejos y siempre aportar valor con creatividad
        e innovación.
      </p>
    </div>

    <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[
        "Trabajo en equipo",
        "Patrones de diseño",
        "Código limpio",
        "Hardware/Software",
        "React Avanzado",
        "TypeScript/JS",
        "Tailwind CSS 4",
        "Axios & APIs",
        "JWT Auth",
        "Arquitectura React",
        "Django básico",
        "Git & GitHub",
        "Docker",
      ].map((skill) => (
        <span
          key={skill}
          className="
            px-3 py-1.5
            bg-cyan-800/20
            border border-cyan-600
            rounded-full
            text-xs font-medium
            text-cyan-200
            text-center
            hover:bg-cyan-600/40
            transition-colors duration-200
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);
