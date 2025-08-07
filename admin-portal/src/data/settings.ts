// Mock settings data for admin portal
export const settingsData = {
  id: 1,
  options: {
    siteTitle: 'eGroceryMart',
    siteSubtitle: 'Grocery Marketplace',
    currency: 'USD',
    currencyToUSD: 1,
    minimumOrderAmount: 0,
    deliveryTime: [
      { title: 'Express Delivery', description: '90 min express delivery' },
      { title: 'Standard Delivery', description: '2-3 hours delivery' },
      { title: 'Free Delivery', description: '5-6 hours delivery' },
    ],
    freeDeliveryAmount: 0,
    freeDeliveryKm: 0,
    taxClass: 'food-grocery-tax',
    shippingClass: 'food-grocery-shipping',
  },
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-12-07T00:00:00Z'
};

export const useSettingsQuery = (params?: any) => ({
  data: settingsData,
  isLoading: false,
  error: null
});

export const useUpdateSettingsMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating settings:', data);
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