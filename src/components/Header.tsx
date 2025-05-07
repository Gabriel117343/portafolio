"use client";
import React, { useState } from "react";
import "./styles.css";
import Link from "next/link";
import { AngleSvg } from "@ui/svg/AngleSvg";
import { BranchSvg } from "@ui/svg/BranchSvg";
import { PointSvg } from "@ui/svg/PointSvg";
import { TouchSvg } from '@ui/svg/TouchSvg'

export const Header = () => {
  const [active, setActive] = useState<string>("");

  const baseLinkClasses =
    "hover:text-amber-100 hover:scale-105 transition duration-300!";
  const activeClass = "text-amber-100";

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#expertise", label: "Experiencia" },
    { href: "/#projects", label: "Proyectos" },
    { href: "/#about", label: "Sobre mí" },
    { href: "/#contact", label: "Contacto" },
  ];

  return (
    <header className="w-full h-[70px] bg-[#181838] @container/header">
      <section className="fixed bg-transparent w-full h-[70px] flex gap-4 items-center justify-between px-2 @lg/header:px-4 group header-initial text-white z-50">
        <div className="bg-gradient-to-br from-[#181838] to-[#010128] absolute inset-0 -z-1 opacity-70 blur-md"></div>
        <div className="absolute invisible md:visible">
          <div className=" md:translate-x-52 transition-all duration-300 opacity-10 group-hover:rotate-55 group-hover:opacity-20">
            <BranchSvg className="size-7" />
          </div>
        </div>
        <div className="flex items-center gap-1 @lg/header:gap-2 group:hover:bg-[#1d1d2c] group-hover:rounded-full group-hover:p-2 transition-all duration-300 ease-in-out cursor-pointer">
          <div className="entry-angle">
            <AngleSvg className="size-4 md:size-6 lg:size-8" />
          </div>

          <h2 className="text-xs @sm/header:text-[15px] @md/header:text-[18px]  font-bold @lg/header:text-2xl">
            Gabriel S.
          </h2>
          <p className="text-[9px] @md/header:text-xs text-gray-400">Dev</p>
        </div>
        <nav
          className="flex gap-1 @xs/header:gap-2 @lg/header:gap-3 text-gray-300 nav-initial font-semibold 2xl:-translate-x-28 text-xs @md/header:text-[14px] @md/headerlg:text-[16px]  @md/header:overflow-hidden 
          overflow-x-auto whitespace-nowrap
    no-scrollbar
            sm:overflow-visible sm:whitespace-normal sm:px-0
  "
        >
          <div className="absolute z-50 user-touch-initial mt-1 visible @md/header:invisible">
          <TouchSvg className="size-4 md:size-6 lg:size-8 "/>
          </div>
          {navItems.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <div className="flex gap-1 group/link" key={href}>
                <PointSvg
                  className={`size-3 group-hover/link:rotate-45 inline ${isActive ? "text-amber-100 scale-110 rotate-45 static" : " opacity-80"}`}
                />
                <Link
                  href={href}
                  onClick={() => setActive(href)}
                  className={`cursor-pointer ${baseLinkClasses} ${isActive ? activeClass : ""}`}
                >
                  <p className="text-nowrap text-ellipsis "> {label}</p>
                </Link>
              </div>
            );
          })}
        </nav>
      </section>
    </header>
  );
};
