import { StripeProvider } from '@stripe/stripe-react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Toast from '@/components/ui/Toast'

import AuthProvider from '@/providers/AuthProvider'

import Navigation from '@/navigation/Navigation'

import { persistor, store } from '@/store/store'
import AsyncStorage from '@react-native-async-storage/async-storage'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

// queryClient.clear();
// const clearStorage = async () => {
// 	try {
// 		await AsyncStorage.clear();
// 		console.log('Storage successfully cleared!');
// 	} catch (e) {
// 		console.log('Failed to clear the async storage.');
// 	}
// };
//
// // Викликайте цю функцію в потрібному місці вашого додатку
// clearStorage();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider>
						<SafeAreaProvider>
							<StripeProvider
								publishableKey={
									process.env.STRIPE_KEY as string
								}
							>
								<Navigation />
							</StripeProvider>
						</SafeAreaProvider>
					</AuthProvider>
					<StatusBar style='auto' />
					<Toast />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
