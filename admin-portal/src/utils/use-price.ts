import { useMemo } from 'react';

export function formatPrice({
  amount,
  currencyCode,
  locale,
  fractions = 2,
}: {
  amount: number;
  currencyCode: string;
  locale: string;
  fractions: number;
}) {
  // Use a consistent locale to avoid hydration issues
  const safeLocale = 'en-US';
  const formatCurrency = new Intl.NumberFormat(safeLocale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits:
      fractions > 20 || fractions < 0 || !fractions ? 2 : fractions,
  });

  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
  fractions = 2,
}: {
  baseAmount: number;
  amount: number;
  currencyCode: string;
  locale: string;
  fractions: number;
}) {
  const hasDiscount = baseAmount < amount;
  const safeLocale = 'en-US';
  const formatDiscount = new Intl.NumberFormat(safeLocale, { style: 'percent' });
  const discount = hasDiscount
    ? formatDiscount.format((amount - baseAmount) / amount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale: safeLocale, fractions });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale: safeLocale, fractions })
    : null;

  return { price, basePrice, discount };
}

type PriceProps = {
  amount: number;
  baseAmount?: number;
  currencyCode?: string;
};

export default function usePrice(data?: PriceProps | null) {
  const { amount, baseAmount, currencyCode = 'USD' } = data ?? {};
  
  // Use consistent defaults to avoid hydration issues
  const locale = 'en-US';
  const fractions = 2;
  
  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';

    return baseAmount
      ? formatVariantPrice({
          amount,
          baseAmount,
          currencyCode,
          locale,
          fractions,
        })
      : formatPrice({ amount, currencyCode, locale, fractions });
  }, [amount, baseAmount, currencyCode]);

  return typeof value === 'string'
    ? { price: value, basePrice: null, discount: null }
    : value;
}
