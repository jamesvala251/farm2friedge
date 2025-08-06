import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
//  import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { PlusIcon } from '@/components/icons/plus-icon';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Rating from '@/components/ui/rating';

const AddToCart = dynamic(
  () =>
    import('@/components/products/add-to-cart/add-to-cart').then(
      (module) => module.AddToCart
    ),
  { ssr: false }
);

type NeonProps = {
  product: any;
  className?: string;
};

const Neon: React.FC<NeonProps> = ({ product, className }) => {
  const { query } = useRouter();
  const { name, image, quantity, min_price, max_price, product_type } =
    product ?? {};
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
        'product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow',
        className
      )}
    >
      <div
        className={cn(
          'relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64',
          query?.pages
            ? query?.pages?.includes('medicine')
              ? 'm-4 mb-0'
              : ''
            : ''
        )}
        onClick={handleProductQuickView}
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
          <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
            {discount}
          </div>
        )}
      </div>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        {product_type.toLowerCase() === 'variable' ? (
          <div className="mb-2">
            <span className="text-sm font-semibold text-heading md:text-base">
              {minPrice}
            </span>
            <span> - </span>
            <span className="text-sm font-semibold text-heading md:text-base">
              {maxPrice}
            </span>
          </div>
        ) : (
          <div className="mb-2 flex items-center">
            <span className="text-sm font-semibold text-heading md:text-base">
              {price}
            </span>
            {basePrice && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>
            )}
          </div>
        )}
        {/* End of product price */}

        {/* Rating Section */}
        <div className="mb-2">
          <Rating
            rating={product.ratings || 0}
            totalReviews={product.total_reviews || 0}
            size="sm"
            showCount={false}
            className="mb-1"
          />
        </div>

        <h3 className="text-xs text-body md:text-sm">{name}</h3>
        {/* End of product title */}
      </header>
    </article>
  );
};

export default Neon;
