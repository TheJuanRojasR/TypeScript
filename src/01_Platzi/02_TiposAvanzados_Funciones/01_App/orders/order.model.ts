// 12.11.25

// Clase 13
// Ya teniendo varios modelos es mas sencillo acoplarlos y no hacerlo solo en una interface

import { ProductInterface } from "../products/product.model.js"
import { UserInterface } from "../users/user.model.js"

export interface OrderInterface {
  id: string | number;
  cretedAt: Date;
  products: ProductInterface[];
  user: UserInterface;
}
