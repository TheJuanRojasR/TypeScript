// 25.11.25

// Clase 11
// Protected: Este es un modificador de acceso que lo que hace es que la propiedad o el metodo es accesible desde la misma clase donde fue inicializado y sus hijos si hereda pero no es accesible desde el exterior.

// Clase Padre General
export class Animal {
  constructor (protected name: string) {}

  // Metodos
  move () {
    console.log('Moving along!');
  }

  greeting () {
    return `Hello, I'm ${this.name}`;
  }

  // Metodo que solo pueden utilizar las clases
  protected doSomething () {
    console.log('Doooo');
  }
}

export class Dog extends Animal {
  constructor (
    name: string,
    public owner: string
  ) {
    // El metodo super solo puede ser llamado desde el constructor de la clase hija
    super(name)
  }

  woof (times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!', this.name);
    }
    this.doSomething();
  }

  // Ejemplo de polimorfismo. Modificamos el metodo padre move en la clase hija y luego llamamos al metodo move del padre
  move(): void {
    console.log('Moving as a dog');
    super.move();
  }
}

const dog = new Dog('Drax', 'JuanMa');
// dog.name = 'Rocket' // Muestra error ya que no es posible modificar desde el exterior con el modificador protected
dog.woof(1);
// dog.doSomething() // Muestra error ya que es un metodo protected y solo se puede utilizar dentro de las clases
dog.move();

