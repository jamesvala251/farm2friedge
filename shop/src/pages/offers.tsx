import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function OffersPage() {
  return (
    <>
      <Head>
        <title>Offers - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Special Offers
          </h1>
          <p className="text-base text-body-dark">
            Discover amazing deals and discounts on your favorite products
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">Flash Sale</h3>
            <p className="text-gray-600">Limited time offers with huge discounts</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">Bulk Discounts</h3>
            <p className="text-gray-600">Save more when you buy in bulk</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">New Customer Offers</h3>
            <p className="text-gray-600">Special deals for first-time buyers</p>
          </div>
        </div>
      </section>
    </>
  );
}

OffersPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
