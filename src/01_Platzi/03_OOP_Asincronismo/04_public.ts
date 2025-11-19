// 19.11.25

// Clase 4
// Public: Es uno de los 3 modificadores de visiblidad que tiene TS.
// public: Desde afuera pueden acceder y utilizar los metodos o propiedades. Por defecto los metodos y propiedades son publics.

class MyDate {
  // Se pueden colocar de forme explicita. Pero por defecto ya son public.
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat (): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

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
