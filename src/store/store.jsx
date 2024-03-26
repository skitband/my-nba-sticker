import { create } from 'zustand'
// import { dataProducts } from '../../utils/products';

export const useBearStore = create((set) => ({
    bears: 2,
    increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
}));


export const useProductStore = create((set) => ({
    products: [],
    isLoading: false,
    setProducts: async () => {
      try {
        set((state) => ({ isLoading: state.isLoading = true }));
        const response = await fetch('/api/products');
        if (!response.ok) {
          set((state) => ({ isLoading: state.isLoading = false }));
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        set({ products });
        set((state) => ({ isLoading: state.isLoading = false }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
}));

export const useCartStore = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    addToCart: (product, quantity = 1) => {
      console.log('quantity', quantity);
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

            if (existingItem) {
              console.log('product', product.quantity);
              // If the item already exists in the cart, update its quantity
              set(state => ({
                  cart: state.cart.map((item) =>
                      item.id === product.id
                          ? { ...item, quantity: product.quantity == undefined ? item.quantity + parseFloat(quantity) : product.quantity}
                          : item
                  )
              }));
          } else {
              // If the item is not in the cart, add it with a quantity of 1
              set((state) => ({ cart: [...state.cart, { ...product, quantity: quantity }] }));
          }
        },
      removeFromCart: (productId) => {
        set(state => ({
            cart: state.cart.filter(item => item.id !== productId)
        }));
      },
      emptyCart: () => {
        set({ cart: [] });
        localStorage.removeItem('cart');
      }
}));

useCartStore.subscribe(
  (cart) => {
    console.log("cart", cart);
    localStorage.setItem('cart', JSON.stringify(cart.cart));
  },
  (state) => state.cart
);