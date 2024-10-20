import { Image } from './image';
import { PriceRange } from './price-range';
import { ProductOption } from './product-option';
import { ProductVariant } from './product-variant';
import { SEO } from './seo';

export interface Product {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description?: string;
  descriptionHtml?: string;
  options: ProductOption[];
  priceRange: PriceRange;
  variants: ProductVariant[];
  featuredImage?: Image;
  images: Image[];
  seo?: SEO;
  tags: string[];
  updatedAt: string;
}
