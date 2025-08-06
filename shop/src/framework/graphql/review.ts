import { useModalAction } from '@/components/ui/modal/modal.context';
import type { ReviewQueryOptions } from '@/types';

import { toast } from 'react-toastify';
import { CreateReviewInput, UpdateReviewInput } from '__generated__/__types__';
import {
  useCreateReviewMutation,
  useReviewsQuery,
  useUpdateReviewMutation,
} from './gql/reviews.graphql';
import { OrdersDocument } from '@/framework/gql/orders.graphql';

export function useReviews({
  limit,
  rating,
  orderBy,
  sortedBy,
  ...options
}: Partial<ReviewQueryOptions>) {
  const {
    data,
    loading: isLoading,
    error,
  } = useReviewsQuery({
    // @ts-ignore
    variables: {
      ...options,
      ...(limit && { first: limit }),
      ...(rating && { rating: Number(rating) }),
      ...(orderBy && {
        orderBy: [{ column: orderBy.toUpperCase(), order: sortedBy }],
      }),
    },
  });
  return {
    reviews: data?.reviews?.data ?? [],
    paginatorInfo: data?.reviews?.paginatorInfo,
    isLoading,
    error,
  };
}

export function useCreateReview() {
  
  const { closeModal } = useModalAction();
  const [create, { loading: isLoading }] = useCreateReviewMutation({
    onCompleted: (data:any) => {
      toast.success("text-review-request-submitted");
      closeModal();
    },
    refetchQueries: [
      {
        query: OrdersDocument,
      },
    ],
  });

  function createReview(input: CreateReviewInput) {
    create({ variables: { input } });
  }

  return {
    createReview,
    isLoading,
  };
}

export function useUpdateReview() {
  
  const { closeModal } = useModalAction();
  const [update, { loading: isLoading }] = useUpdateReviewMutation({
    onCompleted: (data:any) => {
      toast.success("text-review-request-update-submitted");
      closeModal();
    },
    refetchQueries: [
      {
        query: OrdersDocument,
      },
    ],
  });

  function updateReview({ id, ...input }: UpdateReviewInput & { id: string }) {
    update({ variables: { id, input } });
  }

  return {
    updateReview,
    isLoading,
  };
}
