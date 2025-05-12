import React from "react";
import { type Tsvgprops } from "./types";
export const InfoSvg: React.FC<Tsvgprops> = ({
  width = "24px",
  height = "24px",
  fill = "currentColor",
  className,
  ...props
}) => {
  return (
    <svg
      fill={fill}
      className={`transition-colors duration-1000 ${className}`}
      width={width}
      aria-label="Info Icon"
      height={height}
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <rect x={15} y={14} width={2} height={8} />
      <rect x={15} y={10} width={2} height={2} />
      <circle
        fill="none"
        stroke={fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        cx={16}
        cy={16}
        r={12}
      />
    </svg>
  );
};
