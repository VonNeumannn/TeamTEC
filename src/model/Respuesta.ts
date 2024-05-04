import { Timestamp } from "firebase/firestore";
import Profesor from "./Profesor";

class Respuesta {
    private _redaccion: string;
    private _fechaYHora: Timestamp;
  
    constructor(
      redaccion: string,
      fechaYHora: Timestamp
    ) {
      this._redaccion = redaccion;
      this._fechaYHora = fechaYHora;
    }
    // Getters
    get redaccion() {
      return this._redaccion;
    }
    get fechaYHora() {
      return this._fechaYHora;
    }
  }
export default Respuesta;