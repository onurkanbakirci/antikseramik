import { CartProduct } from './cart-product';
import { Money } from './money';

export interface CartItem {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
    product: CartProduct;
  };
}
