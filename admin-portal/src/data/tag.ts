// Mock tag data
export const useDeleteTagMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting tag:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateTagMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating tag:', data);
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

export const useUpdateTagMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating tag:', data);
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

export const useTagsQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Organic',
      slug: 'organic'
    },
    {
      id: 2,
      name: 'Fresh',
      slug: 'fresh'
    }
  ],
  isLoading: false,
  error: null
}); 