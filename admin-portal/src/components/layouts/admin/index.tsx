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

interface MenuItemsProps {
  [key: string]: {
    href: string;
    label: string;
    icon: string;
    childMenu: {
      href: string;
      label: string;
      icon: string;
    }[];
  };
}

const SidebarItemMap = ({ menuItems }: any) => {
  const [miniSidebar, _] = useAtom(miniSidebarInitialValue);
  const { childMenu } = menuItems;
  const { width } = useWindowSize();
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
  
  // Simplified menu items for grocery admin with correct icon names
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
          icon: 'CustomersIcon'
        },
        {
          href: '/users/vendors',
          label: 'Vendors',
          icon: 'VendorsIcon'
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
          icon: 'ProductsIcon'
        },
        {
          href: '/products/categories',
          label: 'Categories',
          icon: 'CategoriesIcon'
        },
        {
          href: '/products/reviews',
          label: 'Reviews',
          icon: 'ReviewIcon'
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
          icon: 'OrdersIcon'
        }
      ]
    },
    'Analytics': {
      href: '/analytics',
      label: 'Analytics',
      icon: 'DashboardIcon', // Using DashboardIcon as fallback for Analytics
      childMenu: [
        {
          href: '/analytics/sales',
          label: 'Sales Analytics',
          icon: 'TransactionsIcon' // Using TransactionsIcon as fallback for Sales
        },
        {
          href: '/analytics/users',
          label: 'User Analytics',
          icon: 'UsersIcon' // Using UsersIcon as fallback for UserAnalytics
        }
      ]
    }
  };
  
  const menuKeys = Object.keys(menuItems);
  const { width } = useWindowSize();

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
            'fixed top-0 z-50 h-full w-64 bg-white shadow-sm transition-all duration-300 ease-in-out',
            miniSidebar && width >= RESPONSIVE_WIDTH
              ? 'w-20'
              : 'w-64'
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-between px-5">
              <div className="flex items-center">
                <img
                  src={siteSettings.logo.url}
                  alt={siteSettings.logo.alt}
                  className="h-8 w-auto"
                />
              </div>
            </div>
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
            'flex flex-1 flex-col transition-all duration-300 ease-in-out',
            miniSidebar && width >= RESPONSIVE_WIDTH ? 'ltr:ml-20 rtl:mr-20' : 'ltr:ml-64 rtl:mr-64'
          )}
        >
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default AdminLayout;
