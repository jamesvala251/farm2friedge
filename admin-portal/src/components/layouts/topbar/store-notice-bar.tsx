import React from 'react';
import { InfoIcon } from '@/components/icons/info-icon';

interface IProps {
  user: any;
}

const StoreNoticeBar = ({ user }: IProps) => {
  return (
    <div className="flex items-center justify-between bg-yellow-50 px-4 py-3 text-sm">
      <div className="flex items-center space-x-3">
        <InfoIcon className="h-5 w-5 text-yellow-600" />
        <span className="text-yellow-900">
          <strong>Store Notice:</strong> New delivery policy effective from next week
        </span>
      </div>
      <button className="text-yellow-600 hover:text-yellow-800 font-medium">
        Read More →
      </button>
    </div>
  );
};

export default StoreNoticeBar;
