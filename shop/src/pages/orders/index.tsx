import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function OrdersIndexPage() {
  return (
    <>
      <Head>
        <title>My Orders - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            My Orders
          </h1>
          <p className="text-base text-body-dark">
            Track your order history and current orders
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Current Order */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Current Order</h2>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                Processing
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">Order #ORD-12345</p>
              <p className="text-sm text-gray-600">Placed on: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Fresh Tomatoes</span>
                <span className="text-sm">$2.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Organic Bananas</span>
                <span className="text-sm">$1.49</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Whole Milk</span>
                <span className="text-sm">$3.99</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <span className="font-semibold">Total: $8.47</span>
              <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                Track Order
              </button>
            </div>
          </div>
          
          {/* Past Orders */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Past Orders</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="font-medium">Order #ORD-12344</p>
                  <p className="text-sm text-gray-600">Delivered on Dec 15, 2024</p>
                  <p className="text-sm text-gray-600">Total: $12.99</p>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                    Reorder
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="font-medium">Order #ORD-12343</p>
                  <p className="text-sm text-gray-600">Delivered on Dec 10, 2024</p>
                  <p className="text-sm text-gray-600">Total: $8.75</p>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                    Reorder
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order #ORD-12342</p>
                  <p className="text-sm text-gray-600">Delivered on Dec 5, 2024</p>
                  <p className="text-sm text-gray-600">Total: $15.50</p>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

OrdersIndexPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
