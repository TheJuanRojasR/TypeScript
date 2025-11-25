// 21.11.25

// Clase 9
// Herencia: Este es uno de los pilares de la OOP. Este es un mecanismo que permite crear una clase (hija) derivada de una clase ya existente (Padre) permitiendo returilizar funcionalidades
// super(): El metodo super() lo que hace es llamar al constructor de la clase padre

// Clase Padre General
export class Animal {
  constructor (public name: string) {}

  // Metodos
  move () {
    console.log('Moving along!');
  }

  greeting () {
    return `Hello, I'm ${this.name}`;
  }
}

// Clase Hija Especifica
// export class Dog extends Animal {} // Dejandolo de esta forma ya va a heredar los metodos de la Clase Padre
export class Dog extends Animal {
  // Ahora vamos a extender propiedades. Siempre que la clase hija cree un constructor se tiene que llamar al constructor de la clase padre (super()). No importa si este tiene propiedades o no, siempre se tiene que llamar o si no se rompe el programa. JS/TS necesita inicializar la parte del padre del objeto y ahi si crear la parte del hijo.
  constructor (
    name: string, // Solo quiero pasarlo y no definirlo como una propiedad interna (Por eso no le coloco public)
    public owner: string
  ) {
    super(name)
  }

  // Metodo propio
  woof (times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const animal = new Animal('Fifi');
animal.move();
console.log(animal.greeting());
const dog = new Dog('Drax', 'JuanMa');
dog.move();
console.log(dog.greeting());
dog.woof(3);

// NOTA: No se necesita super si no se tiene constructor en la clase hija
// NOTA: Primero se llama los parametros de la clase padre y luego llamamos el super()
