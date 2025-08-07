// Mock ownership transfer data
export const useDeleteOwnershipTransferMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting ownership transfer:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useUpdateOwnerTransferMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating ownership transfer:', data);
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

export const useOwnershipTransfersQuery = () => ({
  data: [
    {
      id: 1,
      shop: 'Fresh Grocery Store',
      from_owner: 'John Doe',
      to_owner: 'Jane Smith',
      status: 'pending'
    },
    {
      id: 2,
      shop: 'Organic Market',
      from_owner: 'Mike Johnson',
      to_owner: 'Sarah Wilson',
      status: 'approved'
    }
  ],
  isLoading: false,
  error: null
}); 