// 12.11.25

// Clase 13
// Creamos las declaraciones de categorias para que sea mas mantenible y reutilizable la app

// Clase 14
import { BaseModelInterface } from "../base.model.js"

export interface CategoryInterface extends BaseModelInterface {
  name: string;
}
