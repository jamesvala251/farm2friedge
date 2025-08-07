// Site settings for eGroceryMart Admin Portal
export const siteSettings = {
  name: 'eGroceryMart Admin',
  description: 'Grocery Marketplace Admin Portal',
  logo: {
    url: '/logo.svg',
    alt: 'eGroceryMart',
    width: 128,
    height: 40,
  },
  logoPlaceholder: {
    url: '/logo-placeholder.svg',
    alt: 'eGroceryMart',
    width: 128,
    height: 40,
  },
  collapseLogo: {
    url: '/logo-collapse.svg',
    alt: 'eGroceryMart',
    width: 40,
    height: 40,
  },
  product: {
    placeholder: '/img/placeholder-product.svg',
  },
  useOtp: false,
  currency: 'USD',
  currencyToUSD: 1,
  defaultLanguage: 'en',
  deliveryTime: [
    { title: 'Express Delivery', description: '90 min express delivery' },
    { title: 'Standard Delivery', description: '2-3 hours delivery' },
    { title: 'Free Delivery', description: '5-6 hours delivery' },
  ],
  freeDeliveryAmount: 0,
  freeDeliveryKm: 0,
  minimumOrderAmount: 0,
  seo: {
    metaTitle: 'eGroceryMart Admin Portal',
    metaDescription: 'Admin portal for eGroceryMart grocery marketplace',
    ogTitle: 'eGroceryMart Admin Portal',
    ogDescription: 'Admin portal for eGroceryMart grocery marketplace',
    ogImage: {
      id: 1,
      original: '/og-image.jpg',
      thumbnail: '/og-image.jpg',
    },
    canonicalUrl: 'https://egrocerymart.com',
    twitterHandle: '@egrocerymart',
    twitterCardType: 'summary_large_image',
  },
  contactDetails: {
    contact: '+1234567890',
    website: 'https://egrocerymart.com',
    socials: [
      { icon: 'FacebookIcon', link: 'https://facebook.com/egrocerymart' },
      { icon: 'TwitterIcon', link: 'https://twitter.com/egrocerymart' },
      { icon: 'InstagramIcon', link: 'https://instagram.com/egrocerymart' },
    ],
  },
  minimumOrderAmountForFreeShipping: 0,
  freeShippingAmount: 0,
  freeShippingKm: 0,
  taxClass: 'food-grocery-tax',
  shippingClass: 'food-grocery-shipping',
  sidebarLinks: {
    admin: {
      settings: {
        childMenu: [
          {
            childMenu: [
              { href: '/settings/general', label: 'General Settings' },
              { href: '/settings/company', label: 'Company Information' },
            ]
          }
        ]
      }
    }
  },
  socialIcon: [
    { value: 'FacebookIcon', label: 'Facebook' },
    { value: 'TwitterIcon', label: 'Twitter' },
    { value: 'InstagramIcon', label: 'Instagram' },
  ],
}; 