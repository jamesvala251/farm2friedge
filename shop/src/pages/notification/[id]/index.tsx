import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function NotificationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Notification Details - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-4xl px-4 py-8 lg:py-10">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="mb-4 flex items-center text-sm text-accent hover:text-accent-hover"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Notifications
          </button>
          
          <h1 className="text-2xl font-bold text-heading lg:text-3xl">
            Notification Details
          </h1>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">Order Confirmed</h2>
            <p className="text-sm text-gray-500">Notification ID: {id}</p>
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-4">
              Your order #ORD-12345 has been successfully confirmed and is now being processed by our team.
            </p>
            
            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold">Order Details:</h3>
              <ul className="space-y-1 text-sm">
                <li><strong>Order Number:</strong> ORD-12345</li>
                <li><strong>Order Date:</strong> {new Date().toLocaleDateString()}</li>
                <li><strong>Total Amount:</strong> $45.67</li>
                <li><strong>Payment Status:</strong> Confirmed</li>
                <li><strong>Delivery Status:</strong> Processing</li>
              </ul>
            </div>
            
            <p className="mb-4">
              We will send you updates about your order status via email and SMS. You can also track your order in real-time through your account dashboard.
            </p>
            
            <p>
              If you have any questions about your order, please don't hesitate to contact our customer support team.
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-500">
              Created at: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="flex space-x-2">
              <button className="rounded-md bg-accent px-4 py-2 text-sm text-white hover:bg-accent-hover">
                Mark as Read
              </button>
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                View Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

NotificationDetailPage.getLayout = getLayout;

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
