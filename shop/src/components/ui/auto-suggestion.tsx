import { useRouter } from 'next/router';
import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { Routes } from '@/config/routes';
import { Transition } from '@headlessui/react';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useModalAction } from '@/components/ui/modal/modal.context';

type Props = {
  className?: string;
  suggestions: any;
  visible: boolean;
  notFound: boolean;
  showLoaders: boolean;
  seeMore: boolean;
  seeMoreLink: (e: any) => void;
};

const AutoSuggestion: React.FC<Props> = ({
  className,
  suggestions,
  visible,
  notFound,
  showLoaders,
  seeMore,
  seeMoreLink,
}) => {
  const router = useRouter();
  const { openModal } = useModalAction();

  const handleClick = (slug: string) => {
    openModal('PRODUCT_DETAILS', slug);
  };

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={cn(
          'absolute top-11 left-0 mt-2 w-full lg:top-16 lg:mt-1 z-50',
          className
        )}
      >
        <div className="h-full w-full rounded-lg bg-white py-2 shadow-downfall-lg border border-gray-200">
          <Scrollbar className="h-full w-full">
            {notFound && (
              <div className="flex h-full w-full items-center justify-center py-8">
                <div className="text-center">
                  <div className="text-gray-400 text-4xl mb-2">🔍</div>
                  <h3 className="font-semibold text-gray-500 mb-1">No products found</h3>
                  <p className="text-sm text-gray-400">Try different keywords</p>
                </div>
              </div>
            )}

            {showLoaders && (
              <div className="flex h-full w-full items-center justify-center py-14">
                <Spinner simple={true} className="h-9 w-9" />
              </div>
            )}

            {!notFound && !showLoaders && (
              <div className="max-h-80">
                {suggestions?.map((item: any) => (
                  <div
                    onClick={() => handleClick(item?.slug)}
                    key={item?.slug}
                    className="flex w-full cursor-pointer items-center border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 hover:bg-orange-50 hover:border-orange-200"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        className="h-full w-full object-cover"
                        src={item?.image?.original ?? productPlaceholder}
                        alt={item?.name ?? ''}
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="flex-1 ltr:ml-3 rtl:mr-3 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {item?.name}
                        </span>
                        <span className="text-sm font-semibold text-orange-600 ml-2">
                          ${item?.sale_price || item?.price}
                        </span>
                      </div>
                      
                      {item?.vendor && (
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            by {item.vendor.name}
                          </span>
                          {item.vendor.rating && (
                            <div className="flex items-center ml-2">
                              <span className="text-xs text-yellow-500">★</span>
                              <span className="text-xs text-gray-500 ml-1">
                                {item.vendor.rating}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Scrollbar>
          {seeMore && suggestions?.length > 0 && (
            <div className="w-full py-3 text-center border-t border-gray-100">
              <button
                onClick={seeMoreLink}
                className="text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700 px-4 py-2 rounded-md hover:bg-orange-50"
              >
                View all results ({suggestions?.length || 0})
              </button>
            </div>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default AutoSuggestion;
