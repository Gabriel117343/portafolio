import React from "react";
import Link from "next/link";

import { Lens } from "@/components/magicui/lens";
import { ArrowRightSvg } from "@ui/svg/ArrowRightSvg";
import Image from "next/image";
import { projects } from "@constants/projectsData";
import type { StaticImageData } from "next/image";
import { RevealOnScroll } from "@ui/RevealOnScroll";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  label: string;

  thumbnail: StaticImageData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  label,

  thumbnail,
}) => {
  // solo aquellos que se desean ver en la viste general del proyecto
  const TECHS_tO_SHOW =
    projects
      .find((p) => p.slug === slug)
      ?.techs.filter((t) => t.showInOverview === true) ?? [];

  return (
    <RevealOnScroll
      as="article"
      className="transform transition-all duration-700 ease-out overflow-hidden 
                rounded-xl 
                bg-transparent
                border border-gray-600
                shadow-2xl
               
                mask-alpha  mask-b-from-100% 
                mask-b-to-transparent
                  group/block
                hover:scale-105
                w-full
                mx-auto
                max-w-[450px]
                hover:mask-b-from-90%
                relative"
      hiddenClass="opacity-0 translate-y-12"
      visibleClass="opacity-100 translate-y-0"
      triggerOnce={false}
      threshold={0.2}
      htmlProps={{
        "aria-label": `Animación de aparición de la tarjeta del proyecto ${title}`,
        "aria-hidden": "false",
        role: "article",
      }}
    >
      <Link href={`/projects/${slug}`} className="block">
        <div
          className="bg-gradient-to-bl
                        from-[#181838]
                        via-[#355b81]
                        to-[#010128] absolute inset-0 opacity-35"
        />
        <div className="relative w-full h-48 overflow-hidden ">
          <Lens ariaLabel="lente" lensSize={100} zoomFactor={1.5}>
            <Image
              src={thumbnail}
              alt={label}
              loading="lazy"
              placeholder="blur"
              className="object-cover  transition-transform duration-500  ease-in-out group-hover/block:scale-105"
            />
          </Lens>
        </div>
        <div className="p-4 relative">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <div className="absolute right-0 top-0 z-40 mt-5 mr-2 invisible group-hover/block:visible hover:translate-x-3 ">
            <ArrowRightSvg className="text-gray-300" />
          </div>
          <div className="flex items-center justify-start gap-3 mb-2">
            {TECHS_tO_SHOW.map(({ label, Icon }) => (
              <Icon
                key={label}
                className="size-5 md:size-6 contrast-75  group-hover/block:contrast-100"
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </Link>
    </RevealOnScroll>
  );
};
