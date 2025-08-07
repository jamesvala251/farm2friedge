// Mock conversations data
export const conversationsData = [
  {
    id: 1,
    message: 'New order received from customer',
    type: 'order',
    read: false,
    created_at: '2024-12-07T10:00:00Z'
  },
  {
    id: 2,
    message: 'Vendor approval request pending',
    type: 'vendor',
    read: false,
    created_at: '2024-12-07T09:30:00Z'
  },
  {
    id: 3,
    message: 'Payment processed successfully',
    type: 'payment',
    read: true,
    created_at: '2024-12-07T09:00:00Z'
  }
];

export const useConversationsQuery = () => ({
  data: conversationsData,
  isLoading: false,
  error: null
});

export const useMessageSeen = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Marking message as seen:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateConversations = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating conversation:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
}); 