// Mock product data
export const useDeleteProductMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Deleting product:', data);
    if (options?.onSuccess) {
      options.onSuccess();
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
});

export const useCreateProductMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating product:', data);
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

export const useUpdateProductMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating product:', data);
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

export const useProductsQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Fresh Apples',
      price: 2.99,
      image: '/img/products/apples.jpg',
      category: 'Fruits & Vegetables'
    },
    {
      id: 2,
      name: 'Organic Milk',
      price: 3.49,
      image: '/img/products/milk.jpg',
      category: 'Dairy & Eggs'
    }
  ],
  isLoading: false,
  error: null
}); 