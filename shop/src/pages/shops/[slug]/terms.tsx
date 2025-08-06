import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ShopTermsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Shop Terms - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Shop Terms & Conditions
          </h1>
          <p className="text-base text-body-dark">
            Terms and conditions for {slug}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-body-dark">
            <h2>Shop Terms</h2>
            <p>
              These terms and conditions apply to all purchases made from this shop on eGroceryMart.
            </p>
            
            <h2>Order Processing</h2>
            <p>
              All orders are processed within 24 hours of placement. Orders placed after 6 PM will be processed the next business day.
            </p>
            
            <h2>Delivery</h2>
            <p>
              Delivery times vary based on your location. Standard delivery takes 1-3 business days. Express delivery is available for an additional fee.
            </p>
            
            <h2>Returns & Refunds</h2>
            <p>
              We accept returns within 7 days of delivery for damaged or incorrect items. Perishable items cannot be returned unless damaged during delivery.
            </p>
            
            <h2>Quality Guarantee</h2>
            <p>
              We guarantee the quality of all our products. If you're not satisfied, please contact us immediately.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              For questions about these terms, please contact the shop directly or our customer support team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

ShopTermsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
