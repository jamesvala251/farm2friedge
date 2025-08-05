import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';

export default function ClassicLayout({ variables }: HomePageProps) {
  return (
    <>
      {/* Hero Banner - Show on all devices */}
      <Banner layout="classic" variables={variables.types} />
      
      {/* Desktop Categories */}
      <div className="hidden lg:block bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Categories layout="dropdown" variables={variables.categories} />
        </div>
      </div>
      
      {/* Promotion Sliders - Below Categories */}
      <PromotionSliders variables={variables.types} />
      
      {/* Simple Product Grid - No Sidebar */}
      <div className="w-full bg-light py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between mb-7 md:flex-row">
            {/* Mobile: Category Button + Title, Desktop: Just Title */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Mobile Category Button */}
              <div className="lg:hidden">
                <Categories layout="dropdown" variables={variables.categories} />
              </div>
              <div className="text-lg font-semibold text-heading">
                Featured Products
              </div>
            </div>
            {/* Hide sort dropdown on mobile */}
            <div className="hidden md:block max-w-xs mt-4 md:mt-0">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          <ProductGridHome
            className="w-full"
            variables={variables.products}
          />
        </div>
      </div>
    </>
  );
}
