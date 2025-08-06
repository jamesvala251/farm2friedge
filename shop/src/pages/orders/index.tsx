import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import DashboardLayout from '@/layouts/_dashboard';
import Head from 'next/head';
import Card from '@/components/ui/cards/card';
import Button from '@/components/ui/button';

export default function OrdersIndexPage() {
  const router = useRouter();

  // Mock orders data for demo
  const mockOrders = [
    {
      id: 'ORD-12345',
      status: 'Processing',
      date: new Date().toLocaleDateString(),
      total: 8.47,
      items: [
        { name: 'Fresh Tomatoes', price: 2.99 },
        { name: 'Organic Bananas', price: 1.49 },
        { name: 'Whole Milk', price: 3.99 }
      ]
    },
    {
      id: 'ORD-12344',
      status: 'Delivered',
      date: 'Dec 15, 2024',
      total: 12.99,
      items: [
        { name: 'Organic Apples', price: 4.99 },
        { name: 'Fresh Bread', price: 2.49 },
        { name: 'Greek Yogurt', price: 5.51 }
      ]
    },
    {
      id: 'ORD-12343',
      status: 'Delivered',
      date: 'Dec 10, 2024',
      total: 8.75,
      items: [
        { name: 'Spinach', price: 2.99 },
        { name: 'Chicken Breast', price: 5.76 }
      ]
    },
    {
      id: 'ORD-12342',
      status: 'Delivered',
      date: 'Dec 5, 2024',
      total: 15.25,
      items: [
        { name: 'Salmon Fillet', price: 12.99 },
        { name: 'Brown Rice', price: 2.26 }
      ]
    }
  ];

  const handleTrackOrder = (orderId: string) => {
    router.push(`/orders/${orderId}`);
  };

  const handleReorder = (order: any) => {
    // Simulate reorder functionality
    alert(`Reordering ${order.id} - ${order.items.length} items added to cart!`);
  };

  return (
    <>
      <Head>
        <title>My Orders - eGroceryMart</title>
      </Head>
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-heading lg:text-3xl">
            My Orders
          </h1>
          <p className="text-base text-body-dark">
            Track your order history and current orders
          </p>
        </div>
        
        <div className="space-y-6">
          {mockOrders.map((order, index) => (
            <Card key={order.id} className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {index === 0 ? 'Current Order' : 'Past Order'}
                </h2>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                  order.status === 'Processing' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {order.status}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  {index === 0 ? 'Placed on:' : 'Delivered on:'} {order.date}
                </p>
              </div>
              
              <div className="mb-4 space-y-2">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="font-semibold">Total: ${order.total.toFixed(2)}</span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => handleTrackOrder(order.id)}
                  >
                    View Details
                  </Button>
                  {order.status === 'Delivered' && (
                    <Button
                      size="small"
                      onClick={() => handleReorder(order)}
                    >
                      Reorder
                    </Button>
                  )}
                  {order.status === 'Processing' && (
                    <Button
                      size="small"
                      onClick={() => handleTrackOrder(order.id)}
                    >
                      Track Order
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

OrdersIndexPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
