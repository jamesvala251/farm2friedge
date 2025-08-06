import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ThankYouPage() {
  const router = useRouter();
  const { tracking_number } = router.query;
  const [paymentStatus, setPaymentStatus] = useState('processing');

  useEffect(() => {
    // Simulate payment status check
    const statuses = ['pending', 'awaiting-approval', 'processing', 'success', 'reversal', 'failed'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setPaymentStatus(randomStatus);
  }, []);

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Payment is pending. Please complete the payment process.';
      case 'awaiting-approval':
        return 'Payment is awaiting approval. We will notify you once approved.';
      case 'processing':
        return 'Payment is being processed. Please wait...';
      case 'success':
        return 'Payment successful! Your order has been confirmed.';
      case 'reversal':
        return 'Payment has been reversed. Please contact support.';
      case 'failed':
        return 'Payment failed. Please try again or contact support.';
      default:
        return 'Payment status unknown.';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'failed':
      case 'reversal':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <>
      <Head>
        <title>Thank You - eGroceryMart</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Thank You for Your Order!
          </h1>
          
          <p className="mb-4 text-gray-600">
            Your order has been placed successfully.
          </p>
          
          {tracking_number && (
            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Order Tracking Number:</p>
              <p className="text-lg font-semibold text-gray-900">{tracking_number}</p>
            </div>
          )}
          
          <div className={`mb-6 rounded-lg p-4 ${getStatusColor(paymentStatus)}`}>
            <p className="font-medium">{getStatusMessage(paymentStatus)}</p>
          </div>
          
          <div className="space-y-4">
            <button
              className="w-full rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => router.push('/orders')}
            >
              View My Orders
            </button>
            
            <button
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => router.push('/')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ThankYouPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
