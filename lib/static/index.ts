import { Cart } from './models/cart';
import { Collection } from './models/collection';
import { Menu } from './models/menu';
import { Page } from './models/page';
import { Product } from './models/product';

// Mock data

const mockPages: Page[] = [
  {
    id: 'page123456',
    title: 'About Us',
    handle: 'about-us',
    body: 'This is the about us page.',
    bodySummary: 'This is the about us page.',
    seo: {
      title: 'About Us | Our Store',
      description: 'Learn more about our store and what we offer.'
    },
    createdAt: '2023-04-15T14:30:00Z',
    updatedAt: '2023-04-15T14:30:00Z'
  },
  {
    id: 'page123457',
    title: 'Contact Us',
    handle: 'contact-us',
    body: 'This is the contact us page.',
    bodySummary: 'This is the contact us page.',
    seo: {
      title: 'Contact Us | Our Store',
      description: 'Get in touch with us for any questions or concerns.'
    },
    createdAt: '2023-04-15T14:30:00Z',
    updatedAt: '2023-04-15T14:30:00Z'
  }
];

const mockMenu: Menu = {
  items: [
    { title: 'Ana Sayfa', url: '/' },
    { title: 'Seramik', url: '/search/collections' },
    { title: 'Hat', url: '/search/cart' },
    { title: 'Özel Parçalar', url: '/search/account' }
  ]
};

