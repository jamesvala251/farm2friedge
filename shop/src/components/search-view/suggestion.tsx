import dynamic from 'next/dynamic';
import ErrorMessage from '@/components/ui/error-message';
import { useProducts } from '@/framework/product';
import { useRouter } from "next/router";
import { useMemo } from 'react';

const AutoSuggestion = dynamic(() => import('@/components/ui/auto-suggestion'));

interface AutoSuggestionProps {
  className?: string;
  searchQuery: string;
  visible: boolean;
  seeMore: boolean;
  seeMoreLink: (e: any) => void;
}

const AutoSuggestionBox: React.FC<AutoSuggestionProps> = ({
  searchQuery,
  className,
  visible,
  seeMoreLink,
  seeMore,
}) => {
  const { query } = useRouter();
  
  // Get all products for search
  const { isLoading, products, error } = useProducts({
    type: query?.pages?.[0] as string,
    limit: 1000, // Get more products for better search
  });

  // Enhanced search logic
  const filteredSuggestions = useMemo(() => {
    if (!products || !searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const searchTerms = query.split(' ').filter(term => term.length > 0);
    
    return products
      .filter((product: any) => {
        const productName = product.name?.toLowerCase() || '';
        const productDescription = product.description?.toLowerCase() || '';
        const productTags = (product.tags || []).join(' ').toLowerCase();
        const productCategory = product.category?.name?.toLowerCase() || '';
        const productVendor = product.vendor?.name?.toLowerCase() || '';
        const productBrand = product.brand?.name?.toLowerCase() || '';
        
        const searchableText = `${productName} ${productDescription} ${productTags} ${productCategory} ${productVendor} ${productBrand}`;
        
        // Check if all search terms are found in the searchable text
        return searchTerms.every(term => searchableText.includes(term));
      })
      .sort((a: any, b: any) => {
        // Sort by relevance (exact matches first, then partial matches)
        const aName = a.name?.toLowerCase() || '';
        const bName = b.name?.toLowerCase() || '';
        
        const aExactMatch = aName.startsWith(query);
        const bExactMatch = bName.startsWith(query);
        
        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;
        
        // If both are exact matches or both are partial matches, sort by name
        return aName.localeCompare(bName);
      })
      .slice(0, 8); // Limit to 8 suggestions for better UX
  }, [products, searchQuery]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <AutoSuggestion
      suggestions={filteredSuggestions}
      notFound={!isLoading && filteredSuggestions.length === 0 && searchQuery.trim().length > 0}
      visible={visible}
      seeMoreLink={seeMoreLink}
      seeMore={seeMore}
      className={className}
      showLoaders={isLoading && searchQuery.trim().length > 0}
    />
  );
};

export default AutoSuggestionBox;
