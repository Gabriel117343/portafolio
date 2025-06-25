import type { Metadata } from "next";
import {
  geistMono,
  geistSans,
  montserrat,
  openSans,
  oswald,
  inter,
} from "@/lib/fonts";

import { Header } from "@/components/views/Header";
import { Footer } from "@/components/views/Footer";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import "./globals.css";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { ErrorWrapper } from "./error-wrapper";
import { unstable_ViewTransition as ViewTransition } from "react";
export const metadata: Metadata = {
  // Nota: por defecto en HomePage > Metadata se utilizará el titulo obtenido de la traducción por lo que tendrá prioridad sobre este título.
  title: {
    default: "Gabriel Soliz | Ingeniero en Informática, Desarrollador Web",
    template: "%s | Portafolio",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // Icono que se mostrará en la busqueda de google
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    other: [
      // rel="shortcut icon" ayuda a que algunos buscadores la lean:
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
  },
  description:
    "Portafolio de Gabriel Soliz, desarrollador Front End. Experiencia en Next.js, React, Typescript, Tailwind CSS 4. Desarrollador de aplicaciones web modernas y escalables.",
  keywords: [
    "Portafolio",
    "Gabriel Soliz",
    "Desarrollador Front End",
    "Desarrollador Web",
    "Ingeniero en Informática",
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Desarrollo web",
    "Programador frontend",
    "Aplicaciones React",
    "SSR",
    "Portfolio profesional",
    "Freelance",
    "UX/UI",
  ],
  openGraph: {
    title: "Portafolio Gabriel Soliz",
    description:
      "Portafolio de Gabriel Soliz, desarrollador Front End. Experiencia en Next.js, React, Typescript, Tailwind CSS 4. Desarrollador de aplicaciones web modernas y escalables.",
    url: "https://www.gabrielsoliz.dev/",

    type: "profile",
    firstName: "Gabriel",
    lastName: "Soliz",

    locale: "es_CL",
    siteName: "Gabriel Soliz",
  },
  metadataBase: new URL("https://www.gabrielsoliz.dev"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
    },
  },
  verification: {
    google: "q2U6aqSp0sMR3zqBbpjGLLJJsW-Etp_9A86yqPwpgB0",
  },
};

// Permite el renderizado estático de las páginas en lugar de uno dinámico (por la traducción español - inglés)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  // ensure that the incoming "locale" param is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    // If not, show a 404 page
    return notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  // Cargar solos los mensajes necesarios para header que es del lado del cliente

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} ${oswald.variable} ${inter.variable} antialiased font-geist-sans`}
    >
      <body>
        {/* Proveedor de NextIntl para el cliente */}
        <NextIntlClientProvider locale={locale}>
          <Header />
        </NextIntlClientProvider>
        {/* Contenido estatico de la página - lado del servidor */}
        <main className="bg-gradient-to-r overflow-x-hidden from-[#000428] min-h-screen via-[#022849] to-[#010639] relative selection:bg-cyan-600 selection:text-white text-white ">
          {/* Overlay radial muy sutil */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
          <ErrorWrapper>
            <ViewTransition>{children}</ViewTransition>
          </ErrorWrapper>
        </main>
        {}

        <Footer />
      </body>
    </html>
  );
}
