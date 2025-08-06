import type {
  CategoryQueryOptions,
  HomePageProps,
  PopularProductQueryOptions,
  SettingsQueryOptions,
  TypeQueryOptions,
  BestSellingProductQueryOptions,
} from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import invariant from 'tiny-invariant';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import {
  CATEGORIES_PER_PAGE,
  PRODUCTS_PER_PAGE,
  TYPES_PER_PAGE,
} from './client/variables';

type ParsedQueryParams = {
  pages: string[];
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async () => {
  const data = await client.types.all({ limit: 100 });
  const paths = data?.map((type) => ({ 
    params: { pages: [type.slug] }
  }));
  
  // We'll pre-render only these paths at build time also with the slash route.
  return {
    paths: paths.concat([{ params: { pages: [] } }]),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  HomePageProps,
  ParsedQueryParams
> = async ({ params }) => {
  const queryClient = new QueryClient();
  
  // Use hardcoded English locale
  const hardcodedLocale = 'en';
  
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS, { language: hardcodedLocale }],
    ({ queryKey }) => client.settings.all(queryKey[1] as SettingsQueryOptions)
  );
  const types = await queryClient.fetchQuery(
    [API_ENDPOINTS.TYPES, { limit: TYPES_PER_PAGE, language: hardcodedLocale }],
    ({ queryKey }) => client.types.all(queryKey[1] as TypeQueryOptions)
  );

  const { pages } = params!;
  let pageType: string | undefined;
  if (!pages) {
    pageType =
      types.find((type) => type?.settings?.isHome)?.slug ?? types?.[0]?.slug;
  } else {
    pageType = pages[0];
  }

  if (!types?.some((t) => t.slug === pageType)) {
    return {
      notFound: true,
      // This is require to regenerate the page
      revalidate: 120,
    };
  }

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.TYPES, { slug: pageType, language: hardcodedLocale }],
    ({ queryKey }: any) => client.types.get(queryKey[1])
  );
  const productVariables = {
    type: pageType,
    limit: PRODUCTS_PER_PAGE,
  };
  await queryClient.prefetchInfiniteQuery(
    [
      API_ENDPOINTS.PRODUCTS,
      { limit: PRODUCTS_PER_PAGE, type: pageType, language: hardcodedLocale },
    ],
    ({ queryKey }) => client.products.all(queryKey[1] as any)
  );

  const popularProductVariables = {
    type_slug: pageType,
    limit: 10,
    with: 'type;author',
    language: hardcodedLocale,
  };

  // Only prefetch popular products for `book` demo
  if (pageType === 'book') {
    await queryClient.prefetchQuery(
      [API_ENDPOINTS.PRODUCTS_POPULAR, popularProductVariables],
      ({ queryKey }) =>
        client.products.popular(queryKey[1] as PopularProductQueryOptions)
    );

    await queryClient.prefetchQuery(
      [API_ENDPOINTS.BEST_SELLING_PRODUCTS, popularProductVariables],
      ({ queryKey }) =>
        client.products.bestSelling(
          queryKey[1] as BestSellingProductQueryOptions
        )
    );
  }

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: CATEGORIES_PER_PAGE, language: hardcodedLocale }],
    ({ queryKey }) => client.categories.all(queryKey[1] as CategoryQueryOptions)
  );

  await queryClient.prefetchInfiniteQuery(
    [
      API_ENDPOINTS.PRODUCTS,
      { limit: PRODUCTS_PER_PAGE, language: hardcodedLocale },
    ],
    ({ queryKey }) => client.products.all(queryKey[1] as any)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      variables: {
        products: productVariables,
        categories: { limit: CATEGORIES_PER_PAGE, language: hardcodedLocale },
        types: { type: pageType },
        layoutSettings: types.find((t) => t.slug === pageType)?.settings || {},
      },
      layout: 'default',
      types: {
        type: pageType,
      },
    },
    revalidate: 60,
  };
};
