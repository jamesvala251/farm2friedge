# 🔧 eGroceryMart - Technical Summary

## 🏗️ Architecture Overview

### Frontend Stack
- **React 18** + **Next.js 13** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Jotai** for state management
- **Framer Motion** for animations

### Key Libraries
```json
{
  "react": "^18.x",
  "next": "^13.x", 
  "tailwindcss": "^3.x",
  "jotai": "^2.x",
  "framer-motion": "^10.x",
  "react-toastify": "^9.x",
  "classnames": "^2.x"
}
```

## 📁 File Structure

### Core Pages
```
shop/src/pages/
├── index.tsx                 # Homepage with product catalog
├── search.tsx               # Advanced search with filters
├── products/[slug].tsx      # Product detail page (static demo)
├── profile.tsx              # User profile dashboard
├── change-password.tsx      # Password change form
├── orders/index.tsx         # Order history list
├── orders/[tracking_number].tsx # Order detail page
├── wishlists.tsx            # Wishlist management
├── help.tsx                 # Help center & FAQ
├── checkout/index.tsx       # Main checkout flow
└── checkout/guest.tsx       # Guest checkout
```

### Key Components
```
shop/src/components/
├── products/
│   ├── cards/
│   │   ├── neon.tsx         # Product card variant (main)
│   │   ├── argon.tsx        # Alternative card style
│   │   └── helium.tsx       # Another card variant
│   └── details/
│       ├── popup.tsx        # Product modal wrapper
│       ├── details.tsx      # Product information
│       ├── related-products.tsx # Related items
│       └── customer-reviews.tsx # Reviews component
├── dashboard/
│   └── sidebar.tsx          # Dashboard navigation
├── profile/
│   └── profile-form.tsx     # Profile management form
├── cart/
│   ├── cart-item.tsx        # Individual cart item
│   ├── cart-counter-button.tsx # Floating cart button
│   └── cart-sidebar-view.tsx # Cart sidebar
├── checkout/
│   ├── address-grid.tsx     # Address selection
│   ├── coupon.tsx           # Coupon application
│   └── place-order-action.tsx # Order placement
├── orders/
│   ├── order-items.tsx      # Order item display
│   └── order-view.tsx       # Order information
└── ui/
    ├── cards/card.tsx       # Reusable card component
    ├── image.tsx            # Optimized image component
    ├── button.tsx           # Button component
    ├── input.tsx            # Input component
    ├── auto-suggestion.tsx  # Search autocomplete
    └── modal/               # Modal system
```

## 🔧 Key Implementation Details

### Mock API Structure
```typescript
// shop/src/framework/rest/client/mock-api.ts
export const mockData = {
  products: Product[],        // 50+ products with full data
  categories: Category[],     // Hierarchical categories
  shops: Shop[],             // Vendor/seller data
  brands: Brand[],           // Product brands
  tags: Tag[]                // Product tags
}

// Shared dictionaries for demo
export const relatedProductsDictionary = Product[]
export const customerReviewsDictionary = Review[]
```

### State Management (Jotai)
```typescript
// Key atoms used
stickyShortDetailsAtom      // Product details state
drawerAtom                  // Sidebar/cart state
checkoutAtom               // Checkout process state
discountAtom               // Coupon/discount state
walletAtom                 // Wallet points state
payableAmountAtom          // Final amount calculation
```

### Dashboard Layout System
```typescript
// shop/src/layouts/_dashboard.tsx
export default function DashboardLayout({ children }) {
  return (
    <GeneralLayout>
      <div className="bg-gray-100">
        <DashboardSidebar /> {/* Left navigation */}
        <div className="bg-gray-50 rounded-lg shadow-md border border-gray-300">
          {children} {/* Page content */}
        </div>
      </div>
    </GeneralLayout>
  )
}
```

## 🎨 UI/UX Implementation

### Design System
- **Color Palette:** Gray scale with accent colors
- **Typography:** System fonts with proper hierarchy
- **Spacing:** Consistent 4px grid system
- **Shadows:** Subtle elevation system
- **Borders:** Gray-200 for cards, Gray-300 for containers

### Responsive Breakpoints
```css
/* Tailwind defaults */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large */
2xl: 1536px /* 2X large */
```

### Component Styling
```typescript
// Card component styling
className="p-5 md:p-8 bg-white shadow-sm border border-gray-200 rounded-lg"

// Dashboard container
className="bg-gray-50 rounded-lg shadow-md border border-gray-300 p-6 lg:p-8"
```

## 🔧 Recent Technical Fixes

### Language Cleanup
- **Removed:** `react-i18next` dependencies
- **Replaced:** `useTranslation()` with static strings
- **Fixed:** 50+ files with language issues
- **Result:** Pure English static content

### Image Management
- **Fixed:** Wishlist image paths
- **Added:** Error handling with fallbacks
- **Optimized:** Next.js Image component usage
- **Stored:** Images in `/public/img/` folder

### Modal Integration
- **Product Preview:** Click cards → open modal
- **Search Results:** Click suggestions → open modal
- **Wishlist:** Click products → open modal
- **Data Flow:** Mock API → Modal components

### Form Pre-filling
- **Checkout Forms:** Demo data pre-filled
- **Profile Forms:** Sample user information
- **Order Forms:** Mock order details
- **User Experience:** Ready-to-test forms

## 🚀 Performance Optimizations

### Code Splitting
```typescript
// Dynamic imports for heavy components
const AddToCart = dynamic(() => import('@/components/products/add-to-cart/add-to-cart'), {
  ssr: false,
});

const RelatedProducts = dynamic(() => import('@/components/products/details/related-products'), {
  ssr: false,
});
```

### Image Optimization
```typescript
// Next.js Image component with proper sizing
<Image
  src={product.image}
  alt={product.name}
  width={200}
  height={128}
  className="w-full h-full object-cover"
/>
```

### State Management
- **Jotai Atoms:** Efficient state updates
- **Memoization:** React.memo for expensive components
- **Lazy Loading:** Components loaded on demand

## 🔧 Development Commands

### Setup & Run
```bash
# Install dependencies
npm install

# Run development server
npm run dev:rest

# Build for production
npm run build

# Start production server
npm start
```

### Key Scripts
```json
{
  "dev": "next dev",
  "dev:rest": "next dev -p 3003",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📊 Data Flow

### Product Display Flow
```
Mock API → Product Cards → Click → Modal/Detail Page
     ↓
Search/Filter → Filtered Results → Product Cards
     ↓
Wishlist → Saved Products → Product Cards
```

### Shopping Flow
```
Product Card → Add to Cart → Cart Sidebar → Checkout → Order
     ↓
Wishlist → Add to Cart → Checkout → Order
```

### User Dashboard Flow
```
Profile → Personal Info → Address Management
     ↓
Orders → Order History → Order Details
     ↓
Wishlist → Saved Products → Product Management
```

## 🎯 Ready for Integration

### Backend API Endpoints Needed
```typescript
// Product endpoints
GET /api/products
GET /api/products/[id]
GET /api/products/search
GET /api/categories

// User endpoints  
GET /api/user/profile
PUT /api/user/profile
POST /api/auth/login
POST /api/auth/register

// Order endpoints
GET /api/orders
POST /api/orders
GET /api/orders/[id]

// Cart endpoints
GET /api/cart
POST /api/cart
DELETE /api/cart/[id]
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3003
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---
**Technical Status:** Frontend Complete, Backend Ready for Integration 🚀 