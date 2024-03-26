"use client"

import { useState, useEffect } from 'react'
// import { useUpdateCartQuantityContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Price from '@/components/PriceComponent'
import { getCartSubTotal } from '@/../utils/helpers'
import Image from 'next/image'
import { useCartStore } from '@/store/store'

const CartTableComponents = () => {

    const { cart, addToCart, removeFromCart, emptyCart } = useCartStore();
    console.log('cartxxxx',cart)
    const [subtotal, setSubtotal] = useState(0)

    const updateCartQuantity = (itemId, newQuantity) => {
      addToCart( { id: itemId , quantity: newQuantity} );
    }

    useEffect(() => {
      setSubtotal(getCartSubTotal(cart))
    }, [cart])

  return (
    <div className="min-h-60 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
        {cart.length <= 0 && (
            <tr>
                <td colSpan="4" className="text-center h-[10em]">
                    <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">Your cart is empty</p>
                </td>
            </tr>
        )}
        {cart.map((item) => (
            <tr key={item.id} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <Image
                  src={item.image}
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex mr-3`}
                />
                {/* <Link to={`/products/${item.item.handle}`} className="pt-1 hover:text-palette-dark">
                  {item.item.title}, {item.item.description}
                </Link> */}
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.quantity}
                  onChange={(e) => updateCartQuantity(item.id, e.target.value)}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price currency="$" num={item.price} numSize="text-lg" />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="remove-item"
                  className=""
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTimes} className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                </button>
              </td>
            </tr>
          ))}
          {subtotal !== 0 && (
            <tr className="text-center">
              <td></td>
              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                <Price currency="$" num={subtotal} numSize="text-xl" />
              </td>
              <td><button
                  aria-label="empty-cart"
                  className=""
                  onClick={() => emptyCart()}
                >
                  <FontAwesomeIcon icon={faTrash} className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                </button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CartTableComponents