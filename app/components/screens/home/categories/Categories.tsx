import { FC } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { getMediaSource } from '@/utils/getMediaSource'

import { useGetAllCategories } from './useGetAllCategories'

const Categories: FC = () => {
	const { categories, isLoading } = useGetAllCategories()

	const { navigate } = useTypedNavigation()

	return isLoading ? (
		<Loader />
	) : (
		<View className='flex flex-col pt-4 mb-4 gap-y-[10]'>
            <View>
                <Heading>Categories</Heading>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='flex flex-row gap-4'
            >
				{categories?.map(category => (
					<Pressable
						onPress={() =>
							navigate('Category', { slug: category.slug })
						}
						key={category.id}
						className='rounded-xl bg-gray-100 p-2 w-[100]'
					>
						<Image
							source={getMediaSource(category.image)}
							className='w-50 h-20 mb-2 p-3'
							style={{
								resizeMode: 'cover'
							}}
						/>
						<Text className='font-normal text-xs text-center'>
							{category.name}
						</Text>
					</Pressable>
				))}
			</ScrollView>
		</View>
	)
}

export default Categories
