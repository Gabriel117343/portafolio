import React from "react";
import { LinkedinSvg } from "@ui/svg/LinkedinSvg";
import { GitHubSvg } from "@ui/svg/Technologies";
import { OutlookSvg } from "@ui/svg/OutlookSvg";
import { SendMesageForm } from "./SendMesageForm";
import { RevealOnScroll } from "@ui/RevealOnScroll";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Contact = ({
  description,
}: {
  description: string;
}): React.ReactNode => {
  const t = useTranslations("home.contactSection.form");

  const textFormLang = {
    title: t("title"),
    name: t("name"),
    email: t("email"),
    message: t("message"),
    bigText: t("bigText"),
    buttonText: t("button"),
    isSending: t("isSending"),
    statusSend: {
      success: {
        title: t("statusSend.success.title"),
        text: t("statusSend.success.description"),
        btnConfirmation: t("statusSend.success.btnConfirmation"),
      },
      error: {
        title: t("statusSend.error.title"),
        text: t("statusSend.error.description"),
        btnConfirmation: t("statusSend.success.btnConfirmation"),
      },
    },
  };
  return (
    <>
      <RevealOnScroll
        as="p"
        className="text-center  text-gray-200/80 text font-inter"
        threshold={0.2}
        hiddenClass="opacity-0 translate-x-12"
        visibleClass="opacity-100 translate-x-0"
        triggerOnce={true}
        htmlProps={{
          "aria-label": "Texto de contacto",
          "aria-hidden": "false",
          role: "text",
        }}
      >
        {description}
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
        <a
          href="mailto:gabriel.soliz@inacapmail.cl?subject=Hola%20Gabriel%20Soliz"
          className="
            p-4 bg-blue-700/30 rounded-full 
            hover:bg-blue-700/40 transition-colors duration-200
            shadow-[0_0_15px_rgba(0,112,244,0.4)]
          "
          aria-label="Ir a Outlook"
        >
          <OutlookSvg className="w-8 h-8 hover:contrast-125 transition-colors" />
        </a>
      </div>

      <section className="flex justify-center mt-12">
        <RevealOnScroll
          threshold={1}
          hiddenClass="opacity-0 scale-0 translate-y-12 blur-2xl  "
          visibleClass="opacity-100 scale-100 translate-y-0"
          triggerOnce={true}
        >
          <SendMesageForm textLang={textFormLang} />
        </RevealOnScroll>
      </section>
    </>
  );
};
