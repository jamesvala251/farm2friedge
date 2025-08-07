// Mock category data
export const useDeleteCategoryMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting category:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateCategoryMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating category:', data);
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

export const useUpdateCategoryMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating category:', data);
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

export const useCategoriesQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Fruits & Vegetables',
      slug: 'fruits-vegetables',
      image: '/img/categories/fruits-vegetables.jpg'
    },
    {
      id: 2,
      name: 'Dairy & Eggs',
      slug: 'dairy-eggs',
      image: '/img/categories/dairy-eggs.jpg'
    }
  ],
  isLoading: false,
  error: null
}); 