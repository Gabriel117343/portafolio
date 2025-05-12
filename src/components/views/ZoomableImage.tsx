"use client";
import React, { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface ZoomableImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  classNameContainer?: string;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  classNameContainer,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale((prev) => {
        const next = prev - e.deltaY * 0.001;
        return Math.min(Math.max(next, 1), 3); // clamp between 1x and 3x
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className={twMerge('w-full h-full', classNameContainer)}
      style={{ cursor: scale > 1 ? "grab" : "auto" }}
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        placeholder="blur"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s ease-out",
        }}
        className={twMerge(`object-cover object-center`, className)}
      />
    </div>
  );
};
