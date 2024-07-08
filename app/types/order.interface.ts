import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

export interface IOrder {
	id: string
	createdAt: string
	items: ICartItem[]
	user: IUser
	total: number
}
