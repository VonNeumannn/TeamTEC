import Actividad from "@/model/Actividad";
import { Visitor } from "./Visitor";
import Itinerario from "@/model/Itinerario";
//this works like a concrete visitor class
class ReminderVisitor implements Visitor{
    visit(itinerary: Itinerario, activity: Actividad, localTime: Date): void {
        //si es planeada y la fecha es menor o igual a la fecha del sistema, cambiar a notificada
        if (activity.estado === "Notificada" && activity.fecha <= localTime) {
            //supongo que aqui mandamos una alerta
            console.log("Recordatorio de actividad");
        }
    }
}