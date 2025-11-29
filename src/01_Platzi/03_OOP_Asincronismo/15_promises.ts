// 29.11.25

// Clase 15
// Promesas en TS:

import axios from "axios";

(async () => {
  function delay (time: number) {
    // Tipando correctamete la promesa. En la respuesta ya podemos utilizar los metodos del tipo de dato que retorna
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('string');
      }, time)
    });
    return promise;
  }

  // Llamada a API
  // 1. Retornar la promesa, para despues solucionalar afuera
  function getProducts () {
    // Creando pedicion
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // 2. Utilizar async en la funcion y retornar directamente la respuesta, pero el async lo envuelve en una promesa de nuevo.
  // Esta forma es mejor para cuando queremos validar o transformar los datos antes de entregarlos
  async function getProductsAsync () {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('-----------');
  // Cuando hacemos el await se quita el cascaron de Promise y solo quedamos con el valor
  const rta = await delay(3000);
  console.log(rta);
  console.log('-----------');
  // Como trae una promesa utilizamos el await para resolverla
  const products = await getProducts();
  console.log(products.data);
})();

