import React from 'react'

const ProductoDetailsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
    {children}
    <h2 className='font-extrabold'>Feature Products</h2>
    </>
  )
}

export default ProductoDetailsLayout