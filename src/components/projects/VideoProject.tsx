import React from "react";

import { type VideoDemostration } from "@constants/projectsData";
import HeroVideoDialog from "@components/magicui/hero-video-dialog";

export const VideoProject = ({
  description,
  src,
  thumbnail,
}: VideoDemostration) => {
  return (
    <article className="w-full flex flex-col items-center gap-4 mt-8">
      <h3 className="text-2xl font-semibold text-white">
        Demostración del proyecto
      </h3>

      {description && <p className="font-inter text-gray-200">{description}</p>}
      <HeroVideoDialog
        className="dark:block w-full"
        animationStyle="top-in-bottom-out"
        videoSrc={src}
        thumbnailSrc={thumbnail}
        thumbnailAlt={description ?? "Video de demostración del proyecto"}
      />
    </article>
  );
};
