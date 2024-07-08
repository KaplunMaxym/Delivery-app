import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { EnumSecureStore } from '@/types/auth.interface'
import { errorCatch } from '@/services/api/error.api'
import { getNewTokens } from '@/services/api/helper.auth'
import { getAccessToken } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'


export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()
			if (accessToken) {
				try {
					await getNewTokens()
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}

		let ignore = checkAccessToken()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(
				EnumSecureStore.REFRESH_TOKEN
			)
			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}

		let ignore = checkRefreshToken()
	}, [routeName])
}
