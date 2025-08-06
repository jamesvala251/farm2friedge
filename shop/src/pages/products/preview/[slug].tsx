import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useState } from 'react';

export default function ProductPreviewPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Head>
        <title>Preview: {slug} - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        {/* Preview Banner */}
        <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="font-medium text-yellow-800">Preview Mode</span>
          </div>
          <p className="mt-2 text-sm text-yellow-700">
            This is a preview of the product. It may not be available for purchase yet.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 h-96 w-full rounded-lg bg-gray-200"></div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-20 w-full rounded-lg bg-gray-200"></div>
              <div className="h-20 w-full rounded-lg bg-gray-200"></div>
              <div className="h-20 w-full rounded-lg bg-gray-200"></div>
              <div className="h-20 w-full rounded-lg bg-gray-200"></div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-heading">{slug}</h1>
              <p className="mb-4 text-lg text-gray-600">Fresh organic product (Preview)</p>
              <div className="mb-4 flex items-center space-x-2">
                <span className="text-2xl font-bold text-accent">$2.99</span>
                <span className="text-sm text-gray-500 line-through">$3.99</span>
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                  25% OFF
                </span>
              </div>
              <div className="mb-4 flex items-center space-x-2">
                <span className="text-sm text-gray-600">Rating:</span>
                <span className="text-sm">⭐ 4.5 (120 reviews)</span>
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <button 
                className="w-full rounded-md bg-gray-400 px-4 py-3 text-white cursor-not-allowed"
                disabled
              >
                Preview Mode - Not Available
              </button>
              <button className="w-full rounded-md border border-accent px-4 py-3 text-accent hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Add to Wishlist
              </button>
            </div>
            
            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Description</h3>
                <p className="text-sm text-gray-600">
                  Fresh, organic product sourced from local farms. This product is carefully selected and packaged to ensure maximum freshness and quality.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold">Specifications</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Weight:</span>
                    <span>1 lb</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Origin:</span>
                    <span>Local Farm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Organic:</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expiry:</span>
                    <span>7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Organic Apples</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh red apples</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$1.99/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Fresh Carrots</h3>
              <p className="mb-2 text-sm text-gray-600">Organic orange carrots</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$0.99/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Green Lettuce</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh green lettuce</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$1.49/head</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
              <h3 className="mb-1 font-semibold">Red Onions</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh red onions</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$0.79/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ProductPreviewPage.getLayout = getLayout;

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
