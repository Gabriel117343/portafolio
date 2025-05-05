import React from 'react'
import { type Tsvgprops } from './types'
export const AngleSvg:React.FC<Tsvgprops> = ({
  width = '24px',
  height = '24px',
  fill = 'currentColor',
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
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{"\n\t.st0{fill:none;}\n"}</style>
    <path d="M8.7,2.3L7.3,3.7l8.3,8.3l-8.3,8.3l1.4,1.4l9.7-9.7L8.7,2.3z" />
    <rect className="st0" width={24} height={24} />
  </svg>
  )
}
