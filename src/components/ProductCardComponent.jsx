import PriceComponent from '@/components/PriceComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useCartStore } from '@/store/store'
import Link from 'next/link'

const ProductCardComponent = ({ product }) => {

    const {title, description, image, price, slug } = product

    const addToCart = useCartStore((state) => state.addToCart);

    return (
      <div>
        <div className="h-120 w-72 rounded shadow-lg mx-auto ">
          <Link href={`/products/${slug}`}>
          <div className="h-72 relative bg-palette-gray">
            <Image
              src={image}
              alt="nba sticker image"
              layout="fill"
              className="object-contain"
            />
          </div>
          </Link>
          <div className="h-48 relative">
            <Link href={`/products/${slug}`}>
            <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
              {title}
            </div>
            </Link>
            <div className="text-lg text-gray-600 p-4 font-primary font-light">
              {description}
            </div>
            <button onClick={() => addToCart(product)}>
              <div
                className="text-palette-lighter font-primary font-medium text-base absolute bottom-0 left-0 mb-4 pl-4 pr-4 pb-1 pt-2 bg-palette-primary 
                rounded-tl-sm hover:bg-orange-600"
              >
                  <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </button>
            <div
              className="text-orange-600 font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-4 pr-4 pb-1 pt-2 bg-palette-gray 
              rounded-tl-sm"
            >
              <PriceComponent
                currency="$"
                num={price}
                numSize="text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductCardComponent