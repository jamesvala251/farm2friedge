// Mock manufacturer data
export const useManufacturersQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Fresh Foods Ltd',
      slug: 'fresh-foods'
    },
    {
      id: 2,
      name: 'Organic Valley',
      slug: 'organic-valley'
    }
  ],
  isLoading: false,
  error: null
}); 