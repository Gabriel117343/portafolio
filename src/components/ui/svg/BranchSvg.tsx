import React from 'react'
import { type Tsvgprops } from './types'
export const BranchSvg:React.FC<Tsvgprops> = ({
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
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd" strokeLinejoin="round">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <g transform="translate(5 4)" stroke="#000" strokeWidth={4}>
        <circle fill="#2F88FF" fillRule="nonzero" cx={35} cy={20} r={4} />
        <circle fill="#2F88FF" fillRule="nonzero" cx={4} cy={4} r={4} />
        <circle fill="#2F88FF" fillRule="nonzero" cx={4} cy={36} r={4} />
        <path strokeLinecap="round" d="M4 8v24-11.992h27" />
      </g>
    </g>
  </svg>
  )
}


