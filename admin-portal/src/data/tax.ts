// Mock tax data
export const useDeleteTaxMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting tax:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateTaxMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating tax:', data);
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

export const useUpdateTaxMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating tax:', data);
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

export const useTaxesQuery = () => ({
  data: [
    {
      id: 1,
      name: 'GST',
      rate: 15,
      country: 'New Zealand'
    },
    {
      id: 2,
      name: 'VAT',
      rate: 20,
      country: 'United Kingdom'
    }
  ],
  isLoading: false,
  error: null
}); 