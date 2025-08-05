import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';
import { ExpandMoreIcon } from '@/components/icons/expand-more-icon';
import type { Category } from '@/types';

interface DropdownCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  title?: string;
}

const DropdownCategories: React.FC<DropdownCategoriesProps> = ({
  notFound,
  categories,
  loading,
  title,
}) => {
  const { t } = useTranslation('common');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <div className="animate-pulse">Loading categories...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No categories found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-lg font-semibold text-heading mb-4">{title}</h2>
      )}
      {/* Desktop: Flex wrap, Mobile: Horizontal scroll */}
      <div className="flex gap-2 lg:flex-wrap lg:justify-center overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
        {categories?.map((category: any) => (
          <div key={category.id} className="relative group flex-shrink-0 lg:flex-shrink">
            {/* Main Category Button */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-orange-50 text-heading hover:text-orange-500 transition-colors duration-200 border border-gray-200 hover:border-orange-200 whitespace-nowrap"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                {category.children && category.children.length > 0 && (
                  <ExpandMoreIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
                {category.products_count > 0 && (
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                    {category.products_count}
                  </span>
                )}
              </button>
              
              {/* Dropdown Menu - Desktop only */}
              {category.children && category.children.length > 0 && (
                <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-200 lg:block hidden ${
                  openDropdown === category.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="p-2">
                    {/* Main Category Link */}
                    <Link
                      href={`/grocery/search?category=${category.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                      <span className="text-base">{category.icon}</span>
                      <span>All {category.name}</span>
                    </Link>
                    
                    {/* Sub-categories */}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      {category.children.map((subCategory: any) => (
                        <Link
                          key={subCategory.id}
                          href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                          <span>{subCategory.name}</span>
                          {subCategory.products_count > 0 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full ml-auto">
                              {subCategory.products_count}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile: Sub-categories in separate section */}
      <div className="lg:hidden mt-4">
        {categories?.map((category: any) => (
          <div key={category.id} className="mb-3">
            <Link
              href={`/grocery/search?category=${category.slug}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-medium"
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </Link>
            
            {/* Mobile Sub-categories */}
            {category.children && category.children.length > 0 && (
              <div className="ml-6 mt-2 space-y-1">
                {category.children.map((subCategory: any) => (
                  <Link
                    key={subCategory.id}
                    href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span>{subCategory.name}</span>
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

export default DropdownCategories; 