import Navbar from '@/components/layouts/navigation/top-navbar';
import { miniSidebarInitialValue } from '@/utils/constants';
import Footer from '@/components/layouts/footer/footer-bar';
import MobileNavigation from '@/components/layouts/navigation/mobile-navigation';
import { siteSettings } from '@/settings/site.settings';
import SidebarItem from '@/components/layouts/navigation/sidebar-item';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import { useWindowSize } from '@/utils/use-window-size';
import { RESPONSIVE_WIDTH } from '@/utils/constants';
import { useState, useEffect } from 'react';

interface MenuItemsProps {
  [key: string]: {
    href: string;
    label: string;
    icon: string;
    childMenu: {
      href: string;
      label: string;
      icon: string;
      childMenu?: any[];
    }[];
  };
}

const SidebarItemMap = ({ menuItems }: any) => {
  const [miniSidebar, _] = useAtom(miniSidebarInitialValue);
  const { childMenu, href, label, icon } = menuItems;
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch by only rendering after client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return <div>Loading...</div>;
  }
  
  // If no childMenu, render the parent item directly
  if (!childMenu || childMenu.length === 0) {
    return (
      <SidebarItem
        href={href}
        label={label}
        icon={icon}
        childMenu={[]}
        miniSidebar={miniSidebar && width >= RESPONSIVE_WIDTH}
      />
    );
  }
  
  // If has childMenu, render all child items
  return (
    <div className="space-y-2">
      {childMenu?.map(
        ({
          href,
          label,
          icon,
          childMenu,
        }: {
          href: string;
          label: string;
          icon: string;
          childMenu: any;
        }) => (
          <SidebarItem
            href={href}
            key={label}
            label={label}
            icon={icon}
            childMenu={childMenu}
            miniSidebar={miniSidebar && width >= RESPONSIVE_WIDTH}
          />
        )
      )}
    </div>
  );
};

