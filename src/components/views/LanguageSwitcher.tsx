"use client";

import { NextIntlLogoSvg } from "@ui/svg/NextIntlLogoSvg";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
export function LanguageSwitcher() {
  // Nota: el pathname omite el prefijo del idioma (ej: es | en), por lo que no es necesario agregarlo al reemplazar el pathname.
  // El pathname es la ruta actual sin el prefijo del idioma (ej: /about | /contact)
  const locale = useLocale();
  const pathname = usePathname();

  const router = useRouter();

  const changeLanguage = () => {
    // En cambio aquí se utiliza el locale actual para determinar el nuevo idioma y hacer switch.
    const newLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <button onClick={() => changeLanguage()} className="cursor-pointer">
      <NextIntlLogoSvg className="size-6 2xl:size-7" />
      <small className=" text-xs md:text-sm text-gray-200/80 group-hover/lang:text-gray-200/100">
        {locale === "es" ? "ES" : "EN"}
      </small>
    </button>
  );
}
