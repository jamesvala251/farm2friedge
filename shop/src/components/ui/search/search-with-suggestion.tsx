import SearchBox from '@/components/ui/search/search-box';
import { useEffect, useState } from 'react';
import AutoSuggestionBox from '@/components/search-view/suggestion';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import useHomepage from '@/lib/hooks/use-homepage';

interface Props {
  label: string;
  className?: string;
  inputClassName?: string;
  variant?: 'minimal' | 'normal' | 'with-shadow';
  seeMore?: boolean;
  [key: string]: unknown;
}

const SearchWithSuggestion: React.FC<Props> = ({
  label,
  className,
  inputClassName,
  seeMore = false,
  variant,
  ...props
}) => {
  const router = useRouter();
  const [searchTerm, updateSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { homePage }: any = useHomepage();

  const handleOnChange = (e: any) => {
    const { value: inputValue } = e.target;
    updateSearchTerm(inputValue);
    
    // Show suggestions after 1 character (instead of 2)
    setShowSuggestions(inputValue.length > 0);
  };

  const onSearch = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    
    // Hide suggestions when searching
    setShowSuggestions(false);
  };

  function clearSearch() {
    updateSearchTerm('');
    setShowSuggestions(false);
  }

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  let redirectSearchPath = '';
  if (router.asPath === '/') {
    redirectSearchPath = homePage?.slug;
  } else {
    redirectSearchPath = router.asPath;
  }

  const onSearchMore = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    const { asPath, query } = router;
    const { pages, ...restQuery } = query;
    router.push(
      {
        pathname: redirectSearchPath + Routes.search,
        query: { ...restQuery, text: searchTerm },
      },
      undefined,
      {
        scroll: false,
      },
    );
  };

  return (
    <div className={cn('relative w-full', className)}>
      <SearchBox
        label={label}
        onSubmit={onSearch}
        onClearSearch={clearSearch}
        onChange={handleOnChange}
        value={searchTerm}
        inputClassName={inputClassName}
        name="search"
        placeholder="Search for products..."
        variant={variant}
        {...props}
      />

      <AutoSuggestionBox
        searchQuery={searchTerm}
        visible={showSuggestions && searchTerm.length > 0}
        seeMoreLink={onSearchMore}
        seeMore={seeMore}
      />
    </div>
  );
};

export default SearchWithSuggestion;
