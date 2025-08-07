// Generate cart item utility
export const generateCartItem = (product: any, attributes: any = {}) => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    attributes,
    image: product.image,
  };
}; 