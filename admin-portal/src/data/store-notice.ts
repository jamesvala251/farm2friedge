// Mock store notice data
export const useDeleteStoreNoticeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting store notice:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateStoreNoticeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating store notice:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    if (options?.onError) {
      // Simulate error handling
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useUpdateStoreNoticeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating store notice:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    if (options?.onError) {
      // Simulate error handling
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useStoreNoticeRead = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Marking store notice as read:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useUsersOrShopsQuery = () => ({
  data: [
    {
      id: 1,
      name: 'All Users',
      type: 'user'
    },
    {
      id: 2,
      name: 'All Shops',
      type: 'shop'
    }
  ],
  isLoading: false,
  error: null
}); 