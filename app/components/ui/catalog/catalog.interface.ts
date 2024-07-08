import { IProduct } from '@/types/product.interface'

export interface ICatalog {
	title?: string
	products: IProduct[]
}
