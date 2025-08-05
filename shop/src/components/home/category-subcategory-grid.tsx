import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';
import { useCategories } from '@/framework/category';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';

interface CategorySubcategoryGridProps {
  variables: any;
}

const CategorySubcategoryGrid: React.FC<CategorySubcategoryGridProps> = ({
  variables,
}) => {
  const { t } = useTranslation('common');
  const { categories, isLoading, error } = useCategories(variables);

  if (error) return <ErrorMessage message={error.message} />;
  
  if (isLoading) {
    return (
      <div className="w-full bg-light py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <Spinner className="h-6 w-6" simple={true} />
          </div>
        </div>
      </div>
    );
  }

  // Safety check: ensure categories is an array
  if (!categories || !Array.isArray(categories)) {
    console.log('Categories data:', categories);
    return (
      <div className="w-full bg-light py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <p className="text-gray-500">No categories found</p>
          </div>
        </div>
      </div>
    );
  }

  // Show first 4 categories with their sub-categories
  const displayCategories = categories.slice(0, 4);

  return (
    <div className="w-full bg-light py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full min-h-screen rtl:space-x-reverse lg:space-x-10">
          {/* Left Section: Categories + Sub-categories */}
          <div className="hidden w-80 shrink-0 lg:block">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-heading mb-6">All Categories</h3>
              <div className="space-y-4">
                {categories.map((category: any) => (
                  <div key={category.id} className="space-y-2">
                    <Link
                      href={`/grocery/search?category=${category.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                      <span className="text-base">{category.icon}</span>
                      <span>{category.name}</span>
                      {category.products_count > 0 && (
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full ml-auto">
                          {category.products_count}
                        </span>
                      )}
                    </Link>
                    
                    {/* Sub-categories */}
                    {category.children && category.children.length > 0 && (
                      <div className="ml-6 space-y-1">
                        {category.children.slice(0, 3).map((subCategory: any) => (
                          <Link
                            key={subCategory.id}
                            href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span>{subCategory.name}</span>
                          </Link>
                        ))}
                        {category.children.length > 3 && (
                          <Link
                            href={`/grocery/search?category=${category.slug}`}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-orange-600 hover:bg-orange-50 font-medium"
                          >
                            <span>View all {category.children.length} sub-categories</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Section: Category Grids */}
          <div className="w-full">
            <div className="grid grid-cols-1 gap-8">
              {displayCategories.map((category: any) => (
                <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  {/* Category Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-xl font-semibold text-heading">{category.name}</h2>
                    </div>
                    <Link
                      href={`/grocery/search?category=${category.slug}`}
                      className="text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                      View All →
                    </Link>
                  </div>
                  
                  {/* Sub-categories Grid */}
                  {category.children && category.children.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                      {category.children.slice(0, 6).map((subCategory: any) => (
                        <Link
                          key={subCategory.id}
                          href={`/grocery/search?category=${category.slug}&subcategory=${subCategory.slug}`}
                          className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-100 transition-colors duration-200">
                            <span className="text-lg">📦</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-600 transition-colors duration-200">
                            {subCategory.name}
                          </span>
                          {subCategory.products_count > 0 && (
                            <span className="text-xs text-gray-500 mt-1">
                              {subCategory.products_count} products
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* View More Button */}
                  {category.children && category.children.length > 6 && (
                    <div className="mt-6 text-center">
                      <Link
                        href={`/grocery/search?category=${category.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
                      >
                        View More {category.name}
                        <span>→</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySubcategoryGrid; 