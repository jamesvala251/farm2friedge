// Mock API Interceptor for Demo
// This file intercepts API calls and returns mock data instead of calling the backend

import { API_ENDPOINTS } from './api-endpoints';

// Mock data structure
const mockData = {
  products: [
    {
      id: 1,
      name: "Fresh Organic Apples",
      slug: "fresh-organic-apples",
      description: "Sweet and juicy organic apples, perfect for healthy snacking",
      price: 2.99,
      sale_price: 2.49,
      quantity: 50,
      unit: "kg",
      image: {
        id: 1,
        original: "/img/Apples.webp",
        thumbnail: "/img/Apples.webp"
      },
      gallery: [
        {
          id: 1,
          original: "/img/Apples.webp",
          thumbnail: "/img/Apples.webp"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.5,
      total_reviews: 128,
      in_stock: true,
      is_taxable: true,
      min_price: 2.49,
      max_price: 2.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["organic", "fresh", "healthy"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 2,
      name: "Fresh Milk",
      slug: "fresh-milk",
      description: "Pure and fresh dairy milk, rich in calcium and vitamins",
      price: 3.99,
      sale_price: 3.49,
      quantity: 100,
      unit: "liter",
      image: {
        id: 2,
        original: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 2,
          original: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 2,
        name: "Dairy & Eggs",
        slug: "dairy-eggs"
      },
      type: {
        id: 2,
        name: "Dairy",
        slug: "dairy"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.8,
      total_reviews: 89,
      in_stock: true,
      is_taxable: true,
      min_price: 3.49,
      max_price: 3.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["dairy", "fresh", "calcium"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 3,
      name: "Whole Grain Bread",
      slug: "whole-grain-bread",
      description: "Nutritious whole grain bread, perfect for sandwiches",
      price: 4.99,
      sale_price: 4.49,
      quantity: 75,
      unit: "pack",
      image: {
        id: 3,
        original: "/img/grain_free.webp",
        thumbnail: "/img/grain_free.webp"
      },
      gallery: [
        {
          id: 3,
          original: "/img/grain_free.webp",
          thumbnail: "/img/grain_free.webp"
        }
      ],
      category: {
        id: 3,
        name: "Bakery",
        slug: "bakery"
      },
      type: {
        id: 3,
        name: "Bakery",
        slug: "bakery"
      },
      shop: {
        id: 2,
        name: "Bakery Corner",
        slug: "bakery-corner",
        rating: 4.3,
        total_reviews: 89
      },
      ratings: 4.2,
      total_reviews: 67,
      in_stock: true,
      is_taxable: true,
      min_price: 4.49,
      max_price: 4.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["bakery", "whole-grain", "healthy"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 4,
      name: "Organic Tomatoes",
      slug: "organic-tomatoes",
      description: "Fresh organic tomatoes, perfect for salads and cooking",
      price: 1.99,
      sale_price: 1.79,
      quantity: 200,
      unit: "kg",
      image: {
        id: 4,
        original: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 4,
          original: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.6,
      total_reviews: 94,
      in_stock: true,
      is_taxable: true,
      min_price: 1.79,
      max_price: 1.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["organic", "vegetables", "fresh"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 5,
      name: "Free Range Eggs",
      slug: "free-range-eggs",
      description: "Fresh free range eggs from happy chickens",
      price: 5.99,
      sale_price: 5.49,
      quantity: 150,
      unit: "dozen",
      image: {
        id: 5,
        original: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 5,
          original: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 2,
        name: "Dairy & Eggs",
        slug: "dairy-eggs"
      },
      type: {
        id: 2,
        name: "Dairy",
        slug: "dairy"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.7,
      total_reviews: 112,
      in_stock: true,
      is_taxable: true,
      min_price: 5.49,
      max_price: 5.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["eggs", "free-range", "fresh"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 6,
      name: "Fresh Bananas",
      slug: "fresh-bananas",
      description: "Sweet and ripe bananas, perfect for smoothies",
      price: 1.49,
      sale_price: 1.29,
      quantity: 300,
      unit: "kg",
      image: {
        id: 6,
        original: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 6,
          original: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.4,
      total_reviews: 78,
      in_stock: true,
      is_taxable: true,
      min_price: 1.29,
      max_price: 1.49,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["fruits", "bananas", "fresh"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 7,
      name: "Greek Yogurt",
      slug: "greek-yogurt",
      description: "Creamy Greek yogurt, high in protein",
      price: 4.49,
      sale_price: 3.99,
      quantity: 80,
      unit: "pack",
      image: {
        id: 7,
        original: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 7,
          original: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 2,
        name: "Dairy & Eggs",
        slug: "dairy-eggs"
      },
      type: {
        id: 2,
        name: "Dairy",
        slug: "dairy"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.6,
      total_reviews: 95,
      in_stock: true,
      is_taxable: true,
      min_price: 3.99,
      max_price: 4.49,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["yogurt", "greek", "protein"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 8,
      name: "Organic Carrots",
      slug: "organic-carrots",
      description: "Fresh organic carrots, perfect for juicing",
      price: 2.29,
      sale_price: 1.99,
      quantity: 180,
      unit: "kg",
      image: {
        id: 8,
        original: "/img/Peeled-Carrots.webp",
        thumbnail: "/img/Peeled-Carrots.webp"
      },
      gallery: [
        {
          id: 8,
          original: "/img/Peeled-Carrots.webp",
          thumbnail: "/img/Peeled-Carrots.webp"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.3,
      total_reviews: 67,
      in_stock: true,
      is_taxable: true,
      min_price: 1.99,
      max_price: 2.29,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["organic", "carrots", "vegetables"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 9,
      name: "Fresh Cheese",
      slug: "fresh-cheese",
      description: "Creamy fresh cheese, perfect for cooking",
      price: 6.99,
      sale_price: 6.49,
      quantity: 60,
      unit: "pack",
      image: {
        id: 9,
        original: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 9,
          original: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 2,
        name: "Dairy & Eggs",
        slug: "dairy-eggs"
      },
      type: {
        id: 2,
        name: "Dairy",
        slug: "dairy"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.5,
      total_reviews: 83,
      in_stock: true,
      is_taxable: true,
      min_price: 6.49,
      max_price: 6.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["cheese", "fresh", "dairy"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 10,
      name: "Organic Spinach",
      slug: "organic-spinach",
      description: "Fresh organic spinach, rich in iron",
      price: 3.49,
      sale_price: 2.99,
      quantity: 120,
      unit: "bunch",
      image: {
        id: 10,
        original: "/img/BabySpinach.webp",
        thumbnail: "/img/BabySpinach.webp"
      },
      gallery: [
        {
          id: 10,
          original: "/img/BabySpinach.webp",
          thumbnail: "/img/BabySpinach.webp"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.4,
      total_reviews: 71,
      in_stock: true,
      is_taxable: true,
      min_price: 2.99,
      max_price: 3.49,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["organic", "spinach", "leafy-greens"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 11,
      name: "Fresh Butter",
      slug: "fresh-butter",
      description: "Creamy fresh butter, perfect for baking",
      price: 4.99,
      sale_price: 4.49,
      quantity: 90,
      unit: "pack",
      image: {
        id: 11,
        original: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 11,
          original: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 2,
        name: "Dairy & Eggs",
        slug: "dairy-eggs"
      },
      type: {
        id: 2,
        name: "Dairy",
        slug: "dairy"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.7,
      total_reviews: 104,
      in_stock: true,
      is_taxable: true,
      min_price: 4.49,
      max_price: 4.99,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["butter", "fresh", "dairy"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    },
    {
      id: 12,
      name: "Organic Onions",
      slug: "organic-onions",
      description: "Fresh organic onions, essential for cooking",
      price: 1.79,
      sale_price: 1.49,
      quantity: 250,
      unit: "kg",
      image: {
        id: 12,
        original: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=200&fit=crop"
      },
      gallery: [
        {
          id: 12,
          original: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop",
          thumbnail: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=200&fit=crop"
        }
      ],
      category: {
        id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables"
      },
      type: {
        id: 1,
        name: "Organic",
        slug: "organic"
      },
      shop: {
        id: 1,
        name: "Fresh Grocery Store",
        slug: "fresh-grocery-store",
        rating: 4.5,
        total_reviews: 156
      },
      ratings: 4.2,
      total_reviews: 56,
      in_stock: true,
      is_taxable: true,
      min_price: 1.49,
      max_price: 1.79,
      variations: [],
      variation_options: [],
      meta: [],
      tags: ["organic", "onions", "vegetables"],
      product_type: "simple",
      status: "publish",
      created_at: "2024-01-01T00:00:00.000000Z",
      updated_at: "2024-01-01T00:00:00.000000Z"
    }
  ],
  categories: [
    {
      id: 1,
      name: "Fruits & Vegetables",
      slug: "fruits-vegetables",
      parent: null,
      children: [
        { id: 101, name: "Fresh Fruits", slug: "fresh-fruits", products_count: 2 },
        { id: 102, name: "Fresh Vegetables", slug: "fresh-vegetables", products_count: 2 },
        { id: 103, name: "Organic Produce", slug: "organic-produce", products_count: 1 }
      ],
      image: "/images/categories/fruits-vegetables.jpg",
      icon: "🍎",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 4
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      slug: "dairy-eggs",
      parent: null,
      children: [
        { id: 201, name: "Milk & Milk Products", slug: "milk-products", products_count: 2 },
        { id: 202, name: "Cheese & Butter", slug: "cheese-butter", products_count: 1 },
        { id: 203, name: "Fresh Eggs", slug: "fresh-eggs", products_count: 1 }
      ],
      image: "/images/categories/dairy-eggs.jpg",
      icon: "🥛",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 3
    },
    {
      id: 3,
      name: "Meat & Seafood",
      slug: "meat-seafood",
      parent: null,
      children: [
        { id: 301, name: "Fresh Meat", slug: "fresh-meat", products_count: 1 },
        { id: 302, name: "Fresh Fish", slug: "fresh-fish", products_count: 1 },
        { id: 303, name: "Frozen Seafood", slug: "frozen-seafood", products_count: 0 }
      ],
      image: "/images/categories/meat-seafood.jpg",
      icon: "🥩",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 2
    },
    {
      id: 4,
      name: "Pantry & Staples",
      slug: "pantry-staples",
      parent: null,
      children: [
        { id: 401, name: "Rice & Grains", slug: "rice-grains", products_count: 1 },
        { id: 402, name: "Cooking Oils", slug: "cooking-oils", products_count: 0 },
        { id: 403, name: "Spices & Seasonings", slug: "spices-seasonings", products_count: 0 }
      ],
      image: "/images/categories/pantry-staples.jpg",
      icon: "🍚",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 1
    },
    {
      id: 5,
      name: "Snacks & Beverages",
      slug: "snacks-beverages",
      parent: null,
      children: [
        { id: 501, name: "Packaged Snacks", slug: "packaged-snacks", products_count: 0 },
        { id: 502, name: "Soft Drinks", slug: "soft-drinks", products_count: 0 },
        { id: 503, name: "Tea & Coffee", slug: "tea-coffee", products_count: 0 }
      ],
      image: "/images/categories/snacks-beverages.jpg",
      icon: "🥤",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 6,
      name: "Religious Items",
      slug: "religious-items",
      parent: null,
      children: [
        { id: 601, name: "Puja Items", slug: "puja-items", products_count: 0 },
        { id: 602, name: "Aarti & Bhajan", slug: "aarti-bhajan", products_count: 0 },
        { id: 603, name: "Murtis & Idols", slug: "murtis-idols", products_count: 0 },
        { id: 604, name: "Rituals & Offerings", slug: "rituals-offerings", products_count: 0 },
        { id: 605, name: "Festival Items", slug: "festival-items", products_count: 0 }
      ],
      image: "/images/categories/religious-items.jpg",
      icon: "🕉️",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 7,
      name: "Indian Sweets",
      slug: "indian-sweets",
      parent: null,
      children: [
        { id: 701, name: "Traditional Sweets", slug: "traditional-sweets", products_count: 0 },
        { id: 702, name: "Festival Sweets", slug: "festival-sweets", products_count: 0 },
        { id: 703, name: "Dry Fruits & Nuts", slug: "dry-fruits-nuts", products_count: 0 }
      ],
      image: "/images/categories/indian-sweets.jpg",
      icon: "🍬",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 8,
      name: "South Indian Groceries",
      slug: "south-indian-groceries",
      parent: null,
      children: [
        { id: 801, name: "Rice Varieties", slug: "rice-varieties", products_count: 0 },
        { id: 802, name: "Lentils & Pulses", slug: "lentils-pulses", products_count: 0 },
        { id: 803, name: "South Indian Spices", slug: "south-indian-spices", products_count: 0 },
        { id: 804, name: "Pickles & Chutneys", slug: "pickles-chutneys", products_count: 0 }
      ],
      image: "/images/categories/south-indian-groceries.jpg",
      icon: "🌶️",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 9,
      name: "Sri Lankan Groceries",
      slug: "sri-lankan-groceries",
      parent: null,
      children: [
        { id: 901, name: "Coconut Products", slug: "coconut-products", products_count: 0 },
        { id: 902, name: "Sri Lankan Spices", slug: "sri-lankan-spices", products_count: 0 },
        { id: 903, name: "Traditional Items", slug: "traditional-items", products_count: 0 }
      ],
      image: "/images/categories/sri-lankan-groceries.jpg",
      icon: "🥥",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 10,
      name: "Philippine Groceries",
      slug: "philippine-groceries",
      parent: null,
      children: [
        { id: 1001, name: "Filipino Condiments", slug: "filipino-condiments", products_count: 0 },
        { id: 1002, name: "Philippine Spices", slug: "philippine-spices", products_count: 0 },
        { id: 1003, name: "Traditional Snacks", slug: "traditional-snacks", products_count: 0 }
      ],
      image: "/images/categories/philippine-groceries.jpg",
      icon: "🍍",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 0
    },
    {
      id: 11,
      name: "Dietary Preferences",
      slug: "dietary-preferences",
      parent: null,
      children: [
        { id: 1101, name: "Organic Products", slug: "organic-products", products_count: 2 },
        { id: 1102, name: "Vegan Products", slug: "vegan-products", products_count: 1 },
        { id: 1103, name: "Gluten-Free", slug: "gluten-free", products_count: 1 },
        { id: 1104, name: "Halal Products", slug: "halal-products", products_count: 3 },
        { id: 1105, name: "Kosher Products", slug: "kosher-products", products_count: 2 }
      ],
      image: "/images/categories/dietary-preferences.jpg",
      icon: "🌱",
      type: {
        id: 1,
        name: "Grocery",
        slug: "grocery"
      },
      products_count: 5
    }
  ],
  types: [
    {
      id: 1,
      name: "Grocery",
      slug: "grocery",
      banners: [
        {
          id: 1,
          title: "Fresh Groceries Delivered",
          description: "Get fresh groceries delivered to your doorstep within 90 minutes",
          image: {
            id: 1,
            original: "/img/banners/banner-1.jpg",
            thumbnail: "/img/banners/banner-1.jpg"
          },
          button_text: "Shop Now",
          button_url: "/products"
        },
        {
          id: 2,
          title: "Organic Fruits & Vegetables",
          description: "Fresh organic produce delivered daily from local farms",
          image: {
            id: 2,
            original: "/img/banners/banner-2.jpg",
            thumbnail: "/img/banners/banner-2.jpg"
          },
          button_text: "View Organic",
          button_url: "/category/organic-products"
        }
      ],
      promotional_sliders: [
        {
          id: 1,
          title: "Fresh Fruits Sale",
          description: "Get 20% off on all fresh fruits",
          original: "/promotion/promo-1.png",
          url: "/category/fruits-vegetables"
        },
        {
          id: 2,
          title: "Dairy Products",
          description: "Fresh dairy products at best prices",
          original: "/promotion/promo-2.png",
          url: "/category/dairy-eggs"
        },
        {
          id: 3,
          title: "Bakery Fresh",
          description: "Freshly baked bread and pastries",
          original: "/promotion/promo-3.png",
          url: "/category/bakery"
        },
        {
          id: 4,
          title: "Organic Vegetables",
          description: "Fresh organic vegetables from local farms",
          original: "/promotion/promo-4.png",
          url: "/category/organic-products"
        },
        {
          id: 5,
          title: "Premium Meat & Seafood",
          description: "Quality meat and fresh seafood",
          original: "/promotion/promo-5.png",
          url: "/category/meat-seafood"
        }
      ],
      settings: {
        isHome: true,
        layoutType: "default",
        productCard: "neon",
        enableBestSelling: true,
        enableNewArrival: true,
        enableCategories: true,
        enableCoupons: true,
        enableHero: true,
        enableFeatures: true,
        enableTestimonials: true,
        enableNewsletter: true
      }
    }
  ],
  settings: {
    siteTitle: "eGroceryMart",
    siteSubtitle: "Fresh Groceries Delivered to Your Doorstep",
    currency: "USD",
    currencyToUSD: 1,
    logo: {
      id: 1,
      original: "/images/logo.png",
      thumbnail: "/images/logo-thumbnail.png"
    },
    useOtp: false,
    contactDetails: {
      contact: "+1-555-123-4567",
      website: "https://egrocerymart.com",
      socials: [
        {
          icon: "FacebookIcon",
          url: "https://facebook.com/egrocerymart"
        },
        {
          icon: "TwitterIcon", 
          url: "https://twitter.com/egrocerymart"
        },
        {
          icon: "InstagramIcon",
          url: "https://instagram.com/egrocerymart"
        }
      ]
    },
    minimumOrderAmount: 20,
    deliveryTime: [
      {
        title: "Express Delivery",
        description: "90 min express delivery"
      },
      {
        title: "Standard Delivery", 
        description: "Same day delivery"
      }
    ],
    freeShippingAmount: 50,
    freeShipping: true,
    locationToProximity: 10,
    freeDeliveryAmount: 50,
    deliveryTimeType: "fixed",
    taxClass: "food-grocery",
    shippingClass: "global"
  }
};

// Mock API responses
const mockResponses = {
  [API_ENDPOINTS.PRODUCTS]: {
    data: mockData.products,
    meta: {
      total: mockData.products.length,
      per_page: 15,
      current_page: 1,
      last_page: 1
    }
  },
  [API_ENDPOINTS.CATEGORIES]: {
    data: mockData.categories
  },
  [API_ENDPOINTS.TYPES]: mockData.types, // Return array directly for types
  [API_ENDPOINTS.SETTINGS]: mockData.settings,
  [API_ENDPOINTS.USERS_ME]: {
    id: 1,
    name: "Demo User",
    email: "demo@egrocerymart.com",
    profile: {
      avatar: "/images/avatar.jpg",
      bio: "Demo user for eGroceryMart"
    }
  }
};

// Mock API interceptor
export class MockApiClient {
  static async get<T>(url: string, params?: any): Promise<T> {
    // Reduced network delay for better performance
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // Extract endpoint from URL
    const endpoint = url.replace(process.env.NEXT_PUBLIC_REST_API_ENDPOINT || '', '');
    
    // Handle specific endpoints with parameters
    if (endpoint.startsWith(API_ENDPOINTS.TYPES + '/')) {
      // Handle individual type requests
      const slug = endpoint.split('/').pop();
      const type = mockData.types.find(t => t.slug === slug);
      return type as T;
    }
    
    // Special handling for TYPES endpoint to ensure it returns an array
    if (endpoint === API_ENDPOINTS.TYPES) {
      return mockData.types as T;
    }
    
    // Return mock data based on endpoint
    if (mockResponses[endpoint]) {
      return mockResponses[endpoint] as T;
    }
    
    // Default response for unknown endpoints
    return { data: [], meta: { total: 0 } } as T;
  }

  static async post<T>(url: string, data?: any): Promise<T> {
    // Reduced network delay for better performance
    await new Promise(resolve => setTimeout(resolve, 20));
    
    // Handle different POST requests
    const endpoint = url.replace(process.env.NEXT_PUBLIC_REST_API_ENDPOINT || '', '');
    
    switch (endpoint) {
      case API_ENDPOINTS.USERS_LOGIN:
        return {
          token: "mock-jwt-token",
          user: mockResponses[API_ENDPOINTS.USERS_ME]
        } as T;
      
      case API_ENDPOINTS.USERS_REGISTER:
        return {
          token: "mock-jwt-token",
          user: { ...mockResponses[API_ENDPOINTS.USERS_ME], ...data }
        } as T;
      
      case API_ENDPOINTS.ORDERS:
        return {
          id: Math.floor(Math.random() * 1000),
          order_number: `ORD-${Date.now()}`,
          status: "pending",
          ...data
        } as T;
      
      default:
        return { success: true } as T;
    }
  }

  static async put<T>(url: string, data?: any): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 15));
    return { success: true, data } as T;
  }

  static async delete<T>(url: string): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 10));
    return { success: true } as T;
  }
}

// Export mock data for direct use
export { mockData }; 