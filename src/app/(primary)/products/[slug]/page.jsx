import ProductContainer from "@/containers/ProductContainer";

const ProductPage = ({params}) => {
  const {slug} = params;
  return (
    <div className="mt-12">
      <ProductContainer slug={slug} />
    </div>
  )
}

export default ProductPage