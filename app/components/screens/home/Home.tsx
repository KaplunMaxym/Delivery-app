import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import Header from './Header'
import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Products from './products/Products'

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
			<Products />
		</Layout>
	)
}

export default Home
