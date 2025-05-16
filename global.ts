import { routing } from "@/i18n/routing";
// import { formats } from "@/i18n/request";
import messages from "./messages/en.json";
// Habilitar autocompletado para la configuración de la librería next-intl (traducciones, formatos y locales).
// Esto es útil para evitar errores de tipado y mejorar la experiencia de desarrollo ya que se utilizann archivos JSON para las traducciones.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    // Formats: typeof formats;
  }
}

// DOC: https://next-intl.dev/docs/workflows/typescript
