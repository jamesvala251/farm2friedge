import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function VendorRefundPoliciesPage() {
  return (
    <>
      <Head>
        <title>Vendor Refund Policies - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Vendor Refund Policies
          </h1>
          <p className="text-base text-body-dark">
            Understanding our vendor refund and return policies
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="text-body-dark">
            <h2>General Refund Policy</h2>
            <p>
              Our vendors are committed to providing quality products and excellent service. If you're not satisfied with your purchase, we offer a comprehensive refund policy.
            </p>
            
            <h2>Eligibility for Refunds</h2>
            <p>
              Products may be eligible for refund if they are:
            </p>
            <ul>
              <li>Damaged during delivery</li>
              <li>Not as described</li>
              <li>Expired or near expiration</li>
              <li>Incorrectly delivered</li>
            </ul>
            
            <h2>Refund Process</h2>
            <p>
              To request a refund:
            </p>
            <ol>
              <li>Contact customer support within 24 hours of delivery</li>
              <li>Provide order details and reason for refund</li>
              <li>Submit photos if applicable</li>
              <li>Wait for approval from vendor</li>
            </ol>
            
            <h2>Processing Time</h2>
            <p>
              Refunds are typically processed within 3-5 business days after approval. The amount will be credited back to your original payment method.
            </p>
            
            <h2>Non-Refundable Items</h2>
            <p>
              The following items are generally not eligible for refunds:
            </p>
            <ul>
              <li>Perishable items (unless damaged)</li>
              <li>Personal care items</li>
              <li>Items marked as non-refundable</li>
              <li>Items purchased on clearance</li>
            </ul>
            
            <h2>Contact Information</h2>
            <p>
              For questions about refunds, please contact our customer support team at support@egrocerymart.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

VendorRefundPoliciesPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};