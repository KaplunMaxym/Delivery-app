import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useGetAllProducts } from './useGetAllProducts'

const Explorer: FC = () => {
	const { products, isLoading } = useGetAllProducts()

	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<Catalog title='Explorer' products={products || []} />
			)}
		</Layout>
	)
}

export default Explorer
