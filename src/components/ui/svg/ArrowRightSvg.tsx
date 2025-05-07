import React from "react";
import { type Tsvgprops } from "./types";
export const ArrowRightSvg: React.FC<Tsvgprops> = ({
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
      aria-label="Arrow right Icon"
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
        fill="currentColor"
      />
    </svg>
  );
};
