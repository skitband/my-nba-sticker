import Image from 'next/image'

const ProductImageComponent = ({images}) => {
  
  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-120">
        <Image
          src={images}
          alt="nba sticker image"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  )
}

export default ProductImageComponent