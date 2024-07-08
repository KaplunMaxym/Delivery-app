import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { useProfile } from '../profile/useProfile'

const Header: FC = () => {
	const { navigate } = useTypedNavigation()

	const { profile } = useProfile()

	return (
		<View className='flex-row justify-between items-center'>
			<Text className='font-medium text-2xl'>
				Hello, {profile?.name}!
			</Text>

			<Pressable onPress={() => navigate('Cart')}>
				<Ionicons name='cart' size={26} color='#374151' />
			</Pressable>
		</View>
	)
}

export default Header
