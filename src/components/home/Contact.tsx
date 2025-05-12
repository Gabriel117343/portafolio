import React from "react";
import { LinkedinSvg } from "@ui/svg/LinkedinSvg";
import { GitHubSvg } from "@ui/svg/Technologies";
import { OutlookSvg } from "@ui/svg/OutlookSvg";
import { SendMesageForm } from "./SendMesageForm";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import Link from "next/link";

export const Contact: React.FC = () => {
  return (
    <>
      <RevealOnScroll
        as="p"
        className="text-center  text-gray-200/80 text font-inter"
        threshold={0.2}
        hiddenClass="opacity-0 translate-x-12"
        visibleClass="opacity-100 translate-x-0"
        triggerOnce={false}
      >
        Puedes contactarme a través de mis redes sociales y mi correo Outlook
      </RevealOnScroll>
      <p className="text-center  text-gray-200/80 text font-inter"></p>
      <div className="flex items-center justify-center space-x-8 mt-8">
        <Link
          href="https://www.linkedin.com/in/gabriel-soliz-6490ab212/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-4 bg-blue-700/30 rounded-full 
            hover:bg-blue-700/40 transition-colors duration-200
            shadow-[0_0_15px_rgba(0,112,244,0.4)]
          "
          aria-label="LinkedIn"
        >
          <LinkedinSvg className="w-8 h-8 hover:contrast-125 transition-colors contrast-150" />
        </Link>
        <Link
          href="https://github.com/Gabriel117343"
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-4 bg-blue-700/30 rounded-full 
            hover:bg-blue-700/40 transition-colors duration-200
            shadow-[0_0_15px_rgba(0,112,244,0.4)]
          "
          aria-label="GitHub"
        >
          <GitHubSvg className="w-8 h-8 hover:contrast-125 transition-colors" />
        </Link>
        <Link
          href="https://outlook.office.com/mail/"
          className="
            p-4 bg-blue-700/30 rounded-full 
            hover:bg-blue-700/40 transition-colors duration-200
            shadow-[0_0_15px_rgba(0,112,244,0.4)]
          "
          aria-label="Ir a Outlook"
        >
          <OutlookSvg className="w-8 h-8 hover:contrast-125 transition-colors" />
        </Link>
      </div>
      <small className="text-xs text-center text-gray-200/50">
        En desarrollo
      </small>
      <section className="flex justify-center mt-12">
        <RevealOnScroll
          threshold={1}
          hiddenClass="opacity-0 scale-0 translate-y-12 blur-2xl  "
          visibleClass="opacity-100 scale-100 translate-y-0"
          triggerOnce={true}
        >
          <SendMesageForm />
        </RevealOnScroll>
      </section>
    </>
  );
};
