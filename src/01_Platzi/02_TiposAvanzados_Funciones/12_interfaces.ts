// 12.11.25

// Clase 12
// Interfaces: Las interfaces permiten crear un molde de objetos (Estructura de datos) declarando que propiedades y tipos van a tener estos. Son parecidas a los type la principal diferencia es que una interface se puede extender (realizar herencia) y los type no.

type Sizes = "S" | "M" | "L" | "XL"

// Estructurando Product con un type
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes; // Parametro opcional
// }

// Estructurando Product con una interface
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

// Inicializando un array de product. Cada elemento tiene que seguir la estructura de product
const products: Product[] = [];

// Insertando un product en products
products.push({
  id: 1,
  title: 'P1',
  createdAt: new Date(),
  stock: 90,
})

function addProduct (data: Product): void {
  products.push(data);
}
