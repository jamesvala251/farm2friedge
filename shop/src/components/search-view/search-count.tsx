import React from 'react';

interface Props {
  from: number;
  to: number;
  total: number;
  className?: string;
}

const SearchCount: React.FC<Props> = ({ from, to, total, className }) => {
  return (
    <div className={className}>
      Showing {from} to {to} of {total} results
    </div>
  );
};

export default SearchCount;
