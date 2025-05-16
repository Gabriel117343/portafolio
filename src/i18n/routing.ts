import { defineRouting } from "next-intl/routing";

// Nota: el portafolio soportará tanto español como inglés, pero el idioma por defecto será español.
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "es",

});
