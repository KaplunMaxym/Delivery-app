import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	PersistConfig,
	REGISTER,
	REHYDRATE,
	persistStore
} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'

import { cartSlice } from './cart/cart.slice'

const persistConfig: PersistConfig<any> = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer
})

const persistedReducer = persistReducer<TypeRootState>(
	persistConfig,
	rootReducer
)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
