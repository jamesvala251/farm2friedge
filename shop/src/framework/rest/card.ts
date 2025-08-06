import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Card } from '@/types';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import client from '@/framework/client';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { toast } from 'react-toastify';

import { useUser } from '@/framework/user';

export function useCards(params?: any, options?: any) {
  const { isAuthorized } = useUser();

  const { data, isLoading, error } = useQuery<Card[], Error>(
    [API_ENDPOINTS.CARDS, params],
    () => client.cards.all(params),
    {
      enabled: isAuthorized,
      ...options,
    }
  );

  return {
    cards: data ?? [],
    isLoading,
    error,
  };
}

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  
  const { closeModal } = useModalAction();

  const { mutate, isLoading, error } = useMutation(client.cards.remove, {
    onSuccess: () => {
      closeModal();
      toast.success("Card successfully deleted");
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.CARDS);
    },
  });

  return {
    deleteCard: mutate,
    isLoading,
    error,
  };
};

export function useAddCards(method_key?: any) {
  
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(
    client.cards.addPaymentMethod,
    {
      onSuccess: () => {
        closeModal();
        toast.success("Card successfully added", {
          toastId: 'success',
        });
      },
      onError: (error) => {
        const {
          response: { data },
        }: any = error ?? {};
        toast.error(data?.message || "Something went wrong", {
          toastId: 'error',
        });
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.CARDS);
      },
    }
  );

  return {
    addNewCard: mutate,
    isLoading,
    error,
  };
}

export function useDefaultPaymentMethod() {
  
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(
    client.cards.makeDefaultPaymentMethod,
    {
      onSuccess: () => {
        toast.success("Default payment method set successfully");
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.CARDS);
      },
    }
  );

  return {
    createDefaultPaymentMethod: mutate,
    isLoading,
    error,
  };
}
