import React from "react";
import { type Tsvgprops } from "./types";
export const XCloseSVg: React.FC<Tsvgprops> = ({
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
      viewBox="0 0 1920 1920"
      {...props}
    >
      <path d="M954.64 826.418 426.667 298.445 298.445 426.667 826.418 954.64l-527.973 527.973 128.222 128.222 527.973-527.973 527.973 527.973 128.222-128.222-527.973-527.973 527.973-527.973-128.222-128.222z" />
    </svg>
  );
};
