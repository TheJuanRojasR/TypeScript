// 11.11.25

// Clase 11
// Firma de una funcion: Describe el nombre, tipos y cantidad de parametros, y tipo del valor que devuelven. No tienen cuerpo, solo son declaraciones.

// Sobrecarga de funciones (Solucion): La sobrecarga de funciones se refiere cuando tenemos multiples firmas para la misma funcion, de manera que podemos llamarla de distintos tipos, con distintos tipos en los parametros o numero de argumento.
// Primero se colocan las firmas y luego se declara la funcion.

// Entrada: Nico | Salida: [N, i, c, o] => string | string[]
// Entrada: [N, i, c, o] | Salida: Nico => string[] | string

// Firmas de la funcion parseStr. Como tiene varias firmas se denomina Sobrecarga de funcion
function parseStr (input: string): string[];
function parseStr (input: string[]): string;

// Refactorizando funcion: Ahora la dejamos mas generica si queremos hacer mas sobrecargas
function parseStr (input: unknown): unknown{
  if (Array.isArray(input)) return input.join('');
  else if (typeof input === "string") return input.split('');
}

// Beneficio de tener sobrecarga de funciones: Ya no tenemos que hacer una asercion de tipo
const responseArray = parseStr("Nico");
console.log("responseArray: " + responseArray);
console.log(responseArray.reverse()); // Puede ejecutar metodos de tipo ahora

const responseString = parseStr(["N", "I", "C", "O"]);
console.log("responseString: " + responseString);
console.log(responseString.toLocaleLowerCase()); // Puede ejecutar metodos de tipo ahora

// Buenas practicas
// Si tenemos una firma que tiene unknown debemos dejarla de ultimas.
// Podemos colocar valores opciones en la firmas. Utilizarlos para no generar firmas innecesarias. 

