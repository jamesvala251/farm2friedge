import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ShopsSearchPage() {
  return (
    <>
      <Head>
        <title>Search Shops - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Search Shops
          </h1>
          <p className="text-base text-body-dark">
            Find shops near you or search by location
          </p>
        </div>
        
        {/* Search Section */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name</label>
              <input
                type="text"
                placeholder="Enter shop name..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city or address..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="rounded-md bg-accent px-6 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Search Shops
            </button>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">All Shops</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-lg font-semibold">Fresh Market</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh fruits, vegetables, and dairy products</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ 4.5 (120 reviews)</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Visit Shop
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-lg font-semibold">Organic Corner</h3>
              <p className="mb-2 text-sm text-gray-600">100% organic and natural products</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ 4.8 (85 reviews)</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Visit Shop
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-lg font-semibold">Quick Mart</h3>
              <p className="mb-2 text-sm text-gray-600">Convenience store with everyday essentials</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ 4.2 (95 reviews)</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Visit Shop
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Near You Section */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Near You</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-lg font-semibold">Local Grocery</h3>
              <p className="mb-2 text-sm text-gray-600">0.5 km away • Fresh local produce</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ 4.3 (67 reviews)</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Visit Shop
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-2 text-lg font-semibold">Corner Store</h3>
              <p className="mb-2 text-sm text-gray-600">1.2 km away • 24/7 convenience</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ 4.1 (45 reviews)</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Visit Shop
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="rounded-md bg-accent px-6 py-3 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Load More
          </button>
        </div>
      </section>
    </>
  );
}

ShopsSearchPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
