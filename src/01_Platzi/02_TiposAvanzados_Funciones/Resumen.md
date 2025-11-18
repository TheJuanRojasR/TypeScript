# 📘 TypeScript - Guía de Apuntes y Conceptos Avanzados

## 📑 Tabla de Contenidos
1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Conceptos Fundamentales](#conceptos-fundamentales)
3. [DTOs y Modelos](#dtos-y-modelos)
4. [Utility Types](#utility-types)
5. [Configuración TypeScript](#configuración-typescript)
6. [Buenas Prácticas](#buenas-prácticas)

---

## 🏗️ Arquitectura del Proyecto

### Estructura por Feature/Entidad (Vertical Slices)

En lugar de organizar por tipo de archivo (models/, services/, controllers/), organizamos por **dominio/funcionalidad**:

```
src/
├── products/
│   ├── product.model.ts      # Interfaz del modelo
│   ├── product.dto.ts         # DTOs (crear, actualizar, buscar)
│   └── product.service.ts     # Lógica de negocio
├── users/
│   └── user.model.ts
├── categories/
│   └── category.model.ts
└── base.model.ts              # Modelo base compartido
```

**✅ Ventajas:**
- Todo lo relacionado a una entidad está junto
- Fácil de navegar y mantener
- Escala mejor en equipos grandes
- Cambios localizados (menos merge conflicts)

**📝 Nota:** Agrega una carpeta `shared/` para utilidades comunes (utils, types, config).

---

## 🎯 Conceptos Fundamentales

### 1. Interfaces vs Types

```typescript
// ✅ Interface - Para objetos y contratos
interface User {
  id: string;
  name: string;
}

// Extensible
interface Admin extends User {
  role: 'admin';
}

// ✅ Type - Para uniones y aliases
type ID = string | number;
type Size = 'S' | 'M' | 'L' | 'XL';
```

**Cuándo usar cada uno:**
| Interface | Type |
|-----------|------|
| Objetos y clases | Unions (`string \| number`) |
| Necesitas herencia | Intersections (`A & B`) |
| APIs públicas | Aliases simples |
| Puede extenderse | No puede extenderse |

---

### 2. Readonly - Inmutabilidad

```typescript
// Readonly en propiedades
interface Product {
  readonly id: string;  // No se puede modificar
  name: string;         // Sí se puede modificar
}

// Readonly<T> - Hace todo readonly
type ReadonlyProduct = Readonly<Product>;
// { readonly id: string; readonly name: string; }

// ReadonlyArray - Arrays inmutables
const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); ❌ Error
```

**🎯 Úsalo en:**
- DTOs de búsqueda (evitar modificaciones accidentales)
- Parámetros de función (prevenir side effects)
- Configuraciones y constantes

---

### 3. Indexed Access Types

Extrae el tipo de una propiedad específica:

```typescript
interface Product {
  id: string;
  price: number;
  tags: string[];
}

// Extrae el tipo de 'id'
type ProductId = Product['id'];  // string

// Extrae el tipo de elementos del array 'tags'
type Tag = Product['tags'][number];  // string

// ✅ Uso práctico en funciones
function updateProduct(
  id: Product['id'],  // ✅ Si Product['id'] cambia, esto se actualiza automáticamente
  changes: Partial<Product>
) {
  // ...
}
```

**✅ Ventaja:** Evita duplicación y mantiene sincronización automática con el tipo original.

---

### 4. Overload de Funciones

Cuando una función tiene comportamientos diferentes según los parámetros:

```typescript
// Declaraciones de sobrecarga
function formatValue(value: string): string;
function formatValue(value: number): number;
function formatValue(value: boolean): string;

// Implementación (debe ser compatible con todas)
function formatValue(value: string | number | boolean): string | number {
  if (typeof value === 'string') return value.toUpperCase();
  if (typeof value === 'number') return value * 2;
  return value ? 'yes' : 'no';
}

// Uso
const result1 = formatValue("hello");  // string
const result2 = formatValue(10);       // number
```

**📝 Nota:** La implementación NO se expone, solo las declaraciones públicas.

---

## 📦 DTOs y Modelos

### Base Model - Interfaz Compartida

```typescript
// base.model.ts
export interface BaseModelInterface {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
```

**🎯 Propósito:** Campos comunes a todas las entidades (DRY principle).

---

### Modelo de Entidad

```typescript
// product.model.ts
import { BaseModelInterface } from '../base.model.js';
import { CategoryInterface } from '../categories/category.model.js';

export interface ProductInterface extends BaseModelInterface {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Size;           // ✅ Opcional
  color?: string;
  price: number;
  category: CategoryInterface;  // ✅ Relación con otra entidad
  isNew: boolean;
  tags: string[];
}

// Union type para valores limitados
export type Size = 'S' | 'M' | 'L' | 'XL';
```

**✅ Características:**
- Hereda de `BaseModelInterface`
- Usa `?` para propiedades opcionales
- Define relaciones con otras entidades
- Union types para valores enumerados

---

### DTOs (Data Transfer Objects)

```typescript
// product.dto.ts

// 1️⃣ DTO para CREAR (sin campos autogenerados)
export interface CreateProductDto {
  title: string;
  price: number;
  stock: number;
  categoryId: string;  // Solo el ID, no el objeto completo
  // ❌ NO incluye: id, createdAt, updatedAt (los genera el backend)
}

// 2️⃣ DTO para ACTUALIZAR (todos opcionales)
export interface UpdateProductDto {
  title?: string;
  price?: number;
  stock?: number;
  // Solo los campos que se pueden actualizar
}

// 3️⃣ DTO para BUSCAR (readonly para evitar modificaciones)
export interface FindProductDto {
  readonly stock?: number;
  readonly color?: string;
  readonly minPrice?: number;
}
```

**🎯 Propósito de cada DTO:**
| DTO | Propósito | Características |
|-----|-----------|----------------|
| `Create` | Crear nuevas entidades | Sin campos autogenerados |
| `Update` | Modificar existentes | Todo opcional (`Partial`) |
| `Find` | Filtros de búsqueda | `Readonly` para inmutabilidad |

---

### Service - Lógica de Negocio

```typescript
// product.service.ts
import { ProductInterface } from './product.model.js';
import { CreateProductDto, UpdateProductDto } from './product.dto.js';
import { faker } from '@faker-js/faker';

// Array en memoria (en prod sería una DB)
export const products: ProductInterface[] = [];

// ✅ CREATE
export function addProduct(data: CreateProductDto): ProductInterface {
  const newProduct: ProductInterface = {
    ...data,  // Spread del DTO
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  };

  products.push(newProduct);
  return newProduct;
}

// ✅ UPDATE - Usando Indexed Access Type
export function updateProduct(
  id: ProductInterface['id'],  // 🎯 Extrae el tipo de 'id'
  changes: UpdateProductDto
): ProductInterface | null {

  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;

  const prevData = products[index];
  if (!prevData) return null;

  // ✅ Variable intermedia con tipo explícito (importante con exactOptionalPropertyTypes)
  const updatedProduct: ProductInterface = {
    ...prevData,
    ...changes,
  };

  products[index] = updatedProduct;
  return updatedProduct;
}

// ✅ FIND
export function findProducts(dto: FindProductDto): ProductInterface[] {
  // dto.color = 'red'; ❌ Error - es readonly
  return products.filter(p => {
    if (dto.stock && p.stock < dto.stock) return false;
    if (dto.color && p.color !== dto.color) return false;
    return true;
  });
}
```

**📝 Notas importantes:**
- **Variable intermedia** en `updateProduct`: necesaria con `exactOptionalPropertyTypes: true`
- **Indexed Access Type** (`ProductInterface['id']`): mantiene sincronización automática
- **Readonly en DTOs**: previene modificaciones accidentales

---

## 🛠️ Utility Types

TypeScript incluye tipos auxiliares para transformar interfaces:

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

// 1️⃣ Partial<T> - Todo opcional
type UpdateProduct = Partial<Product>;
// { id?: string; name?: string; price?: number; stock?: number; }

// 2️⃣ Required<T> - Todo obligatorio
type StrictProduct = Required<Product>;

// 3️⃣ Readonly<T> - Todo inmutable
type ImmutableProduct = Readonly<Product>;

// 4️⃣ Pick<T, K> - Seleccionar propiedades
type ProductPreview = Pick<Product, 'id' | 'name'>;
// { id: string; name: string; }

// 5️⃣ Omit<T, K> - Excluir propiedades
type ProductWithoutId = Omit<Product, 'id'>;
// { name: string; price: number; stock: number; }

// 6️⃣ Record<K, V> - Objeto con claves y valores específicos
type ProductMap = Record<string, Product>;
// { [key: string]: Product; }

// 7️⃣ NonNullable<T> - Remueve null y undefined
type Name = string | null;
type ValidName = NonNullable<Name>;  // string
```

**✅ Uso práctico:**

```typescript
// En lugar de crear DTOs manualmente:
interface UpdateProductDto {
  title?: string;
  price?: number;
  // ...
}

// ✅ Mejor: usa Partial
type UpdateProductDto = Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>;
```

---

## ⚙️ Configuración TypeScript

### tsconfig.json - Opciones Clave

```json
{
  "compilerOptions": {
    // 📁 Estructura de archivos
    "rootDir": "./src",           // Carpeta fuente
    "outDir": "./dist",            // Carpeta compilada

    // 🌐 Módulos (ESM para Node.js moderno)
    "module": "nodenext",          // Soporte ESM + CJS
    "moduleResolution": "nodenext",
    "target": "es2022",            // JavaScript moderno

    // 🔒 Strictness (modo estricto)
    "strict": true,                // Activa todas las opciones strict
    "noUncheckedIndexedAccess": true,      // array[0] puede ser undefined
    "exactOptionalPropertyTypes": true,    // Strict con opcionales

    // 🔧 Otros
    "isolatedModules": true,       // Cada archivo es módulo independiente
    "skipLibCheck": true,          // Ignora tipos en node_modules
    "verbatimModuleSyntax": false, // Permite import/export en CJS

    // 📄 Source maps y declaraciones
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

**🎯 Opciones críticas explicadas:**

### `noUncheckedIndexedAccess: true`
```typescript
const products: Product[] = [/* ... */];

// Sin esta opción:
const first = products[0];  // Product

// ✅ Con esta opción:
const first = products[0];  // Product | undefined

// Fuerza validaciones:
if (first) {
  console.log(first.name);  // ✅ Seguro
}
```

### `exactOptionalPropertyTypes: true`
```typescript
interface User {
  name?: string;
}

// Sin esta opción:
const user1: User = { name: undefined };  // ✅ OK

// ✅ Con esta opción:
const user2: User = { name: undefined };  // ❌ Error
const user3: User = {};                   // ✅ OK (ausencia de propiedad)
```

---

### package.json - Scripts y Configuración

```json
{
  "type": "module",  // ✅ Proyecto usa ESM (import/export)

  "scripts": {
    // Desarrollo: ejecuta TypeScript directamente
    "dev": "node --loader ts-node/esm src/main.ts",

    // Producción: compila y ejecuta
    "build": "tsc",
    "start": "node ./dist/main.js"
  },

  "devDependencies": {
    "@types/node": "^24.10.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  }
}
```

**🚀 Comandos:**
```bash
# Desarrollo (ejecuta .ts directamente)
npm run dev

# Producción
npm run build  # Compila a ./dist
npm start      # Ejecuta JS compilado
```

**📝 Nota:** Con `"type": "module"` necesitas:
- Flag `--loader ts-node/esm` o `--esm`
- Extensiones `.js` en imports (aunque sean archivos `.ts`)

---

## ✅ Buenas Prácticas

### 1. Organización de Código

```typescript
// ✅ BIEN: Estructura por feature
src/
├── products/
│   ├── product.model.ts
│   ├── product.dto.ts
│   ├── product.service.ts
│   └── product.spec.ts
└── shared/
    ├── utils/
    └── types/

// ❌ MAL: Estructura por tipo de archivo
src/
├── models/
├── dtos/
└── services/
```

---

### 2. Imports en Proyectos ESM

```typescript
// ✅ BIEN: Extensión .js (aunque el archivo sea .ts)
import { Product } from './product.model.js';

// ❌ MAL: Sin extensión
import { Product } from './product.model';
```

**💡 Razón:** TypeScript compila a JS, y Node ESM requiere extensiones.

---

### 3. Type Guards y Validaciones

```typescript
// ✅ BIEN: Valida antes de usar
const product = products[0];
if (product) {
  console.log(product.name);
}

// ❌ MAL: Asume que existe
console.log(products[0].name);  // Puede ser undefined con noUncheckedIndexedAccess
```

---

### 4. DTOs vs Modelos

```typescript
// ✅ BIEN: DTO separado para crear
interface CreateProductDto {
  name: string;
  price: number;
  // Sin id, createdAt, updatedAt
}

// ❌ MAL: Usar el modelo completo
function createProduct(product: Product) {
  // El usuario tendría que enviar id, createdAt, etc.
}
```

---

### 5. Readonly en Parámetros

```typescript
// ✅ BIEN: Previene modificaciones
function findProducts(filters: Readonly<FindProductDto>) {
  // filters.color = 'red'; ❌ Error
  return products.filter(/* ... */);
}

// ❌ MAL: Permite modificaciones accidentales
function findProducts(filters: FindProductDto) {
  filters.color = 'red';  // ⚠️ Side effect
}
```

---

### 6. Indexed Access Types vs Duplicación

```typescript
// ✅ BIEN: Usa Indexed Access
function updateProduct(
  id: Product['id'],  // Se actualiza automáticamente
  changes: Partial<Product>
) { }

// ❌ MAL: Duplica el tipo manualmente
function updateProduct(
  id: string,  // Si Product['id'] cambia, esto queda desactualizado
  changes: Partial<Product>
) { }
```

---

### 7. Utility Types vs Interfaces Manuales

```typescript
// ✅ BIEN: Usa Utility Types
type UpdateProduct = Partial<Omit<Product, 'id' | 'createdAt'>>;

// ❌ MAL: Duplica propiedades manualmente
interface UpdateProduct {
  name?: string;
  price?: number;
  // Si Product cambia, esto queda desactualizado
}
```

---

## 📚 Cheat Sheet Rápido

### Cuándo usar cada tipo

| Situación | Usa |
|-----------|-----|
| Definir un objeto/entidad | `interface` |
| Union types (`A \| B`) | `type` |
| Hacer todo opcional | `Partial<T>` |
| Hacer todo readonly | `Readonly<T>` |
| Seleccionar propiedades | `Pick<T, K>` |
| Excluir propiedades | `Omit<T, K>` |
| Extraer tipo de propiedad | `Interface['prop']` |
| Prevenir modificaciones | `readonly` / `Readonly<T>` |

---

### Comandos útiles

```bash
# Ejecutar TypeScript directamente (desarrollo)
npx ts-node --esm src/main.ts
node --loader ts-node/esm src/main.ts

# Compilar y ejecutar (producción)
npx tsc
node ./dist/main.js

# Reiniciar TypeScript Server en VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

---

**💡 Tip final:** TypeScript es gradual. No necesitas ser experto desde el inicio. Empieza con `strict: true` y deja que el compilador te enseñe. 🚀
