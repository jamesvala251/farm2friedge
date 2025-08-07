// Mock flash sale vendor request data
export const useDeleteFlashSaleVendorRequestMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting flash sale vendor request:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateFlashSaleVendorRequestMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating flash sale vendor request:', data);
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

export const useUpdateFlashSaleVendorRequestMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating flash sale vendor request:', data);
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

export const useApproveFlashSaleVendorRequestMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Approving flash sale vendor request:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useDisApproveFlashSaleVendorRequestMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Disapproving flash sale vendor request:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useFlashSaleVendorRequestsQuery = () => ({
  data: [
    {
      id: 1,
      vendor: 'Fresh Grocery Store',
      product: 'Organic Apples',
      status: 'pending'
    },
    {
      id: 2,
      vendor: 'Local Farm Fresh',
      product: 'Fresh Milk',
      status: 'approved'
    }
  ],
  isLoading: false,
  error: null
}); 