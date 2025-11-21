// 20.11.25

// Clase 7
// getters: Son metodos especiales que se comportan como propiedades afuera de la clase (No se tienen que ejecutar afuera). Casos de uso
// 1. Accerder a una propiedad con el acceso privado. Esto solo se pueden leer, no se puede modificar o mutar.
// 2. Calcular valores calculados
// 3. Transformar un dato antes de retornarlo
// Cuando se tienen propiedades y getters o setters con el mismo nombre mostrata un error. Para solucionarlo por buena practica es colocar un _ al inicio de la propiedad privada

class MyDate {
  constructor (
    private _year: number = 2025,
    private _month: number = 8,
    private _day: number = 2
  ) {}

  printFormat (): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);

    return `${day}/${month}/${this._year}`;
  }

  private addPadding (value: number): string {
    if (value <= 10) return `0${value}`;
    else return `${value}`;
  }

  add (amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') return this._day += amount;

    if (type === 'months') return this._month += amount;

    if (type === 'years') return this._year += amount;
  }

  // Getter: Podemos retornar el valor privado sin miedo a que lo puedan modificar.
  // Sintaxis: get nombreMetodo() {}
  get day() {
    return this._day;
  }

  // Saber si un año es bisiesto
  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

// 1. Creando una instancia de la clase MyDate
const myDate = new MyDate(2025, 8, 2);
const myDate2 = new MyDate(2028, 8, 2);
// Llamando al getter. No lo tenemos que ejecutarlo. Es como una propiedad mas.
console.log(myDate.isLeapYear)
console.log(myDate2.isLeapYear)



