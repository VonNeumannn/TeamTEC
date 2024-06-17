import { Visitor } from "./Visitor";
import Itinerario from "@/model/Itinerario";
import { activityData } from "@/controller/actividadController";
import { itinerarioData } from "@/controller/ItinerarioController";

//this works like a concrete visitor class
export class ReminderVisitor implements Visitor{
    visit(itinerary: itinerarioData, activity: activityData, localTime: Date): void {
        //si es planeada y la fecha es menor o igual a la fecha del sistema, cambiar a notificada
        let fechaActividad = new Date(activity.iniciarRecordatorio);
        let frecuencia = activity.frecuencia;
        let fechaActual = new Date(localTime);

        if (activity.estado === "Notificada" && fechaActividad <= fechaActual) { 
            //recordatorio segun la frecuencia, tomando la fecha de la actividad y la actual * frecuencia

            // Convertir ambas fechas a objetos Date
            const d1 = new Date(fechaActividad);
            const d2 = new Date(fechaActual);
            
            // Calcular la diferencia en milisegundos
            const differenceInTime = d2.getTime() - d1.getTime();
            
            // Convertir la diferencia de milisegundos a días
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);

            // Si la diferencia en días es igual a la frecuencia, enviar recordatorio
            if (differenceInDays % frecuencia == 0) {
                //metan aqui el codigo para enviar el recordatorio
                console.log("Recordatorio de actividad");
            }
        }
    }
}