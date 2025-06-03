"use client";
import React from "react";
import { LiveWebSvg } from "@ui/svg/LiveWebSvg";

export const LiveDemo = ({ liveDemo, className }: { liveDemo: string, className: string }) => {
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(liveDemo, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={className}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClick}
        aria-label={`Ir ar ${liveDemo}`}
        type="button"
        className="p-1 bg-transparent focus:outline-none  curdor-pointer"
      >
        <LiveWebSvg  className="size-6"/>
      </button>
    </div>
  );
};