import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useCategories } from '@/framework/category';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import Alert from '@/components/ui/alert';

interface Props {
  categories: any[];
}

const CategoryFilterView = ({ categories }: Props) => {
  const router = useRouter();
  
  // Get selected values from URL parameters
  const selectedCategory = useMemo(
    () => router.query.category as string || '',
    [router.query.category]
  );
  
  const selectedSubCategory = useMemo(
    () => router.query.subcategory as string || '',
    [router.query.subcategory]
  );
  
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  function handleCategorySelect(categorySlug: string) {
    // Clear subcategory when main category changes
    const newQuery = { ...router.query };
    if (categorySlug === 'all') {
      delete newQuery.category;
      delete newQuery.subcategory;
    } else {
      newQuery.category = categorySlug;
      delete newQuery.subcategory;
      
      // Find the category and expand it if it has subcategories
      const category = categories.find(cat => cat.slug === categorySlug);
      if (category && category.children && category.children.length > 0) {
        const newExpanded = new Set(expandedCategories);
        newExpanded.add(category.id);
        setExpandedCategories(newExpanded);
      }
    }
    
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  }

  function handleSubCategorySelect(categorySlug: string, subCategorySlug: string) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: categorySlug,
        subcategory: subCategorySlug,
      },
    });
  }

  function toggleCategory(categoryId: string) {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  }

  return (
    <div className="relative">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">Categories</span>
        
        {/* Main Categories */}
        <div className="space-y-1">
          {/* All Categories Option */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                !selectedCategory
                  ? 'bg-orange-100 text-orange-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏠</span>
                <span>All Categories</span>
              </div>
            </button>
          </div>

          {categories.map((category) => (
            <div key={category.id} className="border-b border-gray-100 pb-2 last:border-b-0">
              {/* Main Category */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleCategorySelect(category.slug)}
                  className={`flex-1 text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                    selectedCategory === category.slug
                      ? 'bg-orange-100 text-orange-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{category.icon || '📦'}</span>
                    <span>{category.name}</span>
                  </div>
                </button>
                
                {category.children && category.children.length > 0 && (
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="ml-2 p-1 text-gray-500 hover:text-gray-700"
                    aria-label={expandedCategories.has(category.id) ? 'Collapse' : 'Expand'}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        expandedCategories.has(category.id) ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Sub-categories */}
              {category.children && category.children.length > 0 && expandedCategories.has(category.id) && (
                <div className="mt-2 ml-6 space-y-1 border-l-2 border-gray-200 pl-4">
                  {category.children.map((subCategory: any) => (
                    <button
                      key={subCategory.id}
                      onClick={() => handleSubCategorySelect(category.slug, subCategory.slug)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 text-sm ${
                        selectedSubCategory === subCategory.slug && selectedCategory === category.slug
                          ? 'bg-orange-100 text-orange-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          <span>{subCategory.name}</span>
                        </div>
                        {subCategory.products_count > 0 && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                            {subCategory.products_count}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};

const CategoryFilter: React.FC<{ type?: any }> = ({ type }) => {
  const { query, locale } = useRouter();

  // @ts-ignore
  const { categories, isLoading, error } = useCategories({
    ...(type ? { type } : { type: query.searchType }),
    limit: 1000,
  });

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return !isEmpty(categories) ? (
    <CategoryFilterView categories={categories} />
  ) : (
    <Alert message="No categories found." />
  );
};

export default CategoryFilter;
