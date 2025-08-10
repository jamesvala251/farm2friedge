import { SearchIcon } from '@/components/icons/search-icon';
import { searchModalInitialValues } from '@/utils/constants';
import Link from '@/components/ui/link';
import Scrollbar from '@/components/ui/scrollbar';
// import { useMeQuery } from '@/data/user'; // REMOVED - Using mock data
import { siteSettings } from '@/settings/site.settings';
import {
  adminOnly,
  getAuthCredentials,
  hasAccess,
  ownerOnly,
} from '@/utils/auth-utils';
import { STAFF } from '@/utils/constants';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

// Mock data for demo purposes
const mockUser = {
  managed_shop: { slug: 'demo-shop' },
  shops: [{ slug: 'demo-shop' }]
};

type IProps = {};

const SearchBar: React.FC<IProps> = ({}: IProps) => {
  const [searchText, setSearchText] = useState('');
  const [searchItem, setSearchItem] = useState<any[]>([]);
  const [searchModal] = useAtom(searchModalInitialValues);
  let {
    query: { shop },
    locale,
  } = useRouter();
  const { permissions: currentUserPermissions } = getAuthCredentials();
  // const { data: me } = useMeQuery(); // REMOVED - Using mock data
  const me = mockUser; // Mock user data

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (!text || text.length < 1) {
      setSearchItem([]);
      return;
    }

    // Comprehensive search functionality for demo
    const demoLinks = [
      { href: '/', label: 'Dashboard', customLabel: 'Dashboard' },
      { href: '/users/customers', label: 'Customers', customLabel: 'Customers' },
      { href: '/users/vendors', label: 'Vendors', customLabel: 'Vendors' },
      { href: '/users/staff', label: 'Staff Management', customLabel: 'Staff Management' },
      { href: '/products', label: 'Products', customLabel: 'Products' },
      { href: '/products/categories', label: 'Categories', customLabel: 'Categories' },
      { href: '/products/reviews', label: 'Reviews', customLabel: 'Reviews' },
      { href: '/products/attributes', label: 'Attributes', customLabel: 'Attributes' },
      { href: '/products/tags', label: 'Tags', customLabel: 'Tags' },
      { href: '/orders', label: 'Orders', customLabel: 'Orders' },
      { href: '/orders/status', label: 'Order Status', customLabel: 'Order Status' },
      { href: '/orders/tracking', label: 'Order Tracking', customLabel: 'Order Tracking' },
      { href: '/orders/refunds', label: 'Refunds', customLabel: 'Refunds' },
      { href: '/financial/transactions', label: 'Transactions', customLabel: 'Transactions' },
      { href: '/financial/withdrawals', label: 'Withdrawals', customLabel: 'Withdrawals' },
      { href: '/financial/taxes', label: 'Taxes', customLabel: 'Taxes' },
      { href: '/financial/commissions', label: 'Commissions', customLabel: 'Commissions' },
      { href: '/marketing/coupons', label: 'Coupons', customLabel: 'Coupons' },
      { href: '/marketing/flash-deals', label: 'Flash Deals', customLabel: 'Flash Deals' },
      { href: '/marketing/notifications', label: 'Notifications', customLabel: 'Notifications' },
      { href: '/analytics/sales', label: 'Sales Analytics', customLabel: 'Sales Analytics' },
      { href: '/analytics/users', label: 'User Analytics', customLabel: 'User Analytics' },
      { href: '/analytics/products', label: 'Product Analytics', customLabel: 'Product Analytics' },
      { href: '/analytics/vendors', label: 'Vendor Analytics', customLabel: 'Vendor Analytics' },
      { href: '/content/faq', label: 'FAQ Management', customLabel: 'FAQ Management' },
      { href: '/content/terms', label: 'Terms & Conditions', customLabel: 'Terms & Conditions' },
      { href: '/content/store-notices', label: 'Store Notices', customLabel: 'Store Notices' },
      { href: '/content/questions', label: 'Questions', customLabel: 'Questions' },
      { href: '/settings/general', label: 'General Settings', customLabel: 'General Settings' },
      { href: '/settings/maintenance', label: 'Maintenance Mode', customLabel: 'Maintenance Mode' },
      { href: '/settings/shipping', label: 'Shipping Settings', customLabel: 'Shipping Settings' }
    ];

    const filteredLinks = demoLinks.filter(link => 
      link.label.toLowerCase().includes(text.toLowerCase()) ||
      link.customLabel.toLowerCase().includes(text.toLowerCase())
    );

    setSearchItem(filteredLinks);
  };

  useEffect(() => {
    if (searchText === '') {
      setSearchItem([]);
    } else {
      handleSearch(searchText);
    }
  }, [searchText]);

  return (
    <Fragment>
      <div
        className={cn('fixed inset-0', searchText === '' && 'hidden')}
        onClick={() => setSearchText('')}
      />
      <div className="relative w-full max-w-lg rounded-3xl">
        <SearchIcon className="absolute inset-y-0 left-4 my-auto h-4 w-4" />
        <input
          type="text"
          className="block w-full rounded-3xl border border-solid border-border-200 bg-gray-50 py-2 text-sm text-heading transition-[border] placeholder:text-gray-400 focus:border-accent focus:bg-white focus:outline-none focus:ring-0 ltr:pl-12 rtl:pr-12 sm:text-sm sm:leading-6"
          placeholder="Search for pages, products, and more"
          value={searchText}
          onChange={(e) => handleSearch(e?.target?.value)}
        />
        {searchItem.length > 0 && (
          <button
            className="absolute top-1/2 h-auto w-auto -translate-y-1/2 px-0 text-sm font-medium text-gray-500 hover:text-accent-hover ltr:right-4 rtl:left-4"
            onClick={(e) => {
              e.preventDefault();
              setSearchText('');
            }}
          >
            Clear
          </button>
        )}
      </div>

      {searchItem.length > 0 ? (
        <div className="sidebar-scrollbar absolute top-12 z-30 h-[418px] max-h-[418px] w-full max-w-lg rounded-xl border border-solid border-gray-200 bg-white py-4 shadow-box lg:top-[74px]">
          <Scrollbar
            className="max-h-full w-full"
            options={{
              scrollbars: {
                autoHide: 'never',
              },
            }}
          >
            <div className="flex flex-col">
              <h4 className="px-6 pb-2 text-sm font-medium text-black xl:text-base">
                Quick Page Links
              </h4>
              <div className="mx-3">
                {searchItem?.map((item) => {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setSearchItem([]);
                        setSearchText('');
                      }}
                      className="group flex items-center rounded-lg py-2.5 px-3 text-sm text-gray-700 transition duration-200 ease-in-out hover:bg-gray-100 hover:text-heading"
                    >
                      <span className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-200 p-2 text-gray-500 group-hover:border-gray-300">
                        {/* Removed TermsIcon import, so this will cause an error */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0-3 3V6a3 3 0 1 0 3-3H18a3 3 0 1 0-3 3"/></svg>
                      </span>
                      <div className="flex flex-col ltr:pl-3 rtl:pr-3">
                        <span className="whitespace-nowrap font-medium capitalize">
                          {!shop ? item.customLabel : item.label}
                        </span>
                        <span className="text-gray-500">{item?.href}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Scrollbar>
        </div>
      ) : null}
    </Fragment>
  );
};

export default SearchBar;
