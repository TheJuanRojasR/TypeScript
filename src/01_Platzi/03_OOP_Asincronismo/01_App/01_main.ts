// 29.11.25

import { ProductInterface } from "./models/product.model.js";

// Clase 16
// Tipando respuestas HTTP: En este ejemplo creamos modelos de interfaces y como sabiamos que se traeria un array de productos entonces de esa forma se tipo.

// import axios from "axios";
// import { ProductInterface } from "./models/product.model.js";

// (async () => {

//   // 1. Forma de tipar es directamente la funcion (Ejemplo: function getProducts (): Promise<ProductInterface[]>). El problema es que por dentro va seguir apareciendo que es Promise<any>. O sea que si queremos hacer alguna logica (validar, transformar) dentro de la funcion no podemos.
//   async function getProducts () {
//     // 2. Forma de tipar Axios soporta el tipado directamente en su peticion
//     const { data } = await axios.get<ProductInterface[]>('https://api.escuelajs.co/api/v1/products');
//     return data;
//   }

//   const products = await getProducts();
//   console.log(products.map(product => console.log(`${product.id} - ${product.title}`)));

// })();

// FORMA ACTUAL CON FETCH NATIVO
// Esta va ser la mejor forma aplicando fetch y buenas practicas

async function getProducts (): Promise<ProductInterface[]> {
  // Abortcontroller: Es una Clase de una API Web que permite cancelar peticiones. Forma moderna de cancelar requests
  const controller = new AbortController();
  // Si pasan 10 seg y no llega la respuesta de la peticion entonces se va a abortar
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    // fetch: API nativa para hacer solicitudes HTTP. 1. Envia peticion 2. Recibe respuesta 3. Devuelve promesa
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      // Signal: Es como el cable que una fetch con el metodo .abort(). Si abort se activa, signal recibira la señal y se la pasara a fetch
      signal: controller.signal,
      // Solo se aceptan respuestas en JSON
      headers: {
        'Accept': 'application/json'
      }
    });

    // Si llega primero la peticion entonces cancelara el temporizador
    clearTimeout(timeoutId);

    // Validacion: Si la respuesta es distintan a 200/299 entonces enviar un error
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Obtiene el valor que tiene content-type
    const contentType = response.headers.get('content-type');
    // Validacion: Si no es de tipo 'application/json' envia un error porque no es JSON
    if (!contentType?.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    // Como la informacion viene en JSON las convertimos en un objeto con .json()
    const data: ProductInterface[] = await response.json();

    // Validacion: Si la informacion que llega no es un array entonces envia un error
    if (!Array.isArray(data)) {
      throw new Error('Response is not an array');
    }

    return data;

  } catch (error) {
    clearTimeout(timeoutId);

    // ✅ Type guard: verificar si es un Error
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
    }

    throw error;
  }

}

const products = await getProducts();
console.log(products);

// Signal: Es como un bombillo (o un cable) y Abort: es como un boton cuando abort se activa manda la la indicacion a signal y el fetch que lo tenga recibira la señal.
// Si no se pasa la señal a algo, el abort no va a funcionar
