import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import DashboardLayout from '@/layouts/_dashboard';
import Head from 'next/head';
import Card from '@/components/ui/cards/card';
import Button from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { useModalAction } from '@/components/ui/modal/modal.context';

export default function WishlistsPage() {
  const router = useRouter();
  const { openModal } = useModalAction();

  // Mock wishlist data for demo
  const mockWishlistItems = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      description: 'Organic red tomatoes',
      price: 2.99,
      unit: 'lb',
      image: '/img/strawberry.webp',
      slug: 'fresh-tomatoes'
    },
    {
      id: 2,
      name: 'Organic Bananas',
      description: 'Fresh yellow bananas',
      price: 1.49,
      unit: 'lb',
      image: '/img/Mangoes.webp',
      slug: 'organic-bananas'
    },
    {
      id: 3,
      name: 'Whole Milk',
      description: 'Fresh dairy milk',
      price: 3.99,
      unit: 'gallon',
      image: '/img/Apples.webp',
      slug: 'whole-milk'
    },
    {
      id: 4,
      name: 'Fresh Bread',
      description: 'Artisan whole wheat bread',
      price: 4.99,
      unit: 'loaf',
      image: '/img/blueberries.webp',
      slug: 'fresh-bread'
    },
    {
      id: 5,
      name: 'Organic Apples',
      description: 'Fresh red apples',
      price: 1.99,
      unit: 'lb',
      image: '/img/Apples.webp',
      slug: 'organic-apples'
    },
    {
      id: 6,
      name: 'Greek Yogurt',
      description: 'Creamy Greek yogurt',
      price: 5.99,
      unit: 'container',
      image: '/img/clementines.webp',
      slug: 'greek-yogurt'
    }
  ];

  const handleAddToCart = (item: any) => {
    // Simulate adding to cart
    alert(`${item.name} added to cart!`);
  };

  const handleRemoveFromWishlist = (item: any) => {
    // Simulate removing from wishlist
    alert(`${item.name} removed from wishlist!`);
  };

  const handleViewProduct = (item: any) => {
    // Open product popup modal
    openModal('PRODUCT_DETAILS', item.slug);
  };

  return (
    <>
      <Head>
        <title>My Wishlist - eGroceryMart</title>
      </Head>
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold text-heading lg:text-3xl">
            My Wishlist
          </h1>
          <p className="text-base text-body-dark">
            Save your favorite products for later
          </p>
        </div>
        
        {mockWishlistItems.length === 0 ? (
          <Card className="p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Your wishlist is empty</h3>
            <p className="mb-4 text-gray-600">Start adding products you love to your wishlist!</p>
            <Button onClick={() => router.push('/')}>
              Start Shopping
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockWishlistItems.map((item) => (
              <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
                <div 
                  className="mb-3 h-32 w-full rounded-lg bg-gray-200 cursor-pointer overflow-hidden flex items-center justify-center"
                  onClick={() => handleViewProduct(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-100">
                          <svg class="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
                <h3 
                  className="mb-1 font-semibold cursor-pointer hover:text-accent"
                  onClick={() => handleViewProduct(item)}
                >
                  {item.name}
                </h3>
                <p className="mb-2 text-sm text-gray-600">{item.description}</p>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-bold text-accent">${item.price.toFixed(2)}/{item.unit}</span>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveFromWishlist(item)}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <Button 
                  className="w-full"
                  size="small"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

WishlistsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
