import { Visitor } from "./Visitor";
import Itinerario from "@/model/Itinerario";
import { activityData } from "@/controller/actividadController";
import { itinerarioData } from "@/controller/ItinerarioController";

//this works like a concrete visitor class
export class ReminderVisitor implements Visitor{
    visit(itinerary: itinerarioData, activity: activityData, localTime: Date): void {
        //si es planeada y la fecha es menor o igual a la fecha del sistema, cambiar a notificada

        if (activity.estado === "Notificada" && new Date(activity.fecha) <= localTime) {
            //supongo que aqui mandamos una alerta
            console.log("Recordatorio de actividad");
        }
    }
}