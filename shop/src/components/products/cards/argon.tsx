import { Image } from '@/components/ui/image';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Rating from '@/components/ui/rating';
const AddToCart = dynamic(
  () =>
    import('@/components/products/add-to-cart/add-to-cart').then(
      (module) => module.AddToCart,
    ),
  { ssr: false },
);

import usePrice from '@/lib/use-price';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { PlusIcon } from '@/components/icons/plus-icon';
import { ExternalIcon } from '@/components/icons/external-icon';
import { useRouter } from 'next/router';

type ArgonProps = {
  product: any;
  className?: string;
};

const Argon: React.FC<ArgonProps> = ({ product, className }) => {
  const { query } = useRouter();
  const {
    name,
    image,
    quantity,
    min_price,
    max_price,
    product_type,
    is_external,
  } = product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });
  const { price: minPrice } = usePrice({
    amount: min_price,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price,
  });

  const { openModal } = useModalAction();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }

  return (
    <article
      className={cn(
        'product-card cart-type-argon h-full transform overflow-hidden rounded bg-light shadow-downfall-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg',
        className
      )}
      onClick={handleProductQuickView}
      role="button"
    >
      <div
        className={cn(
          'relative flex h-48 w-auto items-center justify-center sm:h-52',
          query?.pages
            ? query?.pages?.includes('medicine')
              ? 'm-4 mb-0'
              : ''
            : ''
        )}
      >
        <span className="sr-only">Product image</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw"
          className="product-image object-contain"
        />

        {discount && (
          <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:left-3 rtl:right-3 sm:px-2 md:top-[22px] md:px-2.5 ltr:md:left-4 rtl:md:right-4">
            {discount}
          </div>
        )}

        <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4">
          {product_type.toLowerCase() === 'variable' || is_external ? (
            <>
              {Number(quantity) > 0 && (
                <button
                  onClick={handleProductQuickView}
                  className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-heading transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:w-9"
                >
                  {is_external ? (
                    <ExternalIcon className="h-5 w-5 stroke-2" />
                  ) : (
                    <PlusIcon className="h-5 w-5 stroke-2" />
                  )}
                </button>
              )}
            </>
          ) : (
            <AddToCart
              variant="argon"
              data={product}
            />
          )}
        </div>
      </div>

      <header className="p-3 md:p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="mb-1 truncate text-sm font-semibold leading-6 text-heading transition-colors group-hover:text-accent md:text-base">
            {name}
          </h3>
        </div>
        
        {/* Rating Section */}
        <div className="mb-2">
          <Rating
            rating={product.ratings || 0}
            totalReviews={product.total_reviews || 0}
            size="sm"
            showCount={false}
            className="mb-1"
          />
          {product.total_reviews > 0 && (
            <span className="text-xs text-gray-500">
              ({product.total_reviews} {product.total_reviews === 1 ? 'review' : 'reviews'})
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-bold text-heading md:text-base">
              {product_type.toLowerCase() === 'variable' ? (
                <span>
                  {minPrice} - {maxPrice}
                </span>
              ) : (
                <span>{price}</span>
              )}
            </span>
            {basePrice && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>
            )}
          </div>
          {Number(quantity) <= 0 && (
            <span className="text-xs text-red-500 md:text-sm">Out of stock</span>
          )}
        </div>
      </header>
    </article>
  );
};

export default Argon;
