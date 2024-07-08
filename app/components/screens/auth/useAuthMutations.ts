import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationKey: ['login'],
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		onSuccess(data) {
			reset()
			setUser(data.user)
		}
	})

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationKey: ['register'],
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),

		onSuccess(data) {
			reset()
			setUser(data.user)
		}
	})

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
