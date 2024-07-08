import Cart from '@/components/screens/cart/Cart'
import Category from '@/components/screens/category/Category'
import Explorer from '@/components/screens/explorer/Explorer'
import Favorites from '@/components/screens/favorites/Favorites'
import Home from '@/components/screens/home/Home'
import Product from '@/components/screens/product/Product'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Thanks from '@/components/screens/thanks/Thanks'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'Category',
		component: Category
	},
	{
		name: 'Product',
		component: Product
	},
	{
		name: 'Thanks',
		component: Thanks
	}
]
