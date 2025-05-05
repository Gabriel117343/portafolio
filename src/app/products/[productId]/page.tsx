import React from 'react'
import { Metadata } from 'next'
interface ProductDetailsProps {
  params: {
    productId: string
  }
}

export const generateMetadata = async({ params }: ProductDetailsProps) => {
  const id = params.productId
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`)
    }, 100)
  })
  return {
    title: `Product ${title}`,


  } as Metadata
}
const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { productId } = params

  return (
    <h1>details about product {productId}</h1>
  )
}

export default ProductDetails