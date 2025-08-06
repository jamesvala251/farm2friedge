import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useProducts } from '@/framework/product';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import Alert from '@/components/ui/alert';

interface Props {
  brands: any[];
}

const BrandFilterView = ({ brands }: Props) => {
  const router = useRouter();
  
  // Get selected values from URL parameters
  const selectedBrand = useMemo(
    () => router.query.brand as string || '',
    [router.query.brand]
  );

  function handleBrandSelect(brandSlug: string) {
    const newQuery = { ...router.query };
    if (brandSlug === 'all') {
      delete newQuery.brand;
    } else {
      newQuery.brand = brandSlug;
    }
    
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  }

  return (
    <div className="relative">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">Brands</span>
        
        {/* Brands List */}
        <div className="space-y-1">
          {/* All Brands Option */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleBrandSelect('all')}
              className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                !selectedBrand
                  ? 'bg-orange-100 text-orange-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏷️</span>
                <span>All Brands</span>
              </div>
            </button>
          </div>

          {brands.map((brand) => (
            <div key={brand.id} className="border-b border-gray-100 pb-2 last:border-b-0">
              <button
                onClick={() => handleBrandSelect(brand.slug)}
                className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                  selectedBrand === brand.slug
                    ? 'bg-orange-100 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🏷️</span>
                    <span>{brand.name}</span>
                  </div>
                  {brand.products_count > 0 && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {brand.products_count}
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

const BrandFilter: React.FC<{ type?: any }> = ({ type }) => {
  const { query } = useRouter();

  // Get brands from products data
  const { products, isLoading, error } = useProducts({
    ...(type ? { type } : { type: query.searchType }),
    limit: 1000,
  });

  // Extract unique brands from products
  const brands = useMemo(() => {
    if (!products) return [];
    
    const brandMap = new Map();
    products.forEach((product: any) => {
      if (product.brand) {
        const brand = product.brand;
        if (!brandMap.has(brand.id)) {
          brandMap.set(brand.id, {
            id: brand.id,
            name: brand.name,
            slug: brand.slug,
            products_count: 1
          });
        } else {
          brandMap.get(brand.id).products_count++;
        }
      }
    });
    
    return Array.from(brandMap.values());
  }, [products]);

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return !isEmpty(brands) ? (
    <BrandFilterView brands={brands} />
  ) : (
    <Alert message="No brands found." />
  );
};

export default BrandFilter; 