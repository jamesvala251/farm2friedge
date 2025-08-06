import { useState } from 'react';
import SearchBox from './search-box';
import { useRouter } from 'next/router';

interface SearchProps {
  label?: string;
  variant?: 'minimal' | 'normal' | 'with-shadow' | 'flat';
  className?: string;
  inputClassName?: string;
}

const Search: React.FC<SearchProps> = ({
  label = 'Search for products...',
  variant = 'minimal',
  className,
  inputClassName,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/grocery/search?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <SearchBox
      label={label}
      variant={variant}
      className={className}
      inputClassName={inputClassName}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onSubmit={handleSubmit}
      onClearSearch={handleClearSearch}
    />
  );
};

export default Search;
