"use client";

import React from "react";
import Image from "next/image";
import { CERTIFICATIONS, certification } from "@constants/certificationsData";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import Link from "next/link";

export const Certifications = ({
  title,
}: {
  title: string;
}): React.ReactNode => {
  return (
    <section
      id="certifications"
      className="
       
        mt-20
        w-full
        text-gray-200 
        relative z-30
        group/certifications
    
      "
    >
      <div className="absolute inset-0  bg-gradient-to-br from-blue-950 via-blue-900 to-black -z-10 opacity-60 blur-md group-hover/certifications:opacity-75" />

      <div
        className=" w-full max-w-6xl mx-auto
        px-4 py-12 pb-28"
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-cyan-300/90 group-hover/certifications:text-cyan-300/100 text-center mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert: certification) => {
            return (
              <RevealOnScroll
                as={"article"}
                triggerOnce={false}
                threshold={0.2}
                hiddenClass={`opacity-0 translate-x-12 contrast-0`}
                visibleClass="opacity-100 translate-x-0  contrast-100"
                className="flex flex-col justify-between
              bg-gray-800/50
              border border-cyan-600/30
              rounded-xl p-6
            duration-1500 ease-in-out
              hover:scale-105 hover:bg-gray-800/70 "
                key={cert.name}
              >
                <Link
                  href={cert.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
              
            "
                >
                  <div className="min-w-52 relative">
                    <Image
                      src={cert.image.src}
                      alt={cert.image.label}
                      placeholder="blur"
                      loading="lazy"
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white text-center">
                    {cert.name}
                  </h3>
                </Link>
                <div>
                  <p className="text-sm text-cyan-300">{cert.issuer}</p>
                  {cert.dateIssued && (
                    <p className="mt-1 text-xs text-gray-400">
                      Emitido: {cert.dateIssued}
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
