import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumSecureStore, IAuthResponse } from '@/types/auth.interface'

import { saveToStorage } from '@/services/auth/auth.helper'

import { API_URL, getAuthUrl } from '@/config/api.config'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)

		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)

		if (response.data.accessToken) await saveToStorage(response.data)

		return response
	} catch (e) {}
}
