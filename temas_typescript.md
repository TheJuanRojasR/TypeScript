# 🧭 Ruta de Aprendizaje: TypeScript + Backend con Node.js

> **Objetivo general:** Dominar TypeScript desde cero hasta un nivel profesional para desarrollar aplicaciones backend robustas con Node.js.

---

## 📅 FASE 1: TypeScript Esencial (Semanas 1–3)
**Objetivo:** comprender a fondo la base del lenguaje y del sistema de tipos.

### 🧱 Semana 1: Fundamentos del Tipado
- Tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined` ✅ (25/10/25)
- Tipos especiales: `any`, `unknown`, `never` ✅ (25/10/25)
- Tipos compuestos: `array`, `tuple`, `object` ✅ (25/10/25)
- Tipado de variables y constantes (`let`, `const`) ✅ (25/10/25)
- Introducción a inferencia de tipos ✅ (25/10/25)

**🎯 Ejercicio:**  
Crea un archivo `basics.ts` con ejemplos de todos los tipos.  
Haz un pequeño programa que reciba un nombre y edad, y devuelva un mensaje tipado.

---

### 🧱 Semana 2: Funciones y Objetos Tipados
- Tipado de funciones: parámetros, valores de retorno ✅ (28/10/25)
- Funciones como tipos (`type MyFunc = (a: number) => number`) ✅ (28/10/25)
- Tipado de objetos y propiedades opcionales ✅ (28/10/25)
- Type Aliases (`type`) e Interfaces (`interface`) ✅ (28/10/25)
- Diferencias entre `type` e `interface` ✅ (28/10/25)

**🎯 Proyecto corto:**  
Mini app de tareas (`Task`) con propiedades tipadas, funciones para crear, eliminar y listar tareas.

---

### 🧱 Semana 3: Combinando Tipos
- Uniones (`|`) e Intersecciones (`&`) ✅ (28/10/25)
- Narrowing (type guards con `typeof`, `instanceof`, `in`) ✅ (28/10/25)
- Enums (`enum`) ✅ (29/10/25)
- Tipado estructural (duck typing) ✅ (30/10/25)
- Uso de `as const` y `readonly` ✅ (30/10/25)

**🎯 Proyecto corto:**  
Sistema de productos con estado (`Disponible`, `Agotado`, `Pendiente`) usando `enum` y `union types`.

---

## 🧩 FASE 2: TypeScript Profesional (Semanas 4–6)
**Objetivo:** escribir código profesional, modular y reutilizable.

### ⚙️ Semana 4: Genéricos y Tipos Avanzados
- Tipos genéricos (`<T>`)
- Genéricos con restricciones (`<T extends U>`)
- Tipos condicionales (`T extends U ? X : Y`)
- Inferencia avanzada

**🎯 Proyecto:**  
Crea una función genérica para manejar respuestas de API (`ApiResponse<T>`).

---

### ⚙️ Semana 5: Utility & Mapped Types
- `Partial`, `Pick`, `Omit`, `Readonly`, `Required`, `Record`, `ReturnType`
- `keyof`, `typeof`, `in`, `Indexed Access Types`
- Mapped Types
- Tipado de objetos dinámicos

**🎯 Proyecto:**  
Crear un **módulo de usuarios** con funciones genéricas para listar, crear y actualizar, aplicando utility types.

---

### ⚙️ Semana 6: Decoradores, Namespaces y Configuración
- Decoradores de clase, método y propiedad
- Namespaces vs módulos (import/export)
- Configurar manualmente `tsconfig.json`
  - `target`, `module`, `rootDir`, `outDir`
  - `strict`, `noImplicitAny`, `strictNullChecks`
- Tipar librerías externas con DefinitelyTyped (`@types`)

**🎯 Proyecto:**  
Crea una clase `Logger` con decoradores para medir tiempo de ejecución de métodos.  
Compila el proyecto con `tsc` y analiza el `dist/`.

---

## 🚀 FASE 3: TypeScript + Node.js (Semanas 7–9)
**Objetivo:** aplicar TypeScript en entornos backend reales.

### 🧰 Semana 7: Configuración y entorno Node.js
- Crear proyecto `npm init -y`
- Instalar `typescript`, `ts-node`, `nodemon`
- Configurar `tsconfig.json` para Node
- CommonJS vs ES Modules
- Estructura de carpetas (`src`, `dist`)
- Scripts de build y ejecución (`npm run dev`, `npm run build`)

**🎯 Proyecto:**  
Crea un script de consola con TypeScript que lea un archivo JSON y muestre sus datos.

---

### 🧰 Semana 8: Express + TypeScript
- Instalación y tipado: `npm i express @types/express`
- Tipar `Request`, `Response`, `NextFunction`
- Middlewares tipados
- Funciones asincrónicas (`Promise<T>`)
- Tipado de controladores y rutas

**🎯 Proyecto:**  
Construye una **API REST** simple con CRUD de usuarios, totalmente tipada.

---

### 🧰 Semana 9: Buenas Prácticas y Producción
- Uso de `dotenv` y tipado de `process.env`
- Path aliases (`baseUrl`, `paths`)
- Manejo tipado de errores (`try/catch` con tipos)
- Testing con Jest y `@types/jest`
- Compilación y despliegue (`tsc`, `node dist/index.js`)

**🎯 Proyecto final:**  
API REST completa con TypeScript + Express, separando capas:
- `controllers/`
- `services/`
- `models/`
- Tipado completo y configuraciones productivas.

---

## 🏁 Resultado Final
Al terminar esta ruta:
- Dominarás el sistema de tipos de TypeScript.
- Podrás crear proyectos backend sólidos con Node.js y Express.
- Estarás listo para avanzar a **NestJS** o construir tus propios frameworks.

---

## 🧠 Recomendaciones
- Usa **VSCode** con la extensión oficial de TypeScript.
- Compila a menudo (`tsc --watch`) para entender los errores del compilador.
- Lee definiciones en `@types/*` para aprender patrones reales.
- Integra ESLint + Prettier para mantener un código limpio.
- Documenta tus tipos con JSDoc (`/** ... */`).

---

## 🔗 Recursos sugeridos
- [TypeScript Handbook (Oficial)](https://www.typescriptlang.org/docs/)
- [Type Challenges (ejercicios prácticos)](https://github.com/type-challenges/type-challenges)
- [DefinitelyTyped Repo](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Node.js + TypeScript Starter Template](https://github.com/microsoft/TypeScript-Node-Starter)
