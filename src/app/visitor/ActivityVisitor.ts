import Actividad from "@/model/Actividad";
import { Visitor } from "./Visitor";
import { activityData, handlerEditState } from "../../controller/actividadController";
import Itinerario from "@/model/Itinerario";
import { itinerarioData, searchItineraryByName } from "@/controller/ItinerarioController";
//this works like a concrete visitor class
export class ActivityVisitor implements Visitor{
    visit(itinerary: itinerarioData, activity: activityData, localTime: Date): void {

        //si es planeada y la fecha es menor o igual a la fecha del sistema, cambiar a notificada
        console.log(activity.fecha, localTime)
        if (activity.estado === "Planeada" && activity.fecha <= localTime) {
            //cambiar estado a notificada en bd
            //aqui paso el nombre del itinerario, pero deberia ser el id
            searchItineraryByName(itinerary.nombre).then((itinerario) => {
                handlerEditState(itinerario, activity.id, "Notificada");
                console.log("Activity: notificada");
            });
        }
    }
}