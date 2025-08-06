import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function RefundsPage() {
  return (
    <>
      <Head>
        <title>Refunds - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Refunds
          </h1>
          <p className="text-base text-body-dark">
            Request refunds and track your refund status
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Request Refund */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Request a Refund</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter order number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Refund</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent">
                    <option>Select a reason</option>
                    <option>Damaged item received</option>
                    <option>Wrong item delivered</option>
                    <option>Item expired/spoiled</option>
                    <option>Quality issues</option>
                    <option>Changed my mind</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Please describe the issue in detail..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photos (Optional)</label>
                  <input
                    type="file"
                    multiple
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    accept="image/*"
                  />
                  <p className="mt-1 text-xs text-gray-500">Upload photos of damaged items or issues</p>
                </div>
                
                <button className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                  Submit Refund Request
                </button>
              </div>
            </div>
          </div>
          
          {/* Refund History */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Refund History</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12345</h3>
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Approved
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Damaged tomatoes - $5.98 refunded</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Requested: Jan 15, 2024</span>
                    <span>Processed: Jan 17, 2024</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12340</h3>
                    <span className="inline-flex rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      Processing
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Wrong item delivered - $12.99 requested</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Requested: Jan 20, 2024</span>
                    <span>Under review</span>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12335</h3>
                    <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                      Rejected
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Changed mind - Request denied</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Requested: Jan 10, 2024</span>
                    <span>Rejected: Jan 12, 2024</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12330</h3>
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Approved
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Expired milk - $3.99 refunded</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Requested: Jan 5, 2024</span>
                    <span>Processed: Jan 7, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Refund Policy */}
        <div className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-2xl font-semibold">Refund Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Damaged or defective items</li>
                  <li>Wrong items delivered</li>
                  <li>Expired or spoiled products</li>
                  <li>Quality issues with fresh produce</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Timeframe</h3>
                <p className="text-gray-600">
                  Refund requests must be submitted within 7 days of delivery. We process refunds within 3-5 business days.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Refund Methods</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Original payment method (credit/debit card)</li>
                  <li>Store credit for future purchases</li>
                  <li>Bank transfer (may take 5-7 business days)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Non-Refundable Items</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Personal care items (for hygiene reasons)</li>
                  <li>Custom or personalized orders</li>
                  <li>Items marked as "Final Sale"</li>
                  <li>Delivery fees (unless delivery was our error)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

RefundsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
