import { useRouter } from 'next/router';
import { useCategories } from '@/framework/category';

const ActiveFilters = () => {
  const router = useRouter();
  const { categories } = useCategories({ limit: 1000 });

  // Get all active filters from URL
  const activeFilters: any[] = [];

  // Category filter
  if (router.query.category) {
    const category = categories?.find(cat => cat.slug === router.query.category);
    if (category) {
      activeFilters.push({
        type: 'category',
        label: category.name,
        value: router.query.category as string,
        icon: '📦'
      });
    }
  }

  // Subcategory filter
  if (router.query.subcategory) {
    const category = categories?.find(cat => cat.slug === router.query.category);
    const subcategory = (category as any)?.children?.find((sub: any) => sub.slug === router.query.subcategory);
    if (subcategory) {
      activeFilters.push({
        type: 'subcategory',
        label: subcategory.name,
        value: router.query.subcategory as string,
        parentCategory: router.query.category as string,
        icon: '•'
      });
    }
  }

  // Price filter
  if (router.query.price) {
    const priceRange = router.query.price as string;
    const [min, max] = priceRange.split('-');
    if (min && max) {
      activeFilters.push({
        type: 'price',
        label: `$${min} - $${max}`,
        value: priceRange,
        icon: '💰'
      });
    }
  }

  // Tags filter
  if (router.query.tags) {
    const tags = (router.query.tags as string).split(',');
    tags.forEach(tag => {
      activeFilters.push({
        type: 'tag',
        label: tag,
        value: tag,
        icon: '🏷️'
      });
    });
  }

  // Search filter
  if (router.query.search) {
    activeFilters.push({
      type: 'search',
      label: `"${router.query.search}"`,
      value: router.query.search as string,
      icon: '🔍'
    });
  }

  const removeFilter = (filter: any) => {
    const newQuery = { ...router.query };

    switch (filter.type) {
      case 'category':
        delete newQuery.category;
        delete newQuery.subcategory; // Also remove subcategory
        break;
      case 'subcategory':
        delete newQuery.subcategory;
        break;
      case 'price':
        delete newQuery.price;
        break;
      case 'tag':
        const currentTags = newQuery.tags ? (newQuery.tags as string).split(',') : [];
        const updatedTags = currentTags.filter(tag => tag !== filter.value);
        if (updatedTags.length > 0) {
          newQuery.tags = updatedTags.join(',');
        } else {
          delete newQuery.tags;
        }
        break;
      case 'search':
        delete newQuery.search;
        break;
    }

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const clearAllFilters = () => {
    const newQuery = { ...router.query };
    delete newQuery.category;
    delete newQuery.subcategory;
    delete newQuery.price;
    delete newQuery.tags;
    delete newQuery.search;

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {activeFilters.map((filter, index) => (
        <div
          key={`${filter.type}-${filter.value}-${index}`}
          className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm"
        >
          <span className="text-orange-600">{filter.icon}</span>
          <span className="text-orange-700 font-medium">{filter.label}</span>
          <button
            onClick={() => removeFilter(filter)}
            className="ml-1 text-orange-500 hover:text-orange-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
      
      {activeFilters.length > 0 && (
        <button
          onClick={clearAllFilters}
          className="text-sm text-orange-600 hover:text-orange-700 font-medium px-3 py-1.5 border border-orange-200 rounded-full bg-orange-50"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default ActiveFilters; 