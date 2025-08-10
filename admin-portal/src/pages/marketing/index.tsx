import React, { useState } from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Button from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Input from '../../components/ui/input';
import { Select } from '../../components/ui/select';
import Head from 'next/head';

// Mock data for marketing campaigns
const mockCampaigns = [
  {
    id: 'C001',
    name: 'Diwali Special Sale',
    type: 'Flash Deal',
    status: 'active',
    startDate: '2024-01-20',
    endDate: '2024-01-25',
    discount: '20%',
    targetAudience: 'All Customers',
    budget: 5000,
    spent: 3200,
    conversions: 156
  },
  {
    id: 'C002',
    name: 'New Customer Welcome',
    type: 'Coupon',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    discount: '$10 off',
    targetAudience: 'New Customers',
    budget: 2000,
    spent: 850,
    conversions: 89
  },
  {
    id: 'C003',
    name: 'Loyalty Points Boost',
    type: 'Loyalty Program',
    status: 'scheduled',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    discount: '3x Points',
    targetAudience: 'Loyal Customers',
    budget: 1500,
    spent: 0,
    conversions: 0
  }
];

const mockCoupons = [
  {
    id: 'CP001',
    code: 'WELCOME20',
    type: 'Percentage',
    value: '20%',
    minOrder: 50,
    maxDiscount: 25,
    usageLimit: 1000,
    usedCount: 456,
    status: 'active'
  },
  {
    id: 'CP002',
    code: 'SAVE10',
    type: 'Fixed',
    value: '$10',
    minOrder: 30,
    maxDiscount: 10,
    usageLimit: 500,
    usedCount: 234,
    status: 'active'
  }
];

const MarketingPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [coupons, setCoupons] = useState(mockCoupons);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" className="flex items-center gap-1">🟢 Active</Badge>;
      case 'scheduled':
        return <Badge variant="warning" className="flex items-center gap-1">⏰ Scheduled</Badge>;
      case 'paused':
        return <Badge variant="danger" className="flex items-center gap-1">⏸️ Paused</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Flash Deal':
        return <Badge variant="warning" className="bg-orange-100 text-orange-800">⚡ Flash Deal</Badge>;
      case 'Coupon':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">🎫 Coupon</Badge>;
      case 'Loyalty Program':
        return <Badge variant="success" className="bg-green-100 text-green-800">⭐ Loyalty</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <>
      <Head>
        <title>Marketing & Promotions - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Marketing & Promotions" 
            subtitle="Manage platform-wide campaigns, coupons, and loyalty programs"
          />

          {/* Marketing Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Campaigns</p>
                  <p className="text-2xl font-bold text-blue-600">{campaigns.filter(c => c.status === 'active').length}</p>
                </div>
                <div className="w-8 h-8 text-blue-500 text-2xl">📢</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-green-600">${campaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}</p>
                </div>
                <div className="w-8 h-8 text-green-500 text-2xl">💰</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Conversions</p>
                  <p className="text-2xl font-bold text-purple-600">{campaigns.reduce((sum, c) => sum + c.conversions, 0)}</p>
                </div>
                <div className="w-8 h-8 text-purple-500 text-2xl">📈</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ROI</p>
                  <p className="text-2xl font-bold text-orange-600">3.2x</p>
                </div>
                <div className="w-8 h-8 text-orange-500 text-2xl">📊</div>
              </div>
            </Card>
          </div>

          {/* Tab Navigation */}
          <Card className="p-4">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'campaigns'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                📢 Campaigns
              </button>
              <button
                onClick={() => setActiveTab('coupons')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'coupons'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🎫 Coupons
              </button>
              <button
                onClick={() => setActiveTab('loyalty')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'loyalty'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ⭐ Loyalty Program
              </button>
            </div>
          </Card>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Marketing Campaigns</h3>
                <Button variant="normal" className="flex items-center gap-2">
                  ➕ Create Campaign
                </Button>
              </div>
              
              <Card className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">Campaign</th>
                        <th className="text-left py-3 px-4 font-semibold">Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Duration</th>
                        <th className="text-left py-3 px-4 font-semibold">Budget</th>
                        <th className="text-left py-3 px-4 font-semibold">Performance</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign) => (
                        <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{campaign.name}</p>
                              <p className="text-sm text-gray-500">ID: {campaign.id}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            {getTypeBadge(campaign.type)}
                          </td>
                          <td className="py-4 px-4">
                            {getStatusBadge(campaign.status)}
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <p className="text-gray-900">{campaign.startDate}</p>
                              <p className="text-gray-500">to {campaign.endDate}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">${campaign.budget.toLocaleString()}</p>
                              <p className="text-gray-500">Spent: ${campaign.spent.toLocaleString()}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{campaign.conversions} conversions</p>
                              <p className="text-gray-500">ROI: {((campaign.conversions * 50) / campaign.spent).toFixed(1)}x</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <Button size="small" variant="outline">
                                👁️ View
                              </Button>
                              <Button size="small" variant="outline">
                                ✏️ Edit
                              </Button>
                              <Button size="small" variant="outline">
                                ⏸️ Pause
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Coupons Tab */}
          {activeTab === 'coupons' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Coupon Management</h3>
                <Button variant="normal" className="flex items-center gap-2">
                  ➕ Create Coupon
                </Button>
              </div>
              
              <Card className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">Coupon Code</th>
                        <th className="text-left py-3 px-4 font-semibold">Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Value</th>
                        <th className="text-left py-3 px-4 font-semibold">Usage</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coupons.map((coupon) => (
                        <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-mono font-medium text-gray-900">{coupon.code}</p>
                              <p className="text-sm text-gray-500">ID: {coupon.id}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant="outline">{coupon.type}</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{coupon.value}</p>
                              <p className="text-gray-500">Min: ${coupon.minOrder}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{coupon.usedCount}/{coupon.usageLimit}</p>
                              <p className="text-gray-500">{((coupon.usedCount / coupon.usageLimit) * 100).toFixed(1)}% used</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            {getStatusBadge(coupon.status)}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <Button size="small" variant="outline">
                                👁️ View
                              </Button>
                              <Button size="small" variant="outline">
                                ✏️ Edit
                              </Button>
                              <Button size="small" variant="outline">
                                📊 Analytics
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Loyalty Program Tab */}
          {activeTab === 'loyalty' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Loyalty Program Management</h3>
                <Button variant="normal" className="flex items-center gap-2">
                  ⚙️ Configure
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Current Settings</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Points per Dollar:</span>
                      <span className="font-medium">2 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Redemption Rate:</span>
                      <span className="font-medium">100 points = $1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Redemption:</span>
                      <span className="font-medium">500 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Points Expiry:</span>
                      <span className="font-medium">12 months</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Program Statistics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Members:</span>
                      <span className="font-medium">12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Members:</span>
                      <span className="font-medium">8,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Points Issued:</span>
                      <span className="font-medium">2.4M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Points Redeemed:</span>
                      <span className="font-medium">1.8M</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Recent Loyalty Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">⭐</span>
                      </div>
                      <div>
                        <p className="font-medium">John D. earned 120 points</p>
                        <p className="text-sm text-gray-500">Order #12345 - $60.00</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">💎</span>
                      </div>
                      <div>
                        <p className="font-medium">Sarah M. redeemed 500 points</p>
                        <p className="text-sm text-gray-500">$5.00 discount applied</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">4 hours ago</span>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default MarketingPage; 