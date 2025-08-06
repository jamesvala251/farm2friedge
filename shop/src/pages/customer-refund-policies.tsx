import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';

export default function CustomerRefundPoliciesPage() {
  return (
    <>
      <Head>
        <title>Customer Refund Policies - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="mb-8 text-center lg:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-heading lg:text-4xl xl:text-5xl">
            Customer Refund Policies
          </h1>
          <p className="text-base text-body-dark">
            Understanding our refund and return policies
          </p>
        </div>
        
        <div className="space-y-8">
          {/* General Refund Policy */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">General Refund Policy</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                At eGroceryMart, we strive to provide the highest quality products and service. If you're not completely satisfied with your purchase, we're here to help.
              </p>
              
              <div>
                <h3 className="mb-2 font-semibold text-gray-800">Eligibility for Refunds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Damaged or defective items</li>
                  <li>Wrong items delivered</li>
                  <li>Expired or spoiled products</li>
                  <li>Quality issues with fresh produce</li>
                  <li>Items not as described</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold text-gray-800">Timeframe</h3>
                <p>Refund requests must be submitted within 7 days of delivery. We process refunds within 3-5 business days.</p>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold text-gray-800">Refund Methods</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Original payment method (credit/debit card)</li>
                  <li>Store credit for future purchases</li>
                  <li>Bank transfer (may take 5-7 business days)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Product-Specific Policies */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Product-Specific Policies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Fresh Produce</h3>
                <p className="text-gray-600 mb-2">
                  Fresh fruits and vegetables cannot be returned unless they are clearly damaged, spoiled, or not as described.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Must report issues within 24 hours of delivery</li>
                  <li>Photos may be required for verification</li>
                  <li>Partial refunds available for partially damaged items</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Dairy & Meat Products</h3>
                <p className="text-gray-600 mb-2">
                  Dairy and meat products can be returned if they are spoiled, expired, or damaged during delivery.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Must report within 48 hours of delivery</li>
                  <li>Temperature-sensitive items require immediate reporting</li>
                  <li>Full refund for spoiled items</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Pantry Items</h3>
                <p className="text-gray-600 mb-2">
                  Non-perishable items can be returned within 7 days if unopened and in original packaging.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Must be in original, unopened condition</li>
                  <li>No returns for opened or partially used items</li>
                  <li>Full refund for unopened items</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-semibold">Frozen Foods</h3>
                <p className="text-gray-600 mb-2">
                  Frozen foods can be returned if they have thawed during delivery or are damaged.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Must report thawing issues immediately</li>
                  <li>Photos required for verification</li>
                  <li>Full refund for thawed items</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Non-Refundable Items */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Non-Refundable Items</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>The following items are generally not eligible for refunds:</p>
              
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Personal care items</strong> - For hygiene reasons, personal care products cannot be returned once opened</li>
                <li><strong>Custom or personalized orders</strong> - Items made specifically for you cannot be returned</li>
                <li><strong>Items marked as "Final Sale"</strong> - These items are sold as-is and cannot be returned</li>
                <li><strong>Delivery fees</strong> - Unless the delivery was our error, delivery fees are non-refundable</li>
                <li><strong>Opened or partially used items</strong> - For safety and hygiene reasons</li>
                <li><strong>Items purchased with promotional codes</strong> - May have different return policies</li>
              </ul>
            </div>
          </div>
          
          {/* How to Request a Refund */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">How to Request a Refund</h2>
            
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Online Request</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    <li>Log into your account</li>
                    <li>Go to "My Orders"</li>
                    <li>Select the order with issues</li>
                    <li>Click "Request Refund"</li>
                    <li>Fill out the refund form</li>
                    <li>Upload photos if needed</li>
                    <li>Submit your request</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">Contact Support</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    <li>Call our support line</li>
                    <li>Email support@egrocerymart.com</li>
                    <li>Use our live chat feature</li>
                    <li>Provide order details</li>
                    <li>Describe the issue</li>
                    <li>Follow up if needed</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Required Information</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                  <li>Order number</li>
                  <li>Item name and quantity</li>
                  <li>Description of the issue</li>
                  <li>Photos of damaged items (if applicable)</li>
                  <li>Preferred refund method</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Processing Timeline */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Refund Processing Timeline</h2>
            
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-2">24 Hours</div>
                  <h3 className="font-semibold mb-1">Review Period</h3>
                  <p className="text-sm text-gray-600">We review your request within 24 hours</p>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-2">3-5 Days</div>
                  <h3 className="font-semibold mb-1">Processing Time</h3>
                  <p className="text-sm text-gray-600">Approved refunds processed in 3-5 business days</p>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-2">5-7 Days</div>
                  <h3 className="font-semibold mb-1">Bank Transfer</h3>
                  <p className="text-sm text-gray-600">Bank transfers may take 5-7 business days</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Need Help?</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                If you have questions about our refund policies or need assistance with a refund request, please don't hesitate to contact us.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Methods</h3>
                  <ul className="space-y-1 text-sm">
                    <li>📞 Phone: +1 (555) 123-4567</li>
                    <li>📧 Email: support@egrocerymart.com</li>
                    <li>💬 Live Chat: Available 24/7</li>
                    <li>📱 Mobile App: Use the in-app support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Support Hours</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Monday - Friday: 8 AM - 10 PM</li>
                    <li>Saturday: 9 AM - 9 PM</li>
                    <li>Sunday: 10 AM - 8 PM</li>
                    <li>Emergency Support: 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

CustomerRefundPoliciesPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};