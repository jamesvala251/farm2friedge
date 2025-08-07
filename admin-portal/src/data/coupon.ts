// Mock coupon data
export const useDeleteCouponMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting coupon:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateCouponMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating coupon:', data);
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

export const useUpdateCouponMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating coupon:', data);
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

export const useApproveCouponMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Approving coupon:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useDisApproveCouponMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Disapproving coupon:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCouponsQuery = () => ({
  data: [
    {
      id: 1,
      code: 'SAVE10',
      discount: 10,
      type: 'percentage',
      status: 'approved'
    },
    {
      id: 2,
      code: 'FREESHIP',
      discount: 5,
      type: 'fixed',
      status: 'pending'
    }
  ],
  isLoading: false,
  error: null
}); 