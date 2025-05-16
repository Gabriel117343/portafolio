import React from "react";
import notebookCodigoFondo from "@public/images/notebook-codigo-fondo.png";

import profileImage from "@public/images/profile-image-fn.png";
import Image from "next/image";
import "./styles.css";
import { LineAbout } from "@components/views/lineAbout";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import { useTranslations } from "next-intl";

export const About = () => {
  const text = useTranslations("home.aboutSection");

  return (
    <section
      id="about"
      className=" w-full relative   overflow-hidden  group/about      aboutpy-16 px-6 md:px-12 lg:px-24 py-14"
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
        {text("title")}
      </h2>

      <article className="relative max-w-3xl mx-auto space-y-6 text-gray-200 ">
        <div className="float-right overflow-hidden rounded-2xl mask-alpha  mask-b-from-50% mask-b-to-transparent border border-gray-500 box-shadow-2xl  w-[150px] md:w-[190px] lg:w-[200px] mb-4 ms-2 md:ms-4">
          <Image
            src={profileImage}
            placeholder="blur"
            className=" object-contain aspect-square "
            alt="fondo de desarrollo web"
          />
        </div>
        <p
          className="text-pretty font-geist-mono text-sm sm:text-[16px] md:text-lg first-letter:text-3xl    md:first-letter:text-5xl
         
            first-letter:font-semibold
            first-letter:text-gray-200
            first-letter:float-left
            first-letter:mr-3
            first-letter:leading-none"
        >
          {text.rich("firstParagraph.text", {
            strong: (chunk) => (
              <strong className=" group-hover/about:text-cyan-400/80 transition-colors duration-300 ease-in-out">
                {chunk}
              </strong>
            ),
            br: () => <br />,
          })}
        </p>
        <RevealOnScroll
          as={"small"}
          triggerOnce={false}
          threshold={0.1}
          hiddenClass="translate-y-0"
          visibleClass="translate-y-0"
          className="italic font-serif text-[12px] md:text-sm text-gray-400 tracking-wide"
        >
          {text("note")}
        </RevealOnScroll>
      </article>
    </section>
  );
};
