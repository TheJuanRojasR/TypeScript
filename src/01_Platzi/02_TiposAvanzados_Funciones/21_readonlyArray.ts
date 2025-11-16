// 15.11.25

// Clase 21
// ReadonlyArray: Esta propiedad nos ayuda a no poder modificar un array y que sea solo de lectura.

// const numbers: number[] = [1, 2, 3, 4, 5];
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// No es permitido modificar el array
// numbers.push(9);
// numbers.pop();
// numbers.unshift(2);

// Solo me deja utilizar metodos que creen otro array y no modifican el original
numbers.filter(number => number < 2);

// NOTA: ReadonlyArray nos ayuda a no permitir utilizar metodos en un array pero este todavia se puede modificar 
