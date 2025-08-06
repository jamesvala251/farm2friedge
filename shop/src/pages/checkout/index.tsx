import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useState } from 'react';

export default function CheckoutPage() {
  const { t } = useTranslation('common');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryMethod, setDeliveryMethod] = useState('home');

  return (
    <>
      <Head>
        <title>{t('text-checkout')} - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            {t('text-checkout')}
          </h1>
          <p className="text-base text-body-dark">
            {t('text-complete-your-order')}
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">{t('text-delivery-information')}</h2>
              
              <div className="mb-4 space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="home"
                    checked={deliveryMethod === 'home'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="text-accent focus:ring-accent"
                  />
                  <span>{t('text-home-delivery')}</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={deliveryMethod === 'pickup'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="text-accent focus:ring-accent"
                  />
                  <span>{t('text-store-pickup')}</span>
                </label>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-full-name')}</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder={t('text-john-doe')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-phone-number')}</label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder={t('text-phone-placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-email-address')}</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder={t('text-email-placeholder')}
                  />
                </div>
                
                {deliveryMethod === 'home' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-delivery-address')}</label>
                    <textarea
                      rows={3}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      placeholder={t('text-enter-complete-delivery-address')}
                    ></textarea>
                  </div>
                )}
                
                {deliveryMethod === 'pickup' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-pickup-location')}</label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent">
                      <option>{t('text-select-pickup-location')}</option>
                      <option>{t('text-main-store-downtown')}</option>
                      <option>{t('text-north-branch-shopping-center')}</option>
                      <option>{t('text-south-branch-mall')}</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">{t('text-payment-method')}</h2>
              
              <div className="mb-4 space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-accent focus:ring-accent"
                  />
                  <span>{t('text-credit-debit-card')}</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-accent focus:ring-accent"
                  />
                  <span>{t('text-paypal')}</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-accent focus:ring-accent"
                  />
                  <span>{t('text-cash-on-delivery')}</span>
                </label>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-card-number')}</label>
                    <input
                      type="text"
                      placeholder={t('text-card-number-placeholder')}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-expiry-date')}</label>
                      <input
                        type="text"
                        placeholder={t('text-mm-yy')}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-cvv')}</label>
                      <input
                        type="text"
                        placeholder={t('text-cvv-placeholder')}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('text-cardholder-name')}</label>
                    <input
                      type="text"
                      placeholder={t('text-john-doe')}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">{t('text-order-summary')}</h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-fresh-tomatoes-2-lb')}</span>
                  <span className="text-sm">{t('text-price', { price: '5.98' })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-organic-bananas-1-lb')}</span>
                  <span className="text-sm">{t('text-price', { price: '1.49' })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-whole-milk-1-gallon')}</span>
                  <span className="text-sm">{t('text-price', { price: '3.99' })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-fresh-bread-1-loaf')}</span>
                  <span className="text-sm">{t('text-price', { price: '4.99' })}</span>
                </div>
              </div>
              
              <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-subtotal')}</span>
                  <span className="text-sm">{t('text-price', { price: '16.45' })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-delivery-fee')}</span>
                  <span className="text-sm">{t('text-price', { price: '2.00' })}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('text-tax')}</span>
                  <span className="text-sm">{t('text-price', { price: '1.32' })}</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span>{t('text-total')}</span>
                  <span>{t('text-price', { price: '19.77' })}</span>
                </div>
              </div>
            </div>
            
            {/* Promo Code */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">{t('text-promo-code')}</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder={t('text-enter-promo-code')}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                />
                <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                  {t('text-apply')}
                </button>
              </div>
            </div>
            
            {/* Place Order */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <button className="w-full rounded-md bg-accent px-4 py-3 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                {t('text-place-order')}
              </button>
              <p className="mt-2 text-xs text-gray-500 text-center">
                {t('text-by-placing-order-agree-terms')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

CheckoutPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
