import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from '@/utils/auth-utils';
import { SUPER_ADMIN } from '@/utils/constants';
import AppLayout from '@/components/layouts/app';
import { Routes } from '@/config/routes';
import { Config } from '@/config';

const AdminDashboard = dynamic(() => import('@/components/dashboard/admin'));

export default function Dashboard({
  userPermissions,
}: {
  userPermissions: string[];
}) {
  // For demo purposes, always show admin dashboard
  return <AdminDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const generateRedirectUrl =
    locale !== Config.defaultLanguage
      ? `/${locale}${Routes.login}`
      : Routes.login;
  
  // For demo purposes, skip authentication check
  // const { token, permissions } = getAuthCredentials(ctx);
  // if (
  //   !isAuthenticated({ token, permissions }) ||
  //   !hasAccess(allowedRoles, permissions)
  // ) {
  //   return {
  //     redirect: {
  //       destination: generateRedirectUrl,
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      userPermissions: ['SUPER_ADMIN'], // Demo permissions
    },
  };
}; 