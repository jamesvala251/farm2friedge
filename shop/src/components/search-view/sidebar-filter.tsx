import { CustomDisclosure } from '@/components/ui/disclosure';
import Search from '@/components/ui/search/search';
import { useRouter } from 'next/router';
import Sorting from './sorting';
import PriceFilter from '@/components/search-view/price-filter';
import CategoryFilter from '@/components/search-view/category-filter-view';
import TagFilter from '@/components/search-view/tag-filter-view';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import ArrowNarrowLeft from '@/components/icons/arrow-narrow-left';
import { useIsRTL } from '@/lib/locals';
import Button from '@/components/ui/button';

const FieldWrapper = ({ children, title }: any) => (
  <div className="border-b border-gray-200 py-7 last:border-0">
    <CustomDisclosure title={title}>{children}</CustomDisclosure>
  </div>
);

function ClearFiltersButton() {
  const router = useRouter();

  function clearFilters() {
    const {
      price,
      category,
      sortedBy,
      orderBy,
      tags,
      text,
      ...rest
    } = router.query;
    router.push({
      pathname: router.pathname,
      query: {
        ...rest,
      },
    });
  }
  return (
    <button
      className="text-sm font-semibold text-body transition-colors hover:text-red-500 focus:text-red-500 focus:outline-0 lg:m-0"
      onClick={clearFilters}
    >
      Clear All
    </button>
  );
}
const SidebarFilter: React.FC<{
  type?: string;
  className?: string;
}> = ({ type, className }) => {
  const router = useRouter();
  const { isRTL } = useIsRTL();
  const [_, closeSidebar] = useAtom(drawerAtom);

  return (
    <div
      className={classNames(
        'flex h-full w-full flex-col rounded-xl border-gray-200 bg-white lg:h-auto lg:border',
        className
      )}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between rounded-tl-xl rounded-tr-xl border-b border-gray-200 bg-white px-5 py-6 lg:static">
        <div className="flex items-center space-x-3 rtl:space-x-reverse lg:space-x-0">
          <button
            className="text-body focus:outline-0 lg:hidden"
            onClick={() => closeSidebar({ display: false, view: '' })}
          >
            <ArrowNarrowLeft
              className={classNames('h-7', {
                'rotate-180': isRTL,
              })}
              strokeWidth={1.7}
            />
            <span className="sr-only">Close</span>
          </button>

          <h3 className="text-xl font-semibold text-heading lg:text-2xl">
            Filters
          </h3>
        </div>

        <ClearFiltersButton />
      </div>

      <div className="flex-1 px-5">
        <FieldWrapper title="Search">
          <Search variant="minimal" label="search" />
        </FieldWrapper>

        {router.route !== '/[searchType]/search' && (
          <FieldWrapper title="Sort">
            <Sorting />
          </FieldWrapper>
        )}

        <FieldWrapper title="Categories">
          <CategoryFilter />
        </FieldWrapper>

        <FieldWrapper title="Price Range">
          <PriceFilter />
        </FieldWrapper>

        <FieldWrapper title="Tags">
          <TagFilter />
        </FieldWrapper>
      </div>
    </div>
  );
};

export default SidebarFilter;
