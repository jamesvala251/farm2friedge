import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import DashboardLayout from '@/layouts/_dashboard';
import Head from 'next/head';
import ProfileForm from '@/components/profile/profile-form';
import { useUser } from '@/framework/user';

export default function ProfilePage() {
  const { me } = useUser();

  // Mock user data for demo
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    profile: {
      id: 1,
      bio: 'I love shopping for fresh groceries and organic products. Always looking for the best deals and quality items.',
      avatar: {
        id: 1,
        original: '/img/avatar-placeholder.png',
        thumbnail: '/img/avatar-placeholder.png'
      },
      contact: '+1 (555) 123-4567'
    },
    wallet: {
      total_points: 1250,
      points_used: 450,
      available_points: 800
    }
  };

  // Use mock data if no real user data
  const userData = me || mockUser;

  return (
    <>
      <Head>
        <title>My Profile - eGroceryMart</title>
      </Head>
      <div className="flex flex-col w-full">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-heading lg:text-3xl">
            Profile Information
          </h1>
          <p className="text-base text-body-dark">
            Update your profile information and settings
          </p>
        </div>
        
        <div className="flex flex-col w-full">
          <ProfileForm user={userData as any} />
        </div>
      </div>
    </>
  );
}

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
