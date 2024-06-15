import { ActividadObserver } from "./ActividadObserver";
import Actividad from "./Actividad";

class NotificarActividad implements ActividadObserver {
	update(actividad: Actividad) {
		console.log(
			`La actividad con ID ${actividad.nombre} tiene una fecha que coincide con la fecha actual.`
		);
	}
}

export default NotificarActividad;
