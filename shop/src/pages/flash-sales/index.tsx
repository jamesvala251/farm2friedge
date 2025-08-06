import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function FlashSalesPage() {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>{t('text-flash-sales')} - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            {t('text-flash-sales')}
          </h1>
          <p className="text-base text-body-dark">
            {t('text-limited-time-offers-fresh-groceries')}
          </p>
        </div>
        
        {/* Active Flash Sale */}
        <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-red-800">{t('text-flash-sale-today-only')}</h2>
              <p className="text-red-600">{t('text-up-to-50-percent-off-fresh-vegetables')}</p>
              <p className="text-sm text-red-500">{t('text-ends-in', { time: '6 hours 23 minutes' })}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-800">{t('text-50-percent-off')}</div>
              <p className="text-sm text-red-600">{t('text-limited-time')}</p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Flash Sale Items */}
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-fresh-tomatoes')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-50-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-organic-red-tomatoes')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-lb', { price: '1.49' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-lb', { price: '2.99' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-organic-bananas')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-40-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-fresh-yellow-bananas')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-lb', { price: '0.89' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-lb', { price: '1.49' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-fresh-carrots')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-60-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-organic-orange-carrots')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-lb', { price: '0.39' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-lb', { price: '0.99' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-green-lettuce')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-45-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-fresh-green-lettuce')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-head', { price: '0.82' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-head', { price: '1.49' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-red-onions')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-55-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-fresh-red-onions')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-lb', { price: '0.36' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-lb', { price: '0.79' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3 h-32 w-full rounded-lg bg-gray-200"></div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{t('text-organic-apples')}</h3>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {t('text-35-percent-off')}
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{t('text-fresh-red-apples')}</p>
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">{t('text-price-per-lb', { price: '1.29' })}</span>
              <span className="text-sm text-gray-500 line-through">{t('text-price-per-lb', { price: '1.99' })}</span>
            </div>
            <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
              {t('text-add-to-cart')}
            </button>
          </div>
        </div>
        
        {/* Upcoming Flash Sales */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">{t('text-upcoming-flash-sales')}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t('text-dairy-products-sale')}</h3>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                  {t('text-tomorrow')}
                </span>
              </div>
              <p className="text-sm text-gray-600">{t('text-up-to-30-percent-off-dairy')}</p>
              <p className="mt-2 text-xs text-gray-500">{t('text-starts-at', { time: '9:00 AM' })}</p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t('text-bakery-flash-sale')}</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {t('text-dec-25')}
                </span>
              </div>
              <p className="text-sm text-gray-600">{t('text-fresh-bread-pastries-40-percent-off')}</p>
              <p className="mt-2 text-xs text-gray-500">{t('text-starts-at', { time: '8:00 AM' })}</p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{t('text-meat-poultry-sale')}</h3>
                <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                  {t('text-dec-26')}
                </span>
              </div>
              <p className="text-sm text-gray-600">{t('text-premium-meat-products-25-percent-off')}</p>
              <p className="mt-2 text-xs text-gray-500">{t('text-starts-at', { time: '10:00 AM' })}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

FlashSalesPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
