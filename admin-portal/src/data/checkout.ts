// Mock checkout data
export const useCheckoutAvailabilityMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Checking checkout availability:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateOrderMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating order:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
}); 