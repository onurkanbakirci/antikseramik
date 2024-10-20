import { Image } from './image';
import { Product } from './product';
import { SEO } from './seo';

export interface Collection {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
  path: string;
  image?: Image;
  products?: Product[];
}