const mockProducts: Product[] = [
  {
    id: 'classic-leather-jacket',
    handle: 'classic-leather-jacket',
    availableForSale: true,
    title: 'Classic Leather Jacket',
    description: 'A timeless leather jacket that never goes out of style.',
    descriptionHtml: '<p>A timeless leather jacket that never goes out of style.</p>',
    options: [
      {
        id: 'opt_123456789',
        name: 'Size',
        values: ['S', 'M', 'L', 'XL']
      },
      {
        id: 'opt_987654321',
        name: 'Color',
        values: ['Black', 'Brown', 'Red']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '179.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '229.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_12345',
        title: 'Medium / Black',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Medium'
          },
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '199.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_67890',
        title: 'Large / Brown',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Large'
          },
          {
            name: 'Color',
            value: 'Brown'
          }
        ],
        price: {
          amount: '209.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/1.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/1.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/1.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/1.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Classic Leather Jacket | Fashion Emporium',
      description:
        'Elevate your style with our timeless Classic Leather Jacket. Available in multiple sizes and colors.'
    },
    tags: ['leather', 'jacket', 'outerwear', 'fashion', 'premium'],
    updatedAt: '2023-09-30T10:15:00Z'
  },
  {
    id: 'wireless-bluetooth-headphones',
    handle: 'wireless-bluetooth-headphones',
    availableForSale: true,
    title: 'Premium Wireless Bluetooth Headphones',
    description: 'Immerse yourself in crystal-clear audio with our premium wireless headphones.',
    descriptionHtml:
      '<p>Immerse yourself in crystal-clear audio with our premium wireless headphones.</p>',
    options: [
      {
        id: 'opt_234567890',
        name: 'Color',
        values: ['Black', 'White', 'Rose Gold']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '149.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '169.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_23456',
        title: 'Black',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '149.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_34567',
        title: 'Rose Gold',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Rose Gold'
          }
        ],
        price: {
          amount: '169.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/7.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/7.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/7.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Premium Wireless Bluetooth Headphones | Tech Haven',
      description:
        'Experience superior sound quality with our Premium Wireless Bluetooth Headphones. Available in multiple stylish colors.'
    },
    tags: ['electronics', 'audio', 'wireless', 'bluetooth', 'headphones'],
    updatedAt: '2023-10-15T09:30:00Z'
  },
  {
    id: 'organic-cotton-t-shirt',
    handle: 'organic-cotton-t-shirt',
    availableForSale: true,
    title: 'Organic Cotton T-Shirt',
    description: 'Comfortable and eco-friendly organic cotton t-shirt for everyday wear.',
    descriptionHtml:
      '<p>Comfortable and eco-friendly organic cotton t-shirt for everyday wear.</p>',
    options: [
      {
        id: 'opt_345678901',
        name: 'Size',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'opt_456789012',
        name: 'Color',
        values: ['White', 'Black', 'Gray', 'Navy']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '24.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_45678',
        title: 'Medium / White',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Medium'
          },
          {
            name: 'Color',
            value: 'White'
          }
        ],
        price: {
          amount: '24.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_56789',
        title: 'Large / Navy',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Large'
          },
          {
            name: 'Color',
            value: 'Navy'
          }
        ],
        price: {
          amount: '26.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/4.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/4.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/4.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Organic Cotton T-Shirt | Eco Apparel',
      description:
        'Stay comfortable and eco-conscious with our Organic Cotton T-Shirt. Available in various sizes and colors.'
    },
    tags: ['clothing', 'organic', 'cotton', 't-shirt', 'eco-friendly'],
    updatedAt: '2023-11-05T14:45:00Z'
  },
  {
    id: 'prod_246813579',
    handle: 'smart-home-security-camera',
    availableForSale: true,
    title: 'Smart Home Security Camera',
    description: 'Keep your home safe with our advanced smart security camera system.',
    descriptionHtml: '<p>Keep your home safe with our advanced smart security camera system.</p>',
    options: [
      {
        id: 'opt_567890123',
        name: 'Resolution',
        values: ['1080p', '4K']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '129.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '199.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_67890',
        title: '1080p',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Resolution',
            value: '1080p'
          }
        ],
        price: {
          amount: '129.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_78901',
        title: '4K',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Resolution',
            value: '4K'
          }
        ],
        price: {
          amount: '199.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/8.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/8.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/8.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Smart Home Security Camera | SafeGuard Tech',
      description:
        'Protect your home with our advanced Smart Home Security Camera. Available in 1080p and 4K resolutions.'
    },
    tags: ['electronics', 'security', 'smart home', 'camera', 'wifi'],
    updatedAt: '2023-12-01T11:20:00Z'
  },
  {
    id: 'prod_369258147',
    handle: 'ergonomic-office-chair',
    availableForSale: true,
    title: 'Ergonomic Office Chair',
    description: 'Enhance your work-from-home setup with our comfortable ergonomic office chair.',
    descriptionHtml:
      '<p>Enhance your work-from-home setup with our comfortable ergonomic office chair.</p>',
    options: [
      {
        id: 'opt_678901234',
        name: 'Color',
        values: ['Black', 'Gray', 'Blue']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '249.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '279.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_89012',
        title: 'Black',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '249.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_90123',
        title: 'Blue',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Blue'
          }
        ],
        price: {
          amount: '279.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/10.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/10.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/10.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Ergonomic Office Chair | Comfort Works',
      description:
        'Improve your posture and comfort with our Ergonomic Office Chair. Perfect for long work hours.'
    },
    tags: ['furniture', 'office', 'chair', 'ergonomic', 'work from home'],
    updatedAt: '2024-01-10T16:00:00Z'
  },
  {
    id: 'prod_159753684',
    handle: 'stainless-steel-water-bottle',
    availableForSale: true,
    title: 'Insulated Stainless Steel Water Bottle',
    description:
      'Stay hydrated on-the-go with our durable and eco-friendly insulated water bottle.',
    descriptionHtml:
      '<p>Stay hydrated on-the-go with our durable and eco-friendly insulated water bottle.</p>',
    options: [
      {
        id: 'opt_789012345',
        name: 'Size',
        values: ['500ml', '750ml', '1L']
      },
      {
        id: 'opt_890123456',
        name: 'Color',
        values: ['Silver', 'Black', 'Teal', 'Pink']
      }
    ],
    priceRange: {
      minVariantPrice: {
        amount: '24.99',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '34.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'var_01234',
        title: '500ml / Silver',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: '500ml'
          },
          {
            name: 'Color',
            value: 'Silver'
          }
        ],
        price: {
          amount: '24.99',
          currencyCode: 'USD'
        }
      },
      {
        id: 'var_12345',
        title: '1L / Teal',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: '1L'
          },
          {
            name: 'Color',
            value: 'Teal'
          }
        ],
        price: {
          amount: '34.99',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: '/images/ser/13.jpg',
      altText: 'Insulated stainless steel water bottle in silver',
      width: 1600,
      height: 1600
    },
    images: [
      {
        url: '/images/ser/13.jpg',
        altText: 'Insulated stainless steel water bottle in silver',
        width: 1600,
        height: 1600
      },
      {
        url: '/images/ser/13.jpg',
        altText: 'Insulated stainless steel water bottle in teal',
        width: 1600,
        height: 1600
      }
    ],
    seo: {
      title: 'Insulated Stainless Steel Water Bottle | EcoHydrate',
      description:
        'Keep your drinks cold for hours with our Insulated Stainless Steel Water Bottle. Available in various sizes and colors.'
    },
    tags: ['drinkware', 'eco-friendly', 'stainless steel', 'insulated', 'water bottle'],
    updatedAt: '2024-02-20T13:15:00Z'
  }
];

