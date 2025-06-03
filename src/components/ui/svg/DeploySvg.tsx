import React from "react";
import { type Tsvgprops } from "./types";
export const DeploySvg: React.FC<Tsvgprops> = ({
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
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <title>{"deploy-line"}</title>
      <path
        className="clr-i-outline clr-i-outline-path-1"
        d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-2"
        d="M11.54,10.73l-9,5.17a1,1,0,0,0-.5.87v11a1,1,0,0,0,.5.87l9,5.15a1,1,0,0,0,1,0l9-5.15a1,1,0,0,0,.5-.87v-11a1,1,0,0,0-.5-.87l-9-5.17A1,1,0,0,0,11.54,10.73ZM11,31.08l-7-4V18.44l7,4ZM12,21,4.81,16.87,12,12.78l7.21,4.12Zm8,6.09-7,4V22.44l7-4Z"
      />
      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
  );
};
