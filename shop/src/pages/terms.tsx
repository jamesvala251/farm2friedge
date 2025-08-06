import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Terms & Conditions
          </h1>
          <p className="text-base text-body-dark">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="text-body-dark">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using eGroceryMart, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on eGroceryMart for personal, non-commercial transitory viewing only.
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              The materials on eGroceryMart are provided on an 'as is' basis. eGroceryMart makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>Limitations</h2>
            <p>
              In no event shall eGroceryMart or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on eGroceryMart.
            </p>
            
            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on eGroceryMart could include technical, typographical, or photographic errors. eGroceryMart does not warrant that any of the materials on its website are accurate, complete or current.
            </p>
            
            <h2>Links</h2>
            <p>
              eGroceryMart has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by eGroceryMart of the site.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at legal@egrocerymart.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

TermsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};