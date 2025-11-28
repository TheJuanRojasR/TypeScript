// 28.11.25

// Clase 13
// Clases abstractas: Las clases abstractas son aquellas que se usan como plantillas para otras clases. No dejan crear instancias de ella, contienen metodos normales, y abstractos (firmas).
// abstract: Esta es la palabra reservada para poder convertir la clases, metodos y propiedades en abstractas.

import { Animal, Dog } from './10_protected.js'

// Error: Debido a que la clase es abstract no puede crear instancias directamente
// const animal = new Animal('Drax');
// animal.greeting();

const dog = new Dog('Rocket', 'German');
dog.greeting();
dog.woof(3);

// NOTA: Las clases abstractas no se pueden intancias directamente (error: new Animal());
// Estas pueden tener metodos normales (con implementacion) o metodos abstractos (sin implementacion) Estos son basicamente la firma y las clases hijas obligatoriamente los tienen que implementar

// Estaba dudando entre cuando utilizar una interface y una clase abstracta. Cuando solo necesite que una clase siga una estructura o tenga algunas propiedades y metodos (firmas) puedo escoger la interface, pero si quiero heredar de una vez metodos implementados (con logica) o propiedades concretas (propiedades con valores por default) puedo escoger las clases abstractas.

// Ejercicio
export abstract class Figura {
  mostrarArea (): void {
    console.log(this.calcularArea());
  }

  abstract calcularArea (): number;
}

export class Cuadrado extends Figura {
  constructor (
    public lado: number,
  ) {
    super();
  }

  calcularArea(): number {
    return this.lado ** 2;
  }
}

export class Circulo extends Figura {
  static readonly PI: number = 3.14;

  constructor (
    public radio: number,
  ) {
    super();
  }

  calcularArea(): number {
    return Circulo.PI * this.radio**2;
  }
}

const cuadraro = new Cuadrado(10);
cuadraro.mostrarArea();

const circulo = new Circulo(3);
circulo.mostrarArea();


