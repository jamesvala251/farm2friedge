import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useCategories } from '@/framework/category';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import Alert from '@/components/ui/alert';

interface Props {
  dietaryOptions: any[];
}

const DietaryFilterView = ({ dietaryOptions }: Props) => {
  const router = useRouter();
  
  // Get selected values from URL parameters
  const selectedDietary = useMemo(
    () => router.query.dietary as string || '',
    [router.query.dietary]
  );

  function handleDietarySelect(dietarySlug: string) {
    const newQuery = { ...router.query };
    if (dietarySlug === 'all') {
      delete newQuery.dietary;
    } else {
      newQuery.dietary = dietarySlug;
    }
    
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  }

  return (
    <div className="relative">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">Dietary Preferences</span>
        
        {/* Dietary Options List */}
        <div className="space-y-1">
          {/* All Dietary Options */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleDietarySelect('all')}
              className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                !selectedDietary
                  ? 'bg-orange-100 text-orange-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🌱</span>
                <span>All Dietary Options</span>
              </div>
            </button>
          </div>

          {dietaryOptions.map((option) => (
            <div key={option.id} className="border-b border-gray-100 pb-2 last:border-b-0">
              <button
                onClick={() => handleDietarySelect(option.slug)}
                className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                  selectedDietary === option.slug
                    ? 'bg-orange-100 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{option.icon}</span>
                    <span>{option.name}</span>
                  </div>
                  {option.products_count > 0 && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {option.products_count}
                    </span>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};

const DietaryFilter: React.FC<{ type?: any }> = ({ type }) => {
  const { query } = useRouter();

  // Get dietary preferences category
  const { categories, isLoading, error } = useCategories({
    ...(type ? { type } : { type: query.searchType }),
    limit: 1000,
  });

  // Extract dietary preferences from categories
  const dietaryOptions = useMemo(() => {
    if (!categories) return [];
    
    const dietaryCategory = categories.find(cat => cat.slug === 'dietary-preferences');
    if (dietaryCategory && dietaryCategory.children) {
      return dietaryCategory.children.map((child: any) => ({
        id: child.id,
        name: child.name,
        slug: child.slug,
        products_count: child.products_count || 0,
        icon: getDietaryIcon(child.slug)
      }));
    }
    
    return [];
  }, [categories]);

  // Helper function to get icons for dietary options
  function getDietaryIcon(slug: string): string {
    switch (slug) {
      case 'organic-products':
        return '🌿';
      case 'vegan-products':
        return '🥬';
      case 'gluten-free':
        return '🌾';
      case 'halal-products':
        return '☪️';
      case 'kosher-products':
        return '✡️';
      default:
        return '🌱';
    }
  }

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return !isEmpty(dietaryOptions) ? (
    <DietaryFilterView dietaryOptions={dietaryOptions} />
  ) : (
    <Alert message="No dietary options found." />
  );
};

export default DietaryFilter; 