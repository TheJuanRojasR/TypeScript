// 12.11.25

import { ProductInterface } from "./product.model.js"

// Clase 13
// En este archivo va estar toda la manipulacion (Creacion, modificacion, eliminacion, etc)

export const products: ProductInterface[] = [];

export function addProduct (data: ProductInterface): void {
  products.push(data);
}
