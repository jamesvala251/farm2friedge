// Mock shipping data
export const useDeleteShippingClassMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting shipping class:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateShippingClassMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating shipping class:', data);
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

export const useUpdateShippingClassMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating shipping class:', data);
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

export const useShippingClassesQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Standard Delivery',
      amount: 5.00
    },
    {
      id: 2,
      name: 'Express Delivery',
      amount: 10.00
    }
  ],
  isLoading: false,
  error: null
}); 