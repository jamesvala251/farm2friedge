import { NextPage } from 'next';
import AdminLayout from '@/components/layouts/admin';
import AdminDashboard from '@/components/dashboard/admin';
import Head from 'next/head';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    </>
  );
};

export default Dashboard; 