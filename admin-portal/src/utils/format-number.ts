// Utility function for consistent number formatting
export const formatNumber = (num: number): string => {
  // Use consistent formatting to avoid hydration issues
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format currency consistently
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  // Use consistent locale to avoid hydration issues
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  
  return formatter.format(amount);
}; 