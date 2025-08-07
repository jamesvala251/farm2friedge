// Cart utility functions
export const getCartItemPrice = (item: any) => {
  return item.price * item.quantity;
};

export const getCartTotal = (items: any[]) => {
  return items.reduce((total, item) => total + getCartItemPrice(item), 0);
};

export const getCartItemCount = (items: any[]) => {
  return items.reduce((count, item) => count + item.quantity, 0);
}; 