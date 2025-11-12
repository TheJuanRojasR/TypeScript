// 10.11.25

// Clase 10
// Sobrecarga de funciones (Problema): TypeScript no puede inferir que tipo de dato retornara una funcion cuando esta puede retornar multiples TiposDeDatos
// NOTA: La sobrecarga solo funciona con funciones declarativas (function)

// Entrada: Nico | Salida: [N, i, c, o] => string | string[]
// Entrada: [N, i, c, o] | Salida: Nico => string[] | string

function parseStr (input: string | string[]): string | string[] {
  if (Array.isArray(input)) return input.join('');

  return input.split('');
}

const responseArray = parseStr("Nico");
console.log("responseArray: " + responseArray);

// Como TS con respuesto al argumento que devolvera es por esa razon que tenemos que inferir asersion de tipo (Decirle de forma explicita el TipoDeDato a TS)
if (Array.isArray(responseArray)) {
  console.log(responseArray.reverse());
}

const responseString = parseStr(["N", "I", "C", "O"]);
console.log("responseString: " + responseString);


if (typeof responseString === 'string') {
  console.log(responseString.toLocaleLowerCase());
}
