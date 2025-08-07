// Mock FAQs data
export const useDeleteFaqMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting FAQ:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateFaqMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating FAQ:', data);
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

export const useUpdateFaqMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating FAQ:', data);
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

export const useFaqsQuery = () => ({
  data: [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'You can place an order by browsing our products and adding them to your cart.',
      faq_topic: {
        id: 1,
        name: 'Ordering'
      }
    },
    {
      id: 2,
      question: 'What are your delivery options?',
      answer: 'We offer standard and express delivery options.',
      faq_topic: {
        id: 2,
        name: 'Delivery'
      }
    }
  ],
  isLoading: false,
  error: null
}); 