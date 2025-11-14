// 12.11.25

// Clase 14
// Extender interfaces (herencia):
// Se genera una interface base con las propiedades en comun que tienen todos los otros modelos y despues se extienden a los demas modelos.

// Clase 15
// readonly : Utilizamos la propiedad readonly para que sea solo de lectura y nadie la pueda sobreescribir

// Si quisiera que el id fuera string solo lo cambio aca y no en todos los modelos.
export interface BaseModelInterface {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
