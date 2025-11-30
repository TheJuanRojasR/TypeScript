// 30.11.25

// Clase 17

import { ProductInterface } from '../models/product.model.js'
import { CategoryInterface } from '../models/categorie.model.js';

export interface CreateProductDto extends Omit<ProductInterface, 'id' | 'category'> {
  categoryId: CategoryInterface['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

