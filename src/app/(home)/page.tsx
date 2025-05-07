import React from "react";
import Link from "next/link";
import { About } from "@/components/home/About";

import PlanetaAsteroidesImg from "@public/images/planeta-asteroides-fondo.jpg";
import { Ripple } from "@components/magicui/ripple";
import { ArrowBottomSvg } from "@ui/svg/ArrowBottomSvg";

import { Technologies } from "@/components/home/Technologies";
import Image from "next/image";
import { SpecialText } from "@components/views/specialText";
import "./styles.css";
import { Projects } from '@components/home/Projects'

const Home = () => {
  return (
    <>
      <div className="w-full group/initial-image overflow-x-hidden  @container/first">
        <div className="absolute top-0 h-[250px] translate-x-2 w-full overflow-hidden z-20 group-hover/initial-image:translate-x-0 opacity-40  group-hover/initial-image:opacity-50 transition-all duration-1000 ease-in-out xl:h-[300px]">
          <Ripple />
        </div>
        <div className="absolute top-0 left-0 right-0 mask-conic-180 initial-image-background  max-h-[700px] overflow-hidden space-float -mt-1">
          <Image
            src={PlanetaAsteroidesImg}
            alt="fondo de desarrollo web"
            className="object-cover opacity-80 w-full  group-hover/initial-image:contrast-100 contrast-125 group-hover/initial-image:scale-105 transition-all duration-1000 ease-in-out "
          />
        </div>
        <section className="text-white relative  z-30 h-[170px] @xs/first:h-[170px]  @md/first:h-[300px] @lg/first:h-[520px] max-h-[700px] @container">
          <div className="flex items-center justify-center pt-[50px] 2xl:pt-[160px] flex-col gap-4">
            <h1 className="@xs:text-3xl text-[30px] @sm:text-4xl @md:text-5xl @lg:text-6xl @xl:text-7xl font-montserrat font-semibold">
              <p className="inline-block animate-pulse rotate-0 stick-animated">
                |{" "}
              </p>{" "}
              GABRIEL SOLIZ{" "}
              <p className="inline-block p-0 m-0 animate-pulse duration-75 ease-in-out transform text-white">
                _
              </p>
            </h1>
            <h2 className="font-open-sans text-2xl text-[10px] @xs:text-xs @sm:text-sm @md:text-lg @lg:text-xl @xl:text-2xl font-semibold text-gray-200">
              Ingeniero en Informática,{" "}
              <SpecialText
                texts={["Desarrollador Front End", "Especialista en React"]}
              />{" "}
              |
            </h2>
          </div>
        </section>
      </div>
      <Technologies />
      <div className="w-full flex flex-col justify-center items-center gap-6 mt-8 mb-16 group">
        <Link href="#about">
          <p className="text-sm text-gray-200 d hover:text-cyan-400 transition duration-300 font-semibold md:text-lg ">
            {" "}
            Desliza para saber más
          </p>
        </Link>
        <div className="animate-bounce duration-1000 ease-in-out opacity-60 group-hover:opacity-80">
          <ArrowBottomSvg className="size-8 md:size-10" />
        </div>
      </div>

      <About />
      <Projects />
    </>
  );
};

export default Home;
