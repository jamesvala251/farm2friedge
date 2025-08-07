// Mock staff data
export const useAddStaffMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Adding staff:', data);
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

export const useRemoveStaffMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Removing staff:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useStaffQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Manager',
      email: 'manager@shop.com',
      role: 'manager'
    },
    {
      id: 2,
      name: 'Cashier',
      email: 'cashier@shop.com',
      role: 'cashier'
    }
  ],
  isLoading: false,
  error: null
}); 