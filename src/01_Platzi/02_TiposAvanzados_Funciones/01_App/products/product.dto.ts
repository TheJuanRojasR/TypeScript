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

