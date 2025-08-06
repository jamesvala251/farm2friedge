import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>My Profile - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            My Profile
          </h1>
          <p className="text-base text-body-dark">
            Manage your account settings and preferences
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 text-lg font-semibold">Account Menu</h3>
              <nav className="space-y-2">
                <a href="#profile" className="block rounded px-3 py-2 text-sm hover:bg-gray-100">
                  Profile Information
                </a>
                <a href="#addresses" className="block rounded px-3 py-2 text-sm hover:bg-gray-100">
                  Addresses
                </a>
                <a href="#orders" className="block rounded px-3 py-2 text-sm hover:bg-gray-100">
                  Order History
                </a>
                <a href="#wishlist" className="block rounded px-3 py-2 text-sm hover:bg-gray-100">
                  Wishlist
                </a>
                <a href="#settings" className="block rounded px-3 py-2 text-sm hover:bg-gray-100">
                  Account Settings
                </a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-6 text-xl font-semibold">Profile Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                  />
                </div>
                
                <div className="pt-4">
                  <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ProfilePage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
