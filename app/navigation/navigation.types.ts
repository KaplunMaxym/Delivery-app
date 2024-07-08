import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Favorites: undefined
	Search: undefined
	Explorer: undefined
	Profile: undefined
	Cart: undefined
	Thanks: undefined
	Category: {
		slug: string
	}
	Product: {
		slug: string
	}
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
