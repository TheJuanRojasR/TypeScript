// 19.11.25

// Clase 3
// Metodos: Funciones definidas dentro de la clase (se añaden al prototipo).

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Creando un metodos
  printFormat (): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  // Metodo basico para agregar dias, meses o años a una fecha. (Faltan muchas validaciones).
  add (amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') return this.day += amount;

    if (type === 'months') return this.month += amount;

    if (type === 'years') return this.year += amount;
  }
}

// 1. Creando una instancia de la clase MyDate
const myDate = new MyDate(2025, 11, 19);
// 2. Accediendo a los valores de la instancia
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
// 3. Visualizando la salida del metodo .printFormat()
console.log(myDate.printFormat());
// 4. Visualizando la salida del metodo .add()
console.log(myDate.add(3, "days"));
