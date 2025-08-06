import type {
  PopularProductQueryOptions,
  Product,
  ProductPaginator,
  ProductQueryOptions,
  QuestionPaginator,
  QuestionQueryOptions,
  BestSellingProductQueryOptions,
  GetParams,
} from '@/types';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import { mapPaginatorData } from '@/framework/utils/data-mappers';
import { formatProductsArgs } from '@/framework/utils/format-products-args';

import { useModalAction } from '@/components/ui/modal/modal.context';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export function useProducts(options?: Partial<ProductQueryOptions>) {
  const { locale } = useRouter();

  const formattedOptions = {
    ...formatProductsArgs(options),
    language: locale,
  };

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<ProductPaginator, Error>(
    [API_ENDPOINTS.PRODUCTS, formattedOptions],
    ({ queryKey, pageParam }) =>
      client.products.all(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    },
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    products: data?.pages?.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    error,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}

export const usePopularProducts = (
  options?: Partial<PopularProductQueryOptions>,
) => {
  const { locale } = useRouter();

  const formattedOptions = {
    ...options,
    language: locale,
  };

  const { data, isLoading, error } = useQuery<Product[], Error>(
    [API_ENDPOINTS.PRODUCTS_POPULAR, formattedOptions],
    ({ queryKey }) =>
      client.products.popular(queryKey[1] as PopularProductQueryOptions),
  );

  return {
    products: data ?? [],
    isLoading,
    error,
  };
};

export const useBestSellingProducts = (
  options?: Partial<BestSellingProductQueryOptions>,
) => {
  const { locale } = useRouter();

  const formattedOptions = {
    ...options,
    language: locale,
  };

  const { data, isLoading, error } = useQuery<Product[], Error>(
    [API_ENDPOINTS.BEST_SELLING_PRODUCTS, formattedOptions],
    ({ queryKey }) =>
      client.products.bestSelling(
        queryKey[1] as BestSellingProductQueryOptions,
      ),
  );

  return {
    products: data ?? [],
    isLoading,
    error,
  };
};

export function useProduct({ slug }: { slug: string }) {
  const { locale: language } = useRouter();

  const { data, isLoading, error } = useQuery<Product, Error>(
    [API_ENDPOINTS.PRODUCTS, { slug, language }],
    () => client.products.get({ slug, language }),
  );
  return {
    product: data,
    isLoading,
    error,
  };
}

export function useQuestions(options?: Partial<QuestionQueryOptions>) {
  const {
    data: response,
    isLoading,
    error,
    isFetching,
  } = useQuery<QuestionPaginator, Error>(
    [API_ENDPOINTS.PRODUCTS_QUESTIONS, options],
    ({ queryKey }) =>
      client.products.questions(
        Object.assign({}, queryKey[1] as QuestionQueryOptions),
      ),
    {
      keepPreviousData: true,
    },
  );
  return {
    questions: response?.data ?? [],
    paginatorInfo: mapPaginatorData(response),
    isLoading,
    error,
    isFetching,
  };
}

export function useCreateFeedback() {
  
  const queryClient = useQueryClient();
  const { mutate: createFeedback, isLoading } = useMutation(
    client.products.createFeedback,
    {
      onSuccess: (res) => {
        toast.success("Feedback submitted successfully");
        queryClient.refetchQueries(API_ENDPOINTS.PRODUCTS_QUESTIONS);
        queryClient.refetchQueries(API_ENDPOINTS.PRODUCTS_REVIEWS);
      },
    },
  );
  return {
    createFeedback,
    isLoading,
  };
}

export function useCreateAbuseReport() {
  
  const { closeModal } = useModalAction();
  const { mutate: createAbuseReport, isLoading } = useMutation(
    client.products.createAbuseReport,
    {
      onSuccess: () => {
        toast.success("Abuse report submitted successfully");
      },
      onError: (error) => {
        const {
          response: { data },
        }: any = error ?? {};

        toast.error(data?.message || "Something went wrong");
      },
      onSettled: () => {
        closeModal();
      },
    },
  );
  return {
    createAbuseReport,
    isLoading,
  };
}

export function useCreateQuestion() {
  
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  const { mutate: createQuestion, isLoading } = useMutation(
    client.products.createQuestion,
    {
      onSuccess: () => {
        toast.success("Question submitted successfully");
      },
      onError: (error) => {
        const {
          response: { data },
        }: any = error ?? {};

        toast.error(data?.message || "Something went wrong");
      },
      onSettled: () => {
        closeModal();
      },
    },
  );
  return {
    createQuestion,
    isLoading,
  };
}
