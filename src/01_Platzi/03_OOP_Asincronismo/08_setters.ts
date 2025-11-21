// 21.11.25

// Clase 8
// setters: Son metodos especiales que permiten moficiar propiedades privadas con validaciones o logica (logica no tan complicada). (No como las propiedades publicas que solo pasandole un argummento las deja modificar). Cuando toque tener validaciones o logica para poder cambiar el valor de una propiedad utilizamos los setters.
// Errores: setter sin validaciones no tiene proposito. No puede modificar multiples propiedades. No enviar errores explicitos si el argumento no es valido.
// 1. Validar datos antes de guardarlos
// 2. Transformar los datos antes de guardarlos

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
    if (value < 10) return `0${value}`;
    else return `${value}`;
  }

  add (amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') return this._day += amount;

    if (type === 'months') return this._month += amount;

    if (type === 'years') return this._year += amount;
  }

  get day() {
    return this._day;
  }

  get month () {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }

  // Sintaxis: set nombreMetodo () {}
  // Los set no retornan nada, por deficion son void, solo modifican
  set month (newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error("Month out of range"); // Rompe ejecucion del programa
    }
  }
}

// 1. Creando una instancia de la clase MyDate
const myDate = new MyDate(2025, 8, 2);
myDate.month = 4;
console.log("run", myDate.month);
// Enviamos el argumento como si fuera la asignacion de una variable
myDate.month = 78;
console.log("Esto no va a aparecer.");

// 📋 Checklist de Decisión
// ¿Cuándo usar SETTER?
//  ¿Es una sola propiedad?
//  ¿La validación es simple (rangos, tipos, formato)?
//  ¿La transformación es directa (trim, lowercase, round)?
//  ¿Tiene sentido usar sintaxis de asignación (obj.prop = value)?
//  ¿El nombre es un sustantivo?
// Si todas son ✅ → Usa SETTER

// ¿Cuándo usar MÉTODO?
//  ¿Necesitas múltiples parámetros?
//  ¿La lógica es compleja (múltiples pasos, condicionales)?
//  ¿Modifica múltiples propiedades?
//  ¿Requiere transacciones o rollback?
//  ¿Necesitas coordinación entre cambios?
//  ¿El nombre es un verbo (update, set, apply, configure)?

// 💡 Regla de oro: Si dudas entre setter o método, pregúntate: "¿Esto parece una asignación o una acción?"
// Asignación → obj.prop = value        → Setter
// Acción     → obj.doSomething(params) → Método
