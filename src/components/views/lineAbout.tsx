"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
export const LineAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // puede volver a aparecer más de una vez
    threshold: 0.4, // 40% visible
  });
  return (
    <>
      <div ref={ref} className="flex justify-center mb-8 ">
        {inView && (
          <div className="h-1 w-16 starting:opacity-0 starting:translate-y-2/5 starting:scale-50 transition-all duration-1000 ease-in-out bg-cyan-400 rounded-full " />
        )}
      </div>
    </>
  );
};
