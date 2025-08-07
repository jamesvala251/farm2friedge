import LoginForm from '@/components/auth/login-form';
import { useRouter } from 'next/router';
import AuthPageLayout from '@/components/layouts/auth-layout';
import { Routes } from '@/config/routes';
import { getAuthCredentials, isAuthenticated } from '@/utils/auth-utils';

export default function LoginPage() {
  const router = useRouter();
  const { token, permissions } = getAuthCredentials();
  
  if (isAuthenticated({ token, permissions })) {
    router.replace(Routes.dashboard);
  }

  return (
    <AuthPageLayout>
      <h3 className="mb-6 mt-4 text-center text-base italic text-body">
        eGroceryMart Admin Portal
      </h3>
      <LoginForm />
    </AuthPageLayout>
  );
} 