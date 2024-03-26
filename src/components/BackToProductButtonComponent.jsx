import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackToProductButtonComponent = () => {
  return (
    <Link href="/" passHref>
      <span
        aria-label="back-to-products"
        className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-fullrounded-sm mt-3"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-2 inline-flex" />
        Back to All Products
      </span>
    </Link>
  )
}

export default BackToProductButtonComponent