// 30.11.25

// Clase 17
// Consumiendo ProductMemoryService

import { ProductMemoryService } from './services/product.service.js'

// Creando una instancia
const productService = new ProductMemoryService();

productService.create({
  title: 'Nuevo Producto',
  description: 'Este es un nuevo producto',
  price: 21.00,
  images: [],
  slug: 'No se que esta monda',
  creationAt: new Date(),
  updatedAt: new Date(),
  categoryId: 1
});

const products = productService.getAll();
const firstProduct = products[0];
if (!firstProduct) {
  throw new Error('No products available');
}
const productId = firstProduct.id;

productService.updateProduct(productId, {
  title: 'Producto Actualizado',
  price: 50,
});

const rta = productService.findOne(productId);
console.log(rta);
