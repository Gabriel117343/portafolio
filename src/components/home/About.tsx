import React from "react";
import notebookCodigoFondo from "@public/images/notebook-codigo-fondo.png";

import profileImage from "@public/images/profile-image-fn.png";
import Image from "next/image";
import "./styles.css";
import { LineAbout } from "@components/views/lineAbout";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import { useTranslations } from "next-intl";
import { BookSvg } from "@ui/svg/BookSvg";
import { BooksSection } from '@components/home/BooksSection'

export const About = () => {
  const text = useTranslations("home.aboutSection");

  return (
    <section
      id="about"
      className=" w-full relative   overflow-hidden  group/about   h-full  px-6 md:px-12 lg:px-24 py-14 "
    >
      <LineAbout />
      <div className="absolute inset-0 z-50">
        <input type="checkbox" id="toggleBooks" className="peer hidden" />

        {/* Botón de acción */}
        <label
          htmlFor="toggleBooks"
          className="absolute bottom-0 right-0 size-12 p-12 z-50 cursor-pointer"
        >
          <BookSvg className="size-6 md:size-8 animate-ripple duration-2500 ease-in" />
        </label>

        {/* Panel deslizable */}
        <section className="absolute inset-0 z-40  transition-transform duration-300 ease-in-out translate-x-full peer-checked:translate-x-0 pointer-events-none">
          {/* contenido del panel */}
          <BooksSection />
        </section>
      </div>

      <div
        className="w-full overflow-hidden opacity-40  inset-0 -z-0  absolute
 "
      >
        <div className="grid grid-cols-2 h-full w-full overflow-hidden">
          <div
            className="w-full h-full   
      bg-gradient-to-br from-[#181838] via-[#181838] to-[#010128] translate-x-full group-hover/about:translate-x-0 transition-all duration-600 ease-in-out"
          />
          <div
            className="w-full h-full   
      bg-gradient-to-br from-[#181838] via-[#010128] to-[#181838] -translate-x-full group-hover/about:-translate-x-0 transition-all duration-600 ease-in-out "
          />
        </div>
      </div>

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
        <div className="float-right overflow-hidden rounded-2xl mask-alpha  mask-b-from-60% mask-b-to-transparent border border-gray-500 box-shadow-2xl  w-[150px] md:w-[190px] lg:w-[200px] mb-4 ms-2 md:ms-4">
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
              <strong className="text-cyan-400/80 sm:text-gray-200 sm:group-hover/about:text-cyan-400/80 transition-colors duration-300 ease-in-out">
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
