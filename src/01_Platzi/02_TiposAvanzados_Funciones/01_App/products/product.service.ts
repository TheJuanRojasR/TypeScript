// 12.11.25

import { ProductInterface } from "./product.model.js"
import { CreateProductDto } from "./product.dto.js"
import { faker } from "@faker-js/faker";

// Clase 13
// En este archivo va estar toda la manipulacion (Creacion, modificacion, eliminacion, etc)

export const products: ProductInterface[] = [];

export function addProduct (data: CreateProductDto): ProductInterface {
  // Estos datos los deberia traer la DB y no los tendriamos que colocar nosotros
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return (newProduct);
}
