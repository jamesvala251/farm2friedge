import React from 'react';
import { ExternalLinkIcon } from '@/components/icons/external-link';

const VisitStore = () => {
  return (
    <div className="flex items-center justify-between bg-green-50 px-4 py-3 text-sm">
      <div className="flex items-center space-x-3">
        <ExternalLinkIcon className="h-5 w-5 text-green-600" />
        <span className="text-green-900">
          Visit your <strong>eGroceryMart Store</strong> to see customer view
        </span>
      </div>
      <a
        href="/store"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-800 font-medium"
      >
        Visit Store →
      </a>
    </div>
  );
};

export default VisitStore;
