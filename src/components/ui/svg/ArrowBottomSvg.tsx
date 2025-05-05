import React from 'react'
import { type Tsvgprops } from './types'
export const ArrowBottomSvg:React.FC<Tsvgprops> = ({
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
 viewBox="0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
 <g>
      <path d="M40.6,30.4L27.1,44c-0.6,0.6-1.6,0.6-2.2,0L11.4,30.4c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l9.1,9.4c0.6,0.6,1.6,0.6,2.2,0l9.1-9.3c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C41.1,28.9,41.1,29.8,40.6,30.4z" />
      <path d="M40.6,12.3L27.1,26.1c-0.6,0.6-1.6,0.6-2.2,0L11.4,12.3c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l9.1,9.4c0.6,0.6,1.6,0.6,2.2,0L36.2,8c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C41.1,10.8,41.1,11.8,40.6,12.3z" />
    </g>
  </svg>
  )
}


