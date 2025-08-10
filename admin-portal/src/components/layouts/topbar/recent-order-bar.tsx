import React from 'react';
import { OrdersIcon } from '@/components/icons/sidebar/orders';

interface IProps {
  user: any;
}

const RecentOrderBar = ({ user }: IProps) => {
  return (
    <div className="flex items-center justify-between bg-purple-50 px-4 py-3 text-sm">
      <div className="flex items-center space-x-3">
        <OrdersIcon className="h-5 w-5 text-purple-600" />
        <span className="text-purple-900">
          <strong>New Order:</strong> Order #ORD-2024-001 received from John Doe
        </span>
      </div>
      <button className="text-purple-600 hover:text-purple-800 font-medium">
        View Order →
      </button>
    </div>
  );
};

export default RecentOrderBar;
