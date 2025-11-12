// 12.11.25

// Clase 13
// En este archivo vamos a tener todas las declaraciones de tipado.

// Clase 14
// Se trae la interface BaseModelInterface que tiene las propiedades base que todo modelo tiene y luego las demas heredaran de esta.
import { BaseModelInterface } from "../base.model.js"
import { CategoryInterface } from "../categories/category.model.js"

export type Sizes = "S" | "M" | "L" | "XL"

export interface ProductInterface extends BaseModelInterface {
  title: string;
  stock: number;
  size?: Sizes;
  category: CategoryInterface;
}
