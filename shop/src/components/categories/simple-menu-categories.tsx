import Link from '@/components/ui/link';
import type { Category } from '@/types';

interface SimpleMenuCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  title?: string;
}

const SimpleMenuCategories: React.FC<SimpleMenuCategoriesProps> = ({
  notFound,
  categories,
  loading,
  title,
}) => {
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
      <div className="flex flex-wrap gap-4 justify-center">
        {categories?.map((category: any) => (
          <Link
            key={category.id}
            href={`/grocery/search/?category=${category.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-orange-50 text-heading hover:text-orange-500 transition-colors duration-200 border border-gray-200 hover:border-orange-200"
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
            {category.products_count > 0 && (
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                {category.products_count}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimpleMenuCategories; 