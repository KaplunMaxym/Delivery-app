import { useQuery } from '@tanstack/react-query'

import { CategoryService } from '@/services/category.service'

export const useGetAllCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => CategoryService.getAll(),
		select: data => data
	})

	return { categories, isLoading }
}
