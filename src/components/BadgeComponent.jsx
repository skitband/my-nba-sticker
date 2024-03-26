import { useCartStore } from '@/store/store'

const BadgeComponent = () => {

    const { cart } = useCartStore();
    
    return (
        <div className="absolute -top-1 right-6 text-xs bg-palette-gray text-palette-primary font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
            {cart.length}
        </div>
    )
}

export default BadgeComponent