import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useProducts } from '@/framework/product';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import Alert from '@/components/ui/alert';

interface Props {
  vendors: any[];
}

const VendorFilterView = ({ vendors }: Props) => {
  const router = useRouter();
  
  // Get selected values from URL parameters
  const selectedVendor = useMemo(
    () => router.query.vendor as string || '',
    [router.query.vendor]
  );

  function handleVendorSelect(vendorSlug: string) {
    const newQuery = { ...router.query };
    if (vendorSlug === 'all') {
      delete newQuery.vendor;
    } else {
      newQuery.vendor = vendorSlug;
    }
    
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  }

  return (
    <div className="relative">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">Vendors</span>
        
        {/* Vendors List */}
        <div className="space-y-1">
          {/* All Vendors Option */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => handleVendorSelect('all')}
              className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                !selectedVendor
                  ? 'bg-orange-100 text-orange-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏪</span>
                <span>All Vendors</span>
              </div>
            </button>
          </div>

          {vendors.map((vendor) => (
            <div key={vendor.id} className="border-b border-gray-100 pb-2 last:border-b-0">
              <button
                onClick={() => handleVendorSelect(vendor.slug)}
                className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                  selectedVendor === vendor.slug
                    ? 'bg-orange-100 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🏪</span>
                    <span>{vendor.name}</span>
                  </div>
                  {vendor.products_count > 0 && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {vendor.products_count}
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

const VendorFilter: React.FC<{ type?: any }> = ({ type }) => {
  const { query } = useRouter();

  // Get vendors from products data
  const { products, isLoading, error } = useProducts({
    ...(type ? { type } : { type: query.searchType }),
    limit: 1000,
  });

  // Extract unique vendors from products
  const vendors = useMemo(() => {
    if (!products) return [];
    
    const vendorMap = new Map();
    products.forEach((product: any) => {
      if (product.shop) {
        const vendor = product.shop;
        if (!vendorMap.has(vendor.id)) {
          vendorMap.set(vendor.id, {
            id: vendor.id,
            name: vendor.name,
            slug: vendor.slug,
            rating: vendor.rating,
            total_reviews: vendor.total_reviews,
            products_count: 1
          });
        } else {
          vendorMap.get(vendor.id).products_count++;
        }
      }
    });
    
    return Array.from(vendorMap.values());
  }, [products]);

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return !isEmpty(vendors) ? (
    <VendorFilterView vendors={vendors} />
  ) : (
    <Alert message="No vendors found." />
  );
};

export default VendorFilter; 