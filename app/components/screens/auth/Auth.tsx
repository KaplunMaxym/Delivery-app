import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from './AuthFields'
import { useAuthMutations } from './useAuthMutations'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, registerSync, loginSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if (isReg) registerSync(data)
		else loginSync(data)
	}

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-black text-3xl font-medium mb-8'>
					{isReg ? 'Sign Up' : 'Login'}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields control={control} isPassRequired />

						<Button onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Sign Up' : 'Login'}
						</Button>

						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='text-black text-center text-base mt-6'>
								{isReg
									? 'Already have an account? '
									: "Don't have an account? "}
								<Text className='text-[#475baa]'>
									{isReg ? 'Login' : 'Sign up'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth
