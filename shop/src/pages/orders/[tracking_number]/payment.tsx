import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useState } from 'react';

export default function OrderPaymentPage() {
  const router = useRouter();
  const { tracking_number } = router.query;
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <>
      <Head>
        <title>Payment - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-4xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Complete Payment
          </h1>
          <p className="text-base text-body-dark">
            Order #{tracking_number}
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
            
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
              <div className="flex items-center justify-between">
                <span className="text-sm">Delivery Fee</span>
                <span className="text-sm">$2.00</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>$10.47</span>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
            
            <div className="mb-6 space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-accent focus:ring-accent"
                />
                <span>Credit/Debit Card</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-accent focus:ring-accent"
                />
                <span>PayPal</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-accent focus:ring-accent"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
            
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                  />
                </div>
              </div>
            )}
            
            {paymentMethod === 'paypal' && (
              <div className="text-center">
                <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
                <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Continue with PayPal
                </button>
              </div>
            )}
            
            {paymentMethod === 'cod' && (
              <div className="text-center">
                <p className="text-gray-600 mb-4">Pay with cash when your order is delivered.</p>
                <p className="text-sm text-gray-500">Available for orders up to $100</p>
              </div>
            )}
            
            <div className="mt-6">
              <button
                className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                onClick={() => router.push(`/orders/${tracking_number}/thank-you`)}
              >
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

OrderPaymentPage.getLayout = getLayout;

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
