// Mock notify logs data
export const useNotifyLogsQuery = () => ({
  data: [
    {
      id: 1,
      type: 'order',
      message: 'New order received',
      read: false,
      created_at: '2024-12-07T10:00:00Z'
    },
    {
      id: 2,
      type: 'vendor',
      message: 'Vendor approval pending',
      read: false,
      created_at: '2024-12-07T09:30:00Z'
    }
  ],
  isLoading: false,
  error: null
}); 