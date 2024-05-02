import { Timestamp } from "firebase/firestore";
import Profesor from "./Profesor";

class Respuesta {
    private _redactor: Profesor;
    private _redaccion: string;
    private _fechaYHora: Timestamp;
  
    constructor(
      redactor: Profesor,
      redaccion: string,
      fechaYHora: Timestamp
    ) {
      this._redactor = redactor;
      this._redaccion = redaccion;
      this._fechaYHora = fechaYHora;
    }
    // Getters
    get redactor() {
      return this._redactor;
    }
    get redaccion() {
      return this._redaccion;
    }
    get fechaYHora() {
      return this._fechaYHora;
    }
  }
export default Respuesta;