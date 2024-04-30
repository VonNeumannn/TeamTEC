import Profesor from "./Profesor";
import Respuesta from "./Respuesta";

class Comentario {
    titulo: string;
    redactor: Profesor;
    redaccion: string;
    fechaYHora: Date;
    respuestas: Respuesta[];
  
    constructor(
      titulo: string,
      redactor: Profesor,
      redaccion: string,
      fechaYHora: Date,
      respuestas: Respuesta[] = []
    ) {
      this.titulo = titulo;
      this.redactor = redactor;
      this.redaccion = redaccion;
      this.fechaYHora = fechaYHora;
      this.respuestas = respuestas;
    }
  }
export default Comentario;