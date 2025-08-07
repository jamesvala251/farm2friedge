import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';

export type IFooterProp = {
  className?: string;
};

const Footer: React.FC<IFooterProp> = ({ className }) => {
  const date = new Date();

  return (
    <footer className="mt-auto bg-white shadow">
      <div className="mx-auto w-full">
        <div className="flex items-center justify-between bg-white px-5 py-6 md:px-8">
          <span className="text-sm text-body sm:text-center">
            ©{date.getFullYear()}{' '}
            <Link
              className="font-medium text-heading"
              href={Routes?.dashboard}
            >
              eGroceryMart Admin
            </Link>
            . All rights reserved.
          </span>
          <div className="flex space-x-6 text-sm font-medium text-body sm:justify-center">
            v1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
