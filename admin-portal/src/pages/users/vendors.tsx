import { NextPage } from 'next';
import AdminLayout from '@/components/layouts/admin';
import VendorsPage from '@/components/vendors/vendors';
import Head from 'next/head';

const Vendors: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vendors - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <VendorsPage />
      </AdminLayout>
    </>
  );
};

export default Vendors; 