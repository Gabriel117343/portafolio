import { FC } from "react";
import { type Tsvgprops } from "@ui/svg/types";
import { type LabelTech } from "@constants/projectsData";
import {
  HtmlSvg,
  CssSvg,
  JavaScriptSvg,
  ReactSvg,
  TypeScriptSvg,
  BootstrapSvg,
  TailwindSvg,
  GitSvg,
  GitHubSvg,
  LinuxSvg,
  PostgresSqlSvg,
  SqlLiteSvg,
  PythonSvg,
  NextJsIcon,
  DjangoSvg,
  SqlSvg,
  ViteSvg,
  JwtSvg,
  NetlifySvg,
  VercelSvg,
  VisualStudioCodeSvg,
} from "@ui/svg/Technologies";

interface Tech {
  label: string;
  Icon: FC<Tsvgprops>;
}

export const TECHS: { label: LabelTech; Icon: FC<Tsvgprops> }[] = [
  { label: "HTML", Icon: HtmlSvg },
  { label: "Next.js 15", Icon: NextJsIcon },
  { label: "CSS", Icon: CssSvg },
  { label: "GitHub", Icon: GitHubSvg },
  { label: "JavaScript", Icon: JavaScriptSvg },
  { label: "React 19", Icon: ReactSvg },
  { label: "TypeScript", Icon: TypeScriptSvg },
  { label: "Bootstrap", Icon: BootstrapSvg },
  { label: "TailwindCSS 4", Icon: TailwindSvg },
  { label: "Git", Icon: GitSvg },
  { label: "Linux", Icon: LinuxSvg },
  { label: "PostgresSQL", Icon: PostgresSqlSvg },
  { label: "SQLite", Icon: SqlLiteSvg },
  { label: "Python", Icon: PythonSvg },
  { label: "Django", Icon: DjangoSvg },
  { label: "SQL", Icon: SqlSvg },
  { label: "Vite", Icon: ViteSvg },
  { label: "JWT Auth", Icon: JwtSvg },
  { label: "Netlify", Icon: NetlifySvg },
  { label: "Vercel", Icon: VercelSvg },
  { label: "Visual Studio Code", Icon: VisualStudioCodeSvg },
];
