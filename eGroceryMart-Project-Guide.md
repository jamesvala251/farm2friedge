# eGroceryMart - Complete Project Guide

## 🎯 **Project Overview**
**Front-end demo for eGroceryMart** based on Pickbazar React template. Using static/mock data, no live backend required.

---

## ✅ **COMPLETED TASKS**

### **1. Project Setup & Structure**
- ✅ Removed `api/` folder (backend)
- ✅ Set up mock API with static data in `shop/src/framework/rest/client/mock-api.ts`
- ✅ Fixed Jest testing issues (`flatMap`, `toLowerCase()`)
- ✅ Added console warning suppression

### **2. Header & Footer Restructuring**
- ✅ Moved search box to top header (accessible on all pages)
- ✅ Moved menu items to large, organized footer
- ✅ Removed "Manufacturers" and "Authors" links
- ✅ Removed "Subscribe Now" section

### **3. Home Page Layout**
- ✅ Implemented "Flipkart-style" home page
- ✅ Added hero banner with ads slider
- ✅ Created horizontal categories below hero
- ✅ Added promotion slider
- ✅ Implemented responsive design (mobile + desktop)

### **4. Categories System**
- ✅ Created hierarchical category structure (11 main + sub-categories)
- ✅ Implemented dropdown categories with click functionality
- ✅ Added mobile category modal
- ✅ Created card-based desktop layout
- ✅ Added custom dropdown indicators

### **5. Banner & Promotion System**
- ✅ Added 2 local banner images (`/img/banners/`)
- ✅ Added 5 promotion slider images (`/promotion/`)
- ✅ Fixed banner visibility on mobile
- ✅ Added auto-slide functionality
- ✅ Hidden text/button overlays

### **6. Product System**
- ✅ Added 12 products with mock data
- ✅ Implemented smart image mapping (local + online)
- ✅ Fixed product image structure
- ✅ Added proper product cards
- ✅ Implemented responsive product grid

### **7. Search Page Integration**
- ✅ Integrated with existing `/grocery/search` page
- ✅ Category navigation to search page
- ✅ URL parameter handling (`?category=slug&subcategory=slug`)

---

## 📋 **PENDING TASKS**

### **1. Search & Filtering**
- [ ] Add Brands to sidebar filters (on search page)
- [ ] Add Vendors to sidebar filters (on search page)
- [ ] Implement product search with autocomplete
- [ ] Implement location-based vendor filtering
- [ ] Add search history and popular searches

### **2. Product Features**
- [ ] Implement product comparison features
- [ ] Implement recently viewed products
- [ ] Add out-of-stock marking
- [ ] Add product quick view modal
- [ ] Implement wishlist functionality (already exists, needs integration)

### **3. Admin Settings**
- [ ] Create admin setting for theme color changes
- [ ] Add theme customization panel
- [ ] Implement color scheme management

### **4. Additional Features**
- [ ] Add more products (expand catalog)
- [ ] Implement shopping cart functionality
- [ ] Add user authentication system
- [ ] Create checkout process
- [ ] Add payment integration

### **5. UI/UX Improvements**
- [ ] Add loading animations
- [ ] Improve mobile navigation
- [ ] Add product image gallery
- [ ] Implement product reviews system
- [ ] Add social sharing features

---

## 🎯 **NEXT PRIORITY TASKS**
1. **Add more products** to expand catalog
2. **Implement search functionality** with autocomplete
3. **Add brands and vendors** to sidebar filters
4. **Create admin theme settings**
5. **Add shopping cart functionality**

---

## 🏗️ **IMPORTANT FILES & COMPONENTS**

### **Core Files:**
- **Mock Data**: `shop/src/framework/rest/client/mock-api.ts`
- **Home Layout**: `shop/src/components/layouts/classic.tsx`
- **Categories**: `shop/src/components/categories/dropdown-categories.tsx`
- **Banner**: `shop/src/components/banners/banner-with-search.tsx`
- **Products**: `shop/src/components/products/cards/neon.tsx`

### **Existing Components to RE-USE:**
- **Modal**: `shop/src/components/ui/modal/modal.tsx`
- **Search**: `shop/src/components/ui/search/search.tsx`
- **Sidebar Filter**: `shop/src/components/search-view/sidebar-filter.tsx`
- **Product Grid**: `shop/src/components/products/grid.tsx`
- **Wishlist**: Already exists in product details
- **Cart**: Existing cart functionality

---

## 🧠 **KEY LEARNINGS & BEST PRACTICES**

### **1. Component Reusability**
- **ALWAYS CHECK EXISTING COMPONENTS FIRST!**
- Don't create new components if similar ones exist
- Re-use: Modal, Search, Sidebar Filter, Product Grid
- Example: We created new category components but should have used existing ones

