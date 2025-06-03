// certificaciones

import js_certification_01 from "@public/images/certifications/javaScript-certificate-01.jpg";
import cibersecurity_certification_02 from "@public/images/certifications/ciscoCybersecurity-certificate-02.png";
import typing_certification_03 from "@public/images/certifications/typing-certificate-03.png";
import harvardsql_certification_04 from "@public/images/certifications/harvardSQL-certificate-04.jpg";
import harvardcs50_certification_05 from "@public/images/certifications/harvardCS50-certificate-05.jpg";
import englishdevelopers_certification_06 from "@public/images/certifications/englishDevelopers-certificate-06.jpg";
import advancedReact_certification_07 from "@public/images/certifications/advancedReact-certificate-07.png";
import type { StaticImageData } from "next/image";
import introductionToSoftwareEngineering_certification_08 from "@public/images/certifications/introductionToSoftwareEngineering-certificate-08.png";
import introductionToCloudComputing_certification_09 from "@public/images/certifications/introductionToCloudComputing-certificate-09.png";

type Date = `${number}${number}-${number}${number}-${number}${number}`;
export type certification = {
  name: string;
  issuer: string; // Instituto o entidad que la otorga
  url?: string; // URL de la certificación
  image: { label: string; src: StaticImageData }; // Imagen de la certificación
  dateIssued?: Date; // Fecha de emisión
};

export const CERTIFICATIONS: certification[] = [
  {
    name: "Advanced React",
    issuer: "META",
    url: "https://www.coursera.org/account/accomplishments/certificate/3796GE03FGOS",
    image: {
      label: "Certificación de Advanced React",
      src: advancedReact_certification_07,
    },
    dateIssued: "2025-05-23",
  },
  {
    name: "Introduction to Cloud Computing",
    issuer: "IBM",
    url: "https://www.coursera.org/account/accomplishments/certificate/8HZY7CGMTZ30",
    image: {
      label: "Certificación de Introducción a la Computación en la Nube",
      src: introductionToCloudComputing_certification_09,
    },
    dateIssued: "2025-05-28",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM",
    url: "https://www.coursera.org/account/accomplishments/certificate/EMDGW9M4S8MH",
    image: {
      label: "Certificación de Introducción a la Ingeniería de Software",
      src: introductionToSoftwareEngineering_certification_08,
    },
    dateIssued: "2025-05-27",
  },
  {
    name: "English for Developers & IT Professionals",
    issuer: "Desafío Latam",
    url: "https://cursos.desafiolatam.com/certificates/neznalqfuu",
    image: {
      label: "Certificación de inglés para desarrolladores",
      src: englishdevelopers_certification_06,
    },
    dateIssued: "2025-04-29",
  },
  {
    name: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    url: "https://certificates.cs50.io/d58de581-1767-4676-914c-06273bdf20cb.pdf?size=letter",
    image: {
      label: "Certificación CS50 de Harvard",
      src: harvardcs50_certification_05,
    },
    dateIssued: "2025-03-01",
  },
  {
    name: "CS50’s Introduction to Databases with SQL",
    issuer: "Harvard University",
    url: "https://certificates.cs50.io/d58de581-1767-4676-914c-06273bdf20cb.pdf?size=letter",
    image: {
      label: "Certificación SQL de Harvard",
      src: harvardsql_certification_04,
    },
    dateIssued: "2025-03-15",
  },
  {
    name: "Typing Certificate",
    issuer: "Typing.com",
    url: "https://www.ratatype.es/u3262480/certificate/es/",
    image: {
      label: "Certificación de mecanografía",
      src: typing_certification_03,
    },
    dateIssued: "2024-03-25",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",

    image: {
      label: "Certificación de ciberseguridad de Cisco",
      src: cibersecurity_certification_02,
    },
    dateIssued: "2022-09-30",
  },
  {
    name: "Lo último de JavaScript (ES2023 & ES2024)",
    issuer: "midu.dev",

    image: {
      label: " Certificación de Lo último de JavaScript (ES2023 & ES2024)",
      src: js_certification_01,
    },
    dateIssued: "2025-02-15",
  },
];
