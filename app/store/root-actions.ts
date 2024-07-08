import { cartSlice } from './cart/cart.slice'

export const rootActions = {
	...cartSlice.actions
}
