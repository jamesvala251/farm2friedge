import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from '@/utils/auth-utils';
import { SUPER_ADMIN } from '@/utils/constants';
import AdminLayout from '@/components/layouts/admin';
import { Routes } from '@/config/routes';
import { Config } from '@/config';

const VendorsPage = dynamic(() => import('@/components/vendors/vendors'));

export default function Vendors({
  userPermissions,
}: {
  userPermissions: string[];
}) {
  return (
    <AdminLayout>
      <VendorsPage />
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const generateRedirectUrl =
    locale !== Config.defaultLanguage
      ? `/${locale}${Routes.login}`
      : Routes.login;

  // For demo purposes, skip authentication check
  return {
    props: {
      userPermissions: ['SUPER_ADMIN'], // Demo permissions
    },
  };
}; 