import { FC } from 'react'
import { Image, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'

import { getMediaSource } from '@/utils/getMediaSource'

import ProductHeader from './ProductHeader'
import AddToCartButton from './product-info/AddToCartButton'
import ProductInfo from './product-info/ProductInfo'
import { useProduct } from './useProduct'

const Product: FC = () => {
	const { isLoading, product } = useProduct()

	if (isLoading) return <Loader />
	if (!product) return null

	return (
		<Layout>
			<ProductHeader product={product} />
			<View className='items-center justify-center mt-4'>
				<Image
					source={getMediaSource(product.image)}
					width={260}
					height={260}
				/>
			</View>
			<ProductInfo product={product} />
			<AddToCartButton product={product} />
		</Layout>
	)
}

export default Product
