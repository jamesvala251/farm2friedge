import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function WishlistsPage() {
  return (
    <>
      <Head>
        <title>My Wishlist - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            My Wishlist
          </h1>
          <p className="text-base text-body-dark">
            Save your favorite products for later
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Wishlist Items */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Fresh Tomatoes</h3>
            <p className="mb-2 text-sm text-gray-600">Organic red tomatoes</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$2.99/lb</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Organic Bananas</h3>
            <p className="mb-2 text-sm text-gray-600">Fresh yellow bananas</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$1.49/lb</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Whole Milk</h3>
            <p className="mb-2 text-sm text-gray-600">Fresh dairy milk</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$3.99/gallon</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Fresh Bread</h3>
            <p className="mb-2 text-sm text-gray-600">Artisan whole wheat bread</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$4.99/loaf</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Organic Apples</h3>
            <p className="mb-2 text-sm text-gray-600">Fresh red apples</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$1.99/lb</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <h3 className="mb-1 font-semibold">Fresh Spinach</h3>
            <p className="mb-2 text-sm text-gray-600">Organic baby spinach</p>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-bold text-accent">$2.49/bag</span>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-md bg-accent px-3 py-2 text-sm text-white hover:bg-accent-hover">
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Empty State */}
        <div className="mt-12 text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold">Your wishlist is empty</h3>
          <p className="mb-4 text-gray-600">Start adding products you love to your wishlist</p>
          <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
            Start Shopping
          </button>
        </div>
      </section>
    </>
  );
}

WishlistsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
