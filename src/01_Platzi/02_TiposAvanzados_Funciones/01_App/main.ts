// 12.11.25

// Clase 13
// Estructura complejas (codebase complejo): es un codigo dificil de entender, que tiene muchas partes interdependientes, que si se cambia algo afecta a todo el programa, desorganizado y mezclando responsabilidades. Para solucionar eso en esta clase utilizamos la estructura por feature/entidad (vertical slices / modular).
// Estructura por feature/entidad (vertical slices / modular): En lugar de hacer todo en un archivo o por tipo de archivo, lo agrupamos por funcionalidad o dominio.

import { addProduct, products, updateProduct } from "./products/product.service.js"
import { faker } from '@faker-js/faker'; // Clase 15: Libreria que crea datos randoms

for (let i = 0; i < 5; i++) {
  addProduct({
  // id: faker.string.ulid(),
  title: faker.commerce.productName(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  // createdAt: faker.date.recent(),
  // updatedAt: faker.date.recent(),
  stock: faker.number.int({min: 10, max: 200}),
  tags: faker.lorem.words(faker.number.int({ min: 0, max: 3 })).split(' '),
  // category: {
    // id: faker.string.ulid(),
    // name: faker.commerce.department(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
  // }
  categoryId: faker.string.ulid(),
});
}
console.log(products);

const product = products[0];

if (product) {
  console.log(updateProduct(product.id, {
  title: 'New title',
  stock: 80,
}))
}



