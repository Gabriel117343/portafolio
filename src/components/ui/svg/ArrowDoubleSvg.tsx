import React from "react";
import { type Tsvgprops } from "./types";
export const ArrowDoubleSvg: React.FC<Tsvgprops> = ({
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
      aria-label="Arrow double Icon"
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        style={{
          fill: "none",
          stroke: "#2ca9bc",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M4 11v4h4"
      />
      <path
        data-name="secondary"
        style={{
          fill: "none",
          stroke: "#2ca9bc",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M15 4 4 15"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M20 9 9 20"
      />
      <path
        data-name="primary"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M20 13V9h-4"
      />
    </svg>
  );
};
