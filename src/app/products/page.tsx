import React from 'react'
import Link from 'next/link'

const page = () => {
  const productId = 100;
  return (
    <>
    <Link href="/">Home</Link>
    <ul>
      <li>
        <Link href="/products/1">product 1</Link>
      </li>
      <li>
        <Link href="/products/2">product 2</Link>
      </li>
      <li>
        <Link href="/products/3" replace>product 3</Link>
      </li>
      <li>
        <Link href={`/products/${productId}`}>product {productId}</Link>
      </li>
    </ul>
    </>
  )
}

export default page