"use client";
import React, { useState, useEffect } from "react";
import { TypingAnimation } from "@components/magicui/typing-animation";

interface SpecialTextProps {
  texts: string[];
  children?: React.ReactNode;
}
export const SpecialText = ({ texts }: SpecialTextProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <TypingAnimation
      duration={80}
      className="inline-block font-open-sans text-2xl text-[10px] @xs:text-xs @sm:text-sm @md:text-lg @lg:text-xl @xl:text-2xl font-semibold text-gray-200"
    >
      {texts[activeIdx]}
    </TypingAnimation>
  );
};
