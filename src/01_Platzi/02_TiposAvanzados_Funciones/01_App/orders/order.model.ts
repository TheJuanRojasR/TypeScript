// 12.11.25

// Clase 13
// Ya teniendo varios modelos es mas sencillo acoplarlos y no hacerlo solo en una interface

import { BaseModelInterface } from "../base.model.js"
import { ProductInterface } from "../products/product.model.js"
import { UserInterface } from "../users/user.model.js"

export interface OrderInterface extends BaseModelInterface {
  products: ProductInterface[];
  user: UserInterface;
}
