import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getLayout } from '@/components/layouts/layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Rating from '@/components/ui/rating';
import CustomerReviews from '@/components/ui/customer-reviews';
import { Image } from '@/components/ui/image';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState(1);

  // Static product data for demo
  const product = {
    name: "Fresh Organic Apples",
    description: "Sweet and juicy organic apples, perfect for healthy snacking. These apples are carefully selected from local organic farms and delivered fresh to your doorstep.",
    price: 2.99,
    sale_price: 2.49,
    quantity: 50,
    unit: "kg",
    image: {
      original: "/img/Apples.webp",
      thumbnail: "/img/Apples.webp"
    },
    gallery: [
      {
        original: "/img/Apples.webp",
        thumbnail: "/img/Apples.webp"
      },
      {
        original: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop"
      },
      {
        original: "/img/grain_free.webp",
        thumbnail: "/img/grain_free.webp"
      },
      {
        original: "/img/Peeled-Carrots.webp",
        thumbnail: "/img/Peeled-Carrots.webp"
      }
    ],
    category: {
      name: "Fruits & Vegetables",
      slug: "fruits-vegetables"
    },
    vendor: {
      name: "Fresh Grocery Store",
      rating: 4.5,
      total_reviews: 156
    },
    brand: {
      name: "Nature's Best",
      slug: "natures-best"
    },
    tags: ["organic", "fresh", "healthy"],
    ratings: 4.5,
    total_reviews: 128,
    reviews: [
      {
        id: 1,
        customerName: "John Doe",
        rating: 5,
        date: "2024-01-15",
        title: "Excellent Quality!",
        comment: "Great product! Highly recommend. The quality is outstanding and it arrived fresh.",
        verified: true,
      },
      {
        id: 2,
        customerName: "Jane Smith",
        rating: 4,
        date: "2024-01-14",
        title: "Good but Expensive",
        comment: "Good quality product, but a bit expensive for what you get. Still satisfied with the purchase.",
        verified: true,
      },
      {
        id: 3,
        customerName: "Peter Jones",
        rating: 3,
        date: "2024-01-13",
        title: "Average Product",
        comment: "Average product, not bad but nothing special either. Would buy again if on sale.",
        verified: false,
      },
      {
        id: 4,
        customerName: "Sarah Wilson",
        rating: 5,
        date: "2024-01-12",
        title: "Amazing Freshness!",
        comment: "Incredibly fresh and tasty! Will definitely order again. The delivery was also very fast.",
        verified: true,
      },
      {
        id: 5,
        customerName: "Mike Brown",
        rating: 4,
        date: "2024-01-11",
        title: "Solid Product",
        comment: "Good quality and reasonable price. The packaging was excellent and kept everything fresh.",
        verified: true,
      },
    ]
  };

  return (
    <>
      <Head>
        <title>{product.name} - eGroceryMart</title>
      </Head>
      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 h-96 w-full rounded-lg overflow-hidden relative">
              <Image
                src={product.image.original}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.gallery.map((image, index) => (
                <div key={index} className="h-20 w-full rounded-lg overflow-hidden relative">
                  <Image
                    src={image.original}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-heading">{product.name}</h1>
              <p className="mb-4 text-lg text-gray-600">{product.description}</p>
              <div className="mb-4 flex items-center space-x-2">
                <span className="text-2xl font-bold text-accent">
                  ${product.sale_price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                  {Math.round(((product.price - product.sale_price) / product.price) * 100)}% OFF
                </span>
              </div>
              
              {/* Enhanced Rating Section */}
              <div className="mb-4">
                <Rating
                  rating={product.ratings}
                  totalReviews={product.total_reviews}
                  size="lg"
                  showCount={true}
                  className="mb-2"
                />
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>⭐ {product.ratings.toFixed(1)} out of 5</span>
                  <span>•</span>
                  <span>{product.total_reviews} customer reviews</span>
                </div>
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-md border border-gray-300 px-3 py-1 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full rounded-md bg-accent px-4 py-3 text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Add to Cart
              </button>
              <button className="w-full rounded-md border border-accent px-4 py-3 text-accent hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Add to Wishlist
              </button>
            </div>
            
            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Description</h3>
                <p className="text-sm text-gray-600">
                  {product.description}
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold">Product Information</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Unit:</span>
                    <span>{product.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stock:</span>
                    <span>{product.quantity} available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{product.category.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendor:</span>
                    <span>{product.vendor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brand:</span>
                    <span>{product.brand.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tags:</span>
                    <span>{product.tags.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customer Reviews Section */}
        <div className="mt-12">
          <CustomerReviews
            reviews={product.reviews}
          />
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg overflow-hidden relative">
                <Image
                  src="/img/Apples.webp"
                  alt="Organic Apples"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 font-semibold">Organic Apples</h3>
              <p className="mb-2 text-sm text-gray-600">Fresh red apples</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$1.99/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg overflow-hidden relative">
                <Image
                  src="/img/Peeled-Carrots.webp"
                  alt="Fresh Carrots"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 font-semibold">Fresh Carrots</h3>
              <p className="mb-2 text-sm text-gray-600">Organic orange carrots</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$0.99/lb</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop"
                  alt="Fresh Milk"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 font-semibold">Fresh Milk</h3>
              <p className="mb-2 text-sm text-gray-600">Pure dairy milk</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$3.49/liter</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="mb-3 h-32 w-full rounded-lg overflow-hidden relative">
                <Image
                  src="/img/grain_free.webp"
                  alt="Whole Grain Bread"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1 font-semibold">Whole Grain Bread</h3>
              <p className="mb-2 text-sm text-gray-600">Nutritious bread</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-accent">$4.49/pack</span>
                <button className="rounded-md bg-accent px-3 py-1 text-sm text-white hover:bg-accent-hover">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ProductDetailPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};