### **2. Mock Data Structure**
```javascript
// Product Image Structure (IMPORTANT!)
image: {
  id: 1,
  original: "/img/product.webp",  // or online URL
  thumbnail: "/img/product.webp"
}

// Banner Structure
banners: [{
  id: 1,
  title: "Banner Title",
  description: "Description",
  image: {
    id: 1,
    original: "/img/banners/banner-1.jpg",
    thumbnail: "/img/banners/banner-1.jpg"
  }
}]
```

### **3. Image Management**
- **Local Images**: Use `/img/` folder for product images
- **Online Fallback**: Use Unsplash URLs when local not available
- **Smart Mapping**: Match product names with image names
- **WebP Format**: Better compression and quality

### **4. Responsive Design**
- **Mobile**: `mt-4` margin, hidden sort dropdown, category modal
- **Desktop**: `mt-16` margin, full category dropdown, sort options
- **Banner Heights**: Responsive heights for different screen sizes

### **5. Category System**
- **Hierarchical**: Parent categories with sub-categories
- **URL Parameters**: `?category=slug&subcategory=slug`
- **Auto-selection**: Based on URL parameters
- **Click Navigation**: Categories link to search page

---

## 🛠️ **TECHNICAL NOTES**

### **Framework & Tools:**
- **Framework**: Next.js + React
- **Styling**: Tailwind CSS
- **Images**: Local WebP + Unsplash fallback
- **State Management**: React hooks
- **Mock API**: Custom interceptor

### **File Structure:**
```
shop/
├── src/
│   ├── components/
│   │   ├── layouts/classic.tsx
│   │   ├── categories/dropdown-categories.tsx
│   │   ├── banners/banner-with-search.tsx
│   │   └── products/cards/neon.tsx
│   └── framework/rest/client/mock-api.ts
└── public/
    ├── img/ (product images)
    ├── img/banners/ (banner images)
    └── promotion/ (promotion images)
```

### **Common Issues & Solutions:**
1. **Image Not Loading**: Check image structure (needs `original` property)
2. **Mobile Banner Hidden**: Change `hidden lg:block` to `block`
3. **Categories Not Working**: Ensure proper data structure with `children`
4. **Products Not Showing**: Check mock API response format

---

## 🚀 **DEVELOPMENT WORKFLOW**

### **Before Creating New Features:**
1. **Check existing components** - Don't reinvent the wheel
2. **Look at similar functionality** - Re-use patterns
3. **Check mock data structure** - Ensure proper format
4. **Test on mobile and desktop** - Always responsive

### **When Adding New Products:**
1. **Find matching local images** first
2. **Use online URLs** as fallback
3. **Follow image structure** with `original` and `thumbnail`
4. **Add to appropriate category**

### **When Modifying Layout:**
1. **Check mobile responsiveness**
2. **Test category navigation**
3. **Verify banner visibility**
4. **Ensure proper spacing**

---

## 📱 **MOBILE vs DESKTOP BEHAVIORS**

### **Mobile:**
- Hero banner visible with `mt-4` margin
- Category button (icon) opens modal
- Sort dropdown hidden
- Compact product grid
- Touch-friendly interactions

### **Desktop:**
- Hero banner with `mt-16` margin
- Full category dropdown with click functionality
- Sort dropdown visible
- Larger product grid
- Hover effects and animations

---

## 🎨 **DESIGN PATTERNS**

### **Color Scheme:**
- **Primary**: Orange theme (`orange-500`, `orange-600`)
- **Background**: White (`bg-white`)
- **Text**: Gray (`text-gray-900`, `text-gray-600`)
- **Borders**: Light gray (`border-gray-200`)

### **Spacing:**
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Sections**: `py-6`, `py-8`
- **Cards**: `p-3 md:p-6`
- **Margins**: `mt-4` (mobile), `mt-16` (desktop)

---

## 🔧 **QUICK COMMANDS**

### **Start Development:**
```bash
cd shop
npm run dev
```

### **Check for Errors:**
```bash
npm run build
npm run lint
```

### **Add New Images:**
1. Place in `shop/public/img/`
2. Update mock data in `mock-api.ts`
3. Use proper image structure

---

## 📞 **SUPPORT NOTES**

### **When Starting New Chat:**
1. Share this MD file
2. Mention current status
3. Reference specific file paths
4. Note any ongoing issues

### **Common Questions:**
- **"Where are images stored?"** → `shop/public/img/`
- **"How to add products?"** → Update `mock-api.ts`
- **"Why images not showing?"** → Check image structure
- **"Mobile not working?"** → Check responsive classes

---

**🎯 REMEMBER: Always check existing components before creating new ones!**

**🚀 Ready for next phase of development!** 