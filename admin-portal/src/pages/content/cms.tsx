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

// Mock data for CMS content
const mockContent = [
  {
    id: 'C001',
    title: 'Welcome to Farm2Fridge',
    type: 'banner',
    status: 'active',
    position: 'homepage-top',
    lastUpdated: '2024-01-15',
    author: 'Admin User'
  },
  {
    id: 'C002',
    title: 'How to Order Groceries Online',
    type: 'faq',
    status: 'active',
    position: 'help-center',
    lastUpdated: '2024-01-14',
    author: 'Support Team'
  },
  {
    id: 'C003',
    title: 'Return & Refund Policy',
    type: 'policy',
    status: 'draft',
    position: 'footer',
    lastUpdated: '2024-01-13',
    author: 'Legal Team'
  },
  {
    id: 'C004',
    title: 'Ethnic Groceries Guide',
    type: 'article',
    status: 'active',
    position: 'blog',
    lastUpdated: '2024-01-12',
    author: 'Content Team'
  },
  {
    id: 'C005',
    title: 'Delivery Areas & Times',
    type: 'info',
    status: 'active',
    position: 'delivery-page',
    lastUpdated: '2024-01-11',
    author: 'Operations Team'
  }
];

const CMSManagementPage: NextPage = () => {
  const [content, setContent] = useState(mockContent);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" className="flex items-center gap-1">✅ Active</Badge>;
      case 'draft':
        return <Badge variant="warning" className="flex items-center gap-1">📝 Draft</Badge>;
      case 'inactive':
        return <Badge variant="danger" className="flex items-center gap-1">❌ Inactive</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      banner: 'bg-blue-100 text-blue-800 border-blue-200',
      faq: 'bg-green-100 text-green-800 border-green-200',
      policy: 'bg-purple-100 text-purple-800 border-purple-200',
      article: 'bg-orange-100 text-orange-800 border-orange-200',
      info: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    return (
      <Badge variant="outline" className={typeColors[type as keyof typeof typeColors]}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  return (
    <>
      <Head>
        <title>Content Management - Farm2Fridge Admin</title>
      </Head>
      <AdminLayout>
        <div className="space-y-6">
          <PageHeading 
            title="Content Management" 
            subtitle="Manage platform content, policies, and information"
          />

          {/* Content Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Content</p>
                  <p className="text-2xl font-bold text-blue-600">{content.length}</p>
                </div>
                <div className="w-8 h-8 text-blue-500 text-2xl">📝</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Content</p>
                  <p className="text-2xl font-bold text-green-600">{content.filter(c => c.status === 'active').length}</p>
                </div>
                <div className="w-8 h-8 text-green-500 text-2xl">✅</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Draft Content</p>
                  <p className="text-2xl font-bold text-yellow-600">{content.filter(c => c.status === 'draft').length}</p>
                </div>
                <div className="w-8 h-8 text-yellow-500 text-2xl">📝</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Content Types</p>
                  <p className="text-2xl font-bold text-purple-600">{new Set(content.map(c => c.type)).size}</p>
                </div>
                <div className="w-8 h-8 text-purple-500 text-2xl">🏷️</div>
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
                    placeholder="Search content or authors..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select
                value={typeFilter}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeFilter(e.target.value)}
                className="w-full md:w-48"
              >
                <option value="all">All Types</option>
                <option value="banner">Banner</option>
                <option value="faq">FAQ</option>
                <option value="policy">Policy</option>
                <option value="article">Article</option>
                <option value="info">Info</option>
              </Select>
              
              <Select
                value={statusFilter}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                className="w-full md:w-48"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inactive</option>
              </Select>
            </div>
          </Card>

          {/* Content Table */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Content Items</h3>
              <Button variant="normal" className="flex items-center gap-2">
                ➕ Create Content
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Content</th>
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Position</th>
                    <th className="text-left py-3 px-4 font-semibold">Author</th>
                    <th className="text-left py-3 px-4 font-semibold">Last Updated</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContent.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-500">ID: {item.id}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {getTypeBadge(item.type)}
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{item.position}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{item.author}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-600">{item.lastUpdated}</p>
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
            
            {filteredContent.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No content found matching your criteria.</p>
              </div>
            )}
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default CMSManagementPage; 