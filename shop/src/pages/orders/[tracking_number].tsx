import { getLayout } from '@/components/layouts/layout';
import Order from '@/components/orders/order-view';
import Seo from '@/components/seo/seo';
import { useRouter } from 'next/router';
import { useOrder } from '@/framework/order';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useSettings } from '@/framework/settings';
export { getServerSideProps } from '@/framework/order.ssr';

// Mock order data for demo
const mockOrderData = {
  id: 1,
  tracking_number: 'ORD-12345678',
  created_at: new Date().toISOString(),
  customer_name: 'John Doe',
  customer_contact: '+1 (555) 123-4567',
  customer_email: 'john.doe@example.com',
  order_status: 'order-processing',
  payment_status: 'payment-success',
  payment_gateway: 'Credit Card',
  amount: 16.45,
  paid_total: 19.77,
  delivery_fee: 2.00,
  sales_tax: 1.32,
  discount: 0,
  delivery_time: 'Today - 2:00 PM - 4:00 PM',
  note: 'Please deliver to the front door. Ring doorbell twice.',
  shipping_address: {
    title: 'Home',
    type: 'home',
    address: {
      street_address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    }
  },
  billing_address: {
    title: 'Home',
    type: 'home',
    address: {
      street_address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    }
  },
  products: [
    {
      id: 1,
      name: 'Fresh Organic Apples',
      slug: 'fresh-organic-apples',
      image: {
        id: 1,
        original: '/img/Apples.webp',
        thumbnail: '/img/Apples.webp'
      },
      price: 2.99,
      sale_price: 2.49,
      quantity: 2,
      unit: 'lb',
      itemTotal: 4.98,
      pivot: {
        order_quantity: 2,
        subtotal: 4.98,
        variation_option_id: null
      }
    },
    {
      id: 2,
      name: 'Fresh Milk',
      slug: 'fresh-milk',
      image: {
        id: 2,
        original: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop'
      },
      price: 3.99,
      sale_price: 3.49,
      quantity: 1,
      unit: 'gallon',
      itemTotal: 3.49,
      pivot: {
        order_quantity: 1,
        subtotal: 3.49,
        variation_option_id: null
      }
    },
    {
      id: 3,
      name: 'Whole Grain Bread',
      slug: 'whole-grain-bread',
      image: {
        id: 3,
        original: '/img/grain_free.webp',
        thumbnail: '/img/grain_free.webp'
      },
      price: 4.99,
      sale_price: 4.49,
      quantity: 1,
      unit: 'loaf',
      itemTotal: 4.49,
      pivot: {
        order_quantity: 1,
        subtotal: 4.49,
        variation_option_id: null
      }
    },
    {
      id: 4,
      name: 'Organic Tomatoes',
      slug: 'organic-tomatoes',
      image: {
        id: 4,
        original: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&h=200&fit=crop'
      },
      price: 1.99,
      sale_price: 1.79,
      quantity: 1,
      unit: 'lb',
      itemTotal: 1.79,
      pivot: {
        order_quantity: 1,
        subtotal: 1.79,
        variation_option_id: null
      }
    }
  ],
  children: [],
  refund: null,
  wallet_point: null
};

export default function OrderPage() {
  const { query } = useRouter();
  const { settings } = useSettings();

  // Use mock data for demo instead of API call
  const order = mockOrderData;
  const isLoading = false;
  const isFetching = false;

  if (isLoading) {
    return <Spinner showText={false} />;
  }

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Order
        order={order}
        loadingStatus={!isLoading && isFetching}
        settings={settings}
      />
    </>
  );
}

OrderPage.getLayout = getLayout;
