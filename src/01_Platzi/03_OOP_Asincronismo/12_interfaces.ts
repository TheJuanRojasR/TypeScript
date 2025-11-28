// 28.11.25

// Clase 11
// interface: La interface aplicada en clases nos dice cuales atributos y metodos tiene que tener por default (publicas). Si ya necesitas una propiedad o metodo especifica o privada se tiene que hacer dentro de la misma clase.
// implements: Palabra reservada que indica que una clase debe cumplir con las propiedades y metodos que tiene el contrato (interfaz) asociada.

export interface Driver {
  // Popiedades que tienen que tener las clases
  database: string;
  password: string;
  port: number;

  // Metodos - Basicamente colocamos la firmas
  // Las clases tienen que colocar el mismo nombre y el mismo tipo de retorno para poder cumplir con este contrato
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// Clase que implementara la interface Driver
class PostgresDriver implements Driver {
  constructor (
    public database: '',
    public password: '',
    public port: 3000,
    // Propiedad que solo tiene esta clase
    private host: number,
  ) {}
  
  disconnect(): void {

  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }
}

class OracleDriver implements Driver {
  constructor (
    public database: '',
    public password: '',
    public port: 3001,
  ) {}
  disconnect(): void {

  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {

  }
}
