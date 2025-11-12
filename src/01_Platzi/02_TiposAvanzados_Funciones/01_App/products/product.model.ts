// 12.11.25

// Clase 13
// En este archivo vamos a tener todas las declaraciones de tipado.

import { CategoryInterface } from "../categories/category.model.js"

export type Sizes = "S" | "M" | "L" | "XL"

export interface ProductInterface {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: CategoryInterface;
}
