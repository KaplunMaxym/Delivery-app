import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { ProductService } from '@/services/product.service'

export const useProduct = () => {
	const { params } = useTypedRoute<'Product'>()

	const { isLoading, data: product } = useQuery({
		queryKey: ['get product by slug', params.slug],
		queryFn: () => ProductService.getBySlug(params.slug)
	})

	return { isLoading, product }
}
