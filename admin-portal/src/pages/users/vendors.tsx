import React, { useState } from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Button from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Input from '../../components/ui/input';
import { Select } from '../../components/ui/select';

// Mock data for vendors
const mockVendors = [
  {
    id: 'V001',
    name: 'Spice Paradise',
    email: 'contact@spiceparadise.co.nz',
    phone: '+64 9 123 4567',
    status: 'active',
    joinDate: '2023-03-15',
    totalProducts: 45,
    totalOrders: 156,
    totalRevenue: 12450.00,
    rating: 4.8,
    location: 'Auckland, NZ',
    category: 'Spices & Seasonings',
    verificationStatus: 'verified'
  },
  {
    id: 'V002',
    name: 'Taste of India',
    email: 'info@tasteofindia.co.nz',
    phone: '+64 4 234 5678',
    status: 'active',
    joinDate: '2023-05-22',
    totalProducts: 38,
    totalOrders: 134,
    totalRevenue: 10890.00,
    rating: 4.7,
    location: 'Wellington, NZ',
    category: 'Pickles & Chutneys',
    verificationStatus: 'verified'
  },
  {
    id: 'V003',
    name: 'Pure Foods NZ',
    email: 'hello@purefoods.co.nz',
    phone: '+64 3 345 6789',
    status: 'pending',
    joinDate: '2024-01-10',
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0.00,
    rating: 0,
    location: 'Christchurch, NZ',
    category: 'Dairy & Ghee',
    verificationStatus: 'pending'
  },
  {
    id: 'V004',
    name: 'Nutty Delights',
    email: 'sales@nuttydelights.co.nz',
    phone: '+64 7 456 7890',
    status: 'active',
    joinDate: '2023-08-05',
    totalProducts: 28,
    totalOrders: 87,
    totalRevenue: 6540.00,
    rating: 4.6,
    location: 'Hamilton, NZ',
    category: 'Dry Fruits & Nuts',
    verificationStatus: 'verified'
  },
  {
    id: 'V005',
    name: 'Spice World',
    email: 'info@spiceworld.co.nz',
    phone: '+64 7 567 8901',
    status: 'suspended',
    joinDate: '2023-06-18',
    totalProducts: 22,
    totalOrders: 76,
    totalRevenue: 5430.00,
    rating: 4.5,
    location: 'Tauranga, NZ',
    category: 'Spices & Seasonings',
    verificationStatus: 'verified'
  }
];

