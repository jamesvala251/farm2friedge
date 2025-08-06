import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-base text-body-dark">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="text-body-dark">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>
            
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@egrocerymart.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

PrivacyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
