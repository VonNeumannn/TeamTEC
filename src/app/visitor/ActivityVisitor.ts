import Actividad from "@/model/Actividad";
import { Visitor } from "./Visitor";
import { handlerEditState } from "../../controller/actividadController";
import Itinerario from "@/model/Itinerario";
import { searchItineraryByName } from "@/controller/ItinerarioController";
//this works like a concrete visitor class
class ActivityVisitor implements Visitor{
    visit(itinerary: Itinerario, activity: Actividad, localTime: Date): void {
        //si es planeada y la fecha es menor o igual a la fecha del sistema, cambiar a notificada
        if (activity.estado === "Planeada" && activity.fecha <= localTime) {
            //cambiar estado a notificada en bd
            //aqui paso el nombre del itinerario, pero deberia ser el id
            searchItineraryByName(itinerary.getNombre()).then((itinerario) => {
                handlerEditState(itinerario, activity.id, "Notificada");
                console.log("Activity: noticada");
            });
        }
    }
}