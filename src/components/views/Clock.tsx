"use client";

import React, { useEffect, useState } from "react";
import { ChileFlagSvg } from "@ui/svg/ChileFlagSvg";

interface ClockProps {
  className?: string;
}

export const Clock = ({ className }: ClockProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const regex = /(\d{1,2}):(\d{2}):(\d{2})/;
      const now = new Date().toLocaleString("en-US", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const arrNow = [
        ...(now.match(regex)?.slice(1) || ["00", "00", "00"]),
        ...(now.match(/(AM|PM)/) || [""]),
      ];

      setTime({
        hours: arrNow[0],
        minutes: arrNow[1],
        seconds: arrNow[2],
        amOrPm: arrNow[3],
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  type Time = {
    hours: string;
    minutes: string;
    seconds: string;
    amOrPm: string;
  };
  const initialValue = {
    hours: "00",
    minutes: "00",
    seconds: "00",
    amOrPm: "",
  };
  const [time, setTime] = useState<Time>(initialValue);

  return (
    <section className={` ${className} `}>
      <article className="flex flex-col items-center gap-1 group/clock hover:contrast-150 cursor-crosshair transition-colors duration-300 ease-in-out w-[200px]">
        <main className=" overflow-hidden w-full">
          <div className="flex flex-row justify-start gap-2 w-full">
            <ChileFlagSvg className="text-gray-400/80 group-hover/clock:text-gray-300/80 transition-colors duration-300 ease-in-out size-5 sm:size-6" />
            <legend className="font-geist-mono text-sm md:text-xl font-semibold text-gray-300/80 ">
              Hora Chile
            </legend>
          </div>
        </main>
        <footer className="text-[18px] sm:text-2xl md:text-4xl font-bold text-gray-400/80 group-hover/clock:text-gray-300/80 transition-colors duration-300 ease-in-out w-full">
          <div className="flex flex-row justify-start">
            <span className="">{time.hours ?? "00"}</span>:
            <span className="">{time.minutes ?? "00"}</span>:
            <span className="">{time.seconds ?? "00"}</span>
            <span className="text-sm text-gray-500/80 ms-1">
              {time.amOrPm ?? ""}
            </span>
          </div>
        </footer>
      </article>
    </section>
  );
};
