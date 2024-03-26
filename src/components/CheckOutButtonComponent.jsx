import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const CheckOutButtonComponent = ({webUrl}) => {

  return (
    <Link
      href={webUrl}
      aria-label="checkout-products"
      className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-orange rounded-sm"
      
    >
      Proceed to Check Out
      <FontAwesomeIcon icon={faShoppingCart} className="w-4 ml-2 inline-flex" />
    </Link>
  )
}

export default CheckOutButtonComponent