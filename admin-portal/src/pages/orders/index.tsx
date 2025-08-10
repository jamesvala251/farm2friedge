import React, { useState } from 'react';
import { NextPage } from 'next';
import AdminLayout from '../../components/layouts/admin';
import PageHeading from '../../components/ui/page-heading';
import { Card } from '../../components/ui/card';
import Button from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Input from '../../components/ui/input';
import { Select } from '../../components/ui/select';

// Mock data for orders
const mockOrders = [
  {
    id: 'ORD001',
    customerName: 'John Smith',
    customerEmail: 'john.smith@email.com',
    orderDate: '2024-01-15',
    totalAmount: 89.99,
    status: 'processing',
    paymentStatus: 'paid',
    deliveryAddress: '123 Main St, Auckland, NZ',
    items: 5,
    vendor: 'Spice Paradise'
  },
  {
    id: 'ORD002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    orderDate: '2024-01-15',
    totalAmount: 156.50,
    status: 'shipped',
    paymentStatus: 'paid',
    deliveryAddress: '456 Queen St, Wellington, NZ',
    items: 8,
    vendor: 'Taste of India'
  },
  {
    id: 'ORD003',
    customerName: 'Mike Wilson',
    customerEmail: 'mike.w@email.com',
    orderDate: '2024-01-14',
    totalAmount: 67.25,
    status: 'delivered',
    paymentStatus: 'paid',
    deliveryAddress: '789 High St, Christchurch, NZ',
    items: 3,
    vendor: 'Pure Foods NZ'
  },
  {
    id: 'ORD004',
    customerName: 'Lisa Brown',
    customerEmail: 'lisa.b@email.com',
    orderDate: '2024-01-14',
    totalAmount: 234.75,
    status: 'cancelled',
    paymentStatus: 'refunded',
    deliveryAddress: '321 Park Ave, Hamilton, NZ',
    items: 12,
    vendor: 'Nutty Delights'
  },
  {
    id: 'ORD005',
    customerName: 'David Lee',
    customerEmail: 'david.l@email.com',
    orderDate: '2024-01-13',
    totalAmount: 45.99,
    status: 'pending',
    paymentStatus: 'pending',
    deliveryAddress: '654 Lake Rd, Tauranga, NZ',
    items: 2,
    vendor: 'Spice World'
  }
];

const OrderManagementPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' || order.paymentStatus === paymentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning" className="flex items-center gap-1">⏳ Pending</Badge>;
      case 'processing':
        return <Badge variant="warning" className="flex items-center gap-1">⚙️ Processing</Badge>;
      case 'shipped':
        return <Badge variant="success" className="flex items-center gap-1">🚚 Shipped</Badge>;
      case 'delivered':
        return <Badge variant="success" className="flex items-center gap-1">✅ Delivered</Badge>;
      case 'cancelled':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Cancelled</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge variant="success" className="flex items-center gap-1">💳 Paid</Badge>;
      case 'pending':
        return <Badge variant="warning" className="flex items-center gap-1">⏳ Pending</Badge>;
      case 'failed':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Failed</Badge>;
      case 'refunded':
        return <Badge variant="default" className="flex items-center gap-1">↩️ Refunded</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus }
        : order
    ));
  };

  return (
    <div className="space-y-6">
      <PageHeading 
        title="Order Management" 
        subtitle="Manage customer orders, track delivery status, and handle order issues"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-blue-600">{orders.length}</p>
            </div>
            <div className="w-8 h-8 text-blue-500 text-2xl">📦</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Orders</p>
              <p className="text-2xl font-bold text-green-600">{orders.filter(o => o.orderDate === '2024-01-15').length}</p>
            </div>
            <div className="w-8 h-8 text-green-500 text-2xl">📅</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Processing</p>
              <p className="text-2xl font-bold text-yellow-600">{orders.filter(o => o.status === 'processing').length}</p>
            </div>
            <div className="w-8 h-8 text-yellow-500 text-2xl">⚙️</div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-purple-600">${orders.reduce((sum, o) => sum + o.totalAmount, 0).toFixed(2)}</p>
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
                placeholder="Search orders, customers, or order ID..."
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
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </Select>
          
          <Select
            value={paymentFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPaymentFilter(e.target.value)}
            className="w-full md:w-48"
          >
            <option value="all">All Payments</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </Select>
        </div>
      </Card>

      {/* Orders Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Order</th>
                <th className="text-left py-3 px-4 font-semibold">Customer</th>
                <th className="text-left py-3 px-4 font-semibold">Vendor</th>
                <th className="text-left py-3 px-4 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Payment</th>
                <th className="text-left py-3 px-4 font-semibold">Date</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.items} items</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.customerName}</p>
                      <p className="text-sm text-gray-500">{order.customerEmail}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{order.vendor}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">${order.totalAmount}</p>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="py-4 px-4">
                    {getPaymentBadge(order.paymentStatus)}
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{order.orderDate}</p>
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
                      
                      {order.status === 'pending' && (
                        <Button
                          size="small"
                          variant="normal"
                          onClick={() => updateOrderStatus(order.id, 'processing')}
                          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700"
                        >
                          ⚙️ Process
                        </Button>
                      )}
                      
                      {order.status === 'processing' && (
                        <Button
                          size="small"
                          variant="normal"
                          onClick={() => updateOrderStatus(order.id, 'shipped')}
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                        >
                          🚚 Ship
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
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No orders found matching your criteria.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

const OrderManagement: NextPage = () => {
  return (
    <AdminLayout>
      <OrderManagementPage />
    </AdminLayout>
  );
};

export default OrderManagement; 