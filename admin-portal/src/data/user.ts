// Mock user data for admin portal
export const userData = {
  id: 1,
  name: 'Admin User',
  email: 'admin@egrocerymart.com',
  profile: {
    id: 1,
    avatar: {
      id: 1,
      original: '/img/avatar.jpg',
      thumbnail: '/img/avatar.jpg',
    },
    bio: 'Administrator',
    contact: '+1234567890',
  },
  permissions: ['SUPER_ADMIN'],
  role: 'SUPER_ADMIN',
  is_active: true,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-12-07T00:00:00Z'
};

export const useMeQuery = () => ({
  data: userData,
  isLoading: false,
  error: null
});

export const useRegisterMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Registering user:', data);
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

export const useUpdateUserMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating user:', data);
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

export const useUpdateUserEmailMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Updating user email:', data);
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

export const useChangePasswordMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Changing password:', data);
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

export const useForgetPasswordMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Forgetting password:', data);
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

export const useVerifyForgetPasswordTokenMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Verifying forget password token:', data);
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

export const useResetPasswordMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Resetting password:', data);
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

export const useLogin = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Logging in:', data);
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

export const useMakeOrRevokeAdminMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Making/Revoking admin:', data);
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

export const useBlockUserMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Blocking user:', data);
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

export const useUnblockUserMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Unblocking user:', data);
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

export const useAddWalletPointsMutation = () => ({
  mutate: (data: any, options?: any) => {
    console.log('Adding wallet points:', data);
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

export const useVendorsQuery = () => ({
  data: [
    {
      id: 1,
      name: 'Vendor 1',
      email: 'vendor1@example.com',
    },
    {
      id: 2,
      name: 'Vendor 2',
      email: 'vendor2@example.com',
    }
  ],
  isLoading: false,
  error: null
}); 