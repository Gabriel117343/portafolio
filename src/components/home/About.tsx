import React from "react";
import notebookCodigoFondo from "@public/images/notebook-codigo-fondo.png";
import profileImage from "@public/images/profile-image-portafolio.jpg";
import Image from "next/image";
import "./styles.css";
import { LineAbout } from "@components/views/lineAbout";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
    w-full
      relative
      overflow-hidden
      group/about
      py-16 px-6 md:px-12 lg:px-24
]
    
    "
    >
      <LineAbout />

      <div
        className="inset-0 -z-0 opacity-40 absolute   
      bg-gradient-to-br from-[#181838] via-[#010128] to-[#010128 group-hover/about:opacity-30"
      ></div>
      {/* Estrellas de fondo */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_70%)]
        opacity-30
        pointer-events-none
      "
      />
      <div className="absolute inset-0 opacity-50 group-hover/about:opacity-60 transition ease-in-out duration-300 pointer-events-none translate-x-3/5 code-in-move overflow-hidden h-full">
        <Image
          src={notebookCodigoFondo}
          alt="fondo de desarrollo web"
          placeholder="blur"
          className="object-cover w-full h-full  group-hover/initial-image:contrast-100 contrast-125  group-hover/initial-image:scale-105 transition-all duration-1000 mask-x-from-80% mask-x-to-90%  ease-in-out blur-[2px]"
        />
      </div>

      <h2 className="relative text-4xl font-bold text-gray-200 mb-6 text-center font-montserrat">
        Sobre mí
      </h2>

      <article className="relative max-w-3xl mx-auto space-y-6 text-gray-200 ">
        <div className="float-right overflow-hidden rounded-2xl mask-alpha  mask-b-from-50% mask-b-to-transparent border border-gray-500 box-shadow-2xl  w-[150px] md:w-[190px] lg:w-[200px] mb-4">
          <Image
            src={profileImage}
            placeholder="blur"
            className=" object-contain aspect-square "
            alt="fondo de desarrollo web"
          />
        </div>
        <p
          className="text-pretty font-mono text-sm sm:text-[16px] md:text-lg first-letter:text-3xl    md:first-letter:text-5xl
         
            first-letter:font-semibold

            first-letter:text-gray-200
            first-letter:float-left
            first-letter:mr-3
            first-letter:leading-none"
        >
          Me presento, mi nombre es Gabriel y soy{" "}
          <strong>Ingeniero en Informática</strong> con más de 2 años de
          experiencia (de manera autonoma) dedicados al desarrollo Front-End
          profesional. Combino mis conocimientos en <em>El desarrollo Web</em>{" "}
          con un enfoque en <strong>código limpio</strong> y buenas prácticas
          (SOLID, patrones de diseño). Mi stack incluye{" "}
          <strong>React 19</strong>, <strong>TypeScript</strong>,{" "}
          <strong>Tailwind CSS 4</strong> y consumo de APIs con{" "}
          <strong>Axios</strong>, todo asegurado bajo flujos de autenticación{" "}
          <strong>JWT</strong>.
          <br />
          <br />
          Me considero una persona <strong>proactiva</strong> y comprometida con
          la mejora continua. Creo firmemente que la verdadera transformación
          profesional exige <strong>ciertos sacrificios</strong> y trabajo en
          equipo para alcanzar metas de alto impacto. Disfruto colaborar en
          entornos ágiles, resolver retos complejos y siempre aportar valor con
          creatividad e innovación, utilizando las últimas tecnologías que el
          mercado ofrece y no{" "}
          <strong className="italic font-normal">
            limitándome a lo pasado.
          </strong>
        </p>
      </article>
    </section>
  );
};
