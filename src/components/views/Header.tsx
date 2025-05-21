"use client";
import React, { useState, useMemo, useEffect } from "react";
import "../styles.css";
import Link from "next/link";
import { AngleSvg } from "@ui/svg/AngleSvg";

import { PointSvg } from "@ui/svg/PointSvg";
import { TouchSvg } from "@ui/svg/TouchSvg";

import { LanguageSwitcher } from "@components/views/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export const Header = () => {
  const [active, setActive] = useState<string>("");
  // const [navItems, setNavItems] = useState<any[]>([]);
  const pathname = usePathname();
  const text = useTranslations("home.header.nav");
  const textPDetail = useTranslations("projects.header.nav");

  const baseLinkClasses =
    "hover:text-amber-50 hover:scale-105 transition duration-300!";
  const activeClass =
    "text-cyan-500  scale-110 transition duration-800! ease-in-out ";
  // Nota: es necesario que se vuelva a recrear este array porque el idioma puede cambiar, asi que no se deja fuera del componente
  // para ello se memoiza y cada vez que cambie el idioma se volverá a crear
  const HOME_LINKS = useMemo(
    () => [
      { href: "/#home", label: text("home") },
      { href: "/#expertise", label: text("experience") },
      { href: "/#projects", label: text("projects") },
      { href: "/#about", label: text("about") },
      { href: "/#contact", label: text("contact") },
    ],
    [text]
  );
  const PROJECT_DETAIL_LINKS = useMemo(
    () => [
      { href: "/#home", label: textPDetail("home") },
      { href: "#technologies", label: textPDetail("technologies") },
      { href: "#gallery", label: textPDetail("gallery") },
      { href: "#videoDemo", label: textPDetail("videoDemo") },
    ],
    [textPDetail]
  );
  // Nota: de esta forma solo cuando se proveea un slug se mostrará el menu de proyectos
  // en cualquier otro caso se mostrará el menu de home
  const projectWithSlugRegex = /\/projects\/[a-zA-Z0-9-]+/;
  const navItems = pathname.match(projectWithSlugRegex)
    ? PROJECT_DETAIL_LINKS
    : HOME_LINKS;

  useEffect(() => {
    const onScroll = () => {
      // altura de la barra de navegacion
      // Nota: se le suma 80px para que no se vea el texto debajo de la barra de navegacion
      const scrollPos = window.scrollY + 80;
      for (const { href } of navItems) {
        const id = href.split("#")[1];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(href);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // disparar al montar
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  return (
    <header className="w-full h-[70px] bg-[#181838] @container/header">
      <section className="fixed bg-transparent w-full h-[70px] flex gap-4 items-center justify-between px-2 @lg/header:px-4 group header-initial text-white z-50">
        <div className="bg-gradient-to-br from-[#181838] to-[#010128] absolute inset-0 -z-1 opacity-70 blur-md"></div>

        <div className="flex items-center gap-1 @lg/header:gap-2 group:hover:bg-[#1d1d2c] group-hover:rounded-full  cursor-crosshair">
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center gap-1 mt-2 contrast-75 hover:contrast-125 entry-angle hover:scale-105 transition-all duration-300 ease-in-out group/lang cursor-pointer">
            <LanguageSwitcher />
          </div>
          <div className="absolute right-0 translate-y-16 mr-5 transition duration-300 ease-in-out md:hidden touch-auto">
            <LanguageSwitcher />
          </div>

          <div className="entry-angle group-hover:p-2 transition-all duration-300 ease-in-out">
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
           sm:pr-1
            sm:overflow-visible sm:whitespace-normal sm:px-0
  "
        >
          <div className="absolute z-50 user-touch-initial mt-1 visible @md/header:invisible">
            <TouchSvg className="size-4 md:size-6 lg:size-8 " />
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
                  className={`cursor-pointer ${baseLinkClasses} ${isActive ? activeClass : ""}`}
                >
                  <p className="text-nowrap text-ellipsis"> {label}</p>
                </Link>
              </div>
            );
          })}
        </nav>
      </section>
    </header>
  );
};
