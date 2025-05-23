import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Lista de Proyectos",
};
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
