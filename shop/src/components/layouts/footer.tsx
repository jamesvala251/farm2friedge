import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import { useSettings } from '@/framework/settings';
import { useRouter } from 'next/router';
import { StripeIcon } from '@/components/icons/payment-gateways/stripe';
import { PayPalIcon } from '@/components/icons/payment-gateways/paypal';
import { MollieIcon } from '@/components/icons/payment-gateways/mollie';
import { RazorPayIcon } from '@/components/icons/payment-gateways/razorpay';
import { SSLComerz } from '@/components/icons/payment-gateways/sslcomerz';
import { PayStack } from '@/components/icons/payment-gateways/paystack';
import { IyzicoIcon } from '@/components/icons/payment-gateways/iyzico';
import { XenditIcon } from '@/components/icons/payment-gateways/xendit';
import { BkashIcon } from '@/components/icons/payment-gateways/bkash';
import { PaymongoIcon } from '@/components/icons/payment-gateways/paymongo';
import { FlutterwaveIcon } from '@/components/icons/payment-gateways/flutterwave';
import { isEmpty } from 'lodash';
import { SVGLoaderIcon } from '@/components/icons/svg-loader';
import { Routes } from '@/config/routes';
import { getIcon } from '@/lib/get-icon';
import * as socialIcons from '@/components/icons/social';

export const icon: any = {
  stripe: <StripeIcon />,
  paypal: <PayPalIcon />,
  razorpay: <RazorPayIcon />,
  mollie: <MollieIcon />,
  sslcommerz: <SSLComerz />,
  paystack: <PayStack />,
  iyzico: <IyzicoIcon />,
  xendit: <XenditIcon />,
  bkash: <BkashIcon />,
  paymongo: <PaymongoIcon />,
  flutterwave: <FlutterwaveIcon />,
};

const Footer = () => {
  const { settings, isLoading: settingsLoading } = useSettings();
  const paymentGateway = settings?.paymentGateway,
    siteTitle = settings?.siteTitle,
    siteLink = settings?.siteLink,
    copyrightText = settings?.copyrightText,
    externalText = settings?.externalText,
    externalLink = settings?.externalLink,
    contactDetails = settings?.contactDetails;

  const date = new Date();

  return (
    <div className="flex w-full flex-col border-t border-gray-800 border-t-border-100 bg-white px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16">
      {/* Top */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 pt-16 md:grid-cols-3 lg:pt-24 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 2xl:grid-cols-5">
        <div className="flex flex-col">
          <div className="mb-[2px] flex h-16 items-start">
            <Logo />
          </div>

          {settingsLoading ? (
            <SVGLoaderIcon className="text-2xl" />
          ) : (
            <>
              {contactDetails?.location?.formattedAddress ? (
                <Link
                  href={`https://www.google.com/maps/place/${contactDetails?.location?.formattedAddress}`}
                  className="text-sm not-italic mb-7 text-heading"
                >
                  {contactDetails?.location?.formattedAddress}
                </Link>
              ) : (
                ''
              )}
              {contactDetails?.emailAddress ? (
                <Link
                  className="mb-1 text-sm text-heading"
                  href={`mailto:${contactDetails?.emailAddress}`}
                >
                  {contactDetails?.emailAddress}
                </Link>
              ) : (
                ''
              )}
              {contactDetails?.contact ? (
                <Link
                  className="text-sm text-heading"
                  href={`tel:${contactDetails?.contact}`}
                >
                  {contactDetails?.contact}
                </Link>
              ) : (
                ''
              )}
            </>
          )}

          <div>
            {settingsLoading ? (
              <SVGLoaderIcon className="text-xl" />
            ) : (
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group cursor-pointer text-body transition-colors hover:text-accent focus:text-accent"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group cursor-pointer text-body transition-colors hover:text-accent focus:text-accent"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group cursor-pointer text-body transition-colors hover:text-accent focus:text-accent"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="mb-6 text-sm font-semibold text-heading lg:text-base xl:text-lg">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href={Routes.home}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={Routes.products}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={Routes.coupons}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href={Routes.contactUs}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col">
          <h4 className="mb-6 text-sm font-semibold text-heading lg:text-base xl:text-lg">
            Customer Service
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href={Routes.help}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href={Routes.terms}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href={Routes.privacy}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={Routes.refunds}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="flex flex-col">
          <h4 className="mb-6 text-sm font-semibold text-heading lg:text-base xl:text-lg">
            About Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href={Routes.home}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                About eGroceryMart
              </Link>
            </li>
            <li>
              <Link
                href={Routes.becomeSeller}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Become a Seller
              </Link>
            </li>
            <li>
              <Link
                href={Routes.home}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href={Routes.home}
                className="text-body transition-colors hover:text-accent focus:text-accent"
              >
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h4 className="mb-6 text-sm font-semibold text-heading lg:text-base xl:text-lg">
            Stay Updated
          </h4>
          <p className="mb-4 text-sm text-body">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg border border-gray-300 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <button className="rounded-r-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col border-t border-gray-200 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col space-y-2 text-sm text-body lg:flex-row lg:space-y-0 lg:space-x-6 rtl:lg:space-x-reverse">
          <span>
            © {date.getFullYear()} {siteTitle || 'eGroceryMart'}. All rights reserved.
          </span>
          {externalText && externalLink && (
            <Link
              href={externalLink}
              className="text-body transition-colors hover:text-accent focus:text-accent"
            >
              {externalText}
            </Link>
          )}
        </div>

        {/* Payment Methods */}
        {!isEmpty(paymentGateway) && (
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span className="text-sm text-body">We Accept:</span>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {paymentGateway?.map((item: any, idx: number) => (
                <span key={idx} className="flex h-8 w-12 items-center justify-center">
                  {icon[item?.name]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
