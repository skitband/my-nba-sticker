"use client"

import { useEffect } from 'react'
import ProductCardComponent from '@/components/ProductCardComponent'
import { useProductStore } from '@/store/store'
import LoadingComponent from './LoadingComponent'

const ProductListingsComponent = () => {
  
  const { products, setProducts, isLoading } = useProductStore();

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <>
    {isLoading && <LoadingComponent />}
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
          <ProductCardComponent key={index} product={product} />
      ))}
    </div>
    </>
    
  )
}

export default ProductListingsComponent