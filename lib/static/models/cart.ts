import { CartCost } from './cart-cost';
import { CartLine } from './cart-line';

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: CartCost;
  lines: CartLine[];
  totalQuantity: number;
}
