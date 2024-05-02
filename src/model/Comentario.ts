import { Timestamp } from "firebase/firestore";
import Respuesta from "./Respuesta";
import Usuario from "./Usuario";

class Comentario {
    private _titulo: string;
    private _redactor: string;
    private _redaccion: string;
    private _fechaYHora: Timestamp;
    private _respuestas: Respuesta[];
  
    constructor(
      titulo: string,
      redactor: string,
      redaccion: string,
      fechaYHora: Timestamp,
      respuestas: Respuesta[]
    ) {
      this._titulo = titulo;
      this._redactor = redactor;
      this._redaccion = redaccion;
      this._fechaYHora = fechaYHora;
      this._respuestas = respuestas;
    }

    // Getters
    get titulo() {
      return this._titulo;
    }
    get redactor() {
      return this._redactor;
    }
    get redaccion() {
      return this._redaccion;
    }
    get fechaYHora() {
      return this._fechaYHora;
    }
    get respuestas() {
      return this._respuestas;
    }
    // Setters
    set respuestas(respuestas: Respuesta[]) {
      this._respuestas = respuestas;
    }
  }
export default Comentario;