import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Head from 'next/head';

const ProductContentPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Content Management - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Product Content Management" 
            subtitle="Manage product descriptions, images, and content"
          />

          {/* Coming Soon Card */}
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon!
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re building a comprehensive content management system to help you manage product information, images, and descriptions efficiently.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Manage product descriptions and specifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Upload and organize product images
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Control product content quality and consistency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Bulk content operations and approvals
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

export default ProductContentPage; 