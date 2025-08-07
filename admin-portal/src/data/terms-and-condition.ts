// Mock terms and condition data
export const useDeleteTermsAndConditionsMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting terms and conditions:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateTermsAndConditionsMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating terms and conditions:', data);
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

export const useUpdateTermsAndConditionsMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating terms and conditions:', data);
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

export const useApproveTermAndConditionMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Approving terms and conditions:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useDisApproveTermAndConditionMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Disapproving terms and conditions:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useTermsAndConditionsQuery = () => ({
  data: [
    {
      id: 1,
      title: 'Terms of Service',
      content: 'These are the terms of service...',
      status: 'approved'
    },
    {
      id: 2,
      title: 'Privacy Policy',
      content: 'This is our privacy policy...',
      status: 'pending'
    }
  ],
  isLoading: false,
  error: null
}); 