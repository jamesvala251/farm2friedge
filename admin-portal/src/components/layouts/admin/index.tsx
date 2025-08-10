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
import Image from 'next/image';

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
          icon: React.ComponentType<any>;
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
          label: 'Customer Management',
          icon: 'CustomersIcon',
          childMenu: []
        },
        {
          href: '/users/vendors',
          label: 'Vendor Management',
          icon: 'VendorsIcon',
          childMenu: []
        }
      ]
    },
    'Product Moderation': {
      href: '/products',
      label: 'Product Moderation',
      icon: 'ProductsIcon',
      childMenu: [
        {
          href: '/products/approval',
          label: 'Product Approval',
          icon: 'CheckmarkIcon',
          childMenu: []
        },
        {
          href: '/products/content',
          label: 'Content Management',
          icon: 'InformationIcon',
          childMenu: []
        }
      ]
    },
    'Order & Payment Management': {
      href: '/orders',
      label: 'Order & Payment Management',
      icon: 'OrdersIcon',
      childMenu: [
        {
          href: '/orders',
          label: 'Order Management',
          icon: 'OrdersIcon',
          childMenu: []
        },
        {
          href: '/payments',
          label: 'Payment Management',
          icon: 'TransactionsIcon',
          childMenu: []
        }
      ]
    },
    'Analytics & Reporting': {
      href: '/analytics',
      label: 'Analytics & Reporting',
      icon: 'TransactionsIcon',
      childMenu: [
        {
          href: '/analytics/platform',
          label: 'Platform Analytics',
          icon: 'TransactionsIcon',
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
          href: '/content/cms',
          label: 'CMS Management',
          icon: 'InformationIcon',
          childMenu: []
        },
        {
          href: '/content/marketing',
          label: 'Marketing Tools',
          icon: 'CouponsIcon',
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
            {/* Removed extra logo section - logo already in top navbar */}
            
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
