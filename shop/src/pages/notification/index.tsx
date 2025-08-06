import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function NotificationIndexPage() {
  return (
    <>
      <Head>
        <title>Notifications - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Notifications
          </h1>
          <p className="text-base text-body-dark">
            Stay updated with your latest notifications
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold">Recent Notifications</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {/* Sample notifications */}
              <div className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Order Confirmed</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Your order #ORD-12345 has been confirmed and is being processed.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <button className="ml-4 text-sm text-accent hover:text-accent-hover">
                    Mark as Read
                  </button>
                </div>
              </div>
              
              <div className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Delivery Update</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Your order #ORD-12344 is out for delivery. Expected delivery: Today between 2-4 PM.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">1 day ago</p>
                  </div>
                  <button className="ml-4 text-sm text-accent hover:text-accent-hover">
                    Mark as Read
                  </button>
                </div>
              </div>
              
              <div className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Special Offer</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Get 20% off on your next order! Use code SAVE20 at checkout.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">2 days ago</p>
                  </div>
                  <button className="ml-4 text-sm text-accent hover:text-accent-hover">
                    Mark as Read
                  </button>
                </div>
              </div>
              
              <div className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Welcome to eGroceryMart</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Thank you for joining eGroceryMart! Start shopping for fresh groceries today.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">1 week ago</p>
                  </div>
                  <span className="ml-4 text-sm text-gray-400">Marked as Read</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 px-6 py-4">
              <button className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

NotificationIndexPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
