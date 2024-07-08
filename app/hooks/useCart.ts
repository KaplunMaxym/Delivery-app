import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const items = useTypedSelector(state => state.cart.items)

	const total = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)

	return { items, total }
}
