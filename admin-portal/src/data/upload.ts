// Mock upload data
export const useUploadMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Uploading file:', data);
    if (options?.onSuccess) {
      options.onSuccess({
        id: 1,
        original: '/uploads/file.jpg',
        thumbnail: '/uploads/file-thumb.jpg'
      });
    }
    return Promise.resolve({ success: true });
  },
  isLoading: false,
  error: null
}); 