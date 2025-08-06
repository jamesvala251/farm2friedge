import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function QuestionsPage() {
  return (
    <>
      <Head>
        <title>Questions & Answers - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Questions & Answers
          </h1>
          <p className="text-base text-body-dark">
            Get answers to common questions about our products and services
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Ask a Question */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Ask a Question</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Type your question here..."
                  ></textarea>
                </div>
                
                <button className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                  Submit Question
                </button>
              </div>
            </div>
          </div>
          
          {/* Recent Questions */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Recent Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="mb-2 font-semibold">What are your delivery hours?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    We offer delivery from 8 AM to 10 PM daily. Same-day delivery is available for orders placed before 2 PM.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Asked by: John D.</span>
                    <span>2 days ago</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="mb-2 font-semibold">Do you offer organic products?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    Yes, we have a wide selection of organic fruits, vegetables, dairy, and pantry items. Look for the "Organic" label on our products.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Asked by: Sarah M.</span>
                    <span>1 week ago</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="mb-2 font-semibold">What is your return policy?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    We accept returns within 7 days for damaged or spoiled items. Fresh produce cannot be returned unless it's clearly defective.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Asked by: Mike R.</span>
                    <span>1 week ago</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="mb-2 font-semibold">Do you have gluten-free options?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    Yes, we carry a variety of gluten-free products including bread, pasta, snacks, and baking ingredients.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Asked by: Lisa K.</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">How do I track my order?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    You can track your order through your account dashboard or by clicking the tracking link in your order confirmation email.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Asked by: David L.</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">How do I place an order?</h3>
                <p className="text-gray-600">
                  Browse our products, add items to your cart, and proceed to checkout. You can create an account or checkout as a guest.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept credit/debit cards, PayPal, and cash on delivery for orders over $20.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Is there a minimum order amount?</h3>
                <p className="text-gray-600">
                  Yes, there is a $15 minimum order amount for delivery. No minimum for store pickup.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Do you offer bulk discounts?</h3>
                <p className="text-gray-600">
                  Yes, we offer discounts on bulk orders. Contact our customer service for bulk pricing.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Can I schedule delivery for a specific time?</h3>
                <p className="text-gray-600">
                  Yes, you can choose a 2-hour delivery window during checkout. We'll notify you when your order is on the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

QuestionsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
