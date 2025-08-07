// Mock withdraw data
export const withdrawData = {
  withdraws: [
    {
      id: 1,
      amount: 500.00,
      status: 'Approved',
      shop: {
        name: 'Fresh Grocery Store',
        logo: '/img/shops/fresh-grocery.jpg'
      },
      created_at: '2024-12-07T09:00:00Z'
    },
    {
      id: 2,
      amount: 750.00,
      status: 'Pending',
      shop: {
        name: 'Organic Market',
        logo: '/img/shops/organic-market.jpg'
      },
      created_at: '2024-12-07T08:30:00Z'
    },
    {
      id: 3,
      amount: 320.00,
      status: 'Approved',
      shop: {
        name: 'Local Farm Fresh',
        logo: '/img/shops/farm-fresh.jpg'
      },
      created_at: '2024-12-07T08:00:00Z'
    }
  ]
};

export const useWithdrawsQuery = () => ({
  data: withdrawData.withdraws,
  isLoading: false,
  error: null
});

export const useCreateWithdrawMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating withdraw:', data);
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