const mockCollections: Collection[] = [
  {
    handle: 'ceramics',
    title: 'Seramik',
    description: 'Beat the heat with our curated collection of summer must-haves.',
    seo: {
      title: 'Summer Essentials Collection | Fashion Emporium',
      description:
        'Discover our handpicked selection of summer essentials. Stay cool and stylish all season long.'
    },
    updatedAt: '2023-05-15T09:30:00Z',
    path: '/collections/summer-essentials',
    image: {
      url: 'https://example.com/summer-collection-banner.jpg',
      altText: 'Summer collection featuring models on a beach',
      width: 1920,
      height: 1080
    },
    products: mockProducts
  },
  {
    // Remove the 'id' property as it's not part of the Collection interface
    handle: 'hats',
    title: 'Hat',
    description: 'Embrace the fall season with our latest autumn-inspired styles.',
    seo: {
      title: 'Autumn Trends Collection | Fashion Emporium',
      description:
        'Explore our cozy and stylish autumn collection. Perfect for layering and seasonal transitions.'
    },
    updatedAt: '2023-08-20T14:45:00Z',
    path: '/collections/autumn-trends',
    image: {
      url: 'https://example.com/autumn-collection-banner.jpg',
      altText: 'Models showcasing autumn outfits in a park',
      width: 1920,
      height: 1080
    },
    products: mockProducts
  },
  {
    // Remove the 'id' property as it's not part of the Collection interface
    handle: 'special-edition',
    title: 'Özel Parçalar',
    description: 'Embrace the fall season with our latest autumn-inspired styles.',
    seo: {
      title: 'Autumn Trends Collection | Fashion Emporium',
      description:
        'Explore our cozy and stylish autumn collection. Perfect for layering and seasonal transitions.'
    },
    updatedAt: '2023-08-20T14:45:00Z',
    path: '/collections/autumn-trends',
    image: {
      url: 'https://example.com/autumn-collection-banner.jpg',
      altText: 'Models showcasing autumn outfits in a park',
      width: 1920,
      height: 1080
    },
    products: mockProducts
  }
];

const mockCart: Cart = {
  id: 'cart123456',
  checkoutUrl: 'https://example.com/checkout/cart123456',
  cost: {
    subtotalAmount: {
      amount: '99.99',
      currencyCode: 'USD'
    },
    totalAmount: {
      amount: '109.99',
      currencyCode: 'USD'
    },
    totalTaxAmount: {
      amount: '10.00',
      currencyCode: 'USD'
    }
  },
  lines: [
    {
      id: 'line1',
      quantity: 2,
      cost: {
        totalAmount: {
          amount: '59.98',
          currencyCode: 'USD'
        }
      },
      merchandise: {
        id: 'prod1',
        title: 'T-Shirt',
        selectedOptions: [
          { name: 'Size', value: 'M' },
          { name: 'Color', value: 'Blue' }
        ],
        product: mockProducts[0]!
      }
    },
    {
      id: 'line2',
      quantity: 1,
      cost: {
        totalAmount: {
          amount: '40.01',
          currencyCode: 'USD'
        }
      },
      merchandise: {
        id: 'prod2',
        title: 'Jeans',
        selectedOptions: [
          { name: 'Size', value: '32' },
          { name: 'Style', value: 'Slim' }
        ],
        product: mockProducts[1]!
      }
    }
  ],
  totalQuantity: 3
};

// Mock API functions
export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 100);
  });
}

export async function getProductsFiltered({
  sortKey,
  reverse,
  query
}: {
  sortKey?: string;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 100);
  });
}

export async function getProduct(id: string): Promise<Product | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id);
      resolve(product || null);
    }, 100);
  });
}

//get menu mock call
export async function getMenu(handle: string): Promise<Menu> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMenu), 100);
  });
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 100);
  });
}

export async function getCollections(): Promise<Collection[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCollections), 100);
  });
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 100);
  });
}

export async function getCollection(handle: string): Promise<Collection> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCollections[0]!), 100);
  });
}

export async function getPages(): Promise<Page[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPages), 100);
  });
}

export async function getPage(handle: string): Promise<Page> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPages.find((p) => p.handle === handle)!), 100);
  });
}

export async function getCart(cartId: string | undefined): Promise<Cart | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCart), 100);
  });
}

export async function addToCart(productId: string, quantity: number): Promise<Cart> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === productId);
      /* if (product) {
        const cartItem: CartItem = {
          id: `cart-item-${productId}`,
          productId: product.id,
          title: product.title,
          quantity: quantity,
          price: product.price
        };
        mockCart.items.push(cartItem);
        mockCart.total += product.price * quantity;
      } */
      resolve(mockCart);
    }, 100);
  });
}

// Add more mock API functions as needed
