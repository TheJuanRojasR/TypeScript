// 12.11.25

// Clase 13
// Estructura complejas (codebase complejo): es un codigo dificil de entender, que tiene muchas partes interdependientes, que si se cambia algo afecta a todo el programa, desorganizado y mezclando responsabilidades. Para solucionar eso en esta clase utilizamos la estructura por feature/entidad (vertical slices / modular).
// Estructura por feature/entidad (vertical slices / modular): En lugar de hacer todo en un archivo o por tipo de archivo, lo agrupamos por funcionalidad o dominio.

import { addProduct } from "./products/product.service.js"

addProduct({
  id: 1,
  title: 'xbox one',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category: {
    id: 1,
    name: "electronics",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});


