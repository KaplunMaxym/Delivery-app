import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Banner: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='mt-5 w-full bg-[#47AA52] px-5 py-5 rounded-2xl justify-between flex-row'>
			<View>
				<Text className='font-medium w-56 text-white text-xl'>
					Fast delivery - delicious choice every time!
				</Text>

				<Pressable
					onPress={() => navigate('Explorer')}
					className='bg-black py-2 rounded-full w-28 mt-4'
				>
					<Text className='text-white font-medium text-center'>
						Order now
					</Text>
				</Pressable>
			</View>

			<View className='absolute bottom-0 right-4 w-28 h-28'>
				<Image
					source={require('@/assets/images/banner.png')}
					className='w-full h-full'
				/>
			</View>
		</View>
	)
}

export default Banner
