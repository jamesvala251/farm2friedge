import { cartAnimation } from '@/lib/cart-animation';
import { useCart } from '@/store/quick-cart/cart.context';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import Link from 'next/link';
import { PlusIconNew } from '@/components/icons/plus-icon';
import { MinusIconNew } from '@/components/icons/minus-icon';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
const AddToCartBtn = dynamic(
  () => import('@/components/products/add-to-cart/add-to-cart-btn'),
  {
    ssr: false,
  }
);
const Counter = dynamic(() => import('@/components/ui/counter'), {
  ssr: false,
});

interface Props {
  data: any;
  variant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'big'
    | 'text'
    | 'florine';
  counterVariant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'details'
    | 'florine';
  counterClass?: string;
  variation?: any;
  disabled?: boolean;
}

export const AddToCart = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled,
}: Props) => {
  const {
    addItemToCart,
    removeItemFromCart,
    isInStock,
    getItemFromCart,
    isInCart,
    updateCartLanguage,
    language,
  } = useCart();
  const item = generateCartItem(data, variation);
  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    // Check language and update
    if (item?.language !== language) {
      updateCartLanguage(item?.language);
    }
    addItemToCart(item, 1);
    if (!isInCart(item.id)) {
      cartAnimation(e);
    }
  };
  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItemFromCart(item.id);
  };
  const outOfStock = isInCart(item?.id) && !isInStock(item.id);
  const disabledState =
    disabled || outOfStock || data.status.toLowerCase() != 'publish';

  return !isInCart(item?.id) ? (
    <div>
      {!data?.is_external || !data?.external_product_url ? (
        variant !== 'florine' ? (
          <AddToCartBtn
            disabled={disabledState}
            variant={variant}
            onClick={handleAddClick}
          />
        ) : (
          <div className="flex w-24 items-center justify-between rounded-[0.25rem] border border-[#dbdbdb]">
            <button
              className={classNames(
                'p-2 text-base',
                disabledState || !isInCart(item?.id)
                  ? 'cursor-not-allowed text-[#c1c1c1]'
                  : 'text-accent'
              )}
              disabled={disabledState || !isInCart(item?.id)}
              onClick={handleRemoveClick}
            >
              <MinusIconNew />
            </button>
            <span className="flex-1 text-center text-sm font-semibold text-heading">
              {getItemFromCart(item?.id)?.quantity}
            </span>
            <button
              className={classNames(
                'p-2 text-base',
                disabledState
                  ? 'cursor-not-allowed text-[#c1c1c1]'
                  : 'text-accent'
              )}
              disabled={disabledState}
              onClick={handleAddClick}
            >
              <PlusIconNew />
            </button>
          </div>
        )
      ) : (
        <Link
          href={data?.external_product_url}
          className="inline-flex w-full items-center justify-center rounded bg-accent px-5 py-3 text-sm font-light text-light transition-colors duration-300 hover:bg-accent-hover focus:bg-accent-hover focus:outline-0"
        >
          Buy Now
        </Link>
      )}
    </div>
  ) : (
    <Counter
      value={getItemFromCart(item?.id)?.quantity}
      onDecrement={handleRemoveClick}
      onIncrement={handleAddClick}
      variant={counterVariant}
      disabled={disabledState}
      className={counterClass}
    />
  );
};
