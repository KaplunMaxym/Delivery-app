import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

interface ILayout {
	className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
	return (
		<View className={cn('h-full w-full bg-white mt-12 px-4', className)}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{children}
			</ScrollView>
		</View>
	)
}

export default Layout
