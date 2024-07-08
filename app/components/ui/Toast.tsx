import { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

const options = (primaryColor: string) => ({
	style: { backgroundColor: '#080808', borderLeftColor: primaryColor },
	text1Style: {
		color: '#fff',
		fontSize: 16
	},
	text2Style: {
		fontSize: 14
	}
})

const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: props => (
					<BaseToast {...props} {...options('#67E769')} />
				),
				info: props => <BaseToast {...props} {...options('#65d4ff')} />,
				error: props => <BaseToast {...props} {...options('#ff4949')} />
			}}
		/>
	)
}

export default Toast
