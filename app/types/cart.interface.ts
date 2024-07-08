import { IProduct } from './product.interface'

export interface ICartItem {
	id: string
	product: IProduct
	quantity: number
	price: number
}
