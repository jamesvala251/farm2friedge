import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ReportsPage() {
  return (
    <>
      <Head>
        <title>Reports - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Reports
          </h1>
          <p className="text-base text-body-dark">
            View detailed reports and analytics for your orders
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sales Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Sales Report</h3>
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-green-600">$2,847.50</p>
              <p className="text-sm text-gray-600">Total sales this month</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-600">+12.5%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          
          {/* Order Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Order Report</h3>
              <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-blue-600">156</p>
              <p className="text-sm text-gray-600">Orders this month</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-600">+8.2%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          
          {/* Customer Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Customer Report</h3>
              <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-purple-600">89</p>
              <p className="text-sm text-gray-600">New customers</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-purple-600">+15.3%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          
          {/* Product Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Product Report</h3>
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-orange-600">1,247</p>
              <p className="text-sm text-gray-600">Items sold</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-orange-600">+5.7%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          
          {/* Delivery Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Delivery Report</h3>
              <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-teal-600">98.5%</p>
              <p className="text-sm text-gray-600">On-time delivery</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-teal-600">+2.1%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          
          {/* Revenue Report */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Revenue Report</h3>
              <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-indigo-600">$847.30</p>
              <p className="text-sm text-gray-600">Average order value</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-indigo-600">+4.2%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
        </div>
        
        {/* Detailed Reports Table */}
        <div className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-xl font-semibold">Detailed Reports</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Report Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Period</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Monthly Sales Report</td>
                    <td className="px-4 py-3 text-sm">January 2024</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Customer Analytics</td>
                    <td className="px-4 py-3 text-sm">Q4 2023</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Product Performance</td>
                    <td className="px-4 py-3 text-sm">December 2023</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Processing
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-gray-400 cursor-not-allowed">Pending</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Delivery Analytics</td>
                    <td className="px-4 py-3 text-sm">November 2023</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-accent hover:text-accent-hover">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ReportsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
