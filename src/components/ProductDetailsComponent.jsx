"use client"

import React, { useState } from 'react'
import ProductForm from './ProductFormComponent'
import ProductInfo from './ProductInfoComponent'
import BackToProductButton from './BackToProductButtonComponent'

const ProductDetailsComponent = ({ productData }) => {

  console.log('productData', productData)

  const [variantPrice, setVariantPrice] = useState(productData.price)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm productData={productData} />
    </div>
  )
}

export default ProductDetailsComponent