import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import DashboardLayout from '@/layouts/_dashboard';
import Head from 'next/head';
import Card from '@/components/ui/cards/card';

export default function HelpPage() {
  const router = useRouter();

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        'How to create an account',
        'How to place your first order',
        'How to track your order',
        'How to contact customer support'
      ]
    },
    {
      title: 'Account & Profile',
      icon: '👤',
      items: [
        'How to update your profile',
        'How to change your password',
        'How to manage addresses',
        'How to view order history'
      ]
    },
    {
      title: 'Payment & Billing',
      icon: '💳',
      items: [
        'Accepted payment methods',
        'How to add payment cards',
        'Understanding charges',
        'Refund policies'
      ]
    },
    {
      title: 'Delivery',
      icon: '🚚',
      items: [
        'Delivery timeframes',
        'Delivery fees',
        'How to track delivery',
        'Contact delivery partner'
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: '↩️',
      items: [
        'Return policy',
        'How to return items',
        'Refund processing time',
        'Damaged items'
      ]
    },
    {
      title: 'Contact Us',
      icon: '📞',
      items: [
        'Customer support hours',
        'Email support',
        'Phone support',
        'Live chat'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - eGroceryMart</title>
      </Head>
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-heading lg:text-3xl">
            Help Center
          </h1>
          <p className="text-base text-body-dark">
            Find answers to frequently asked questions
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 flex items-center">
                <span className="mr-3 text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <Card className="p-6 bg-gradient-to-r from-accent to-accent-hover text-white">
            <div className="text-center">
              <h3 className="mb-2 text-xl font-semibold">Need More Help?</h3>
              <p className="mb-4 text-sm opacity-90">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  className="px-4 py-2 bg-white text-accent rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => router.push('/contact')}
                >
                  Contact Support
                </button>
                <button 
                  className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-accent transition-colors"
                  onClick={() => window.open('mailto:support@egrocerymart.com')}
                >
                  Send Email
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

HelpPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
