// Mock question data
export const useDeleteQuestionMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting question:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useQuestionsQuery = () => ({
  data: [
    {
      id: 1,
      question: 'Is this product organic?',
      answer: 'Yes, this product is certified organic.',
      product: 'Fresh Apples',
      customer: 'John Doe',
      status: 'answered'
    },
    {
      id: 2,
      question: 'What is the expiry date?',
      answer: null,
      product: 'Organic Milk',
      customer: 'Jane Smith',
      status: 'pending'
    }
  ],
  isLoading: false,
  error: null
}); 