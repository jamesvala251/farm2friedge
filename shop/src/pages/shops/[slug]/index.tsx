import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ShopMainPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        {/* Shop Header */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-lg bg-gray-200"></div>
            <div>
              <h1 className="text-2xl font-bold text-heading">{slug}</h1>
              <p className="text-gray-600">Fresh groceries and everyday essentials</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span>⭐ 4.5 (120 reviews)</span>
                <span>• Free delivery on orders over $50</span>
                <span>• Same-day delivery available</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Products */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Featured Products</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Fresh Tomatoes</h3>
              <p className="mb-2 text-sm text-gray-600">Organic red tomatoes</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$2.99/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Organic Bananas</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh yellow bananas</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$1.49/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Whole Milk</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh dairy milk</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$3.99/gallon</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Fresh Bread</h3>
              <p className="mb-2 text-sm text-gray-600">Artisan whole wheat bread</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$4.99/loaf</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Shop by Category</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-semibold">Fresh Produce</h3>
              <p className="mb-4 text-sm text-gray-600">Fruits, vegetables, and herbs</p>
              <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                Browse Category
              </button>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-semibold">Dairy & Eggs</h3>
              <p className="mb-4 text-sm text-gray-600">Milk, cheese, yogurt, and eggs</p>
              <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                Browse Category
              </button>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-semibold">Bakery</h3>
              <p className="mb-4 text-sm text-gray-600">Fresh bread, pastries, and cakes</p>
              <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                Browse Category
              </button>
            </div>
          </div>
        </div>
        
        {/* Special Offers */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Special Offers</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-red-800">20% Off Vegetables</h3>
              <p className="mb-4 text-sm text-red-600">Get 20% off on all fresh vegetables this week</p>
              <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Shop Now
              </button>
            </div>
            
            <div className="rounded-lg border border-green-200 bg-green-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-green-800">Free Delivery</h3>
              <p className="mb-4 text-sm text-green-600">Free delivery on orders over $50</p>
              <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ShopMainPage.getLayout = getLayout;

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
