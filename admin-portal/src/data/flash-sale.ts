// Mock flash sale data
export const useDeleteFlashSaleMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting flash sale:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateFlashSaleMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating flash sale:', data);
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

export const useUpdateFlashSaleMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating flash sale:', data);
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

export const useFlashSalesQuery = () => ({
  data: [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Get 50% off on fresh fruits',
      start_date: '2024-12-01',
      end_date: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      title: 'Holiday Special',
      description: 'Special discounts on dairy products',
      start_date: '2024-12-15',
      end_date: '2024-12-25',
      status: 'upcoming'
    }
  ],
  isLoading: false,
  error: null
}); 