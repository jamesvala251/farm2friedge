import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useLogout } from '@/framework/user';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function VerifyEmailPage() {
  const router = useRouter();
  const { mutate: logout, isLoading: isLogoutLoader } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <>
      <Head>
        <title>Verify Email - eGroceryMart</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <svg className="mx-auto h-16 w-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Email Not Verified
          </h1>
          
          <p className="mb-8 text-gray-600">
            Please check your email and click the verification link to activate your account.
          </p>
          
          <div className="space-y-4">
            <button
              className="w-full rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => router.push('/auth/resend-verification')}
            >
              Resend Verification Email
            </button>
            
            <button
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => handleLogout()}
              disabled={isLogoutLoader}
            >
              Logout
            </button>
            
            <button
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => router.push('/')}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

VerifyEmailPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
