// 20.11.25

// Clase 6
// Constructor: Metodo especial de las clases para inicializar las propiedades que va tener estas.

class MyDate {
  // private year: number;
  // private month: number;
  // private day: number;

  // constructor(year: number, month: number, day: number) {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  // Forma corta de crear el constructor sin tener que definir propiedades y sin volver a asignarlo.
  // Aca estamos definiendo y asignando
  // Para que funcione tenemos que explicitamente colocar el acceso
  constructor (
    private year: number = 2025,  // Colocando valores por defecto
    private month: number = 8,
    private day: number = 2
  ) {}

  printFormat (): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

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


