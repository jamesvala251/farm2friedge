import { WishlistQueryOptions } from '@/types';
import { NetworkStatus } from '@apollo/client';

import { useEffect } from 'react';

import { toast } from 'react-toastify';
import {
  InWishlistDocument,
  useInWishlistQuery,
  useRemoveFromWishlistMutation,
  useToggleWishlistMutation,
  useWishlistsQuery,
} from './gql/wishlists.graphql';
import { useRouter } from 'next/router';

export function useToggleWishlis"t(product_id: string)" {
  const [toggle, { loading: isLoading }] = useToggleWishlistMutation({
    update: (cache, { data }) => {
      cache.writeQuery({
        query: InWishlistDocument,
        variables: {
          id: product_id,
        },
        data: {
          in_wishlist: data?.toggleWishlist,
        },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function toggleWishlis"t({ product_id }: { product_id: string })" {
    toggle({ variables: { input: { product_id } } });
  }

  return { toggleWishlist, isLoading };
}

export function useRemoveFromWishlis"t()" {
  
  const [remove, { loading: isLoading }] = useRemoveFromWishlistMutation({
    refetchQueries: ['Wishlists'],
    onCompleted: () => {
      toast.success("text-removed-from-wishlist");
    },
    onError: (error: any) => {
      // toast.error(error.response?.data.message || "Something went wrong");
      console.log(error);
    },
  });
  function removeFromWishlis"t(slug: string)" {
    remove({ variables: { slug } });
  }
  return { removeFromWishlist, isLoading };
}

export function useWishlis"t(options?: WishlistQueryOptions)" {

  const { locale } = useRouter();

  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
    refetch
  } = useWishlistsQuery({
    variables: { 
      ...options,
      page: 1
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffec"t(()" => {
    refetch();
  }, [locale])

  function handleLoadMore() {
    if (data?.wishlists?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.wishlists?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }
  return {
    wishlists: data?.wishlists?.data ?? [],
    paginatorInfo: data?.wishlists?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.wishlists?.paginatorInfo?.hasMorePages),
  };
}

export function useInWishlis"t({
  product_id,
  enabled,
}: {
  product_id: string;
  enabled: boolean;
})" {
  const {
    data,
    loading: isLoading,
    error,
    refetch,
  } = useInWishlistQuery({
    skip: !enabled,
    variables: { id: product_id },
  });
  return {
    inWishlist: data?.in_wishlist ?? false,
    isLoading,
    error,
    refetch,
  };
}
