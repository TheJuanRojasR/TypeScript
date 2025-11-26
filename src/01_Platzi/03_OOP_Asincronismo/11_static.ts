// 25.11.25

// Clase 11
// static: Es un concepto que se utiliza para definir que una propiedad o metodo pertenece a una clase. (Solo pertenece a la clase y no a las instancias creadas de esta)

// Estamos llamando a la propiedad sin tener que crear una instancia. La propiedad PI es static
console.log("Math: ", Math.PI);
console.log("Math: ", Math.max(1, 2, 3, 4, 5, 6, 9, 0)); // Trae el numero mas grande

// Creando una clase math para entender el static
class MyMath {
  static readonly PI: number = 3.14;

  static max (...numbers: number[]): number {
    const maxNumber = numbers.reduce((acc, curr) => acc >= curr ? acc : curr, -Infinity);
    return maxNumber;
  }
}

// Asi se ingresaria si no fuera una propiedad static
// const math = new MyMath();
// math.PI;
console.log("MyMath: ", MyMath.PI);
// MyMath.PI = 20; // Si me deja sobreescribir si no tenemos un readonly
console.log(MyMath.max(12, 41, 54, 34, 51, 100, 20));
console.log(MyMath.max(-12, -41, -54, -34, -51, -100, -20));
