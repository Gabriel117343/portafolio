import React from 'react'
import { notFound } from 'next/navigation'
interface Props {
  params: {
    productId: string
    reviewId: string
  }
}
const ProductReview = ({ params }: Props) => {
  const { productId, reviewId } = params

  if (parseInt(reviewId) > 1000) {
    return notFound()
  }
  return (
    <div>
      <h1>Product Review</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  )
}

export default ProductReview