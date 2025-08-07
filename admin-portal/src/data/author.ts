// Mock author data
export const useDeleteAuthorMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting author:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateAuthorMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating author:', data);
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

export const useUpdateAuthorMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating author:', data);
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

export const useAuthorsQuery = () => ({
  data: [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Grocery expert',
      avatar: '/img/authors/john-doe.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Nutrition specialist',
      avatar: '/img/authors/jane-smith.jpg'
    }
  ],
  isLoading: false,
  error: null
}); 