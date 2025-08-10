import React from 'react';
import { SearchIcon } from '@/components/icons/search-icon';
import Input from '@/components/ui/input';

const SearchBar = () => {
  return (
    <div className="bg-white px-4 py-3 border-b border-gray-200">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">
          <SearchIcon />
        </div>
        <Input
          name="search"
          placeholder="Search products, orders, customers..."
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default SearchBar;
