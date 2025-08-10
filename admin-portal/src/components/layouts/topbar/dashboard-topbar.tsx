import React from 'react';
import MessageBar from '@/components/layouts/topbar/message-bar';
import StoreNoticeBar from '@/components/layouts/topbar/store-notice-bar';
import RecentOrderBar from '@/components/layouts/topbar/recent-order-bar';

// Mock data for demo purposes
const mockUser = {
  id: 1,
  name: 'Admin User',
  email: 'admin@egrocerymart.com',
  role: 'SUPER_ADMIN'
};

const mockSettings = {
  options: {
    pushNotification: {
      all: {
        message: false,        // Hidden
        storeNotice: false,    // Hidden
        order: false           // Hidden
      }
    }
  }
};

type IProps = {};

const DashboardTopBar = ({}: IProps) => {
  const data = mockUser; // Mock user data
  const options = mockSettings.options; // Mock settings

  return (
    <>
      {/* Completely hidden - no topbar content */}
      <div className="hidden">
        {/* All components are hidden */}
        {options?.pushNotification?.all?.message ? (
          <MessageBar user={data} />
        ) : (
          ''
        )}

        {options?.pushNotification?.all?.storeNotice ? (
          <StoreNoticeBar user={data} />
        ) : (
          ''
        )}

        {options?.pushNotification?.all?.order ? (
          <RecentOrderBar user={data} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default DashboardTopBar;
