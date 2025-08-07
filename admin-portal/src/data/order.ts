// Mock order data
export const useOrdersQuery = () => ({
  data: [
    {
      id: 1,
      order_number: 'ORD-001',
      status: 'Delivered',
      total: 25.99,
      customer: 'John Doe',
      created_at: '2024-12-07T10:00:00Z'
    },
    {
      id: 2,
      order_number: 'ORD-002',
      status: 'Processing',
      total: 15.50,
      customer: 'Jane Smith',
      created_at: '2024-12-07T09:30:00Z'
    }
  ],
  isLoading: false,
  error: null
});

export const useUpdateOrderMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating order:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
}); 