import React, { useState } from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Button from '../../components/ui/button';
import { Select } from '../../components/ui/select';

// Mock data for analytics
const mockAnalytics = {
  revenue: {
    current: 45678.90,
    previous: 42345.67,
    growth: 7.87
  },
  orders: {
    current: 234,
    previous: 198,
    growth: 18.18
  },
  customers: {
    current: 1247,
    previous: 1189,
    growth: 4.88
  },
  products: {
    current: 567,
    previous: 543,
    growth: 4.42
  }
};

const mockTopProducts = [
  { name: 'Organic Basmati Rice 5kg', sales: 89, revenue: 2136.00 },
  { name: 'Fresh Mango Pickle 500g', sales: 76, revenue: 684.00 },
  { name: 'Premium Black Pepper 200g', sales: 65, revenue: 844.50 },
  { name: 'Traditional Ghee 1kg', sales: 58, revenue: 1102.00 },
  { name: 'Mixed Dry Fruits 500g', sales: 52, revenue: 831.68 }
];

const mockTopVendors = [
  { name: 'Spice Paradise', orders: 156, revenue: 12450.00, rating: 4.8 },
  { name: 'Taste of India', orders: 134, revenue: 10890.00, rating: 4.7 },
  { name: 'Pure Foods NZ', orders: 98, revenue: 8765.00, rating: 4.9 },
  { name: 'Nutty Delights', orders: 87, revenue: 6540.00, rating: 4.6 },
  { name: 'Spice World', orders: 76, revenue: 5430.00, rating: 4.5 }
];

const mockRecentActivity = [
  { action: 'New order placed', details: 'ORD001 - John Smith', time: '2 minutes ago', type: 'order' },
  { action: 'Product approved', details: 'Organic Rice by Spice Paradise', time: '15 minutes ago', type: 'product' },
  { action: 'New vendor registered', details: 'Fresh Foods Ltd', time: '1 hour ago', type: 'vendor' },
  { action: 'Payment received', details: 'ORD002 - $156.50', time: '2 hours ago', type: 'payment' },
  { action: 'Customer review', details: '5-star rating for Mango Pickle', time: '3 hours ago', type: 'review' }
];

const PlatformAnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? '↗️' : '↘️';
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order': return '📦';
      case 'product': return '✅';
      case 'vendor': return '🏪';
      case 'payment': return '💳';
      case 'review': return '⭐';
      default: return '📝';
    }
  };

  return (
    <div className="space-y-6">
      <PageHeading 
        title="Platform Analytics" 
        subtitle="Monitor key performance indicators and business metrics"
      />

      {/* Time Range Selector */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <Select
            value={timeRange}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimeRange(e.target.value)}
            className="w-48"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </Select>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${mockAnalytics.revenue.current.toLocaleString()}</p>
              <div className={`flex items-center gap-1 text-sm ${getGrowthColor(mockAnalytics.revenue.growth)}`}>
                <span>{getGrowthIcon(mockAnalytics.revenue.growth)}</span>
                <span>{mockAnalytics.revenue.growth}%</span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{mockAnalytics.orders.current}</p>
              <div className={`flex items-center gap-1 text-sm ${getGrowthColor(mockAnalytics.orders.growth)}`}>
                <span>{getGrowthIcon(mockAnalytics.orders.growth)}</span>
                <span>{mockAnalytics.orders.growth}%</span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">{mockAnalytics.customers.current}</p>
              <div className={`flex items-center gap-1 text-sm ${getGrowthColor(mockAnalytics.customers.growth)}`}>
                <span>{getGrowthIcon(mockAnalytics.customers.growth)}</span>
                <span>{mockAnalytics.customers.growth}%</span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">{mockAnalytics.products.current}</p>
              <div className={`flex items-center gap-1 text-sm ${getGrowthColor(mockAnalytics.products.growth)}`}>
                <span>{getGrowthIcon(mockAnalytics.products.growth)}</span>
                <span>{mockAnalytics.products.growth}%</span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏷️</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {mockTopProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${product.revenue.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Vendors */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Vendors</h3>
          <div className="space-y-3">
            {mockTopVendors.map((vendor, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vendor.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500">{vendor.orders} orders</p>
                      <span className="text-yellow-500">⭐ {vendor.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${vendor.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {mockRecentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg">{getActivityIcon(activity.type)}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.details}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" size="medium">
            View All Activity
          </Button>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📊</span>
            <span>Generate Report</span>
          </Button>
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📧</span>
            <span>Export Data</span>
          </Button>
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">⚙️</span>
            <span>Analytics Settings</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

const PlatformAnalytics: NextPage = () => {
  return (
    <AdminLayout>
      <PlatformAnalyticsPage />
    </AdminLayout>
  );
};

export default PlatformAnalytics; 