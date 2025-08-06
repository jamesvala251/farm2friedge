import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Help Center - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Help Center
          </h1>
          <p className="text-base text-body-dark">
            Find answers to frequently asked questions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Getting Started</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• How to create an account</li>
              <li>• How to place your first order</li>
              <li>• How to track your order</li>
              <li>• How to contact customer support</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Account & Profile</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• How to update your profile</li>
              <li>• How to change your password</li>
              <li>• How to manage addresses</li>
              <li>• How to view order history</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Payment & Billing</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Accepted payment methods</li>
              <li>• How to add payment cards</li>
              <li>• Understanding charges</li>
              <li>• Refund policies</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Delivery timeframes</li>
              <li>• Delivery fees</li>
              <li>• How to track delivery</li>
              <li>• Contact delivery partner</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Returns & Refunds</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Return policy</li>
              <li>• How to return items</li>
              <li>• Refund processing time</li>
              <li>• Damaged items</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Customer support hours</li>
              <li>• Email support</li>
              <li>• Phone support</li>
              <li>• Live chat</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

HelpPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
