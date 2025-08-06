import { useState } from 'react';
import Link from '@/components/ui/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

interface MegaMenuProps {
  items: any[];
  className?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ items, className }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className={cn('relative', className)}>
      <div className="flex space-x-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <Link
              href={item.href}
              className="flex items-center space-x-1 text-gray-700 hover:text-accent transition-colors"
            >
              <span>{item.name}</span>
              {item.children && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            
            {item.children && activeItem === item.id && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50">
                {item.children.map((child: any) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