const VendorManagementPage = () => {
  const [vendors, setVendors] = useState(mockVendors);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [verificationFilter, setVerificationFilter] = useState('all');

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || vendor.category === categoryFilter;
    const matchesVerification = verificationFilter === 'all' || vendor.verificationStatus === verificationFilter;
    
    return matchesSearch && matchesStatus && matchesCategory && matchesVerification;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" className="flex items-center gap-1">✅ Active</Badge>;
      case 'pending':
        return <Badge variant="warning" className="flex items-center gap-1">⏳ Pending</Badge>;
      case 'suspended':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Suspended</Badge>;
      case 'inactive':
        return <Badge variant="default" className="flex items-center gap-1">⚫ Inactive</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge variant="success" className="flex items-center gap-1">✅ Verified</Badge>;
      case 'pending':
        return <Badge variant="warning" className="flex items-center gap-1">⏳ Pending</Badge>;
      case 'rejected':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Rejected</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const updateVendorStatus = (vendorId: string, newStatus: string) => {
    setVendors(vendors.map(vendor => 
      vendor.id === vendorId 
        ? { ...vendor, status: newStatus }
        : vendor
    ));
  };

  const approveVendor = (vendorId: string) => {
    setVendors(vendors.map(vendor => 
      vendor.id === vendorId 
        ? { ...vendor, status: 'active', verificationStatus: 'verified' }
        : vendor
    ));
  };

  return (
    <div className="space-y-6">
      <PageHeading 
        title="Vendor Management" 
        subtitle="Manage vendor accounts, verify businesses, and monitor performance"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Vendors</p>
              <p className="text-2xl font-bold text-blue-600">{vendors.length}</p>
            </div>
            <div className="w-8 h-8 text-blue-500 text-2xl">🏪</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Vendors</p>
              <p className="text-2xl font-bold text-green-600">{vendors.filter(v => v.status === 'active').length}</p>
            </div>
            <div className="w-8 h-8 text-green-500 text-2xl">✅</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Approval</p>
              <p className="text-2xl font-bold text-yellow-600">{vendors.filter(v => v.status === 'pending').length}</p>
            </div>
            <div className="w-8 h-8 text-yellow-500 text-2xl">⏳</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-purple-600">${vendors.reduce((sum, v) => sum + v.totalRevenue, 0).toLocaleString()}</p>
            </div>
            <div className="w-8 h-8 text-purple-500 text-2xl">💰</div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">🔍</div>
              <Input
                name="search"
                placeholder="Search vendors by name, email, or ID..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select
            value={statusFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
            className="w-full md:w-48"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
            <option value="inactive">Inactive</option>
          </Select>
          
          <Select
            value={categoryFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryFilter(e.target.value)}
            className="w-full md:w-48"
          >
            <option value="all">All Categories</option>
            <option value="Spices & Seasonings">Spices & Seasonings</option>
            <option value="Pickles & Chutneys">Pickles & Chutneys</option>
            <option value="Dairy & Ghee">Dairy & Ghee</option>
            <option value="Dry Fruits & Nuts">Dry Fruits & Nuts</option>
          </Select>
          
          <Select
            value={verificationFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setVerificationFilter(e.target.value)}
            className="w-full md:w-48"
          >
            <option value="all">All Verification</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </Select>
        </div>
      </Card>

      {/* Vendors Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Vendor</th>
                <th className="text-left py-3 px-4 font-semibold">Contact</th>
                <th className="text-left py-3 px-4 font-semibold">Category</th>
                <th className="text-left py-3 px-4 font-semibold">Performance</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Verification</th>
                <th className="text-left py-3 px-4 font-semibold">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{vendor.name}</p>
                      <p className="text-sm text-gray-500">ID: {vendor.id}</p>
                      <p className="text-sm text-gray-500">{vendor.location}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{vendor.email}</p>
                      <p className="text-sm text-gray-500">{vendor.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline">{vendor.category}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{vendor.totalProducts} products</p>
                      <p className="text-sm text-gray-500">{vendor.totalOrders} orders</p>
                      <p className="text-sm text-gray-500">⭐ {vendor.rating}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(vendor.status)}
                  </td>
                  <td className="py-4 px-4">
                    {getVerificationBadge(vendor.verificationStatus)}
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{vendor.joinDate}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="small"
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        👁️ View
                      </Button>
                      
                      {vendor.status === 'pending' && (
                        <Button
                          size="small"
                          variant="normal"
                          onClick={() => approveVendor(vendor.id)}
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                        >
                          ✅ Approve
                        </Button>
                      )}
                      
                      {vendor.status === 'active' && (
                        <Button
                          size="small"
                          variant="outline"
                          onClick={() => updateVendorStatus(vendor.id, 'suspended')}
                          className="flex items-center gap-1 text-red-600 border-red-600 hover:bg-red-50"
                        >
                          ❌ Suspend
                        </Button>
                      )}
                      
                      {vendor.status === 'suspended' && (
                        <Button
                          size="small"
                          variant="normal"
                          onClick={() => updateVendorStatus(vendor.id, 'active')}
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                        >
                          ✅ Activate
                        </Button>
                      )}
                      
                      <Button
                        size="small"
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        📧 Contact
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredVendors.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No vendors found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📊</span>
            <span>Vendor Analytics</span>
          </Button>
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📧</span>
            <span>Bulk Communication</span>
          </Button>
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📥</span>
            <span>Export Data</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

const VendorManagement: NextPage = () => {
  return (
    <AdminLayout>
      <VendorManagementPage />
    </AdminLayout>
  );
};

export default VendorManagement; 