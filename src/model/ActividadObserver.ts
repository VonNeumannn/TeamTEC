import Actividad from "./Actividad";

export interface ActividadObserver {
	update(actividad: Actividad): void;
}
