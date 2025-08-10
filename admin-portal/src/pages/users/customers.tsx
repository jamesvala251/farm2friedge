import { NextPage } from 'next';
import AdminLayout from '@/components/layouts/admin';
import CustomersPage from '@/components/customers/customers';
import Head from 'next/head';

const Customers: NextPage = () => {
  return (
    <>
      <Head>
        <title>Customers - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <CustomersPage />
      </AdminLayout>
    </>
  );
};

export default Customers; 