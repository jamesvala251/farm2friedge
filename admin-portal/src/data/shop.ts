// Mock shop data for admin portal
export const shopData = {
  id: 1,
  name: 'eGroceryMart',
  slug: 'egrocerymart',
  description: 'Grocery Marketplace',
  logo: {
    id: 1,
    original: '/logo.svg',
    thumbnail: '/logo.svg',
  },
  cover_image: {
    id: 1,
    original: '/cover-image.jpg',
    thumbnail: '/cover-image.jpg',
  },
  address: {
    id: 1,
    title: 'Main Office',
    default: true,
    address: '123 Grocery Street',
    city: 'Auckland',
    state: 'Auckland',
    zip: '1010',
    country: 'New Zealand',
  },
  settings: {
    contact: '+1234567890',
    website: 'https://egrocerymart.com',
    location: {
      lat: -36.8485,
      lng: 174.7633,
    },
  },
  balance: {
    current_balance: 5000.00,
    total_earnings: 15000.00,
  },
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-12-07T00:00:00Z'
};

export const useShopQuery = (params?: any, options?: any) => ({
  data: shopData,
  isLoading: false,
  error: null
});

export const useCreateShopMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Creating shop:', data);
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

export const useUpdateShopMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating shop:', data);
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

export const useApproveShopMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Approving shop:', data);
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

export const useDisApproveShopMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Disapproving shop:', data);
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

export const useTransferShopOwnershipMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Transferring shop ownership:', data);
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