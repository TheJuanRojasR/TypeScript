// 30.11.25

import { ProductInterface } from "../models/product.model.js";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto.js";
import { faker } from '@faker-js/faker';
import { ProductService } from "../models/product-service.model.js";

export class ProductMemoryService implements ProductService {
  private products: ProductInterface[] = [];

  getAll () {
    return this.products;
  }

  create (data: CreateProductDto): ProductInterface {
  const newProduct = {
      ...data,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      slug: faker.image.url(),
      images: [faker.image.url(), faker.image.url()],
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        slug: faker.image.url(),
        image: faker.image.url(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  add (product: ProductInterface) {
    this.products.push(product);
    return (product);
  }

  update (id: ProductInterface['id'], changes: UpdateProductDto): ProductInterface | null {
    // 1. Buscando indece del producto
    const index  = this.products.findIndex(product => product.id === id);
    if (index === -1) return null;

    // 2. Guardando la info del producto a modificar
    const prevData = this.products[index];
    if (!prevData) return null;

    // 3. Creando variable con los cambios
    const updatedProduct: ProductInterface = {
      ...prevData,
      ...changes,
    }

    // 4. Modificando el producto
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  findOne (id: ProductInterface['id']) {
    return this.products.find(product => product.id === id);
  }
}

export const products: ProductInterface[] = [];


