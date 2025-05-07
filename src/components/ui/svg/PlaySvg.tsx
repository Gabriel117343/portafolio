import React from "react";
import { type Tsvgprops } from "./types";
export const PlaySvg: React.FC<Tsvgprops> = ({
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
      aria-label="Angle Icon"
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      {...props}
    >
      <title>{"icn/play"}</title>
      <path
        d="M5.008 12.897a.644.644 0 0 1-.91-.227.719.719 0 0 1-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 0 1 .346.103l6.677 4.306a.713.713 0 0 1 0 1.182l-6.677 4.306z"
        id="a"
      />
    </svg>
  );
};
