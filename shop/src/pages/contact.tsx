import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Contact Us
          </h1>
          <p className="text-base text-body-dark">
            Get in touch with our customer support team
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Grocery Street, Downtown, City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@egrocerymart.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Business Hours</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Customer support is available 24/7 for urgent issues.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Send us a Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your full name"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Product Information</option>
                    <option>Delivery Issues</option>
                    <option>Refund Request</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                  Send Message
                </button>
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
                <h3 className="mb-2 text-lg font-semibold">How do I track my order?</h3>
                <p className="text-gray-600">
                  You can track your order through your account dashboard or by clicking the tracking link in your order confirmation email.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">What is your return policy?</h3>
                <p className="text-gray-600">
                  We accept returns within 7 days for damaged or spoiled items. Fresh produce cannot be returned unless it's clearly defective.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Do you offer same-day delivery?</h3>
                <p className="text-gray-600">
                  Yes, we offer same-day delivery for orders placed before 2 PM. Delivery windows are available during checkout.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">How can I change my delivery address?</h3>
                <p className="text-gray-600">
                  You can update your delivery address in your account settings or contact us if you need to change it for an existing order.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept credit/debit cards, PayPal, and cash on delivery for orders over $20.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ContactPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
