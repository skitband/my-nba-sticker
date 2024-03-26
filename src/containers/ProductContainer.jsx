"use client"

import ProductImage from '@/components/ProductImageComponent'
import ProductDetails from '@/components/ProductDetailsComponent'
import { useProductStore } from '@/store/store'

const ProductContainer = ({ slug }) => {

  const { products } = useProductStore();
  
  const productData = products.find(product => product.slug === slug);

  console.log('productData', productData);

  return (
    <div className="flex justify-center items-center gap-x-4">
      <ProductImage images={productData.image} />
      <ProductDetails productData={productData} />
    </div>
  )
}

export default ProductContainer