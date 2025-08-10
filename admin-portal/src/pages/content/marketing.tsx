import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Head from 'next/head';

const MarketingToolsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketing Tools - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Marketing Tools" 
            subtitle="Create and manage marketing campaigns, promotions, and customer engagement"
          />

          {/* Coming Soon Card */}
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon!
              </h2>
              <p className="text-gray-600 mb-6">
                We're developing powerful marketing tools to help you grow your business 
                and engage customers effectively. This platform will feature:
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Campaign creation and management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Coupon and discount code generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Email marketing and automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Customer segmentation and targeting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Performance analytics and ROI tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Loyalty program management
                </li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  <strong>Expected Release:</strong> Q1 2024
                </p>
              </div>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default MarketingToolsPage; 