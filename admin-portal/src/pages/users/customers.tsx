import React, { useState } from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Button from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Input from '../../components/ui/input';
import { Select } from '../../components/ui/select';

// Mock data for customers
const mockCustomers = [
  {
    id: 'C001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+64 21 123 4567',
    status: 'active',
    joinDate: '2023-06-15',
    totalOrders: 23,
    totalSpent: 1245.67,
    lastOrder: '2024-01-12',
    location: 'Auckland, NZ'
  },
  {
    id: 'C002',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+64 22 234 5678',
    status: 'active',
    joinDate: '2023-08-22',
    totalOrders: 18,
    totalSpent: 987.45,
    lastOrder: '2024-01-15',
    location: 'Wellington, NZ'
  },
  {
    id: 'C003',
    name: 'Mike Wilson',
    email: 'mike.w@email.com',
    phone: '+64 23 345 6789',
    status: 'inactive',
    joinDate: '2023-04-10',
    totalOrders: 8,
    totalSpent: 456.78,
    lastOrder: '2023-12-20',
    location: 'Christchurch, NZ'
  },
  {
    id: 'C004',
    name: 'Lisa Brown',
    email: 'lisa.b@email.com',
    phone: '+64 24 456 7890',
    status: 'active',
    joinDate: '2023-09-05',
    totalOrders: 31,
    totalSpent: 2156.89,
    lastOrder: '2024-01-14',
    location: 'Hamilton, NZ'
  },
  {
    id: 'C005',
    name: 'David Lee',
    email: 'david.l@email.com',
    phone: '+64 25 567 8901',
    status: 'active',
    joinDate: '2023-11-18',
    totalOrders: 12,
    totalSpent: 678.90,
    lastOrder: '2024-01-10',
    location: 'Tauranga, NZ'
  }
];

const CustomerManagementPage = () => {
  const [customers, setCustomers] = useState(mockCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    const matchesLocation = locationFilter === 'all' || customer.location === locationFilter;
    
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" className="flex items-center gap-1">✅ Active</Badge>;
      case 'inactive':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Inactive</Badge>;
      case 'suspended':
        return <Badge variant="warning" className="flex items-center gap-1">⚠️ Suspended</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const toggleCustomerStatus = (customerId: string) => {
    setCustomers(customers.map(customer => 
      customer.id === customerId 
        ? { ...customer, status: customer.status === 'active' ? 'inactive' : 'active' }
        : customer
    ));
  };

  return (
    <div className="space-y-6">
      <PageHeading 
        title="Customer Management" 
        subtitle="Manage customer accounts, view order history, and provide support"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-blue-600">{customers.length}</p>
            </div>
            <div className="w-8 h-8 text-blue-500 text-2xl">👥</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-green-600">{customers.filter(c => c.status === 'active').length}</p>
            </div>
            <div className="w-8 h-8 text-green-500 text-2xl">✅</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New This Month</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
            <div className="w-8 h-8 text-purple-500 text-2xl">🆕</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-orange-600">${(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.reduce((sum, c) => sum + c.totalOrders, 0)).toFixed(2)}</p>
            </div>
            <div className="w-8 h-8 text-orange-500 text-2xl">💰</div>
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
                placeholder="Search customers by name, email, or ID..."
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
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </Select>
          
          <Select
            value={locationFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocationFilter(e.target.value)}
            className="w-full md:w-48"
          >
            <option value="all">All Locations</option>
            <option value="Auckland, NZ">Auckland</option>
            <option value="Wellington, NZ">Wellington</option>
            <option value="Christchurch, NZ">Christchurch</option>
            <option value="Hamilton, NZ">Hamilton</option>
            <option value="Tauranga, NZ">Tauranga</option>
          </Select>
        </div>
      </Card>

      {/* Customers Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Customer</th>
                <th className="text-left py-3 px-4 font-semibold">Contact</th>
                <th className="text-left py-3 px-4 font-semibold">Location</th>
                <th className="text-left py-3 px-4 font-semibold">Orders</th>
                <th className="text-left py-3 px-4 font-semibold">Total Spent</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{customer.name}</p>
                      <p className="text-sm text-gray-500">ID: {customer.id}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{customer.email}</p>
                      <p className="text-sm text-gray-500">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{customer.location}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{customer.totalOrders}</p>
                      <p className="text-sm text-gray-500">Last: {customer.lastOrder}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">${customer.totalSpent.toFixed(2)}</p>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(customer.status)}
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{customer.joinDate}</p>
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
                      
                      <Button
                        size="small"
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        📧 Email
                      </Button>
                      
                      <Button
                        size="small"
                        variant="outline"
                        onClick={() => toggleCustomerStatus(customer.id)}
                        className={`flex items-center gap-1 ${
                          customer.status === 'active' 
                            ? 'text-red-600 border-red-600 hover:bg-red-50' 
                            : 'text-green-600 border-green-600 hover:bg-green-50'
                        }`}
                      >
                        {customer.status === 'active' ? '❌ Deactivate' : '✅ Activate'}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCustomers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No customers found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📊</span>
            <span>Customer Analytics</span>
          </Button>
          <Button variant="outline" size="medium" className="h-20 flex flex-col items-center justify-center gap-2">
            <span className="text-2xl">📧</span>
            <span>Bulk Email</span>
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

const CustomerManagement: NextPage = () => {
  return (
    <AdminLayout>
      <CustomerManagementPage />
    </AdminLayout>
  );
};

export default CustomerManagement; 