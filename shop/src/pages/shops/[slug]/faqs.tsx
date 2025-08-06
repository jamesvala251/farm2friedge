import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function ShopFAQsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Shop FAQs - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-body-dark">
            Common questions about {slug}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">What are your delivery hours?</h3>
              <p className="text-gray-600">
                We deliver from 8 AM to 10 PM, seven days a week. Orders placed after 8 PM will be delivered the next day.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">Do you offer same-day delivery?</h3>
              <p className="text-gray-600">
                Yes, we offer same-day delivery for orders placed before 2 PM. Orders placed after 2 PM will be delivered the next day.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">What is your return policy?</h3>
              <p className="text-gray-600">
                We accept returns within 7 days for damaged or incorrect items. Perishable items cannot be returned unless damaged during delivery.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">How can I track my order?</h3>
              <p className="text-gray-600">
                You can track your order through your account dashboard or by using the tracking number sent to your email/SMS.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">Do you accept cash on delivery?</h3>
              <p className="text-gray-600">
                Yes, we accept cash on delivery for orders up to $100. For larger orders, we prefer online payment methods.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept credit/debit cards, digital wallets (PayPal, Apple Pay, Google Pay), and cash on delivery.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">Is there a minimum order amount?</h3>
              <p className="text-gray-600">
                Yes, the minimum order amount is $15. Orders below this amount will incur a small delivery fee.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">How do I contact customer support?</h3>
              <p className="text-gray-600">
                You can contact us via phone at 1-800-GROCERY, email at support@egrocerymart.com, or through our live chat feature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ShopFAQsPage.getLayout = getLayout;

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
