import { FC } from 'react'
import { View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'
import Field from '@/components/ui/field/Field'

import { ISearchFormData } from './search.interface'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { searchTerm, isLoading, control, products } = useSearch()

	return (
		<Layout>
			<Heading>Search</Heading>

			<View className='mt-3'>
				<Field<ISearchFormData>
					placeholder='Type something...'
					control={control}
					name='searchTerm'
					keyboardType='web-search'
				/>
			</View>
			{!!searchTerm ? (
				<View className='mt-2'>
					{isLoading ? (
						<Loader />
					) : (
						<Catalog products={products || []} />
					)}
				</View>
			) : null}
		</Layout>
	)
}

export default Search
