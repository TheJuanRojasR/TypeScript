// 13.11.25

// Clase 17
// Utility types: Estos se utilizana para crear nuevos type o interface a partir de otros existentes. Nos ayudan a no repetir codigo y seguir los principios DRY
// Omit : Omite las propiedades que le indiquemos
// Pick : Selecciona las propiedades que le digamos

// DTO (Data Transfer Object): Patron de diseño que nos ayuda a crear una interface o una class y que describe que datos se tienen que enviar en una operacion especifica, sin tener que enviar toda la estructura de datos principal.

import { ProductInterface } from "./product.model.js";

// Utilizando Omit
export interface CreateProductDto extends Omit<ProductInterface, 'id' | "createdAt" | "updatedAt" | "category"> {
  // En las DB ya estan las categorias, solo se tiene que traer el ID
  categoryId: string;
}

// Clase 18
// Partial : Convierte las propiedades de un tipo/interface en opcionales
// Required : Convierte las propiedades de un tipo/interface en obligatorias

// Hacemos el Partial de CreateProductDto ya que tiene las propiedades que si podemos modificar y que tiene categoryId en lugar de category
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Clase 19
// Readonly: Es un utility type que convierte todas las propidades de un tipo/interface en solo lectura y no se podran modificar

export interface FiendProductDto extends Readonly<Partial<ProductInterface>> {}
