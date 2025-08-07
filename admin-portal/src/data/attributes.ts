// Mock attributes data
export const useDeleteAttributeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting attribute:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateAttributeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating attribute:', data);
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

export const useUpdateAttributeMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating attribute:', data);
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

export const useAttributesQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Color',
      values: ['Red', 'Blue', 'Green'],
    },
    {
      id: 2,
      name: 'Size',
      values: ['Small', 'Medium', 'Large'],
    }
  ],
  isLoading: false,
  error: null
}); 