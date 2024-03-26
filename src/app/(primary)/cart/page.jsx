import PageTitle from '@/components/PageTitleComponent'
import CartTable from '@/components/CartTableComponents'
import CheckOutButton from '@/components/CheckOutButtonComponent'
import BackToProductButton from '@/components/BackToProductButtonComponent'

const Cart = () => {
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <PageTitle text="Cart Items" />
      <CartTable />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton webUrl={''} />
        <BackToProductButton />
      </div>

    </div>
  )
}

export default Cart