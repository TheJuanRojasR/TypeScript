// 28.11.25

// Clase 14
// Patron Singlenton: Este patro nos evita a que creemos multiples instancias de un mismo objeto. O sea una clase solo puede hacer 1 instancia de un objeto y ya.

// En este ejemplo singlenton garantiza que cada vez que creemos una instancia de MyService sea la misma y no se creen multiples instancias. Porque en ocaciones solo necesitamos una instancia que se comparta a toda nuestra aplicacion.
// export class MyService {
//   constructor (
//     private name: string,
//   ) {}

//   getName () {
//     return this.name;
//   }
// }

// const myService1 = new MyService('Service 1');
// console.log(myService1);
// const myService2 = new MyService('Service 2');
// console.log(myService2);
// // En teoria deberia de ser la misma instancia
// console.log('Son la misma instancia: ', myService1 === myService2);

// Patron singlenton
export class MyService {
  // 3. Creacion de una bandera. Esto nos va decir si anteriormente se creo una instancia de esta clase.
  // Aca se va a guardar la instancia
  static instance: MyService | null = null;

  // 1. Los contructores tienen accesos. Al colocarlos private solo desde la clase pueden ser accedidos y ya no se puede crear una instancia con: new MyService('');
  private constructor (
    private name: string,
  ) {}

  getName () {
    return this.name;
  }

  // 2. Creamos un metodo static para que simule el constructor. Le tenemos que pasar los parametros que normalmente pediria el constructor.
  static create (name: string) {
    // 4. Comprobamos si no se a creado una instancia.
    if (MyService.instance === null) {
      // 5. Como estamos dentro de la clase podemos llamar a constructor y poder crear la instancia.
      MyService.instance = new MyService(name);
    }
    // 6. Si ya existe la instancia entonces lo que va hacer es retornarla.
    return MyService.instance;
  }
}

// Error: Como el constructor es privado no nos deja crear una instancia con new
// const myService1 = new MyService('Service 1');
// console.log(myService1);

// 7. Creando una instancia
const myService1 = MyService.create("service singlenton");
console.log(myService1);
// Tratando de crear otra instancia con otros parametros. Me tiene que retornar la misma primer instancia
const myService2 = MyService.create("service singlenton 2");
console.log(myService2);

// Comprobamos que tenga la misma instancia
console.log(myService1 === myService2);
