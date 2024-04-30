import Profesor from "./Profesor";

class Respuesta {
    redactor: Profesor;
    redaccion: string;
    fechaYHora: Date;
  
    constructor(
      redactor: Profesor,
      redaccion: string,
      fechaYHora: Date
    ) {
      this.redactor = redactor;
      this.redaccion = redaccion;
      this.fechaYHora = fechaYHora;
    }
  }
export default Respuesta;