import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>Downloads - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Downloads
          </h1>
          <p className="text-base text-body-dark">
            Access your digital products and order invoices
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Digital Products */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Digital Products</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">eGroceryMart Recipe Book</h3>
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Available
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Healthy recipes using our fresh ingredients</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Purchased: Jan 15, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download PDF</button>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Meal Planning Guide</h3>
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Available
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Weekly meal planning templates and tips</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Purchased: Jan 10, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download Excel</button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Nutrition Guide</h3>
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Available
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Complete nutrition information for all products</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Purchased: Jan 5, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Invoices */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Order Invoices</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12345</h3>
                    <span className="text-sm text-gray-500">$47.85</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Fresh groceries delivery</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Ordered: Jan 20, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download Invoice</button>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12340</h3>
                    <span className="text-sm text-gray-500">$32.99</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Organic produce order</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Ordered: Jan 18, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download Invoice</button>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12335</h3>
                    <span className="text-sm text-gray-500">$28.50</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Dairy and bread items</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Ordered: Jan 15, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download Invoice</button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Order #12330</h3>
                    <span className="text-sm text-gray-500">$65.20</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">Weekly grocery shopping</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Ordered: Jan 12, 2024</span>
                    <button className="text-accent hover:text-accent-hover">Download Invoice</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download History */}
        <div className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-2xl font-semibold">Download History</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">File Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Downloaded</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">eGroceryMart_Recipe_Book.pdf</td>
                    <td className="px-4 py-3 text-sm">Digital Product</td>
                    <td className="px-4 py-3 text-sm">Jan 15, 2024</td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download Again</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Invoice_12345.pdf</td>
                    <td className="px-4 py-3 text-sm">Invoice</td>
                    <td className="px-4 py-3 text-sm">Jan 20, 2024</td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download Again</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Meal_Planning_Guide.xlsx</td>
                    <td className="px-4 py-3 text-sm">Digital Product</td>
                    <td className="px-4 py-3 text-sm">Jan 10, 2024</td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download Again</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Invoice_12340.pdf</td>
                    <td className="px-4 py-3 text-sm">Invoice</td>
                    <td className="px-4 py-3 text-sm">Jan 18, 2024</td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download Again</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Download Information */}
        <div className="mt-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">Download Information</h3>
            
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800">Digital Products</h4>
                <p>Digital products can be downloaded up to 5 times within 30 days of purchase. After that, you'll need to contact support for access.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Invoices</h4>
                <p>Order invoices are available for download for up to 2 years after the order date. They are automatically generated and sent to your email.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">File Formats</h4>
                <p>We provide files in PDF format for documents and Excel format for spreadsheets. All files are optimized for easy viewing and printing.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Need Help?</h4>
                <p>If you're having trouble downloading files or need access to expired downloads, please contact our customer support team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

DownloadsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
