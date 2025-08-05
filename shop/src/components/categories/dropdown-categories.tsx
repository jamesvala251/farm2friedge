import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';
import { ExpandMoreIcon } from '@/components/icons/expand-more-icon';
import { FilterIcon } from '@/components/icons/filter-icon';
import Modal from '@/components/ui/modal/modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center py-2">
        <div className="animate-pulse text-sm">Loading categories...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">No categories found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-base font-semibold text-heading mb-3">{title}</h2>
      )}
      
      {/* Desktop: Card-based layout with click dropdown */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories?.map((category: any) => (
          <div key={category.id} className="relative group">
            <div className={`block p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-orange-300 transition-all duration-200 group-hover:bg-orange-50 h-32 flex flex-col items-center justify-center cursor-pointer ${
              openDropdown === category.id ? 'border-orange-400 shadow-md' : ''
            }`}
                 onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
            >
              {/* Category Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200">
                  <span className="text-2xl">{category.icon}</span>
                </div>
              </div>
              
              {/* Category Name */}
              <div className="text-center">
                <h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200 text-sm">
                  {category.name}
                </h3>
              </div>
              
              {/* Bottom Border with Arrow */}
              {category.children && category.children.length > 0 && (
                <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-200 ${
                  openDropdown === category.id ? 'bg-orange-500' : 'bg-gray-200 group-hover:bg-orange-300'
                }`}>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent transition-all duration-200 ${
                      openDropdown === category.id ? 'border-t-orange-500' : 'border-t-gray-200 group-hover:border-t-orange-300'
                    }`}></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Dropdown Menu */}
            {category.children && category.children.length > 0 && (
              <div className={`absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-200 ${
                openDropdown === category.id ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
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
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    {category.children.slice(0, 6).map((subCategory: any) => (
                      <Link
                        key={subCategory.id}
                        href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        <span>{subCategory.name}</span>
                        {subCategory.products_count > 0 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full ml-auto">
                            {subCategory.products_count}
                          </span>
                        )}
                      </Link>
                    ))}
                    {category.children.length > 6 && (
                      <Link
                        href={`/grocery/search?category=${category.slug}`}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-orange-600 hover:bg-orange-50 font-medium"
                      >
                        <span>View all {category.children.length} →</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile: Small Icon Button - Will be positioned in layout */}
      <div className="lg:hidden">
        {/* Small Icon Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          aria-label="Browse Categories"
        >
          <FilterIcon width="18" height="18" />
        </button>
        
        {/* Categories Modal */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-heading">All Categories</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="space-y-3">
                {categories?.map((category: any) => (
                  <div key={category.id} className="space-y-2">
                    {/* Main Category */}
                    <Link
                      href={`/grocery/search?category=${category.slug}`}
                      onClick={() => setIsModalOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 text-heading hover:text-orange-600 transition-colors duration-200"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium">{category.name}</div>
                        {category.products_count > 0 && (
                          <div className="text-xs text-gray-500">{category.products_count} products</div>
                        )}
                      </div>
                      {category.children && category.children.length > 0 && (
                        <span className="text-xs text-gray-400">{category.children.length} sub-categories</span>
                      )}
                    </Link>
                    
                    {/* Sub-categories */}
                    {category.children && category.children.length > 0 && (
                      <div className="ml-8 space-y-1">
                        {category.children.map((subCategory: any) => (
                          <Link
                            key={subCategory.id}
                            href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                            onClick={() => setIsModalOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="flex-1">{subCategory.name}</span>
                            {subCategory.products_count > 0 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {subCategory.products_count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DropdownCategories; 