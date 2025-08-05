import CheckboxGroup from './checkbox-group';
import { useState, useEffect, useMemo } from 'react';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useTranslation } from 'next-i18next';
import { useCategories } from '@/framework/category';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import Alert from '@/components/ui/alert';

interface Props {
  categories: any[];
}

const CategoryFilterView = ({ categories }: Props) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.category ? (router.query.category as string).split(',') : [],
    [router.query.category]
  );
  const selectedSubValues = useMemo(
    () =>
      router.query.subcategory ? (router.query.subcategory as string).split(',') : [],
    [router.query.subcategory]
  );
  const [state, setState] = useState<string[]>(() => selectedValues);
  const [subState, setSubState] = useState<string[]>(() => selectedSubValues);
  
  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);
  
  useEffect(() => {
    setSubState(selectedSubValues);
  }, [selectedSubValues]);

  function handleChange(values: string[]) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: values.join(','),
      },
    });
  }

  function handleSubChange(values: string[]) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        subcategory: values.join(','),
      },
    });
  }

  return (
    <div className="relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">{t('text-categories')}</span>
        <div className="grid grid-cols-1 gap-4">
          <CheckboxGroup values={state} onChange={handleChange}>
            {categories.map((category) => (
              <div key={category.id} className="space-y-2">
                {/* Main Category */}
                <Checkbox
                  key={category.id}
                  label={category.name}
                  name={category.slug}
                  value={category.slug}
                  theme="secondary"
                />
                
                {/* Sub-categories */}
                {category.children && category.children.length > 0 && (
                  <div className="ml-6 space-y-1">
                    {category.children.map((subCategory: any) => (
                      <Checkbox
                        key={subCategory.id}
                        label={subCategory.name}
                        name={subCategory.slug}
                        value={subCategory.slug}
                        theme="secondary"
                        className="text-sm"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CheckboxGroup>
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
