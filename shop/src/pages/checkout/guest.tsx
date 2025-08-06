import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function GuestCheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryMethod, setDeliveryMethod] = useState('home');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Default form data for demo
  const [formData, setFormData] = useState({
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Avenue, Suburbia, New York, NY 10002',
    deliveryInstructions: 'Please ring doorbell twice',
    pickupLocation: 'Main Store - Downtown',
    pickupTime: 'Today - 2:00 PM - 4:00 PM',
    cardNumber: '9876 5432 1098 7654',
    expiryDate: '06/26',
    cvv: '456',
    cardholderName: 'Jane Smith',
    createAccount: false,
    newsletter: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a demo tracking number
    const trackingNumber = 'GUEST-' + Date.now().toString().slice(-8);
    
    // Show success toast instead of alert
    toast.success('Order placed successfully! Thank you for your purchase. We\'ll send confirmation to your email.');
    
    // Redirect to order detail page
    router.push(`/orders/${trackingNumber}`);
    
    setIsProcessing(false);
  };

  return (
    <>
      <Head>
        <title>Guest Checkout - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Guest Checkout
          </h1>
          <p className="text-base text-body-dark">
            Complete your order without creating an account
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Guest Checkout Form */}
          <div className="space-y-6">
            {/* Guest Information */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Guest Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="john.doe@example.com"
                  />
                  <p className="mt-1 text-xs text-gray-500">We'll send order confirmation to this email</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
            
            {/* Delivery Information */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Delivery Information</h2>
              
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
                  <span>Home Delivery</span>
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
                  <span>Store Pickup</span>
                </label>
              </div>
              
              {deliveryMethod === 'home' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                    <textarea
                      rows={3}
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      placeholder="Enter your complete delivery address"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.deliveryInstructions}
                      onChange={(e) => handleInputChange('deliveryInstructions', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      placeholder="Any special delivery instructions..."
                    ></textarea>
                  </div>
                </div>
              )}
              
              {deliveryMethod === 'pickup' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <select 
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    >
                      <option>Select pickup location</option>
                      <option>Main Store - Downtown</option>
                      <option>North Branch - Shopping Center</option>
                      <option>South Branch - Mall</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                    <select 
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    >
                      <option>Select pickup time</option>
                      <option>Today - 2:00 PM - 4:00 PM</option>
                      <option>Today - 4:00 PM - 6:00 PM</option>
                      <option>Tomorrow - 10:00 AM - 12:00 PM</option>
                      <option>Tomorrow - 2:00 PM - 4:00 PM</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            {/* Payment Method */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
              
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
                  <span>Credit/Debit Card</span>
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
                  <span>PayPal</span>
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
                  <span>Cash on Delivery</span>
                </label>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        placeholder="MM/YY"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        placeholder="123"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      value={formData.cardholderName}
                      onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                      placeholder="John Doe"
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
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fresh Tomatoes (2 lb)</span>
                  <span className="text-sm">$5.98</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Organic Bananas (1 lb)</span>
                  <span className="text-sm">$1.49</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Whole Milk (1 gallon)</span>
                  <span className="text-sm">$3.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fresh Bread (1 loaf)</span>
                  <span className="text-sm">$4.99</span>
                </div>
              </div>
              
              <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">$16.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Delivery Fee</span>
                  <span className="text-sm">$2.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tax</span>
                  <span className="text-sm">$1.32</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>$19.77</span>
                </div>
              </div>
            </div>
            
            {/* Promo Code */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Promo Code</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-accent"
                />
                <button className="rounded-md bg-accent px-4 py-2 text-white hover:bg-accent-hover">
                  Apply
                </button>
              </div>
            </div>
            
            {/* Create Account Option */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Create Account (Optional)</h3>
              <p className="mb-3 text-sm text-gray-600">
                Create an account to track your orders and save your information for future purchases.
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.createAccount}
                    onChange={(e) => handleInputChange('createAccount', e.target.checked)}
                    className="text-accent focus:ring-accent"
                  />
                  <span className="text-sm">Create account with this email</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="text-accent focus:ring-accent"
                  />
                  <span className="text-sm">Subscribe to newsletter</span>
                </label>
              </div>
            </div>
            
            {/* Place Order */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full rounded-md bg-accent px-4 py-3 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Placing Order...' : 'Place Order'}
              </button>
              <p className="mt-2 text-xs text-gray-500 text-center">
                By placing your order, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

GuestCheckoutPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
