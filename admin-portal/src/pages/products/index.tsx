import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import ProductApprovalPage from './approval';
import Head from 'next/head';

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Moderation - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <ProductApprovalPage />
      </AdminLayout>
    </>
  );
};

export default ProductsPage; 