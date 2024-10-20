import { Money } from './money';
import { Product } from './product';
import { SelectedOption } from './product-variant';

export interface CartLineMerchandise {
  id: string;
  title: string;
  selectedOptions: SelectedOption[];
  product: Product;
}

export interface CartLineCost {
  totalAmount: Money;
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: CartLineCost;
  merchandise: CartLineMerchandise;
}
