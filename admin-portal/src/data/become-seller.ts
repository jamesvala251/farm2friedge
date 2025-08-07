// Mock become-seller data
export const useCreateBecomeSellerMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating become seller request:', data);
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