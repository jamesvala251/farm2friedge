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

// Mock data for pending products
const mockPendingProducts = [
  {
    id: 'P001',
    name: 'Organic Basmati Rice 5kg',
    vendor: 'Spice Paradise',
    category: 'Grains & Rice',
    price: 24.99,
    status: 'pending',
    submittedDate: '2024-01-15',
    image: '/images/products/rice.jpg'
  },
  {
    id: 'P002',
    name: 'Fresh Mango Pickle 500g',
    vendor: 'Taste of India',
    category: 'Pickles & Chutneys',
    price: 8.99,
    status: 'pending',
    submittedDate: '2024-01-15',
    image: '/images/products/pickle.jpg'
  },
  {
    id: 'P003',
    name: 'Premium Black Pepper 200g',
    vendor: 'Spice World',
    category: 'Spices & Seasonings',
    price: 12.99,
    status: 'pending',
    submittedDate: '2024-01-14',
    image: '/images/products/pepper.jpg'
  },
  {
    id: 'P004',
    name: 'Traditional Ghee 1kg',
    vendor: 'Pure Foods NZ',
    category: 'Dairy & Ghee',
    price: 18.99,
    status: 'pending',
    submittedDate: '2024-01-14',
    image: '/images/products/ghee.jpg'
  },
  {
    id: 'P005',
    name: 'Mixed Dry Fruits 500g',
    vendor: 'Nutty Delights',
    category: 'Dry Fruits & Nuts',
    price: 15.99,
    status: 'pending',
    submittedDate: '2024-01-13',
    image: '/images/products/dry-fruits.jpg'
  }
];

const ProductApprovalPage: NextPage = () => {
  const [products, setProducts] = useState(mockPendingProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleApprove = (productId: string) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, status: 'approved' }
        : product
    ));
  };

  const handleReject = (productId: string) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, status: 'rejected' }
        : product
    ));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning" className="flex items-center gap-1">⏰ Pending</Badge>;
      case 'approved':
        return <Badge variant="success" className="flex items-center gap-1">✅ Approved</Badge>;
      case 'rejected':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Rejected</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <>
      <Head>
        <title>Product Approval - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Product Approval" 
            subtitle="Review and approve pending products from vendors"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-600">{products.filter(p => p.status === 'pending').length}</p>
                </div>
                <div className="w-8 h-8 text-yellow-500 text-2xl">⏰</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved Today</p>
                  <p className="text-2xl font-bold text-green-600">12</p>
                </div>
                <div className="w-8 h-8 text-green-500 text-2xl">✅</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rejected Today</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <div className="w-8 h-8 text-red-500 text-2xl">❌</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Review Time</p>
                  <p className="text-2xl font-bold text-blue-600">2.3h</p>
                </div>
                <div className="w-8 h-8 text-blue-500 text-2xl">⏱️</div>
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
                    placeholder="Search products or vendors..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select
                value={categoryFilter}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryFilter(e.target.value)}
                className="w-full md:w-48"
              >
                <option value="all">All Categories</option>
                <option value="Grains & Rice">Grains & Rice</option>
                <option value="Pickles & Chutneys">Pickles & Chutneys</option>
                <option value="Spices & Seasonings">Spices & Seasonings</option>
                <option value="Dairy & Ghee">Dairy & Ghee</option>
                <option value="Dry Fruits & Nuts">Dry Fruits & Nuts</option>
              </Select>
              
              <Select
                value={statusFilter}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                className="w-full md:w-48"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Select>
            </div>
          </Card>

          {/* Products Table */}
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Product</th>
                    <th className="text-left py-3 px-4 font-semibold">Vendor</th>
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Price</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Submitted</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-xs text-gray-500">IMG</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-500">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{product.vendor}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">${product.price}</p>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(product.status)}
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-600">{product.submittedDate}</p>
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
                          
                          {product.status === 'pending' && (
                            <>
                              <Button
                                size="small"
                                variant="normal"
                                onClick={() => handleApprove(product.id)}
                                className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                              >
                                ✅ Approve
                              </Button>
                              
                              <Button
                                size="small"
                                variant="outline"
                                onClick={() => handleReject(product.id)}
                                className="flex items-center gap-1 text-red-600 border-red-600 hover:bg-red-50"
                              >
                                ❌ Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default ProductApprovalPage; 