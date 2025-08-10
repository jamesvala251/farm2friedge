import React from 'react';
import { Bell } from '@/components/icons/bell';
import { CloseIcon } from '@/components/icons/close-icon';
import { useUI } from '@/contexts/ui.context';

interface IProps {
  user: any;
}

const MessageBar = ({ user }: IProps) => {
  const { closeSidebar } = useUI();

  return (
    <div className="flex items-center justify-between bg-blue-50 px-4 py-3 text-sm">
      <div className="flex items-center space-x-3">
        <Bell className="h-5 w-5 text-blue-600" />
        <span className="text-blue-900">
          You have <strong>3 new messages</strong> from customers
        </span>
      </div>
      <button
        onClick={closeSidebar}
        className="text-blue-400 hover:text-blue-600"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MessageBar;
