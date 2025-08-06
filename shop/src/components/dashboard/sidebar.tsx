import Link from '@/components/ui/link';
import { siteSettings } from '@/config/site';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useLogout, useUser } from '@/framework/user';
import { useSettings } from '@/framework/settings';
import { PaymentGateway } from '@/types';
import { Routes } from '@/config/routes';
import { isStripeAvailable } from '@/lib/is-stripe-available';

type DashboardSidebarProps = {
  className?: string;
};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className }) => {
  const { mutate: logout } = useLogout();
  const { me } = useUser();
  const { settings } = useSettings();
  const { pathname } = useRouter();

  // Function to map translation keys to English text
  const getMenuLabel = (label: string) => {
    switch (label) {
      case 'profile-sidebar-profile': return 'Profile';
      case 'profile-sidebar-password': return 'Change Password';
      case 'profile-sidebar-orders': return 'Orders';
      case 'profile-sidebar-my-wishlist': return 'Wishlist';
      case 'profile-sidebar-help': return 'Help';
      case 'profile-sidebar-logout': return 'Logout';
      default: return label;
    }
  };

  return (
    <aside className={className}>
      <div className="overflow-hidden rounded border border-border-200 bg-light">
        <ul className="py-7">
          {siteSettings.dashboardSidebarMenu
            ?.slice(0, -1)
            .map((item: any, idx) => {
              const enableMyCardRoute = isStripeAvailable(settings);
              if (item?.href === Routes.cards && enableMyCardRoute === false) {
                return null;
              }
              if (
                item?.href === Routes.notifyLogs &&
                !Boolean(settings?.enableEmailForDigitalProduct)
              ) {
                return null;
              }

              return (
                <li className="py-1" key={idx}>
                  <Link
                    href={item.href}
                    className={classNames(
                      'block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent',
                      {
                        '!border-accent text-accent': pathname === item.href,
                      }
                    )}
                  >
                    {getMenuLabel(item.label)}
                  </Link>
                </li>
              );
            })}
        </ul>
        {/* End of top part menu */}

        <ul className="border-t border-border-200 bg-light py-4">
          <li className="block py-2 px-11 ">
            <button
              onClick={() => logout()}
              className={classNames(
                'font-semibold text-heading transition-colors hover:text-accent focus:text-accent'
              )}
            >
              Logout
            </button>
          </li>
        </ul>
        {/* End of bottom part menu */}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
