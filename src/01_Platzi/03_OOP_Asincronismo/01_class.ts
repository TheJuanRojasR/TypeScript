// 19.11.25

// Clase 2
// Class : Una clase es como un molde estructural que nos ayuda a que toda instancia creada con ella sea igual. Por dentro sigue utilizando prototipos pero con una sintaxis mas entendible y familiar.

// Consumiendo una instancia de un clase
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();
console.log(date);


// Creando una clase
class MyDate {
  // Las variables dentro de un clase tienen que ser inicializadas con un valor por defecto o desde el constructor
  year: number;
  month: number;
  day: number;

  // Constructor: Método especial para inicializar propiedades.
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// Creando una instancia de nuestra clase creada
const myDate = new MyDate(2025, 3, 11);
console.log(myDate)
