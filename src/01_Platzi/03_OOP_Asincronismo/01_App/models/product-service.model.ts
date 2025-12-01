import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto.js";
import { ProductInterface } from "./product.model.js";

export interface ProductService {
  // Creando firmas que debe de tener todos los servicios
  getAll(): ProductInterface[] | Promise<ProductInterface[]>;
  create(dto: CreateProductDto): ProductInterface | Promise<ProductInterface>;
  update(id: ProductInterface['id'], changes: UpdateProductDto): ProductInterface | Promise<ProductInterface> | null;
  findOne(id: ProductInterface['id']): ProductInterface | Promise<ProductInterface | undefined> | undefined;
}
