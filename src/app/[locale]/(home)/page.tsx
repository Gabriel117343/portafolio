import React from "react";
import Link from "next/link";

import { About } from "@components/home/About";

import PlanetaAsteroidesImg from "@public/images/planeta-asteroides-fondo.jpg";
import { Ripple } from "@components/magicui/ripple";
import { ArrowBottomSvg } from "@ui/svg/ArrowBottomSvg";

import { Technologies } from "@components/home/Technologies";
import Image from "next/image";
import { SpecialText } from "@components/views/specialText";
import "./styles.css";
import { Projects } from "@components/home/Projects";
import { Contact } from "@components/home/Contact";

import { LineShadowText } from "@components/magicui/line-shadow-text";
import { Certifications } from "@components/home/Certifications";
import { useTranslations, Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import { InfoSvg } from "@ui/svg/InfoSvg";

import { Clock } from "@components/views/Clock";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.Metadata" });

  const metadata: Metadata = {
    title: {
      default: t("title.default"),
      template: t("title.template"),
    },
  };
  return metadata;
}

const Home = () => {
  const text = useTranslations("home");
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
            priority={true}
            placeholder="blur"
            className="object-cover opacity-80 w-full  group-hover/initial-image:contrast-100 contrast-125 group-hover/initial-image:scale-105 transition-all duration-1000 ease-in-out "
          />
        </div>
        <section className="text-white relative  z-30 h-[200px]  @xs/first:h-[220px]  @md/first:h-[300px] @lg/first:h-[520px] max-h-[700px] @container overflow-y">
          <Clock className="absolute bottom-0 right-0 mr-2 @sm:mr-5 z-50 clock" />
          <div className="flex items-center justify-center pt-[50px] 2xl:pt-[160px] flex-col gap-4">
            <RevealOnScroll
              as={"h1"}
              triggerOnce={false}
              threshold={0.1}
              hiddenClass="scale-75 -translate-x-full opacity-0"
              visibleClass="scale-100 translate-x-0 opacity-100"
              className="@xs:text-3xl text-[30px] @sm:text-4xl @md:text-5xl @lg:text-6xl @xl:text-7xl font-montserrat font-semibold min-h-10 sm:min-h-20 @md:min-h-25 transition-all duration-3500 ease-out"
            >
              {" "}
              <p className="inline-block animate-pulse rotate-0 stick-animated">
                |{" "}
              </p>{" "}
              {text("developer.firstName")}{" "}
              <LineShadowText
                as="span"
                className="inline-block"
                shadowColor="#A3A3A3"
              >
                {text("developer.lastName")}
              </LineShadowText>{" "}
              <p className="inline-block p-0 m-0 text-white ">_</p>
            </RevealOnScroll>

            <RevealOnScroll
              as={"h2"}
              triggerOnce={false}
              threshold={0.2}
              hiddenClass="scale-75 translate-x-full opacity-0"
              visibleClass="scale-100 translate-x-0 opacity-100"
              className="font-open-sans text-2xl text-[10px] @xs:text-xs @sm:text-sm @md:text-lg @lg:text-xl @xl:text-2xl font-semibold text-gray-200 transition-all duration-2500 ease-out"
            >
              {text("briefProfesionalInfo.left")},{" "}
              <SpecialText
                texts={[
                  text("briefProfesionalInfo.rightSwitch.start"),
                  text("briefProfesionalInfo.rightSwitch.end"),
                ]}
              />{" "}
              <strong className="inline-block p-0 m-0 animate-pulse duration-75 ease-in-out transform text-white">
                |
              </strong>
            </RevealOnScroll>
          </div>
          <RevealOnScroll
            threshold={0.2}
            hiddenClass="opacity-0 -translate-y-12"
            visibleClass="opacity-100 translate-y-0"
            triggerOnce={false}
            className="w-full flex justify-center mt-4"
          >
            <Link
              className=" w-30 h-8 @sm:w-40 @sm:h-10 bg-black/20 rounded-full border-2 border-cyan-600/30 hover:border-cyan-600/50 hover:bg-black/30 transition duration-300 flex items-center justify-center gap-2 font-semibold text-gray-200 mt-4 font-montserrat "
              href="#contact"
            >
              {text("contact")}
            </Link>
          </RevealOnScroll>
        </section>
      </div>

      <section
        id="technologies"
        className=" w-full max-w-4xl mx-auto px-4 mt-5 lg:mt-6 py-8 relative z-30
       "
      >
        <Technologies
          title={text("technologiesSection.title")}
          description={text("technologiesSection.description")}
          secondDescription={text("technologiesSection.secondDescription")}
        />
      </section>
      <div className="w-full flex flex-col justify-center items-center gap-6 mt-8 mb-16 group">
        <Link href="#about">
          <p className="text-sm text-gray-200 d hover:text-cyan-400 transition duration-300 font-semibold md:text-lg ">
            {" "}
            {text("more")}
          </p>
        </Link>
        <div className="animate-bounce duration-1000 ease-in-out opacity-60 group-hover:opacity-80">
          <ArrowBottomSvg className="size-8 md:size-10" />
        </div>
      </div>

      <About />

      <section
        id="projects"
        className="w-full max-w-6xl mx-auto px-8 md:px-12 py-12  "
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white texts-center mb-12 text-center">
          {text("projectsSection.title")}
        </h2>
        <div className="w-full text-left my-4 text-xs sm:text-sm text-cyan-300/60 italic sm:flex items-center justify-center gap-2 hover:text-cyan-400/80 transition-colors duration-200 ease-in-outmy-0 hidden">
          <InfoSvg className="size-4 text-cyan-300/80 " />
          {text("projectsSection.info")}
        </div>
        <Projects />
      </section>
      <section
        id="contact"
        className=" w-full max-w-4xl mx-auto px-4 mt-12 lg:mt-6 py-8 relative z-30 pb-12
       "
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white text-center mb-8">
          {text("contactSection.title")}
        </h2>

        <Contact description={text("contactSection.description")} />
      </section>
      <Certifications title={text("certificationsSection.title")} />
    </>
  );
};

export default Home;
