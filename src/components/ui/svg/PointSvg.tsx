import React from 'react'
import { type Tsvgprops } from './types'
export const PointSvg:React.FC<Tsvgprops> = ({
  width = '24px',
  height = '24px',
  fill = 'currentColor',
  className,
  ...props
}) => {
  return (
    <svg
    width={width}
    height={height}
    fill={fill}
    className={`transition-colors duration-1000 ${className}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path d="M16 12h7v1h-7zM2 13h7v-1H2zm10 10h1v-7h-1zm0-14h1V2h-1zm-2 1h5v5h-5zm1 4h3v-3h-3z" />
      <path fill="none" d="M0 0h24v24H0z" />
  </svg>
  )
}