const SideBarGroup = () => {
  const [miniSidebar, _] = useAtom(miniSidebarInitialValue);
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch by only rendering after client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return <div className="flex flex-col px-5 pt-6 pb-3">Loading...</div>;
  }
  
  // Comprehensive menu items for grocery admin based on BRD requirements
  const menuItems: MenuItemsProps = {
    'Dashboard': {
      href: '/',
      label: 'Dashboard',
      icon: 'DashboardIcon',
      childMenu: []
    },
    'User Management': {
      href: '/users',
      label: 'User Management',
      icon: 'UsersIcon',
      childMenu: [
        {
          href: '/users/customers',
          label: 'Customers',
          icon: 'CustomersIcon',
          childMenu: []
        },
        {
          href: '/users/vendors',
          label: 'Vendors',
          icon: 'VendorsIcon',
          childMenu: []
        },
        {
          href: '/users/staff',
          label: 'Staff Management',
          icon: 'StaffIcon',
          childMenu: []
        }
      ]
    },
    'Product Management': {
      href: '/products',
      label: 'Product Management',
      icon: 'ProductsIcon',
      childMenu: [
        {
          href: '/products',
          label: 'All Products',
          icon: 'ProductsIcon',
          childMenu: []
        },
        {
          href: '/products/categories',
          label: 'Categories',
          icon: 'CategoriesIcon',
          childMenu: []
        },
        {
          href: '/products/reviews',
          label: 'Reviews',
          icon: 'ReviewIcon',
          childMenu: []
        },
        {
          href: '/products/attributes',
          label: 'Attributes',
          icon: 'AttributeIcon',
          childMenu: []
        },
        {
          href: '/products/tags',
          label: 'Tags',
          icon: 'TagIcon',
          childMenu: []
        }
      ]
    },
    'Order Management': {
      href: '/orders',
      label: 'Order Management',
      icon: 'OrdersIcon',
      childMenu: [
        {
          href: '/orders',
          label: 'All Orders',
          icon: 'OrdersIcon',
          childMenu: []
        },
        {
          href: '/orders/status',
          label: 'Order Status',
          icon: 'OrdersStatusIcon',
          childMenu: []
        },
        {
          href: '/orders/tracking',
          label: 'Order Tracking',
          icon: 'OrderTrackingIcon',
          childMenu: []
        },
        {
          href: '/orders/refunds',
          label: 'Refunds',
          icon: 'RefundsIcon',
          childMenu: []
        }
      ]
    },
    'Financial Management': {
      href: '/financial',
      label: 'Financial Management',
      icon: 'FinancialIcon',
      childMenu: [
        {
          href: '/financial/transactions',
          label: 'Transactions',
          icon: 'TransactionsIcon',
          childMenu: []
        },
        {
          href: '/financial/withdrawals',
          label: 'Withdrawals',
          icon: 'WithdrawIcon',
          childMenu: []
        },
        {
          href: '/financial/taxes',
          label: 'Taxes',
          icon: 'TaxesIcon',
          childMenu: []
        },
        {
          href: '/financial/commissions',
          label: 'Commissions',
          icon: 'FinancialIcon',
          childMenu: []
        }
      ]
    },
    'Marketing & Promotions': {
      href: '/marketing',
      label: 'Marketing & Promotions',
      icon: 'CouponsIcon',
      childMenu: [
        {
          href: '/marketing/coupons',
          label: 'Coupons',
          icon: 'CouponsIcon',
          childMenu: []
        },
        {
          href: '/marketing/flash-deals',
          label: 'Flash Deals',
          icon: 'FlashDealsIcon',
          childMenu: []
        },
        {
          href: '/marketing/notifications',
          label: 'Notifications',
          icon: 'NotificationIcon',
          childMenu: []
        }
      ]
    },
    'Analytics & Reports': {
      href: '/analytics',
      label: 'Analytics & Reports',
      icon: 'DashboardIcon',
      childMenu: [
        {
          href: '/analytics/sales',
          label: 'Sales Analytics',
          icon: 'TransactionsIcon',
          childMenu: []
        },
        {
          href: '/analytics/users',
          label: 'User Analytics',
          icon: 'UsersIcon',
          childMenu: []
        },
        {
          href: '/analytics/products',
          label: 'Product Analytics',
          icon: 'ProductsIcon',
          childMenu: []
        },
        {
          href: '/analytics/vendors',
          label: 'Vendor Analytics',
          icon: 'VendorsIcon',
          childMenu: []
        }
      ]
    },
    'Content Management': {
      href: '/content',
      label: 'Content Management',
      icon: 'InformationIcon',
      childMenu: [
        {
          href: '/content/faq',
          label: 'FAQ Management',
          icon: 'FaqIcon',
          childMenu: []
        },
        {
          href: '/content/terms',
          label: 'Terms & Conditions',
          icon: 'TermsIcon',
          childMenu: []
        },
        {
          href: '/content/store-notices',
          label: 'Store Notices',
          icon: 'StoreNoticeIcon',
          childMenu: []
        },
        {
          href: '/content/questions',
          label: 'Questions',
          icon: 'QuestionIcon',
          childMenu: []
        }
      ]
    },
    'Settings': {
      href: '/settings',
      label: 'Settings',
      icon: 'SettingsIcon',
      childMenu: [
        {
          href: '/settings/general',
          label: 'General Settings',
          icon: 'SettingsIcon',
          childMenu: []
        },
        {
          href: '/settings/maintenance',
          label: 'Maintenance Mode',
          icon: 'MaintenanceIcon',
          childMenu: []
        },
        {
          href: '/settings/shipping',
          label: 'Shipping Settings',
          icon: 'ShippingsIcon',
          childMenu: []
        }
      ]
    }
  };
  
  const menuKeys = Object.keys(menuItems);

  return (
    <>
      {menuKeys?.map((menu, index) => (
        <div
          className={cn(
            'flex flex-col px-5',
            miniSidebar && width >= RESPONSIVE_WIDTH
              ? 'border-b border-dashed border-gray-200 py-5'
              : 'pt-6 pb-3'
          )}
          key={index}
        >
          <div
            className={cn(
              'px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60',
              miniSidebar && width >= RESPONSIVE_WIDTH ? 'hidden' : ''
            )}
          >
            {menuItems[menu]?.label}
          </div>
          <SidebarItemMap menuItems={menuItems[menu]} />
        </div>
      ))}
    </>
  );
};

const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { width } = useWindowSize();
  const [miniSidebar, setMiniSidebar] = useAtom(miniSidebarInitialValue);
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch by only rendering after client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return <div className="flex min-h-screen flex-col bg-gray-100">Loading...</div>;
  }

  return (
    <div
      className="flex min-h-screen flex-col bg-gray-100"
      dir="ltr"
    >
      <Navbar />
      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed top-16 left-0 z-50 h-[calc(100vh-64px)] bg-white shadow-sm transition-all duration-300 ease-in-out',
            miniSidebar && width >= RESPONSIVE_WIDTH
              ? 'w-20'
              : 'w-72'
          )}
        >
          <div className="flex h-full flex-col">
            <Scrollbar className="h-full w-full">
              <div className="flex h-full flex-col">
                <SideBarGroup />
              </div>
            </Scrollbar>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={cn(
            'relative flex w-full flex-col justify-start transition-[padding] duration-300 pt-[72px] lg:pt-20',
            miniSidebar && width >= RESPONSIVE_WIDTH 
              ? 'ltr:xl:pl-20 rtl:xl:pr-20 ltr:lg:pl-20 rtl:lg:pr-20' 
              : 'ltr:xl:pl-76 rtl:xl:pr-76 ltr:lg:pl-72 rtl:lg:pr-72 rtl:lg:pl-0'
          )}
        >
          <div className="h-full p-5 md:p-8">
            {children}
          </div>
          <Footer />
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default AdminLayout;
