import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import StickyBox from 'react-sticky-box';
import SidebarFilter from '@/components/search-view/sidebar-filter';

export default function ClassicLayout({ variables }: HomePageProps) {
  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      
      {/* Categories moved to horizontal position after banner */}
      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Categories layout="dropdown" variables={variables.categories} />
        </div>
      </div>
      
      {/* Promotion Sliders hidden for now - can be re-enabled later */}
      {/* <div className="mt-4">
        <PromotionSliders variables={variables.types} />
      </div> */}
      
      {/* FilterBar hidden - not needed on home page */}
      {/* <FilterBar variables={variables.categories} /> */}
      
      {/* Hybrid Layout: Sticky Sidebar + Product Grid */}
      <div className="w-full bg-light">
        <div className="flex w-full min-h-screen px-5 py-10 mx-auto max-w-1920 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16">
          {/* Sticky Sidebar - Using existing SidebarFilter */}
          <div className="hidden w-80 shrink-0 lg:block">
            <StickyBox offsetTop={140} offsetBottom={30}>
              <SidebarFilter />
            </StickyBox>
          </div>
          
          {/* Main Content - Product Grid */}
          <div className="w-full">
            <div className="flex flex-col items-center justify-between mb-7 md:flex-row">
              <div className="text-lg font-semibold text-heading">
                Featured Products
              </div>
              <div className="max-w-xs mt-4 md:mt-0">
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
      </div>
    </>
  );
}
