// 12.11.25

import { UpdateProductDto } from "./product.dto.js";
import { ProductInterface } from "./product.model.js"
import { CreateProductDto } from "./product.dto.js";
import { FiendProductDto } from "./product.dto.js";
import { faker } from '@faker-js/faker';

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

// Clase 20
// Accerder tipado por el indice: Es una forma de extraer el tipo de dato de una propiedad especifica de un objeto/interface usando una sintaxis como cuando accedemos a ala propiedad de un objeto. Este nos ayuda a evitar errores manuales. Ya que queda vinculado con el original y si cambia de dato nos mostraria donde posiblemente tendriamos un error.
// Sintaxis: interface[propiedad] => tipoDeDato

export function updateProduct (id: ProductInterface['id'], changes: UpdateProductDto): ProductInterface | null {
  // 1. Buscando indece del producto
  const index  = products.findIndex(product => product.id === id);
  if (index === -1) return null;

  // 2. Guardando la info del producto a modificar
  const prevData = products[index];
  if (!prevData) return null;

  // 3. Creando variable con los cambios
  const updatedProduct: ProductInterface = {
    ...prevData,
    ...changes,
  }

  // 4. Modificando el producto
  products[index] = updatedProduct;
  return updatedProduct;
}

// Problemas: Podemos modificar los datos que vangan si no tenemos un Readonly en el Dto
// Ahora con el Readonly, tenemos la flexibilidad de mandar cualquier campo pero no poderlos modificar
export function findProducts (dto: FiendProductDto): ProductInterface[] {
  // dto.color = 'red'; Error
  return products;
}
