// Mock data for admin dashboard
export const dashboardData = {
  analytics: {
    totalRevenue: 125000,
    totalOrders: 1250,
    totalCustomers: 850,
    totalProducts: 450,
    revenueGrowth: 12.5,
    orderGrowth: 8.2,
    customerGrowth: 15.3,
    productGrowth: 5.7,
    todaysRevenue: 2500,
    todayTotalOrderByStatus: [
      { status: 'Pending', count: 15 },
      { status: 'Processing', count: 8 },
      { status: 'Shipped', count: 12 },
      { status: 'Delivered', count: 25 }
    ]
  },
  popularProducts: [
    {
      id: 1,
      name: 'Fresh Organic Tomatoes',
      image: '/img/products/tomatoes.jpg',
      orders: 156,
      revenue: 2340
    },
    {
      id: 2,
      name: 'Premium Basmati Rice',
      image: '/img/products/rice.jpg',
      orders: 142,
      revenue: 2840
    },
    {
      id: 3,
      name: 'Organic Milk',
      image: '/img/products/milk.jpg',
      orders: 138,
      revenue: 1656
    },
    {
      id: 4,
      name: 'Fresh Bananas',
      image: '/img/products/bananas.jpg',
      orders: 125,
      revenue: 750
    },
    {
      id: 5,
      name: 'Whole Wheat Bread',
      image: '/img/products/bread.jpg',
      orders: 118,
      revenue: 590
    }
  ],
  lowStockProducts: [
    {
      id: 1,
      name: 'Organic Honey',
      image: '/img/products/honey.jpg',
      stock: 5,
      minStock: 10
    },
    {
      id: 2,
      name: 'Premium Olive Oil',
      image: '/img/products/olive-oil.jpg',
      stock: 3,
      minStock: 8
    },
    {
      id: 3,
      name: 'Fresh Strawberries',
      image: '/img/products/strawberries.jpg',
      stock: 2,
      minStock: 15
    },
    {
      id: 4,
      name: 'Organic Eggs',
      image: '/img/products/eggs.jpg',
      stock: 8,
      minStock: 20
    },
    {
      id: 5,
      name: 'Whole Grain Pasta',
      image: '/img/products/pasta.jpg',
      stock: 6,
      minStock: 12
    }
  ],
  recentOrders: [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      amount: 45.50,
      status: 'Delivered',
      date: '2024-12-07'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      amount: 32.75,
      status: 'Processing',
      date: '2024-12-07'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      amount: 67.20,
      status: 'Shipped',
      date: '2024-12-07'
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Wilson',
      amount: 28.90,
      status: 'Pending',
      date: '2024-12-07'
    },
    {
      id: 'ORD-005',
      customer: 'David Brown',
      amount: 89.45,
      status: 'Delivered',
      date: '2024-12-07'
    }
  ],
  productByCategory: [
    { category: 'Fruits & Vegetables', count: 120 },
    { category: 'Dairy & Eggs', count: 45 },
    { category: 'Grains & Cereals', count: 78 },
    { category: 'Meat & Seafood', count: 35 },
    { category: 'Beverages', count: 62 }
  ],
  topRatedProducts: [
    {
      id: 1,
      name: 'Organic Honey',
      image: '/img/products/honey.jpg',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: 'Fresh Avocados',
      image: '/img/products/avocados.jpg',
      rating: 4.7,
      reviews: 142
    },
    {
      id: 3,
      name: 'Premium Coffee',
      image: '/img/products/coffee.jpg',
      rating: 4.6,
      reviews: 138
    }
  ]
};

// Mock API functions
export const useAnalyticsQuery = () => ({
  data: dashboardData.analytics,
  isLoading: false,
  error: null
});

export const usePopularProductsQuery = () => ({
  data: dashboardData.popularProducts,
  isLoading: false,
  error: null
});

export const useLowProductStockQuery = () => ({
  data: dashboardData.lowStockProducts,
  isLoading: false,
  error: null
});

export const useRecentOrdersQuery = () => ({
  data: dashboardData.recentOrders,
  isLoading: false,
  error: null
});

export const useProductByCategoryQuery = () => ({
  data: dashboardData.productByCategory,
  isLoading: false,
  error: null
});

export const useTopRatedProductsQuery = () => ({
  data: dashboardData.topRatedProducts,
  isLoading: false,
  error: null
}); 