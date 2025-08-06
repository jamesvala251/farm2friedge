import { StarIcon } from '@/components/icons/star-icon';
import BackButton from '@/components/ui/back-button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { ThumbsCarousel } from '@/components/ui/thumb-carousel';
import Truncate from '@/components/ui/truncate';
import { Routes } from '@/config/routes';
import { displayImage } from '@/lib/display-product-preview-images';
import { getVariations } from '@/lib/get-variations';
import { isVariationSelected } from '@/lib/is-variation-selected';
import usePrice from '@/lib/use-price';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import type { Product } from '@/types';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { useIntersection } from 'react-use';
import { useAttributes } from './attributes.context';
import CategoryBadges from './category-badges';
import VariationGroups from './variation-groups';
import VariationPrice from './variation-price';
import { useSanitizeContent } from '@/lib/sanitize-content';
const AddToCart = dynamic(
  () =>
    import('@/components/products/add-to-cart/add-to-cart').then(
      (module) => module.AddToCart,
    ),
  { ssr: false },
);

const FavoriteButton = dynamic(
  () => import('@/components/products/details/favorite-button'),
  { ssr: false },
);

type Props = {
  product: Product;
  backBtn?: boolean;
  isModal?: boolean;
};
const Details: React.FC<Props> = ({
  product,
  backBtn = true,
  isModal = false,
}) => {
  const {
    id,
    name,
    image, //could only had image we need to think it also
    description,
    unit,
    categories,
    gallery,
    type,
    quantity,
    shop,
    slug,
    ratings,
    video,
    product_type,
  } = product ?? {};

  const [_, setShowStickyShortDetails] = useAtom(stickyShortDetailsAtom);

  const router = useRouter();
  const { closeModal } = useModalAction();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setShowStickyShortDetails(false);
      return;
    }
    if (intersection && !intersection.isIntersecting) {
      setShowStickyShortDetails(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection]);
  const { attributes } = useAttributes();

  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price,
    baseAmount: product?.price,
  });

  const navigate = (path: string) => {
    router.push(path);
    closeModal();
  };

  const variations = useMemo(
    () =>
      product_type?.toLowerCase() === 'variable' &&
      getVariations(product?.variations),
    [product?.variations, product_type],
  );
  const isSelected = isVariationSelected(variations, attributes);
  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort(),
      ),
    );
  }

  const scrollDetails = () => {
    scroller.scrollTo('details', {
      smooth: true,
      offset: -80,
    });
  };

  const hasVariations =
    !isEmpty(variations) && product_type?.toLowerCase() === 'variable';
  const previewImages = displayImage(selectedVariation?.image, gallery, image);
  const content = useSanitizeContent({ description: description });
  return (
    <article className="rounded-lg bg-light">
      <div className="flex flex-col border-b border-border-200 border-opacity-70 md:flex-row">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="mb-8 flex items-center justify-between lg:mb-10">
            {backBtn && <BackButton />}
            {discount && (
              <div className="rounded-full bg-yellow-500 px-3 text-xs font-semibold leading-6 text-light ltr:ml-auto rtl:mr-auto">
                {discount}
              </div>
            )}
          </div>

          <div className="product-gallery h-full">
            <ThumbsCarousel
              gallery={previewImages}
              video={video}
              hideThumbs={
                previewImages.length && video?.length
                  ? false
                  : previewImages.length <= 1
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full" ref={intersectionRef}>
            <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
              <h1
                className={classNames(
                  `text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl`,
                  {
                    'cursor-pointer transition-colors hover:text-accent':
                      isModal,
                  },
                )}
                {...(isModal && {
                  onClick: () => navigate(Routes.product(slug)),
                })}
              >
                {name}
              </h1>

              <div>
                <FavoriteButton
                  productId={id}
                  className={classNames({ 'mr-1': isModal })}
                />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {unit && !hasVariations && (
                <span className="block text-sm font-normal text-body">
                  {unit}
                </span>
              )}

              {isModal && (
                <div className="inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white">
                  {ratings}
                  <StarIcon className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1" />
                </div>
              )}
            </div>

            {content && (
              <div className="mt-3 text-sm leading-7 text-body md:mt-4 react-editor-description">
                <Truncate
                  character={150}
                  {...(!isModal && {
                    onClick: () => scrollDetails(),
                    compressText: 'common:text-see-more',
                  })}
                >
                  {content}
                </Truncate>
              </div>
            )}

            {hasVariations ? (
              <>
                <div className="my-5 flex items-center md:my-10">
                  <VariationPrice
                    selectedVariation={selectedVariation}
                    minPrice={product.min_price}
                    maxPrice={product.max_price}
                  />
                </div>
                <div>
                  <VariationGroups variations={variations} />
                </div>
              </>
            ) : (
              <span className="my-5 flex items-center md:my-10">
                <ins className="text-2xl font-semibold text-accent no-underline md:text-3xl">
                  {price}
                </ins>
                {basePrice && (
                  <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
                    {basePrice}
                  </del>
                )}
              </span>
            )}

            <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
              {Number(quantity) > 0 ? (
                <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                  <AddToCart
                    data={product}
                    variant="big"
                    variation={selectedVariation}
                    disabled={selectedVariation?.is_disable || !isSelected}
                  />
                </div>
              ) : (
                ''
              )}

              {!product?.is_external
                ? !hasVariations && (
                    <>
                      {Number(quantity) > 0 ? (
                        <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                          {quantity} pieces available
                        </span>
                      ) : (
                        <div className="whitespace-nowrap text-base text-red-500">
                          Out of Stock
                        </div>
                      )}
                    </>
                  )
                : ''}

              {!isEmpty(selectedVariation) && (
                <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                  {selectedVariation?.is_disable ||
                  selectedVariation.quantity === 0
                    ? 'Out of Stock'
                    : `${selectedVariation.quantity} pieces available`}
                </span>
              )}
            </div>
          </div>

          {!!categories?.length && (
            <CategoryBadges
              categories={categories}
              basePath={`/${type?.slug}`}
              onClose={closeModal}
            />
          )}

          {shop?.name && (
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                Seller
              </span>

              <button
                onClick={() => navigate(Routes.shop(shop?.slug))}
                className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline"
              >
                {shop?.name}
              </button>
            </div>
          )}

          {/* Brand Information */}
          {(product as any)?.brand?.name && (
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                Brand
              </span>
              <span className="text-sm text-body">
                {(product as any).brand.name}
              </span>
            </div>
          )}

          {/* Tags Information */}
          {product?.tags && product.tags.length > 0 && (
            <div className="mt-2 flex items-start">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                  >
                    {tag.name || tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Product Type */}
          {product?.product_type && (
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                Type
              </span>
              <span className="text-sm text-body capitalize">
                {product.product_type}
              </span>
            </div>
          )}

          {/* Vendor Rating */}
          {(product as any)?.vendor?.rating && (
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                Vendor Rating
              </span>
              <div className="flex items-center">
                <span className="text-sm text-body ltr:mr-1 rtl:ml-1">
                  {(product as any).vendor.rating}
                </span>
                <StarIcon className="h-3 w-3 text-yellow-400" />
                <span className="text-sm text-gray-500 ltr:ml-1 rtl:mr-1">
                  ({(product as any).vendor.total_reviews} reviews)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Element
        name="details"
        className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14"
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
          Details
        </h2>
        {content ? (
          <p
            className="text-sm text-body react-editor-description"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        ) : (
          ''
        )}
      </Element>
    </article>
  );
};

export default Details;
