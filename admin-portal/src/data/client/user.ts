// Mock client user data
export const useUsersQuery = () => ({
  data: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      profile: {
        avatar: '/img/avatars/john.jpg'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      profile: {
        avatar: '/img/avatars/jane.jpg'
      }
    }
  ],
  isLoading: false,
  error: null
}); 