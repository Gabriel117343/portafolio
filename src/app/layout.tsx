import type { Metadata } from "next";
import {
  geistMono,
  geistSans,
  montserrat,
  openSans,
  oswald,
  inter
} from "@/lib/fonts";

import "./globals.css";

import { Header } from "@components/Header";

export const metadata: Metadata = {
  title: {
    default: "Portafolio Gabriel Soliz",
    template: "%s | Portafolio",
  },
  description:
    "Portafolio de Gabriel Soliz, desarrollador Front End. Experiencia en Next.js, React, Typescript, Tailwind CSS 4. Desarrollador de aplicaciones web modernas y escalables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} ${oswald.variable} ${inter.variable} antialiased font-sans`}
    >
      <body>
        <Header />

        <main className="bg-gradient-to-r overflow-x-hidden from-[#000428] min-h-screen via-[#022849] to-[#010639] relative selection:bg-cyan-600 selection:text-white text-white ">
          {/* Overlay radial muy sutil */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
          {children}
        </main>
      </body>
    </html>
  );
}
