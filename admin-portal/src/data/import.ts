// Mock import data
export const useImportAttributesMutation = () => ({
  mutate: (data: any) => {
    console.log('Importing attributes:', data);
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
}); 