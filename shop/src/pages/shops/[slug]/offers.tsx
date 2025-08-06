import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ShopOffersPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Shop Offers - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Special Offers
          </h1>
          <p className="text-base text-body-dark">
            Exclusive deals and discounts from {slug}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample offers */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-red-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-red-600">20% OFF</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Fresh Vegetables</h3>
            <p className="mb-4 text-sm text-gray-600">Get 20% off on all fresh vegetables this week</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Valid until: Dec 31, 2024</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-green-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600">BUY 2 GET 1</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Organic Fruits</h3>
            <p className="mb-4 text-sm text-gray-600">Buy 2 organic fruits and get 1 free</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Valid until: Dec 25, 2024</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">FREE DELIVERY</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Orders Over $50</h3>
            <p className="mb-4 text-sm text-gray-600">Free delivery on orders above $50</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Always available</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-yellow-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-600">15% OFF</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Dairy Products</h3>
            <p className="mb-4 text-sm text-gray-600">15% discount on all dairy products</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Valid until: Dec 28, 2024</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-purple-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">FLASH SALE</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Bakery Items</h3>
            <p className="mb-4 text-sm text-gray-600">Flash sale on fresh bakery items</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Today only</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
            <div className="mb-4 h-32 w-full rounded-lg bg-orange-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">25% OFF</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Spices & Condiments</h3>
            <p className="mb-4 text-sm text-gray-600">25% off on premium spices</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Valid until: Dec 30, 2024</span>
              <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                Shop Now
              </button>
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

ShopOffersPage.getLayout = getLayout;

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
