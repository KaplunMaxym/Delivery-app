import { FC } from 'react'
import { Text, View } from 'react-native'

import { convertPrice } from '@/utils/convertPrice'

import { IProductComponent } from '../product-page.interface'

const ProductInfo: FC<IProductComponent> = ({ product }) => {
	return (
		<View className='mt-7'>
			<Text className='font-bold text-2xl'>{product.name}</Text>
			<Text className='mt-2 text-base opacity-70'>
				{product.description}
			</Text>
			<Text className='mt-6 text-3xl font-semibold text-[#47AA52]'>
				{convertPrice(product.price)}
			</Text>
		</View>
	)
}

export default ProductInfo
