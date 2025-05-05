"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const NotFound = () => {

  const pathname = usePathname();
  const productId = pathname.split('/')[2]
  const reviewId = pathname.split('/')[4]
  return (
    <div>
      <h1>Not Found</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
      <p>Page not found</p>
      <p>Check the URL and try again</p>
    </div>
  )
}

export default NotFound