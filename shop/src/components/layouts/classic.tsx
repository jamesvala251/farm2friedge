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
      <Banner layout="classic" variables={variables.types} />
      
      {/* Categories moved to horizontal position after banner */}
      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Categories layout="simple" variables={variables.categories} />
        </div>
      </div>
      
      {/* Promotion Sliders hidden for now - can be re-enabled later */}
      {/* <div className="mt-4">
        <PromotionSliders variables={variables.types} />
      </div> */}
      
      {/* FilterBar hidden - not needed on home page */}
      {/* <FilterBar variables={variables.categories} /> */}
      
      <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        {/* Categories sidebar removed from here since it's now horizontal */}
        <ProductGridHome
          className="px-4 pt-3.5 pb-16 lg:p-6 xl:p-8 w-full"
          variables={variables.products}
        />
      </Element>
    </>
  );
}
