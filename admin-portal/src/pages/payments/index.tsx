import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Head from 'next/head';

const PaymentManagementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Payment Management - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Payment Management" 
            subtitle="Monitor and manage payment transactions, refunds, and settlements"
          />

          {/* Coming Soon Card */}
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💳</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon!
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re building a comprehensive payment management system to help you track, process, and manage all financial transactions efficiently.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Real-time payment monitoring and tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Automated refund processing and management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Vendor settlement and commission calculations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Payment dispute resolution and support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Financial reporting and analytics
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

export default PaymentManagementPage; 