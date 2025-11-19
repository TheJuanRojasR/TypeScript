// 19.11.25

// Clase 5
// private: Es uno de los 3 modificadores de visiblidad que tiene TS.
// private: Desde afuera no pueden acceder y utilizar los metodos o propiedades. Solo por dentro de la clase se pueden utilizar acceder o modificar.

class MyDate {
  // Se pueden colocar de forme explicita. Pero por defecto ya son public.
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat (): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  // Este metodo agregara el 0 a las fechas que solo tienen 1 digito
  // Este metodo es private porque solo se utilizara internamente
  private addPadding (value: number): string {
    if (value <= 10) return `0${value}`;
    else return `${value}`;
  }

  add (amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') return this.day += amount;

    if (type === 'months') return this.month += amount;

    if (type === 'years') return this.year += amount;
  }
}

// 1. Creando una instancia de la clase MyDate
const myDate = new MyDate(2025, 8, 2);
console.log(myDate.printFormat()); // 2025/8/2 -> 2025/08/02
// console.log(myDate.year) // Error: como la propiedad es private no se puede acceder o modificar

