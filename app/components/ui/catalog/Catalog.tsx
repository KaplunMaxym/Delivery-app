import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '../Heading'

import { ICatalog } from './catalog.interface'
import ProductItem from './product-item/ProductItem'

const Catalog: FC<ICatalog> = ({ title, products }) => {
	return (
		<View className='mb-16'>
			{title && <Heading>{title}</Heading>}

			{products?.length ? (
				<View className='flex-row flex-wrap justify-between mt-4'>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</View>
			) : (
				<Text className='mt-2'>Products not found</Text>
			)}
		</View>
	)
}

export default Catalog
